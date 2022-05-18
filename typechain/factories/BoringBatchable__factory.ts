/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  BoringBatchable,
  BoringBatchableInterface,
} from "../BoringBatchable";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes[]",
        name: "calls",
        type: "bytes[]",
      },
      {
        internalType: "bool",
        name: "revertOnFail",
        type: "bool",
      },
    ],
    name: "batch",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "token",
        type: "address",
      },
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
        name: "amount",
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
    name: "permitToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610667806100206000396000f3fe6080604052600436106100295760003560e01c80637c516e941461002e578063d2423b5114610050575b600080fd5b34801561003a57600080fd5b5061004e61004936600461029b565b610063565b005b61004e61005e366004610324565b61011b565b6040517fd505accf00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff88811660048301528781166024830152604482018790526064820186905260ff8516608483015260a4820184905260c4820183905289169063d505accf9060e401600060405180830381600087803b1580156100f957600080fd5b505af115801561010d573d6000803e3d6000fd5b505050505050505050505050565b60005b8281101561020b576000803086868581811061013c5761013c6103af565b905060200281019061014e91906103de565b60405161015c92919061044a565b600060405180830381855af49150503d8060008114610197576040519150601f19603f3d011682016040523d82523d6000602084013e61019c565b606091505b5091509150811580156101ac5750835b156101f6576101ba81610211565b6040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101ed9190610486565b60405180910390fd5b50508080610203906104d7565b91505061011e565b50505050565b606060448251101561025657505060408051808201909152601d81527f5472616e73616374696f6e2072657665727465642073696c656e746c79000000602082015290565b600482019150818060200190518101906102709190610566565b92915050565b73ffffffffffffffffffffffffffffffffffffffff8116811461029857600080fd5b50565b600080600080600080600080610100898b0312156102b857600080fd5b88356102c381610276565b975060208901356102d381610276565b965060408901356102e381610276565b9550606089013594506080890135935060a089013560ff8116811461030757600080fd5b979a969950949793969295929450505060c08201359160e0013590565b60008060006040848603121561033957600080fd5b833567ffffffffffffffff8082111561035157600080fd5b818601915086601f83011261036557600080fd5b81358181111561037457600080fd5b8760208260051b850101111561038957600080fd5b6020928301955093505084013580151581146103a457600080fd5b809150509250925092565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261041357600080fd5b83018035915067ffffffffffffffff82111561042e57600080fd5b60200191503681900382131561044357600080fd5b9250929050565b8183823760009101908152919050565b60005b8381101561047557818101518382015260200161045d565b8381111561020b5750506000910152565b60208152600082518060208401526104a581604085016020870161045a565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169190910160400192915050565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415610530577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b5060010190565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60006020828403121561057857600080fd5b815167ffffffffffffffff8082111561059057600080fd5b818401915084601f8301126105a457600080fd5b8151818111156105b6576105b6610537565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f011681019083821181831017156105fc576105fc610537565b8160405282815287602084870101111561061557600080fd5b61062683602083016020880161045a565b97965050505050505056fea26469706673582212201187b92b0cb1a2fbc4ccfaffda92bd5e8e8eaaa63292fa1884bfd296ce25107864736f6c634300080a0033";

export class BoringBatchable__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<BoringBatchable> {
    return super.deploy(overrides || {}) as Promise<BoringBatchable>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): BoringBatchable {
    return super.attach(address) as BoringBatchable;
  }
  connect(signer: Signer): BoringBatchable__factory {
    return super.connect(signer) as BoringBatchable__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BoringBatchableInterface {
    return new utils.Interface(_abi) as BoringBatchableInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BoringBatchable {
    return new Contract(address, _abi, signerOrProvider) as BoringBatchable;
  }
}