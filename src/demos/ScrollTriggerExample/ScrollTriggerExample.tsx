import { PageTransitions } from '../../components'
import './ScrollTriggerExample.scss'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FC, useLayoutEffect } from 'react'

const ScrollTriggerExample: FC = () => {
  gsap.registerPlugin(ScrollTrigger)

  useLayoutEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.section--blue',
        start: 'top top',
        end: 'bottom -=100%',
        scrub: true,
        pin: true,
        toggleClass: 'square--active', // класс, когда работает анимация
      },
    })
    tl.from('.square', {
      opacity: 0,
      x: -500,
      rotation: -360,
      duration: 2,
    }).to('.square', { backgroundColor: 'red', scale: 0.5 })
  }, [])

  return (
    <PageTransitions>
      <div className="ScrollTrigger">
        <div className="section section section--green"></div>
        <section className="section section--blue">
          <div className="square"></div>
        </section>
        <div className="section section section--green"></div>
      </div>
    </PageTransitions>
  )
}

export default ScrollTriggerExample
