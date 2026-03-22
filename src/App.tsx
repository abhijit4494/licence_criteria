import { HashRouter as Router, Routes, Route } from "react-router-dom";
import AudienceView from "./pages/audience";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AudienceView />} />
      </Routes>
    </Router>
  );
}

export default App;