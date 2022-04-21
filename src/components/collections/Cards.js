import { Header, Segment, Image, Grid } from "semantic-ui-react"
import './Cards.css'

const NormalCard = props => {
    const {title, description} = props;

    return(
        <Segment inverted padded raised>
            <Header as="h1">{title}</Header>
            <p className="p-normal-card">{description}</p>
        </Segment>
    )
}

const ProfileCard = props => {
    const {title, image, description} = props;

    return(
        <Segment inverted padded textAlign="center">
            <Image src={image} fluid centered/>
            <Header as="h2">{title}</Header>
            <Header as='h3'>{description}</Header>
        </Segment>
    )
}

const NormalCardCollection = props => {
    const {titles, descriptions} = props;

    return(
        <Grid>
            <Grid.Row columns={titles.length}>
                {titles.map((title, i) =>
                    <Grid.Column>
                        <NormalCard
                            title={title}
                            description={descriptions[i]}
                        />
                    </Grid.Column> 
                )}
            </Grid.Row>
        </Grid>
    )

}

export  {NormalCard, ProfileCard,NormalCardCollection};