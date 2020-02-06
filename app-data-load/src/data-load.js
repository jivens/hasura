import React from "react"
import {useMutation} from "@apollo/react-hooks"
import gql from 'graphql-tag'
import data from "./data.js"
 
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

function addAllDatums(addDatum) {

  let task_id = 1

  //console.log(addDatum)

  for(var i = 0; i < data.sentences.length; i++) {
      const sentence = data.sentences[i]
      console.log("[" + i + "]")
      console.log(sentence.datum)
      if (i < 10) {
          task_id = 1
      } else if (i < 20) {
          task_id = 2
      } else {
          task_id = 3
      }
      console.log("task_id: " + task_id + ",")

      // Launch this in the blind and assume that it works
      addDatum({variables: {
          task_id: task_id,
          datum: sentence.datum
      }})
  }
}

function testfunc() {
  console.log("Hello I am here")
}

function AddTaskAndDatums(props) {

    // Let's add the task here first
    // Note that I am not waiting for it to finish or to look for errors
    // So this better work
    // const [addTask1, { data: taskData1, loading: taskLoading1, error: taskError1}] = useMutation(ADD_TASK);
    // const [addTask2, { data: taskData2, loading: taskLoading2, error: taskError2}] = useMutation(ADD_TASK);
    // const [addTask3, { data: taskData3, loading: taskLoading3, error: taskError3}] = useMutation(ADD_TASK);
    // // Run it
    // addTask1({variables: {
    //     task_description: "Annotate the sentences of delorme.com_shu.pages_0_splitted_1000.json, 880 to 889"
    // }})
    // addTask2({variables: {
    //     task_description: "Annotate the sentences of delorme.com_shu.pages_0_splitted_1000.json, 890 to 899"
    // }})
    // addTask3({variables: {
    //     task_description: "Annotate the sentences of delorme.com_shu.pages_0_splitted_1000.json, 900 to 902"
    // }})

    //if (taskLoading1 || taskLoading2 || taskLoading3) { return <div>Loading</div> }
    //if (taskError1 || taskError2 || taskError3) { return <div>Error</div>}
    //return <div>Tasks have been added</div>

    // Create a mutation to add the datums we want
    const [addDatum, { loading: datumLoading, error: datumError}] = useMutation(ADD_DATUM);

    return (
      <div>
        <button onClick={addAllDatums(addDatum)}>
          Add all datums
        </button>
      </div>
      )
}

// Run the whole shebang
export default AddTaskAndDatums
