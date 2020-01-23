import React from "react";
import { useMutation } from "@apollo/react-hooks";
import gql from 'graphql-tag';
import {GET_MY_TODOS} from './TodoPrivateList';

const TodoItem = ({ index, todo }) => {
  const removeTodo = e => {
    e.preventDefault();
    e.stopPropagation();
  };

  const TOGGLE_TODO = gql`
    mutation toggleTask ($id: Int!, $isCompleted: Boolean!) {
      update_tasks(where: {id: {_eq: $id}}, _set: {completed: $isCompleted}) {
        affected_rows
      }
    }
  `;

  const [toggleTodoMutation] = useMutation(TOGGLE_TODO);

  const toggleTodo = () => {
    toggleTodoMutation({
      variables: {id: todo.id, isCompleted: !todo.completed},
      optimisticResponse: null,
      update: (cache) => {
        const existingTodos = cache.readQuery({ query: GET_MY_TODOS });
        console.log(existingTodos)
        const newTodos = existingTodos.tasks.map(t => {
          if (t.id === todo.id) {
            return {...t, completed: !t.completed};
          } else {
            return t;
          }
        });
        cache.writeQuery({
          query: GET_MY_TODOS,
          data: {tasks: newTodos}
        });
      }
    });
  };

  return (
    <li>
      <div className="view">
        <div className="round">
          <input
            checked={todo.completed}
            type="checkbox"
            id={todo.id}
            onChange={toggleTodo}
          />
          <label htmlFor={todo.id} />
        </div>
      </div>

      <div className={"labelContent" + (todo.completed ? " completed" : "")}>
        <div>{todo.task_description}</div>
      </div>

      <button className="closeBtn" onClick={removeTodo}>
        x
      </button>
    </li>
  );
};

export default TodoItem;
