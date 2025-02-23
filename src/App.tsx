
import Header from "./components/Home/Header";
import HomePage from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import SkillsPage from "./pages/SkillsPage";
import WorkPage from "./pages/WorkPage";
import { Routes, Route } from "react-router-dom"; // ✅ Correct import

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/work" element={<WorkPage />} />
      </Routes>

      <Header />
    </div>
  );
}

export default App;
