import { useMountedLayoutEffect } from "react-table"

const data = {
    "sentences": [
      {
        "words": [
          "Barack",
          "Hussein",
          "Obama",
          "II",
          "-LRB-",
          "US",
          "i/b",
          "əˈrɑːk",
          "huːˈseɪn",
          "oʊˈbɑːmə",
          "/",
          ";",
          "-LSB-",
          "1",
          "-RSB-",
          "-LSB-",
          "2",
          "-RSB-",
          "born",
          "August",
          "4",
          ",",
          "1961",
          "-RRB-",
          "is",
          "an",
          "American",
          "politician",
          "serving",
          "as",
          "the",
          "44th",
          "President",
          "of",
          "the",
          "United",
          "States",
          "."
        ],
        "startOffsets": [
          0,
          7,
          15,
          21,
          24,
          25,
          28,
          31,
          38,
          47,
          55,
          56,
          57,
          58,
          59,
          60,
          61,
          62,
          64,
          69,
          76,
          77,
          79,
          83,
          85,
          88,
          91,
          100,
          111,
          119,
          122,
          126,
          131,
          141,
          144,
          148,
          155,
          161
        ],
        "endOffsets": [
          6,
          14,
          20,
          23,
          25,
          27,
          31,
          37,
          46,
          55,
          56,
          57,
          58,
          59,
          60,
          61,
          62,
          63,
          68,
          75,
          77,
          78,
          83,
          84,
          87,
          90,
          99,
          110,
          118,
          121,
          125,
          130,
          140,
          143,
          147,
          154,
          161,
          162
        ],
        "tags": [
          "NNP",
          "NNP",
          "NNP",
          "NNP",
          "-LRB-",
          "NNP",
          "JJ",
          "NN",
          "JJ",
          "NN",
          ":",
          ":",
          "-LRB-",
          "LS",
          "-RRB-",
          "-LRB-",
          "CD",
          "-RRB-",
          "VBN",
          "NNP",
          "CD",
          ",",
          "CD",
          "-RRB-",
          "VBZ",
          "DT",
          "JJ",
          "NN",
          "VBG",
          "IN",
          "DT",
          "JJ",
          "NN",
          "IN",
          "DT",
          "NNP",
          "NNPS",
          "."
        ],
        "lemmas": [
          "Barack",
          "Hussein",
          "Obama",
          "II",
          "-lrb-",
          "US",
          "i/b",
          "əˈrɑːk",
          "huːˈseɪn",
          "oʊˈbɑːmə",
          "/",
          ";",
          "-lsb-",
          "1",
          "-rsb-",
          "-lsb-",
          "2",
          "-rsb-",
          "bear",
          "August",
          "4",
          ",",
          "1961",
          "-rrb-",
          "be",
          "a",
          "american",
          "politician",
          "serve",
          "as",
          "the",
          "44th",
          "president",
          "of",
          "the",
          "United",
          "States",
          "."
        ],
        "entities": [
          "PERSON",
          "PERSON",
          "PERSON",
          "PERSON",
          "O",
          "LOCATION",
          "O",
          "O",
          "O",
          "O",
          "O",
          "O",
          "O",
          "NUMBER",
          "O",
          "O",
          "NUMBER",
          "O",
          "O",
          "DATE",
          "DATE",
          "DATE",
          "DATE",
          "O",
          "O",
          "O",
          "MISC",
          "O",
          "O",
          "O",
          "O",
          "ORDINAL",
          "O",
          "O",
          "O",
          "LOCATION",
          "LOCATION",
          "O"
        ],
        "norms": [
          "O",
          "O",
          "O",
          "O",
          "O",
          "O",
          "O",
          "O",
          "O",
          "O",
          "O",
          "O",
          "O",
          "1.0",
          "O",
          "O",
          "2.0",
          "O",
          "O",
          "1961-08-04",
          "1961-08-04",
          "1961-08-04",
          "1961-08-04",
          "O",
          "O",
          "O",
          "O",
          "O",
          "O",
          "O",
          "O",
          "44.0",
          "O",
          "O",
          "O",
          "O",
          "O",
          "O"
        ],
        "chunks": [
          "B-NP",
          "I-NP",
          "I-NP",
          "I-NP",
          "O",
          "B-NP",
          "I-NP",
          "I-NP",
          "I-NP",
          "I-NP",
          "O",
          "O",
          "O",
          "O",
          "O",
          "O",
          "O",
          "O",
          "B-VP",
          "B-NP",
          "I-NP",
          "I-NP",
          "I-NP",
          "O",
          "B-VP",
          "B-NP",
          "I-NP",
          "I-NP",
          "B-VP",
          "B-PP",
          "B-NP",
          "I-NP",
          "I-NP",
          "B-PP",
          "B-NP",
          "I-NP",
          "I-NP",
          "O"
        ],
        "graphs": {
          "stanford-basic": {
            "edges": [
              {
                "source": 3,
                "destination": 0,
                "relation": "nn"
              },
              {
                "source": 3,
                "destination": 1,
                "relation": "nn"
              },
              {
                "source": 3,
                "destination": 2,
                "relation": "nn"
              },
              {
                "source": 3,
                "destination": 37,
                "relation": "punct"
              },
              {
                "source": 3,
                "destination": 9,
                "relation": "appos"
              },
              {
                "source": 3,
                "destination": 11,
                "relation": "punct"
              },
              {
                "source": 3,
                "destination": 27,
                "relation": "dep"
              },
              {
                "source": 9,
                "destination": 4,
                "relation": "punct"
              },
              {
                "source": 9,
                "destination": 5,
                "relation": "nn"
              },
              {
                "source": 9,
                "destination": 6,
                "relation": "amod"
              },
              {
                "source": 9,
                "destination": 7,
                "relation": "nn"
              },
              {
                "source": 9,
                "destination": 8,
                "relation": "amod"
              },
              {
                "source": 9,
                "destination": 10,
                "relation": "punct"
              },
              {
                "source": 13,
                "destination": 18,
                "relation": "dep"
              },
              {
                "source": 13,
                "destination": 12,
                "relation": "punct"
              },
              {
                "source": 13,
                "destination": 14,
                "relation": "punct"
              },
              {
                "source": 18,
                "destination": 15,
                "relation": "punct"
              },
              {
                "source": 18,
                "destination": 16,
                "relation": "dep"
              },
              {
                "source": 18,
                "destination": 17,
                "relation": "punct"
              },
              {
                "source": 18,
                "destination": 19,
                "relation": "tmod"
              },
              {
                "source": 18,
                "destination": 23,
                "relation": "punct"
              },
              {
                "source": 19,
                "destination": 20,
                "relation": "num"
              },
              {
                "source": 19,
                "destination": 21,
                "relation": "punct"
              },
              {
                "source": 19,
                "destination": 22,
                "relation": "num"
              },
              {
                "source": 27,
                "destination": 24,
                "relation": "cop"
              },
              {
                "source": 27,
                "destination": 25,
                "relation": "det"
              },
              {
                "source": 27,
                "destination": 26,
                "relation": "amod"
              },
              {
                "source": 27,
                "destination": 28,
                "relation": "vmod"
              },
              {
                "source": 27,
                "destination": 13,
                "relation": "dep"
              },
              {
                "source": 28,
                "destination": 29,
                "relation": "prep"
              },
              {
                "source": 29,
                "destination": 32,
                "relation": "pobj"
              },
              {
                "source": 32,
                "destination": 31,
                "relation": "amod"
              },
              {
                "source": 32,
                "destination": 33,
                "relation": "prep"
              },
              {
                "source": 32,
                "destination": 30,
                "relation": "det"
              },
              {
                "source": 33,
                "destination": 36,
                "relation": "pobj"
              },
              {
                "source": 36,
                "destination": 34,
                "relation": "det"
              },
              {
                "source": 36,
                "destination": 35,
                "relation": "nn"
              }
            ],
            "roots": [
              3
            ]
          },
          "stanford-collapsed": {
            "edges": [
              {
                "source": 3,
                "destination": 0,
                "relation": "nn"
              },
              {
                "source": 3,
                "destination": 1,
                "relation": "nn"
              },
              {
                "source": 3,
                "destination": 2,
                "relation": "nn"
              },
              {
                "source": 3,
                "destination": 37,
                "relation": "punct"
              },
              {
                "source": 3,
                "destination": 9,
                "relation": "appos"
              },
              {
                "source": 3,
                "destination": 11,
                "relation": "punct"
              },
              {
                "source": 3,
                "destination": 27,
                "relation": "dep"
              },
              {
                "source": 9,
                "destination": 4,
                "relation": "punct"
              },
              {
                "source": 9,
                "destination": 5,
                "relation": "nn"
              },
              {
                "source": 9,
                "destination": 6,
                "relation": "amod"
              },
              {
                "source": 9,
                "destination": 7,
                "relation": "nn"
              },
              {
                "source": 9,
                "destination": 8,
                "relation": "amod"
              },
              {
                "source": 9,
                "destination": 10,
                "relation": "punct"
              },
              {
                "source": 13,
                "destination": 18,
                "relation": "dep"
              },
              {
                "source": 13,
                "destination": 12,
                "relation": "punct"
              },
              {
                "source": 13,
                "destination": 14,
                "relation": "punct"
              },
              {
                "source": 18,
                "destination": 15,
                "relation": "punct"
              },
              {
                "source": 18,
                "destination": 16,
                "relation": "dep"
              },
              {
                "source": 18,
                "destination": 17,
                "relation": "punct"
              },
              {
                "source": 18,
                "destination": 19,
                "relation": "tmod"
              },
              {
                "source": 18,
                "destination": 23,
                "relation": "punct"
              },
              {
                "source": 19,
                "destination": 20,
                "relation": "num"
              },
              {
                "source": 19,
                "destination": 21,
                "relation": "punct"
              },
              {
                "source": 19,
                "destination": 22,
                "relation": "num"
              },
              {
                "source": 27,
                "destination": 24,
                "relation": "cop"
              },
              {
                "source": 27,
                "destination": 25,
                "relation": "det"
              },
              {
                "source": 27,
                "destination": 26,
                "relation": "amod"
              },
              {
                "source": 27,
                "destination": 28,
                "relation": "vmod"
              },
              {
                "source": 27,
                "destination": 13,
                "relation": "dep"
              },
              {
                "source": 28,
                "destination": 32,
                "relation": "prep_as"
              },
              {
                "source": 32,
                "destination": 31,
                "relation": "amod"
              },
              {
                "source": 32,
                "destination": 36,
                "relation": "prep_of"
              },
              {
                "source": 32,
                "destination": 30,
                "relation": "det"
              },
              {
                "source": 36,
                "destination": 34,
                "relation": "det"
              },
              {
                "source": 36,
                "destination": 35,
                "relation": "nn"
              }
            ],
            "roots": [
              3
            ]
          }
        }
      },
      {
        "words": [
          "He",
          "is",
          "the",
          "first",
          "African",
          "American",
          "to",
          "hold",
          "the",
          "office",
          ",",
          "as",
          "well",
          "as",
          "the",
          "first",
          "president",
          "born",
          "outside",
          "of",
          "the",
          "continental",
          "United",
          "States",
          "."
        ],
        "startOffsets": [
          163,
          166,
          169,
          173,
          179,
          187,
          196,
          199,
          204,
          208,
          214,
          216,
          219,
          224,
          227,
          231,
          237,
          247,
          252,
          260,
          263,
          267,
          279,
          286,
          292
        ],
        "endOffsets": [
          165,
          168,
          172,
          178,
          186,
          195,
          198,
          203,
          207,
          214,
          215,
          218,
          223,
          226,
          230,
          236,
          246,
          251,
          259,
          262,
          266,
          278,
          285,
          292,
          293
        ],
        "tags": [
          "PRP",
          "VBZ",
          "DT",
          "JJ",
          "JJ",
          "JJ",
          "TO",
          "VB",
          "DT",
          "NN",
          ",",
          "RB",
          "RB",
          "IN",
          "DT",
          "JJ",
          "NN",
          "VBN",
          "IN",
          "IN",
          "DT",
          "JJ",
          "NNP",
          "NNPS",
          "."
        ],
        "lemmas": [
          "he",
          "be",
          "the",
          "first",
          "african",
          "american",
          "to",
          "hold",
          "the",
          "office",
          ",",
          "as",
          "well",
          "as",
          "the",
          "first",
          "president",
          "bear",
          "outside",
          "of",
          "the",
          "continental",
          "United",
          "States",
          "."
        ],
        "entities": [
          "O",
          "O",
          "O",
          "ORDINAL",
          "MISC",
          "MISC",
          "O",
          "O",
          "O",
          "O",
          "O",
          "O",
          "O",
          "O",
          "O",
          "ORDINAL",
          "O",
          "O",
          "O",
          "O",
          "O",
          "O",
          "LOCATION",
          "LOCATION",
          "O"
        ],
        "norms": [
          "O",
          "O",
          "O",
          "1.0",
          "O",
          "O",
          "O",
          "O",
          "O",
          "O",
          "O",
          "O",
          "O",
          "O",
          "O",
          "1.0",
          "O",
          "O",
          "O",
          "O",
          "O",
          "O",
          "O",
          "O",
          "O"
        ],
        "chunks": [
          "B-NP",
          "B-VP",
          "B-NP",
          "I-NP",
          "I-NP",
          "I-NP",
          "B-VP",
          "I-VP",
          "B-NP",
          "I-NP",
          "O",
          "B-CONJP",
          "I-CONJP",
          "I-CONJP",
          "B-NP",
          "I-NP",
          "I-NP",
          "B-VP",
          "B-ADVP",
          "B-PP",
          "B-NP",
          "I-NP",
          "I-NP",
          "I-NP",
          "O"
        ],
        "graphs": {
          "stanford-basic": {
            "edges": [
              {
                "source": 5,
                "destination": 2,
                "relation": "det"
              },
              {
                "source": 5,
                "destination": 3,
                "relation": "amod"
              },
              {
                "source": 5,
                "destination": 4,
                "relation": "amod"
              },
              {
                "source": 5,
                "destination": 7,
                "relation": "xcomp"
              },
              {
                "source": 5,
                "destination": 24,
                "relation": "punct"
              },
              {
                "source": 5,
                "destination": 0,
                "relation": "nsubj"
              },
              {
                "source": 5,
                "destination": 1,
                "relation": "cop"
              },
              {
                "source": 7,
                "destination": 6,
                "relation": "aux"
              },
              {
                "source": 7,
                "destination": 9,
                "relation": "dobj"
              },
              {
                "source": 7,
                "destination": 10,
                "relation": "punct"
              },
              {
                "source": 7,
                "destination": 12,
                "relation": "cc"
              },
              {
                "source": 7,
                "destination": 16,
                "relation": "conj"
              },
              {
                "source": 9,
                "destination": 8,
                "relation": "det"
              },
              {
                "source": 12,
                "destination": 11,
                "relation": "advmod"
              },
              {
                "source": 12,
                "destination": 13,
                "relation": "mwe"
              },
              {
                "source": 16,
                "destination": 14,
                "relation": "det"
              },
              {
                "source": 16,
                "destination": 15,
                "relation": "amod"
              },
              {
                "source": 16,
                "destination": 17,
                "relation": "vmod"
              },
              {
                "source": 17,
                "destination": 18,
                "relation": "prep"
              },
              {
                "source": 18,
                "destination": 19,
                "relation": "prep"
              },
              {
                "source": 19,
                "destination": 23,
                "relation": "pobj"
              },
              {
                "source": 23,
                "destination": 20,
                "relation": "det"
              },
              {
                "source": 23,
                "destination": 21,
                "relation": "amod"
              },
              {
                "source": 23,
                "destination": 22,
                "relation": "nn"
              }
            ],
            "roots": [
              5
            ]
          },
          "stanford-collapsed": {
            "edges": [
              {
                "source": 5,
                "destination": 2,
                "relation": "det"
              },
              {
                "source": 5,
                "destination": 3,
                "relation": "amod"
              },
              {
                "source": 5,
                "destination": 4,
                "relation": "amod"
              },
              {
                "source": 5,
                "destination": 7,
                "relation": "xcomp"
              },
              {
                "source": 5,
                "destination": 24,
                "relation": "punct"
              },
              {
                "source": 5,
                "destination": 0,
                "relation": "nsubj"
              },
              {
                "source": 5,
                "destination": 16,
                "relation": "xcomp"
              },
              {
                "source": 5,
                "destination": 1,
                "relation": "cop"
              },
              {
                "source": 7,
                "destination": 6,
                "relation": "aux"
              },
              {
                "source": 7,
                "destination": 9,
                "relation": "dobj"
              },
              {
                "source": 7,
                "destination": 10,
                "relation": "punct"
              },
              {
                "source": 7,
                "destination": 16,
                "relation": "conj_and"
              },
              {
                "source": 9,
                "destination": 8,
                "relation": "det"
              },
              {
                "source": 16,
                "destination": 14,
                "relation": "det"
              },
              {
                "source": 16,
                "destination": 15,
                "relation": "amod"
              },
              {
                "source": 16,
                "destination": 17,
                "relation": "vmod"
              },
              {
                "source": 17,
                "destination": 23,
                "relation": "prep_outside_of"
              },
              {
                "source": 23,
                "destination": 20,
                "relation": "det"
              },
              {
                "source": 23,
                "destination": 21,
                "relation": "amod"
              },
              {
                "source": 23,
                "destination": 22,
                "relation": "nn"
              }
            ],
            "roots": [
              5
            ]
          }
        }
      },
      {
        "words": [
          "Born",
          "in",
          "Honolulu",
          ",",
          "Hawaii",
          ",",
          "Obama",
          "is",
          "a",
          "graduate",
          "of",
          "Columbia",
          "University",
          "and",
          "Harvard",
          "Law",
          "School",
          ",",
          "where",
          "he",
          "served",
          "as",
          "president",
          "of",
          "the",
          "Harvard",
          "Law",
          "Review",
          "."
        ],
        "startOffsets": [
          294,
          299,
          302,
          310,
          312,
          318,
          320,
          326,
          329,
          331,
          340,
          343,
          352,
          363,
          367,
          375,
          379,
          385,
          387,
          393,
          396,
          403,
          406,
          416,
          419,
          423,
          431,
          435,
          441
        ],
        "endOffsets": [
          298,
          301,
          310,
          311,
          318,
          319,
          325,
          328,
          330,
          339,
          342,
          351,
          362,
          366,
          374,
          378,
          385,
          386,
          392,
          395,
          402,
          405,
          415,
          418,
          422,
          430,
          434,
          441,
          442
        ],
        "tags": [
          "VBN",
          "IN",
          "NNP",
          ",",
          "NNP",
          ",",
          "NNP",
          "VBZ",
          "DT",
          "NN",
          "IN",
          "NNP",
          "NNP",
          "CC",
          "NNP",
          "NNP",
          "NNP",
          ",",
          "WRB",
          "PRP",
          "VBD",
          "IN",
          "NN",
          "IN",
          "DT",
          "NNP",
          "NNP",
          "NNP",
          "."
        ],
        "lemmas": [
          "bear",
          "in",
          "Honolulu",
          ",",
          "Hawaii",
          ",",
          "Obama",
          "be",
          "a",
          "graduate",
          "of",
          "Columbia",
          "University",
          "and",
          "Harvard",
          "Law",
          "School",
          ",",
          "where",
          "he",
          "serve",
          "as",
          "president",
          "of",
          "the",
          "Harvard",
          "Law",
          "Review",
          "."
        ],
        "entities": [
          "O",
          "O",
          "LOCATION",
          "O",
          "LOCATION",
          "O",
          "PERSON",
          "O",
          "O",
          "O",
          "O",
          "ORGANIZATION",
          "ORGANIZATION",
          "O",
          "ORGANIZATION",
          "ORGANIZATION",
          "ORGANIZATION",
          "O",
          "O",
          "O",
          "O",
          "O",
          "O",
          "O",
          "O",
          "ORGANIZATION",
          "ORGANIZATION",
          "ORGANIZATION",
          "O"
        ],
        "norms": [
          "O",
          "O",
          "O",
          "O",
          "O",
          "O",
          "O",
          "O",
          "O",
          "O",
          "O",
          "O",
          "O",
          "O",
          "O",
          "O",
          "O",
          "O",
          "O",
          "O",
          "O",
          "O",
          "O",
          "O",
          "O",
          "O",
          "O",
          "O",
          "O"
        ],
        "chunks": [
          "B-VP",
          "B-PP",
          "B-NP",
          "O",
          "B-NP",
          "O",
          "B-NP",
          "B-VP",
          "B-NP",
          "I-NP",
          "B-PP",
          "B-NP",
          "I-NP",
          "O",
          "B-NP",
          "I-NP",
          "I-NP",
          "O",
          "B-ADVP",
          "B-NP",
          "B-VP",
          "B-PP",
          "B-NP",
          "B-PP",
          "B-NP",
          "I-NP",
          "I-NP",
          "I-NP",
          "O"
        ],
        "graphs": {
          "stanford-basic": {
            "edges": [
              {
                "source": 9,
                "destination": 5,
                "relation": "punct"
              },
              {
                "source": 9,
                "destination": 6,
                "relation": "nsubj"
              },
              {
                "source": 9,
                "destination": 7,
                "relation": "cop"
              },
              {
                "source": 9,
                "destination": 8,
                "relation": "det"
              },
              {
                "source": 9,
                "destination": 10,
                "relation": "prep"
              },
              {
                "source": 9,
                "destination": 28,
                "relation": "punct"
              },
              {
                "source": 9,
                "destination": 0,
                "relation": "vmod"
              },
              {
                "source": 10,
                "destination": 12,
                "relation": "pobj"
              },
              {
                "source": 12,
                "destination": 11,
                "relation": "nn"
              },
              {
                "source": 12,
                "destination": 13,
                "relation": "cc"
              },
              {
                "source": 12,
                "destination": 16,
                "relation": "conj"
              },
              {
                "source": 12,
                "destination": 17,
                "relation": "punct"
              },
              {
                "source": 12,
                "destination": 20,
                "relation": "rcmod"
              },
              {
                "source": 16,
                "destination": 14,
                "relation": "nn"
              },
              {
                "source": 16,
                "destination": 15,
                "relation": "nn"
              },
              {
                "source": 20,
                "destination": 21,
                "relation": "prep"
              },
              {
                "source": 20,
                "destination": 18,
                "relation": "advmod"
              },
              {
                "source": 20,
                "destination": 19,
                "relation": "nsubj"
              },
              {
                "source": 21,
                "destination": 22,
                "relation": "pobj"
              },
              {
                "source": 22,
                "destination": 23,
                "relation": "prep"
              },
              {
                "source": 23,
                "destination": 27,
                "relation": "pobj"
              },
              {
                "source": 27,
                "destination": 24,
                "relation": "det"
              },
              {
                "source": 27,
                "destination": 25,
                "relation": "nn"
              },
              {
                "source": 27,
                "destination": 26,
                "relation": "nn"
              },
              {
                "source": 0,
                "destination": 1,
                "relation": "prep"
              },
              {
                "source": 1,
                "destination": 2,
                "relation": "pobj"
              },
              {
                "source": 2,
                "destination": 3,
                "relation": "punct"
              },
              {
                "source": 2,
                "destination": 4,
                "relation": "appos"
              }
            ],
            "roots": [
              9
            ]
          },
          "stanford-collapsed": {
            "edges": [
              {
                "source": 9,
                "destination": 5,
                "relation": "punct"
              },
              {
                "source": 9,
                "destination": 6,
                "relation": "nsubj"
              },
              {
                "source": 9,
                "destination": 7,
                "relation": "cop"
              },
              {
                "source": 9,
                "destination": 8,
                "relation": "det"
              },
              {
                "source": 9,
                "destination": 12,
                "relation": "prep_of"
              },
              {
                "source": 9,
                "destination": 28,
                "relation": "punct"
              },
              {
                "source": 9,
                "destination": 0,
                "relation": "vmod"
              },
              {
                "source": 9,
                "destination": 16,
                "relation": "prep_of"
              },
              {
                "source": 12,
                "destination": 11,
                "relation": "nn"
              },
              {
                "source": 12,
                "destination": 16,
                "relation": "conj_and"
              },
              {
                "source": 12,
                "destination": 17,
                "relation": "punct"
              },
              {
                "source": 12,
                "destination": 20,
                "relation": "rcmod"
              },
              {
                "source": 16,
                "destination": 14,
                "relation": "nn"
              },
              {
                "source": 16,
                "destination": 15,
                "relation": "nn"
              },
              {
                "source": 20,
                "destination": 22,
                "relation": "prep_as"
              },
              {
                "source": 20,
                "destination": 18,
                "relation": "advmod"
              },
              {
                "source": 20,
                "destination": 19,
                "relation": "nsubj"
              },
              {
                "source": 22,
                "destination": 27,
                "relation": "prep_of"
              },
              {
                "source": 27,
                "destination": 24,
                "relation": "det"
              },
              {
                "source": 27,
                "destination": 25,
                "relation": "nn"
              },
              {
                "source": 27,
                "destination": 26,
                "relation": "nn"
              },
              {
                "source": 0,
                "destination": 2,
                "relation": "prep_in"
              },
              {
                "source": 2,
                "destination": 3,
                "relation": "punct"
              },
              {
                "source": 2,
                "destination": 4,
                "relation": "appos"
              }
            ],
            "roots": [
              9
            ]
          }
        }
      },
      {
        "words": [
          "He",
          "was",
          "a",
          "community",
          "organizer",
          "in",
          "Chicago",
          "before",
          "earning",
          "his",
          "law",
          "degree",
          "."
        ],
        "startOffsets": [
          443,
          446,
          450,
          452,
          462,
          472,
          475,
          483,
          490,
          498,
          502,
          506,
          512
        ],
        "endOffsets": [
          445,
          449,
          451,
          461,
          471,
          474,
          482,
          489,
          497,
          501,
          505,
          512,
          513
        ],
        "tags": [
          "PRP",
          "VBD",
          "DT",
          "NN",
          "NN",
          "IN",
          "NNP",
          "IN",
          "VBG",
          "PRP$",
          "NN",
          "NN",
          "."
        ],
        "lemmas": [
          "he",
          "be",
          "a",
          "community",
          "organizer",
          "in",
          "Chicago",
          "before",
          "earn",
          "he",
          "law",
          "degree",
          "."
        ],
        "entities": [
          "O",
          "O",
          "O",
          "O",
          "O",
          "O",
          "LOCATION",
          "O",
          "O",
          "O",
          "O",
          "O",
          "O"
        ],
        "norms": [
          "O",
          "O",
          "O",
          "O",
          "O",
          "O",
          "O",
          "O",
          "O",
          "O",
          "O",
          "O",
          "O"
        ],
        "chunks": [
          "B-NP",
          "B-VP",
          "B-NP",
          "I-NP",
          "I-NP",
          "B-PP",
          "B-NP",
          "B-PP",
          "B-VP",
          "B-NP",
          "I-NP",
          "I-NP",
          "O"
        ],
        "graphs": {
          "stanford-basic": {
            "edges": [
              {
                "source": 8,
                "destination": 11,
                "relation": "dobj"
              },
              {
                "source": 11,
                "destination": 9,
                "relation": "poss"
              },
              {
                "source": 11,
                "destination": 10,
                "relation": "nn"
              },
              {
                "source": 4,
                "destination": 12,
                "relation": "punct"
              },
              {
                "source": 4,
                "destination": 0,
                "relation": "nsubj"
              },
              {
                "source": 4,
                "destination": 1,
                "relation": "cop"
              },
              {
                "source": 4,
                "destination": 2,
                "relation": "det"
              },
              {
                "source": 4,
                "destination": 3,
                "relation": "nn"
              },
              {
                "source": 4,
                "destination": 5,
                "relation": "prep"
              },
              {
                "source": 4,
                "destination": 7,
                "relation": "prep"
              },
              {
                "source": 5,
                "destination": 6,
                "relation": "pobj"
              },
              {
                "source": 7,
                "destination": 8,
                "relation": "pcomp"
              }
            ],
            "roots": [
              4
            ]
          },
          "stanford-collapsed": {
            "edges": [
              {
                "source": 8,
                "destination": 11,
                "relation": "dobj"
              },
              {
                "source": 11,
                "destination": 9,
                "relation": "poss"
              },
              {
                "source": 11,
                "destination": 10,
                "relation": "nn"
              },
              {
                "source": 4,
                "destination": 8,
                "relation": "prepc_before"
              },
              {
                "source": 4,
                "destination": 12,
                "relation": "punct"
              },
              {
                "source": 4,
                "destination": 0,
                "relation": "nsubj"
              },
              {
                "source": 4,
                "destination": 1,
                "relation": "cop"
              },
              {
                "source": 4,
                "destination": 2,
                "relation": "det"
              },
              {
                "source": 4,
                "destination": 3,
                "relation": "nn"
              },
              {
                "source": 4,
                "destination": 6,
                "relation": "prep_in"
              }
            ],
            "roots": [
              4
            ]
          }
        }
      },
      {
        "words": [
          "He",
          "worked",
          "as",
          "a",
          "civil",
          "rights",
          "attorney",
          "and",
          "taught",
          "constitutional",
          "law",
          "at",
          "the",
          "University",
          "of",
          "Chicago",
          "Law",
          "School",
          "between",
          "1992",
          "and",
          "2004",
          "."
        ],
        "startOffsets": [
          514,
          517,
          524,
          527,
          529,
          535,
          542,
          551,
          555,
          562,
          577,
          581,
          584,
          588,
          599,
          602,
          610,
          614,
          621,
          629,
          634,
          638,
          642
        ],
        "endOffsets": [
          516,
          523,
          526,
          528,
          534,
          541,
          550,
          554,
          561,
          576,
          580,
          583,
          587,
          598,
          601,
          609,
          613,
          620,
          628,
          633,
          637,
          642,
          643
        ],
        "tags": [
          "PRP",
          "VBD",
          "IN",
          "DT",
          "JJ",
          "NNS",
          "NN",
          "CC",
          "VBD",
          "JJ",
          "NN",
          "IN",
          "DT",
          "NNP",
          "IN",
          "NNP",
          "NNP",
          "NNP",
          "IN",
          "CD",
          "CC",
          "CD",
          "."
        ],
        "lemmas": [
          "he",
          "work",
          "as",
          "a",
          "civil",
          "rights",
          "attorney",
          "and",
          "teach",
          "constitutional",
          "law",
          "at",
          "the",
          "University",
          "of",
          "Chicago",
          "Law",
          "School",
          "between",
          "1992",
          "and",
          "2004",
          "."
        ],
        "entities": [
          "O",
          "O",
          "O",
          "O",
          "O",
          "O",
          "O",
          "O",
          "O",
          "O",
          "O",
          "O",
          "O",
          "ORGANIZATION",
          "ORGANIZATION",
          "ORGANIZATION",
          "ORGANIZATION",
          "ORGANIZATION",
          "O",
          "DATE",
          "DATE",
          "DATE",
          "O"
        ],
        "norms": [
          "O",
          "O",
          "O",
          "O",
          "O",
          "O",
          "O",
          "O",
          "O",
          "O",
          "O",
          "O",
          "O",
          "O",
          "O",
          "O",
          "O",
          "O",
          "O",
          "1992/2004",
          "1992/2004",
          "1992/2004",
          "O"
        ],
        "chunks": [
          "B-NP",
          "B-VP",
          "B-PP",
          "B-NP",
          "I-NP",
          "I-NP",
          "I-NP",
          "O",
          "B-VP",
          "B-NP",
          "I-NP",
          "B-PP",
          "B-NP",
          "I-NP",
          "B-PP",
          "B-NP",
          "I-NP",
          "I-NP",
          "B-PP",
          "B-NP",
          "I-NP",
          "I-NP",
          "O"
        ],
        "graphs": {
          "stanford-basic": {
            "edges": [
              {
                "source": 11,
                "destination": 13,
                "relation": "pobj"
              },
              {
                "source": 13,
                "destination": 12,
                "relation": "det"
              },
              {
                "source": 13,
                "destination": 14,
                "relation": "prep"
              },
              {
                "source": 14,
                "destination": 17,
                "relation": "pobj"
              },
              {
                "source": 17,
                "destination": 15,
                "relation": "nn"
              },
              {
                "source": 17,
                "destination": 16,
                "relation": "nn"
              },
              {
                "source": 18,
                "destination": 19,
                "relation": "pobj"
              },
              {
                "source": 19,
                "destination": 20,
                "relation": "cc"
              },
              {
                "source": 19,
                "destination": 21,
                "relation": "conj"
              },
              {
                "source": 1,
                "destination": 0,
                "relation": "nsubj"
              },
              {
                "source": 1,
                "destination": 2,
                "relation": "prep"
              },
              {
                "source": 1,
                "destination": 22,
                "relation": "punct"
              },
              {
                "source": 1,
                "destination": 7,
                "relation": "cc"
              },
              {
                "source": 1,
                "destination": 8,
                "relation": "conj"
              },
              {
                "source": 2,
                "destination": 6,
                "relation": "pobj"
              },
              {
                "source": 6,
                "destination": 3,
                "relation": "det"
              },
              {
                "source": 6,
                "destination": 4,
                "relation": "amod"
              },
              {
                "source": 6,
                "destination": 5,
                "relation": "nn"
              },
              {
                "source": 8,
                "destination": 11,
                "relation": "prep"
              },
              {
                "source": 8,
                "destination": 18,
                "relation": "prep"
              },
              {
                "source": 8,
                "destination": 10,
                "relation": "dobj"
              },
              {
                "source": 10,
                "destination": 9,
                "relation": "amod"
              }
            ],
            "roots": [
              1
            ]
          },
          "stanford-collapsed": {
            "edges": [
              {
                "source": 13,
                "destination": 12,
                "relation": "det"
              },
              {
                "source": 13,
                "destination": 17,
                "relation": "prep_of"
              },
              {
                "source": 17,
                "destination": 15,
                "relation": "nn"
              },
              {
                "source": 17,
                "destination": 16,
                "relation": "nn"
              },
              {
                "source": 19,
                "destination": 21,
                "relation": "conj_and"
              },
              {
                "source": 1,
                "destination": 0,
                "relation": "nsubj"
              },
              {
                "source": 1,
                "destination": 6,
                "relation": "prep_as"
              },
              {
                "source": 1,
                "destination": 22,
                "relation": "punct"
              },
              {
                "source": 1,
                "destination": 8,
                "relation": "conj_and"
              },
              {
                "source": 6,
                "destination": 3,
                "relation": "det"
              },
              {
                "source": 6,
                "destination": 4,
                "relation": "amod"
              },
              {
                "source": 6,
                "destination": 5,
                "relation": "nn"
              },
              {
                "source": 8,
                "destination": 13,
                "relation": "prep_at"
              },
              {
                "source": 8,
                "destination": 0,
                "relation": "nsubj"
              },
              {
                "source": 8,
                "destination": 19,
                "relation": "prep_between"
              },
              {
                "source": 8,
                "destination": 21,
                "relation": "prep_between"
              },
              {
                "source": 8,
                "destination": 10,
                "relation": "dobj"
              },
              {
                "source": 10,
                "destination": 9,
                "relation": "amod"
              }
            ],
            "roots": [
              1
            ]
          }
        }
      },
      {
        "words": [
          "He",
          "served",
          "three",
          "terms",
          "representing",
          "the",
          "13th",
          "District",
          "in",
          "the",
          "Illinois",
          "Senate",
          "from",
          "1997",
          "to",
          "2004",
          ",",
          "and",
          "ran",
          "unsuccessfully",
          "in",
          "the",
          "Democratic",
          "primary",
          "for",
          "the",
          "United",
          "States",
          "House",
          "of",
          "Representatives",
          "in",
          "2000",
          "against",
          "incumbent",
          "Bobby",
          "Rush",
          "."
        ],
        "startOffsets": [
          644,
          647,
          654,
          660,
          666,
          679,
          683,
          688,
          697,
          700,
          704,
          713,
          720,
          725,
          730,
          733,
          737,
          739,
          743,
          747,
          762,
          765,
          769,
          780,
          788,
          792,
          796,
          803,
          810,
          816,
          819,
          835,
          838,
          843,
          851,
          861,
          867,
          871
        ],
        "endOffsets": [
          646,
          653,
          659,
          665,
          678,
          682,
          687,
          696,
          699,
          703,
          712,
          719,
          724,
          729,
          732,
          737,
          738,
          742,
          746,
          761,
          764,
          768,
          779,
          787,
          791,
          795,
          802,
          809,
          815,
          818,
          834,
          837,
          842,
          850,
          860,
          866,
          871,
          872
        ],
        "tags": [
          "PRP",
          "VBD",
          "CD",
          "NNS",
          "VBG",
          "DT",
          "JJ",
          "NN",
          "IN",
          "DT",
          "NNP",
          "NNP",
          "IN",
          "CD",
          "TO",
          "CD",
          ",",
          "CC",
          "VBD",
          "RB",
          "IN",
          "DT",
          "JJ",
          "NN",
          "IN",
          "DT",
          "NNP",
          "NNP",
          "NNP",
          "IN",
          "NNPS",
          "IN",
          "CD",
          "IN",
          "JJ",
          "NNP",
          "NNP",
          "."
        ],
        "lemmas": [
          "he",
          "serve",
          "three",
          "term",
          "represent",
          "the",
          "13th",
          "district",
          "in",
          "the",
          "Illinois",
          "Senate",
          "from",
          "1997",
          "to",
          "2004",
          ",",
          "and",
          "run",
          "unsuccessfully",
          "in",
          "the",
          "democratic",
          "primary",
          "for",
          "the",
          "United",
          "States",
          "House",
          "of",
          "Representatives",
          "in",
          "2000",
          "against",
          "incumbent",
          "Bobby",
          "Rush",
          "."
        ],
        "entities": [
          "O",
          "O",
          "NUMBER",
          "O",
          "O",
          "O",
          "LOCATION",
          "LOCATION",
          "O",
          "O",
          "ORGANIZATION",
          "ORGANIZATION",
          "O",
          "DATE",
          "DATE",
          "DATE",
          "O",
          "O",
          "O",
          "O",
          "O",
          "O",
          "MISC",
          "O",
          "O",
          "O",
          "LOCATION",
          "LOCATION",
          "ORGANIZATION",
          "ORGANIZATION",
          "ORGANIZATION",
          "O",
          "DATE",
          "O",
          "O",
          "PERSON",
          "PERSON",
          "O"
        ],
        "norms": [
          "O",
          "O",
          "3.0",
          "O",
          "O",
          "O",
          "O",
          "O",
          "O",
          "O",
          "O",
          "O",
          "O",
          "1997/2004",
          "1997/2004",
          "1997/2004",
          "O",
          "O",
          "O",
          "O",
          "O",
          "O",
          "O",
          "O",
          "O",
          "O",
          "O",
          "O",
          "O",
          "O",
          "O",
          "O",
          "2000",
          "O",
          "O",
          "O",
          "O",
          "O"
        ],
        "chunks": [
          "B-NP",
          "B-VP",
          "B-NP",
          "I-NP",
          "B-VP",
          "B-NP",
          "I-NP",
          "I-NP",
          "B-PP",
          "B-NP",
          "I-NP",
          "I-NP",
          "B-PP",
          "B-NP",
          "I-NP",
          "I-NP",
          "O",
          "O",
          "B-VP",
          "B-ADVP",
          "B-PP",
          "B-NP",
          "I-NP",
          "I-NP",
          "B-PP",
          "B-NP",
          "I-NP",
          "I-NP",
          "I-NP",
          "B-PP",
          "B-NP",
          "B-PP",
          "B-NP",
          "B-PP",
          "B-NP",
          "I-NP",
          "I-NP",
          "O"
        ],
        "graphs": {
          "stanford-basic": {
            "edges": [
              {
                "source": 1,
                "destination": 0,
                "relation": "nsubj"
              },
              {
                "source": 1,
                "destination": 16,
                "relation": "punct"
              },
              {
                "source": 1,
                "destination": 17,
                "relation": "cc"
              },
              {
                "source": 1,
                "destination": 18,
                "relation": "conj"
              },
              {
                "source": 1,
                "destination": 3,
                "relation": "dobj"
              },
              {
                "source": 1,
                "destination": 37,
                "relation": "punct"
              },
              {
                "source": 3,
                "destination": 2,
                "relation": "num"
              },
              {
                "source": 3,
                "destination": 4,
                "relation": "vmod"
              },
              {
                "source": 4,
                "destination": 7,
                "relation": "dobj"
              },
              {
                "source": 4,
                "destination": 12,
                "relation": "prep"
              },
              {
                "source": 7,
                "destination": 5,
                "relation": "det"
              },
              {
                "source": 7,
                "destination": 6,
                "relation": "amod"
              },
              {
                "source": 7,
                "destination": 8,
                "relation": "prep"
              },
              {
                "source": 8,
                "destination": 11,
                "relation": "pobj"
              },
              {
                "source": 11,
                "destination": 9,
                "relation": "det"
              },
              {
                "source": 11,
                "destination": 10,
                "relation": "nn"
              },
              {
                "source": 12,
                "destination": 14,
                "relation": "prep"
              },
              {
                "source": 12,
                "destination": 13,
                "relation": "pobj"
              },
              {
                "source": 14,
                "destination": 15,
                "relation": "pobj"
              },
              {
                "source": 18,
                "destination": 31,
                "relation": "prep"
              },
              {
                "source": 18,
                "destination": 33,
                "relation": "prep"
              },
              {
                "source": 18,
                "destination": 19,
                "relation": "advmod"
              },
              {
                "source": 18,
                "destination": 20,
                "relation": "prep"
              },
              {
                "source": 20,
                "destination": 23,
                "relation": "pobj"
              },
              {
                "source": 23,
                "destination": 21,
                "relation": "det"
              },
              {
                "source": 23,
                "destination": 22,
                "relation": "amod"
              },
              {
                "source": 23,
                "destination": 24,
                "relation": "prep"
              },
              {
                "source": 24,
                "destination": 28,
                "relation": "pobj"
              },
              {
                "source": 28,
                "destination": 25,
                "relation": "det"
              },
              {
                "source": 28,
                "destination": 26,
                "relation": "nn"
              },
              {
                "source": 28,
                "destination": 27,
                "relation": "nn"
              },
              {
                "source": 28,
                "destination": 29,
                "relation": "prep"
              },
              {
                "source": 29,
                "destination": 30,
                "relation": "pobj"
              },
              {
                "source": 31,
                "destination": 32,
                "relation": "pobj"
              },
              {
                "source": 33,
                "destination": 36,
                "relation": "pobj"
              },
              {
                "source": 36,
                "destination": 34,
                "relation": "amod"
              },
              {
                "source": 36,
                "destination": 35,
                "relation": "nn"
              }
            ],
            "roots": [
              1
            ]
          },
          "stanford-collapsed": {
            "edges": [
              {
                "source": 1,
                "destination": 0,
                "relation": "nsubj"
              },
              {
                "source": 1,
                "destination": 16,
                "relation": "punct"
              },
              {
                "source": 1,
                "destination": 18,
                "relation": "conj_and"
              },
              {
                "source": 1,
                "destination": 3,
                "relation": "dobj"
              },
              {
                "source": 1,
                "destination": 37,
                "relation": "punct"
              },
              {
                "source": 3,
                "destination": 2,
                "relation": "num"
              },
              {
                "source": 3,
                "destination": 4,
                "relation": "vmod"
              },
              {
                "source": 4,
                "destination": 15,
                "relation": "prep_to"
              },
              {
                "source": 4,
                "destination": 7,
                "relation": "dobj"
              },
              {
                "source": 4,
                "destination": 13,
                "relation": "prep_from"
              },
              {
                "source": 7,
                "destination": 5,
                "relation": "det"
              },
              {
                "source": 7,
                "destination": 6,
                "relation": "amod"
              },
              {
                "source": 7,
                "destination": 11,
                "relation": "prep_in"
              },
              {
                "source": 11,
                "destination": 9,
                "relation": "det"
              },
              {
                "source": 11,
                "destination": 10,
                "relation": "nn"
              },
              {
                "source": 18,
                "destination": 0,
                "relation": "nsubj"
              },
              {
                "source": 18,
                "destination": 32,
                "relation": "prep_in"
              },
              {
                "source": 18,
                "destination": 19,
                "relation": "advmod"
              },
              {
                "source": 18,
                "destination": 36,
                "relation": "prep_against"
              },
              {
                "source": 18,
                "destination": 23,
                "relation": "prep_in"
              },
              {
                "source": 23,
                "destination": 21,
                "relation": "det"
              },
              {
                "source": 23,
                "destination": 22,
                "relation": "amod"
              },
              {
                "source": 23,
                "destination": 28,
                "relation": "prep_for"
              },
              {
                "source": 28,
                "destination": 30,
                "relation": "prep_of"
              },
              {
                "source": 28,
                "destination": 25,
                "relation": "det"
              },
              {
                "source": 28,
                "destination": 26,
                "relation": "nn"
              },
              {
                "source": 28,
                "destination": 27,
                "relation": "nn"
              },
              {
                "source": 36,
                "destination": 34,
                "relation": "amod"
              },
              {
                "source": 36,
                "destination": 35,
                "relation": "nn"
              }
            ],
            "roots": [
              1
            ]
          }
        }
      }
    ]
  }
  
module.exports = {
  data: data
}