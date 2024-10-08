const {ethers, upgrades} = require("hardhat");
const {stakeRegistryAbi} = require("./abi/stakeRegistryAbi");
const {holeskyFullStrategies} = require("./config/strategies");

// Connect to the Ethereum network
const provider = new ethers.JsonRpcProvider(`https://rpc-holesky.rockx.com`);

// Replace with your own private key (ensure this is kept secret in real applications)
const privateKey = process.env.PRIVATE_KEY;
const wallet = new ethers.Wallet(privateKey, provider);

// Replace with the address of your smart contract
const contractAddress = process.env.STAKE_REGISTRY_ADDRESS;
if (!contractAddress) {
    throw new Error('STAKE_REGISTRY_ADDRESS is empty!')
}

// Create a contract instance
const contract = new ethers.Contract(contractAddress, stakeRegistryAbi, wallet);

async function call() {
    try {
        const caller = await wallet.getAddress()
        console.log(`caller is:${caller}`)
        // const strategy = await getStrategy(0,0)
        // console.log(strategy)
        // await addStrategies()
        // console.log("addStrategies success!")
        // await removeStrategies(0, [1]);
        // console.log("removeStrategies success!")
        await getStrategy(0,0)

/*        for(let i = 0; i < 13; i++){
        // the removal of lower index entries will cause a shift in the indices of the other strategies to remove
            const indexes = [0]
            const strategy = await getStrategy(0,0)
            console.log(`strategy is${strategy},will remove`)
            await removeStrategies(0, indexes)
            console.log("removeStrategies success!")
        }*/
    } catch (error) {
        console.error('Error sending transaction:', error);
    }
}


//get strategy by quorumNumber and index
async function getStrategy(quorumNumber, index) {
    const strategy = await contract.strategyParamsByIndex(quorumNumber, index)
    console.log(`strategy[${quorumNumber},${index}] is: ${strategy}`);
    return strategy;
}

//remove strategies
async function removeStrategies(quorumNumber, indexes) {
    const tx = await contract.removeStrategies(quorumNumber, indexes)
    await tx.wait();
}

//add strategies
async function addStrategies() {
    // const tx = await contract.addStrategies(0, [{
    //     strategy:"0x7D704507b76571a51d9caE8AdDAbBFd0ba0e63d3",
    //     multiplier: "1000000000000000000"
    // }])
    const tx = await contract.addStrategies(0, holeskyFullStrategies)
    await tx.wait();
}

async function getCurrentTotalStake(){
    // Send a transaction to the createNewTask function
    const total = await contract.getCurrentTotalStake(0);

    console.log(`total: ${total}`);
}




// call command
// npx hardhat run --network holesky script/js/stakeRegistry.js
call();