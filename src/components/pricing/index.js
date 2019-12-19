import React, { Component } from 'react';
import MyButton from '../utils/MyButton';
import Zoom from 'react-reveal/Zoom';

class Pricing extends Component {

    state = {
        prices:[100, 150, 250],
        positions:['Balcony', 'Medium', 'Star'],
        desc: [
            'Balcony includes one (1) Balcony seat ticket. Allows entry into the show, including access to the main act.',
            'Medium includes one (1) GA ticket. Allows entry into the show, including access to the main act, activities, as well as food & drink vendors.',
            'Star includes one (1) VIP ticket. Allows entry into the show, including access to the main act, activities, food & drink vendors and a a meet and greet with the artist.'
        ],
        linkto: ['https://open.spotify.com/artist/2EWXgN0xWOnbqJOxa9pWNO', 'https://open.spotify.com/artist/2EWXgN0xWOnbqJOxa9pWNO', 'https://open.spotify.com/artist/2EWXgN0xWOnbqJOxa9pWNO'],
        delay:[500,0,500]
    }
    showBoxes = () => (
        this.state.prices.map((box,i)=>(
            <Zoom delay={this.state.delay[i]} key={i}>
                <div className="pricing_item">
                    <div className="pricing_inner_wrapper">
                        <div className="pricing_title">
                            <span>${this.state.prices[i]}</span>
                            <span>{this.state.positions[i]}</span>
                        </div>
                        <div className="pricing_description">
                            {this.state.desc[i]}
                        </div>
                        <div className="pricing_buttons">
                            <MyButton
                                text="Purchase"
                                bck="#ffa800"
                                color="#ffffff"
                                link={this.state.linkto[i]}
                            />
                        </div>
                    </div>
                </div>
            </Zoom>
        ))
       
    )

    render() {
        return (
            <div className="bck_black">
                <div className="center_wraper pricing_section">
                    <h2>Pricing</h2>
                    <div className="pricing_wrapper">
                    {this.showBoxes()}
                    </div>
                </div>
            </div>
        );
    }
}

export default Pricing;