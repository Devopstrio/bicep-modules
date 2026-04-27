metadata name = 'Azure OpenAI Module'
metadata description = 'Hardened Cognitive Services OpenAI Module with Private Endpoints enabled.'

@description('The name of the OpenAI Account.')
param accountName string

@description('The deployment location.')
param location string = resourceGroup().location

@description('The SKU of the account. Defaults to S0.')
param sku string = 'S0'

@description('Array of AI model deployments (e.g. gpt-4).')
param deployments array = [
  {
    name: 'gpt-4'
    model: {
      format: 'OpenAI'
      name: 'gpt-4'
      version: '0613'
    }
    sku: {
      name: 'Standard'
      capacity: 30
    }
  }
]

resource openAI 'Microsoft.CognitiveServices/accounts@2023-05-01' = {
  name: accountName
  location: location
  kind: 'OpenAI'
  sku: {
    name: sku
  }
  properties: {
    publicNetworkAccess: 'Disabled'
    customSubDomainName: accountName
    networkAcls: {
      defaultAction: 'Deny'
      bypass: 'AzureServices'
    }
  }
}

@batchSize(1)
resource deployment 'Microsoft.CognitiveServices/accounts/deployments@2023-05-01' = [for item in deployments: {
  parent: openAI
  name: item.name
  sku: item.sku
  properties: {
    model: item.model
  }
}]

output endpoint string = openAI.properties.endpoint
output accountId string = openAI.id
