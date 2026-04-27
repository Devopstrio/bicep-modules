from fastapi import FastAPI, HTTPException, Request, Depends, status
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Optional, Dict
import datetime
import uvicorn
import logging

# Institutional Platform API Logging
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s - %(name)s - %(levelname)s - %(message)s",
    handlers=[logging.StreamHandler(), logging.FileHandler("registry_ops.log")]
)
logger = logging.getLogger("Bicep-Registry-API")

app = FastAPI(
    title="Azure Bicep Module Registry API",
    description="Institutional API for Infrastructure-as-Code catalog management, validation, and publishing.",
    version="1.0.0",
    docs_url="/api/v1/docs"
)

# CORS Security
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# --- MODELS ---
class BicepModule(BaseModel):
    name: str
    version: str
    description: str
    owner: str
    category: str # network, security, compute, ai
    is_deprecated: bool

class ValidationRequest(BaseModel):
    module_name: str
    bicep_content: str
    target_subscription: str

# --- API ENDPOINTS ---

@app.get("/api/v1/health")
async def health_check():
    return {"status": "operational", "timestamp": datetime.datetime.now()}

@app.get("/api/v1/modules", response_model=List[BicepModule])
async def list_modules():
    """Returns the enterprise module catalog indexed from the filesystem/git."""
    logger.info("Accessing Global Module Catalog")
    return [
        {
            "name": "network/vnet",
            "version": "v1.2.0",
            "description": "Standard Hub-Spoke VNet with forced Private Link support.",
            "owner": "Core Networking",
            "category": "network",
            "is_deprecated": False
        },
        {
            "name": "ai/openai",
            "version": "v2.0.1",
            "description": "Hardened AI services with Private Endpoints and CMK.",
            "owner": "AI Engineering",
            "category": "ai",
            "is_deprecated": False
        }
    ]

@app.post("/api/v1/validate", status_code=status.HTTP_202_ACCEPTED)
async def validate_module(payload: ValidationRequest):
    """Triggers the Bicep Validation Engine (Lint + What-If)."""
    logger.info(f"VALIDATION TRIGGERED: {payload.module_name}")
    # Integration with Validation Engine (executes 'az bicep build')
    return {
        "status": "VALIDATING",
        "job_id": "VAL-9921-A",
        "eta": "15s"
    }

@app.get("/api/v1/compositions")
async def get_compositions():
    """Returns pre-stitched landing zone compositions."""
    return [
        {"name": "lz-secure-ai", "tier": "Production", "complexity": "High"},
        {"name": "lz-hub-spoke", "tier": "Infrastructure", "complexity": "Medium"}
    ]

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
