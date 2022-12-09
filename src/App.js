import { Home } from "./Pages/Home/Home";
import { Routes,Route } from "react-router-dom";
import { Error } from "./Pages/Error/Error";

function App() {
  return (
    <Routes className="App">
      
      <Route path="/" element={<Home />} />

      <Route path="*" element={<Error />} />
      
    </Routes>
  );
}

export default App;
