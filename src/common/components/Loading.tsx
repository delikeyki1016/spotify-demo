import { CircularProgress } from "@mui/material";
import styled from "styled-components";


const Loading = () => {
  return <Container>
    <CircularProgress color="primary" />
  </Container>;
};

export default Loading;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
