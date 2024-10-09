import { Meta, StoryFn } from "@storybook/react";
import MyButton, { MyButtonProps } from "./MyButton";
import { title } from "process";

const meta: Meta<typeof MyButton> = {
  component: MyButton,
  title: "MyButton",
  argTypes: {
    variant: {
      options: ["primary", "secondary", "success", "danger"],
      control: { type: "radio" },
    },
    size: {
      options: ["Small", "Medium", "Large"],
      control: { type: "radio" },
      mapping: {
        Small: "sm",
        Medium: undefined,
        Large: "lg",
      },
    },
    disabled: {
      options: [true, false],
      control: { type: "boolean" },
    },
    isActive: {
      options: [true, false],
      control: { type: "boolean" },
    },
    isOutline: {
      options: [true, false],
      control: { type: "boolean" },
    },
    label: {
      control: { type: "text" },
    },
  },
};

export default meta;

const Template: StoryFn<MyButtonProps> = (args: MyButtonProps) => (
  <MyButton {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  variant: "primary",
  label: "Primary",
};

export const Secondary = Template.bind({});

Secondary.args = {
  variant: "secondary",
  label: "Secondary",
};

export const SmallDangerOutline = Template.bind({});

SmallDangerOutline.args = {
  variant: "danger",
  label: "Small danger outline",
  isOutline: true,
  size: "sm",
};
