from fastapi import FastAPI, HTTPException
from typing import List, Dict

app = FastAPI(title="Bicep Module Metadata Registry")

# Simple metadata store - in production this would be backed by DB
MODULES_DB = [
    {"name": "vnet", "version": "1.0.0", "category": "networking", "author": "Platform Team"},
    {"name": "key-vault", "version": "2.1.0", "category": "security", "author": "SecOps Team"},
    {"name": "aks", "version": "0.9.0-beta", "category": "compute", "author": "Platform Team"}
]

@app.get("/api/v1/modules")
async def list_modules(category: str = None):
    if category:
        return [m for m in MODULES_DB if m["category"] == category]
    return MODULES_DB

@app.get("/api/v1/modules/{name}/docs")
async def get_module_docs(name: str):
    # Simulated doc fetching
    return {
        "module": name,
        "readme": f"Documentation for {name} module. Usage: br:registry.io/bicep/{name}:v1",
        "parameters": {
            "location": "Azure Region",
            "tags": "Resource Tags"
        }
    }
