import React, {Component} from 'react';
import withWidth, {MEDIUM, LARGE} from 'material-ui/utils/withWidth';
import spacing from 'material-ui/styles/spacing';
import {Card, CardTitle, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

import FeatureBar from "../FeatureBar"

class Home extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {

      //-webkit-box-shadow: 0 1px 3px 0 rgba(0,0,0,0.2),0 1px 1px 0 rgba(0,0,0,0.14),0 2px 1px -1px rgba(0,0,0,0.12);
      //box-shadow: 0 1px 3px 0 rgba(0,0,0,0.2),0 1px 1px 0 rgba(0,0,0,0.14),0 2px 1px -1px rgba(0,0,0,0.12);

      return (
        <div>
          <FeatureBar title="Overview" />
          <div className="content">

            <Card style={{margin: 10, boxShadow: "0 1px 3px 0 rgba(0,0,0,0.2),0 1px 1px 0 rgba(0,0,0,0.14),0 2px 1px -1px rgba(0,0,0,0.12)"}}>
              <CardTitle title="Title Number One" subtitle="Card subtitle" />
              <CardActions>
                <FlatButton label="Action1" primary={true} />
                <FlatButton label="Action2" />
              </CardActions>
            </Card>

            <Card style={{margin: 10, boxShadow: "0 1px 3px 0 rgba(0,0,0,0.2),0 1px 1px 0 rgba(0,0,0,0.14),0 2px 1px -1px rgba(0,0,0,0.12)"}}>
              <CardTitle title="Title Number Two" subtitle="Card subtitle" />
              <CardHeader
                  title="Title Number Two"
                  subtitle="Subtitle"
                  actAsExpander={true}
                  showExpandableButton={true}
              />
              <CardActions>
                <FlatButton label="Action1" primary={true} />
                <FlatButton label="Action2" />
              </CardActions>
              <CardText expandable={true}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
              </CardText>
            </Card>

            <Card style={{margin: 10, boxShadow: "0 1px 3px 0 rgba(0,0,0,0.2),0 1px 1px 0 rgba(0,0,0,0.14),0 2px 1px -1px rgba(0,0,0,0.12)"}}>
              <CardTitle title="Title Number Three" subtitle="Card subtitle" />
              <CardHeader
                  title="Title Number Three"
                  subtitle="Subtitle"
                  actAsExpander={true}
                  showExpandableButton={true}
              />
              <CardActions>
                <FlatButton label="Action1" />
                <FlatButton label="Action2" />
              </CardActions>
              <CardText expandable={true}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
              </CardText>
            </Card>

            <Card style={{margin: 10, boxShadow: "0 1px 3px 0 rgba(0,0,0,0.2),0 1px 1px 0 rgba(0,0,0,0.14),0 2px 1px -1px rgba(0,0,0,0.12)"}}>
              <CardTitle title="Title Number Four" subtitle="Card subtitle" />
              <CardHeader
                  title="Title Number Four"
                  subtitle="Subtitle"
                  actAsExpander={true}
                  showExpandableButton={true}
              />
              <CardActions>
                <FlatButton label="Action1" />
                <FlatButton label="Action2" />
              </CardActions>
              <CardText expandable={true}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
              </CardText>
            </Card>
          </div>
        </div>
    );
  }
}

export default withWidth()(Home);
