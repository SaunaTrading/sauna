'use client'
import React from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import "@/styles/adBar.css"

const images = [
    "https://images.unsplash.com/photo-1590004953392-5aba2e72269a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=500&w=800&q=80",
    "https://images.unsplash.com/photo-1590004845575-cc18b13d1d0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=500&w=800&q=80",
    "https://images.unsplash.com/photo-1590004987778-bece5c9adab6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=500&w=800&q=80",
    "https://images.unsplash.com/photo-1590005176489-db2e714711fc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=500&w=800&q=80",
]

export default () => {
    const [loaded, setLoaded] = React.useState('000')
    const [currentSlide, setCurrentSlide] = React.useState(0)

    // update to next slide 30 seconds after mounting the current slide
    const [sliderRef, instanceRef] = useKeenSlider({
        animationEnded(s) {
            setCurrentSlide(s.track.details.rel)
        },
        loop: true,
        initial: 0,
    })

    React.useEffect(() => {
        const new_loaded = loaded.split('')
        new_loaded[currentSlide] = '1'
        setLoaded(new_loaded.join(''))
        const timer = setTimeout(() => {
            const new_loaded = loaded.split('')
            new_loaded[currentSlide] = '1'
            setLoaded(new_loaded.join(''))
            if (instanceRef.current) {
                instanceRef.current.next()
            } else {
                console.log('no instance')
            }
        }, 7500)
        return () => clearTimeout(timer)
    }, [currentSlide])

    if (loaded == '000') {
        //TODO replace with skeleton
        return <div>Loading...</div>
    }

    return (
        <div ref={sliderRef} className="keen-slider">
            {images.map((src, idx) => (
                <div key={idx} className="keen-slider__slide lazy__slide">
                    {(loaded[idx] == '1') && <img alt='bg-img' src={src} />}
                    {/* //TODO replace with skeleton */}
                    {(loaded[idx] == '0') && <div className='skeleton'>Loading...</div>}
                </div>
            ))}
        </div>
    )
}