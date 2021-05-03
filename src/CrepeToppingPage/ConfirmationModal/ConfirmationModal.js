import { React, Component } from "react";
import "./ConfirmationModal.scss";
import { withRouter } from "react-router-dom";
import { Redirect } from "react-router-dom";

class ConfirmationModal extends Component {
  constructor() {
    super();
    this.state = {
      redirect: false,
    };
  }

  componentDidMount() {
    
  }

  setRedirect = () => {
    this.setState({
      redirect: true,
    });
  };

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }
  };

  render() {
    let { isOpen, totalAmt } = this.props,
      offsetHeight = document.querySelector('#root').offsetHeight;
      
    const style = {
      height: offsetHeight
    };

    if (isOpen === false) return null;
    return (
      <div>
        <div className="modal">
          <div>
            <h3>Thank you for ordering with Us!!!</h3>
            <p>your token number is 1</p>
            <p>Please pay €{totalAmt} and collect your order!</p>
          </div>
          {this.renderRedirect()}
          <div>
            <button className="continueBtn" onClick={this.setRedirect}>
              Continue Ordering
            </button>
          </div>
        </div>
        <div className="bg" style={style} />
      </div>
    );
  }
}

export default ConfirmationModal;
