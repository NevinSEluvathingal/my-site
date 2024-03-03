import { OrbitControls, Text3D, Center, useTexture } from "@react-three/drei";
import { useRef } from "react";
import Effect from "./Effect";

const Scene = () => {
  const circleRef = useRef();
  const texture=useTexture('./git.png');
  const texture2=useTexture('./image.png');
  const texture3=useTexture('./image5.png');
  const texture4=useTexture('./icons8-eye-64.png')
const set=()=> {
  window.location.href = 'https://github.com/NevinSEluvathingal';
}
const set2=()=>{
  window.location.href = 'https://instagram.com/nevin_s_eluvathingal'
}
const set3=()=>{
  window.location.href = 'https://nevincreates.xyz/upload'
}
const set4=()=>{
  window.location.href = 'https://nevincreates.xyz/show'
}
  return (
    <>
      <OrbitControls />
      <Effect ref={circleRef} />      

      <mesh position-x={-5} position-y={2} onClick={set} height={1}>
      <boxGeometry args={[0.5, 0.5]} />
      <meshBasicMaterial map={texture} />
      </mesh>
    
      <mesh position-x={5} position-y={2} onClick={set2} height={1}>
      <boxGeometry args={[0.5, 0.5]} />
      <meshBasicMaterial map={texture2} />
      </mesh>

      <mesh position-x={1} position-y={7} position-z={2} onClick={set3} >
      <boxGeometry args={[1, 1]} />
      <meshBasicMaterial map={texture3}/>
      </mesh>

      <mesh position-x={-1} position-y={-5} position-z={1} onClick={set3} >
      <boxGeometry args={[0.5, 0.5]} />
      <meshBasicMaterial map={texture4}/>
      </mesh>

      <mesh position-z={-12} ref={circleRef}>
        <circleGeometry args={[7, 64]} />
        <meshBasicMaterial color="orange" />
      </mesh>
      <Center>
       <Text3D font="./2.json" height={1}>NEVIN</Text3D>
       <meshNormalMaterial/>       
      </Center>
    </>
  );
};

export default Scene;
