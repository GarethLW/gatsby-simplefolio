// Step 1: Import React
import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

// Step 2: Define your component
const ResumePage = () => {
  return (
    <main>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="resume.jpg"
      />
    </main>
  );
};

// Step 3: Export your component
export default ResumePage;
