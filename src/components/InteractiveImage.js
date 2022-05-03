import { Image, Popup} from 'semantic-ui-react';
import { motion } from "framer-motion";

const InteractiveImage=({index,activeIndex,sectionIndex,image,folder}) => {
    const toCapitalize = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    
    return(
        <motion.div
            animate={
                activeIndex === sectionIndex ?
                {opacity: 1,y:[30, -30, 0],x: [-30*index, -15*index, 0]}:
                {opacity:0}}
            transition={
                activeIndex === -1 ?
                {opacity: {duration: 0}} :
                {delay:0.1*(index+1), duration: 0.3}}
        >
            <motion.div whileHover={{scale:1.2}}>
                <Popup
                    trigger={<Image src={`images/${folder}/${image}.png`}/>}
                    position='top down'
                    style={{opacity:0.5}}
                    inverted
                >
                    <h2>{toCapitalize(image.replace(/-/g," ",-1))}</h2>
                </Popup>
            </motion.div>
        </motion.div>
    )

}

export default InteractiveImage;