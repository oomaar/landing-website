import styled from "styled-components/macro";
import { About, Feature, Header } from "./components";

const App = () => {
  return (
    <Application>
      <Header />
      <Feature />
      <About />
    </Application>
  );
};

export default App;

const Application = styled.div``;