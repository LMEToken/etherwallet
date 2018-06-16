'use strict';
var nodes = function() {}
nodes.customNode = require('./nodeHelpers/customNode');
nodes.infuraNode = require('./nodeHelpers/infura');
nodes.metamaskNode = require('./nodeHelpers/metamask');
nodes.nodeTypes = {
    ETZ: "ETZ",
    Custom: "CUSTOM ETH"
};
nodes.ensNodeTypes = [];
nodes.domainsaleNodeTypes = [];
nodes.customNodeObj = {
    'name': 'CUS',
    'blockExplorerTX': '',
    'blockExplorerAddr': '',
    'type': nodes.nodeTypes.Custom,
    'eip155': false,
    'chainId': '',
    'tokenList': require('./tokens/etzTokens.json'),
    'abiList': [],
    'service': 'Custom',
    'lib': null
};
nodes.nodeList = {
    'etz_mainnet': {
        'name': 'ETZ',
        'blockExplorerTX': 'https://explorer.etherzero.org/tx/[[txHash]]',
        'blockExplorerAddr': 'https://explorer.etherzero.org/addr/[[address]]',
        'type': nodes.nodeTypes.ETZ,
        'eip155': true,
        'chainId': 88,
        'tokenList': require('./tokens/etzTokens.json'),
        'abiList': [],
        'service': 'etherzero.org',
        'lib': new nodes.customNode('https://rpc.etherzero.org', '')
    }
};


nodes.ethPrice = require('./nodeHelpers/ethPrice');
module.exports = nodes;
