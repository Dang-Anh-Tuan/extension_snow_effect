export async function sendMessage(action: string, payload: any) {
  try {
    if (chrome) {
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        const activeTab = tabs[0]

        if (activeTab && activeTab.id) {
          chrome.tabs.sendMessage(activeTab.id, {
            action: action,
            payload
          })
        }
      })
    }
  } catch (error) {
    console.log(error)
  }
}
