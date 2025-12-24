function humanizeText() {
    const input = document.getElementById('inputText').value;
    const output = document.getElementById('outputText');
    const btn = document.getElementById('humanizeBtn');

    if (input.trim().length < 10) {
        alert("Ju lutem shkruani një tekst më të gjatë.");
        return;
    }

    // Efekti i loading
    btn.innerHTML = '<span class="spinner-border spinner-border-sm"></span> Processing...';
    btn.disabled = true;

    setTimeout(() => {
        // Logjika e thjeshtë e simulimit (Këtu mund të shtohet API më vonë)
        let text = input.replace(/dhe/g, "si dhe")
                         .replace(/shumë/g, "mjaft")
                         .replace(/sepse/g, "pasi që");
        
        output.value = text + "\n\n--- Refined by HumanizeAI ---";
        btn.innerHTML = 'Humanize Now';
        btn.disabled = false;
    }, 1500);
}

function copyText() {
    const output = document.getElementById('outputText');
    const copyBtn = document.getElementById('copyBtn');
    
    if (output.value === "") return;

    navigator.clipboard.writeText(output.value);
    
    const originalText = copyBtn.innerHTML;
    copyBtn.innerHTML = "Copied! ✅";
    copyBtn.classList.replace('btn-light', 'btn-success');
    
    setTimeout(() => {
        copyBtn.innerHTML = originalText;
        copyBtn.classList.replace('btn-success', 'btn-light');
    }, 2000);
}

function clearText() {
    document.getElementById('inputText').value = "";
    document.getElementById('outputText').value = "";
    document.getElementById('inputWordCount').innerText = "Words: 0";
}

// Numëruesi i fjalëve në kohë reale
document.getElementById('inputText').addEventListener('input', function() {
    const words = this.value.trim().split(/\s+/).filter(x => x.length > 0).length;
    document.getElementById('inputWordCount').innerText = "Words: " + words;
});