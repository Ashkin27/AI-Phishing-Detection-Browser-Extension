import whois
from urllib.parse import urlparse
from datetime import datetime, timezone


def check_domain(url):
    try:
        domain = urlparse(url).netloc.replace("www.", "")

        w = whois.whois(domain)

        creation = w.creation_date
        if isinstance(creation, list):
            creation = creation[0]

        age = "Unknown"

        if creation:
            if creation.tzinfo is not None:
                age = (datetime.now(timezone.utc) - creation).days
            else:
                age = (datetime.now() - creation).days
        return {
            "domain": domain,
            "registrar": w.registrar,
            "creation": str(creation),
            "age_days": age
        }

    except Exception as e:
        print("WHOIS ERROR:", e)
        return {
            "domain": "Unknown",
            "registrar": "Unknown",
            "creation": "Unknown",
            "age_days": "Unknown"
        }