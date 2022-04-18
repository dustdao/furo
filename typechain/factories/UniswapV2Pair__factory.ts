/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { UniswapV2Pair, UniswapV2PairInterface } from "../UniswapV2Pair";

const _abi = [
  {
    inputs: [],
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
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount0",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount1",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "Burn",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount0",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount1",
        type: "uint256",
      },
    ],
    name: "Mint",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount0In",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount1In",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount0Out",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount1Out",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "Swap",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint112",
        name: "reserve0",
        type: "uint112",
      },
      {
        indexed: false,
        internalType: "uint112",
        name: "reserve1",
        type: "uint112",
      },
    ],
    name: "Sync",
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
    inputs: [],
    name: "DOMAIN_SEPARATOR",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MINIMUM_LIQUIDITY",
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
    name: "PERMIT_TYPEHASH",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
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
        name: "value",
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
        name: "",
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
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "burn",
    outputs: [
      {
        internalType: "uint256",
        name: "amount0",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount1",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
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
    inputs: [],
    name: "factory",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getReserves",
    outputs: [
      {
        internalType: "uint112",
        name: "_reserve0",
        type: "uint112",
      },
      {
        internalType: "uint112",
        name: "_reserve1",
        type: "uint112",
      },
      {
        internalType: "uint32",
        name: "_blockTimestampLast",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_token0",
        type: "address",
      },
      {
        internalType: "address",
        name: "_token1",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "kLast",
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
        name: "to",
        type: "address",
      },
    ],
    name: "mint",
    outputs: [
      {
        internalType: "uint256",
        name: "liquidity",
        type: "uint256",
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
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "nonces",
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
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "permit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "price0CumulativeLast",
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
    name: "price1CumulativeLast",
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
        name: "to",
        type: "address",
      },
    ],
    name: "skim",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount0Out",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount1Out",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "swap",
    outputs: [],
    stateMutability: "nonpayable",
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
    name: "sync",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "token0",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "token1",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
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
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
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
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
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
];

const _bytecode =
  "0x60806040526001600c5534801561001557600080fd5b50604080518082018252601281527129bab9b434a9bbb0b8102628102a37b5b2b760711b6020918201528151808301835260018152603160f81b9082015281517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f818301527fefbffe65652a145845c9bc8d0532945be6b9830fe1e9966c887bd298e551ac83818401527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a0808301919091528351808303909101815260c09091019092528151910120600355600580546001600160a01b03191633179055612d9f806101106000396000f3fe608060405234801561001057600080fd5b50600436106101b95760003560e01c80636a627842116100f9578063ba9a7a5611610097578063d21220a711610071578063d21220a7146105da578063d505accf146105e2578063dd62ed3e14610640578063fff6cae91461067b576101b9565b8063ba9a7a5614610597578063bc25cf771461059f578063c45a0155146105d2576101b9565b80637ecebe00116100d35780637ecebe00146104d757806389afcb441461050a57806395d89b4114610556578063a9059cbb1461055e576101b9565b80636a6278421461046957806370a082311461049c5780637464fc3d146104cf576101b9565b806323b872dd116101665780633644e515116101405780633644e51514610416578063485cc9551461041e5780635909c0d5146104595780635a3d549314610461576101b9565b806323b872dd146103ad57806330adf81f146103f0578063313ce567146103f8576101b9565b8063095ea7b311610197578063095ea7b3146103155780630dfe16811461036257806318160ddd14610393576101b9565b8063022c0d9f146101be57806306fdde03146102595780630902f1ac146102d6575b600080fd5b610257600480360360808110156101d457600080fd5b81359160208101359173ffffffffffffffffffffffffffffffffffffffff604083013516919081019060808101606082013564010000000081111561021857600080fd5b82018360208201111561022a57600080fd5b8035906020019184600183028401116401000000008311171561024c57600080fd5b509092509050610683565b005b610261610d17565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561029b578181015183820152602001610283565b50505050905090810190601f1680156102c85780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6102de610d50565b604080516dffffffffffffffffffffffffffff948516815292909316602083015263ffffffff168183015290519081900360600190f35b61034e6004803603604081101561032b57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135169060200135610da5565b604080519115158252519081900360200190f35b61036a610dbc565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b61039b610dd8565b60408051918252519081900360200190f35b61034e600480360360608110156103c357600080fd5b5073ffffffffffffffffffffffffffffffffffffffff813581169160208101359091169060400135610dde565b61039b610eb7565b610400610edb565b6040805160ff9092168252519081900360200190f35b61039b610ee0565b6102576004803603604081101561043457600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81358116916020013516610ee6565b61039b610fbf565b61039b610fc5565b61039b6004803603602081101561047f57600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16610fcb565b61039b600480360360208110156104b257600080fd5b503573ffffffffffffffffffffffffffffffffffffffff166115af565b61039b6115c1565b61039b600480360360208110156104ed57600080fd5b503573ffffffffffffffffffffffffffffffffffffffff166115c7565b61053d6004803603602081101561052057600080fd5b503573ffffffffffffffffffffffffffffffffffffffff166115d9565b6040805192835260208301919091528051918290030190f35b610261611a64565b61034e6004803603604081101561057457600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135169060200135611a9d565b61039b611aaa565b610257600480360360208110156105b557600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16611ab0565b61036a611c9d565b61036a611cb9565b610257600480360360e08110156105f857600080fd5b5073ffffffffffffffffffffffffffffffffffffffff813581169160208101359091169060408101359060608101359060ff6080820135169060a08101359060c00135611cd5565b61039b6004803603604081101561065657600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81358116916020013516611fa1565b610257611fbe565b600c546001146106f457604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f556e697377617056323a204c4f434b4544000000000000000000000000000000604482015290519081900360640190fd5b6000600c55841515806107075750600084115b61075c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526025815260200180612cb06025913960400191505060405180910390fd5b600080610767610d50565b5091509150816dffffffffffffffffffffffffffff168710801561079a5750806dffffffffffffffffffffffffffff1686105b6107ef576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526021815260200180612cf96021913960400191505060405180910390fd5b600654600754600091829173ffffffffffffffffffffffffffffffffffffffff91821691908116908916821480159061085457508073ffffffffffffffffffffffffffffffffffffffff168973ffffffffffffffffffffffffffffffffffffffff1614155b6108bf57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601560248201527f556e697377617056323a20494e56414c49445f544f0000000000000000000000604482015290519081900360640190fd5b8a156108d0576108d0828a8d6121a4565b89156108e1576108e1818a8c6121a4565b86156109ad578873ffffffffffffffffffffffffffffffffffffffff166310d1e85c338d8d8c8c6040518663ffffffff1660e01b8152600401808673ffffffffffffffffffffffffffffffffffffffff168152602001858152602001848152602001806020018281038252848482818152602001925080828437600081840152601f19601f8201169050808301925050509650505050505050600060405180830381600087803b15801561099457600080fd5b505af11580156109a8573d6000803e3d6000fd5b505050505b604080517f70a08231000000000000000000000000000000000000000000000000000000008152306004820152905173ffffffffffffffffffffffffffffffffffffffff8416916370a08231916024808301926020929190829003018186803b158015610a1957600080fd5b505afa158015610a2d573d6000803e3d6000fd5b505050506040513d6020811015610a4357600080fd5b5051604080517f70a08231000000000000000000000000000000000000000000000000000000008152306004820152905191955073ffffffffffffffffffffffffffffffffffffffff8316916370a0823191602480820192602092909190829003018186803b158015610ab557600080fd5b505afa158015610ac9573d6000803e3d6000fd5b505050506040513d6020811015610adf57600080fd5b5051925060009150506dffffffffffffffffffffffffffff85168a90038311610b09576000610b1f565b89856dffffffffffffffffffffffffffff160383035b9050600089856dffffffffffffffffffffffffffff16038311610b43576000610b59565b89856dffffffffffffffffffffffffffff160383035b90506000821180610b6a5750600081115b610bbf576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526024815260200180612cd56024913960400191505060405180910390fd5b6000610be1610bcf8460036123b1565b610bdb876103e86123b1565b90612437565b90506000610bf3610bcf8460036123b1565b9050610c1f620f4240610c196dffffffffffffffffffffffffffff8b8116908b166123b1565b906123b1565b610c2983836123b1565b1015610c9657604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f556e697377617056323a204b0000000000000000000000000000000000000000604482015290519081900360640190fd5b5050610ca4848488886124a9565b60408051838152602081018390528082018d9052606081018c9052905173ffffffffffffffffffffffffffffffffffffffff8b169133917fd78ad95fa46c994b6551d0da85fc275fe613ce37657fb8d5e3d130840159d8229181900360800190a350506001600c55505050505050505050565b6040518060400160405280601281526020017f537573686953776170204c5020546f6b656e000000000000000000000000000081525081565b6008546dffffffffffffffffffffffffffff808216926e0100000000000000000000000000008304909116917c0100000000000000000000000000000000000000000000000000000000900463ffffffff1690565b6000610db233848461275f565b5060015b92915050565b60065473ffffffffffffffffffffffffffffffffffffffff1681565b60005481565b73ffffffffffffffffffffffffffffffffffffffff831660009081526002602090815260408083203384529091528120547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff14610ea25773ffffffffffffffffffffffffffffffffffffffff84166000908152600260209081526040808320338452909152902054610e709083612437565b73ffffffffffffffffffffffffffffffffffffffff851660009081526002602090815260408083203384529091529020555b610ead8484846127ce565b5060019392505050565b7f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c981565b601281565b60035481565b60055473ffffffffffffffffffffffffffffffffffffffff163314610f6c57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f556e697377617056323a20464f5242494444454e000000000000000000000000604482015290519081900360640190fd5b6006805473ffffffffffffffffffffffffffffffffffffffff9384167fffffffffffffffffffffffff00000000000000000000000000000000000000009182161790915560078054929093169116179055565b60095481565b600a5481565b6000600c5460011461103e57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f556e697377617056323a204c4f434b4544000000000000000000000000000000604482015290519081900360640190fd5b6000600c8190558061104e610d50565b50600654604080517f70a08231000000000000000000000000000000000000000000000000000000008152306004820152905193955091935060009273ffffffffffffffffffffffffffffffffffffffff909116916370a08231916024808301926020929190829003018186803b1580156110c857600080fd5b505afa1580156110dc573d6000803e3d6000fd5b505050506040513d60208110156110f257600080fd5b5051600754604080517f70a08231000000000000000000000000000000000000000000000000000000008152306004820152905192935060009273ffffffffffffffffffffffffffffffffffffffff909216916370a0823191602480820192602092909190829003018186803b15801561116b57600080fd5b505afa15801561117f573d6000803e3d6000fd5b505050506040513d602081101561119557600080fd5b5051905060006111b5836dffffffffffffffffffffffffffff8716612437565b905060006111d3836dffffffffffffffffffffffffffff8716612437565b905060006111e187876128a3565b6000549091508061146657600554604080517f7cd07e47000000000000000000000000000000000000000000000000000000008152905160009273ffffffffffffffffffffffffffffffffffffffff1691637cd07e47916004808301926020929190829003018186803b15801561125757600080fd5b505afa15801561126b573d6000803e3d6000fd5b505050506040513d602081101561128157600080fd5b505190503373ffffffffffffffffffffffffffffffffffffffff821614156113b6578073ffffffffffffffffffffffffffffffffffffffff166340dc0e376040518163ffffffff1660e01b815260040160206040518083038186803b1580156112e957600080fd5b505afa1580156112fd573d6000803e3d6000fd5b505050506040513d602081101561131357600080fd5b50519950891580159061134657507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8a14155b6113b157604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601560248201527f4261642064657369726564206c69717569646974790000000000000000000000604482015290519081900360640190fd5b611460565b73ffffffffffffffffffffffffffffffffffffffff81161561143957604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f4d757374206e6f742068617665206d69677261746f7200000000000000000000604482015290519081900360640190fd5b6114516103e8610bdb61144c88886123b1565b612a11565b995061146060006103e8612a63565b506114b7565b6114b46dffffffffffffffffffffffffffff891661148486846123b1565b8161148b57fe5b046dffffffffffffffffffffffffffff89166114a786856123b1565b816114ae57fe5b04612b07565b98505b60008911611510576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526028815260200180612d426028913960400191505060405180910390fd5b61151a8a8a612a63565b61152686868a8a6124a9565b81156115625760085461155e906dffffffffffffffffffffffffffff808216916e0100000000000000000000000000009004166123b1565b600b555b6040805185815260208101859052815133927f4c209b5fc8ad50758f13e2e1088ba56a560dff690a1c6fef26394f4c03821c4f928290030190a250506001600c5550949695505050505050565b60016020526000908152604090205481565b600b5481565b60046020526000908152604090205481565b600080600c5460011461164d57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f556e697377617056323a204c4f434b4544000000000000000000000000000000604482015290519081900360640190fd5b6000600c8190558061165d610d50565b50600654600754604080517f70a08231000000000000000000000000000000000000000000000000000000008152306004820152905194965092945073ffffffffffffffffffffffffffffffffffffffff9182169391169160009184916370a08231916024808301926020929190829003018186803b1580156116df57600080fd5b505afa1580156116f3573d6000803e3d6000fd5b505050506040513d602081101561170957600080fd5b5051604080517f70a08231000000000000000000000000000000000000000000000000000000008152306004820152905191925060009173ffffffffffffffffffffffffffffffffffffffff8516916370a08231916024808301926020929190829003018186803b15801561177d57600080fd5b505afa158015611791573d6000803e3d6000fd5b505050506040513d60208110156117a757600080fd5b5051306000908152600160205260408120549192506117c688886128a3565b600054909150806117d784876123b1565b816117de57fe5b049a50806117ec84866123b1565b816117f357fe5b04995060008b118015611806575060008a115b61185b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526028815260200180612d1a6028913960400191505060405180910390fd5b6118653084612b1f565b611870878d8d6121a4565b61187b868d8c6121a4565b604080517f70a08231000000000000000000000000000000000000000000000000000000008152306004820152905173ffffffffffffffffffffffffffffffffffffffff8916916370a08231916024808301926020929190829003018186803b1580156118e757600080fd5b505afa1580156118fb573d6000803e3d6000fd5b505050506040513d602081101561191157600080fd5b5051604080517f70a08231000000000000000000000000000000000000000000000000000000008152306004820152905191965073ffffffffffffffffffffffffffffffffffffffff8816916370a0823191602480820192602092909190829003018186803b15801561198357600080fd5b505afa158015611997573d6000803e3d6000fd5b505050506040513d60208110156119ad57600080fd5b505193506119bd85858b8b6124a9565b81156119f9576008546119f5906dffffffffffffffffffffffffffff808216916e0100000000000000000000000000009004166123b1565b600b555b604080518c8152602081018c9052815173ffffffffffffffffffffffffffffffffffffffff8f169233927fdccd412f0b1252819cb1fd330b93224ca42612892bb3f4f789976e6d81936496929081900390910190a35050505050505050506001600c81905550915091565b6040518060400160405280600381526020017f534c50000000000000000000000000000000000000000000000000000000000081525081565b6000610db23384846127ce565b6103e881565b600c54600114611b2157604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f556e697377617056323a204c4f434b4544000000000000000000000000000000604482015290519081900360640190fd5b6000600c55600654600754600854604080517f70a08231000000000000000000000000000000000000000000000000000000008152306004820152905173ffffffffffffffffffffffffffffffffffffffff9485169490931692611bf79285928792611bf2926dffffffffffffffffffffffffffff169185916370a0823191602480820192602092909190829003018186803b158015611bc057600080fd5b505afa158015611bd4573d6000803e3d6000fd5b505050506040513d6020811015611bea57600080fd5b505190612437565b6121a4565b611c938184611bf26008600e9054906101000a90046dffffffffffffffffffffffffffff166dffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b158015611bc057600080fd5b50506001600c5550565b60055473ffffffffffffffffffffffffffffffffffffffff1681565b60075473ffffffffffffffffffffffffffffffffffffffff1681565b42841015611d4457604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601260248201527f556e697377617056323a20455850495245440000000000000000000000000000604482015290519081900360640190fd5b60035473ffffffffffffffffffffffffffffffffffffffff80891660008181526004602090815260408083208054600180820190925582517f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c98186015280840196909652958d166060860152608085018c905260a085019590955260c08085018b90528151808603909101815260e0850182528051908301207f19010000000000000000000000000000000000000000000000000000000000006101008601526101028501969096526101228085019690965280518085039096018652610142840180825286519683019690962095839052610162840180825286905260ff89166101828501526101a284018890526101c28401879052519193926101e2808201937fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe081019281900390910190855afa158015611ea5573d6000803e3d6000fd5b50506040517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0015191505073ffffffffffffffffffffffffffffffffffffffff811615801590611f2057508873ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16145b611f8b57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601c60248201527f556e697377617056323a20494e56414c49445f5349474e415455524500000000604482015290519081900360640190fd5b611f9689898961275f565b505050505050505050565b600260209081526000928352604080842090915290825290205481565b600c5460011461202f57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f556e697377617056323a204c4f434b4544000000000000000000000000000000604482015290519081900360640190fd5b6000600c55600654604080517f70a08231000000000000000000000000000000000000000000000000000000008152306004820152905161219d9273ffffffffffffffffffffffffffffffffffffffff16916370a08231916024808301926020929190829003018186803b1580156120a657600080fd5b505afa1580156120ba573d6000803e3d6000fd5b505050506040513d60208110156120d057600080fd5b5051600754604080517f70a08231000000000000000000000000000000000000000000000000000000008152306004820152905173ffffffffffffffffffffffffffffffffffffffff909216916370a0823191602480820192602092909190829003018186803b15801561214357600080fd5b505afa158015612157573d6000803e3d6000fd5b505050506040513d602081101561216d57600080fd5b50516008546dffffffffffffffffffffffffffff808216916e0100000000000000000000000000009004166124a9565b6001600c55565b604080518082018252601981527f7472616e7366657228616464726573732c75696e743235362900000000000000602091820152815173ffffffffffffffffffffffffffffffffffffffff85811660248301526044808301869052845180840390910181526064909201845291810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fa9059cbb000000000000000000000000000000000000000000000000000000001781529251815160009460609489169392918291908083835b602083106122aa57805182527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0909201916020918201910161226d565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d806000811461230c576040519150601f19603f3d011682016040523d82523d6000602084013e612311565b606091505b509150915081801561233f57508051158061233f575080806020019051602081101561233c57600080fd5b50515b6123aa57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601a60248201527f556e697377617056323a205452414e534645525f4641494c4544000000000000604482015290519081900360640190fd5b5050505050565b60008115806123cc575050808202828282816123c957fe5b04145b610db657604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f64732d6d6174682d6d756c2d6f766572666c6f77000000000000000000000000604482015290519081900360640190fd5b80820382811115610db657604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601560248201527f64732d6d6174682d7375622d756e646572666c6f770000000000000000000000604482015290519081900360640190fd5b6dffffffffffffffffffffffffffff84118015906124d557506dffffffffffffffffffffffffffff8311155b61254057604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601360248201527f556e697377617056323a204f564552464c4f5700000000000000000000000000604482015290519081900360640190fd5b60085463ffffffff428116917c01000000000000000000000000000000000000000000000000000000009004811682039081161580159061259057506dffffffffffffffffffffffffffff841615155b80156125ab57506dffffffffffffffffffffffffffff831615155b15612655578063ffffffff166125e8856125c486612bd8565b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1690612bfc565b600980547bffffffffffffffffffffffffffffffffffffffffffffffffffffffff929092169290920201905563ffffffff8116612628846125c487612bd8565b600a80547bffffffffffffffffffffffffffffffffffffffffffffffffffffffff92909216929092020190555b600880547fffffffffffffffffffffffffffffffffffff0000000000000000000000000000166dffffffffffffffffffffffffffff888116919091177fffffffff0000000000000000000000000000ffffffffffffffffffffffffffff166e0100000000000000000000000000008883168102919091177bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167c010000000000000000000000000000000000000000000000000000000063ffffffff871602179283905560408051848416815291909304909116602082015281517f1c411e9a96e071241c2f21f7726b17ae89e3cab4c78be50e062b03a9fffbbad1929181900390910190a1505050505050565b73ffffffffffffffffffffffffffffffffffffffff808416600081815260026020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b73ffffffffffffffffffffffffffffffffffffffff83166000908152600160205260409020546127fe9082612437565b73ffffffffffffffffffffffffffffffffffffffff808516600090815260016020526040808220939093559084168152205461283a9082612c3d565b73ffffffffffffffffffffffffffffffffffffffff80841660008181526001602090815260409182902094909455805185815290519193928716927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a3505050565b600080600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663017e7e586040518163ffffffff1660e01b815260040160206040518083038186803b15801561290e57600080fd5b505afa158015612922573d6000803e3d6000fd5b505050506040513d602081101561293857600080fd5b5051600b5473ffffffffffffffffffffffffffffffffffffffff82161580159450919250906129fd5780156129f857600061298961144c6dffffffffffffffffffffffffffff8881169088166123b1565b9050600061299683612a11565b9050808211156129f55760006129b86129af8484612437565b600054906123b1565b905060006129d1836129cb8660056123b1565b90612c3d565b905060008183816129de57fe5b04905080156129f1576129f18782612a63565b5050505b50505b612a09565b8015612a09576000600b555b505092915050565b60006003821115612a54575080600160028204015b81811015612a4e57809150600281828581612a3d57fe5b040181612a4657fe5b049050612a26565b50612a5e565b8115612a5e575060015b919050565b600054612a709082612c3d565b600090815573ffffffffffffffffffffffffffffffffffffffff8316815260016020526040902054612aa29082612c3d565b73ffffffffffffffffffffffffffffffffffffffff831660008181526001602090815260408083209490945583518581529351929391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a35050565b6000818310612b165781612b18565b825b9392505050565b73ffffffffffffffffffffffffffffffffffffffff8216600090815260016020526040902054612b4f9082612437565b73ffffffffffffffffffffffffffffffffffffffff831660009081526001602052604081209190915554612b839082612437565b600090815560408051838152905173ffffffffffffffffffffffffffffffffffffffff8516917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef919081900360200190a35050565b6dffffffffffffffffffffffffffff166e0100000000000000000000000000000290565b60006dffffffffffffffffffffffffffff82167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff841681612c3557fe5b049392505050565b80820182811015610db657604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f64732d6d6174682d6164642d6f766572666c6f77000000000000000000000000604482015290519081900360640190fdfe556e697377617056323a20494e53554646494349454e545f4f55545055545f414d4f554e54556e697377617056323a20494e53554646494349454e545f494e5055545f414d4f554e54556e697377617056323a20494e53554646494349454e545f4c4951554944495459556e697377617056323a20494e53554646494349454e545f4c49515549444954595f4255524e4544556e697377617056323a20494e53554646494349454e545f4c49515549444954595f4d494e544544a2646970667358221220af9f17b17a1bc831a4f5848130e06378b35dd5ed1bb3d22c7fed07bbb82a40f164736f6c634300060c0033";

export class UniswapV2Pair__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<UniswapV2Pair> {
    return super.deploy(overrides || {}) as Promise<UniswapV2Pair>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): UniswapV2Pair {
    return super.attach(address) as UniswapV2Pair;
  }
  connect(signer: Signer): UniswapV2Pair__factory {
    return super.connect(signer) as UniswapV2Pair__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): UniswapV2PairInterface {
    return new utils.Interface(_abi) as UniswapV2PairInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): UniswapV2Pair {
    return new Contract(address, _abi, signerOrProvider) as UniswapV2Pair;
  }
}
