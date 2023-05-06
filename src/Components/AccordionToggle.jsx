import React from "react";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";

const AccordionToggle = ({ children, id, activeIndex, onClick }) => {
  return (
    <div
      className="toggle"
      style={{
        color: activeIndex === id ? "black" : "gray",
        fontWeight: "bold",
        fontSize: "19px",
        background: "none",
        border: "none",
        padding: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
      onClick={() => onClick(id)}>
      {children}
      {activeIndex === id ? (
        <AiOutlineUp color="black" />
      ) : (
        <AiOutlineDown color="lightgray" />
      )}
    </div>
  );
};

export default AccordionToggle;
