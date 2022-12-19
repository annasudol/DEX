/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../common";

export interface DexInterface extends utils.Interface {
  functions: {
    "deposit()": FunctionFragment;
    "ethToToken()": FunctionFragment;
    "getLiquidity(address)": FunctionFragment;
    "init(uint256)": FunctionFragment;
    "liquidity(address)": FunctionFragment;
    "price(uint256,uint256,uint256)": FunctionFragment;
    "tokenToEth(uint256)": FunctionFragment;
    "totalLiquidity()": FunctionFragment;
    "withdraw(uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "deposit"
      | "ethToToken"
      | "getLiquidity"
      | "init"
      | "liquidity"
      | "price"
      | "tokenToEth"
      | "totalLiquidity"
      | "withdraw"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "deposit", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "ethToToken",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getLiquidity",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "init",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "liquidity",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "price",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "tokenToEth",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "totalLiquidity",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [PromiseOrValue<BigNumberish>]
  ): string;

  decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "ethToToken", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getLiquidity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "init", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "liquidity", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "price", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "tokenToEth", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "totalLiquidity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;

  events: {
    "EthToTokenSwap(address,string,uint256,uint256)": EventFragment;
    "LiquidityProvided(address,uint256,uint256,uint256)": EventFragment;
    "LiquidityRemoved(address,uint256,uint256,uint256)": EventFragment;
    "TokenToEthSwap(address,string,uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "EthToTokenSwap"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "LiquidityProvided"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "LiquidityRemoved"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TokenToEthSwap"): EventFragment;
}

export interface EthToTokenSwapEventObject {
  swapper: string;
  txDetails: string;
  ethInput: BigNumber;
  tokenOutput: BigNumber;
}
export type EthToTokenSwapEvent = TypedEvent<
  [string, string, BigNumber, BigNumber],
  EthToTokenSwapEventObject
>;

export type EthToTokenSwapEventFilter = TypedEventFilter<EthToTokenSwapEvent>;

export interface LiquidityProvidedEventObject {
  liquidityProvider: string;
  tokensInput: BigNumber;
  ethInput: BigNumber;
  liquidityMinted: BigNumber;
}
export type LiquidityProvidedEvent = TypedEvent<
  [string, BigNumber, BigNumber, BigNumber],
  LiquidityProvidedEventObject
>;

export type LiquidityProvidedEventFilter =
  TypedEventFilter<LiquidityProvidedEvent>;

export interface LiquidityRemovedEventObject {
  liquidityRemover: string;
  tokensOutput: BigNumber;
  ethOutput: BigNumber;
  liquidityWithdrawn: BigNumber;
}
export type LiquidityRemovedEvent = TypedEvent<
  [string, BigNumber, BigNumber, BigNumber],
  LiquidityRemovedEventObject
>;

export type LiquidityRemovedEventFilter =
  TypedEventFilter<LiquidityRemovedEvent>;

export interface TokenToEthSwapEventObject {
  swapper: string;
  txDetails: string;
  tokensInput: BigNumber;
  ethOutput: BigNumber;
}
export type TokenToEthSwapEvent = TypedEvent<
  [string, string, BigNumber, BigNumber],
  TokenToEthSwapEventObject
>;

export type TokenToEthSwapEventFilter = TypedEventFilter<TokenToEthSwapEvent>;

export interface Dex extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: DexInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    deposit(
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    ethToToken(
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getLiquidity(
      lp: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    init(
      tokens: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    liquidity(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    price(
      xInput: PromiseOrValue<BigNumberish>,
      xReserves: PromiseOrValue<BigNumberish>,
      yReserves: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { yOutput: BigNumber }>;

    tokenToEth(
      tokenInput: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    totalLiquidity(overrides?: CallOverrides): Promise<[BigNumber]>;

    withdraw(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  deposit(
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  ethToToken(
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getLiquidity(
    lp: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  init(
    tokens: PromiseOrValue<BigNumberish>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  liquidity(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  price(
    xInput: PromiseOrValue<BigNumberish>,
    xReserves: PromiseOrValue<BigNumberish>,
    yReserves: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  tokenToEth(
    tokenInput: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  totalLiquidity(overrides?: CallOverrides): Promise<BigNumber>;

  withdraw(
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    deposit(overrides?: CallOverrides): Promise<BigNumber>;

    ethToToken(overrides?: CallOverrides): Promise<BigNumber>;

    getLiquidity(
      lp: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    init(
      tokens: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    liquidity(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    price(
      xInput: PromiseOrValue<BigNumberish>,
      xReserves: PromiseOrValue<BigNumberish>,
      yReserves: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    tokenToEth(
      tokenInput: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    totalLiquidity(overrides?: CallOverrides): Promise<BigNumber>;

    withdraw(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        eth_amount: BigNumber;
        token_amount: BigNumber;
      }
    >;
  };

  filters: {
    "EthToTokenSwap(address,string,uint256,uint256)"(
      swapper?: null,
      txDetails?: null,
      ethInput?: null,
      tokenOutput?: null
    ): EthToTokenSwapEventFilter;
    EthToTokenSwap(
      swapper?: null,
      txDetails?: null,
      ethInput?: null,
      tokenOutput?: null
    ): EthToTokenSwapEventFilter;

    "LiquidityProvided(address,uint256,uint256,uint256)"(
      liquidityProvider?: null,
      tokensInput?: null,
      ethInput?: null,
      liquidityMinted?: null
    ): LiquidityProvidedEventFilter;
    LiquidityProvided(
      liquidityProvider?: null,
      tokensInput?: null,
      ethInput?: null,
      liquidityMinted?: null
    ): LiquidityProvidedEventFilter;

    "LiquidityRemoved(address,uint256,uint256,uint256)"(
      liquidityRemover?: null,
      tokensOutput?: null,
      ethOutput?: null,
      liquidityWithdrawn?: null
    ): LiquidityRemovedEventFilter;
    LiquidityRemoved(
      liquidityRemover?: null,
      tokensOutput?: null,
      ethOutput?: null,
      liquidityWithdrawn?: null
    ): LiquidityRemovedEventFilter;

    "TokenToEthSwap(address,string,uint256,uint256)"(
      swapper?: null,
      txDetails?: null,
      tokensInput?: null,
      ethOutput?: null
    ): TokenToEthSwapEventFilter;
    TokenToEthSwap(
      swapper?: null,
      txDetails?: null,
      tokensInput?: null,
      ethOutput?: null
    ): TokenToEthSwapEventFilter;
  };

  estimateGas: {
    deposit(
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    ethToToken(
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getLiquidity(
      lp: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    init(
      tokens: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    liquidity(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    price(
      xInput: PromiseOrValue<BigNumberish>,
      xReserves: PromiseOrValue<BigNumberish>,
      yReserves: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    tokenToEth(
      tokenInput: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    totalLiquidity(overrides?: CallOverrides): Promise<BigNumber>;

    withdraw(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    deposit(
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    ethToToken(
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getLiquidity(
      lp: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    init(
      tokens: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    liquidity(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    price(
      xInput: PromiseOrValue<BigNumberish>,
      xReserves: PromiseOrValue<BigNumberish>,
      yReserves: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    tokenToEth(
      tokenInput: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    totalLiquidity(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    withdraw(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
