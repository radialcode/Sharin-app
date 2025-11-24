import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Button from "./Button";
import { TEXT_TYPE } from "@/utils/constant";

const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    // -------------- UI Controls --------------
    appearance: {
      control: "select",
      options: ["Subdued", "Filled", "Outline"],
    },
    size: {
      control: "select",
      options: ["SM", "MD", "LG", "XL"],
    },
    status: {
      control: "select",
      options: ["Default", "Hover", "Pressed", "Focus"],
    },
    leftIcon: { control: "boolean" },
    rightIcon: { control: "boolean" },

    // -------------- Label --------------
    text: {
      control: "text",
    },

    // -------------- Variable Mode --------------
    colorMode: {
      control: "inline-radio",
      options: [TEXT_TYPE.LIGHT, TEXT_TYPE.DARK],
    },
    radius: {
      control: "select",
      options: ["Auto (Default)", "Rounded", "Square"],
    },
    typography: {
      control: "select",
      options: ["Auto (Desktop)", "Mobile", "Large Display"],
    },

    // Background color
    backgroundColor: {
      control: "color",
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    text: "Salta",
    appearance: "Subdued",
    size: "LG",
    status: "Default",
    leftIcon: false,
    rightIcon: false,
    backgroundColor: "",
    colorMode: TEXT_TYPE.LIGHT,
    radius: "Auto (Default)",
    typography: "Auto (Desktop)",
  },
};
