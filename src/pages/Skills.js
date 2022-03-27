import Navbar from "../components/Navbar";
import { Segment } from "semantic-ui-react";
import { motion } from "framer-motion";


const Skills = () => {
    return (
        <div>
            <Navbar location={'skills'}/>
            
                <motion.li
                    transition={{delay: 0.3}}
                    animate={{x:[200,0], visibility: "visible", opacity: 1}} 
                    initial={{visibility: 'hidden', opacity: 0}}
                >
                    <Segment inverted padded>
                        <h1>Programming Languages</h1>
                    </Segment>
                </motion.li>
                
                <motion.li
                    transition={{delay: 0.6}}
                    animate={{x:[200,0], visibility: "visible", opacity: 1}} 
                    initial={{visibility: 'hidden', opacity: 0}}
                >
                    <Segment inverted padded>
                        <h1>Programming Languages</h1>
                    </Segment>
                </motion.li>

                <motion.li
                    transition={{delay: 0.9}}
                    animate={{x:[200,0], visibility: "visible", opacity: 1}} 
                    initial={{visibility: 'hidden', opacity: 0}}
                >
                    <Segment inverted padded>
                        <h1>Programming Languages</h1>
                    </Segment>
                </motion.li>
        </div>
    );
}

export default Skills;