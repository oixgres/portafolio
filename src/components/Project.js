import { Grid, Image } from "semantic-ui-react";
import Experience from "./Experience";

const Project = ({ project, date, image, skills, description, url, repo }) => {
    return (
        <Grid padded columns={2} stackable><Grid.Row>
            <Grid.Column width={7} stretched >
                <Image src={`images/projects/${image}.png`} />
            </Grid.Column>
            <Grid.Column width={9} stretched>
                <Experience
                    job={project}
                    date={date}
                    skills={skills}
                    description={description}
                    url={url}
                    repo={repo}
                />
            </Grid.Column>
        </Grid.Row></Grid>
    )
}

export default Project;