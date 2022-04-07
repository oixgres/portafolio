import { Grid, Image } from "semantic-ui-react";
import Experience from "./Experience";

const Project = ({ project, date, image, skills }) => {
    return (
        <Grid><Grid.Row>
            <Grid.Column width={7} stretched>
                <Image src={`/images/projects/samsung-devops.png`}/>
            </Grid.Column>
            <Grid.Column width={9} stretched>
                <Experience
                    job={project}
                    // workplace={"Samsung"}
                    date={date}
                    skills={skills}
                />
            </Grid.Column>
        </Grid.Row></Grid>
    )
}

export default Project;