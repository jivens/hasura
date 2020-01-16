//const sentence_data = require('./sampleSentences')

 const new_sentence_data = {
     "parent_id": "unique_document_id",
     "index": 0,
     "language_id": "Chinese Mandarin spoken by Gus",
     "tokens": [
        {
            "word": "Barack",
            "startOffset": 0,
            "endOffset": 6,
            "tag": "NNP",
            "lemma": "Barack",
            "entity": "PERSON",
            "norm": "O",
            "chunk": "B-IP"
        },
        {
            "word": "Hussein",
            "startOffset": 7,
            "endOffset": 14,
            "tag": "NNP",
            "lemma": "Hussein",
            "entity": "PERSON",
            "norm": "O",
            "chunk": "B-IP"
        },
        {
            "word": "Obama",
            "startOffset": 15,
            "endOffset": 20,
            "tag": "NNP",
            "lemma": "Obama",
            "entity": "PERSON",
            "norm": "O",
            "chunk": "B-IP"
        }
    ],
    "raw": "Barack Hussein Obama",
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