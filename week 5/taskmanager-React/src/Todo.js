import { React, useState } from "react";

function Todo() {
  const [activity, setActivity] = useState("");
  const [completedlistData, setCompletedListData] = useState([]);
  const [incompletedlistData, setinCompletedListData] = useState([]);
  
  function addActivity() {
    setCompletedListData((completedlistData) => {
      const updatedList = [...completedlistData, activity];
      setActivity("");
      return updatedList;
    });
  }

  function removeActivity(i) {
    const updatedCompleteList = completedlistData.filter((elem, id) => {
      return i !== id;
    });
    const doneElem = completedlistData.filter((elem, id) => {
      return i === id;
    });
    const updatedIncompleteList = [...incompletedlistData, doneElem];

    setCompletedListData(updatedCompleteList);
    setinCompletedListData(updatedIncompleteList);
  }

  function removeAll() {
    setinCompletedListData([]);
  }

  return (
    <>
      <div className="container">
        <div className="header">Task Manager</div>
        <input
          type="text"
          placeholder="+ADD TASK"
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
        />
        <button onClick={addActivity}>Add</button>
        <p className="List-heading">Incomplete Tasks</p>
        {completedlistData !== [] &&
          completedlistData.map((data, i) => {
            return (
              <>
                <p key={i}>
                  <div className="listData">{data}</div>
                  <div className="btn-position">
                    <button onClick={() => removeActivity(i)}>Done</button>
                  </div>
                </p>
              </>
            );
          })}
        <p className="List-heading">Completed Tasks</p>

        {incompletedlistData.length >= 1 && (
          <button className="clear-btn-position" onClick={removeAll}>
            Clear
          </button>
        )}
        {incompletedlistData !== [] &&
          incompletedlistData.map((data, i) => {
            return (
              <>
                <div key={i} className="listData">
                  {data}
                </div>
              </>
            );
          })}
      </div>
    </>
  );
}

export default Todo;
