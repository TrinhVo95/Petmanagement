import React from "react";
import Sidebar from "./components/Sidebar";
import FormSubmit from "./components/FormSubmit";

const App = () => {
  return (
    <div style={{ display: "flex", gap: "20px" }}>
      <Sidebar />
      <FormSubmit />
    </div>
  );
};

export default App;
