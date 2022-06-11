import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { CurrentUserProvider } from "./context/currentUser";
import Homepage from "./pages/Homepage";
// import Cards from "./pages/Cards";

const App = () => {
  return (
    <CurrentUserProvider>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Homepage />} />
        {/* <Route path="cards" element={<Cards />} /> */}
      </Route>
    </Routes>
    </CurrentUserProvider>
  );
};

export default App;
