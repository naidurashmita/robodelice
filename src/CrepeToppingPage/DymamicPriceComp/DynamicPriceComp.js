import {React, Component} from 'react';
import ConfirmationModal from '../ConfirmationModal/ConfirmationModal';
import './DynamicPriceComp.scss';
import axios from 'axios';

class DynamicPrizeComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
        totalprize: props.basePrice,
        isModalOpen: false,
        toppingData: {
          "item": {
              "itemName": "Crepe",
              "itemPrice": props.basePrice
          },
          "toppings": []
      }
    }
  }

  openModal = () => {
    this.props.selected.map((toppingRow) => {
      let toppingName = toppingRow.childNodes[1].innerText,
        toppingPrice = toppingRow.childNodes[3].innerText,
        obj = {"toppingName": toppingName, "toppingPrice": toppingPrice},
        toppingDataCopy = this.state.toppingData;
      toppingDataCopy.toppings = [...toppingDataCopy.toppings, obj];
      this.setState({
        toppingData: {...this.state.toppingData, toppingDataCopy}
      });
    });

    axios.post(`https://jsonplaceholder.typicode.com/users`, this.state.toppingData)
      .then(res => {
        const persons = res.data;
      })

    this.setState({
        isModalOpen : true
    });

    document.querySelector('.container').classList.add('backround-blur');
  }

  render(props) {
    const {basePrice, selected} = this.props;
    let totalAmt = parseFloat(basePrice);
    let toppingData = selected.map((rowData, index)=>{
      totalAmt = totalAmt + parseInt(rowData.children[3].textContent);
      return(
        <div>
          <span className='toppingName'>{rowData.children[1].textContent}</span>
          <span className='toppingRate'>{rowData.children[3].textContent}</span>
          <hr></hr>
        </div>
      );
    });
    return (
      <div className='priceCal'>
            <div className='totalItems'>
                <span className='toppingName'>Base Crepe</span>
                <span className='toppingRate'>{basePrice}</span>
                <hr></hr>
                {toppingData}
            </div>
            <div className='checkoutBtnWrapper'>
                <div className='subTotalCont'>
                  <span className='subTotalText'>Subtotal</span>
                  <div>
                    <span className='finalAmt'>{totalAmt}</span>
                  </div>
                </div>
                <button className='checkoutBtn' onClick={this.openModal}>Checkout</button>
                <ConfirmationModal isOpen={this.state.isModalOpen} totalAmt = {totalAmt}>
                    <h3>Modal title</h3>
                    <p>Content</p>
                </ConfirmationModal>
            </div>
      </div>
    );
  }
}

export default DynamicPrizeComp;
