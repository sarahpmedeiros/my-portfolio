import React, {Component} from 'react';
import {Header, Image, Segment, Grid} from 'semantic-ui-react'
import headShot from '../../photos/sarah-headshot.png'

class About extends Component {


    render() {
        return (
            <div id='about'>
                <Segment style={{ padding: '8em', backgroundColor: '#f9f9f9'}} vertical>
                    <Grid columns={2} container stackable verticalAlign='middle'>
                        <Grid.Row>
                            <Grid.Column floated='left' >
                                <Image
                                    size='medium'
                                    src={headShot}/>
                            </Grid.Column>
                            <Grid.Column>
                                <Header as='h1' style={{textTransform: "uppercase",
                                    fontSize: "4vw",
                                    whiteSpace: "nowrap",
                                    fontFamily: 'Oswald, sans-serif'}}>About Me</Header>
                                <p style={{ fontSize: '1.33em'}}>
                                    I'm Sarah Medeiros a software engineer at Wayfair.
                                    I graduated from Boston University in 2017 with a BA in Computer
                                    Science.
                                    In my spare time I love to bake, read, and spend time with my friends and family. I also love
                                    learning new things.
                                </p>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>

            </div>)
    }
}

export default About