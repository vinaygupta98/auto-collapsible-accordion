import React, { useEffect } from "react";
import { DEFAULT_DELAY } from "./Accordion";

const AccordionItem = ({ children, activeIndex, length, id, ...props }) => {
  const [width, setWidth] = React.useState(0);
  useEffect(() => {
    setInterval(() => {
      setWidth((prev) => prev + 1);
    }, DEFAULT_DELAY / 50);
  }, []);
  useEffect(() => {
    setWidth(0);
  }, [activeIndex]);
  return (
    <>
      {id === activeIndex && (
        <div
          style={{
            background: "violet",
            height: "2px",
            width: `${width}%`,
          }}
        />
      )}
      <div
        className="item"
        id={id}
        style={{
          borderBottom:
            Number(length) === Number(id) - 1 || id === "1"
              ? "none"
              : "1px solid lightgray",
          borderTop: id === activeIndex ? "none" : "1px solid lightgray",
          padding: "10px",
        }}>
        {/* "2px solid violet"  */}

        {React.Children.map(children, (child) =>
          React.cloneElement(child, { ...props, activeIndex, id })
        )}
      </div>
    </>
  );
};

export default AccordionItem;
