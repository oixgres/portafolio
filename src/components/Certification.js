import { Modal,Image,Button, Icon } from "semantic-ui-react";
import { useState } from "react";

const Certification = props => {
    const { title, image } = props;
    const [open, setOpen] = useState(false);
    
    return(
        <Modal
            invert
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            trigger={ <Image fluid src={`images/certifications/${image}.jpg`} />}
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