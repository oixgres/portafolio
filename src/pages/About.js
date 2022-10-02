import { Grid, Segment } from "semantic-ui-react";
import {NormalCard,ProfileCard,NormalCardCollection} from "../components/collections/Cards";
import Navbar from "../components/Navbar";

import about from "../json/about.json";
import GetData from "../util/GetData";

const About = () => {
    return (
        <div>
            <Navbar location={'about'}/>
            <Grid padded stackable columns={2}>
                <Grid.Row>
                    <Grid.Column width={10} >
                        <NormalCard
                            title={about.salutation}
                            description={about.description}
                            animation={{x:[-100,0], y:[0,0], opacity:[0,1]}}
                        />
                        <NormalCardCollection
                            json_data={about.facts}
                            animation={{x:[0,0], y:[100,0], opacity:[0,1]}}
                        />
                    </Grid.Column>
                    <Grid.Column width={5}>
                        <ProfileCard
                            title='Sergio Enrique Guerra Cervantes'
                            image='images/about/profile.jpg'
                            description='Computer Engineer'
                            animation={{x:[100,0], y:[0,0], opacity:[0,1]}}
                            delay={1.2}
                        />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            <GetData/>
        </div>
    );
}

export default About;