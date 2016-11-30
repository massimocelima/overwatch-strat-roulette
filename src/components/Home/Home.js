import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import CSSModules from 'react-css-modules';

import FullWidthSection from "../FullWidthSection"
import HomeFeature from "./HomeFeature"
import Footer from "../Footer/Footer"
import {Grid, Row, Col} from 'react-flexbox-grid';

import styles from "./styles.css"

class Home extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {

      //-webkit-box-shadow: 0 1px 3px 0 rgba(0,0,0,0.2),0 1px 1px 0 rgba(0,0,0,0.14),0 2px 1px -1px rgba(0,0,0,0.12);
      //box-shadow: 0 1px 3px 0 rgba(0,0,0,0.2),0 1px 1px 0 rgba(0,0,0,0.14),0 2px 1px -1px rgba(0,0,0,0.12);

      const styles = {
          gridOverride: {
            maxWidth: 906,
            textAlign: 'center',
            fontSize: 20,
        },
        container : {
              paddingTop: 80,
              paddingBottom: 80,
              backgroundColor: 'white'
        }
      };

      return (
        <div style={{backgroundColor: "#cfd8dc"}}>
          <FullWidthSection useContent={true} contentStyle={styles.gridOverride}>
            <p>
              The best strat roulette for Overwatch their is, not even sure if any others exist!
            </p>
            <p>
              To start rolling the dice or roulette ball thingy click on <Link styleName="link" to="/maps">Maps</Link>
            </p>
              <p>
                  Don't know what Strat Roulette is. Neither did I, <Link styleName="link" to="/about">click here</Link> to find out more.
              </p>
          </FullWidthSection>

            <div style={styles.container}>
                <Grid styleName="grid" style={styles.gridOverride}>
                    <Row>
                        <Col xs={12} sm={12} md={4} lg={4}>
                            <HomeFeature
                                heading="Maps"
                                route="/maps"
                                img="img/maps3.svg"
                            />
                        </Col>
                        <Col xs={12} sm={12} md={4} lg={4}>
                            <HomeFeature
                                heading="Strats"
                                route="/strats"
                                img="img/strats2.svg"
                            />
                        </Col>
                        <Col xs={12} sm={12} md={4} lg={4}>
                            <HomeFeature
                                heading="About"
                                route="/about"
                                img="img/desk.svg"
                            />
                        </Col>
                    </Row>
                </Grid>
            </div>


          <div styleName="root" >
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

export default CSSModules( Home, styles );
