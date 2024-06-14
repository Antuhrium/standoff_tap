import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import FriendsPage from "./pages/FriendsPage";

import RatePage from "./pages/RatePage";
import SquadPage from "./pages/SquadPage";
import Boost from "./pages/Boost";
import Tasks from "./pages/Tasks";
import TaskItem from "./pages/TaskItem";

function App() {

  // const urlParams = new URLSearchParams(window.location.search);
  // const uid = urlParams.get('user_uid');
  // console.log(uid);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/friends" element={<FriendsPage />} />
          <Route path="/rating" element={<RatePage />} />
          <Route path="/rating/:id" element={<SquadPage />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/tasks/:id" element={<TaskItem />} />
          <Route path="/market" element={<Boost />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
