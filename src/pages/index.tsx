import { NextPage } from "next";
import { Hero } from "sections";
import { Wrapper } from "components";

const Home: NextPage = () => {
  return (
    <Wrapper>
      <Hero />
    </Wrapper>
  );
};

export default Home;
