import React from "react";
import { useNavigate } from "react-router-dom";
import { CREATE_LIST,  LISTS_ROUTE} from "../../constants/routes";

const AllLists = ({listData}) => {
    const navigate = useNavigate();
    return( 
        <>
        <button onClick= {() => {navigate(CREATE_LIST);}}>CREATE LIST</button>
        <ul>
        {listData.map((list) => {
            return (
                <li key={list.id}>
                {list.name}
                <button onClick={() => navigate(`${LISTS_ROUTE}/${list.id}`)}>View Tasks</button>
                </li>)
                })}
        </ul>
        </>)

} 
export default AllLists;