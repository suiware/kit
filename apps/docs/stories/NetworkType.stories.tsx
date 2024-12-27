import type { Meta, StoryObj } from "@storybook/react";
import NetworkType from "@suiware/react-kit/NetworkType";

const meta: Meta<typeof NetworkType> = {
  component: NetworkType,
  argTypes: {
    // type: {
    //   control: { type: "radio" },
    //   options: ["button", "submit", "reset"],
    // },
  },
};

export default meta;

type Story = StoryObj<typeof NetworkType>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: (props) => <NetworkType />,
  name: "NetworkType",
  args: {},
};
