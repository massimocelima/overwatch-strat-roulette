import React, {Component} from 'react';
import Title from 'react-title-component';

import fetch from 'isomorphic-fetch'

import FeatureBar from "../FeatureBar"
import Map from "./Map"


class Maps extends Component {
  constructor(props, context) {
    super(props, context);
  }
    state = {
        maps: [],
    };

    componentDidMount() {
        fetch("data/maps.json")
            .then( response => response.json() )
            .then( json => this.setState( { maps: json.maps } ) )
    };

    componentDidUpdate() {

    };

    render() {

        let maps = this.state.maps;

        const numberOfColumns = 3;
        let rows = [];
        let i = 0;
        maps.forEach(map => {
            if( i % numberOfColumns == 0) rows.push([]);
            rows[Math.floor(i/numberOfColumns)].push(map);
            i++;
        });

        return (
            <div>
                <Title render={(previousTitle) => `Maps - ${previousTitle}`} />
                <FeatureBar title="Maps" />

                <div className="content">
                    <p>Select the map below</p>

                        {maps == null &&
                            <h2>Loading...</h2>
                        }
                        {maps != null && rows.map((row, i) =>

                            <div key={i} className="row">
                             {row.map((map, j) =>
                                <div key={map.name} className="col-md-4">
                                    <Map map={map}></Map>
                                </div>
                             )}
                            </div>
                        )}

                </div>

            </div>
        );
  }
}

export default Maps;

