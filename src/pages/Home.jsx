
// for imply animation 
import { motion, AnimatePresence } from "framer-motion"
// state library read about it voltio 
import { useSnapshot } from "valtio"

import {
    headContainerAnimation,
    headContentAnimation,
    headTextAnimation,
    slideAnimation
} from '../config/motion'
import state from "../store"
import { CustomButton } from "../components"


const Home = () => {
    // one current snap 
    const snap = useSnapshot(state);
    return (
        <AnimatePresence>
            {
                snap.intro && (
                    <motion.section className="home" {...slideAnimation('left')}>
                        <motion.header {...slideAnimation('down')}>
                            <img
                                src="./threejs.png"
                                alt="logo"
                                className="w-8 h-8 object-contain"
                            />
                        </motion.header>

                        <motion.div className="home-content" {...headContainerAnimation}>
                            <motion.div {...headTextAnimation}>
                                <h1 className="head-text">
                                    LET'S <br className="xl:block hidden" /> DO IT
                                </h1>
                            </motion.div>
                            <motion.div {...headContentAnimation} className="flex flex-col gap-5">
                                <p className="max-w- md font-normal text-gray-600 text-base">
                                    <strong>Unleash Your Style in 3D:</strong> Custom T-Shirts,
                                    Your Way! Discover the Power of Personalized
                                    Fashion with our Cutting-Edge 3D Customization
                                    Tool and Create Wearable Art that Reflects
                                    Your Unique Identity and Passion.
                                </p>
                                <CustomButton
                                    type="filled"
                                    title=" Customize It"
                                    handleClick={() => state.intro = false}
                                    customStyle='w-fit px-4 py-2.5 font-bold text-sm'

                                />
                            </motion.div>

                        </motion.div>
                    </motion.section>
                )
            }
        </AnimatePresence>
    )
}

export default Home