import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Card, { CARD_DEFAULTS } from "./Card";

const meta = {
  title: "Components/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: CARD_DEFAULTS.title,
    description: CARD_DEFAULTS.description,
  },
};