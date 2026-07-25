function calculateRisk(url) {
    let score = 0;
    let reasons = [];

    // Suspicious keywords
    const keywords = [
        "login",
        "verify",
        "secure",
        "update",
        "bank",
        "account",
        "signin",
        "password"
    ];

    keywords.forEach(word => {
        if (url.toLowerCase().includes(word)) {
            score += 15;
            reasons.push(`Contains keyword: ${word}`);
        }
    });

    // IP Address detection
    const ipRegex = /\b\d{1,3}(\.\d{1,3}){3}\b/;

    if (ipRegex.test(url)) {
        score += 40;
        reasons.push("Uses an IP address");
    }

    // Too many subdomains
    const hostname = new URL(url).hostname;
    const parts = hostname.split(".");

    if (parts.length > 3) {
        score += 20;
        reasons.push("Too many subdomains");
    }

    return {
        score,
        reasons
    };
}

chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {

    const currentURL = tabs[0].url;

    document.getElementById("url").textContent = currentURL;

    const result = calculateRisk(currentURL);

    let status = "✅ Safe";

    if (result.score >= 50)
        status = "🚨 High Risk";
    else if (result.score >= 20)
        status = "⚠ Suspicious";

    document.getElementById("risk").innerHTML =
        `
        <strong>Risk Score:</strong> ${result.score}<br>
        <strong>Status:</strong> ${status}<br><br>
        <strong>Reasons:</strong><br>
        ${result.reasons.join("<br>")}
        `;
});