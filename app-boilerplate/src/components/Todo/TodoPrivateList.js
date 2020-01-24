import React, { useState, Fragment } from "react";
import {useQuery} from '@apollo/react-hooks';
import gql from 'graphql-tag';

import TodoItem from "./TodoItem";
import TodoFilters from "./TodoFilters";

const GET_MY_TODOS = gql`
query getMyTodos {
  tasks(order_by: { created_at: desc }) {
    id
    task_description
    created_at
    completed
}
}`;

const TodoPrivateList = props => {
  const [state, setState] = useState({
    filterStatus: "all",
    filterOwner: "all",
    clearInProgress: false,
  });

  const filterResults = (filterStatus, filterOwner) => {
    console.log("filter status", filterStatus);
    console.log("filter owner", filterOwner);    

    setState({
      ...state,
      filterStatus: filterStatus,
      filterOwner: filterOwner
    });
  };

  const clearCompleted = () => {};

  const {todos} = props;
  let filteredTodos = todos;
  

  if (state.filterStatus === "active") {
    filteredTodos = todos.filter(todo => todo.completed !== true);
  } else if (state.filterStatus === "completed") {
    filteredTodos = todos.filter(todo => todo.completed === true);
  }

  // if(state.filterOwner === "mine") {
  //   filteredTodos = filteredTodos.filter(todo => )
  // }

  const todoList = [];
  filteredTodos.forEach((todo, index) => {
    todoList.push(<TodoItem key={index} index={index} todo={todo} />);
  });

  return (
    <Fragment>
      <div className="todoListWrapper">
        <ul>{todoList}</ul>
      </div>

      <TodoFilters
        todos={filteredTodos}
        currentFilters={{
          filterStatus: state.filterStatus, 
          filterOwner: state.filterOwner
        }}
        filterResultsFn={filterResults}
        clearCompletedFn={clearCompleted}
        clearInProgress={state.clearInProgress}
      />
    </Fragment>
  );
};

const TodoPrivateListQuery = () => {

  const { loading, error, data, client} = useQuery(GET_MY_TODOS);

  console.log(client)

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    console.error(error);
    return <div>Error!</div>;
  }
  return <TodoPrivateList todos={data.tasks} />;
};

export default TodoPrivateListQuery;
export {GET_MY_TODOS};
