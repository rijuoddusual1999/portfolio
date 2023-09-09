import hoverEffect from "hover-effect";

import avtaar1 from "../images/osc1.jpg";
import avtaar2 from "../images/osc2.jpg";
import avtaar3 from "../images/heightMap.png";


new hoverEffect({
    parent: document.querySelector('.distortion'),
    intensity: 0.2,
    image1: avtaar1,
    image2: avtaar2,
    displacementImage:  avtaar3
});
