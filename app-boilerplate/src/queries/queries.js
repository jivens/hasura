import gql from 'graphql-tag'

const GET_DATUMS_BY_TASK = gql `
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

const INSERT_ANNOTATIONS_FROM_DATUM = gql `
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
    GET_ANNOTATIONS_BY_ANNOTATOR,
    GET_ANNOTATIONS_BY_ANNOTATOR_TASK_LATEST_VERSION
}