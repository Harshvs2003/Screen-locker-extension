document.getElementById('lockBtn').addEventListener('click', lockScreen);
document.getElementById('unlockBtn').addEventListener('click', unlockScreen);

function lockScreen() {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const tabId = tabs[0].id;
    chrome.tabs.sendMessage(tabId, { action: 'lock' });
  });
  document.getElementById('lockBtn').disabled = true;
  document.getElementById('unlockBtn').disabled = false;
}

function unlockScreen() {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const tabId = tabs[0].id;
    chrome.tabs.sendMessage(tabId, { action: 'unlock' });
  });
  document.getElementById('lockBtn').disabled = false;
  document.getElementById('unlockBtn').disabled = true;
}

chrome.runtime.onMessage.addListener((message) => {
  if (message.action === 'unlocked') {
    document.getElementById('lockBtn').disabled = false;
    document.getElementById('unlockBtn').disabled = true;
  } else if (message.action === 'locked') {
    document.getElementById('lockBtn').disabled = true;
    document.getElementById('unlockBtn').disabled = false;
  }
});