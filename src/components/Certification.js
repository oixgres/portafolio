import { Modal,Image,Button, Icon } from "semantic-ui-react";
import { useState } from "react";

import {ZoomInImage} from "./collections/InteractiveImage";
import { motion } from "framer-motion";
const Certification = props => {
    const { title, image } = props;
    const [open, setOpen] = useState(false);
    
    return(
        <Modal
            closeIcon
            invert
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            trigger={<motion.div whileHover={{scale:1.1}}><Image src={`images/certifications/${image}.jpg`}/></motion.div> }
            // trigger={<ZoomInImage image={image} folder="certifications"/>}
        >
            <Modal.Content image>
                <Image fluid src={`images/certifications/${image}.jpg`} />
            </Modal.Content>
            <Modal.Actions>
                <Button color='green' onClick={() => setOpen(false)}>
                    <Icon name='checkmark' /> Got it
                </Button>
            </Modal.Actions>
        </Modal>
    )
}

export default Certification;