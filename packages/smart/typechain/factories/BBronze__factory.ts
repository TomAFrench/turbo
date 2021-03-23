/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { BBronze } from "../BBronze";

export class BBronze__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<BBronze> {
    return super.deploy(overrides || {}) as Promise<BBronze>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): BBronze {
    return super.attach(address) as BBronze;
  }
  connect(signer: Signer): BBronze__factory {
    return super.connect(signer) as BBronze__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BBronze {
    return new Contract(address, _abi, signerOrProvider) as BBronze;
  }
}

const _abi = [
  {
    constant: true,
    inputs: [],
    name: "getColor",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x6080604052348015600f57600080fd5b5060878061001e6000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c80639a86139b14602d575b600080fd5b60336045565b60408051918252519081900360200190f35b6542524f4e5a4560d01b9056fea265627a7a7231582086e1017bc7b41b90b2d57382084dabe5fd0796792460ea22ab4efb2d29b2781864736f6c634300050f0032";
