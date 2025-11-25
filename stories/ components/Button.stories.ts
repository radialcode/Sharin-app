import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Button from "./Button";

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
      options: ["Fill", "Subdued", "Ghost", "Critical", "Accent", "On color"],
    },
    size: {
      control: "select",
      options: ["SM 32", "MD 40", "LG 48"],
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
      options: ["light", "Dark"],
    },
    radius: {
      control: "select",
      options: ["Default", "Full",],
    },
    typography: {
      control: "select",
      options: ["Auto (Desktop)", "Desktop", "Tablet", "Mobile"],
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
    size: "LG 48",
    status: "Default",
    leftIcon: false,
    rightIcon: false,
    backgroundColor: "",
    colorMode: "Auto (Light)",
    radius: "Auto (Default)",
    typography: "Auto (Desktop)",
  },
};