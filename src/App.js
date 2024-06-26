import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About";
import Signin from "./pages/Signin/Signin";
import Saved from "./pages/Saved/Saved";
import Recipes from "./pages/Recipes/Recipes";
import RecipeView from "./pages/Recipes/RecipeView";
import Main from "./pages/Editor/Main";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/saved" element={<Saved />} />
        <Route
          path="/recipes/:searchType/:searchedItem"
          element={<Recipes />}
        />
        <Route path="/recipes/view/:name" element={<RecipeView />} />
        {/* Test route */}
        <Route path="/editor/main" element={<Main />} />
        {/* Route that does not exists */}
        <Route path="*" element={<h1>The route doesn't exist.</h1>} />
      </Routes>
    </>
  );
}

export default App;
