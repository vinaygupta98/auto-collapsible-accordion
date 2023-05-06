import React from "react";
import Accordion from "./Components/Accordion";

const App = () => {
  return (
    <div>
      <h2 style={{ margin: "20px" }}>Auto collapsible accordion (in 5sec)</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "lightgreen",
          height: "90.5vh",
        }}>
        <div style={{ width: "300px" }}>
          <Accordion defaultActive="1">
            <Accordion.Item id="1">
              <Accordion.Toggle>What is devtools.tech ?</Accordion.Toggle>
              <Accordion.Panel>
                Devtools Tech is Platform for Frontend Engineers to learn, grow
                and prepare for interviews by solving from high quality real
                world programming interview questions asked by top companies
                around the world
              </Accordion.Panel>
            </Accordion.Item>
            <Accordion.Item id="2">
              <Accordion.Toggle>Is it Free?</Accordion.Toggle>
              <Accordion.Panel>
                Yes, the platform and YouTube both are completely free!
              </Accordion.Panel>
            </Accordion.Item>
            <Accordion.Item id="3">
              <Accordion.Toggle>Take me there already !</Accordion.Toggle>
              <Accordion.Panel>
                You can visit the Platform via devtools.tech or the YT channel
                via youtube.com/devtoolstech
              </Accordion.Panel>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default App;
