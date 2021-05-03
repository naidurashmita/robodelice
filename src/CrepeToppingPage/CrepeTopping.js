import {React, Component} from 'react';
import './CrepeTopping.scss';
import strawberry from './strawberries.png';
import nutella from './nutella.png';
import vanilla from './vanilla.jpg';
import whippedCream from './whipped-cream.jpg';
import honey from './honey.jpg';
import bananas from './bananas.jpg';
import Header from '../LandingPage/Header/Header';
import ConfirmationModal from './ConfirmationModal/ConfirmationModal';
import DynamicPriceComp from './DymamicPriceComp/DynamicPriceComp';

class CrepeTopping extends Component {
    constructor(props){
        super(props);
        this.state = {
            rows : [
                    ['Strawberry', {strawberry}.strawberry, '1.00'],
                    ['Whipped Cream',{whippedCream}.whippedCream, '0.50'],
                    ['Nutella', {nutella}.nutella, '3.00'],
                    ['Vanilla Ice-cream',{vanilla}.vanilla, '2.50'],
                    ['Sliced Bananas', {bananas}.bananas, '1.50'],
                    ['Honey', {honey}.honey, '3.00']
                ],
            toppingSelectionChange: false,
            selected: []
        }
    }

    handleChange = (event) => {
        let trEle = event.target.closest('tr');
        if (!event.target.checked && this.state.selected.includes(trEle)) {
            this.setState({
                selected: this.state.selected.filter( rowEle => rowEle !== trEle)
            });
        } else {
            this.setState({
                selected: [...this.state.selected, trEle]
            });
        }
    }

    render() {
        let rows = this.state.rows.map((row, index)=>{
            console.log('heya', row[2]);
            return(
              <tr key={index}>
                <td><input type="checkbox" onChange= {event => this.handleChange(event)}/></td>
                <td>{row[0]}</td>
                <td><img className="toppingImages" src={row[1]}></img></td>
                <td className='toppingPrice'>
                    <span>{row[2]}</span>
                </td>
              </tr>
            );
        });
        return (
        <div>
            <Header></Header>
            <div className='title'>Select your favourite Crepe toppings</div>
            <div className="container">
                <div className="tableWrapper">
                    <table>
                        <thead>
                            <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            { rows }
                        </tbody>
                    </table>
                </div>
                <DynamicPriceComp basePrice={this.props.location.state} 
                    selected={this.state.selected}></DynamicPriceComp>
            </div>
        </div>
        );
    }
}

export default CrepeTopping;
