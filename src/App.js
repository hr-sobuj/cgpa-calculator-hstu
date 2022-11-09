import {
  Route, Routes
} from "react-router-dom";
import GPACalculator from "./pages/GPACalculator";


function App() {
  return (
    <Routes>
     <Route path="/" element={<GPACalculator />} />
  </Routes>
  );
}

export default App;
