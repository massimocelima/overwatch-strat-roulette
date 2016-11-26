import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import {Card, CardTitle, CardHeader, CardActions, CardMedia} from "material-ui/Card"
import FlatButton from "material-ui/FlatButton"

class Map extends Component {
  constructor(props, context) {
    super(props, context);
  }

    static propTypes = {
        map: PropTypes.object.isRequired
    };

    render() {

        let map = this.props.map;

    return (
        <Card className="card">
            <CardMedia>
                <Link to={"/maps/" + map.name}>
                    <img src={map.image} />
                </Link>
            </CardMedia>
            <CardTitle title={map.name} subtitle={map.description} />
            <CardActions>
                <FlatButton label="Let's Go!" primary={true} href={"/maps/" + map.name} />
            </CardActions>
        </Card>
    );
  }
}

export default Map;

