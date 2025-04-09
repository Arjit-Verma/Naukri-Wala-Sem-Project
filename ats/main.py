from pinecone import Pinecone
import pdfplumber
from groq import Groq
import os
from dotenv import load_dotenv

load_dotenv()

def get_from_embeddings(jd_text):

    pinecone_api_key = os.environ.get("PINECONE_API_KEY")    
    pc = Pinecone(api_key=pinecone_api_key)
    index = pc.Index("resume-index", host=os.environ.get("PINECONE_HOST"))

    query_embedding = pc.inference.embed(
    model="multilingual-e5-large",
    inputs=[jd_text],
    parameters={
        "input_type": "query"
    })
    
    query_result = index.query(
        namespace="user1",
        top_k=2,
        vector=query_embedding[0].values,
        include_metadata=True
    )

    relevant_data = "\n".join(
        f"- {item['metadata']['chunk_text']} ({item['metadata']['category']})"
        for item in query_result["matches"]
    )
    return relevant_data

def extract_text(pdf_path):
    text = ""
    with pdfplumber.open(pdf_path) as pdf:
        for page in pdf.pages:
            text += page.extract_text() + "\n"
    return text.strip()

def analyze(resume_path,jd_path):
    resume_text = extract_text(resume_path)
    client = Groq(api_key=os.environ.get("GROQ_API_KEY"))

    prompt="Give an ATS Score/match score for Resume out of 100. Do not give a complete new resume, just give bullet points on how do I improve my resume? Please dont give any additional text. Output" \
        "in following format. First line just the ATS Score numerical value out of 100(Just the value). Next line onwards the bullet points."

    if jd_path:
        jd_text = extract_text(jd_path)
        prompt+="Here is the job description: " + jd_text + "\n\n"
        prompt+="Here is my resume: " + resume_text +"\n\n"
        prompt+="Please analyze my resume and give a match score out of 100 for the job description.\n\n"
        prompt+="Also, please provide feedback on how to improve my resume in bullet points. Follow the format throughout\n\n"

        choice="n"

        if choice.lower() == "y":
            relevant_data = get_from_embeddings(jd_text)
            prompt+="Here are some relevant projects and achievements that I can add to my resume to improve its match with JD:\n\n"
            prompt+=relevant_data + "\n\n"

    else:
        prompt+="Here is my resume: " + resume_text

    chat_completion = client.chat.completions.create(
        messages=[
            {
                "role": "user",
                "content": prompt,
            }
        ],
        model="llama-3.3-70b-versatile",
    )

    print(chat_completion.choices[0].message.content)

def main():
    try:
        with open("paths.txt", "r") as file:
            resume_path = file.read().strip()  # Read and remove any extra whitespace
            # print(f"Resume path read from paths.txt: {resume_path}")
    except FileNotFoundError:
        print("Error: paths.txt not found.")
        return
    except Exception as e:
        print(f"Error reading paths.txt: {e}")
        return

    # print("Enter the path to the Job Description (PDF File) or press Enter to skip:")
    jd_path = "uploads\JD.pdf"

    if jd_path.strip() == "":
        jd_path = None

    analyze(resume_path,jd_path)


if __name__ == "__main__":
    main()