import './DisplaySkill.css';
import { Grid, Image} from 'semantic-ui-react';
import { motion } from 'framer-motion';

const DisplaySkill = ({folder, images, sectionIndex, activeIndex }) => {
    return(
        <Grid padded>
            <Grid.Row centered verticalAlign='middle'>
                {images.map((image, index=1) => (
                    <Grid.Column mobile={6} tablet={3} computer={2}>
                        <motion.div
                            animate={
                                activeIndex === sectionIndex ?
                                {
                                    opacity: 1, 
                                    y:[30, -30, 0],
                                    x: [-30*index, -15*index, 0]
                                }:
                                {opacity:0}} 
                                transition={
                                    activeIndex === -1 ?
                                    {opacity: {duration: 0}} :
                                    {delay:0.1*(index+1), duration: 0.3}}
                        >
                            <Image
                                src={`/images/${folder}/${image}.png`}
                                alt={image}
                                />
                        </motion.div>
                    </Grid.Column>
                ))}
            </Grid.Row>
        </Grid>
    );
}

export default DisplaySkill;