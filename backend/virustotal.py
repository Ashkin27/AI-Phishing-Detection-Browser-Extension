import base64
import requests
from config import VT_API_KEY

def check_url(url):

    url_id = base64.urlsafe_b64encode(url.encode()).decode().strip("=")

    headers = {
        "x-apikey": VT_API_KEY
    }

    response = requests.get(
        f"https://www.virustotal.com/api/v3/urls/{url_id}",
        headers=headers
    )

    if response.status_code != 200:
        return None

    stats = response.json()["data"]["attributes"]["last_analysis_stats"]

    return {
        "malicious": stats["malicious"],
        "suspicious": stats["suspicious"],
        "harmless": stats["harmless"]
    }