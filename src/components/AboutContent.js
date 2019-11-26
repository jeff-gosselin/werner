import React from "react";

// Stylesheet
import "../css/Drawer.scss";

// This component goes inside of the ContactUs component
const AboutContent = () => {
  return (
    <div className="drawer-content">
      <div className="about-content">
        <div className="about-content-image">
          <img src="" alt="" />
        </div>
        <h3>About Content</h3>
        <p>
          Commodo sit consectetur commodo cupidatat officia quis dolor ex. Culpa
          nostrud anim duis ex labore culpa culpa occaecat est reprehenderit
          dolor. Reprehenderit consectetur in cillum enim laboris.
        </p>

        <h3>More Content</h3>
        <p>
          Quis velit consequat id consequat labore nostrud qui quis non. Id
          laboris ullamco amet cillum officia ut. Ipsum sunt id occaecat
          exercitation aute sint. Irure pariatur ea Lorem esse magna sint id sit
          irure qui tempor ut nisi. Eiusmod culpa esse reprehenderit fugiat
          voluptate. Voluptate veniam Lorem culpa officia irure reprehenderit
          reprehenderit deserunt.
        </p>
      </div>
    </div>
  );
};

export default AboutContent;
