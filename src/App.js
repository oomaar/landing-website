import styled from "styled-components/macro";
import { About, Contact, Feature, Header, Presentation } from "./components";
import aboutData from "./data/aboutData.json";

const App = () => {
  return (
    <Application>
      <Header />
      <Feature />
      {aboutData.map(data => (
        <About
          key={data.id}
          title={data.title}
          image={data.image}
          button={data.button}
        />
      ))}
      <Presentation />
      <Contact />
    </Application>
  );
};

export default App;

const Application = styled.div``;