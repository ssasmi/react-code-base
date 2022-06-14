import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import Homepage from "./pages/Homepage";
import Register from "./pages/Register";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path="/register" element={<Register />} />
      </Route>
    </Routes>
  );
};

export default App;
