---
id: frontend
title: Frontends for Web3 dApps
sidebar_label: Frontends
---


There are 3 major options to choose from when you're building a frontend for your Web3 dApp, each with their own set of pros and cons.
This overview presents and summarizes these options so you can select the right solution for your UI.

- [Standard Web App](#standard-web-app)
- [Decentralized Hosting](#decentralized-hosting)
- [BOS (SocialVM)](#bos-socialvm)

## Standard Web App

Even though your UI layer won't be decentralized, your backend layer (business logic, stored data, etc) will be decentralized via smart contracts. This will be the most convenient option for most applications due to having zero technical limitations or performance impact. However, it might be a deal breaker if you require your entire stack to be decentralized.

#### Pros

- Build a standard web app like you normally would without any technical limitations.
- Works with any framework and combination of libraries.
- Supports SSR if using something like Next JS or Svelte Kit.
- Will have best performance overall.

#### Cons

- Your web app will need to be hosted by a Web 2 hosting provider (e.g.: Vercel, AWS, etc).
- This means your UI layer won't be decentralized.

#### Integration

It's highly recommend to integrate with [Wallet Selector](../../4.tools/wallet-selector.md) as your primary means of interacting with smart contracts. It's the easiest way to get up and running, allowing users to connect a wallet and send signed transactions. The only use case Wallet Selector doesn't cover is sending `view` transactions for users who haven't connected a wallet yet.

:::tip

Check [this article](integrate-contracts.md) to learn how to integrate smart contracts to your frontend, using [Wallet Selector](../../4.tools/wallet-selector.md) and [NEAR API JS](../../4.tools/near-api-js/quick-reference.md).

:::

## Decentralized Hosting

If you require your entire stack to be decentralized, this will be the best choice. However, the potential technical limitations (no SSR or meta frameworks like Next JS) are worth considering.

To learn more, you can check other decentralized hosting options like [Web4](https://web4.near.page/) or [Fleek](https://fleek.co/).

<!-- content left out

#### Pros

- Your web app will be hosted on the blockchain allowing your entire stack to be decentralized.

#### Cons

- Your options for frameworks will be limited to whatever is supported by the decentralized hosting solution.
- SSR and meta frameworks like Next JS most likely won't be supported.

-->

## BOS (SocialVM)

BOS (UI) was an experiment in hosting UI code on chain and creating an ecosystem of composable and remixable components for dApp development.
An example BOS VM website is [near.social](https://near.social).

[This article](integrate-components.md) details how BOS components could be integrated into your frontend.
