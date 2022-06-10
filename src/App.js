import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import Homepage from "./pages/Homepage";
import Cards from "./pages/Cards";
import Tickets from "./pages/Tickets";
import PrivateRoute from "./pages/PrivateRoute";
import Dashboard from "./pages/Dashboard";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path="cards" element={<Cards />} />
        <Route path="tickets" element={<Tickets />} />
        <PrivateRoute path="/dashboard" exact>
          <Route path="dashboard" element={<Dashboard />} />
        </PrivateRoute>
      </Route>
    </Routes>
  );
};

export default App;
