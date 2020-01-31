//const sentence_data = require('./sampleSentences')

 const new_sentence_data = {
     "document_id": "unique_document_id",
     "index": 0,
     "tokens": [
        {
            "raw": "Barack",
            "word": "Barack",
            "tag": "NNP",
            "lemma": "Barack",
            "entity": "PERSON",
            "norm": "O",
            "chunk": "B-IP"
        },
        {
            "raw": "Hussein",
            "word": "Hussein",
            "tag": "NNP",
            "lemma": "Hussein",
            "entity": "PERSON",
            "norm": "O",
            "chunk": "B-IP"
        },
        {
            "raw": "Obama",
            "word": "Obama",
            "tag": "NNP",
            "lemma": "Obama",
            "entity": "PERSON",
            "norm": "O",
            "chunk": "B-IP"
        }
    ],
    "graphs": {
        "stanford_basic": {
            "edges": [
                {
                    "source": 3,
                    "destination": 0,
                    "label": "nn"
                },
                {
                    "source": 3,
                    "destination": 1,
                    "label": "nn"
                }
            ],
            "roots": [
                3
            ]
        },
        "stanford_collapsed": {
            "edges": [
                {
                    "source": 3,
                    "destination": 0,
                    "label": "nn"
                },
                {
                    "source": 3,
                    "destination": 1,
                    "label": "nn"
                }
            ],
            "roots": [
                3
            ]
        }
    }
 }

export default new_sentence_data