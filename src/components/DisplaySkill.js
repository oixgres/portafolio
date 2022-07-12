import { Grid } from 'semantic-ui-react';
import {InteractiveImage} from './collections/InteractiveImage';

const DisplaySkill = ({folder, images, sectionIndex, activeIndex }) => {    
    return(
        <Grid padded>
            <Grid.Row centered verticalAlign='middle'>
                {images.map((image, index=1) => (
                    <Grid.Column mobile={6} tablet={3} computer={2}>
                        <InteractiveImage
                            index={index}
                            activeIndex={activeIndex}
                            sectionIndex={sectionIndex}
                            image={image}
                            folder={folder}
                        />
                    </Grid.Column>
                ))}
            </Grid.Row>
        </Grid>
    );
}

export default DisplaySkill;