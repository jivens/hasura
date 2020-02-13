import React, { useState } from 'react';

import TodoInput from "./TodoInput";
import TodoPublicList from "./TodoPublicList";
import Annotation from "./Annotation";
import Graph from "./Graph"
import Profile from "../Profile"

import TAG from "text-annotation-graphs";
import "text-annotation-graphs/dist/tag/css/tag.css";

import {useQuery} from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { useAuth0 } from "../Auth/react-auth0-spa";
import TaskBtn from "./TaskBtn"
import { TabPane, TabbedArea } from '../Tabs/Tabs'
import Dropdown from "./Dropdown"
import DatumHolder from "./DatumHolder"
import {
  GET_ANNOTATIONS_BY_ANNOTATOR_TASK_LATEST_VERSION, 
  TASKS_AND_USERS, 
  DATA_BY_TASK_AND_USER
} from "../../queries/queries"

const IS_ADMIN = gql`
query isAdmin($auth_id: String!) {
  users(where: { id: {_eq: $auth_id } }) {
    is_admin
}
}`;

const GET_ANNOTATIONS_BY_TASK = gql`
query getAnnotationsByTask($auth_id:String!, $task_id:Int!) {
  tasks(where: 
     {_and: 
       [
         {assigner_id: {_eq: $auth_id}},
         { annotations: {
           task_id: {_eq: $task_id}
         }}
       ]
     }
   ) {
     task_description
     id
     annotations {
       id
       annotation_type
       annotation
     }
   }
 }
`




const TodoPublicWrapper = () => {
  const { loading, error, user} = useAuth0();
  const isAdmin = useQuery(IS_ADMIN, {variables: {auth_id: user.sub}});
  // TODO: This currently loads task 1 arbitrarily, make this the result of a click
  // TODO: This currently passes the first annotation into the annotations, fix this
  //       to make it the result of picking a specific annotation
  //const taskAnnotations = useQuery(GET_ANNOTATIONS_BY_TASK, {variables: {task_id: 1, auth_id: user.sub}})

  const [selectedTask, setSelectedTask] = useState();

  const taskAnnotations = useQuery(GET_ANNOTATIONS_BY_ANNOTATOR_TASK_LATEST_VERSION, {variables: {task_id: 1, auth_id: user.sub}})
  const tasksForUser = useQuery(TASKS_AND_USERS, {variables: {auth_id: user.sub}})

  const taskHandler = () => {}
  console.log(taskAnnotations)
  if (loading) return <div>Loading</div>;
  if (error) return <div>Auth Error</div>; 
  if (isAdmin.loading) return <div>Loading</div>;
  if (isAdmin.error) return <div>Error reading user table</div>;
  if (taskAnnotations.loading) return <div>Loading</div>;
  if (taskAnnotations.error) return <div>Error reading annotations</div>;
  if (tasksForUser.loading) return <div>Loading</div>
  if (tasksForUser.error) return <div>Error loading tasks for a user</div>
  console.log(selectedTask)
  console.log(tasksForUser)
  let taskOptions = []
  const taskopts = tasksForUser.data.task_user
  for (let i=0; i < taskopts.length; i++) {
    taskOptions.push({
      "label": taskopts[i].task.task_description,
      "value": taskopts[i].task_id
    });
  }
  console.log(taskOptions)
  //console.log(tasksForUser.data.task_user[0].task_id, tasksForUser.data.task_user[0].task.task_description)
  //console.log(tasksForUser.data.task_user[1].task_id, tasksForUser.data.task_user[1].task.task_description)
  //     {isAdmin.data.users[0].is_admin ? <TaskBtn taskHandler={taskHandler} /> : null}
  return (
    <div className="todoWrapper">
      <div className="sectionHeader">Sentence Annotation</div>
      <Dropdown 
        options={taskOptions} 
        selectedOption={selectedTask} 
        setSelectedOption={setSelectedTask}
      /> 
      <DatumHolder auth_id={user.sub} task_id={selectedTask}/>
    </div>
  );
};

export default TodoPublicWrapper;
