import React from "react";

const AccordionPanel = ({ children, id, activeIndex }) => {
  return activeIndex === id ? (
    <div
      className="panel"
      style={{
        color: "black",
        fontSize: "15px",
        lineHeight: 1,
        padding: "10px 0",
      }}>
      {children}
    </div>
  ) : null;
};

export default AccordionPanel;
