import "./styles.css";
import { Routes, Route } from "react-router-dom";
import QuoteGenerator from "./QuoteGenerator";
import Newsletter from "./Newsletter";
import HomePage from "./HomePage";
import ErrorPage from "./ErrorPage";
import RecipeFinder from "./RecipeFinder";

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="quotes" Component={QuoteGenerator} />
        <Route path="/newsletter" Component={Newsletter} />
        <Route path="/recipe-finder" Component={RecipeFinder} />
        <Route path="*" Component={ErrorPage} />
      </Routes>
    </div>
  );
};
export default App;
