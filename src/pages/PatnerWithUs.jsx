import React from "react";
import "../styles/PartnerWithUs.css";

const PartnerWithUs = () => {
  return (
    <div className="partner-services-container">
      {/* Partner Section */}
      <section className="partner-section">
        <div className="partner-content">
          <h2>PARTNER WITH US</h2>
          <p>This is a dummy text. This is a dummy text.</p>
          <button className="partner-btn">Become a member</button>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <h2>SERVICES WE OFFER</h2>
        <div className="services-list">
          <div className="service-item">
            <div className="service-image">
              <img src="placeholder.jpg" alt="Service 1" />
            </div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
          <div className="service-item">
            <div className="service-image">
              <img src="placeholder.jpg" alt="Service 2" />
            </div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
          <div className="service-item">
            <div className="service-image">
              <img src="placeholder.jpg" alt="Service 3" />
            </div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
        <button className="learn-more-btn">Learn more</button>
      </section>
    </div>
  );
};

export default PartnerWithUs;
