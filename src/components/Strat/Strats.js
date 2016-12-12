import React, {Component} from 'react';
import Title from 'react-title-component';

import CSSModules from 'react-css-modules';

import {connect} from 'react-redux'
import {firebase, helpers} from 'redux-react-firebase'
const {isLoaded, isEmpty, dataToJS} = helpers

import FeatureBar from "../FeatureBar/FeatureBar"
import LoadingSpinner from "../LoadingSpinner"

import Chip from 'material-ui/Chip';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';

import styles from "./styles.css"

@CSSModules(styles)
class StratItem extends Component {
    render() {
        let {start} = this.props;
        //let avatar = strat.

        return <Card style={{marginBottom: 20}}>
            <CardHeader
                title={start.name}
                subtitle={start.map}
            />
            <CardText style={{paddingTop: 0}}>
                {start.description}
                <p style={{color: 'green'}}>{start.createBy}</p>
                <div style={{ display: 'flex',flexWrap: 'wrap'}}>
                    {start.categories.map((key, index) => <Chip key={index} style={{margin: 4}}>{key}</Chip> )}</div>
            </CardText>
        </Card>
/*
        return <div styleName='strat-item'>
            <h1>{start.name}</h1>
            <h2>{start.map}</h2>
            <p>{start.description}</p>
            <p>{start.createBy}</p>
            <p>{start.categories}</p>
            <Divider/>
        </div>
        */
    }
}

@firebase( [
    '/strats'
])
@connect(
    ({firebase}) => ({
        strats: dataToJS(firebase, '/strats'),
    })
)
@CSSModules(styles)
class Strats extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
      const {firebase, strats} = this.props;

      const stratsList = (!isLoaded(strats)) ?
          ['Loading']
          : (isEmpty(strats) ) ?
          ['Todo list is empty']
          : Object.keys(strats).map((key) => {
                  return strats[key];
              });

    return (
        <div>
            <Title render={(previousTitle) => `Strats - ${previousTitle}`} />
            <FeatureBar title="Strats" />
            <div className="content">
                <LoadingSpinner show={!isLoaded(strats)}></LoadingSpinner>
                {isLoaded(strats) && ! isEmpty(strats) &&
                <div style={{maxWidth: 1176,  display: 'block', margin: 'auto', padding: 20}}>
                    {stratsList.map( (key, index) => <StratItem key={index} start={key}></StratItem> )}
                </div>
                }
            </div>
        </div>
    );
  }
}

export default Strats;
