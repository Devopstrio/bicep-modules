// Enterprise Hardened Key Vault Module
targetScope = 'resourceGroup'

param vaultName string
param location string = resourceGroup().location
param tags object = {}
param skuName string = 'premium'
param tenantId string = subscription().tenantId

resource kv 'Microsoft.KeyVault/vaults@2023-02-01' = {
  name: vaultName
  location: location
  tags: tags
  properties: {
    sku: {
      family: 'A'
      name: skuName
    }
    tenantId: tenantId
    enableRbacAuthorization: true
    enableSoftDelete: true
    softDeleteRetentionInDays: 90
    networkAcls: {
      defaultAction: 'Deny'
      bypass: 'AzureServices'
    }
  }
}

output vaultUri string = kv.properties.vaultUri
output vaultId string = kv.id
