import { type FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/register";
import Home from "./pages/home";
import Detail from "./pages/detail";
import Protected from "./components/protected";
import Create from "./pages/create";
import Edit from "./pages/edit";
import Dashboard from "./pages/dashboard";

const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/" element={<Protected />}>
          <Route index element={<Home />} />
          <Route path="/shoe/:id" element={<Detail />} />
        </Route>

        <Route path="/admin" element={<Protected allowedRoles={["admin"]} />}>
          <Route index element={<Dashboard />} />
          <Route path="create" element={<Create />} />
          <Route path="edit/:id" element={<Edit />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
