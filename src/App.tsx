import "./App.css";
import BootstrapCssAccordion from "./components/BootstrapCssAccordion/BootstrapCssAccordion";
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
  return (
    <div>
      <ButtonAccordion accordionItems={accordionItems} />
      <BootstrapCssAccordion />
    </div>
  );
}

export default App;
