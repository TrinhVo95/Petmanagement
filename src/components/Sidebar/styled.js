import styled from "styled-components";

export const NavWrapper = styled.nav(() => ({
  border: "1px solid transparent",
  height: "100vh",
  width: "80px",
  alignItems: "center",
  display: "flex",
  flexDirection: "column",
  backgroundColor: "#7386d5",
  color: "#fff",
  svg: {
    fontSize: "30px",
    marginTop: "20px",
  },
  a: {
    textDecoration: "none",
    color: "#fff",
  },
  ul: {
    listStyleType: "none",
    padding: 0,
    li: {
      marginTop: "40px",
      svg: {
        marginLeft: "5px",
      },
    },
  },
}));
