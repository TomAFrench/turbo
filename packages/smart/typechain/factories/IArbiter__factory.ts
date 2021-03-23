/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer } from "ethers";
import { Provider } from "@ethersproject/providers";

import type { IArbiter } from "../IArbiter";

export class IArbiter__factory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IArbiter {
    return new Contract(address, _abi, signerOrProvider) as IArbiter;
  }
}

const _abi = [
  {
    constant: false,
    inputs: [
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
    ],
    name: "getTurboResolution",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
      {
        internalType: "string[]",
        name: "_outcomeSymbols",
        type: "string[]",
      },
      {
        internalType: "bytes32[]",
        name: "_outcomeNames",
        type: "bytes32[]",
      },
      {
        internalType: "uint256",
        name: "_numTicks",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_arbiterConfiguration",
        type: "bytes",
      },
    ],
    name: "onTurboCreated",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
];
