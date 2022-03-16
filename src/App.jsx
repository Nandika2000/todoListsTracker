import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllLists from "./components/AllLists/AllLists";
import CreateList from "./components/CreateList/CreateList";
import { LISTS } from "./constants/lists";
import { CREATE_LIST, LISTS_ROUTE ,TASKS_ROUTE} from "./constants/routes";
import ViewTasks from "./components/ViewTasks/ViewTasks";
import CreateTask from "./components/CreateTask/CreateTask";
import EditTask from "./components/EditTask/EditTask";

function App() {
  const [listData,setListData] = useState(LISTS)
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path={LISTS_ROUTE} element={<AllLists listData={listData}></AllLists>}>
        </Route>
        <Route path ={CREATE_LIST} element={<CreateList listData={listData} setListData={setListData}> </CreateList>}>
        </Route>
        <Route path ={`${LISTS_ROUTE}/:listId`} element={<ViewTasks listData={listData}></ViewTasks>}>
        </Route>
        <Route path={`${LISTS_ROUTE}/:listId${TASKS_ROUTE}/create`} element={<CreateTask listData={listData} setListData={setListData} />}>
        </Route>
        <Route path={`${LISTS_ROUTE}/:listId${TASKS_ROUTE}/:taskId`}element={<EditTask listData={listData} setListData={setListData} />}>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
