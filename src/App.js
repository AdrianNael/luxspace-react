import "assets/css/app.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "pages/HomePage";
import Details from "pages/Details";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage/>} />{" "}
          <Route path="/categories/:idc" element={<Details/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
