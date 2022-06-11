import { Routes, Route } from "react-router-dom";
import CurrentUserChecker from "./components/CurrentUserChecker";
import { Layout } from "./components/Layout";
import { CurrentUserProvider } from "./context/currentUser";
import Homepage from "./pages/Homepage";
import { GlobalFeed } from 'pages/GlobalFeed';

// import Cards from "./pages/Cards";

const App = () => {
  return (
    <CurrentUserProvider>
      <CurrentUserChecker>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<GlobalFeed />} />
            <Route path="cards" element={<Homepage />} />
          </Route>
        </Routes>
      </CurrentUserChecker>
    </CurrentUserProvider>
  );
};

export default App;
