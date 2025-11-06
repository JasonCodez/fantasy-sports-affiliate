'use client'

import { useEffect } from 'react'

export default function PWAInstall() {
  useEffect(() => {
    // Register service worker
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js').then(
          (registration) => {
            console.log('✓ Service Worker registered:', registration)
          },
          (error) => {
            console.log('✗ Service Worker registration failed:', error)
          }
        )
      })
    }

    // Handle install prompt
    let deferredPrompt
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault()
      deferredPrompt = e
    })

    window.addEventListener('appinstalled', () => {
      console.log('✓ PWA installed')
      deferredPrompt = null
    })
  }, [])

  return null
}
