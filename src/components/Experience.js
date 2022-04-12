import './Experience.css'
import { Segment, Grid, Divider, Icon, Menu } from "semantic-ui-react";

// Experience component is a section where Jobs and Project are explained
const Experience = ({job, workplace, date, skills, description, url, repo}) => {
    const randomNumber = n => Math.floor(Math.random() * n);

    const getRandomColor = () => {
        return `rgb(${randomNumber(255)},${randomNumber(255)},${randomNumber(255)})`;
    }

    const handleExternalClick = (e, {url}) => {window.open(url, '_blank')};

    return(
        <Segment inverted padded>
            <h1>
                {job} 
                {
                repo?
                <Menu.Item onClick={handleExternalClick} url={repo}>
                    <Icon name='github'/>
                </Menu.Item>
                :
                null    
                }
            </h1>
            <Divider/>
            <h2 style={{color:'gray'}}>{workplace}
            <h2 className="exp-date">{date}
            </h2></h2>

            <p style={{"fontSize":"1.4em", "textAlign":"justify"}}>
                {description}
            </p>
            <Grid padded textAlign='right'>
                <Grid.Row >
                {skills.map(
                    skill=>
                    <p style={{"fontSize":"1.4em"}}>
                        <l style={{color:getRandomColor()}}> &#9632; </l> 
                        {skill} &emsp;
                    </p>
                )}

                </Grid.Row>
                {
                url ? 
                <Grid.Row>
                    <Grid.Column>   
                        <h3><a href={`https://${url}`}>{url}</a></h3>
                    </Grid.Column>
                </Grid.Row> : 
                null
                }
            </Grid>
        </Segment>
    )

}

export default Experience;