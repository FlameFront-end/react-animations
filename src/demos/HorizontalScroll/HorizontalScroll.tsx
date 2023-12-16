import './HorizontalScroll.scss'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FC, useEffect, useRef } from 'react'

const HorizontalScroll: FC = () => {
  gsap.registerPlugin(ScrollTrigger)
  const racesRef = useRef<HTMLDivElement | null>(null)
  useEffect(() => {
    function getScrollAmount() {
      if (racesRef.current) {
        let racesWidth = racesRef.current.scrollWidth
        return -(racesWidth - window.innerWidth)
      }
      return 0
    }

    const tween = gsap.to(racesRef.current, {
      x: getScrollAmount(),
      duration: 3,
      ease: 'none',
    })

    ScrollTrigger.create({
      trigger: '.races-wrapper',
      start: 'top 20%',
      end: () => `+=${getScrollAmount() * -1}`,
      pin: true,
      animation: tween,
      scrub: 1,
      invalidateOnRefresh: true,
    })
  }, [])
  return (
    <div className="HorizontalScroll">
      <div className="section"></div>
      <div className="races-wrapper">
        <div className="races" ref={racesRef}>
          <h2>Title 1</h2>
          <h2>Title 2</h2>
          <h2>Title 3</h2>
          <h2>Title 4</h2>
          <h2>Title 5</h2>
        </div>
      </div>
      <div className="section"></div>
    </div>
  )
}

export default HorizontalScroll
