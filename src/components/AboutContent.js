import React from "react";

// Stylesheet
import "../css/Drawer.scss";

import { IoIosRocket } from "react-icons/io";
import { IoIosPeople } from "react-icons/io";
import { GiOpenBook } from "react-icons/gi";

// This component goes inside of the ContactUs component
const AboutContent = () => {
  return (
    <div className="drawer-content">
      <div className="about-content">
        <div className="about-content-image"></div>

        <div className="about-content-who">
          <div className="about-content-who-icon first">
            <IoIosPeople />
          </div>
          <div className="paragraph">
            <h3>Who We Are</h3>
            <p>
              Commodo sit consectetur commodo cupidatat officia quis dolor ex.
              Culpa nostrud anim duis ex labore culpa culpa occaecat est
              reprehenderit dolor. Reprehenderit consectetur in cillum enim
              laboris.
            </p>
          </div>
        </div>

        <div className="about-content-who">
          <div className="about-content-who-icon">
            <GiOpenBook />
          </div>
          <div className="paragraph">
            <h3>Our Story</h3>
            <p>
              Quis velit consequat id consequat labore nostrud qui quis non. Id
              laboris ullamco amet cillum officia ut. Ipsum sunt id occaecat
              exercitation aute sint. Irure pariatur ea Lorem esse magna sint id
              sit irure qui tempor ut nisi. Eiusmod culpa esse reprehenderit
              fugiat voluptate. Voluptate veniam Lorem culpa officia irure
              reprehenderit reprehenderit deserunt.
            </p>
          </div>
        </div>

        <div className="about-content-who">
          <div className="about-content-who-icon">
            <IoIosRocket />
          </div>
          <div className="paragraph">
            <h3>Our Mission</h3>
            <p>
              Consequat labore nostrud qui quis non. Id laboris ullamco amet
              cillum officia ut. Ipsum sunt id occaecat exercitation aute sint.
              Irure pariatur ea Lorem esse magna sint id sit irure qui tempor ut
              nisi. Eiusmod culpa esse reprehenderit fugiat voluptate. Voluptate
              veniam Lorem culpa officia irure reprehenderit reprehenderit
              deserunt.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
