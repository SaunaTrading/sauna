import React, { useState } from "react"
import "@/styles/item-row.css"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import ItemCard from "@/components/ui/item-card"
import { useEffect } from "react"
import { dummyItems } from "@/types/items"

const dummyFetch = (cnt: number) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(dummyItems)
        }, 1000)
    })
}

const skeletonItems = [
    {
        name: "Loading...",
        image: "https://via.placeholder.com/150",
        link: "/",
    },
    {
        name: "Loading...",
        image: "https://via.placeholder.com/150",
        link: "/",
    },
    {
        name: "Loading...",
        image: "https://via.placeholder.com/150",
        link: "/",
    },
    {
        name: "Loading...",
        image: "https://via.placeholder.com/150",
        link: "/",
    },
    {
        name: "Loading...",
        image: "https://via.placeholder.com/150",
        link: "/",
    },
    {
        name: "Loading...",
        image: "https://via.placeholder.com/150",
        link: "/",
    },
    {
        name: "Loading...",
        image: "https://via.placeholder.com/150",
        link: "/",
    },
    {
        name: "Loading...",
        image: "https://via.placeholder.com/150",
        link: "/",
    },
    {
        name: "Loading...",
        image: "https://via.placeholder.com/150",
        link: "/",
    },
    {
        name: "Loading...",
        image: "https://via.placeholder.com/150",
        link: "/",
    },
    {
        name: "Loading...",
        image: "https://via.placeholder.com/150",
        link: "/",
    },
    {
        name: "Loading...",
        image: "https://via.placeholder.com/150",
        link: "/",
    },
    {
        name: "Loading...",
        image: "https://via.placeholder.com/150",
        link: "/",
    },
    {
        name: "Loading...",
        image: "https://via.placeholder.com/150",
        link: "/",
    },
    {
        name: "Loading...",
        image: "https://via.placeholder.com/150",
        link: "/",
    },
    {
        name: "Loading...",
        image: "https://via.placeholder.com/150",
        link: "/",
    },
    {
        name: "Loading...",
        image: "https://via.placeholder.com/150",
        link: "/",
    },
    {
        name: "Loading...",
        image: "https://via.placeholder.com/150",
        link: "/",
    },
    {
        name: "Loading...",
        image: "https://via.placeholder.com/150",
        link: "/",
    },
    {
        name: "Loading...",
        image: "https://via.placeholder.com/150",
        link: "/",
    },
    {
        name: "Loading...",
        image: "https://via.placeholder.com/150",
        link: "/",
    },
    {
        name: "Loading...",
        image: "https://via.placeholder.com/150",
        link: "/",
    },
]

export default function ItemRow() {
    const [currentSlide, setCurrentSlide] = React.useState(0)
    const [loaded, setLoaded] = useState(false)
    const [items, setItems] = useState(skeletonItems)

    const cardCnt = function () {
        // get the number of cards we can fit
        // in the viewport
        const viewportWidth = window.innerWidth
        const cardWidth = 160
        const spacing = 16
        const cardCnt = Math.floor(viewportWidth / (cardWidth + spacing))
        setLoaded(true)
        console.log('we have set loaded!')
        return cardCnt
    }

    const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
        initial: 0,
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel)
        },
        created() {
            setLoaded(true)
        },
        slides: {
            perView: cardCnt,
            spacing: 16,
        },
    })

    useEffect(() => {
        dummyFetch(cardCnt()).then((items: any) => {
            setItems(items)
        })
    }, [])

    return (
        <>
            <div className="navigation-wrapper px-16">
                {<div ref={sliderRef} className="keen-slider">
                    {
                        // map out the item list to keen slider slide divs
                        items.map((item: any, idx: number) => (
                            <ItemCard key={idx} className=" w-64 keen-slider__slide slide" item={item} />
                        ))
                    }
                </div>}
                {instanceRef.current && (
                    <>
                        <Arrow
                            left
                            onClick={(e: any) => {
                                e.stopPropagation()
                                if (instanceRef.current) {
                                // on click, try to move over up to cardCnt cards
                                // if there are not enough cards to move over, move to the last card
                                const cards = cardCnt()
                                const nextSlide = currentSlide - cards
                                const newSlide = nextSlide < 0 ? 0 : nextSlide
                                setCurrentSlide(newSlide)
                                instanceRef.current.moveToIdx(newSlide)     //.moveToSlideRelative(newSlide)
                                }
                            }}
                            disabled={currentSlide === 0}
                        />

                        {(instanceRef.current !== null) && instanceRef.current.track.details.slides.length && <Arrow
                            onClick={(e: any) => {
                                e.stopPropagation()
                                if (instanceRef.current) {
                                // on click, try to move over up to cardCnt cards
                                // if there are not enough cards to move over, move to the last card
                                const cards = cardCnt()
                                const nextSlide = currentSlide + cards
                                const lastSlide = instanceRef.current.track.details.slides.length - 1
                                console.log('last slide is: ', lastSlide, 'curr slide is: ', currentSlide, 'next slide is: ', nextSlide)
                                const newSlide = nextSlide > lastSlide ? lastSlide : nextSlide
                                setCurrentSlide(newSlide)
                                instanceRef.current.moveToIdx(newSlide)     //.moveToSlideRelative(newSlide)
                                }
                            }}
                            disabled={
                                currentSlide >=
                                instanceRef.current.track.details.slides.length - 8
                            }
                        />}
                    </>
                )}
            </div>
        </>
    )
}

function Arrow(props: {
    disabled: boolean
    left?: boolean
    onClick: (e: any) => void
}) {
    const disabeld = props.disabled ? " arrow--disabled" : ""
    return (
        <svg
            onClick={props.onClick}
            className={`arrow ${props.left ? "arrow--left" : "arrow--right"
                } ${disabeld}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
        >
            {props.left && (
                <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
            )}
            {!props.left && (
                <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
            )}
        </svg>
    )
}