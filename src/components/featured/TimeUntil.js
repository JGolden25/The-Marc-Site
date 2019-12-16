import React, { Component } from 'react';

class TimeUntil extends Component {

    state = {

    }
    render() {
        return (
            <div className='countdown_wrapper'>
                <div className="countdown_top">
                    Event starts in
                </div>
                <div className="countdown_bottom">
                <div className="countdown_item">
                    <div className="countdown_time">
                    23
                    </div>
                    <div className="countdown_tag">
                    days
                    </div>
                </div>
                </div>
            </div>
        );
    }
}

export default TimeUntil;