import React, { useState } from 'react';

import { TabPane, TabbedArea } from '../Tabs/Tabs'
import Dropdown from "./Dropdown"
import {useQuery} from '@apollo/react-hooks';
import Annotation from "./Annotation";
import Graph from "./Graph";
import {
  ANNOTATION_BY_USER_HIGHEST_VERSION
} from "../../queries/queries"

const AnnotationHolder = ({auth_id, task_id, datum_id}) => {

  console.log(auth_id, task_id, datum_id)
 
  //const [selectedAnnotation, setSelectedAnnotation] = useState();

  const annoForUser = useQuery(ANNOTATION_BY_USER_HIGHEST_VERSION, {variables: {auth_id: auth_id, datum_id: datum_id}})

  console.log(annoForUser)
  if (annoForUser.loading) return <div>Loading</div>
  if (annoForUser.error) return <div>Error loading annotations for a user</div>

  console.log(annoForUser)

  // TODO: Use some of this for datum->annotation assignment
  //  let annoRoot = annoForUser.data.annotations

  //   console.log("annoRoot", annoRoot)

  // let annoOptions = []
  // const annoopts = annoForUser.data.annotations
  // for (let i=0; i < annoopts.length; i++) {
  //   let annoStem = annoopts[0].annotation
  //   dataOptions.push({
  //     "label": annoStem.document_id + "[" + annoStem.index + "]" + " v" + annoopts[i].version,
  //     "value": annoopts[i].datum_id + "," + auth_id + "," + anoopts[i].version
  //   });
  // }
  // console.log(annoOptions)
  // console.log(selectedAnnotation)
// return (<div>
//             <div>Pick a datum {auth_id} {task_id} </div>
//             <div></div>
//         </div>
//         );

  // return (
  //   <div className="todoWrapper">
  //     <div className="sectionHeader">Annotation for {annoStem.document_id + "[" + annoStem.index + "]" + " v" + annoopts[0].version}</div>
  //     <Dropdown 
  //       options={dataOptions} 
  //       selectedOption={selectedDatum} 
  //       setSelectedOption={setSelectedDatum}
  //     /> 
  //       <div>More stuff here</div>

  //   </div>
  // );

  if (annoForUser.data && annoForUser.data.annotations) {
    const annoopts = annoForUser.data.annotations
    if (annoopts.length > 0) {
      let annoStem = annoopts[0].annotation
      return (
        <div className="todoWrapper">
          <div className="sectionHeader">Annotation for {annoStem.document_id + "[" + annoStem.index + "]" + " v" + annoopts[0].version}</div>
          <TabbedArea>
            <TabPane display="sentences">
              <Annotation annotations={annoopts[0]}/>
            </TabPane>
            <TabPane display="graphs">
              <Graph annotations={annoopts[0]}/>
            </TabPane>
          </TabbedArea>

        </div>
      );
    }
  }
  return (<div>No annotations</div>)
};

export default AnnotationHolder;