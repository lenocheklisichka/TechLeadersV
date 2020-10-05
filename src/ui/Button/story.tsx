import React from "react";
import { ThemeProvider } from "react-jss";
import { Story, Meta } from "@storybook/react/types-6-0";

import { theme } from "../../theme";
import { Button } from "./index";
import { ButtonProps } from "./types";

export default {
  title: "UI/Button",
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => (
  <ThemeProvider theme={theme}>
    <Button {...args}>
      Text
    </Button>
  </ThemeProvider>
);

export const Primary = Template.bind({});
Primary.args = {
  color: "primary",
  variant: "contained",
};

export const Secondary = Template.bind({});
Secondary.args = {
  color: "secondary",
  variant: "contained",
};

export const Large = Template.bind({});
Large.args = {
  color: "primary",
  variant: "contained",
  size: "large",
};

export const Small = Template.bind({});
Small.args = {
  color: "primary",
  variant: "contained",
  size: "small",
};
