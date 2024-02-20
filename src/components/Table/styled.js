import styled from "styled-components";

export const TableWrapper = styled.table(() => ({
  width: "90%",
  maxWidth: "90%",
  margin: "50px auto",
  borderCollapse: "collapse",

  "tr,th": {
    borderBottom: "2px solid black",
    textAlign: "center",
  },
  ".table-body tr": {
    borderColor: "#dee2e6",
    th: {
      borderColor: "#dee2e6",
    },
  },
  ".btn-danger": {
    border: "1px solid #dc3545",
    padding: "0.375rem 0.75rem",
    borderRadius: "0.25rem",
    margin: "5px 10px 5px 20px",
    backgroundColor: "#dc3545",
    color: "#fff",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#bb2d3b",
      borderColor: "#b02a37",
    },
    "&:focus": {
      boxShadow: "0 0 0 0.25rem rgba(225,83,97,.5)",
    },
  },
  ".btn-success": {
    border: "1px solid #198754",
    padding: "0.375rem 0.75rem",
    borderRadius: "0.25rem",
    margin: "5px 0 5px 0",
    backgroundColor: "#198754",
    color: "#fff",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#157347",
      borderColor: "#146c43",
    },
    "&:focus": {
      boxShadow: "0 0 0 0.25rem rgba(60,153,110)",
    },
  },
}));
