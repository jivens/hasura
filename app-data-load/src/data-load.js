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

    // Create a mutation to add the datums we want
    //const [addDatum, { loading: datumLoading, error: datumError}] = useMutation(ADD_DATUM);

    console.log(data.sentences.length)
    console.log(data.sentences[0].task_id)
    console.log(data.sentences[0].datum)

    const [addDatum00, {loading: l00, data: d00, error: e00}] = useMutation(ADD_DATUM);
    const [addDatum01, {loading: l01, data: d01, error: e01}] = useMutation(ADD_DATUM);
    const [addDatum02, {loading: l02, data: d02, error: e02}] = useMutation(ADD_DATUM);
    const [addDatum03, {loading: l03, data: d03, error: e03}] = useMutation(ADD_DATUM);
    const [addDatum04, {loading: l04, data: d04, error: e04}] = useMutation(ADD_DATUM);
    const [addDatum05, {loading: l05, data: d05, error: e05}] = useMutation(ADD_DATUM);
    const [addDatum06, {loading: l06, data: d06, error: e06}] = useMutation(ADD_DATUM);
    const [addDatum07, {loading: l07, data: d07, error: e07}] = useMutation(ADD_DATUM);
    const [addDatum08, {loading: l08, data: d08, error: e08}] = useMutation(ADD_DATUM);
    const [addDatum09, {loading: l09, data: d09, error: e09}] = useMutation(ADD_DATUM);
    const [addDatum10, {loading: l10, data: d10, error: e10}] = useMutation(ADD_DATUM);
    const [addDatum11, {loading: l11, data: d11, error: e11}] = useMutation(ADD_DATUM);
    const [addDatum12, {loading: l12, data: d12, error: e12}] = useMutation(ADD_DATUM);
    const [addDatum13, {loading: l13, data: d13, error: e13}] = useMutation(ADD_DATUM);
    const [addDatum14, {loading: l14, data: d14, error: e14}] = useMutation(ADD_DATUM);
    const [addDatum15, {loading: l15, data: d15, error: e15}] = useMutation(ADD_DATUM);
    const [addDatum16, {loading: l16, data: d16, error: e16}] = useMutation(ADD_DATUM);
    const [addDatum17, {loading: l17, data: d17, error: e17}] = useMutation(ADD_DATUM);
    const [addDatum18, {loading: l18, data: d18, error: e18}] = useMutation(ADD_DATUM);
    const [addDatum19, {loading: l19, data: d19, error: e19}] = useMutation(ADD_DATUM);
    const [addDatum20, {loading: l20, data: d20, error: e20}] = useMutation(ADD_DATUM);
    const [addDatum21, {loading: l21, data: d21, error: e21}] = useMutation(ADD_DATUM);
    const [addDatum22, {loading: l22, data: d22, error: e22}] = useMutation(ADD_DATUM);


    if (!l00 && !d00 && !e00) {
      addDatum00({variables: {
        task_id: data.sentences[0].task_id,
        datum: data.sentences[0].datum
      }})
    }
    if (!l01 && !d01 && !e01) {
      addDatum01({variables: {
        task_id: data.sentences[1].task_id,
        datum: data.sentences[1].datum
      }})
    }
    if (!l02 && !d02 && !e02) {
      addDatum02({variables: {
        task_id: data.sentences[2].task_id,
        datum: data.sentences[2].datum
      }})
    }
    if (!l03 && !d03 && !e03) {
      addDatum03({variables: {
        task_id: data.sentences[3].task_id,
        datum: data.sentences[3].datum
      }})
    }
    if (!l04 && !d04 && !e04) {
      addDatum04({variables: {
        task_id: data.sentences[4].task_id,
        datum: data.sentences[4].datum
      }})
    }
    if (!l05 && !d05 && !e05) {
      addDatum05({variables: {
        task_id: data.sentences[5].task_id,
        datum: data.sentences[5].datum
      }})
    }
    if (!l06 && !d06 && !e06) {
      addDatum06({variables: {
        task_id: data.sentences[6].task_id,
        datum: data.sentences[6].datum
      }})
    }
    if (!l07 && !d07 && !e07) {
      addDatum07({variables: {
        task_id: data.sentences[7].task_id,
        datum: data.sentences[7].datum
      }})
    }
    if (!l08 && !d08 && !e08) {
      addDatum08({variables: {
        task_id: data.sentences[8].task_id,
        datum: data.sentences[8].datum
      }})
    }        
    if (!l09 && !d09 && !e09) {
      addDatum09({variables: {
        task_id: data.sentences[9].task_id,
        datum: data.sentences[9].datum
      }})
    }
    if (!l10 && !d10 && !e10) {
      addDatum10({variables: {
        task_id: data.sentences[10].task_id,
        datum: data.sentences[10].datum
      }})
    }
    if (!l11 && !d11 && !e11) {
      addDatum11({variables: {
        task_id: data.sentences[11].task_id,
        datum: data.sentences[11].datum
      }})
    }
    if (!l12 && !d12 && !e12) {
      addDatum12({variables: {
        task_id: data.sentences[12].task_id,
        datum: data.sentences[12].datum
      }})
    }
    if (!l13 && !d13 && !e13) {
      addDatum13({variables: {
        task_id: data.sentences[13].task_id,
        datum: data.sentences[13].datum
      }})
    }
    if (!l14 && !d14 && !e14) {
      addDatum14({variables: {
        task_id: data.sentences[14].task_id,
        datum: data.sentences[14].datum
      }})
    }
    if (!l15 && !d15 && !e15) {
      addDatum15({variables: {
        task_id: data.sentences[15].task_id,
        datum: data.sentences[15].datum
      }})
    }
    if (!l16 && !d16 && !e16) {
      addDatum16({variables: {
        task_id: data.sentences[16].task_id,
        datum: data.sentences[16].datum
      }})
    }
    if (!l17 && !d17 && !e17) {
      addDatum17({variables: {
        task_id: data.sentences[17].task_id,
        datum: data.sentences[17].datum
      }})
    }
    if (!l18 && !d18 && !e18) {
      addDatum18({variables: {
        task_id: data.sentences[18].task_id,
        datum: data.sentences[18].datum
      }})
    }        
    if (!l19 && !d19 && !e19) {
      addDatum19({variables: {
        task_id: data.sentences[19].task_id,
        datum: data.sentences[19].datum
      }})
    }
    if (!l20 && !d20 && !e20) {
      addDatum20({variables: {
        task_id: data.sentences[20].task_id,
        datum: data.sentences[20].datum
      }})
    }
    if (!l21 && !d21 && !e21) {
      addDatum21({variables: {
        task_id: data.sentences[21].task_id,
        datum: data.sentences[21].datum
      }})
    }
    if (!l22 && !d22 && !e22) {
      addDatum22({variables: {
        task_id: data.sentences[22].task_id,
        datum: data.sentences[22].datum
      }})
    }

    if (l00 || l01 || l02 || l03 || l04 || l05 || l06 || l07 || l08 || l09 ||
        l10 || l11 || l12 || l13 || l14 || l15 || l16 || l17 || l18 || l19 ||
        l20 || l21 || l22) return <div>Loading</div>
    if (e00 || e01 || e02 || e03 || e04 || e05 || e06 || e07 || e08 || e09 ||
        e10 || e11 || e12 || e13 || e14 || e15 || e16 || e17 || e18 || e19 ||
        e20 || e21 || e22) return <div>Error</div>
    return <div>Tasks have been added</div>

    // return (
    //   <div>
    //     <button onClick={addAllDatums(addDatum)}>
    //       Add all datums
    //     </button>
    //   </div>
    //   )
}

// Run the whole shebang
export default AddTaskAndDatums
