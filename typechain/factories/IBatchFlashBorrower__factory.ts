/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  IBatchFlashBorrower,
  IBatchFlashBorrowerInterface,
} from "../IBatchFlashBorrower";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "contract IERC20[]",
        name: "tokens",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "fees",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "onBatchFlashLoan",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IBatchFlashBorrower__factory {
  static readonly abi = _abi;
  static createInterface(): IBatchFlashBorrowerInterface {
    return new utils.Interface(_abi) as IBatchFlashBorrowerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IBatchFlashBorrower {
    return new Contract(address, _abi, signerOrProvider) as IBatchFlashBorrower;
  }
}
