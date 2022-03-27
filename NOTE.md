# minting-nft-dapps 開発メモ


参照サイト  
[Fullstack NFT Minting Dapp Using Next.js, Hardhat, Ethers.js, Alchemy, MetaMask, and TailwindCSS](https://javascript.plainenglish.io/fullstack-nft-minting-dapp-using-next-js-hardhat-ethers-js-alchemy-metamask-and-tailwindcss-145e0ef41d26)

テスト実行
```
npx hardhat test
```
テスト結果
```sh
% npx hardhat test
✔ Help us improve Hardhat with anonymous crash reports & basic usage data? (Y/n) · false
Downloading compiler 0.8.4
Warning: SPDX license identifier not provided in source file. Before publishing, consider adding a comment containing "SPDX-License-Identifier: <SPDX-License>" to each source file. Use "SPDX-License-Identifier: UNLICENSED" for non-open-source code. Please see https://spdx.org for more information.
--> contracts/knft.sol

Compiled 15 Solidity files successfully

  knft Contract
    ✔ Should have an address
    ✔ Should have a name
    ✔ Should have a symbol
    ✔ Should be able to mint NFT (105ms)

  4 passing (706ms)
```

デプロイ用スクリプトの作成
```js
// deploy.js
const main = async() => {
  const nftContractFactory = await ethers.getContractFactory('knft')
  const nftContract = await nftContractFactory.deploy()
  await nftContract.deployed()
console.log("Contract deployed to: ", nftContract.address)
}
const runMain = async() => {
  try {
    await main()
    process.exit(0)
  } catch(error) {
    console.log(error)
    process.exit(1)
  }
}
runMain()
```

デプロイ用スクリプトの実行
```
npx hardhat run scripts/deploy.js --network rinkeby
```
デプロイ実行結果
```sh
% npx hardhat run scripts/deploy.js --network rinkeby
Contract deployed to:  0x67a932469fd0279F9cC205575282B53961c9DD80

```

## フロントエンドの設定

Next.jsアプリの作成
```
npx create-next-app -e with-tailwindcss client
```

### index.jsで使用されている関数
- `checkIfWalletIsConnected`：ウォレットがアプリケーションに接続されているかをチェックする関数
- `connectWallet`：Dappsをウォレットに接続するための関数
- `checkCorrectNetwork`：ウォレットが正しいネットワーク（Rinkeby）に接続されているかをチェックする関数
- `mintCharacter`：新しいNFTをミントするためのトランザクションを作成する関数。「Mint Character」を押したときに呼び出します  
- `getMintedNFT`：新しくミントされたNFTのデータを取得します。取得したデータはユーザーに見せるために使用します。

## Conclusion
Congratulations!  
on deploying your first Smart Contract to ETH blockchain and also creating a Dapp to mint NFTs.


---
## Q&A

### Q.ethers.getContractFactory('knft')とは？
作成したコントラクトを呼び出すための記載。  
```js
ethers.getContractFactory("CONTRACT_NAME")
```
今回はknft.solに記載したknftコントラクトの名前を呼び出すため、上記の記載になっている。


### Q.process.exit()とは？
Node.jsを終了するときに実行する。正常終了するときは`0`を引数に渡す

参考サイト：[Node.jsプログラムを終了する方法](https://tech-wiki.online/jp/node-terminate-program.html)