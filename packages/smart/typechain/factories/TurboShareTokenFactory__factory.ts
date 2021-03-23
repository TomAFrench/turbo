/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { TurboShareTokenFactory } from "../TurboShareTokenFactory";

export class TurboShareTokenFactory__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<TurboShareTokenFactory> {
    return super.deploy(overrides || {}) as Promise<TurboShareTokenFactory>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): TurboShareTokenFactory {
    return super.attach(address) as TurboShareTokenFactory;
  }
  connect(signer: Signer): TurboShareTokenFactory__factory {
    return super.connect(signer) as TurboShareTokenFactory__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TurboShareTokenFactory {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as TurboShareTokenFactory;
  }
}

const _abi = [
  {
    constant: true,
    inputs: [],
    name: "INVALID_NAME",
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
  {
    constant: true,
    inputs: [],
    name: "INVALID_SYMBOL",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "bytes32[]",
        name: "_names",
        type: "bytes32[]",
      },
      {
        internalType: "string[]",
        name: "_symbols",
        type: "string[]",
      },
    ],
    name: "createShareTokens",
    outputs: [
      {
        internalType: "contract ITurboShareToken[]",
        name: "",
        type: "address[]",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "getInitialized",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "hatchery",
    outputs: [
      {
        internalType: "contract ITurboHatchery",
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "contract ITurboHatchery",
        name: "_hatchery",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040526000805460ff1916905534801561001a57600080fd5b506117148061002a6000396000f3fe60806040523480156200001157600080fd5b50600436106200006a5760003560e01c80630a0b23b0146200006f57806348b164d2146200009157806355e1e8b614620000aa5780639cd7ff8d14620000d0578063c4d66de814620000e9578063ee89dab4146200010f575b600080fd5b6200007962000119565b604051620000889190620006dc565b60405180910390f35b6200009b6200013c565b6040516200008891906200068f565b620000c1620000bb36600462000466565b62000150565b60405162000088919062000655565b620000da62000376565b6040516200008891906200067f565b62000100620000fa366004620004dd565b6200038a565b6040516200008891906200066f565b62000100620003d0565b604051806040016040528060078152602001661253959053125160ca1b81525081565b60005461010090046001600160a01b031681565b60005460609061010090046001600160a01b031633146200018e5760405162461bcd60e51b8152600401620001859062000722565b60405180910390fd5b60408051600186018082526020808202830101909252606090828015620001bf578160200160208202803883390190505b509050604051806040016040528060078152602001661253959053125160ca1b8152506c494e56414c494420534841524560981b600060019054906101000a90046001600160a01b03166040516200021790620003f9565b6200022593929190620006ef565b604051809103906000f08015801562000242573d6000803e3d6000fd5b50816000815181106200025157fe5b6001600160a01b039092166020928302919091019091015260015b8281101562000369578585600183038181106200028557fe5b602002820190508035601e1936849003018112620002a257600080fd5b9091016020810191503567ffffffffffffffff811115620002c257600080fd5b36819003821315620002d357600080fd5b898960018503818110620002e357fe5b90506020020135600060019054906101000a90046001600160a01b03166040516200030e90620003f9565b6200031d94939291906200069f565b604051809103906000f0801580156200033a573d6000803e3d6000fd5b508282815181106200034857fe5b6001600160a01b03909216602092830291909101909101526001016200026c565b509150505b949350505050565b6c494e56414c494420534841524560981b81565b6000805460ff16156200039c57600080fd5b620003a6620003d9565b50600080546001600160a01b03831661010002610100600160a81b03199091161790556001919050565b60005460ff1690565b60005460ff1615620003ea57600080fd5b6000805460ff19166001179055565b610ef980620007d983390190565b60008083601f8401126200041a57600080fd5b50813567ffffffffffffffff8111156200043357600080fd5b6020830191508360208202830111156200044c57600080fd5b9250929050565b80356200046081620007be565b92915050565b600080600080604085870312156200047d57600080fd5b843567ffffffffffffffff8111156200049557600080fd5b620004a38782880162000407565b9450945050602085013567ffffffffffffffff811115620004c357600080fd5b620004d18782880162000407565b95989497509550505050565b600060208284031215620004f057600080fd5b60006200036e848462000453565b60006200050c838362000595565b505060200190565b600062000521826200073a565b6200052d81856200073e565b93506200053a8362000734565b8060005b838110156200056e578151620005558882620004fe565b9750620005628362000734565b9250506001016200053e565b509495945050505050565b620005848162000754565b82525050565b620005848162000759565b62000584816200075c565b6000620005ae83856200073e565b9350620005bd83858462000775565b620005c883620007b4565b9093019392505050565b6000620005df826200073a565b620005eb81856200073e565b9350620005fd81856020860162000781565b620005c881620007b4565b6000620006176029836200073e565b7f4f6e6c79206861746368657279206d617920637265617465206e657720736861815268726520746f6b656e7360b81b602082015260400192915050565b6020808252810162000668818462000514565b9392505050565b6020810162000460828462000579565b602081016200046082846200058a565b6020810162000460828462000595565b60608082528101620006b3818688620005a0565b9050620006c460208301856200058a565b620006d3604083018462000595565b95945050505050565b60208082528101620006688184620005d2565b60608082528101620007028186620005d2565b90506200071360208301856200058a565b6200036e604083018462000595565b60208082528101620004608162000608565b60200190565b5190565b90815260200190565b6000620004608262000769565b151590565b90565b6000620004608262000747565b6001600160a01b031690565b82818337506000910152565b60005b838110156200079e57818101518382015260200162000784565b83811115620007ae576000848401525b50505050565b601f01601f191690565b620007c9816200075c565b8114620007d557600080fd5b5056fe60806040526000805460ff191660121790553480156200001e57600080fd5b5060405162000ef938038062000ef9833981810160405260608110156200004457600080fd5b81019080805160405193929190846401000000008211156200006557600080fd5b9083019060208201858111156200007b57600080fd5b82516401000000008111828201881017156200009657600080fd5b82525081516020918201929091019080838360005b83811015620000c5578181015183820152602001620000ab565b50505050905090810190601f168015620000f35780820380516001836020036101000a031916815260200191505b5060409081526020828101519290910151600480546001600160a01b03191633179055855192945092506200012e916006918601906200015b565b50600591909155600480546001600160a01b0319166001600160a01b039092169190911790555062000200565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200019e57805160ff1916838001178555620001ce565b82800160010185558215620001ce579182015b82811115620001ce578251825591602001919060010190620001b1565b50620001dc929150620001e0565b5090565b620001fd91905b80821115620001dc5760008155600101620001e7565b90565b610ce980620002106000396000f3fe608060405234801561001057600080fd5b50600436106101215760003560e01c806355b6ed5c116100ad578063a457c2d711610071578063a457c2d7146103ad578063a9059cbb146103d9578063c024cd2614610405578063dd62ed3e14610431578063f2fde38b1461045f57610121565b806355b6ed5c1461029257806370a08231146102c057806371297784146102e6578063893d20e81461030c57806395d89b411461033057610121565b806323b872dd116100f457806323b872dd146101c057806327e235e3146101f6578063313ce5671461021c578063395093511461023a57806342986e131461026657610121565b806306fdde0314610126578063095ea7b3146101405780630fb665571461018057806318160ddd146101b8575b600080fd5b61012e610485565b60408051918252519081900360200190f35b61016c6004803603604081101561015657600080fd5b506001600160a01b03813516906020013561048b565b604080519115158252519081900360200190f35b6101b66004803603606081101561019657600080fd5b506001600160a01b038135811691602081013590911690604001356104a1565b005b61012e6104c8565b61016c600480360360608110156101d657600080fd5b506001600160a01b038135811691602081013590911690604001356104ce565b61012e6004803603602081101561020c57600080fd5b50356001600160a01b0316610525565b610224610537565b6040805160ff9092168252519081900360200190f35b61016c6004803603604081101561025057600080fd5b506001600160a01b038135169060200135610540565b6101b66004803603604081101561027c57600080fd5b506001600160a01b03813516906020013561057c565b61012e600480360360408110156102a857600080fd5b506001600160a01b038135811691602001351661059d565b61012e600480360360208110156102d657600080fd5b50356001600160a01b03166105ba565b61012e600480360360208110156102fc57600080fd5b50356001600160a01b03166105d5565b61031461060d565b604080516001600160a01b039092168252519081900360200190f35b61033861061c565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561037257818101518382015260200161035a565b50505050905090810190601f16801561039f5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61016c600480360360408110156103c357600080fd5b506001600160a01b0381351690602001356106aa565b61016c600480360360408110156103ef57600080fd5b506001600160a01b0381351690602001356106e6565b6101b66004803603604081101561041b57600080fd5b506001600160a01b0381351690602001356106f3565b61012e6004803603604081101561044757600080fd5b506001600160a01b0381358116916020013516610714565b61016c6004803603602081101561047557600080fd5b50356001600160a01b031661073f565b60055481565b60006104983384846107a7565b50600192915050565b6004546001600160a01b031633146104b857600080fd5b6104c3838383610893565b505050565b60015481565b60006104db848484610893565b6001600160a01b03841660009081526003602090815260408083203380855292529091205461051b918691610516908663ffffffff6109dd16565b6107a7565b5060019392505050565b60026020526000908152604090205481565b60005460ff1681565b3360008181526003602090815260408083206001600160a01b03871684529091528120549091610498918590610516908663ffffffff6109f216565b6004546001600160a01b0316331461059357600080fd5b6104c38282610a0b565b600360209081526000928352604080842090915290825290205481565b6001600160a01b031660009081526002602052604090205490565b6004546000906001600160a01b031633146105ef57600080fd5b60006105fa836105ba565b90506106068382610a0b565b5092915050565b6004546001600160a01b031690565b6006805460408051602060026001851615610100026000190190941693909304601f810184900484028201840190925281815292918301828280156106a25780601f10610677576101008083540402835291602001916106a2565b820191906000526020600020905b81548152906001019060200180831161068557829003601f168201915b505050505081565b3360008181526003602090815260408083206001600160a01b03871684529091528120549091610498918590610516908663ffffffff6109dd16565b6000610498338484610893565b6004546001600160a01b0316331461070a57600080fd5b6104c38282610a21565b6001600160a01b03918216600090815260036020908152604080832093909416825291909152205490565b6004546000906001600160a01b0316331461075957600080fd5b6001600160a01b03821661076c57600080fd5b600454610782906001600160a01b031683610a2d565b50600480546001600160a01b0383166001600160a01b03199091161790556001919050565b6001600160a01b0383166107ec5760405162461bcd60e51b8152600401808060200182810382526024815260200180610c916024913960400191505060405180910390fd5b6001600160a01b0382166108315760405162461bcd60e51b8152600401808060200182810382526022815260200180610c296022913960400191505060405180910390fd5b6001600160a01b03808416600081815260036020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b6001600160a01b0383166108d85760405162461bcd60e51b8152600401808060200182810382526025815260200180610c6c6025913960400191505060405180910390fd5b6001600160a01b03821661091d5760405162461bcd60e51b8152600401808060200182810382526023815260200180610c066023913960400191505060405180910390fd5b6001600160a01b038316600090815260026020526040902054610946908263ffffffff6109dd16565b6001600160a01b03808516600090815260026020526040808220939093559084168152205461097b908263ffffffff6109f216565b6001600160a01b0380841660008181526002602090815260409182902094909455805185815290519193928716927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a36104c38383836104c3565b6000828211156109ec57600080fd5b50900390565b600082820183811015610a0457600080fd5b9392505050565b6000610a178383610a31565b6104988383610a2d565b6000610a178383610b13565b5050565b6001600160a01b038216610a765760405162461bcd60e51b8152600401808060200182810382526021815260200180610c4b6021913960400191505060405180910390fd5b6001600160a01b038216600090815260026020526040902054610a9f908263ffffffff6109dd16565b6001600160a01b038316600090815260026020526040902055600154610acb908263ffffffff6109dd16565b6001556040805182815290516000916001600160a01b038516917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9181900360200190a35050565b6001600160a01b038216610b6e576040805162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015290519081900360640190fd5b600154610b81908263ffffffff6109f216565b6001556001600160a01b038216600090815260026020526040902054610bad908263ffffffff6109f216565b6001600160a01b03831660008181526002602090815260408083209490945583518581529351929391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a3505056fe45524332303a207472616e7366657220746f20746865207a65726f206164647265737345524332303a20617070726f766520746f20746865207a65726f206164647265737345524332303a206275726e2066726f6d20746865207a65726f206164647265737345524332303a207472616e736665722066726f6d20746865207a65726f206164647265737345524332303a20617070726f76652066726f6d20746865207a65726f2061646472657373a265627a7a72315820ed8bfca2d922b88e59a23ed3b59106f3f81b15962099859fd0d70f965b602c3164736f6c634300050f0032a365627a7a723158207671256fb4e11b27be6b8e2dadf53258a814f2471aef55b226cf05de558f61e26c6578706572696d656e74616cf564736f6c634300050f0040";
