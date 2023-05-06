import React from "react";

const AccordionItem = ({ children, activeIndex, length, id, ...props }) => {
  return (
    <div
      className="item"
      id={id}
      style={{
        borderBottom:
          Number(length) === Number(id) - 1 || id === "1"
            ? "none"
            : "1px solid lightgray",
        borderTop: id === activeIndex ? "2px solid violet" : "1px solid lightgray",
        padding: "10px",
      }}>
      {React.Children.map(children, (child) =>
        React.cloneElement(child, { ...props, activeIndex, id })
      )}
    </div>
  );
};

export default AccordionItem;
