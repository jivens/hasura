import React from "react";
import { Button } from "react-bootstrap";

const TaskBtn = ({ taskHandler }) => (
  <Button
    id="qsTaskBtn"
    variant="primary"
    className="btn-margin"
    onClick={taskHandler}
  >
    Administer Tasks
  </Button>
);

export default TaskBtn;