import './Navigation.css';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ProfileButton from './ProfileButton';
import * as sessionActions from '../../store/session';

function Navigation({ isLoaded }) {
  const sessionUser = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const logout = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    dispatch(sessionActions.logout()); // Dispatch logout action
  };

  const sessionLinks = sessionUser ? (
    <>
      <li>
        <ProfileButton user={sessionUser} />
      </li>
      <li>
        <button onClick={logout}>Log Out</button>
      </li>
    </>
  ) : (
    <>
      <li>
        <NavLink to="/login">Log In</NavLink>
      </li>
      <li>
        <NavLink to="/signup">Sign Up</NavLink>
      </li>
    </>
  );

  return (
    <div className="navigation-container"> {/* Wrap in a container */}
      <ul className="navigation-menu">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        {isLoaded && sessionLinks}
      </ul>
    </div>
  );
}

export default Navigation;