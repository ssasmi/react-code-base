import { Routes, Route } from "react-router-dom";
import CurrentUserChecker from "./components/CurrentUserChecker";
import { Layout } from "./components/Layout";
import { CurrentUserProvider } from "./context/currentUser";
import Homepage from "./pages/Homepage";
import GlobalFeed from "./pages/GlobalFeed";
import Article from "./pages/Article";
import { UserProfile } from "./pages/UserProfile";
import Authentication from "./pages/Authentication";

// import Cards from "./pages/Cards";

const App = () => {
  return (
    <CurrentUserProvider>
      <CurrentUserChecker>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<GlobalFeed />} />
            <Route path="cards" element={<Homepage />} />
            <Route path="/profiles/:slug" element={<UserProfile />} />
            {/* <Route path="/profiles/:slug" element={<UserProfile />} /> */}
            <Route path="/articles/:id" element={<Article />} />
            <Route path="/login" element={<Authentication />} />
            <Route path="/register" element={<Authentication />} />
          </Route>
        </Routes>
      </CurrentUserChecker>
    </CurrentUserProvider>
  );
};

export default App;
