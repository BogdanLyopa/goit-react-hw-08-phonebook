import Navigation from './Navigation';
import UserMEnu from './UserMenu';
import AuthNav from './AuthNav';
import { connect } from 'react-redux';
import { authSelectors } from '../../redux/auth';

const AppBar = ({ isAuntificated }) => (
  <header>
    <Navigation></Navigation>
    {isAuntificated ? <UserMEnu /> : <AuthNav />}
  </header>
);
const mapStateToProps = state => ({
  isAuntificated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps)(AppBar);
