import { Header, Segment, Image, Grid } from "semantic-ui-react"
import { motion } from "framer-motion";
import './Cards.css'

const NormalCard = props => {
    const {title, description, animation} = props;

    return(
        <motion.div animate={animation}>
            <Segment inverted padded raised>
                <Header as="h1">{title}</Header>
                <p className="p-normal-card">{description}</p>
            </Segment>
        </motion.div>
    )
}

const ProfileCard = props => {
    const {title, image, description, animation} = props;

    return(
        <Segment inverted padded textAlign="center">
            <Image src={image} fluid centered/>
            <Header as="h2">{title}</Header>
            <Header as='h3'>{description}</Header>
        </Segment>
    )
}

const NormalCardCollection = props => {
    const {json, animation} = props;

    return(
        <motion.div animate={animation}>
            <Grid>
                <Grid.Row columns={json.length}>
                {json.map(j =>
                    <Grid.Column stretched>
                        <NormalCard
                            title={j.title}
                            description={j.description}
                            animation={animation}
                            />
                    </Grid.Column> 
                )}
                </Grid.Row>
            </Grid>
        </motion.div>
    )

}

export  {NormalCard, ProfileCard,NormalCardCollection};