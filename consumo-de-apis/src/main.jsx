import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { registerSW } from 'virtual:pwa-register'

import './index.css'
import App from './App.jsx'

const updateSW = registerSW({
  immediate: true,

  onOfflineReady() {
    console.log('Aplicativo pronto para funcionar offline!')
  },

  onNeedRefresh() {
    const atualizar = window.confirm(
      'Uma nova versão está disponível. Deseja atualizar?'
    )

    if (atualizar) {
      updateSW(true)
    }
  }
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)