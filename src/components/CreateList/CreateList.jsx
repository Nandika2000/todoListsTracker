import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateList = ({listData, setListData}) => {
        const [newListName, setNewListName] = useState("");
        const navigate = useNavigate();
        const onNewListNameChange = (event) => {
          setNewListName(event.target.value);
        };
      
        const onListAdd = () => {
          const addedList = {
            id: listData.length +1,
            name: newListName,
            tasks: [],
          };
          setListData((prevState) => [...prevState, addedList]);
          setNewListName("");
          navigate(-1);
        };
      
    return (<> <input value={newListName} onChange={onNewListNameChange}></input>
        <button onClick={onListAdd}>SAVE</button></>)
    }
export default CreateList;