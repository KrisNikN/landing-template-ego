import { NextPage } from "next";
import { Hero, Play, MultiUse, NextLevel } from "sections";
import { Wrapper } from "components";
import { heroProps, playProps, multiUseProps, nextLevelProps } from "data";

const Home: NextPage = () => {
  return (
    <Wrapper>
      <Hero {...heroProps} />
      <Play {...playProps} />
      <MultiUse {...multiUseProps} />
      <NextLevel {...nextLevelProps} />
    </Wrapper>
  );
};

export default Home;
