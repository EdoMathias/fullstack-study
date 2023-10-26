var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let coinsData = [];
export function getAllCoins() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // const result = await fetch(`https://api.coingecko.com/api/v3/coins/list`);
            // coinsData = await result.json();
            coinsData = [
                { id: '01coin', symbol: 'zoc', name: '01coin' },
                { id: '0chain', symbol: 'zcn', name: 'Zus' },
                { id: '0-knowledge-network', symbol: '0kn', name: '0 Knowledge Network' },
                { id: '0vix-protocol', symbol: 'vix', name: '0VIX Protocol' },
                { id: '0x', symbol: 'zrx', name: '0x Protocol' },
                {
                    id: '0x0-ai-ai-smart-contract',
                    symbol: '0x0',
                    name: '0x0.ai: AI Smart Contract',
                },
                {
                    id: '0x1-tools-ai-multi-tool',
                    symbol: '0x1',
                    name: '0x1.tools: AI Multi-tool',
                },
                {
                    id: '0xauto-io-contract-auto-deployer',
                    symbol: '0xa',
                    name: '0xAuto.io : Contract Auto Deployer',
                },
                { id: '0xcoco', symbol: 'coco', name: '0xCoco' },
                { id: '0xdao', symbol: 'oxd', name: '0xDAO' },
                { id: '0xdao-v2', symbol: 'oxd v2', name: '0xDAO V2' },
                { id: '0xdefcafe', symbol: 'cafe', name: '0xDEFCAFE' },
                { id: '0xfriend', symbol: '0xf', name: '0xFriend' },
                { id: '0xgasless', symbol: '0xgas', name: '0xGasless' },
                { id: '0xmonero', symbol: '0xmr', name: '0xMonero' },
                { id: '0xs', symbol: '$0xs', name: '0xS' },
                { id: '0xshield', symbol: 'shield', name: '0xShield' },
                { id: '0xsniper', symbol: '0xs', name: '0xSniper' },
                { id: '12ships', symbol: 'tshp', name: '12Ships' },
                { id: '1art', symbol: '1art', name: 'OneArt' },
                { id: '1eco', symbol: '1eco', name: '1eco' },
                { id: '1hive-water', symbol: 'water', name: '1Hive Water' },
                { id: '1inch', symbol: '1inch', name: '1inch' },
                { id: '1inch-yvault', symbol: 'yv1inch', name: '1INCH yVault' },
                { id: '1million-nfts', symbol: '1mil', name: '1MillionNFTs' },
                { id: '1minbet', symbol: '1mb', name: '1minBET' },
                { id: '1move token', symbol: '1mt', name: '1Move Token' },
                { id: '1peco', symbol: '1peco', name: '1peco' },
                { id: '1reward-token', symbol: '1rt', name: '1Reward Token' },
                { id: '1safu', symbol: 'safu', name: '1SAFU' },
                { id: '1sol', symbol: '1sol', name: '1Sol' },
                { id: '1sol-io-wormhole', symbol: '1sol', name: '1sol.io (Wormhole)' },
                { id: '-2', symbol: '₿', name: '₿' },
                { id: '2049', symbol: '2049', name: '2049' },
                { id: '2080', symbol: '2080', name: '2080' },
                { id: '20weth-80bal', symbol: '20weth-80bal', name: '20WETH-80BAL' },
                { id: '28vck', symbol: 'vck', name: '28VCK' },
                { id: '2acoin', symbol: 'arms', name: '2ACoin' },
                { id: '2crazynft', symbol: '2crz', name: '2crazyNFT' },
                { id: '2dai-io', symbol: '2dai', name: '2DAI.io' },
                { id: '2g-carbon-coin', symbol: '2gcc', name: '2G Carbon Coin' },
                { id: '2omb-finance', symbol: '2omb', name: '2omb' },
                { id: '2share', symbol: '2shares', name: '2SHARE' },
                { id: '300fit', symbol: 'fit', name: '300FIT' },
                { id: '3d3d', symbol: '3d3d', name: '3d3d' },
                {
                    id: '3-kingdoms-multiverse',
                    symbol: '3km',
                    name: '3 Kingdoms Multiverse',
                },
                { id: '3shares', symbol: '3share', name: '3Share' },
                { id: '3xcalibur', symbol: 'xcal', name: '3xcalibur Ecosystem Token' },
                { id: '42-coin', symbol: '42', name: '42-coin' },
                { id: '4artechnologies', symbol: '4art', name: '4ART Coin' },
                { id: '4chan', symbol: '4chan', name: '4Chan' },
                { id: '4d-twin-maps', symbol: 'map', name: '4D Twin Maps (OLD)' },
                { id: '4d-twin-maps-2', symbol: '4dmaps', name: '4D Twin Maps' },
                { id: '4int', symbol: '4int', name: '4INT' },
                { id: '4jnet', symbol: '4jnet', name: '4JNET' },
                { id: '50cent', symbol: '50c', name: '50Cent' },
                { id: '5g-cash', symbol: 'vgc', name: '5G-CASH' },
                { id: '5km-run', symbol: 'run', name: '5KM RUN' },
                { id: '7pixels', symbol: '7pxs', name: '7Pixels' },
                { id: '888tron', symbol: '888', name: '888tron' },
                { id: '88mph', symbol: 'mph', name: '88mph' },
                { id: '8bitearn', symbol: '8bit', name: '8BITEARN' },
                { id: '8pay', symbol: '8pay', name: '8Pay' },
                { id: '99starz', symbol: 'stz', name: '99Starz' },
                { id: '9-lives-network', symbol: 'ninefi', name: '9 Lives Network' },
                { id: 'a4-finance', symbol: 'a4', name: 'A4 Finance' },
                { id: 'aada-finance', symbol: 'aada', name: 'Aada Finance' },
                { id: 'aag-ventures', symbol: 'aag', name: 'AAG' },
                { id: 'aardvark', symbol: 'ardvrk', name: 'Aardvark' },
                { id: 'aave', symbol: 'aave', name: 'Aave' },
                { id: 'aave-aave', symbol: 'aaave', name: 'Aave AAVE' },
                {
                    id: 'aave-amm-bptbalweth',
                    symbol: 'aammbptbalweth',
                    name: 'Aave AMM BptBALWETH',
                },
                {
                    id: 'aave-amm-bptwbtcweth',
                    symbol: 'aammbptwbtcweth',
                    name: 'Aave AMM BptWBTCWETH',
                },
                { id: 'aave-amm-dai', symbol: 'aammdai', name: 'Aave AMM DAI' },
                {
                    id: 'aave-amm-uniaaveweth',
                    symbol: 'aammuniaaveweth',
                    name: 'Aave AMM UniAAVEWETH',
                },
                {
                    id: 'aave-amm-unibatweth',
                    symbol: 'aammunibatweth',
                    name: 'Aave AMM UniBATWETH',
                },
                {
                    id: 'aave-amm-unicrvweth',
                    symbol: 'aammunicrvweth',
                    name: 'Aave AMM UniCRVWETH',
                },
                {
                    id: 'aave-amm-unidaiusdc',
                    symbol: 'aammunidaiusdc',
                    name: 'Aave AMM UniDAIUSDC',
                },
                {
                    id: 'aave-amm-unidaiweth',
                    symbol: 'aammunidaiweth',
                    name: 'Aave AMM UniDAIWETH',
                },
                {
                    id: 'aave-amm-unilinkweth',
                    symbol: 'aammunilinkweth',
                    name: 'Aave AMM UniLINKWETH',
                },
                {
                    id: 'aave-amm-unimkrweth',
                    symbol: 'aammunimkrweth',
                    name: 'Aave AMM UniMKRWETH',
                },
                {
                    id: 'aave-amm-unirenweth',
                    symbol: 'aammunirenweth',
                    name: 'Aave AMM UniRENWETH',
                },
                {
                    id: 'aave-amm-unisnxweth',
                    symbol: 'aammunisnxweth',
                    name: 'Aave AMM UniSNXWETH',
                },
                {
                    id: 'aave-amm-uniuniweth',
                    symbol: 'aammuniuniweth',
                    name: 'Aave AMM UniUNIWETH',
                },
                {
                    id: 'aave-amm-uniusdcweth',
                    symbol: 'aammuniusdcweth',
                    name: 'Aave AMM UniUSDCWETH',
                },
                {
                    id: 'aave-amm-uniwbtcusdc',
                    symbol: 'aammuniwbtcusdc',
                    name: 'Aave AMM UniWBTCUSDC',
                },
                {
                    id: 'aave-amm-uniwbtcweth',
                    symbol: 'aammuniwbtcweth',
                    name: 'Aave AMM UniWBTCWETH',
                },
                {
                    id: 'aave-amm-uniyfiweth',
                    symbol: 'aammuniyfiweth',
                    name: 'Aave AMM UniYFIWETH',
                },
                { id: 'aave-amm-usdc', symbol: 'aammusdc', name: 'Aave AMM USDC' },
                { id: 'aave-amm-usdt', symbol: 'aammusdt', name: 'Aave AMM USDT' },
                { id: 'aave-amm-wbtc', symbol: 'aammwbtc', name: 'Aave AMM WBTC' },
                { id: 'aave-amm-weth', symbol: 'aammweth', name: 'Aave AMM WETH' },
                { id: 'aave-bal', symbol: 'abal', name: 'Aave BAL' },
                {
                    id: 'aave-balancer-pool-token',
                    symbol: 'abpt',
                    name: 'Aave Balancer Pool Token',
                },
                { id: 'aave-bat', symbol: 'abat', name: 'Aave BAT' },
                { id: 'aave-bat-v1', symbol: 'abat', name: 'Aave BAT v1' },
                { id: 'aave-busd', symbol: 'abusd', name: 'Aave BUSD' },
                { id: 'aave-busd-v1', symbol: 'abusd', name: 'Aave BUSD v1' },
                { id: 'aave-crv', symbol: 'acrv', name: 'Aave CRV' },
                { id: 'aave-dai', symbol: 'adai', name: 'Aave DAI' },
                // ];
            ];
            return coinsData;
        }
        catch (error) {
            console.error(error);
            return coinsData;
        }
    });
}