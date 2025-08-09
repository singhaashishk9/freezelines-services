import { FeatureOneData } from "@/data";
import React from "react";

const FeatureOne = () => {
  return (
    <section className="modern-features-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="modern-features-grid">
              {FeatureOneData.map(({ icon, title }, index) => (
                <div className="modern-feature-card" key={`feature-one-${index}`}>
                  <div className="feature-icon-wrapper">
                    <div className="feature-icon-bg">
                      <i className={icon}></i>
                    </div>
                  </div>
                  <div className="feature-content">
                    <h4 className="feature-title">{title}</h4>
                    <div className="feature-line"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureOne;
