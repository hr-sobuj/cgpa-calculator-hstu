import {
  Route, Routes
} from "react-router-dom";
import GPACalculator from "./pages/GPACalculator";
import ResultPrint from "./pages/ResultPrint";


function App() {
  return (
    <Routes>
     <Route path="/" element={<GPACalculator />} />
     <Route path="/result" element={<ResultPrint />} />
  </Routes>
  );
}

export default App;
