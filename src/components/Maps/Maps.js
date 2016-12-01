import React, {Component} from 'react';
import Title from 'react-title-component';
import CSSModules from 'react-css-modules';

import Paper from 'material-ui/Paper';

import fetch from 'isomorphic-fetch';

import {Grid, Row, Col} from 'react-flexbox-grid';

import FeatureBar from "../FeatureBar/FeatureBar";
import Map from "./Map";
import styles from "./styles.css"

const headerStyle = {
    padding: 20,
    textAlign: 'center',
    display: 'inline-block',
    width: '100%'
};

class Maps extends Component {
  constructor(props, context) {
    super(props, context);
  }
    state = {
        maps: [],
    };

    componentDidMount() {
        fetch("/data/maps.json")
            .then( response => response.json() )
            .then( json => this.setState( { maps: json.maps } ) )
    };

    componentDidUpdate() {

    };

    render() {

        let maps = this.state.maps;

        return (
            <div style={{backgroundColor : "rgb(207, 216, 220)"}}>
                <Title render={(previousTitle) => `Maps - ${previousTitle}`} />
                <FeatureBar title="Maps" />

                <Paper style={headerStyle} zDepth={1} >
                    <h3>Welcome to the list of maps</h3>
                    <p>Select the map below</p>
                </Paper>

                <Grid fluid styleName="grid" >
                    <Row>
                        {maps != null && maps.map((map, i) =>
                            <Col key={i} xs={12} sm={12} md={6} lg={4}><Map map={map}></Map></Col>
                        )}
                    </Row>
                </Grid>

            </div>
        );
  }
}

export default CSSModules(Maps, styles);

