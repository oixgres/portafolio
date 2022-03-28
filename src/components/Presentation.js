import React from "react";
import Header from "./Header";
import { Grid, Progress } from "semantic-ui-react";
import { motion } from "framer-motion";
import './Presentation.css';

const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delayChildren: 0.3,
            staggerChildren: 0.3,
        }
    }
};

const item = {
    hidden: { y: 50, opacity: 0 },
    visible: {
    y: 0,
    opacity: 1
    }
};
const Presentation = () => {
    return (
        <Grid columns={2} stackable doubling padded>
            <Grid.Row>
                <Grid.Column>
                    <Header
                        name='Sergio Enrique'
                        size='7rem'
                        color='#fff'
                        position='left '
                    />
                    <Header
                        name='Guerra Cervantes'
                        size='7em'
                        color={'#fff'}
                        position='left '
                    /> 
                    <Progress percent={25} color='blue' size="small"/>
                    <p style={{'color':'white', 'fontStyle':'italic', 'textAlign':'left', 'fontSize':'1.5em'}}>
                        “Truth can only be found in one place: the code.” <br/>
                        ― Robert C. Martin, Clean Code: A Handbook of Agile Software
                    </p>
                </Grid.Column>
                <Grid.Column>
                    <Grid centered padded>
                        <motion.ul
                            initial='hidden'
                            animate='visible'
                            variants={container}
                            className='container'
                        >
                        {['c','python','aws','react'].map((logo, index) => (
                            <motion.img
                                key={index}
                                variants={item}
                                src={`/images/main-icons/${logo}.png`}
                                width='100%'                            
                            />
                        ))}
                        </motion.ul>
                    </Grid>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    );
}

export default Presentation;

