/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  utils,
  BigNumberish,
  Contract,
  ContractFactory,
  Overrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ERC20Mock, ERC20MockInterface } from "../ERC20Mock";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "supply",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "dst",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "wad",
        type: "uint256",
      },
    ],
    name: "Deposit",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "src",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "wad",
        type: "uint256",
      },
    ],
    name: "Withdrawal",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "deposit",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "wad",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604051620013dc380380620013dc8339810160408190526200003491620002dc565b8251839083906200004d90600390602085019062000169565b5080516200006390600490602084019062000169565b5050506200007833826200008160201b60201c565b505050620003b3565b6001600160a01b038216620000dc5760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640160405180910390fd5b8060026000828254620000f091906200034f565b90915550506001600160a01b038216600090815260208190526040812080548392906200011f9084906200034f565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b828054620001779062000376565b90600052602060002090601f0160209004810192826200019b5760008555620001e6565b82601f10620001b657805160ff1916838001178555620001e6565b82800160010185558215620001e6579182015b82811115620001e6578251825591602001919060010190620001c9565b50620001f4929150620001f8565b5090565b5b80821115620001f45760008155600101620001f9565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200023757600080fd5b81516001600160401b03808211156200025457620002546200020f565b604051601f8301601f19908116603f011681019082821181831017156200027f576200027f6200020f565b816040528381526020925086838588010111156200029c57600080fd5b600091505b83821015620002c05785820183015181830184015290820190620002a1565b83821115620002d25760008385830101525b9695505050505050565b600080600060608486031215620002f257600080fd5b83516001600160401b03808211156200030a57600080fd5b620003188783880162000225565b945060208601519150808211156200032f57600080fd5b506200033e8682870162000225565b925050604084015190509250925092565b600082198211156200037157634e487b7160e01b600052601160045260246000fd5b500190565b600181811c908216806200038b57607f821691505b60208210811415620003ad57634e487b7160e01b600052602260045260246000fd5b50919050565b61101980620003c36000396000f3fe6080604052600436106100d65760003560e01c8063395093511161007f578063a457c2d711610059578063a457c2d714610238578063a9059cbb14610258578063d0e30db014610278578063dd62ed3e1461028057600080fd5b806339509351146101c057806370a08231146101e057806395d89b411461022357600080fd5b806323b872dd116100b057806323b872dd146101645780632e1a7d4d14610184578063313ce567146101a457600080fd5b806306fdde03146100ea578063095ea7b31461011557806318160ddd1461014557600080fd5b366100e5576100e36102d3565b005b600080fd5b3480156100f657600080fd5b506100ff610314565b60405161010c9190610dc1565b60405180910390f35b34801561012157600080fd5b50610135610130366004610e5d565b6103a6565b604051901515815260200161010c565b34801561015157600080fd5b506002545b60405190815260200161010c565b34801561017057600080fd5b5061013561017f366004610e87565b6103bc565b34801561019057600080fd5b506100e361019f366004610ec3565b6104a7565b3480156101b057600080fd5b506040516012815260200161010c565b3480156101cc57600080fd5b506101356101db366004610e5d565b610517565b3480156101ec57600080fd5b506101566101fb366004610edc565b73ffffffffffffffffffffffffffffffffffffffff1660009081526020819052604090205490565b34801561022f57600080fd5b506100ff610560565b34801561024457600080fd5b50610135610253366004610e5d565b61056f565b34801561026457600080fd5b50610135610273366004610e5d565b610647565b6100e36102d3565b34801561028c57600080fd5b5061015661029b366004610efe565b73ffffffffffffffffffffffffffffffffffffffff918216600090815260016020908152604080832093909416825291909152205490565b6102dd3334610654565b60405134815233907fe1fffcc4923d04b559f4d29a8bfc6cda04eb5b0d3c460751c2402c5c5cc9109c9060200160405180910390a2565b60606003805461032390610f31565b80601f016020809104026020016040519081016040528092919081815260200182805461034f90610f31565b801561039c5780601f106103715761010080835404028352916020019161039c565b820191906000526020600020905b81548152906001019060200180831161037f57829003601f168201915b5050505050905090565b60006103b3338484610774565b50600192915050565b60006103c9848484610928565b73ffffffffffffffffffffffffffffffffffffffff841660009081526001602090815260408083203384529091529020548281101561048f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602860248201527f45524332303a207472616e7366657220616d6f756e742065786365656473206160448201527f6c6c6f77616e636500000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b61049c8533858403610774565b506001949350505050565b6104b13382610bdc565b604051339082156108fc029083906000818181858888f193505050501580156104de573d6000803e3d6000fd5b5060405181815233907f7fcf532c15f0a6db0bd6d0e038bea71d30d808c7d98cb3bf7268a95bf5081b659060200160405180910390a250565b33600081815260016020908152604080832073ffffffffffffffffffffffffffffffffffffffff8716845290915281205490916103b391859061055b908690610fb4565b610774565b60606004805461032390610f31565b33600090815260016020908152604080832073ffffffffffffffffffffffffffffffffffffffff8616845290915281205482811015610630576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760448201527f207a65726f0000000000000000000000000000000000000000000000000000006064820152608401610486565b61063d3385858403610774565b5060019392505050565b60006103b3338484610928565b73ffffffffffffffffffffffffffffffffffffffff82166106d1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f2061646472657373006044820152606401610486565b80600260008282546106e39190610fb4565b909155505073ffffffffffffffffffffffffffffffffffffffff82166000908152602081905260408120805483929061071d908490610fb4565b909155505060405181815273ffffffffffffffffffffffffffffffffffffffff8316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b73ffffffffffffffffffffffffffffffffffffffff8316610816576040517f08c379a0000000000000000000000000000000000000000000000000000000008152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460448201527f72657373000000000000000000000000000000000000000000000000000000006064820152608401610486565b73ffffffffffffffffffffffffffffffffffffffff82166108b9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f20616464726560448201527f73730000000000000000000000000000000000000000000000000000000000006064820152608401610486565b73ffffffffffffffffffffffffffffffffffffffff83811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b73ffffffffffffffffffffffffffffffffffffffff83166109cb576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f20616460448201527f64726573730000000000000000000000000000000000000000000000000000006064820152608401610486565b73ffffffffffffffffffffffffffffffffffffffff8216610a6e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201527f65737300000000000000000000000000000000000000000000000000000000006064820152608401610486565b73ffffffffffffffffffffffffffffffffffffffff831660009081526020819052604090205481811015610b24576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e742065786365656473206260448201527f616c616e636500000000000000000000000000000000000000000000000000006064820152608401610486565b73ffffffffffffffffffffffffffffffffffffffff808516600090815260208190526040808220858503905591851681529081208054849290610b68908490610fb4565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610bce91815260200190565b60405180910390a350505050565b73ffffffffffffffffffffffffffffffffffffffff8216610c7f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f2061646472657360448201527f73000000000000000000000000000000000000000000000000000000000000006064820152608401610486565b73ffffffffffffffffffffffffffffffffffffffff821660009081526020819052604090205481811015610d35576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e60448201527f63650000000000000000000000000000000000000000000000000000000000006064820152608401610486565b73ffffffffffffffffffffffffffffffffffffffff83166000908152602081905260408120838303905560028054849290610d71908490610fcc565b909155505060405182815260009073ffffffffffffffffffffffffffffffffffffffff8516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200161091b565b600060208083528351808285015260005b81811015610dee57858101830151858201604001528201610dd2565b81811115610e00576000604083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016929092016040019392505050565b803573ffffffffffffffffffffffffffffffffffffffff81168114610e5857600080fd5b919050565b60008060408385031215610e7057600080fd5b610e7983610e34565b946020939093013593505050565b600080600060608486031215610e9c57600080fd5b610ea584610e34565b9250610eb360208501610e34565b9150604084013590509250925092565b600060208284031215610ed557600080fd5b5035919050565b600060208284031215610eee57600080fd5b610ef782610e34565b9392505050565b60008060408385031215610f1157600080fd5b610f1a83610e34565b9150610f2860208401610e34565b90509250929050565b600181811c90821680610f4557607f821691505b60208210811415610f7f577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60008219821115610fc757610fc7610f85565b500190565b600082821015610fde57610fde610f85565b50039056fea2646970667358221220105e5df19c361ca8eb5736bd10d55b1e29b6725654c328c0256aae60915ad06064736f6c634300080a0033";

export class ERC20Mock__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    name: string,
    symbol: string,
    supply: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ERC20Mock> {
    return super.deploy(
      name,
      symbol,
      supply,
      overrides || {}
    ) as Promise<ERC20Mock>;
  }
  getDeployTransaction(
    name: string,
    symbol: string,
    supply: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(name, symbol, supply, overrides || {});
  }
  attach(address: string): ERC20Mock {
    return super.attach(address) as ERC20Mock;
  }
  connect(signer: Signer): ERC20Mock__factory {
    return super.connect(signer) as ERC20Mock__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC20MockInterface {
    return new utils.Interface(_abi) as ERC20MockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC20Mock {
    return new Contract(address, _abi, signerOrProvider) as ERC20Mock;
  }
}