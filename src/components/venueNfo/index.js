import React from 'react';
import Zoom from 'react-reveal/Zoom';
import icon_calendar from '../../resources/images/icons/calendar.png';
import icon_location from '../../resources/images/icons/location.png';

const VenueNfo = () => {
    return (
        <div className='bck_black'>
            <div className="center_wrapper">
                <div className="vn_wrapper">
                    <Zoom duration={500}>
                    <div className="vn_item">
                    <div classname="vn_outer">
                    <div classname="vn_inner">
                        <div classname="vn_icon_square bck_red">

                        </div>
                        <div
                        classname="vn_icon"
                        style={{
                            background:`url(${icon_calendar})`
                        }}
                        ></div>
                        <div className='vn_title'>
                            Event Date & Time
                        </div>
                        <div className="vn_desc">
                            5 Jan 2020 @ 10:00 pm
                        </div>
                    </div>
                    </div>
                </div>
                    </Zoom>

                    <Zoom duration={500} delay={500}>
                    <div className="vn_item">
                    <div classname="vn_outer">
                    <div classname="vn_inner">
                        <div classname="vn_icon_square bck_yellow">

                        </div>
                        <div
                        classname="vn_icon"
                        style={{
                            background:`url(${icon_location})`
                        }}
                        ></div>
                        <div className='vn_title'>
                            Event Location
                        </div>
                        <div className="vn_desc">
                            3521 W. Avondale San Marcos, Tx 78666
                        </div>
                    </div>
                    </div>
                </div>
                    </Zoom>
                
                </div>
            </div>
        </div>
    );
};

export default VenueNfo;