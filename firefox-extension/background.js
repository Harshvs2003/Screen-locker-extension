// chrome.commands.onCommand.addListener((command) => {
//     if (command === 'lock-screen') {
//       chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
//         const tabId = tabs[0].id;
//         chrome.scripting.executeScript({
//           target: { tabId: tabId },
//           files: ['content.js']
//         }, () => {
//           chrome.tabs.sendMessage(tabId, { action: 'lock' });
//         });
//       });
//     }
//   });

// chrome.commands.onCommand.addListener((command) => {
//     if (command === 'lock-screen') {
//       chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
//         const tabId = tabs[0].id;
//         chrome.scripting.executeScript({
//           target: { tabId: tabId },
//           files: ['content.js']
//         }, () => {
//           // Send a toggle message to the content script
//           chrome.tabs.sendMessage(tabId, { action: 'toggle' });
//         });
//       });
//     }
//   });

chrome.commands.onCommand.addListener((command) => {
    if (command === 'lock-screen') {
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        const tabId = tabs[0].id;
        chrome.tabs.sendMessage(tabId, { action: 'toggle' });
      });
    }
  });