import {useState } from "react";
import { useParams, useNavigate} from "react-router-dom";


const CreateTask = ({ listData, setListData }) => {
    const {listId} = useParams(); 
    const [newTaskName, setNewTaskName] = useState("");
    const navigate = useNavigate();
    const onNewTaskNameChange = (event) => {
      setNewTaskName(event.target.value);
    };

  const taskId = listData[parseInt(listId)-1].tasks.length+1;
    const newTask ={
    id: taskId,
    title: newTaskName
    }

    const onTaskAdd = () => {
        const updatedListData = listData.map((list) =>
        {
            if( list.id === parseInt(listId)){
                list.tasks.push(newTask);
            }
            return list;
        }
        );
        setListData(updatedListData);
        navigate(-1);
      };
    return (<> <input value={newTaskName} onChange={onNewTaskNameChange}></input>
        <button onClick={onTaskAdd}>SAVE</button></>)
    }
export default CreateTask;
