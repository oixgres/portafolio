import { Header, Segment, Image, Grid } from "semantic-ui-react"
import { motion } from "framer-motion";
import './Cards.css'

const NormalCard = props => {
    const {title, description, animation, delay} = props;

    return(
        <motion.div
            animate={animation}
            transition={delay?{delay: delay*0.3}:{delay:0.1}}
        >
            <Segment inverted padded>
                <Header as="h1">{title}</Header>
                <p className="p-normal-card">{description}</p>
            </Segment>
        </motion.div>
    )
}

const ProfileCard = props => {
    const {title, image, description, animation, delay} = props;

    return(
        <motion.div animate={animation} transition={{delay: delay}}>
            <Segment inverted padded textAlign="center">
                <Image src={image} fluid centered/>
                <Header as="h2">{title}</Header>
                <Header as='h3'>{description}</Header>
            </Segment>
        </motion.div>
    )
}

const NormalCardCollection = props => {
    const {json, animation} = props;

    return(
        <motion.li animate={animation}>
            <Grid columns={json.length} stackable>
                <Grid.Row >
                {json.map((j, index) =>
                    <Grid.Column stretched  >
                        <NormalCard
                            title={j.title}
                            description={j.description}
                            animation={animation}
                            delay={index+1}
                        />
                    </Grid.Column> 
                )}
                </Grid.Row>
            </Grid>
        </motion.li>
    )

}

export  {NormalCard, ProfileCard,NormalCardCollection};