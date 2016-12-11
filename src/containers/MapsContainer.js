import { connect } from 'react-redux'
import Maps from '../components/Maps/Maps'
import {fetchMapsRequest, fetchMapsError, fetchMapsSuccess, fetchMapsIfNeeded} from '../actions'

const mapStateToProps = (state) => ({
    maps: state.maps.data,
    isLoading: state.maps.isLoading,
    invalidated: state.maps.invalidated,
    error: state.maps.error,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onInvalidated: () => {
        dispatch(fetchMapsIfNeeded());
    }
})

const MapsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Maps)

export default MapsContainer