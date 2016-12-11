import { connect } from 'react-redux'
//import { signedIn, signOut } from '../actions'
import LoginButton from '../components/FeatureAppBar/LoginButton'

const mapStateToProps = (state) => ({
    authenticated: state.auth.authenticated,
    user: state.auth.user
});

const mapDispatchToProps =  ({
//    handleSignOut: signOut,
//    handleSignIn: signedIn
});

const LoginButtonContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginButton)

export default LoginButtonContainer