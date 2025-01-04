import { defineConfig } from "tsup";

export default defineConfig((options) => ({
  entryPoints: [
    "src/components/Faucet.tsx",
    "src/hooks/useFaucet.tsx",
    "src/components/Balance.tsx",
    "src/hooks/useBalance.tsx",
    "src/components/NetworkType.tsx",
    "src/hooks/useNetworkType.tsx",
    "src/providers/SuiProvider.tsx",
  ],
  format: ["cjs", "esm"],
  dts: true,
  sourcemap: true,
  external: ["react"],
  ...options,
}));
