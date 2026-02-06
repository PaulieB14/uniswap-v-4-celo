# Uniswap V4 Celo Subgraph

Indexes Uniswap V4 protocol activity on Celo (Chain ID: 42220) using [The Graph](https://thegraph.com/).

## Contracts

| Contract | Address |
|---|---|
| PoolManager | `0x288dc841A52FCA2707c6947B3A777c5E56cd87BC` |
| PositionManager | `0xf7965f3981e4D5BC383BfBCb61501763e9068CA9` |

## Indexed Events

**PoolManager:** `Initialize`, `Swap`, `ModifyLiquidity`
**PositionManager:** `Transfer`, `Subscription`, `Unsubscription`

## Entities

Pools, Tokens, Swaps, Positions, Ticks, Transactions, and time-series aggregations (hourly/daily) for pools, tokens, and protocol-wide stats.

## Query Endpoint

```
https://api.studio.thegraph.com/query/111767/uniswap-v-4-celo/version/latest
```

### Example Query

```graphql
{
  pools(first: 5, orderBy: totalValueLockedUSD, orderDirection: desc) {
    id
    token0 { symbol }
    token1 { symbol }
    feeTier
    totalValueLockedUSD
    volumeUSD
  }
}
```

## Development

```bash
yarn install
yarn generate-subgraph celo
graph codegen --output-dir src/types/
graph build
```

## Deploy

```bash
graph auth <deploy-key>
graph deploy --studio uniswap-v-4-celo
```

## Based On

[Uniswap/v4-subgraph](https://github.com/Uniswap/v4-subgraph) (GPL-3.0)
