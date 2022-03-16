import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { TASKS_ROUTE,LISTS_ROUTE } from "../../constants/routes";
const ViewTasks = ({listData}) => {
    const navigate = useNavigate();
    const { listId } = useParams();
    const [currentList, setCurrentList] = useState(null);
    useEffect(() => {
        const updatedCurrentList = listData.find(
        (list) => list.id === parseInt(listId)
        );
        if (updatedCurrentList) {
        setCurrentList(updatedCurrentList);
        } else {
        navigate(-1);
        }
    }, [currentList, listId, listData, navigate]);
    return currentList ? (
        <>
          <div>
            <h1>{currentList.name}</h1>
            <button
              onClick={() => {
                navigate(`${LISTS_ROUTE}/${listId}${TASKS_ROUTE}/create`);
              }}
            >
              ADD TASK
            </button>
          </div>
          <ul>
            {currentList.tasks.map((task) => {
              return (
                <li key={task.id}>
                  {task.title}
                  <button
                    onClick={() => {
                      navigate(
                        `${LISTS_ROUTE}/${currentList.id}${TASKS_ROUTE}/${task.id}`
                      );
                    }}
                  >
                    Edit
                  </button>
                </li>
              );
            })}
          </ul>
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
    


export default ViewTasks;