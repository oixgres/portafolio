import { Grid, Header, Card, Image, ImageGroup, Reveal} from 'semantic-ui-react';
import './DisplaySkill.css';

const DisplaySkill = ({folder, images}) => {
    return(
        <Grid centered padded>
            <Image.Group size='small'>
                {images.map((image) => (
                    <Image
                        src={`/images/${folder}/${image}.png`}
                        alt={image}
                        bordered
                    />
                ))}
            </Image.Group>
        </Grid>
    );
}

export default DisplaySkill;