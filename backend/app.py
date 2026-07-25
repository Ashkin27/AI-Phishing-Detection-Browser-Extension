from flask import Flask, request, jsonify
from flask_cors import CORS
import ollama
from virustotal import check_url
from ssl_checker import check_ssl
from whois_checker import check_domain

app = Flask(__name__)
CORS(app)

@app.route("/analyze", methods=["POST"])
def analyze():

    data = request.json
    url = data.get("url", "")
    vt = check_url(url)
    ssl_info = check_ssl(url)
    page_text = data.get("text", "")
    domain_info = check_domain(url)

    prompt = f"""
You are an expert cybersecurity analyst.

Analyse the following website.

URL:
{url}

Page Content:
{page_text}

Instructions:

1. Check whether the URL looks suspicious.
2. Check the page content.
3. If the website is a well-known legitimate site (Google, GitHub, Microsoft, Amazon, etc.), do NOT flag it as phishing unless there is strong evidence.
4. Respond ONLY in this format:

Risk Level:
Reason:
Confidence:
Recommendations:
"""

    response = ollama.chat(
        model="llama3",
        messages=[
            {
                "role":"user",
                "content":prompt
            }
        ]
    )

    return jsonify({
        "analysis":response["message"]["content"],
        "virustotal": vt,
        "ssl": ssl_info,
        "domain": domain_info
    })

if __name__=="__main__":
    app.run(debug=True)