import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { LISTS_ROUTE } from "../../constants/routes";
import { getItemBasedOnId } from "../../utils/common";

const EditTask = ({ listData, setListData }) => {
  const navigate = useNavigate();
  const { listId, taskId } = useParams();

  const [currentTask, setCurrentTask] = useState(null);

  useEffect(() => {
    const updatedCurrentTask = getItemBasedOnId(
      getItemBasedOnId(listData, listId)?.tasks,
      taskId
    );

    if (updatedCurrentTask) {
      setCurrentTask(updatedCurrentTask);
    } else {
      navigate(-1);
    }
  }, [listData, listId, taskId, navigate]);

  const onTaskTitleChange = (event) => {
    setCurrentTask({
      ...currentTask,
      title: event.target.value,
    });
  };

  const onTaskSave = () => {
    const updatedListData = listData.map((list) =>
      list.id === parseInt(listId)
        ? {
            ...list,
            tasks: list.tasks.map((task) =>
              task.id === parseInt(taskId) ? currentTask : task
            ),
          }
        : list
    );
    setListData(updatedListData);
    navigate(`${LISTS_ROUTE}/${listId}`);
  };

  return currentTask ? (
    <>
      <input
        value={currentTask.title}
        onChange={onTaskTitleChange}
      />
      <button onClick={onTaskSave}>Save</button>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        Back
      </button>
    </>
  ) : (
    <></>
  );
};

export default EditTask;
