import React, {Component, PropTypes} from 'react';
import Title from 'react-title-component';
import CSSModules from 'react-css-modules';

import Paper from 'material-ui/Paper';

import {Grid, Row, Col} from 'react-flexbox-grid';

import FeatureBar from "../FeatureBar/FeatureBar";
import LoadingSpinner from '../LoadingSpinner'
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

    static propTypes  = {
        onInvalidated: React.PropTypes.func.isRequired,
        isLoading: React.PropTypes.bool,
        maps: React.PropTypes.array,
        error: React.PropTypes.object
    };

    componentDidMount() {
        if(this.props.invalidated)
            this.props.onInvalidated();
    };

    componentDidUpdate() {

    };

    render() {

        let {
            isLoading,
            error,
            maps
        } =  this.props;


        if( isLoading === undefined ) isLoading = false;
        return (
            <div style={{backgroundColor : "rgb(207, 216, 220)", minHeight: '100%'}}>
                <Title render={(previousTitle) => `Maps - ${previousTitle}`} />
                <LoadingSpinner show={isLoading} />
                <FeatureBar title="Maps" />

                <Paper style={headerStyle} zDepth={1} >
                    <h3>Welcome to the list of maps</h3>
                    <p>Select the map below</p>
                    { error && <div>{error}</div>}
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

