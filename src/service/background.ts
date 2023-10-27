chrome.runtime.onMessage.addListener((message, _sender, sendResponse) => {
  if (message.action === 'GET_FROM_STORAGE') {
    if (chrome.storage) {
      chrome.storage.local.get(message.payload.key, (data) => {
        if (data[message.payload.key]) {
          const value = data[message.payload.key]
          sendResponse({ payload: value })
        }
        return true
      })
      return true
    }
    return true
  }
})
