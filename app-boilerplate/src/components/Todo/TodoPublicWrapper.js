import React from "react";

import TodoInput from "./TodoInput";
import TodoPublicList from "./TodoPublicList";
import Annotation from "./Annotation";

const TodoPublicWrapper = () => {
  return (
    <div className="todoWrapper">
      <div className="sectionHeader">Public feed (realtime)</div>

      <TodoInput isPublic />
      <TodoPublicList />
      <Annotation />

    </div>
  );
};

export default TodoPublicWrapper;
