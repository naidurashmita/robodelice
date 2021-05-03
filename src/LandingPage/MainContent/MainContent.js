import {React, Component} from 'react';
import crepe from './crepe.png';
import waffle from './waffle.jpg';
import './MainContent.scss';
import { Link } from "react-router-dom";

class MainContent extends Component {
  constructor() {
    super();
    this.state = {
      crepeBasePrice : '2.50',
      waffleBasePrice: '3.50'
    }
  }
  render() {
    return (
      <div>
        <div className="title">Select your Favourite Dessert</div>
        <div className="imageWrapper">
          <div className='imgDetailWrapper'>
            <Link to={{pathname: "/crepeTopping", state: this.state.crepeBasePrice}}>
              <img className="crepe" src={crepe}></img>
            </Link>
            <div className='dessertDetails'>
              <span className="dessertName">Crepe</span>
            </div>
          </div>
          <div className='imgDetailWrapper'>
            <Link to="/waffleTopping">
              <img className="waffle" src={waffle}></img>
            </Link>
            <div className='dessertDetails'>
              <div className="dessertName">Waffle</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainContent;
