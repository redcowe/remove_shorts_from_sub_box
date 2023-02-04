chrome.tabs.onUpdated.addListener((tabId, info) => {
  if (info.status = 'complete') {
    chrome.tabs.sendMessage(tabId, {
      tabId: tabId,
      test: true
  })
  };
})