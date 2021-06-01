---
id: what-is-namek
title: What Is Namek?
slug: /
---

## Introduction

The Namek protocol is a peer-to-contract[1] system designed for issuing collateralized debt positions using cryptocurrencies [(**ERC-20 Tokens**)](https://ethereum.org/en/developers/docs/standards/tokens/erc-20/) on the [**Ethereum**](https://ethereum.org/) blockchain. Debt is issued by a Lender for each collateral type. Each lender is parameterized according to the risk profile of the collateral asset.

## How does the Namek protocol compare to a typical collateralized stable coins?

Namek takes inspiration from existing collateralized stable coins such as Maker and Liquity. In comparision, it is significantly simpler. To accomplish this, it integrates deeply with Uniswap v3, utilizing [Uniswap v3 Pools](https://docs.uniswap.org/) as:
- A source of protocol liquidity. Uniswap LP's can access loan market cash flows by staking their positions with Namek, providing additional rewards for LP positions. For Namek, it reduces the risk of the protocol by ensuring liquidity for supported pairs. During a market downturn, LP's can't pull their positions, providing some guarantees around liqidity available for liquidating positions.
- A source of pricing information. Namek utilizes [Uniswap V3 TWAP Oracles](https://docs.uniswap.org/concepts/V3-overview/oracle), which provide a robust source of pricing information for a wide variety of tokens.