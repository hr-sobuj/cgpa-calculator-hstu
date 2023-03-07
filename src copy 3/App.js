import {
  Route, Routes
} from "react-router-dom";
import CGPACalculator from "./pages/CGPACalculator";
import CGPAPrint from "./pages/CGPAPrint";
import CoverPage from "./pages/CoverPage";
import CoverPrint from "./pages/CoverPrint";
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
     <Route path="/cgpa_result" element={<CGPAPrint />} />
     <Route path="/cover_page" element={<CoverPage />} />
     <Route path="/print_cover" element={<CoverPrint />} />
  </Routes>
  );
}

export default App;
