import { PageTransitions } from '../../components'
import './Base.scss'
import gsap from 'gsap'
import { FC, useLayoutEffect, useRef } from 'react'

const Base: FC = () => {
  const baseRef = useRef(null)
  const box2Ref = useRef(null)

  useLayoutEffect(() => {
    gsap.context(() => {
      // будет работать только в base (context)
      gsap.timeline().to('.box-1', { rotation: 360, duration: 3 }).to('.box-2', { scale: 2 }) // только после окончания 1 анимаций будет запускаться 2
    }, baseRef)
  }, [])

  const handleClick = () => {
    gsap.fromTo('.box-1', { opacity: 0, y: 50 }, { opacity: 1, y: 0 })
    gsap.fromTo(box2Ref.current, { rotation: 0 }, { rotation: 360 })
  }

  return (
    <PageTransitions>
      <div className="base" ref={baseRef}>
        <div className="box-1">Box 1</div>
        <div className="box-2" ref={box2Ref}>
          Box 2
        </div>
        <button className="btn" onClick={() => handleClick()}>
          Click me
        </button>
      </div>
    </PageTransitions>
  )
}

export default Base
