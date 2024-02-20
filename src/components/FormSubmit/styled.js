import styled from "styled-components";

export const FormWrapper = styled.div(() => ({
  flex: 1,
  ".title": {
    textAlign: "center",
    fontSize: "2.5rem",
    fontWeight: 500,
    backgroundColor: "#f8f9fa",
    margin: "30px 20px",
    padding: "20px",
    boxShadow: "0 .5rem 1rem rgba(0,0,0,.15)",
  },
  ".formSubmit": {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  ".form-group": {
    display: "flex",
    gap: "10px",
    alignItems: "center",
    marginBottom: "15px",
  },
  ".formLabel": {
    width: "13%",
  },

  ".form-control": {
    width: "100%",
    padding: "0.375rem 0.75rem",
    fontSize: "1rem",
    fontWeight: 400,
    lineHeight: 1.5,
    color: "#212529",
    backgroundColor: "#fff",
    backgroundClip: "padding-box",
    border: "1px solid #ced4da",
    appearance: "none",
    borderRadius: " 0.25rem",
    transition: "border-color .15s ease-in-out,box-shadow .15s ease-in-out",
    "&:focus": {
      color: "#212529",
      backgroundColor: "#fff",
      borderColor: "#86b7fe",
      outline: 0,
      boxshadow: " 0 0 0 0.25rem rgba(13,110,253,.25)",
    },
  },
  ".input-weight": {
    gap: "14px",
  },
  ".input-color": {
    width: "15%",
    marginRight: "140px",
  },
  ".checkbox-field": {
    display: "flex",
    gap: "10px",
    justifyContent: "center",
    marginBottom: "20px",
  },
  ".btn": {
    border: "1px solid transparent",
    padding: "0.375rem 0.75rem",
    borderRadius: "0.25rem",
    marginRight: "10px",
    cursor: "pointer",
  },
  ".btn-primary": {
    color: "#fff",
    backgroundColor: "#0d6efd",
    borderColor: "#0d6efd",
    "&:hover": {
      backgroundColor: "#0b5ed7",
      borderColor: "#0a58ca",
    },
    "&:focus": {
      boxShadow: "0 0 0 0.25rem rgba(49,132,253,.5)",
    },
  },
  ".btn-warning": {
    color: "#000",
    backgroundColor: "#ffc107",
    borderColor: "#ffc107",
    "&:hover": {
      backgroundColor: "#ffca2c",
      borderColor: "#ffc720",
    },
    "&:focus": {
      boxShadow: "0 0 0 0.25rem rgba(217,164,6,.5)",
    },
  },
  ".error": {
    color: "#ff0000",
  },
}));
