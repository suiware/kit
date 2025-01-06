import { defineConfig } from "tsup";

export default defineConfig((options) => ({
  entryPoints: [
    "src/index.tsx",
    "src/components/Faucet.tsx",
    "src/hooks/useFaucet.tsx",
    "src/components/Balance.tsx",
    "src/hooks/useBalance.tsx",
    "src/components/NetworkType.tsx",
    "src/hooks/useNetworkType.tsx",
    "src/providers/SuiProvider.tsx",
    "src/components/AddressInput.tsx",
    "src/components/AmountInput.tsx",
  ],
  format: ["cjs", "esm"],
  dts: true,
  sourcemap: true,
  treeshake: true,
  external: ["react"],
  ...options,
}));
