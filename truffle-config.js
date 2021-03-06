const HDWalletProvider = require("truffle-hdwallet-provider");
const fs = require("fs");

module.exports = {
	// See <http://truffleframework.com/docs/advanced/configuration>
	// to customize your Truffle configuration!
	networks: {
		development: {
			host: "127.0.0.1", // Localhost (default: none)
			port: 7545, // Standard Ethereum port (default: none)
			network_id: "5777", // Any network (default: none)
			from: 0x2fdd2f9b85a1f157be56aeb52d0ef2735d9fd835,
			gas: 6721975,
			gasPrice: 20000000000,
		},
	},
	live: {
		host: "178.25.19.88", // Random IP for example purposes (do not use)
		port: 80,
		network_id: 1, // Ethereum public network
		// optional config values:
		// gas                  -
		// gasPrice             - use gas and gasPrice if creating type 0 transactions
		// maxFeePerGas         -
		// maxPriorityFeePerGas - use maxFeePerGas and maxPriorityFeePerGas if creating type 2 transactions (https://eips.ethereum.org/EIPS/eip-1559)
		// from - default address to use for any transaction Truffle makes during migrations
		// provider - web3 provider instance Truffle should use to talk to the Ethereum network.
		//          - function that returns a web3 provider instance (see below.)
		//          - if specified, host and port are ignored.
		// skipDryRun: - true if you don't want to test run the migration locally before the actual migration (default is false)
		// confirmations: - number of confirmations to wait between deployments (default: 0)
		// timeoutBlocks: - if a transaction is not mined, keep waiting for this number of blocks (default is 50)
		// deploymentPollingInterval: - duration between checks for completion of deployment transactions
		// disableConfirmationListener: - true to disable web3's confirmation listener
	},
	compilers: {
		solc: {
			version: "0.7.0",
		},
	},
};
