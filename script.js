const generateBtn = document.getElementById("generateBtn") as HTMLButtonElement;
const inputEl = document.getElementById("inputText") as HTMLInputElement;
const statusMsg = document.getElementById("statusMsg") as HTMLElement;
const manualCopyBox = document.getElementById("manualCopyBox") as HTMLElement;
const outputText = document.getElementById("outputText") as HTMLInputElement;

generateBtn.addEventListener("click", async (): Promise<void> => {
  const input: string = inputEl.value;

  if (!input.includes("readmore")) {
    statusMsg.style.color = "#ff6b6b";
    statusMsg.textContent = "Add the word 'readmore' where you want the break.";
    manualCopyBox.style.display = "none";
    return;
  }

  const more: string = String.fromCharCode(8206);
  const readMore: string = more.repeat(4001);
  const finalMessage: string = input.replaceAll("readmore", readMore);

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
});