import React, { useState } from 'react';

import { TabPane, TabbedArea } from '../Tabs/Tabs'
import Dropdown from "./Dropdown"
import {useQuery} from '@apollo/react-hooks';
import {
  DATA_BY_TASK_AND_USER
} from "../../queries/queries"

const DatumHolder = ({auth_id, task_id}) => {

    console.log(auth_id, task_id)

  const [selectedDatum, setSelectedDatum] = useState();

  const dataForUser = useQuery(DATA_BY_TASK_AND_USER, {variables: {auth_id: auth_id, task_id: task_id}})

  console.log(dataForUser)
  if (dataForUser.loading) return <div>Loading</div>
  if (dataForUser.error) return <div>Error loading datums for a user</div>

  //console.log(dataForUser)

   let datumRoot = dataForUser.data.task_user[0].task.data

    console.log("datumRoot", datumRoot)

  let dataOptions = []
  const dataopts = dataForUser.data.task_user[0].task.data
  for (let i=0; i < dataopts.length; i++) {
      const dataStem = dataopts[i].original_annotation
    dataOptions.push({
      "label": dataStem.document_id + "[" + dataStem.index + "]",
      "value": dataopts[i].id
    });
  }
  console.log(dataOptions)
  console.log(selectedDatum)
// return (<div>
//             <div>Pick a datum {auth_id} {task_id} </div>
//             <div></div>
//         </div>
//         );

  return (
    <div className="todoWrapper">
      <div className="sectionHeader">Datum For Tasks</div>
      <Dropdown 
        options={dataOptions} 
        selectedOption={selectedDatum} 
        setSelectedOption={setSelectedDatum}
      /> 
        <div>More stuff here</div>

    </div>
  );

//   return (
//     <div className="todoWrapper">
//       <div className="sectionHeader">Sentence Annotation</div>
//       <Dropdown 
//         options={taskOptions} 
//         selectedOption={selectedTask} 
//         setSelectedOption={setSelectedTask}
//       /> 
//       <TabbedArea>
//         <TabPane display="sentences">
//           <Annotation annotations={taskAnnotations.data.annotations[0]}/>
//         </TabPane>
//         <TabPane display="graphs">
//           <Graph annotations={taskAnnotations.data.annotations[0]}/>
//         </TabPane>
//       </TabbedArea>

//     </div>
//   );
};

export default DatumHolder;