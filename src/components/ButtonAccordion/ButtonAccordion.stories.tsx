import { StoryFn } from "@storybook/react";
import ButtonAccordion, { ButtonAccordionProps } from "./ButtonAccordion";

export default {
  title: "ButtonAccordion",
  component: ButtonAccordion,
};

const Template: StoryFn<ButtonAccordionProps> = (
  args: ButtonAccordionProps
) => <ButtonAccordion {...args} />;

export const Test = Template.bind({});

Test.args = {
  accordionItems: [
    {
      header: {
        buttonLabel: "Save",
        buttonVariant: "primary",
        text: "Save Your Items",
      },
      body: "This is the dynamic text of the super cool button accordion. Presumably this entails info on saving something somewhere",
    },
  ],
};
