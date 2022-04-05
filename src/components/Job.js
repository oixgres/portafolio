import { Grid, Image} from "semantic-ui-react";
import Experience from "./Experience";

const Job = ({job, workplace,date,image,skills}) =>{
    return(
        <Grid columns={3}><Grid.Row>
            <Grid.Column width={9} stretched>
                <Experience
                    job={job}
                    workplace={workplace}
                    date={date}
                    skills={skills}
                />
            </Grid.Column>
            <Grid.Column width={7}>
                <Image src={`/images/jobs/${image}.png`}/>
            </Grid.Column>
        </Grid.Row></Grid>
    )
}

export default Job;