import './Experience.css'
import { Segment, Grid, Divider } from "semantic-ui-react";

// Experience component is a section where Jobs and Project are explained
const Experience = ({job, workplace, date, skills}) => {
    const randomNumber = n => Math.floor(Math.random() * n);

    const getRandomColor = () => {
        return `rgb(${randomNumber(255)},${randomNumber(255)},${randomNumber(255)})`;
    }

    return(
        <Segment inverted padded>
            <h1>{job}</h1>
            <Divider/>
            <h2 style={{color:'gray'}}>{workplace}
            <h2 className="exp-date">{date}
            </h2></h2>

            <p style={{"fontSize":"1.4em", "textAlign":"justify"}}>
                Propose Support, maintain and manage DevOps
                responsibilities. Frequent infrastructure
                maintenance upgrades. System monitoring, Ops
                support and alert responding.
            </p>
            <Grid padded><Grid.Row>
            {skills.map(
                skill=>
                <p style={{"fontSize":"1.4em"}}>
                    <l style={{color:getRandomColor()}}> &#9632; </l> 
                    {skill} &emsp;
                </p>
            )}
            </Grid.Row></Grid>
        </Segment>
    )

}

export default Experience;