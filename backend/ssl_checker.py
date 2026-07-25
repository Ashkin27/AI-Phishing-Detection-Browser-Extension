import ssl
import socket
from urllib.parse import urlparse

def check_ssl(url):
    try:
        hostname = urlparse(url).hostname

        context = ssl.create_default_context()

        with socket.create_connection((hostname, 443), timeout=5) as sock:
            with context.wrap_socket(sock, server_hostname=hostname) as secure_sock:
                cert = secure_sock.getpeercert()

        return {
            "https": True,
            "valid": True,
            "issuer": dict(x[0] for x in cert["issuer"])["organizationName"]
        }

    except Exception:
        return {
            "https": False,
            "valid": False,
            "issuer": "Unknown"
        }