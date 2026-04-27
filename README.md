<div align="center">

<img src="https://raw.githubusercontent.com/Devopstrio/.github/main/assets/Browser_logo.png" height="120" alt="Devopstrio Logo" />

<h1>Azure Bicep Modules</h1>

<p><strong>The Enterprise Flagship Platform for Reusable Infrastructure-as-Code, Hardened Landing Zones, and Governed Blueprints</strong></p>

[![Standard: ALZ--Aligned](https://img.shields.io/badge/Standard-ALZ--Aligned-blue.svg?style=for-the-badge&labelColor=000000)]()
[![Status: Production--Ready](https://img.shields.io/badge/Status-Production--Ready-indigo.svg?style=for-the-badge&labelColor=000000)]()
[![Security: Zero--Trust](https://img.shields.io/badge/Security-Zero--Trust-green.svg?style=for-the-badge&labelColor=000000)]()
[![Type: Bicep--Registry](https://img.shields.io/badge/Type-Bicep--Registry-0078d4?style=for-the-badge&logo=microsoftazure&labelColor=000000)]()

<br/>

> **"Code once, deploy everywhere—securely."** 
> Azure Bicep Modules is an institutional-grade IaC factory designed to provide platform engineering teams with a library of pre-validated, secure, and versioned cloud building blocks.

</div>

---

## 🏛️ Executive Summary

The **Azure Bicep Modules** platform is the definitive destination for enterprise-ready cloud architecture. By moving from ad-hoc scripts to a centralized, semantic-versioned module registry, organizations can achieve 100% deployment consistency while enforcing strict governance-as-code from the first day of development.

### 🚀 Strategic Business Outcomes
- **Accelerate Time-to-Value**: Deploy complex AI and Data platforms in minutes using pre-stitched "Compositions."
- **Institutional Governance**: Automatically enforce naming conventions, tagging, and private-link networking at the source.
- **Reduce Operational Risk**: Every module undergoes automated "What-If" analysis and security linting before being published.
- **Unified Cloud Footprint**: Achieve perfect standardization across thousands of subscriptions using a single source of truth for IaC.

---

## 🏗️ High-Level Architecture

The platform centers on a **Private Module Registry (ACR)** orchestrated by a metadata-rich Control Plane.

```mermaid
graph TD
    subgraph "Consumer Tier"
        Eng[Platform Engineers]
        Web[Registry Portal]
        CLI[Bicep CLI]
    end

    subgraph "Validation & Publishing"
        Val[Validation Engine]
        Pub[Publishing Engine]
        Lint[Bicep Linter]
    end

    subgraph "Persistence & Artifacts"
        ACR[(Private Registry: ACR)]
        PG[(Metadata DB: PostgreSQL)]
        Lake[Documentation Storage]
    end

    Eng -->|Push| Val
    Val --> Lint
    Val -->|Pass| Pub
    Pub --> ACR
    Pub --> PG
    Web --> PG
    CLI --> ACR
```

### 💉 Module Lifecycle (Dev to Pub)

```mermaid
sequenceDiagram
    participant Dev as Cloud Engineer
    participant Git as GitHub / GitLab
    participant CI as Validation Engine
    participant Reg as Private Registry (ACR)
    participant Cat as Module Catalog

    Dev->>Git: Push network/vnet.bicep
    Git->>CI: Trigger Build & Lint
    CI->>CI: az bicep build (Verification)
    CI->>CI: checkov / arm-ttk (Security)
    CI->>Reg: az bicep publish (v1.2.0)
    CI->>Cat: Update Metadata (v1.2.0 is Stable)
    Cat-->>Dev: Module Live in Portal
```

---

## 📐 Intellectual Asset Domains

| Domain | Focus | Key Module |
|:---:|:---|:---|
| **Networking** | Connectivity & Routing | Hub-Spoke VNet, vWAN |
| **Security** | Identity & Protection | Key Vault, Managed ID |
| **Compute** | High-Density Platforms | AKS Cluster, Container Apps |
| **AI Platform** | GenAI Foundation | OpenAI, AI Search |
| **Data** | Persistence & Lakes | PostgreSQL, Cosmos DB |

---

## 📂 Repository Structure

```text
bicep-modules/
├── apps/
│   ├── portal/             # Next.js 14 Module Catalog Dashboard
│   ├── api/                # FastAPI Registry Gateway
│   ├── validation-engine/  # Bicep Lint & What-If Workers
│   └── publishing-engine/  # Semantic Versioning & ACR Push
├── modules/                # Reusable Bicep Source Code
│   ├── network/            # VNet, Subnet, Firewall
│   ├── security/           # KeyVault, ManagedID
│   ├── compute/            # AKS, AppService
│   └── ai/                 # OpenAI, AI Search
├── compositions/           # High-level Blueprints (App Landing Zones)
├── database/               # SQL schema for Module Metadata
├── terraform/              # Infra for the Registry itself
├── .github/workflows/      # Factory CI/CD Pipelines
└── README.md               # Flagship Product Documentation
```

---

## 🚀 Usage & Deployment Guide

### 1. Consuming a Module in your code
Reference the enterprise registry in your local Bicep files.

```bicep
module vnet 'br:acrbicepdtrio.azurecr.io/bicep/modules/network/vnet:v1.2.0' = {
  name: 'vnet-deploy'
  params: {
    vnetName: 'vnet-prod-uks'
    location: 'uksouth'
  }
}
```

### 2. Initializing the Registry Infrastructure
Provision the ACR and metadata databases using Terraform.

```bash
cd terraform
terraform init
terraform apply -var="registry_name=dtrio"
```

---

## 🛡️ Security & Supply Chain

```mermaid
graph LR
    Dev[Module Author] -->|Signed Commit| Git[Git Repo]
    Git -->|OIDC Auth| CI[GitHub Action]
    CI -->|Lint| Scan[Security Scan]
    Scan -->|Verify| ACR[Private Registry]
```

- **Identity**: OIDC-based authentication for publishing (No service principal keys).
- **Hardening**: Every module is audited against the **CIS Microsoft Azure Foundation Benchmark**.
- **Signing**: Support for signed Bicep artifacts to ensure provenance.

---

## 📈 Platform Monitoring

```mermaid
graph TD
    A[ACR Pulls] --> B[Log Analytics]
    B --> C[Grafana Dashboard]
    C --> D[Adoption Metrics]
    C --> E[Most Used Modules]
```

- **Dashboards**: Visualize which Business Units are using which module versions.
- **Alerting**: Immediate notification if a version is pulled after being marked as deprecated or insecure.

---

## 🤝 Support & Roadmap
- **Module Requests**: platform@devopstrio.com
- **Enterprise Status**: [Status Page](https://status.devopstrio.com)

<div align="center">

<img src="https://raw.githubusercontent.com/Devopstrio/.github/main/assets/Browser_logo.png" height="50" alt="Devopstrio Logo" />

**Building the future of enterprise infrastructure — one blueprint at a time.**

</div>
