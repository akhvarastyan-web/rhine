import { Hero } from './components/Hero/Hero';
import { StatsBand } from './components/StatsBand/StatsBand';
import { Vertical } from './components/Vertical/Vertical';
import { Traffic } from './components/Traffic/Traffic';
import { Partners } from './components/Partners/Partners';
import { WhyUs } from './components/WhyUs/WhyUs';
import { CTA } from './components/CTA/CTA';

export const Home = () => {
  return (
    <>
      <Hero />
      <StatsBand />
      <Vertical />
      <Traffic />
      <Partners />
      <WhyUs />
      <CTA />
    </>
  );
};
