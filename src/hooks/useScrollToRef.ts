import { useRef } from "react"

const useScrollToRef = () => {
    const elementRef = useRef<HTMLElement>(null)

    const scrollToElement = () => {
      elementRef.current?.scrollIntoView({ behavior: "smooth"})
    }
    
    return [elementRef, scrollToElement] as const
}

export default useScrollToRef