import React from "react";
import AccordionItem from "./AccordionItem";
import AccordionPanel from "./AccordionPanel";
import AccordionToggle from "./AccordionToggle";
export const DEFAULT_DELAY = 5000;
const Accordion = ({ defaultActive, children }) => {
  const [activeIndex, setActiveIndex] = React.useState(defaultActive ?? "1");
  const onClick = (id) =>
    activeIndex === id ? setActiveIndex(null) : setActiveIndex(id);
  React.useEffect(() => {
    let timeId = setTimeout(() => {
      setActiveIndex((prev) => {
        let abc = prev
          ? String(children.length) !== prev
            ? String(Number(prev) + 1)
            : "1"
          : "1";
        return abc;
      });
      return () => clearTimeout(timeId);
    }, DEFAULT_DELAY);
  }, [activeIndex, children.length]);
  return (
    <div
      className="accordion"
      style={{ padding: 16, borderRadius: "4px", background: "white" }}>
      {React.Children.map(children, (child) =>
        React.cloneElement(child, {
          ...child.props,
          activeIndex: activeIndex,
          length: Array.isArray(children) ? children.length > 0 : 3,
          onClick,
        })
      )}
    </div>
  );
};

Accordion.Item = AccordionItem;
Accordion.Toggle = AccordionToggle;
Accordion.Panel = AccordionPanel;

export default Accordion;
