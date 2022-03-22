import React from "react";
import Header from "./Header";
import { Grid } from "semantic-ui-react";
import { motion } from "framer-motion";

const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 1,
      }
    }
  };
  
  const item = {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };
const Presentation = () => {
    return (
        <Grid columns={2} padded>
            <Grid.Row>
                <Grid.Column mobile={16} computer={8}>
                    <Header
                        name='Sergio Enrique'
                        size='7em'
                        color='#fff'
                        position='left '
                    />
                    <Header
                        name='Guerra Cervantes'
                        size='7em'
                        color='#798086'
                        position='left '
                    /> 
                </Grid.Column>
                <Grid.Column mobile={16} computer={8}>
                    {/* <img src="images/test-square.png"></img> */}
                     <motion.ul
                        initial='hidden'
                        animate='visible'
                        variants={container}
                     >
                        <motion.img
                            src='images/test-square.png'
                            width={'50%'}
                            height={'50%'}
                            variants={item}
                        >
                        </motion.img>
                     </motion.ul>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    );
}

export default Presentation;

