import React from "react";
import {motion } from "framer-motion"
import { Segment, Accordion, Icon } from "semantic-ui-react";


const Skill = ({title, index, delay, animateX, activeIndex, setactiveIndex, children}) => {
    const handleClick = (e, titleProps) => {
        const { index } = titleProps;
        const newIndex = activeIndex === index ? -1 : index;

        setactiveIndex(newIndex);
    }

    return (
        <motion.li
            transition={{delay: index*delay}}
            initial={{visibility: 'hidden', opacity: 0}}
            animate={{x:animateX, visibility: "visible", opacity: 1}}
            style={{listStyleType: " "}}
        >
            <Segment inverted padded>
                <Accordion inverted>
                    <Accordion.Title
                        active={activeIndex === index}
                        index={index}
                        onClick={handleClick}
                    >
                        <h1>{title}<Icon name='dropdown'/></h1>
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex===index} >
                        <div>{children}</div>
                    </Accordion.Content>
                </Accordion>
            </Segment>
        </motion.li>
    )
}

export default Skill;