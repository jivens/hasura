/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
//import { FragmentsOnCompositeTypesRule } from "graphql";
import { Button } from "react-bootstrap";

const TodoFilters = ({
  todos,
  currentFilters,
  filterResultsFn,
  clearCompletedFn
}) => {


  const [filterStatus, setFilterStatus] = useState(currentFilters.filterStatus);
  const [filterOwner, setFilterOwner] = useState(currentFilters.filterOwner);


  const filterResultsHandler = (filterStatus, filterOwner) => {
    return () => {
      filterResultsFn(filterStatus, filterOwner);
    };
  };

  // The clear completed button if these are personal todos
/*   const clearCompletedButton = (
    <button onClick={clearCompletedFn} className="clearComp">
      Clear completed
    </button>
  ); */

  const activeTodos = todos.filter(todo => todo.completed !== true);

  let itemCount = todos.length;
  if (currentFilters.filterStatus === "active") {
    itemCount = activeTodos.length;
  } else if (currentFilters.filterStatus === "completed") {
    itemCount = todos.length - activeTodos.length;
  }

  return (
    <div className="footerList">
  
      <span>
        {" "}
        {itemCount} item
        {itemCount !== 1 ? "s" : ""}
      </span>



      <ul>
        <li onClick={() => {    
          setFilterStatus("all");
        }}>
          <a className={filterStatus === "all" ? "selected" : ""}>All</a>
        </li>

        <li onClick={() => {    
          setFilterStatus("active");
        }}>
          <a className={filterStatus === "active" ? "selected" : ""}>Active</a>
        </li>

        <li onClick={() => {    
          setFilterStatus("completed");
        }}>
          <a className={filterStatus === "completed" ? "selected" : ""}>Completed</a>
        </li>
      </ul>

      <ul>
        <li onClick={() => {    
          setFilterOwner("all")
        }}>
          <a className={filterOwner === "all" ? "selected" : ""}>All</a>
        </li>

        <li onClick={() => {    
          setFilterOwner("mine")
        }}>
          <a className={filterOwner === "mine" ? "selected" : ""}>Mine</a>
        </li>

        <li onClick={() => {    
          setFilterOwner("others")
        }}>
          <a className={filterOwner === "others" ? "selected" : ""}>Others</a>
        </li>

        <li onClick={() => {    
          setFilterOwner("assigned")
        }}>
          <a className={filterOwner === "assigned" ? "selected" : ""}>Assigned</a>
        </li>
      </ul>

      <ul>
        <li>
          <Button
            id="qsOuter"
            variant="primary"
            className="btn-margin"
            onClick={filterResultsHandler(filterStatus, filterOwner)}
          >
            Filter
          </Button>
        </li>
      </ul>

      {/*clearCompletedButton*/}
    </div>
  );
};

export default TodoFilters;
