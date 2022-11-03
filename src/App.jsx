import { useState } from "react";
import "./App.scss";
import SchemaToggle from "./components/SchemaToggle";

function App() {
  const [darkSchema, setDarkSchema] = useState(false);

  function toggleDarkMode() {
    setDarkSchema((prevDarkSchema) => !prevDarkSchema);
  }

  return (
    <div className={`container ${darkSchema ? "dark" : "light"}`}>
      <SchemaToggle darkSchema={darkSchema} toggleDarkMode={toggleDarkMode}/>
    </div>
  );
}

export default App;
