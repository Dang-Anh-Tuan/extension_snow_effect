chrome.runtime.sendMessage(
  { action: 'GET_FROM_STORAGE', payload: { key: 'mode' } },
  (response) => {
    console.log(response)
  }
)
