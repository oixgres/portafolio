import { Grid, Image} from "semantic-ui-react";
import Experience from "./Experience";

const Job = props => {
    const {job, workplace, date, image, skills, description} = props;

    return(
        <Grid padded stackable columns={2}><Grid.Row>
            <Grid.Column width={9} stretched>
                <Experience
                    job={job}
                    workplace={workplace}
                    date={date}
                    skills={skills}
                    description={description}
                />5
                </Grid.Column>
            <Grid.Column width={7}>
                <Image src={`images/jobs/${image}.png`}/>
                </Grid.Column>
        </Grid.Row></Grid>
    )
}

export default Job;