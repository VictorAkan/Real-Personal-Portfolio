import { Home } from "./Pages/Home/Home";
import { Routes,Route } from "react-router-dom";
import { Error } from "./Pages/Error/Error";
import { Contact } from "./Pages/Contact/Contact";
import { Projects } from "./Pages/Projects/Projects";

function App() {
  return (
    <Routes className="App">
      
      <Route path="/" element={<Home />} />

      <Route path="*" element={<Error />} />

      <Route path="/contact" element={<Contact />} />

      <Route path="/projects" element={<Projects />} />
      
    </Routes>
  );
}

export default App;
