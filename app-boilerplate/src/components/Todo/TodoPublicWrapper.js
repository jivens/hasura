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

const TodoPublicWrapper = () => {
  const { loading, error, user} = useAuth0();
  const isAdmin = useQuery(IS_ADMIN, {variables: {auth_id: user.sub}});
  const taskHandler = () => {}
  if (loading) return <div>Loading</div>;
  if (error) return <div>Auth Error</div>; 
  if (isAdmin.loading) return <div>Loading</div>;
  if (isAdmin.error) return <div>Error reading user table</div>;
  return (
    <div className="todoWrapper">
      <div className="sectionHeader">Public feed (realtime)</div>

      {isAdmin.data.users[0].is_admin ? <TaskBtn taskHandler={taskHandler} /> : null}
      <TodoInput isPublic />
      <TodoPublicList />
      <Annotation />
      <Profile />

    </div>
  );
};

export default TodoPublicWrapper;
