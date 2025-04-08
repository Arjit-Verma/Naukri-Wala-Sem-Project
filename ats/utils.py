from pinecone import Pinecone
import os
from dotenv import load_dotenv

load_dotenv()

pinecone_api_key = os.environ.get("PINECONE_API_KEY")
pinecone_environment = os.environ.get("PINECONE_ENVIRONMENT")

pc=Pinecone(api_key=pinecone_api_key)

index_name = "resume-index"

def pinecone_init():
    if index_name not in pc.list_indexes().names():
        index_model = pc.create_index_for_model(
        name=index_name,
        cloud="aws",
        region=pinecone_environment,
        embed={
            "model":"multilingual-e5-large",
            "field_map":{"text": "chunk_text"}
        })

        return index_model
    else:
        print(f"Index {index_name} already exists.")
        return pc.Index(index_name)

index_model=pinecone_init()

index=pc.Index(host=os.environ.get("PINECONE_HOST") , index_name=index_name)

index.upsert_records(
    "user1",
    [
        {
            "_id": "rec1",
            "chunk_text": "Built an interpreter for Brainfck esoteric language in c++",
            "category": "Project", 
        },
        {
            "_id": "rec2",
            "chunk_text": "Top 2000 rank in IICPC 2025",
            "category": "Achievement",
        },
        {
            "_id": "rec3",
            "chunk_text": "Built a notes app in Flutter with authentication and cloud storage using Firebase",
            "category": "Project",
        },
    ]
) 

