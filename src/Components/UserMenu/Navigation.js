import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { authSelectors } from '../../redux/auth';

const Navigation = ({ isAuthenticated }) => (
  <div>
    <NavLink to="/">Головна</NavLink>
    {isAuthenticated && <NavLink to="/contacts">Контакти</NavLink>}
  </div>
);
const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps)(Navigation);
