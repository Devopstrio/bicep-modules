metadata name = 'VNet Module'
metadata description = 'Secure Enterprise-grade Virtual Network Module with Hub-Spoke support.'
metadata owner = 'Devopstrio Infrastructure'

@description('The name of the Virtual Network.')
param vnetName string

@description('The Azure region where the VNet will be deployed.')
param location string = resourceGroup().location

@description('Address space for the VNet in CIDR notation.')
param addressSpace array = ['10.0.0.0/16']

@description('Array of subnet objects with name and addressPrefix.')
param subnets array = [
  {
    name: 'snet-web'
    addressPrefix: '10.0.0.0/24'
  }
  {
    name: 'snet-db'
    addressPrefix: '10.0.1.0/24'
  }
]

resource vnet 'Microsoft.Network/virtualNetworks@2023-04-01' = {
  name: vnetName
  location: location
  tags: {
    Environment: 'Production'
    ManagedBy: 'Bicep-Registry'
  }
  properties: {
    addressSpace: {
      addressPrefixes: addressSpace
    }
    subnets: [for subnet in subnets: {
      name: subnet.name
      properties: {
        addressPrefix: subnet.addressPrefix
        privateEndpointNetworkPolicies: 'Disabled'
        privateLinkServiceNetworkPolicies: 'Enabled'
      }
    }]
  }
}

output vnetId string = vnet.id
output vnetName string = vnet.name
output subnets array = vnet.properties.subnets
