'use strict';
var nodes = function() {}
nodes.customNode = require('./nodeHelpers/customNode');
nodes.infuraNode = require('./nodeHelpers/infura');
nodes.metamaskNode = require('./nodeHelpers/metamask');
nodes.nodeTypes = {
    ETZ: "ETZ",
    Custom: "ETZ"
};
nodes.ensNodeTypes = [];
nodes.domainsaleNodeTypes = [];
nodes.customNodeObj = {
    'name': 'CUS',
    'blockExplorerTX': '',
    'blockExplorerAddr': '',
    'type': nodes.nodeTypes.Custom,
    'eip155': false,
    'chainId': 90,
    'tokenList': require('./tokens/etzTokens.json'),
    'abiList': require('./abiDefinitions/etzAbi.json'),
    'service': 'Custom',
    'lib': null
};
nodes.nodeList = {
    'etz_mainnet': {
        'name': 'ETZ',
        'blockExplorerTX': 'https://etzscan.com/tx/[[txHash]]',
        'blockExplorerAddr': 'https://etzscan.com/addr/[[address]]',
        'type': nodes.nodeTypes.ETZ,
        'eip155': true,
        'chainId': 90,
        'tokenList': require('./tokens/etzTokens.json'),
        'abiList': require('./abiDefinitions/etzAbi.json'),
        'service': 'etzrpc.org',
        'lib': new nodes.customNode('https://etzrpc.org', '')
    },
};


nodes.ethPrice = require('./nodeHelpers/ethPrice');
module.exports = nodes;
