import React, {useEffect} from 'react';
import Slider from '../containers/Slider';
import Services from '../containers/Services';
import Aboutdesc from '../containers/Aboutdesc';
import Newsletter from '../containers/Newsletter';
const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
   
    <>
<Slider />
    <Services />
    <Aboutdesc />
    <Newsletter />
</>

     
  );
}

export default Home;