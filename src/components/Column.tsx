import { boardData } from "../utils/data.static";
import Header from "./Header";
import Task from "./Task";

function Column() {
  return (
    <div className="card">
      {boardData.map((element: any, index) => (
        <div className="header">
          <>
            <div key={index} className="column">
              <Header title={element.name} taskCount={element.tickets.length} />
            </div>
            <div key={index} className="tasks">
              {element.tickets.map((ticket: any) => (
                <Task {...ticket} />
              ))}
            </div>
          </>
          <div>
            <div className="tasks-button-container">
              {element.name.includes("Completed") ? (
                <h1 className="task-button">View completed tasks</h1>
              ) : (
                <h1 className="task-button">+ Add a Task</h1>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Column;
