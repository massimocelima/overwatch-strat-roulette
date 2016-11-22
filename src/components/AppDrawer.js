import React, {Component, PropTypes} from 'react';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import Divider from 'material-ui/Divider';
import {List, ListItem, makeSelectable} from 'material-ui/List';
import {spacing, typography, zIndex} from 'material-ui/styles';
import withWidth, {SMALL, LARGE} from 'material-ui/utils/withWidth';
import TerrainIcon from 'material-ui/svg-icons/maps/terrain';
import ChatIcon from 'material-ui/svg-icons/communication/chat';
import ListIcon from 'material-ui/svg-icons/editor/format-list-bulleted';

const SelectableList = makeSelectable(List);

class AppDrawer extends Component {
  static propTypes = {
    docked: PropTypes.bool.isRequired,
    location: PropTypes.object.isRequired,
    onRequestChangeNavDrawer: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    style: PropTypes.object,
    showHeader: PropTypes.bool.isRequired,
  };

  static contextTypes = {
    muiTheme: PropTypes.object.isRequired,
    router: PropTypes.object.isRequired,
  };

  getStyles()
  {
      const styles = {
          logo: {
              cursor: 'pointer',
              fontSize: 24,
              lineHeight: `${spacing.desktopKeylineIncrement}px`,
              fontWeight: typography.fontWeightLight,
              paddingLeft: spacing.desktopGutter,
              marginBottom: 8,
              display: "flex",
              flexDirection: 'column'
          },
          icon: {
            top:15,
          }
      };

      return styles;
  };

  handleTouchTapHeader = () => {
    this.context.router.push('/');
    this.props.onRequestChangeNavDrawer(false);
  };

  render() {
    const {
      location,
      docked,
      onRequestChangeNavDrawer,
      onChangeList,
      open,
      style,
        showHeader
    } = this.props;

      let styles = this.getStyles();
      const iconColor = "#555";

      let title = <div className="appBarTitleContainer" style={{color: 'black'}}>
          <img src={process.env.PUBLIC_URL + '/img/logo.png'} className="appBarLogo" />
          <div>Strat Roulette</div>
      </div>;

      let header = "";
      if(showHeader)
          header =
                  <AppBar
                    style={{backgroundColor: 'white', color: "black"}}
                    title={title}
                    showMenuIconButton={false}>
                  </AppBar>

      return (

      <Drawer
        docked={docked}
        open={open}
        onRequestChange={onRequestChangeNavDrawer}
        containerStyle={style}
      >
        {header}
        <SelectableList
          value={location.pathname}
          onChange={onChangeList}
        >
          <ListItem primaryText="Lets Roll!" value="/maps" leftAvatar={<TerrainIcon style={styles.icon} color={iconColor} />} />
          <ListItem primaryText="Strats" value="/strats" leftAvatar={<ListIcon style={styles.icon} color={iconColor} />} />
          <ListItem primaryText="Contact" value="/contact" leftAvatar={<ChatIcon style={styles.icon} color={iconColor} />} />

        </SelectableList>
      </Drawer>
    );
  }
}

export default withWidth()(AppDrawer);