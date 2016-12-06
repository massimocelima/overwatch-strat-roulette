import React, {Component, PropTypes} from 'react';
import Router, {Link} from 'react-router';
import CSSModules from 'react-css-modules';
import {Card, CardTitle, CardHeader, CardActions, CardMedia} from "material-ui/Card"
import FlatButton from "material-ui/FlatButton"

import styles from "./styles.css"

const cardTitleStyle = {
   fontSize: 20,
   fontWeight: 500,
};

const cardSubtitleStyle = {
    fontWeight: 'normal'
};

class Map extends Component {
    constructor(props, context) {
    super(props, context);
        this.handleTouchStart.bind(this);
    };

    static contextTypes = {
        router: React.PropTypes.object.isRequired
    }

    static propTypes = {
        map: PropTypes.object.isRequired
    };

    handleTouchStart(mapName) {
        const path = 'strat/' + mapName;
        this.context.router.push(path);

        //this.context.router.push({ pathname, query, state })
        //this.context.router.replace(path)
        //this.context.router.replace({ pathname, query, state })
    };


    render() {

        let map = this.props.map;

    return (
        <Card styleName="card">
            <CardMedia>
                <Link to={"/strat/" + map.name}>
                    <img src={map.image} />
                </Link>
            </CardMedia>
            <CardTitle title={map.name} subtitle={map.description} titleStyle={cardTitleStyle} subtitleStyle={cardSubtitleStyle} />
            <CardActions>
                <FlatButton label="Let's Go!" primary={true} onTouchTap={() => this.handleTouchStart(map.name)} />
            </CardActions>
        </Card>
    );
  }
}

export default CSSModules(Map, styles);

