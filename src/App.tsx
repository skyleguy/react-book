import "./App.css";
import ButtonAccordion from "./components/ButtonAccordion/ButtonAccordion";
import { AccordionItem } from "./models/accordion-item.model";

function App() {
  const accordionItems: AccordionItem[] = [
    {
      header: {
        buttonLabel: "Save",
        buttonVariant: "primary",
        text: "Save Your Items",
      },
      body: "This is the dynamic text of the super cool button accordion. Presumably this entails info on saving something somewhere",
    },
  ];
  return <ButtonAccordion accordionItems={accordionItems} />;
}

export default App;
