import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import Homepage from "./pages/Homepage";
import Cards from "./pages/Cards";
import Tickets from "./pages/Tickets";
import Dashboard from "./pages/Dashboard";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path="cards" element={<Cards />} />
        <Route path="tickets" element={<Tickets />} />
        <Route path="dashboard" element={<Dashboard />} />

      </Route>
    </Routes>
  );
};

export default App;
