chrome.tabs.onUpdated.addListener((tabId, tab, changeInfo) => {
    if (tab.url.indexOf("https://youtube.com/feed/subscriptions") && changeInfo.url === undefined) {
      chrome.tabs.executeScript(tabId, {file: "contentScript.js"})
    };
  });