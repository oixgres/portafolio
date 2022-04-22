import { Grid, Segment } from "semantic-ui-react";
import {NormalCard,ProfileCard,NormalCardCollection} from "../components/collections/Cards";
import Navbar from "../components/Navbar";

import about from "../json/about.json";

const About = () => {
    // const description = [
    //     "I am a Computer Engineer, focused on Development Operations (DevOps).  I am a hardworking individual with a strong desire to learn new technologies and improve my skills, always striving to develop the best product.",
    //     <br/>,
    //     "I'm certified Amazon Web Services (AWS) and CI/CD pipelines. Front-end and back-end."
    // ]

    return (
        <div>
            <Navbar location={'about'}/>
            <Grid padded>
                <Grid.Row>
                    <Grid.Column width={10} >
                        <NormalCard
                            title={about.salutation}
                            description={about.description}
                            animation={{x:[-100,0], y:[0,0], opacity:[0,1]}}
                        />
                        <NormalCardCollection
                            json={about.facts}
                            animation={{x:[0,0], y:[100,0], opacity:[0,1]}}
                        />
                    </Grid.Column>
                    <Grid.Column width={5}>
                        <ProfileCard
                            title='Sergio Enrique Guerra Cervantes'
                            image='images/about/profile.jpg'
                            description='Computer Engineer'
                        />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    );
}

export default About;