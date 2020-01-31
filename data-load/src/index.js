const jq = require('node-jq')
 
const filter = '.sentences[].fields[] | select(.name=="word") | .tokens'
const jsonPath = '/data/corpora/odinson/umbc/docs/delorme.com_shu.pages_0_splitted_1000.json'
const options = {}
 
jq.run(filter, jsonPath, options)
  .then((output) => {
    console.log(output)
  })
  .catch((err) => {
    console.error(err)
    // Something went wrong...
  })