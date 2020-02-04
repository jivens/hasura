const {useMutation} = require("@apollo/react-hooks")
const gql = require('graphql-tag');
const jq = require('node-jq')

 
const filterId = '.id'
const filterRaws = '{ sentences: [.sentences[].fields[] | select(.name=="raw") | { raws: .tokens }]}'
const filterWords = '{ sentences: [.sentences[].fields[] | select(.name=="word") | { words: .tokens }]}'
const filterTags = '{ sentences: [.sentences[].fields[] | select(.name=="tag") | { tags: .tokens }]}'
const filterLemmas = '{ sentences: [.sentences[].fields[] | select(.name=="lemma") | { lemmas: .tokens }]}'
const filterEntities = '{ sentences: [.sentences[].fields[] | select(.name=="entity") | { entities: .tokens }]}'
const filterChunks = '{ sentences: [.sentences[].fields[] | select(.name=="chunk") | { chunks: .tokens }]}'
const filterGraphs = '{ graphs: [.sentences[].fields[] | select(.name=="dependencies")]}'
const jsonPath = '/data/corpora/odinson/umbc/docs/delorme.com_shu.pages_0_splitted_1000.json'
const options = { output: 'json' }
let t = 0
const s = "   "
let o = ""
let counts = {
    "entities": {
        "zzztotal": 0
    },
    "tags": {
        "zzztotal": 0
    },
    "chunks": {
        "zzztotal": 0
    },
    "labels": {
        "zzztotal": 0
    }
}

// Add a task -- task is a sentence annotation in this case
const ADD_TASK = gql `
  mutation insertTask($task_description: String!) {
    insert_tasks(objects: [{
      completed: false,
      task_type: "sentence_annotation",
      task_description: $task_description,
    }])
    {
      returning {
        id
      }
    }
  }
`;

// Add a datum to a task
const ADD_DATUM = gql `
mutation insertDatum($task_id: Int!, $datum: jsonb!) {
    insert_datum(objects: [{
      task_id: $task_id,
      original_annotation: $datum,
      annotation_type: "sentence_annotation",
      creator_id: "auth0|5e139e8e9e24280eb4842c16"
    }]) {
      returning {
        id
      }
    }
  }
`;

