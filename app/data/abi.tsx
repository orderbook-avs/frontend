export const abi = [
  {
    type: "constructor",
    inputs: [
      {
        name: "_registryCoordinator",
        type: "address",
        internalType: "contract IRegistryCoordinator",
      },
      {
        name: "_taskResponseWindowBlock",
        type: "uint32",
        internalType: "uint32",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "TASK_CHALLENGE_WINDOW_BLOCK",
    inputs: [],
    outputs: [{ name: "", type: "uint32", internalType: "uint32" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "TASK_RESPONSE_WINDOW_BLOCK",
    inputs: [],
    outputs: [{ name: "", type: "uint32", internalType: "uint32" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "aggregator",
    inputs: [],
    outputs: [{ name: "", type: "address", internalType: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "allTaskHashes",
    inputs: [{ name: "", type: "uint32", internalType: "uint32" }],
    outputs: [{ name: "", type: "bytes32", internalType: "bytes32" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "allTaskResponses",
    inputs: [{ name: "", type: "uint32", internalType: "uint32" }],
    outputs: [{ name: "", type: "bytes32", internalType: "bytes32" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "blsApkRegistry",
    inputs: [],
    outputs: [
      { name: "", type: "address", internalType: "contract IBLSApkRegistry" },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "checkSignatures",
    inputs: [
      { name: "msgHash", type: "bytes32", internalType: "bytes32" },
      { name: "quorumNumbers", type: "bytes", internalType: "bytes" },
      { name: "referenceBlockNumber", type: "uint32", internalType: "uint32" },
      {
        name: "params",
        type: "tuple",
        internalType: "struct IBLSSignatureChecker.NonSignerStakesAndSignature",
        components: [
          {
            name: "nonSignerQuorumBitmapIndices",
            type: "uint32[]",
            internalType: "uint32[]",
          },
          {
            name: "nonSignerPubkeys",
            type: "tuple[]",
            internalType: "struct BN254.G1Point[]",
            components: [
              { name: "X", type: "uint256", internalType: "uint256" },
              { name: "Y", type: "uint256", internalType: "uint256" },
            ],
          },
          {
            name: "quorumApks",
            type: "tuple[]",
            internalType: "struct BN254.G1Point[]",
            components: [
              { name: "X", type: "uint256", internalType: "uint256" },
              { name: "Y", type: "uint256", internalType: "uint256" },
            ],
          },
          {
            name: "apkG2",
            type: "tuple",
            internalType: "struct BN254.G2Point",
            components: [
              { name: "X", type: "uint256[2]", internalType: "uint256[2]" },
              { name: "Y", type: "uint256[2]", internalType: "uint256[2]" },
            ],
          },
          {
            name: "sigma",
            type: "tuple",
            internalType: "struct BN254.G1Point",
            components: [
              { name: "X", type: "uint256", internalType: "uint256" },
              { name: "Y", type: "uint256", internalType: "uint256" },
            ],
          },
          {
            name: "quorumApkIndices",
            type: "uint32[]",
            internalType: "uint32[]",
          },
          {
            name: "totalStakeIndices",
            type: "uint32[]",
            internalType: "uint32[]",
          },
          {
            name: "nonSignerStakeIndices",
            type: "uint32[][]",
            internalType: "uint32[][]",
          },
        ],
      },
    ],
    outputs: [
      {
        name: "",
        type: "tuple",
        internalType: "struct IBLSSignatureChecker.QuorumStakeTotals",
        components: [
          {
            name: "signedStakeForQuorum",
            type: "uint96[]",
            internalType: "uint96[]",
          },
          {
            name: "totalStakeForQuorum",
            type: "uint96[]",
            internalType: "uint96[]",
          },
        ],
      },
      { name: "", type: "bytes32", internalType: "bytes32" },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "createNewTask",
    inputs: [
      { name: "amount_owned", type: "uint256", internalType: "uint256" },
      { name: "amount_not_owned", type: "uint256", internalType: "uint256" },
      { name: "token_not_owned", type: "address", internalType: "address" },
      { name: "token_owned", type: "address", internalType: "address" },
      { name: "slippage", type: "uint256", internalType: "uint256" },
      {
        name: "quorumThresholdPercentage",
        type: "uint32",
        internalType: "uint32",
      },
      { name: "quorumNumbers", type: "bytes", internalType: "bytes" },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "delegation",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "contract IDelegationManager",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "generator",
    inputs: [],
    outputs: [{ name: "", type: "address", internalType: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getAllOrders",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "tuple[]",
        internalType: "struct IOrderBookTaskManager.Order[]",
        components: [
          { name: "user", type: "address", internalType: "address" },
          { name: "amount_owned", type: "uint256", internalType: "uint256" },
          {
            name: "amount_not_owned",
            type: "uint256",
            internalType: "uint256",
          },
          { name: "token_not_owned", type: "address", internalType: "address" },
          { name: "token_owned", type: "address", internalType: "address" },
          { name: "slippage", type: "uint256", internalType: "uint256" },
          { name: "timestamp", type: "uint256", internalType: "uint256" },
          {
            name: "timestamp_matched",
            type: "uint256",
            internalType: "uint256",
          },
          { name: "isPartiallyFilled", type: "bool", internalType: "bool" },
          { name: "isFilled", type: "bool", internalType: "bool" },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getBatchOperatorFromId",
    inputs: [
      {
        name: "registryCoordinator",
        type: "address",
        internalType: "contract IRegistryCoordinator",
      },
      { name: "operatorIds", type: "bytes32[]", internalType: "bytes32[]" },
    ],
    outputs: [
      { name: "operators", type: "address[]", internalType: "address[]" },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getBatchOperatorId",
    inputs: [
      {
        name: "registryCoordinator",
        type: "address",
        internalType: "contract IRegistryCoordinator",
      },
      { name: "operators", type: "address[]", internalType: "address[]" },
    ],
    outputs: [
      { name: "operatorIds", type: "bytes32[]", internalType: "bytes32[]" },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getCheckSignaturesIndices",
    inputs: [
      {
        name: "registryCoordinator",
        type: "address",
        internalType: "contract IRegistryCoordinator",
      },
      { name: "referenceBlockNumber", type: "uint32", internalType: "uint32" },
      { name: "quorumNumbers", type: "bytes", internalType: "bytes" },
      {
        name: "nonSignerOperatorIds",
        type: "bytes32[]",
        internalType: "bytes32[]",
      },
    ],
    outputs: [
      {
        name: "",
        type: "tuple",
        internalType: "struct OperatorStateRetriever.CheckSignaturesIndices",
        components: [
          {
            name: "nonSignerQuorumBitmapIndices",
            type: "uint32[]",
            internalType: "uint32[]",
          },
          {
            name: "quorumApkIndices",
            type: "uint32[]",
            internalType: "uint32[]",
          },
          {
            name: "totalStakeIndices",
            type: "uint32[]",
            internalType: "uint32[]",
          },
          {
            name: "nonSignerStakeIndices",
            type: "uint32[][]",
            internalType: "uint32[][]",
          },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getOperatorState",
    inputs: [
      {
        name: "registryCoordinator",
        type: "address",
        internalType: "contract IRegistryCoordinator",
      },
      { name: "quorumNumbers", type: "bytes", internalType: "bytes" },
      { name: "blockNumber", type: "uint32", internalType: "uint32" },
    ],
    outputs: [
      {
        name: "",
        type: "tuple[][]",
        internalType: "struct OperatorStateRetriever.Operator[][]",
        components: [
          { name: "operator", type: "address", internalType: "address" },
          { name: "operatorId", type: "bytes32", internalType: "bytes32" },
          { name: "stake", type: "uint96", internalType: "uint96" },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getOperatorState",
    inputs: [
      {
        name: "registryCoordinator",
        type: "address",
        internalType: "contract IRegistryCoordinator",
      },
      { name: "operatorId", type: "bytes32", internalType: "bytes32" },
      { name: "blockNumber", type: "uint32", internalType: "uint32" },
    ],
    outputs: [
      { name: "", type: "uint256", internalType: "uint256" },
      {
        name: "",
        type: "tuple[][]",
        internalType: "struct OperatorStateRetriever.Operator[][]",
        components: [
          { name: "operator", type: "address", internalType: "address" },
          { name: "operatorId", type: "bytes32", internalType: "bytes32" },
          { name: "stake", type: "uint96", internalType: "uint96" },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getQuorumBitmapsAtBlockNumber",
    inputs: [
      {
        name: "registryCoordinator",
        type: "address",
        internalType: "contract IRegistryCoordinator",
      },
      { name: "operatorIds", type: "bytes32[]", internalType: "bytes32[]" },
      { name: "blockNumber", type: "uint32", internalType: "uint32" },
    ],
    outputs: [{ name: "", type: "uint256[]", internalType: "uint256[]" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getTaskResponseWindowBlock",
    inputs: [],
    outputs: [{ name: "", type: "uint32", internalType: "uint32" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "initialize",
    inputs: [
      {
        name: "_pauserRegistry",
        type: "address",
        internalType: "contract IPauserRegistry",
      },
      { name: "initialOwner", type: "address", internalType: "address" },
      { name: "_aggregator", type: "address", internalType: "address" },
      { name: "_generator", type: "address", internalType: "address" },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "latestTaskNum",
    inputs: [],
    outputs: [{ name: "", type: "uint32", internalType: "uint32" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "orders",
    inputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    outputs: [
      { name: "user", type: "address", internalType: "address" },
      { name: "amount_owned", type: "uint256", internalType: "uint256" },
      { name: "amount_not_owned", type: "uint256", internalType: "uint256" },
      { name: "token_not_owned", type: "address", internalType: "address" },
      { name: "token_owned", type: "address", internalType: "address" },
      { name: "slippage", type: "uint256", internalType: "uint256" },
      { name: "timestamp", type: "uint256", internalType: "uint256" },
      { name: "timestamp_matched", type: "uint256", internalType: "uint256" },
      { name: "isPartiallyFilled", type: "bool", internalType: "bool" },
      { name: "isFilled", type: "bool", internalType: "bool" },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "owner",
    inputs: [],
    outputs: [{ name: "", type: "address", internalType: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "pause",
    inputs: [
      { name: "newPausedStatus", type: "uint256", internalType: "uint256" },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "pauseAll",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "paused",
    inputs: [{ name: "index", type: "uint8", internalType: "uint8" }],
    outputs: [{ name: "", type: "bool", internalType: "bool" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "paused",
    inputs: [],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "pauserRegistry",
    inputs: [],
    outputs: [
      { name: "", type: "address", internalType: "contract IPauserRegistry" },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "raiseAndResolveChallenge",
    inputs: [
      {
        name: "task",
        type: "tuple",
        internalType: "struct IOrderBookTaskManager.Task",
        components: [
          {
            name: "order",
            type: "tuple",
            internalType: "struct IOrderBookTaskManager.Order",
            components: [
              { name: "user", type: "address", internalType: "address" },
              {
                name: "amount_owned",
                type: "uint256",
                internalType: "uint256",
              },
              {
                name: "amount_not_owned",
                type: "uint256",
                internalType: "uint256",
              },
              {
                name: "token_not_owned",
                type: "address",
                internalType: "address",
              },
              { name: "token_owned", type: "address", internalType: "address" },
              { name: "slippage", type: "uint256", internalType: "uint256" },
              { name: "timestamp", type: "uint256", internalType: "uint256" },
              {
                name: "timestamp_matched",
                type: "uint256",
                internalType: "uint256",
              },
              { name: "isPartiallyFilled", type: "bool", internalType: "bool" },
              { name: "isFilled", type: "bool", internalType: "bool" },
            ],
          },
          {
            name: "orderbook",
            type: "tuple[]",
            internalType: "struct IOrderBookTaskManager.Order[]",
            components: [
              { name: "user", type: "address", internalType: "address" },
              {
                name: "amount_owned",
                type: "uint256",
                internalType: "uint256",
              },
              {
                name: "amount_not_owned",
                type: "uint256",
                internalType: "uint256",
              },
              {
                name: "token_not_owned",
                type: "address",
                internalType: "address",
              },
              { name: "token_owned", type: "address", internalType: "address" },
              { name: "slippage", type: "uint256", internalType: "uint256" },
              { name: "timestamp", type: "uint256", internalType: "uint256" },
              {
                name: "timestamp_matched",
                type: "uint256",
                internalType: "uint256",
              },
              { name: "isPartiallyFilled", type: "bool", internalType: "bool" },
              { name: "isFilled", type: "bool", internalType: "bool" },
            ],
          },
          { name: "taskCreatedBlock", type: "uint32", internalType: "uint32" },
          { name: "quorumNumbers", type: "bytes", internalType: "bytes" },
          {
            name: "quorumThresholdPercentage",
            type: "uint32",
            internalType: "uint32",
          },
        ],
      },
      {
        name: "taskResponse",
        type: "tuple",
        internalType: "struct IOrderBookTaskManager.TaskResponse",
        components: [
          {
            name: "referenceTaskIndex",
            type: "uint32",
            internalType: "uint32",
          },
          {
            name: "newOrder",
            type: "tuple",
            internalType: "struct IOrderBookTaskManager.Order",
            components: [
              { name: "user", type: "address", internalType: "address" },
              {
                name: "amount_owned",
                type: "uint256",
                internalType: "uint256",
              },
              {
                name: "amount_not_owned",
                type: "uint256",
                internalType: "uint256",
              },
              {
                name: "token_not_owned",
                type: "address",
                internalType: "address",
              },
              { name: "token_owned", type: "address", internalType: "address" },
              { name: "slippage", type: "uint256", internalType: "uint256" },
              { name: "timestamp", type: "uint256", internalType: "uint256" },
              {
                name: "timestamp_matched",
                type: "uint256",
                internalType: "uint256",
              },
              { name: "isPartiallyFilled", type: "bool", internalType: "bool" },
              { name: "isFilled", type: "bool", internalType: "bool" },
            ],
          },
          {
            name: "newOtherOrder",
            type: "tuple",
            internalType: "struct IOrderBookTaskManager.Order",
            components: [
              { name: "user", type: "address", internalType: "address" },
              {
                name: "amount_owned",
                type: "uint256",
                internalType: "uint256",
              },
              {
                name: "amount_not_owned",
                type: "uint256",
                internalType: "uint256",
              },
              {
                name: "token_not_owned",
                type: "address",
                internalType: "address",
              },
              { name: "token_owned", type: "address", internalType: "address" },
              { name: "slippage", type: "uint256", internalType: "uint256" },
              { name: "timestamp", type: "uint256", internalType: "uint256" },
              {
                name: "timestamp_matched",
                type: "uint256",
                internalType: "uint256",
              },
              { name: "isPartiallyFilled", type: "bool", internalType: "bool" },
              { name: "isFilled", type: "bool", internalType: "bool" },
            ],
          },
          {
            name: "matchedOrderIndex",
            type: "uint256",
            internalType: "uint256",
          },
        ],
      },
      {
        name: "taskResponseMetadata",
        type: "tuple",
        internalType: "struct IOrderBookTaskManager.TaskResponseMetadata",
        components: [
          {
            name: "taskResponsedBlock",
            type: "uint32",
            internalType: "uint32",
          },
          {
            name: "hashOfNonSigners",
            type: "bytes32",
            internalType: "bytes32",
          },
        ],
      },
      {
        name: "pubkeysOfNonSigningOperators",
        type: "tuple[]",
        internalType: "struct BN254.G1Point[]",
        components: [
          { name: "X", type: "uint256", internalType: "uint256" },
          { name: "Y", type: "uint256", internalType: "uint256" },
        ],
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "registryCoordinator",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "contract IRegistryCoordinator",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "renounceOwnership",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "respondToTask",
    inputs: [
      {
        name: "task",
        type: "tuple",
        internalType: "struct IOrderBookTaskManager.Task",
        components: [
          {
            name: "order",
            type: "tuple",
            internalType: "struct IOrderBookTaskManager.Order",
            components: [
              { name: "user", type: "address", internalType: "address" },
              {
                name: "amount_owned",
                type: "uint256",
                internalType: "uint256",
              },
              {
                name: "amount_not_owned",
                type: "uint256",
                internalType: "uint256",
              },
              {
                name: "token_not_owned",
                type: "address",
                internalType: "address",
              },
              { name: "token_owned", type: "address", internalType: "address" },
              { name: "slippage", type: "uint256", internalType: "uint256" },
              { name: "timestamp", type: "uint256", internalType: "uint256" },
              {
                name: "timestamp_matched",
                type: "uint256",
                internalType: "uint256",
              },
              { name: "isPartiallyFilled", type: "bool", internalType: "bool" },
              { name: "isFilled", type: "bool", internalType: "bool" },
            ],
          },
          {
            name: "orderbook",
            type: "tuple[]",
            internalType: "struct IOrderBookTaskManager.Order[]",
            components: [
              { name: "user", type: "address", internalType: "address" },
              {
                name: "amount_owned",
                type: "uint256",
                internalType: "uint256",
              },
              {
                name: "amount_not_owned",
                type: "uint256",
                internalType: "uint256",
              },
              {
                name: "token_not_owned",
                type: "address",
                internalType: "address",
              },
              { name: "token_owned", type: "address", internalType: "address" },
              { name: "slippage", type: "uint256", internalType: "uint256" },
              { name: "timestamp", type: "uint256", internalType: "uint256" },
              {
                name: "timestamp_matched",
                type: "uint256",
                internalType: "uint256",
              },
              { name: "isPartiallyFilled", type: "bool", internalType: "bool" },
              { name: "isFilled", type: "bool", internalType: "bool" },
            ],
          },
          { name: "taskCreatedBlock", type: "uint32", internalType: "uint32" },
          { name: "quorumNumbers", type: "bytes", internalType: "bytes" },
          {
            name: "quorumThresholdPercentage",
            type: "uint32",
            internalType: "uint32",
          },
        ],
      },
      {
        name: "taskResponse",
        type: "tuple",
        internalType: "struct IOrderBookTaskManager.TaskResponse",
        components: [
          {
            name: "referenceTaskIndex",
            type: "uint32",
            internalType: "uint32",
          },
          {
            name: "newOrder",
            type: "tuple",
            internalType: "struct IOrderBookTaskManager.Order",
            components: [
              { name: "user", type: "address", internalType: "address" },
              {
                name: "amount_owned",
                type: "uint256",
                internalType: "uint256",
              },
              {
                name: "amount_not_owned",
                type: "uint256",
                internalType: "uint256",
              },
              {
                name: "token_not_owned",
                type: "address",
                internalType: "address",
              },
              { name: "token_owned", type: "address", internalType: "address" },
              { name: "slippage", type: "uint256", internalType: "uint256" },
              { name: "timestamp", type: "uint256", internalType: "uint256" },
              {
                name: "timestamp_matched",
                type: "uint256",
                internalType: "uint256",
              },
              { name: "isPartiallyFilled", type: "bool", internalType: "bool" },
              { name: "isFilled", type: "bool", internalType: "bool" },
            ],
          },
          {
            name: "newOtherOrder",
            type: "tuple",
            internalType: "struct IOrderBookTaskManager.Order",
            components: [
              { name: "user", type: "address", internalType: "address" },
              {
                name: "amount_owned",
                type: "uint256",
                internalType: "uint256",
              },
              {
                name: "amount_not_owned",
                type: "uint256",
                internalType: "uint256",
              },
              {
                name: "token_not_owned",
                type: "address",
                internalType: "address",
              },
              { name: "token_owned", type: "address", internalType: "address" },
              { name: "slippage", type: "uint256", internalType: "uint256" },
              { name: "timestamp", type: "uint256", internalType: "uint256" },
              {
                name: "timestamp_matched",
                type: "uint256",
                internalType: "uint256",
              },
              { name: "isPartiallyFilled", type: "bool", internalType: "bool" },
              { name: "isFilled", type: "bool", internalType: "bool" },
            ],
          },
          {
            name: "matchedOrderIndex",
            type: "uint256",
            internalType: "uint256",
          },
        ],
      },
      {
        name: "nonSignerStakesAndSignature",
        type: "tuple",
        internalType: "struct IBLSSignatureChecker.NonSignerStakesAndSignature",
        components: [
          {
            name: "nonSignerQuorumBitmapIndices",
            type: "uint32[]",
            internalType: "uint32[]",
          },
          {
            name: "nonSignerPubkeys",
            type: "tuple[]",
            internalType: "struct BN254.G1Point[]",
            components: [
              { name: "X", type: "uint256", internalType: "uint256" },
              { name: "Y", type: "uint256", internalType: "uint256" },
            ],
          },
          {
            name: "quorumApks",
            type: "tuple[]",
            internalType: "struct BN254.G1Point[]",
            components: [
              { name: "X", type: "uint256", internalType: "uint256" },
              { name: "Y", type: "uint256", internalType: "uint256" },
            ],
          },
          {
            name: "apkG2",
            type: "tuple",
            internalType: "struct BN254.G2Point",
            components: [
              { name: "X", type: "uint256[2]", internalType: "uint256[2]" },
              { name: "Y", type: "uint256[2]", internalType: "uint256[2]" },
            ],
          },
          {
            name: "sigma",
            type: "tuple",
            internalType: "struct BN254.G1Point",
            components: [
              { name: "X", type: "uint256", internalType: "uint256" },
              { name: "Y", type: "uint256", internalType: "uint256" },
            ],
          },
          {
            name: "quorumApkIndices",
            type: "uint32[]",
            internalType: "uint32[]",
          },
          {
            name: "totalStakeIndices",
            type: "uint32[]",
            internalType: "uint32[]",
          },
          {
            name: "nonSignerStakeIndices",
            type: "uint32[][]",
            internalType: "uint32[][]",
          },
        ],
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "rewardToken",
    inputs: [],
    outputs: [{ name: "", type: "address", internalType: "contract ERC20" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "setPauserRegistry",
    inputs: [
      {
        name: "newPauserRegistry",
        type: "address",
        internalType: "contract IPauserRegistry",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "setStaleStakesForbidden",
    inputs: [{ name: "value", type: "bool", internalType: "bool" }],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "stakeRegistry",
    inputs: [],
    outputs: [
      { name: "", type: "address", internalType: "contract IStakeRegistry" },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "staleStakesForbidden",
    inputs: [],
    outputs: [{ name: "", type: "bool", internalType: "bool" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "taskNumber",
    inputs: [],
    outputs: [{ name: "", type: "uint32", internalType: "uint32" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "taskSuccesfullyChallenged",
    inputs: [{ name: "", type: "uint32", internalType: "uint32" }],
    outputs: [{ name: "", type: "bool", internalType: "bool" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "transferOwnership",
    inputs: [{ name: "newOwner", type: "address", internalType: "address" }],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "trySignatureAndApkVerification",
    inputs: [
      { name: "msgHash", type: "bytes32", internalType: "bytes32" },
      {
        name: "apk",
        type: "tuple",
        internalType: "struct BN254.G1Point",
        components: [
          { name: "X", type: "uint256", internalType: "uint256" },
          { name: "Y", type: "uint256", internalType: "uint256" },
        ],
      },
      {
        name: "apkG2",
        type: "tuple",
        internalType: "struct BN254.G2Point",
        components: [
          { name: "X", type: "uint256[2]", internalType: "uint256[2]" },
          { name: "Y", type: "uint256[2]", internalType: "uint256[2]" },
        ],
      },
      {
        name: "sigma",
        type: "tuple",
        internalType: "struct BN254.G1Point",
        components: [
          { name: "X", type: "uint256", internalType: "uint256" },
          { name: "Y", type: "uint256", internalType: "uint256" },
        ],
      },
    ],
    outputs: [
      { name: "pairingSuccessful", type: "bool", internalType: "bool" },
      { name: "siganatureIsValid", type: "bool", internalType: "bool" },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "unpause",
    inputs: [
      { name: "newPausedStatus", type: "uint256", internalType: "uint256" },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    name: "Initialized",
    inputs: [
      {
        name: "version",
        type: "uint64",
        indexed: false,
        internalType: "uint64",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "NewTaskCreated",
    inputs: [
      {
        name: "taskIndex",
        type: "uint32",
        indexed: true,
        internalType: "uint32",
      },
      {
        name: "task",
        type: "tuple",
        indexed: false,
        internalType: "struct IOrderBookTaskManager.Task",
        components: [
          {
            name: "order",
            type: "tuple",
            internalType: "struct IOrderBookTaskManager.Order",
            components: [
              { name: "user", type: "address", internalType: "address" },
              {
                name: "amount_owned",
                type: "uint256",
                internalType: "uint256",
              },
              {
                name: "amount_not_owned",
                type: "uint256",
                internalType: "uint256",
              },
              {
                name: "token_not_owned",
                type: "address",
                internalType: "address",
              },
              { name: "token_owned", type: "address", internalType: "address" },
              { name: "slippage", type: "uint256", internalType: "uint256" },
              { name: "timestamp", type: "uint256", internalType: "uint256" },
              {
                name: "timestamp_matched",
                type: "uint256",
                internalType: "uint256",
              },
              { name: "isPartiallyFilled", type: "bool", internalType: "bool" },
              { name: "isFilled", type: "bool", internalType: "bool" },
            ],
          },
          {
            name: "orderbook",
            type: "tuple[]",
            internalType: "struct IOrderBookTaskManager.Order[]",
            components: [
              { name: "user", type: "address", internalType: "address" },
              {
                name: "amount_owned",
                type: "uint256",
                internalType: "uint256",
              },
              {
                name: "amount_not_owned",
                type: "uint256",
                internalType: "uint256",
              },
              {
                name: "token_not_owned",
                type: "address",
                internalType: "address",
              },
              { name: "token_owned", type: "address", internalType: "address" },
              { name: "slippage", type: "uint256", internalType: "uint256" },
              { name: "timestamp", type: "uint256", internalType: "uint256" },
              {
                name: "timestamp_matched",
                type: "uint256",
                internalType: "uint256",
              },
              { name: "isPartiallyFilled", type: "bool", internalType: "bool" },
              { name: "isFilled", type: "bool", internalType: "bool" },
            ],
          },
          { name: "taskCreatedBlock", type: "uint32", internalType: "uint32" },
          { name: "quorumNumbers", type: "bytes", internalType: "bytes" },
          {
            name: "quorumThresholdPercentage",
            type: "uint32",
            internalType: "uint32",
          },
        ],
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "OwnershipTransferred",
    inputs: [
      {
        name: "previousOwner",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "newOwner",
        type: "address",
        indexed: true,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "Paused",
    inputs: [
      {
        name: "account",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "newPausedStatus",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "PauserRegistrySet",
    inputs: [
      {
        name: "pauserRegistry",
        type: "address",
        indexed: false,
        internalType: "contract IPauserRegistry",
      },
      {
        name: "newPauserRegistry",
        type: "address",
        indexed: false,
        internalType: "contract IPauserRegistry",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "StaleStakesForbiddenUpdate",
    inputs: [
      { name: "value", type: "bool", indexed: false, internalType: "bool" },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "TaskChallengedSuccessfully",
    inputs: [
      {
        name: "taskIndex",
        type: "uint32",
        indexed: true,
        internalType: "uint32",
      },
      {
        name: "challenger",
        type: "address",
        indexed: true,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "TaskChallengedUnsuccessfully",
    inputs: [
      {
        name: "taskIndex",
        type: "uint32",
        indexed: true,
        internalType: "uint32",
      },
      {
        name: "challenger",
        type: "address",
        indexed: true,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "TaskCompleted",
    inputs: [
      {
        name: "taskIndex",
        type: "uint32",
        indexed: true,
        internalType: "uint32",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "TaskResponded",
    inputs: [
      {
        name: "taskResponse",
        type: "tuple",
        indexed: false,
        internalType: "struct IOrderBookTaskManager.TaskResponse",
        components: [
          {
            name: "referenceTaskIndex",
            type: "uint32",
            internalType: "uint32",
          },
          {
            name: "newOrder",
            type: "tuple",
            internalType: "struct IOrderBookTaskManager.Order",
            components: [
              { name: "user", type: "address", internalType: "address" },
              {
                name: "amount_owned",
                type: "uint256",
                internalType: "uint256",
              },
              {
                name: "amount_not_owned",
                type: "uint256",
                internalType: "uint256",
              },
              {
                name: "token_not_owned",
                type: "address",
                internalType: "address",
              },
              { name: "token_owned", type: "address", internalType: "address" },
              { name: "slippage", type: "uint256", internalType: "uint256" },
              { name: "timestamp", type: "uint256", internalType: "uint256" },
              {
                name: "timestamp_matched",
                type: "uint256",
                internalType: "uint256",
              },
              { name: "isPartiallyFilled", type: "bool", internalType: "bool" },
              { name: "isFilled", type: "bool", internalType: "bool" },
            ],
          },
          {
            name: "newOtherOrder",
            type: "tuple",
            internalType: "struct IOrderBookTaskManager.Order",
            components: [
              { name: "user", type: "address", internalType: "address" },
              {
                name: "amount_owned",
                type: "uint256",
                internalType: "uint256",
              },
              {
                name: "amount_not_owned",
                type: "uint256",
                internalType: "uint256",
              },
              {
                name: "token_not_owned",
                type: "address",
                internalType: "address",
              },
              { name: "token_owned", type: "address", internalType: "address" },
              { name: "slippage", type: "uint256", internalType: "uint256" },
              { name: "timestamp", type: "uint256", internalType: "uint256" },
              {
                name: "timestamp_matched",
                type: "uint256",
                internalType: "uint256",
              },
              { name: "isPartiallyFilled", type: "bool", internalType: "bool" },
              { name: "isFilled", type: "bool", internalType: "bool" },
            ],
          },
          {
            name: "matchedOrderIndex",
            type: "uint256",
            internalType: "uint256",
          },
        ],
      },
      {
        name: "taskResponseMetadata",
        type: "tuple",
        indexed: false,
        internalType: "struct IOrderBookTaskManager.TaskResponseMetadata",
        components: [
          {
            name: "taskResponsedBlock",
            type: "uint32",
            internalType: "uint32",
          },
          {
            name: "hashOfNonSigners",
            type: "bytes32",
            internalType: "bytes32",
          },
        ],
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "Unpaused",
    inputs: [
      {
        name: "account",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "newPausedStatus",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  { type: "error", name: "InvalidInitialization", inputs: [] },
  { type: "error", name: "NotInitializing", inputs: [] },
  {
    type: "error",
    name: "OwnableInvalidOwner",
    inputs: [{ name: "owner", type: "address", internalType: "address" }],
  },
  {
    type: "error",
    name: "OwnableUnauthorizedAccount",
    inputs: [{ name: "account", type: "address", internalType: "address" }],
  },
];

export const wBTCAbi = [
  { type: "constructor", inputs: [], stateMutability: "nonpayable" },
  {
    type: "function",
    name: "allowance",
    inputs: [
      { name: "owner", type: "address", internalType: "address" },
      { name: "spender", type: "address", internalType: "address" },
    ],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "approve",
    inputs: [
      { name: "spender", type: "address", internalType: "address" },
      { name: "value", type: "uint256", internalType: "uint256" },
    ],
    outputs: [{ name: "", type: "bool", internalType: "bool" }],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "balanceOf",
    inputs: [{ name: "account", type: "address", internalType: "address" }],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "decimals",
    inputs: [],
    outputs: [{ name: "", type: "uint8", internalType: "uint8" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "name",
    inputs: [],
    outputs: [{ name: "", type: "string", internalType: "string" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "symbol",
    inputs: [],
    outputs: [{ name: "", type: "string", internalType: "string" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "totalSupply",
    inputs: [],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "transfer",
    inputs: [
      { name: "to", type: "address", internalType: "address" },
      { name: "value", type: "uint256", internalType: "uint256" },
    ],
    outputs: [{ name: "", type: "bool", internalType: "bool" }],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "transferFrom",
    inputs: [
      { name: "from", type: "address", internalType: "address" },
      { name: "to", type: "address", internalType: "address" },
      { name: "value", type: "uint256", internalType: "uint256" },
    ],
    outputs: [{ name: "", type: "bool", internalType: "bool" }],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    name: "Approval",
    inputs: [
      {
        name: "owner",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "spender",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "value",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "Transfer",
    inputs: [
      { name: "from", type: "address", indexed: true, internalType: "address" },
      { name: "to", type: "address", indexed: true, internalType: "address" },
      {
        name: "value",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "error",
    name: "ERC20InsufficientAllowance",
    inputs: [
      { name: "spender", type: "address", internalType: "address" },
      { name: "allowance", type: "uint256", internalType: "uint256" },
      { name: "needed", type: "uint256", internalType: "uint256" },
    ],
  },
  {
    type: "error",
    name: "ERC20InsufficientBalance",
    inputs: [
      { name: "sender", type: "address", internalType: "address" },
      { name: "balance", type: "uint256", internalType: "uint256" },
      { name: "needed", type: "uint256", internalType: "uint256" },
    ],
  },
  {
    type: "error",
    name: "ERC20InvalidApprover",
    inputs: [{ name: "approver", type: "address", internalType: "address" }],
  },
  {
    type: "error",
    name: "ERC20InvalidReceiver",
    inputs: [{ name: "receiver", type: "address", internalType: "address" }],
  },
  {
    type: "error",
    name: "ERC20InvalidSender",
    inputs: [{ name: "sender", type: "address", internalType: "address" }],
  },
  {
    type: "error",
    name: "ERC20InvalidSpender",
    inputs: [{ name: "spender", type: "address", internalType: "address" }],
  },
];

export const wETHAbi = [
  { type: "constructor", inputs: [], stateMutability: "nonpayable" },
  {
    type: "function",
    name: "allowance",
    inputs: [
      { name: "owner", type: "address", internalType: "address" },
      { name: "spender", type: "address", internalType: "address" },
    ],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "approve",
    inputs: [
      { name: "spender", type: "address", internalType: "address" },
      { name: "value", type: "uint256", internalType: "uint256" },
    ],
    outputs: [{ name: "", type: "bool", internalType: "bool" }],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "balanceOf",
    inputs: [{ name: "account", type: "address", internalType: "address" }],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "decimals",
    inputs: [],
    outputs: [{ name: "", type: "uint8", internalType: "uint8" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "name",
    inputs: [],
    outputs: [{ name: "", type: "string", internalType: "string" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "symbol",
    inputs: [],
    outputs: [{ name: "", type: "string", internalType: "string" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "totalSupply",
    inputs: [],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "transfer",
    inputs: [
      { name: "to", type: "address", internalType: "address" },
      { name: "value", type: "uint256", internalType: "uint256" },
    ],
    outputs: [{ name: "", type: "bool", internalType: "bool" }],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "transferFrom",
    inputs: [
      { name: "from", type: "address", internalType: "address" },
      { name: "to", type: "address", internalType: "address" },
      { name: "value", type: "uint256", internalType: "uint256" },
    ],
    outputs: [{ name: "", type: "bool", internalType: "bool" }],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    name: "Approval",
    inputs: [
      {
        name: "owner",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "spender",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "value",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "Transfer",
    inputs: [
      { name: "from", type: "address", indexed: true, internalType: "address" },
      { name: "to", type: "address", indexed: true, internalType: "address" },
      {
        name: "value",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "error",
    name: "ERC20InsufficientAllowance",
    inputs: [
      { name: "spender", type: "address", internalType: "address" },
      { name: "allowance", type: "uint256", internalType: "uint256" },
      { name: "needed", type: "uint256", internalType: "uint256" },
    ],
  },
  {
    type: "error",
    name: "ERC20InsufficientBalance",
    inputs: [
      { name: "sender", type: "address", internalType: "address" },
      { name: "balance", type: "uint256", internalType: "uint256" },
      { name: "needed", type: "uint256", internalType: "uint256" },
    ],
  },
  {
    type: "error",
    name: "ERC20InvalidApprover",
    inputs: [{ name: "approver", type: "address", internalType: "address" }],
  },
  {
    type: "error",
    name: "ERC20InvalidReceiver",
    inputs: [{ name: "receiver", type: "address", internalType: "address" }],
  },
  {
    type: "error",
    name: "ERC20InvalidSender",
    inputs: [{ name: "sender", type: "address", internalType: "address" }],
  },
  {
    type: "error",
    name: "ERC20InvalidSpender",
    inputs: [{ name: "spender", type: "address", internalType: "address" }],
  },
];
