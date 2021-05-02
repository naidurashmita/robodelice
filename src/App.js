import {React, Component} from 'react';
import Footer from './LandingPage/Footer/Footer';
import Header from './LandingPage/Header/Header';
import MainContent from './LandingPage/MainContent/MainContent';

class App extends Component {
  render() {
    return (
      <>
        <Header></Header>
        <MainContent></MainContent>
        <Footer></Footer>
      </>
    );
  }
}

export default App;
