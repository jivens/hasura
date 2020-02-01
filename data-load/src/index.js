const jq = require('node-jq')
 
const filterWords = '{ sentences: [.sentences[].fields[] | select(.name=="word") | { words: .tokens }]}'
const filterTags = '{ sentences: [.sentences[].fields[] | select(.name=="tag") | { tags: .tokens }]}'
const jsonPath = '/data/corpora/odinson/umbc/docs/delorme.com_shu.pages_0_splitted_1000.json'
const options = { output: 'json' }
 
jq.run(filterWords, jsonPath, options)
  .then((s_words) => {
    //console.log(s_words)
    jq.run(filterTags, jsonPath, options)
    .then((s_tags) => {
        //console.log(s_tags)
        for(var i = 0; i < s_words.sentences.length; i++) {
            for (var j = 0; j < s_words.sentences[i].words.length; j++) {
                console.log(s_words.sentences[i].words[j])
                console.log(s_tags.sentences[i].tags[j])
                j++
            }
            i++
        }
    })
  })
  .catch((err) => {
    console.error(err)
    // Something went wrong...
  })