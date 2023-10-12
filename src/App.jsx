import { Register } from "./components/Register";
import Login from "./components/Login";
import Home from "./components/Home";
import Layout from "./components/Layout";
import Editor from "./components/Editor";
import Admin from "./components/Admin";
import Missing from "./components/Missing";
import Unauthorized from "./components/Unauthorized";
import Chatbot from "./components/Chatbot";
import Lounge from "./components/Lounge";
import LinkPage from "./components/LinkPage";
import RequireAuth from "./components/RequireAuth";
// import PersistLogin from "./components/PersistLogin";
import { Routes, Route } from "react-router-dom";
import PersistLogin from "./components/PersistLogin";
import Map from "./components/Map";
// import GetStarted from "./components/GetStarted";
import GetStarted from "./components/GetStarted";
import Diagnose from "./components/Diagnose";

const ROLES = {
  User: 2001,
  Editor: 1984,
  Admin: 5050,
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* public routes */}

        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="linkpage" element={<LinkPage />} />
        <Route path="unauthorized" element={<Unauthorized />} />
        <Route path="/" element={<GetStarted />} />
        <Route path="/home" element={<Home />} />
        <Route path="store" element={<Map />} />
        <Route path="diagnose" element={<Diagnose />} />

        {/* ROUTES TO PROTECT */}
        <Route element={<PersistLogin />}>
          <Route element={<RequireAuth allowedRoles={[ROLES.User]} />}>
            {/* <Route path="/" element={<Home />} /> */}
          </Route>
          <Route element={<RequireAuth allowedRoles={[ROLES.User]} />}>
            <Route path="chatbot" element={<Chatbot />} />
          </Route>
          <Route element={<RequireAuth allowedRoles={[ROLES.User]} />}>
            {/* <Route path="diagnose" element={<Diagnose />} /> */}
          </Route>
          <Route element={<RequireAuth allowedRoles={[ROLES.User]} />}>
            {/* <Route path="store" element={<Map />} /> */}
          </Route>
          <Route element={<RequireAuth allowedRoles={[ROLES.User]} />}>
            <Route path="map" element={<Map />} />
          </Route>

          <Route element={<RequireAuth allowedRoles={[ROLES.Editor]} />}>
            <Route path="editor" element={<Editor />} />
          </Route>

          <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
            <Route path="admin" element={<Admin />} />
          </Route>

          <Route
            element={<RequireAuth allowedRoles={[ROLES.Editor, ROLES.Admin]} />}
          >
            <Route path="lounge" element={<Lounge />} />
          </Route>
        </Route>

        {/* Catch all */}
        <Route path="*" element={<Missing />} />
      </Route>
    </Routes>
  );
};

export default App;
