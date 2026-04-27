// Hardened Azure Virtual Network Module
targetScope = 'resourceGroup'

@description('The name of the Virtual Network.')
param vnetName string

@description('The location for all resources.')
param location string = resourceGroup().location

@description('The address space for the VNet.')
param addressPrefix string = '10.0.0.0/16'

@description('Subnet configurations.')
param subnets array = [
  {
    name: 'snet-app'
    addressPrefix: '10.0.1.0/24'
  }
  {
    name: 'snet-db'
    addressPrefix: '10.0.2.0/24'
  }
]

@description('Standard Tags for the resource.')
param tags object = {
  Environment: 'Production'
  ManagedBy: 'Bicep'
}

resource vnet 'Microsoft.Network/virtualNetworks@2023-01-01' = {
  name: vnetName
  location: location
  tags: tags
  properties: {
    addressSpace: {
      addressPrefixes: [
        addressPrefix
      ]
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
output subnetNames array = [for subnet in subnets: subnet.name]
