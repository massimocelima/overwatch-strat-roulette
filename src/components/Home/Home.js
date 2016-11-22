import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';

import FullWidthSection from "../FullWidthSection"
import HomeFeature from "./HomeFeature"
import Footer from "../Footer"
import {Card, CardTitle, CardHeader, CardActions, CardMedia} from "material-ui/Card"
import FlatButton from "material-ui/FlatButton"

class Home extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {

      //-webkit-box-shadow: 0 1px 3px 0 rgba(0,0,0,0.2),0 1px 1px 0 rgba(0,0,0,0.14),0 2px 1px -1px rgba(0,0,0,0.12);
      //box-shadow: 0 1px 3px 0 rgba(0,0,0,0.2),0 1px 1px 0 rgba(0,0,0,0.14),0 2px 1px -1px rgba(0,0,0,0.12);

      const styles = {maxWidth: 906};

      return (
        <div style={{backgroundColor: "#cfd8dc"}}>
          <div style={{padding: 20, backgroundColor: 'white'}}>
            <FullWidthSection useContent={true} contentStyle={styles}>
              <HomeFeature
                  heading="Maps"
                  route="/maps"
                  img="img/maps.svg"
                  firstChild={true}
              />
              <HomeFeature
                  heading="Strats"
                  route="/strats"
                  img="img/strats.svg"
              />
              <HomeFeature
                  heading="Contact"
                  route="/contact"
                  img="img/contact.svg"
                  lastChild={true}
              />
            </FullWidthSection>

          </div>

          <div style={{display: 'none'}}>
            <FullWidthSection useContent={true} contentStyle={styles}>
          <Card className="card" style={{width: '33%'}}>
            <CardMedia>
              <Link to="/maps">
                <img src="img/maps.png" />
              </Link>
            </CardMedia>
            <CardTitle title="Maps" subtitle="See what maps we have available and try your luck" />
            <CardActions>
              <FlatButton label="Let's Go!" primary={true} />
            </CardActions>
          </Card>
            <Card className="card" style={{width: '33%'}}>
              <CardMedia>
                <Link to="/strats">
                  <img src="img/strats.png" />
                </Link>
              </CardMedia>
              <CardTitle title="Strats" subtitle="What to know what strats we have create" />
              <CardActions>
                <FlatButton label="Check it out!" primary={true} />
              </CardActions>
            </Card>
            <Card className="card" style={{width: '33%'}}>
              <CardMedia>
                <Link to="/contact">
                  <img src="img/contact.png" />
                </Link>
              </CardMedia>
              <CardTitle title="Contact" subtitle="Drop us a line, let us know what you think" />
              <CardActions>
                <FlatButton label="Ok" primary={true} />
              </CardActions>
            </Card>
            </FullWidthSection>
          </div>

          <div className="content textAlignCenter">
            <p>
              Want to make a donation?
            </p>
            <RaisedButton label={"Yes, i would love to make a donation"} primary={true} />
          </div>

          <Footer></Footer>
        </div>
    );
  }
}

export default Home;
