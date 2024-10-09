import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import { AccordionItem } from "../../models/accordion-item.model";

export type ButtonAccordionProps = {
  accordionItems: AccordionItem[];
};

const ButtonAccordion: React.FC<ButtonAccordionProps> = ({
  accordionItems,
}) => {
  return (
    <Accordion>
      {accordionItems?.map((item, index) => (
        <Accordion.Item eventKey={index.toString()}>
          <Accordion.Header>
            <div className="w-100 d-flex justify-content-between align-items-center gap-3 px-3">
              <span>{item.header.text}</span>
              <Button variant={item.header.buttonVariant}>
                {item.header.buttonLabel}
              </Button>{" "}
            </div>
          </Accordion.Header>
          <Accordion.Body>{item.body}</Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
};

export default ButtonAccordion;
