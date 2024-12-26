import { defineConfig } from "tsup";

export default defineConfig((options) => ({
  entryPoints: [
    "src/button.tsx",
    "src/components/Faucet.tsx",
    "src/providers/SuiProvider.tsx",
  ],
  format: ["cjs", "esm"],
  dts: true,
  sourcemap: true,
  external: ["react"],
  ...options,
}));
