import {React, Component} from 'react';
import './Footer.scss';
import iSS from './ISS.png';

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <div>
          <h4>Partners</h4>
        </div>
        <section>
          <div className="elementRow">
            <div className="elementCol">
              <div>
                <img src={iSS}></img>
              </div>
              <div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                </p>
              </div>
            </div>
            <div>

            </div>
          </div>
        </section>
       
      </div>
    );
  }
}

export default Footer;
