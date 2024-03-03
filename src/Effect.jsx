import {
  EffectComposer,
  GodRays,
} from "@react-three/postprocessing";
import { forwardRef, useEffect } from "react";

const Effect = forwardRef((props, ref) => {

  return (
    <EffectComposer>
      {ref.current && <GodRays sun={ref.current} samples={70} density={1.0} />}
    </EffectComposer>
  );
});

export default Effect;
