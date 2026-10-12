import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Because pages now change without reloading, the browser no longer handles
// scrolling for us. This invisible component fixes that:
//   - "/#about" (from the top bar) -> scroll to the About section
//   - any other page change        -> start at the top of the new page
//
// useLocation() gives us the current URL (pathname = "/blog", hash = "#about").
// useEffect(fn, [deps]) runs `fn` AFTER React has updated the page, and again
// every time one of the values in [deps] changes - here, every navigation.
export default function ScrollManager() {
  const { pathname, hash, key } = useLocation()

  useEffect(() => {
    if (hash) {
      const target = document.getElementById(hash.slice(1))
      if (target) {
        target.scrollIntoView()
        return
      }
    }
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname, hash, key])

  // Returning null means "render nothing on the page".
  return null
}
