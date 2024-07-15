const serviceManagerAbi = [
    {
        "type": "constructor",
        "inputs": [
            {
                "name": "__avsDirectory",
                "type": "address",
                "internalType": "contract IAVSDirectory"
            },
            {
                "name": "__rewardsCoordinator",
                "type": "address",
                "internalType": "contract IRewardsCoordinator"
            },
            {
                "name": "__registryCoordinator",
                "type": "address",
                "internalType": "contract IRegistryCoordinator"
            },
            {
                "name": "__stakeRegistry",
                "type": "address",
                "internalType": "contract IStakeRegistry"
            }
        ],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "avsDirectory",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "address",
                "internalType": "address"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "createAVSRewardsSubmission",
        "inputs": [
            {
                "name": "rewardsSubmissions",
                "type": "tuple[]",
                "internalType": "struct IRewardsCoordinator.RewardsSubmission[]",
                "components": [
                    {
                        "name": "strategiesAndMultipliers",
                        "type": "tuple[]",
                        "internalType": "struct IRewardsCoordinator.StrategyAndMultiplier[]",
                        "components": [
                            {
                                "name": "strategy",
                                "type": "address",
                                "internalType": "contract IStrategy"
                            },
                            {
                                "name": "multiplier",
                                "type": "uint96",
                                "internalType": "uint96"
                            }
                        ]
                    },
                    {
                        "name": "token",
                        "type": "address",
                        "internalType": "contract IERC20"
                    },
                    {
                        "name": "amount",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "startTimestamp",
                        "type": "uint32",
                        "internalType": "uint32"
                    },
                    {
                        "name": "duration",
                        "type": "uint32",
                        "internalType": "uint32"
                    }
                ]
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "deregisterOperatorFromAVS",
        "inputs": [
            {
                "name": "operator",
                "type": "address",
                "internalType": "address"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "getOperatorRestakedStrategies",
        "inputs": [
            {
                "name": "operator",
                "type": "address",
                "internalType": "address"
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "address[]",
                "internalType": "address[]"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "getRestakeableStrategies",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "address[]",
                "internalType": "address[]"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "initialize",
        "inputs": [
            {
                "name": "initialOwner",
                "type": "address",
                "internalType": "address"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "owner",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "address",
                "internalType": "address"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "registerOperatorToAVS",
        "inputs": [
            {
                "name": "operator",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "operatorSignature",
                "type": "tuple",
                "internalType": "struct ISignatureUtils.SignatureWithSaltAndExpiry",
                "components": [
                    {
                        "name": "signature",
                        "type": "bytes",
                        "internalType": "bytes"
                    },
                    {
                        "name": "salt",
                        "type": "bytes32",
                        "internalType": "bytes32"
                    },
                    {
                        "name": "expiry",
                        "type": "uint256",
                        "internalType": "uint256"
                    }
                ]
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "renounceOwnership",
        "inputs": [],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "rewardsInitiator",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "address",
                "internalType": "address"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "setRewardsInitiator",
        "inputs": [
            {
                "name": "newRewardsInitiator",
                "type": "address",
                "internalType": "address"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "transferOwnership",
        "inputs": [
            {
                "name": "newOwner",
                "type": "address",
                "internalType": "address"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "updateAVSMetadataURI",
        "inputs": [
            {
                "name": "_metadataURI",
                "type": "string",
                "internalType": "string"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "event",
        "name": "Initialized",
        "inputs": [
            {
                "name": "version",
                "type": "uint8",
                "indexed": false,
                "internalType": "uint8"
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "OwnershipTransferred",
        "inputs": [
            {
                "name": "previousOwner",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            },
            {
                "name": "newOwner",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "RewardsInitiatorUpdated",
        "inputs": [
            {
                "name": "prevRewardsInitiator",
                "type": "address",
                "indexed": false,
                "internalType": "address"
            },
            {
                "name": "newRewardsInitiator",
                "type": "address",
                "indexed": false,
                "internalType": "address"
            }
        ],
        "anonymous": false
    }
]
module.exports = { serviceManagerAbi };