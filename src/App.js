import styled from "styled-components/macro";
import { Feature, Header } from "./components";

const App = () => {
  return (
    <Application>
      <Header />
      <Feature />
    </Application>
  );
};

export default App;

const Application = styled.div``;