import { Application } from 'pixi.js'
import { useCallback, useEffect, useRef } from 'react'

const WelcomePage = () => {
  const pageContainer = useRef<HTMLDivElement>(null)
  const pageRef = useRef<Application | null>(null)

  const addApp = useCallback(async () => {
    const app = new Application()
    await app.init({
      backgroundColor: 0x1099bb,
      resizeTo: window,
    })
    pageRef.current = app

    if (
      pageContainer.current &&
      !pageContainer.current.contains(app.canvas) &&
      pageContainer.current.children.length < 1
    ) {
      pageContainer.current.appendChild(app.canvas)
    }
  }, [])

  useEffect(() => {
    addApp()
    return () => {
      if (pageRef.current) {
        pageRef.current.destroy(true, { children: true })
        pageRef.current = null
      }
    }
  }, [addApp])

  return <div ref={pageContainer}></div>
}

export default WelcomePage
