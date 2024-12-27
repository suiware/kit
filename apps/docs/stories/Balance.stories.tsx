import type { Meta, StoryObj } from "@storybook/react";
import Balance from "@suiware/react-kit/Balance";

const meta: Meta<typeof Balance> = {
  component: Balance,
  argTypes: {
    // type: {
    //   control: { type: "radio" },
    //   options: ["button", "submit", "reset"],
    // },
  },
};

export default meta;

type Story = StoryObj<typeof Balance>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: (props) => <Balance />,
  name: "Balance",
  args: {},
};
