import { Address, BigDecimal, BigInt, dataSource } from '@graphprotocol/graph-ts'

import { NativeTokenDetails } from './nativeTokenDetails'
import { StaticTokenDefinition } from './staticTokenDefinition'

// Note: All token and pool addresses should be lowercased!
export class SubgraphConfig {
  poolManagerAddress: string
  stablecoinWrappedNativePoolId: string
  stablecoinIsToken0: boolean
  wrappedNativeAddress: string
  minimumNativeLocked: BigDecimal
  stablecoinAddresses: string[]
  whitelistTokens: string[]
  tokenOverrides: StaticTokenDefinition[]
  poolsToSkip: string[]
  poolMappings: Array<Address[]>
  nativeTokenDetails: NativeTokenDetails
}

export function getSubgraphConfig(): SubgraphConfig {
  const selectedNetwork = dataSource.network()

  if (selectedNetwork == 'celo') {
    return {
      poolManagerAddress: '0x288dc841a52fca2707c6947b3a777c5e56cd87bc',
      stablecoinWrappedNativePoolId: '0x29aa9a73eedb0324148d5e43c5ebf2d479fbf04abea11e0d5afa7143387e30c6', // CELO-USDT
      stablecoinIsToken0: false,
      wrappedNativeAddress: '0x471ece3750da237f93b8e339c536989b8978a438', // CELO
      minimumNativeLocked: BigDecimal.fromString('3600'),
      stablecoinAddresses: [
        '0x765de816845861e75a25fca122bb6898b8b1282a', // cUSD
        '0xef4229c8c3250c675f21bcefa42f58efbff6002a', // Bridged USDC
        '0xceba9300f2b948710d2653dd7b07f33a8b32118c', // Native USDC
        '0x48065fbbe25f71c9282ddf5e1cd6d6a887483d5e', // USDT
      ],
      whitelistTokens: [
        '0x471ece3750da237f93b8e339c536989b8978a438', // CELO
        '0x765de816845861e75a25fca122bb6898b8b1282a', // cUSD
        '0xef4229c8c3250c675f21bcefa42f58efbff6002a', // Bridged USDC
        '0xceba9300f2b948710d2653dd7b07f33a8b32118c', // Native USDC
        '0xd8763cba276a3738e6de85b4b3bf5fded6d6ca73', // cEUR
        '0xe8537a3d056da446677b9e9d6c5db704eaab4787', // cREAL
        '0x46c9757c5497c5b1f2eb73ae79b6b67d119b0b58', // PACT
        '0x17700282592d6917f6a73d0bf8accf4d578c131e', // MOO
        '0x66803fb87abd4aac3cbb3fad7c3aa01f6f3fb207', // Portal ETH
        '0xbaab46e28388d2779e6e31fd00cf0e5ad95e327b', // WBTC
        '0xd221812de1bd094f35587ee8e174b07b6167d9af', // WETH
        '0x48065fbbe25f71c9282ddf5e1cd6d6a887483d5e', // USDT
      ],
      tokenOverrides: [],
      poolsToSkip: [],
      poolMappings: [],
      nativeTokenDetails: {
        symbol: 'CELO',
        name: 'Celo',
        decimals: BigInt.fromI32(18),
      },
    }
  } else {
    throw new Error('Unsupported Network')
  }
}
