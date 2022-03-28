import { Grid } from 'semantic-ui-react';
import './DisplaySkill.css';

const DisplaySkill = ({folder, images}) => {
    return(
        <Grid centered padded>
            <div className='container-skills'>
                {images.map((image) => (
                    <img
                        src={`/images/${folder}/${image}.png`}
                        alt={image}
                        width='100%'
                    />
                    ))}
            </div>
        </Grid>
    );
}

export default DisplaySkill;