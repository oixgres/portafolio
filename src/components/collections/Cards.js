import { Header, Segment, Image, Grid } from "semantic-ui-react"
import { motion } from "framer-motion";
import './Cards.css'
import Job from "../Job";

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

const JobCard = ({json_data,json_motion}) => {
    return(
        <motion.div 
            initial={json_motion.initial}
            whileInView={json_motion.whileInView}
            viewport={json_motion.viewport}
        >
            <Job
                job={json_data.name}
                workplace={json_data.workplace}
                date={json_data.date}
                image={json_data.image}
                skills={json_data.skills}
                description={json_data.description}
            >
            </Job>
        </motion.div>
    )
}

const NormalCardCollection = props => {
    const {json_data, animation} = props;

    return(
        <motion.li animate={animation}>
            <Grid columns={json_data.length} stackable>
                <Grid.Row >
                {json_data.map((j, index) =>
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



export  {NormalCard, ProfileCard,NormalCardCollection,JobCard};