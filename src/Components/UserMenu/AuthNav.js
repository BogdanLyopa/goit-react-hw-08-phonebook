import { NavLink } from 'react-router-dom';

const AuthNav = () => (
  <div>
    <NavLink exact to="/register">
      Реєстрація
    </NavLink>
    <NavLink exact to="/login">
      Логін
    </NavLink>
  </div>
);
export default AuthNav;
