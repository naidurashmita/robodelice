import {React, Component} from 'react';
import './Header.scss';
import logo from './RoboDelice_logo.png';

class Header extends Component {
  render() {
    return (
      <div className="header">
          <img src={logo} className="logo"></img>
      </div>
    );
  }
}

export default Header;
