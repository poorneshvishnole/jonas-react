import { useState } from "react";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

export default function App() {
  return (
    <div>
      <Accordion />
    </div>
  );
}

function Accordion() {
  const [curOpen, setIsOpen] = useState(null);

  return (
    <div className="accordion">
      {faqs.map((item, index) => {
        return (
          <AccordianItem
            item={item}
            index={index}
            num={index}
            curOpen={curOpen}
            onOpen={setIsOpen}
            key={item.title}
          >
            {item.text}
          </AccordianItem>
        );
      })}
    </div>
  );
}

function AccordianItem({ num, item, index, curOpen, onOpen, children }) {
  const isOpen = num === curOpen;

  const handleOpen = () => {
    onOpen(isOpen ? null : num);
  };

  const btn = curOpen ? "-" : "+";

  return (
    <div className={`item ${isOpen && "open"}`} onClick={handleOpen}>
      <p className="number"> {index + 1}</p>
      <p className="title ">{item.title}</p>
      <p className="icon">{btn}</p>
      {isOpen && <div className="content-box">{children}</div>}
    </div>
  );
}
