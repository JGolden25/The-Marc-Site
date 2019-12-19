import React from 'react';

const Location = () => {
    return (
        <div className="location_wrapper">
            
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3459.3805978690093!2d-97.9427222848887!3d29.882132181941717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x865ca866fc169a6b%3A0x7cd8207602613b9c!2sThe%20Marc!5e0!3m2!1sen!2sus!4v1576733398868!5m2!1sen!2sus" 
                width="100%" 
                height="500px" 
                frameBorder="0" 
                allowFullScreen
            ></iframe>

            <div className="location_tag">
                <div>Location</div>
            </div>

        </div>
    );
};

export default Location;