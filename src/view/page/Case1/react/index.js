import React, {useState, useEffect} from "react";
import "./style.css";
import Detail from "./Detail";
import dummyData from "./dummyData";
import Header from "./Header";

function Case1_React() {
  const [openedIndex, setOpen] = useState(null);

  const togglePopover = index => e => {
    e.preventDefault();
    e.stopPropagation();
    setOpen(openedIndex === index ? null : index);
  };

  const closeAll = (e) => {
    // do something here.
    if (e.target.nodeName !== "p") setOpen(null);
  };

  useEffect(() => {
    document.body.addEventListener("click", closeAll);
    return () => {
      document.body.removeEventListener("click", closeAll);
    };
  });

  return (
    <div>
      <Header/>
      <div className="wrapper">
        {dummyData.map(({text, context}, i) => (
          <Detail
            key={`detail${i}`}
            text={text}
            context={context}
            open={openedIndex === i}
            onToggle={togglePopover(i)}
          />
        ))}
      </div>
    </div>
  );
}

export default Case1_React;