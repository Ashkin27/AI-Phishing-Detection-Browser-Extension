function calculateRisk(url, pageText) {

    let score = 0;
    let reasons = [];

    // URL keywords
    const urlKeywords = [
        "login",
        "verify",
        "secure",
        "bank",
        "account",
        "signin",
        "password"
    ];
    
    urlKeywords.forEach(word => {
        if (url.toLowerCase().includes(word)) {
            score += 15;
            reasons.push(`URL contains "${word}"`);
        }
    });

    // Page content keywords
    const pageKeywords = [
        "verify your account",
        "confirm identity",
        "update payment",
        "security alert",
        "login",
        "password",
        "bank"
    ];

    pageKeywords.forEach(word => {
        if (pageText.toLowerCase().includes(word)) {
            score += 10;
            reasons.push(`Page contains "${word}"`);
        }
    });

    // IP address
    const ipRegex = /\b\d{1,3}(\.\d{1,3}){3}\b/;

    if (ipRegex.test(url)) {
        score += 40;
        reasons.push("IP address detected");
    }

    return { score, reasons };
}

chrome.tabs.query({ active: true, currentWindow: true }, async function(tabs){

    const tab = tabs[0];

    document.getElementById("url").textContent = tab.url;

    chrome.scripting.executeScript(
    {
        target:{tabId:tab.id},
        func:()=>document.body.innerText
    },
    (result)=>{

        const pageText=result[0].result;

        const analysis=calculateRisk(tab.url,pageText);

        let status="✅ Safe";

        if(analysis.score>=60)
            status="🚨 High Risk";
        else if(analysis.score>=25)
            status="⚠ Suspicious";

        document.getElementById("risk").innerHTML=`

        <b>Risk Score:</b> ${analysis.score}<br>

        <b>Status:</b> ${status}<br><br>

        <b>Reasons</b><br>

        ${analysis.reasons.join("<br>")}

        `;

    });

});
