import React from "react";

const ContactMap = () => {
  return (
    <div className="map_section">
      <div id="map">
        <iframe
          title="template google map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.2517855793116!2d73.2182213!3d19.190405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7931974a7a4f5%3A0x1e639eccd3e0a8e6!2sOrchid%20Square!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin"
            allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default ContactMap;
