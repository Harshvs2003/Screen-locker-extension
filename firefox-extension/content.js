// chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
//     if (message.action === 'lock') {
//       injectLockOverlay();
//     } else if (message.action === 'unlock') {
//       removeLockOverlay();
//     }
//   });
  
//   function injectLockOverlay() {
//     if (!document.getElementById('lock-overlay')) {
//       const overlay = document.createElement('div');
//       overlay.id = 'lock-overlay';
//       overlay.style.cssText = `
//         position: fixed;
//         top: 0;
//         left: 0;
//         width: 100%;
//         height: 100%;
//         background: rgba(0, 0, 0, 0.7);
//         z-index: 9999;
//         display: flex;
//         justify-content: center;
//         align-items: center;
//         color: white;
//         font-size: 24px;
//         font-family: Arial, sans-serif;
//       `;
//       overlay.innerText = 'Screen Locked';
  
//       const unlockButton = document.createElement('button');
//       unlockButton.id = 'unlock-overlay-btn';
//       unlockButton.innerText = 'Unlock';
//       unlockButton.style.cssText = `
//         position: fixed;
//         bottom: 20px;
//         right: 20px;
//         padding: 10px 20px;
//         background: #4CAF50;
//         color: white;
//         border: none;
//         border-radius: 5px;
//         cursor: pointer;
//         z-index: 10000;
//       `;
//       unlockButton.onclick = () => {
//         removeLockOverlay();
//         chrome.runtime.sendMessage({ action: 'unlocked' }); // Notify popup to update state
//       };
  
//       overlay.appendChild(unlockButton);
//       document.body.appendChild(overlay);
//     }
//   }
  
//   function removeLockOverlay() {
//     const overlay = document.getElementById('lock-overlay');
//     if (overlay) {
//       overlay.remove();
//     }
//   }



// let isLocked = false;

// chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
//   if (message.action === 'lock') {
//     if (!isLocked) {
//       injectLockOverlay();
//       isLocked = true;
//       chrome.runtime.sendMessage({ action: 'locked' });
//     }
//   } else if (message.action === 'unlock') {
//     if (isLocked) {
//       removeLockOverlay();
//       isLocked = false;
//       chrome.runtime.sendMessage({ action: 'unlocked' });
//     }
//   } else if (message.action === 'toggle') {
//     if (isLocked) {
//       removeLockOverlay();
//       isLocked = false;
//       chrome.runtime.sendMessage({ action: 'unlocked' });
//     } else {
//       injectLockOverlay();
//       isLocked = true;
//       chrome.runtime.sendMessage({ action: 'locked' });
//     }
//   }
// });

// function injectLockOverlay() {
//   if (!document.getElementById('lock-overlay')) {
//     const overlay = document.createElement('div');
//     overlay.id = 'lock-overlay';
//     overlay.style.cssText = `
//       position: fixed;
//       top: 0;
//       left: 0;
//       width: 100%;
//       height: 100%;
//     //   background: rgba(0, 0, 0, 0.7);
//       z-index: 9999;
//       display: flex;
//       justify-content: center;
//       align-items: center;
//       color: white;
//       font-size: 24px;
//       font-family: Arial, sans-serif;
//     `;
//     overlay.innerText = 'S';

//     const unlockButton = document.createElement('button');
//     unlockButton.id = 'unlock-overlay-btn';
//     unlockButton.innerText = 'Unlock';
//     unlockButton.style.cssText = `
//       position: fixed;
//       bottom: 20px;
//       right: 20px;
//       padding: 10px 20px;
//       background: #4CAF50;
//       color: white;
//       border: none;
//       border-radius: 5px;
//       cursor: pointer;
//       z-index: 10000;
//     `;
//     unlockButton.onclick = () => {
//       removeLockOverlay();
//       isLocked = false;
//       chrome.runtime.sendMessage({ action: 'unlocked' });
//     };

//     overlay.appendChild(unlockButton);
//     document.body.appendChild(overlay);
//   }
// }

// function removeLockOverlay() {
//   const overlay = document.getElementById('lock-overlay');
//   if (overlay) {
//     overlay.remove();
//   }
// }

let isLocked = false;

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'lock') {
    if (!isLocked) {
      injectLockOverlay();
      isLocked = true;
      chrome.runtime.sendMessage({ action: 'locked' });
    }
  } else if (message.action === 'unlock') {
    if (isLocked) {
      removeLockOverlay();
      isLocked = false;
      chrome.runtime.sendMessage({ action: 'unlocked' });
    }
  } else if (message.action === 'toggle') {
    if (isLocked) {
      removeLockOverlay();
      isLocked = false;
      chrome.runtime.sendMessage({ action: 'unlocked' });
    } else {
      injectLockOverlay();
      isLocked = true;
      chrome.runtime.sendMessage({ action: 'locked' });
    }
  }
});

function injectLockOverlay() {
  if (!document.getElementById('lock-overlay')) {
    // Blur the active element to ensure focus is removed from input fields
    if (document.activeElement) {
      document.activeElement.blur();
    }

    const overlay = document.createElement('div');
    overlay.id = 'lock-overlay';
    overlay.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    //   background: rgba(0, 0, 0, 0.7);
      z-index: 9999;
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;
      font-size: 24px;
      font-family: Arial, sans-serif;
    `;
    overlay.innerText = '';

    const unlockButton = document.createElement('button');
    unlockButton.id = 'unlock-overlay-btn';
    unlockButton.innerText = 'Unlock';
    unlockButton.style.cssText = `
      position: fixed;
      bottom: 20px;
      right: 20px;
      padding: 10px 20px;
      background:rgb(0, 0, 0);
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      z-index: 10000;
    `;
    unlockButton.onclick = () => {
      removeLockOverlay();
      isLocked = false;
      chrome.runtime.sendMessage({ action: 'unlocked' });
    };

    overlay.appendChild(unlockButton);
    document.body.appendChild(overlay);
  }
}

function removeLockOverlay() {
  const overlay = document.getElementById('lock-overlay');
  if (overlay) {
    overlay.remove();
  }
}