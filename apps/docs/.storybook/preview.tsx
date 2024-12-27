import type { Preview } from "@storybook/react";
import SuiProvider from "@suiware/react-kit/SuiProvider";
import React from "react";

const preview: Preview = {
  decorators: [
    (Story) => (
      <SuiProvider>
        {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
        <Story />
      </SuiProvider>
    ),
  ],
};

export default preview;
