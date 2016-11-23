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

      const styles = {
        containerOverride: {
            maxWidth: 906,
            textAlign: 'center',
            fontSize: 20,
        },
        containerParent : {
              paddingTop: 80,
              paddingBottom: 80,
              backgroundColor: 'white'
        }
      };

      return (
        <div style={{backgroundColor: "#cfd8dc"}}>
          <FullWidthSection useContent={true} contentStyle={styles.containerOverride}>
            <p>
              The best strat roulette for Overwatch their is, not even sure if any others exist!
            </p>
            <p>
              To start rolling the dice or roulette ball thingy click on <Link className="simple-link" to="/maps">Maps</Link>
            </p>
          </FullWidthSection>

          <div style={styles.containerParent}>
            <div className="container" style={styles.containerOverride}>
              <div className="row">
                <div className="col-md-4">
                  <HomeFeature
                      heading="Maps"
                      route="/maps"
                      img="img/maps.svg"
                  />
                </div>
                <div className="col-md-4">
                  <HomeFeature
                      heading="Strats"
                      route="/strats"
                      img="img/strats-2.png"
                  />
                </div>
                <div className="col-md-4">
                  <HomeFeature
                      heading="About"
                      route="/about"
                      img="img/contact.svg"
                  />
                </div>
              </div>
            </div>
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
                  <img src="img/strats-2.png" />
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

          <div className="content textAlignCenter containerOverride">
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
