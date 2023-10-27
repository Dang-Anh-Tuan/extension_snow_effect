import './App.css'
import { useState, useEffect, ChangeEvent } from 'react'
import { getFromStorage, setInStorage } from './utils/extension'
import { KEY } from './constant/storage'
import { sendMessage } from './utils/communicate'

function App() {
  const [onMode, setOnMode] = useState<boolean | undefined>(false)

  useEffect(() => {
    getInitMode()
  }, [])
  
  async function getInitMode() {
    const valueMode = await getFromStorage(KEY.MODE)
    setOnMode(!!valueMode)
  }

  async function handleSetMode(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.checked
    await setInStorage(KEY.MODE, value)
    setOnMode(value)
    sendMessage('CHANGE_MODE_SNOW', value)
  }

  return (
    <>
      <div className='flex'>
        <h3>Tuyết rơi</h3>
        <label className='switch ml-4'>
          <input
            type='checkbox'
            checked={onMode}
            onChange={handleSetMode}
          ></input>
          <span className='slider round'></span>
        </label>
      </div>
    </>
  )
}

export default App
