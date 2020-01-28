import React from "react";

import TodoInput from "./TodoInput";
import TodoPublicList from "./TodoPublicList";
import Annotation from "./Annotation";
import Profile from "../Profile"

import {useQuery} from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { useAuth0 } from "../Auth/react-auth0-spa";
import TaskBtn from "./TaskBtn"

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
  const taskAnnotations = useQuery(GET_ANNOTATIONS_BY_TASK, {variables: {task_id: 1, auth_id: user.sub}})
  const taskHandler = () => {}
  console.log(taskAnnotations)
  if (loading) return <div>Loading</div>;
  if (error) return <div>Auth Error</div>; 
  if (isAdmin.loading) return <div>Loading</div>;
  if (isAdmin.error) return <div>Error reading user table</div>;
  if (taskAnnotations.loading) return <div>Loading</div>;
  if (taskAnnotations.error) return <div>Error reading annotations</div>;
  return (
    <div className="todoWrapper">
      <div className="sectionHeader">Public feed (realtime)</div>

      {isAdmin.data.users[0].is_admin ? <TaskBtn taskHandler={taskHandler} /> : null}
      <TodoInput isPublic />
      <TodoPublicList />
      <Annotation annotations={taskAnnotations.data.tasks[0].annotations[0]}/>
      <Profile />

    </div>
  );
};

export default TodoPublicWrapper;
