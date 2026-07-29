async function scanWebsite() {
    
    const status = document.getElementById("riskLevel");

    status.classList.add("loading");
    status.textContent = "🔄 Scanning...";

    document.getElementById("confidence").textContent = "Analysing website...";
    document.getElementById("summary").textContent = "";
    document.getElementById("ssl").textContent = "";
    document.getElementById("vt").textContent = "";

    try {

        const tabs = await chrome.tabs.query({
            active: true,
            currentWindow: true     
        });

        const tab = tabs[0];

        document.getElementById("url").textContent = tab.url;

        chrome.scripting.executeScript(
        {
            target: { tabId: tab.id },
            func: () => document.body.innerText
        }, 
        async (scriptresult) => {

            try {

                if (chrome.runtime.lastError) {
                    console.error(chrome.runtime.lastError);
                    document.getElementById("summary").textContent =
                        chrome.runtime.lastError.message;
                    return;
                }   

                const pageText = scriptresult[0].result.substring(0, 2000);

                const response = await fetch("http://127.0.0.1:5000/analyze", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        url: tab.url,
                        text: pageText
                    })
                });

                const data = await response.json();

console.log(data);

document.getElementById("summary").textContent = data.analysis;

document.getElementById("ssl").innerHTML = `
<div>🌐 <strong>HTTPS:</strong> ${data.ssl.https ? "✅ Yes" : "❌ No"}</div>
<div>🔒 <strong>Certificate:</strong> ${data.ssl.valid ? "✅ Valid" : "❌ Invalid"}</div>
<div>🏢 <strong>Issuer:</strong> ${data.ssl.issuer}</div>
`;

if (data.virustotal) {
 document.getElementById("vt").innerHTML = `
<div>🟢 Harmless: <strong>${data.virustotal.harmless}</strong></div>
<div>🟡 Suspicious: <strong>${data.virustotal.suspicious}</strong></div>
<div>🔴 Malicious: <strong>${data.virustotal.malicious}</strong></div>
`;
}
document.getElementById("domainInfo").innerHTML = `
<div>🌐 <strong>Domain:</strong> ${data.domain.domain}</div>
<div>🏢 <strong>Registrar:</strong> ${data.domain.registrar}</div>
<div>📅 <strong>Created:</strong> ${data.domain.creation}</div>
<div>⌛ <strong>Age:</strong> ${data.domain.age_days} days</div>
`;

status.classList.remove("loading");

const match = data.analysis.match(/Risk Level:\s*(Low|Medium|High)/i);

if (match) {

    const risk = match[1].toLowerCase();

    if (risk === "low") {
        document.getElementById("riskLevel").textContent = "🟢 SAFE";
    }
    else if (risk === "medium") {
        document.getElementById("riskLevel").textContent = "🟡 SUSPICIOUS";
    }
    else if (risk === "high") {
        document.getElementById("riskLevel").textContent = "🔴 PHISHING";
    }

}
else {

    document.getElementById("riskLevel").textContent = "⚪ UNKNOWN";

}
const confidenceMatch = data.analysis.match(/Confidence:\s*(.*)/i);

if (confidenceMatch) {
    document.getElementById("confidence").textContent =
        "Confidence: " + confidenceMatch[1].trim();
} else {
    document.getElementById("confidence").textContent =
        "AI analysis completed";
}
}
catch (err) {

    status.classList.remove("loading");

    console.error(err);
    document.getElementById("summary").textContent = err.message;
}

});

}
catch (err) {

    status.classList.remove("loading");

    console.error(err);
    document.getElementById("summary").textContent = err.message;
}
}

document.getElementById("scanButton")
.addEventListener("click", scanWebsite);
