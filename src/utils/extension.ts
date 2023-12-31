export function getFromStorage(key: string) {
  return new Promise((resolve, reject) => {
    if (chrome) {
      chrome.storage.local.get([key], (result) => {
        if (chrome.runtime.lastError) {
          return reject(chrome.runtime.lastError)
        }
        resolve(result[key])
      })
    }
  })
}

export function setInStorage(key: string, value: any) {
  return new Promise((resolve, reject) => {
    if (chrome) {
      chrome.storage.local.set({ [key]: value }, () => {
        if (chrome.runtime.lastError) {
          return reject(chrome.runtime.lastError)
        }
        resolve(1)
      })
    }
  })
}