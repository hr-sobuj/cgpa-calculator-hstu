import {
  Route, Routes
} from "react-router-dom";
import CGPACalculator from "./pages/CGPACalculator";
import GPACalculator from "./pages/GPACalculator";
import GPAPrint from "./pages/GPAPrint";
import Home from "./pages/Home";


function App() {
  return (
    <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/gpa_calculator" element={<GPACalculator />} />
     <Route path="/cgpa_calculator" element={<CGPACalculator />} />
     <Route path="/gpa_result" element={<GPAPrint />} />
  </Routes>
  );
}

export default App;
