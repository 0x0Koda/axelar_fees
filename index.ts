import {
  AxelarQueryAPI,
  AxelarQueryAPIConfig,
  Environment as AxelarEnvironment,
} from "@axelar-network/axelarjs-sdk";

(async function () {
  const sdk = new AxelarQueryAPI({
    environment: AxelarEnvironment.MAINNET,
  } as AxelarQueryAPIConfig);

  let gasEstimateResponse1 = await sdk.estimateGasFee(
    "osmosis",
    "Avalanche",
    "axlUSDC",
    220000,
    1,
    undefined,
    {
      showDetailedFees: true,
      transferAmount: 220000,
      destinationContractAddress:
        "0xce16F69375520ab01377ce7B88f5BA8C48F8D666" as string,
      sourceContractAddress: "" as string,
      tokenSymbol: "aUSDC",
    }
  );
  console.log(gasEstimateResponse1);

  let gasEstimateResponse2 = await sdk.estimateGasFee(
    "osmosis",
    "Polygon",
    "axlUSDC",
    220000,
    1,
    undefined,
    {
      showDetailedFees: true,
      transferAmount: 220000,
      destinationContractAddress:
        "0xce16F69375520ab01377ce7B88f5BA8C48F8D666" as string,
      sourceContractAddress: "" as string,
      tokenSymbol: "aUSDC",
    }
  );
  console.log(gasEstimateResponse2);
})();
