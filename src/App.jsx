import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Modal, Button } from 'antd'
import Home from './pages/Home.jsx'
import HomeAlt from './pages/HomeAlt.jsx'

function App() {
  return (
    <BrowserRouter>
      <VersionSelector />
      <Routes>
        <Route path="/v2" element={<Home />} />
        <Route path="/" element={<HomeAlt />} />
      </Routes>
    </BrowserRouter>
  )
}

let versionModalShownThisLoad = false

function VersionSelector() {
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!versionModalShownThisLoad) {
      versionModalShownThisLoad = true
      setOpen(true)
    }
  }, [])

  const handleChoose = (version) => {
    setOpen(false)
    if (version === 1) {
      navigate('/', { replace: true })
    } else {
      navigate('/v2', { replace: true })
    }
  }

  return (
    <Modal
      open={open}
      title="Выберите версию"
      footer={null}
      destroyOnClose
      centered
      maskClosable={false}
    >
      <div style={{ display: 'flex', gap: 12, justifyContent: 'center' }}>
        <Button type="primary" size="large" onClick={() => handleChoose(1)}>
          Версия 1
        </Button>
        <Button size="large" onClick={() => handleChoose(2)}>
          Версия 2
        </Button>
      </div>
    </Modal>
  )
}

export default App
