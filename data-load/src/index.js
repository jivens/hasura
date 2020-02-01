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

// id
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
                                    //console.log("=== sentence #", i+1, " ======")
                                    t=0
                                    console.log(s.repeat(t) + "{")
                                    t=1
                                    console.log(s.repeat(t) + "\"document_id\": \"" + s_id + "\",")
                                    console.log(s.repeat(t) + "\"index\": " + i + ",")
                                    console.log(s.repeat(t) + "\"tokens\": [")
                                    for (var j = 0; j < s_words.sentences[i].words.length; j++) {
                                        //console.log("=== token#", j+1, "======")
                                        t=2
                                        console.log(s.repeat(t) + "{")
                                        t=3
                                        console.log(s.repeat(t) + "\"raw\": \"" + s_raws.sentences[i].raws[j] + "\",")
                                        console.log(s.repeat(t) + "\"word\": \"" + s_words.sentences[i].words[j] + "\",")
                                        console.log(s.repeat(t) + "\"tag\": \"" + s_tags.sentences[i].tags[j] + "\",")
                                        console.log(s.repeat(t) + "\"lemma\": \"" + s_lemmas.sentences[i].lemmas[j] + "\",")
                                        console.log(s.repeat(t) + "\"entity\": \"" + s_entities.sentences[i].entities[j] + "\",")
                                        console.log(s.repeat(t) + "\"chunk\": \"" + s_chunks.sentences[i].chunks[j] + "\"")
                                        t=2
                                        if (j == s_words.sentences[i].words.length-1) {
                                            console.log(s.repeat(t) + "}")
                                        } else {
                                            console.log(s.repeat(t) + "},")
                                        }
                                        //console.log("========================")
                                    }
                                    t=1
                                    console.log(s.repeat(t) + "],")
                                    console.log(s.repeat(t) + "\"graphs\": {")
                                    t=2
                                    console.log(s.repeat(t) + "\"odinson\": {")
                                    const s_roots = s_graphs.graphs[i].roots
                                    const s_edges = s_graphs.graphs[i].edges
                                    t=3
                                    console.log(s.repeat(t) + "\"edges\": [")
                                    for (var k=0; k < s_edges.length; k++) {
                                        t=4
                                        console.log(s.repeat(t) + "{")
                                        t=5
                                        console.log(s.repeat(t) + "\"source\": " + s_edges[k][0] + ",")
                                        console.log(s.repeat(t) + "\"destination\": " + s_edges[k][1] + ",")
                                        console.log(s.repeat(t) + "\"label\": \"" + s_edges[k][2] +"\"")
                                        t=4
                                        if (k == s_edges.length-1) {
                                            console.log(s.repeat(t) + "}")
                                        } else {
                                            console.log(s.repeat(t) + "},")
                                        }
                                    }
                                    t=3
                                    console.log(s.repeat(t) + "],")
                                    t=3
                                    console.log(s.repeat(t) + "\"roots\": [")
                                    for (var k=0; k < s_roots.length; k++) {
                                        t=4
                                        if (k == s_roots.length-1) {
                                            console.log(s.repeat(t) + s_roots[k])
                                        } else {
                                            console.log(s.repeat(t) + s_roots[k] + ",")
                                        }
                                    }
                                    t=3
                                    console.log(s.repeat(t) + "]")
                                    t=2
                                    console.log(s.repeat(t) + "}")
                                    t=1
                                    console.log(s.repeat(t) + "}")
                                    t=0
                                    console.log("}")
                                    //console.log("=============================")
                                }
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