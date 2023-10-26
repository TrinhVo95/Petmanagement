import React from "react";
import Sidebar from "./components/Sidebar";
import FormSubmit from "./components/FormSubmit";
import Table from "./components/Table";

const App = () => {
  return (
    <div style={{ display: "flex", gap: "20px" }}>
      <Sidebar />
      <div style={{ flex: 1 }}>
        <FormSubmit />
        <Table />
      </div>
    </div>
  );
};

export default App;
