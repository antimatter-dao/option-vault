import MULTICALL_ABI from './abi.json'
import { ChainId } from '../chain'

const MULTICALL_NETWORKS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0x5BA1e12693Dc8F9c48aAD8770482f4739bEeD696',
  [ChainId.ROPSTEN]: '0x5BA1e12693Dc8F9c48aAD8770482f4739bEeD696',
  [ChainId.BSC]: '0xa9193376D09C7f31283C54e56D013fCF370Cd9D9',
  [ChainId.AVAX]: '0xdDCbf776dF3dE60163066A5ddDF2277cB445E0F3',
  [ChainId.RINKEBY]: '0x5BA1e12693Dc8F9c48aAD8770482f4739bEeD696'
}

export { MULTICALL_ABI, MULTICALL_NETWORKS }
