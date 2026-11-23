document.getElementById("generateBtn").addEventListener("click", async () => {
  const input = document.getElementById("inputText").value;
  const statusMsg = document.getElementById("statusMsg");
  const manualCopyBox = document.getElementById("manualCopyBox");
  const outputText = document.getElementById("outputText");

  if (!input.includes("readmore")) {
    statusMsg.style.color = "#ff6b6b";
    statusMsg.textContent = "Add the word 'readmore' where you want the break.";
    manualCopyBox.style.display = "none";
    return;
  }

  const more = String.fromCharCode(8206);
  const readMore = more.repeat(4001);
  const finalMessage = input.replaceAll('readmore', readMore);

  outputText.value = finalMessage;
  manualCopyBox.style.display = "block";

  try {
    await navigator.clipboard.writeText(finalMessage);
    statusMsg.style.color = "#25d366";
    statusMsg.textContent = "Copied! Paste it in WhatsApp and send.";
  } catch (e) {
    statusMsg.style.color = "orange";
    statusMsg.textContent = "Copy it manually from the box below.";
  }
})
