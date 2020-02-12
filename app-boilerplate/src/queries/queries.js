import gql from 'graphql-tag'

// Note: retrieves the highest version
// {
//     "data": {
//       "annotations": [
//         {
//           "datum_id": 18,
//           "version": 1
//         }
//       ]
//     }
//   }
const DATUM_WITH_ANNOTATIONS = gql`
    query DatumWithAnnotationsByUserHighestVersion($auth_id: String!) {
        annotations(where: {annotator_id: {_eq: $auth_id}, datum_id: {_in: [18, 19, 20]}}, order_by: {version: desc}, limit: 1) {
        datum_id
        version
        }
    }
`;

// {
//     "data": {
//       "task_user": [
//         {
//           "task_id": 3,
//           "user_id": "auth0|5e139e8e9e24280eb4842c16",
//           "user": {
//             "name": "john.wagner.ivens"
//           },
//           "task": {
//             "task_description": "Annotate the sentences of delorme.com_shu.pages_0_splitted_1000.json, 900 to 902",
//             "data": [
//               {
//                 "id": 39,
//                 "annotation_type": "sentence_annotation"
//               },
//               {
//                 "id": 38,
//                 "annotation_type": "sentence_annotation"
//               },
//               {
//                 "id": 36,
//                 "annotation_type": "sentence_annotation"
//               }
//             ]
//           }
//         },
//         {
//           "task_id": 2,
//           "user_id": "auth0|5e139e8e9e24280eb4842c16",
//           "user": {
//             "name": "john.wagner.ivens"
//           },
//           "task": {
//             "task_description": "Annotate the sentences of delorme.com_shu.pages_0_splitted_1000.json, 890 to 899",
//             "data": [
//               {
//                 "id": 26,
//                 "annotation_type": "sentence_annotation"
//               },
//               {
//                 "id": 33,
//                 "annotation_type": "sentence_annotation"
//               },
//               {
//                 "id": 27,
//                 "annotation_type": "sentence_annotation"
//               },
//               {
//                 "id": 31,
//                 "annotation_type": "sentence_annotation"
//               },
//               {
//                 "id": 32,
//                 "annotation_type": "sentence_annotation"
//               },
//               {
//                 "id": 35,
//                 "annotation_type": "sentence_annotation"
//               },
//               {
//                 "id": 37,
//                 "annotation_type": "sentence_annotation"
//               },
//               {
//                 "id": 29,
//                 "annotation_type": "sentence_annotation"
//               },
//               {
//                 "id": 30,
//                 "annotation_type": "sentence_annotation"
//               },
//               {
//                 "id": 34,
//                 "annotation_type": "sentence_annotation"
//               }
//             ]
//           }
//         }
//       ]
//     }
//   }
const TASKS_AND_USERS = gql`
query TasksAndUsers($auth_id: String!) {
    task_user(where: {user_id: {_eq: $auth_id}}) {
      task_id
      user_id
      user {
        name
      }
      task {
        task_description
        data {
          id
          annotation_type
        }
      }
    }
  }
`  


// {
//     "data": {
//       "task_user": [
//         {
//           "task_id": 3,
//           "user_id": "auth0|5e139e8e9e24280eb4842c16",
//           "user": {
//             "name": "john.wagner.ivens"
//           },
//           "task": {
//             "task_description": "Annotate the sentences of delorme.com_shu.pages_0_splitted_1000.json, 900 to 902",
//             "data": [
//               {
//                 "id": 39,
//                 "annotation_type": "sentence_annotation"
//               },
//               {
//                 "id": 38,
//                 "annotation_type": "sentence_annotation"
//               },
//               {
//                 "id": 36,
//                 "annotation_type": "sentence_annotation"
//               }
//             ]
//           }
//         }
//       ]
//     }
//   }
const DATA_BY_TASK_AND_USER = gql`
    query TasksUsers($task_id: Int!, $auth_id: String!) {
        task_user(where: {task_id:{_eq: $task_id}, user_id: {_eq: $auth_id}}) {
            task_id
            user_id
            user {
                name
            }
            task {
                task_description
                data {
                    id
                    annotation_type
                }
            }
        }
    }
`

const GET_DATUMS_BY_TASK = gql`
    query getDatumsByTask($auth_id: String!, $task_id: Int!) {
        tasks(where: {_and: 
        [	{assigner_id: {_eq: $auth_id}}, 
            {data: {task_id: {_eq: $task_id}}}
        ]
        }) {
        task_description
            id
            data {
                annotation_type
                original_annotation
            }
        }
    }
`;

const INSERT_ANNOTATIONS_FROM_DATUM = gql`
    mutation insertAnnotationFromDatum($datum_id: Int!, $datum:jsonb!, $task_id: Int!) {
        insert_annotations(objects: [{
        datum_id: $datum_id,
        annotator_id: "auth0|5e139e8e9e24280eb4842c16",
        version: 1,
        task_id: $task_id,
        annotation_type: "sentence_annotation",
        annotation: $datum
        }]) {
        returning {
            datum_id,
            annotator_id,
            version
        }
        }
    }
`;

const GET_ANNOTATIONS_BY_ANNOTATOR = gql`
    query getAnnotationsByAnnotator($auth_id: String!) {
        annotations(where: {annotator_id: {_eq: $auth_id} 
        }) {
        task_id
        annotation_type
        completed
        user {
            name
        }
            annotation
        }
    }
`;

const GET_ANNOTATIONS_BY_ANNOTATOR_TASK_LATEST_VERSION = gql`
    query getAnnotationsByAnnotatorLatestVersion($auth_id: String!, $task_id: Int!) {
        annotations(limit: 1, order_by: {version: desc}, 
            where: {_and: 
                [	{annotator_id: {_eq: $auth_id}}, 
                    {task_id: {_eq: $task_id}}
                ]
                })  {
        task_id
        annotation_type
        annotator_id
        datum_id
        completed
        version
        user {
            name
        }
            annotation
        }
    }
`;

export {
    DATUM_WITH_ANNOTATIONS,
    TASKS_AND_USERS,
    DATA_BY_TASK_AND_USER,
    GET_DATUMS_BY_TASK ,
    INSERT_ANNOTATIONS_FROM_DATUM,
    GET_ANNOTATIONS_BY_ANNOTATOR,
    GET_ANNOTATIONS_BY_ANNOTATOR_TASK_LATEST_VERSION,
    
}