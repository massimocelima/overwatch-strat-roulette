import React, {Component} from 'react';
import Title from 'react-title-component';
import CSSModules from 'react-css-modules';
import fetch from 'isomorphic-fetch';
import RaisedButton from "material-ui/RaisedButton";
import {Grid, Row, Col} from 'react-flexbox-grid';

import FeatureBar from "../FeatureBar/FeatureBar"

import styles from "./styles.css"

class Strat extends Component {
    constructor(props, context) {
        super(props, context);
        this.handleTouchTap = this.handleTouchTap.bind(this)
    }

    state = {
        strats: [],
        stratA: null,
        stratB: null
    };

    componentDidMount() {
        fetch("/data/strats.json")
            .then( response => response.json() )
            .then( data => this.setState( { strats: this.filter(data.strats) } ) )
            .then( data => this.roll() )
    };

    filter(data) {
        return data.filter(x => x.map == "ALL" || x.map == this.props.params.map);
    };

    roll() {
        let strats = this.state.strats;
        if(strats != null)
        {
            let stratA = strats[this.randomNumber( strats.length )];
            let stratB = strats[this.randomNumber( strats.length )];
            this.setState( {
                stratA: stratA,
                stratB: stratB
            } )
        }
    }

    randomNumber(max){
        return Math.floor((Math.random() * max) + 0);
    };

    handleTouchTap() {
        this.roll();
    }

    render() {
        const mapName = this.props.params.map;
        const stratA = this.state.stratA;
        const stratB = this.state.stratB;

    return (
        <div>
            <Title render={(previousTitle) => `Strat - ${mapName}`} />
            <FeatureBar title={`Strat for ${mapName}`} />
            <div styleName="root">
                {stratA != null &&
                <Grid fluid styleName="grid" >
                    <Row>
                        <Col xs={12} sm={12} md={12} lg={12}>
                            <h1>{mapName}</h1>
                            <div>
                                <h2>Team A</h2>
                                <h3>{stratA.name}</h3>
                                <p>{stratA.description}</p>

                                <h2>Team B</h2>
                                <h3>{stratB.name}</h3>
                                <p>{stratB.description}</p>

                                <RaisedButton label="Role" primary={true} onTouchTap={this.handleTouchTap}></RaisedButton>
                            </div>
                        </Col>
                    </Row>
                </Grid>
                }

            </div>
        </div>
    );
  }
}

export default CSSModules(Strat, styles);

