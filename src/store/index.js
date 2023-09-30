import { proxy } from "valtio";
// like react context it is a state managment 
const state = proxy({
    // flag are we currently in home page or not 
    intro: true,
    // default color 
    color: '#EFBD48',
    // are we displaying the logo on the shirt 
    isLogoTexture: true,

    isFullTexture: false,
    // initial logo before changing 
    logoDecal: './threejs.png',
    // initial fill texture shirt 
    fullDecal: './threejs.png',

});

export default state;