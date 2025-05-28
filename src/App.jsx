import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import GameLevelThree from "./pages/GameLevelThree/GameLevelThree";
import FirstGameLevelOne from "./pages/GameLevelOne/FirstGameLevelOne";
import SecondGameLevelOne from "./pages/GameLevelOne/SecondGameLevelOne";
import GameLevelTwo from "./pages/GameLevelTwo/GameLevelTwo";
import Home from "./pages/Home/Home";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>| <Link to="/level-1-1">Level 1-1</Link> |{" "}
        <Link to="/level-1-2">Level 1-2</Link> |{" "}
        <Link to="/level-2">Level 2</Link> | <Link to="/level-3">Level 3</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/level-1-1" element={<FirstGameLevelOne />} />
        <Route path="/level-1-2" element={<SecondGameLevelOne />} />
        <Route path="/level-2" element={<GameLevelTwo />} />
        <Route path="/level-3" element={<GameLevelThree />} />
      </Routes>
    </Router>
  );
}

export default App;
