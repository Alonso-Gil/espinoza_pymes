import React from 'react';
import Lottie from 'react-lottie';
import Skull from '../../../assets/lotties/81807-meditation-skull.json';



const AvisosSA = () => {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: Skull,
         rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
          }
      };
      
    return ( 
        <>
            <h1>Avisos</h1>
            <Lottie options={defaultOptions} height={400} width={400} />
        </>
     );
}
 
export default AvisosSA;