import { NextPage } from "next";
import { Hero, Play, MultiUse } from "sections";
import { Wrapper } from "components";
import { heroProps, playProps } from "data";

const Home: NextPage = () => {
  return (
    <Wrapper>
      <Hero {...heroProps} />
      <Play {...playProps} />
      <MultiUse />
    </Wrapper>
  );
};

export default Home;