const addTaskAndDatums = () => {

    // Let's add the task here first
    // Note that I am not waiting for it to finish or to look for errors
    // So this better work
    //const [addTask, { data: taskData, loading: taskLoading, error: taskError}] = useMutation(ADD_TASK);
    // Run it
    //addTask({variables: {
    //    task_description: "Annotate the sentences of delorme.com_shu.pages_0_splitted_1000.json"
    //}})

    // Create a mutation to add the datums we want
    //const [addDatum, { loading: datumLoading, error: datumError}] = useMutation(ADD_DATUM);

    // id, index = array index of this sentence in the document
    // raw, word, tag, lemma, entity, chunk
    // graphs (dependencies->roots, dependencies->edges)
    jq.run(filterId, jsonPath, options)
    .then((s_id) => {
        jq.run(filterGraphs, jsonPath, options)
        .then((s_graphs) => {
            jq.run(filterRaws, jsonPath, options)
            .then((s_raws) => {
                jq.run(filterWords, jsonPath, options)
                .then((s_words) => {
                    jq.run(filterTags, jsonPath, options)
                    .then((s_tags) => {
                        jq.run(filterLemmas, jsonPath, options)
                        .then((s_lemmas) => {
                            jq.run(filterEntities, jsonPath, options)
                            .then((s_entities) => {
                                jq.run(filterChunks, jsonPath, options)
                                .then((s_chunks) => {
                                    for(var i = 0; i < s_words.sentences.length; i++) {
                                        //o += "=== sentence #", i+1, " ======")
                                        t=0
                                        o = ""
                                        o += s.repeat(t) + "{\n"
                                        t=1
                                        o += s.repeat(t) + "\"document_id\": \"" + s_id + "\",\n"
                                        o += s.repeat(t) + "\"index\": " + i + ",\n"
                                        o += s.repeat(t) + "\"tokens\": [\n"
                                        for (var j = 0; j < s_words.sentences[i].words.length; j++) {
                                            //o += "=== token#", j+1, "======")
                                            t=2
                                            o += s.repeat(t) + "{\n"
                                            t=3
                                            const current_tag = s_tags.sentences[i].tags[j].replace(/^\'(.+)\'$/,'$1')
                                            const current_entity = s_entities.sentences[i].entities[j].replace(/^\'(.+)\'$/,'$1')
                                            const current_chunk = s_chunks.sentences[i].chunks[j].replace(/^\'(.+)\'$/,'$1')
                                            o += s.repeat(t) + "\"raw\": \"" + s_raws.sentences[i].raws[j] + "\",\n"
                                            o += s.repeat(t) + "\"word\": \"" + s_words.sentences[i].words[j] + "\",\n"
                                            o += s.repeat(t) + "\"tag\": \"" + s_tags.sentences[i].tags[j] + "\",\n"
                                            o += s.repeat(t) + "\"lemma\": \"" + s_lemmas.sentences[i].lemmas[j] + "\",\n"
                                            o += s.repeat(t) + "\"entity\": \"" + s_entities.sentences[i].entities[j] + "\",\n"
                                            o += s.repeat(t) + "\"chunk\": \"" + s_chunks.sentences[i].chunks[j] + "\"\n"
                                            if (Object.keys(counts.entities).includes(current_entity)) {
                                                counts.entities[current_entity] += 1
                                            } else {
                                                counts.entities[current_entity] = 1
                                            }
                                            counts.entities.zzztotal += 1
                                            if (Object.keys(counts.tags).includes(current_tag)) {
                                                counts.tags[current_tag] += 1
                                            } else {
                                                counts.tags[current_tag] = 1
                                            }
                                            counts.tags.zzztotal += 1
                                            if (Object.keys(counts.chunks).includes(current_chunk)) {
                                                counts.chunks[current_chunk] += 1
                                            } else {
                                                counts.chunks[current_chunk] = 1
                                            }
                                            counts.chunks.zzztotal += 1
                                            t=2
                                            if (j == s_words.sentences[i].words.length-1) {
                                                o += s.repeat(t) + "}\n"
                                            } else {
                                                o += s.repeat(t) + "},\n"
                                            }
                                            //o += "========================")
                                        }
                                        t=1
                                        o += s.repeat(t) + "],\n"
                                        o += s.repeat(t) + "\"graphs\": {\n"
                                        t=2
                                        o += s.repeat(t) + "\"odinson\": {\n"
                                        const s_roots = s_graphs.graphs[i].roots
                                        const s_edges = s_graphs.graphs[i].edges
                                        t=3
                                        o += s.repeat(t) + "\"edges\": [\n"
                                        for (var k=0; k < s_edges.length; k++) {
                                            t=4
                                            o += s.repeat(t) + "{\n"
                                            t=5
                                            o += s.repeat(t) + "\"source\": " + s_edges[k][0] + ",\n"
                                            o += s.repeat(t) + "\"destination\": " + s_edges[k][1] + ",\n"
                                            o += s.repeat(t) + "\"label\": \"" + s_edges[k][2] +"\"\n"
                                            t=4
                                            if (k == s_edges.length-1) {
                                                o += s.repeat(t) + "}\n"
                                            } else {
                                                o += s.repeat(t) + "},\n"
                                            }
                                            const current_label = s_edges[k][2].replace(/^\'(.+)\'$/,'$1')
                                            if (Object.keys(counts.labels).includes(current_label)) {
                                                counts.labels[current_label] += 1
                                            } else {
                                                counts.labels[current_label] = 1
                                            }
                                            counts.labels.zzztotal += 1
                                        }
                                        t=3
                                        o += s.repeat(t) + "],\n"
                                        t=3
                                        o += s.repeat(t) + "\"roots\": [\n"
                                        for (var k=0; k < s_roots.length; k++) {
                                            t=4
                                            if (k == s_roots.length-1) {
                                                o += s.repeat(t) + s_roots[k] + "\n"
                                            } else {
                                                o += s.repeat(t) + s_roots[k] + ",\n"
                                            }
                                        }
                                        t=3
                                        o += s.repeat(t) + "]\n"
                                        t=2
                                        o += s.repeat(t) + "}\n"
                                        t=1
                                        o += s.repeat(t) + "}\n"
                                        t=0
                                        o += "}"

                                        //console.log(o)
                                        // Pick the last 25
                                        if (i >= 880) {
                                            //    addDatum({variables: {
                                            //        task_id: task_data.id,
                                            //        datum: o
                                            //    }})
                                            console.log("{")
                                            if (i < 890) {
                                                console.log("\"task_id\": 1,")
                                            } else if (i < 900) {
                                                console.log("\"task_id\": 2,")
                                            } else {
                                                console.log("\"task_id\": 3,")
                                            }
                                            console.log("\"datum\": " + o)
                                            console.log("}\n")
                                        }
                                        //o += "=============================")
                                    }
                                    console.log("File processed: " + s_id)
                                    console.log("Number of sentences: " + i)
                                    console.log(Object.keys(counts.entities).sort().reduce((a, c) => (a[c] = counts.entities[c], a), {}));
                                    console.log(Object.keys(counts.tags).sort().reduce((a, c) => (a[c] = counts.tags[c], a), {}));
                                    console.log(Object.keys(counts.chunks).sort().reduce((a, c) => (a[c] = counts.chunks[c], a), {}));
                                    console.log(Object.keys(counts.labels).sort().reduce((a, c) => (a[c] = counts.labels[c], a), {}));
                                    //console.log(JSON.stringify(counts))
                                })
                            })
                        })
                    })
                })
            })
        })
    })
    .catch((err) => {
        console.error(err)
        // Something went wrong...
    })

}

// Run the whole shebang
addTaskAndDatums()
