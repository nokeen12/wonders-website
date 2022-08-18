import './ImageCarousel.css'
import { useEffect } from 'react'
function ImageCarousel(){

    useEffect(() => {
        const buttons = document.querySelectorAll("[data-carousel-button]")
        console.log(buttons)
        buttons.forEach(button =>{
            button.addEventListener("click", ()=>{
                const offset = button.dataset.carouselButton === "next" ? 1 : -1
                const slides = button.closest("[data-carousel]").querySelector("[data-slides]")
                const activeSlide = slides.querySelector("[data-active]")
                let newIndex = [...slides.children].indexOf(activeSlide) + offset
                if (newIndex < 0) newIndex = slides.children.length - 1
                if (newIndex >= slides.children.length) newIndex = 0
                slides.children[newIndex].dataset.active = true
                delete activeSlide.dataset.active
            })
        })
    }, [])
    return(
        <div className="carousel" data-carousel>
            <button className="carousel-button prev" data-carousel-button="prev">&#8249;</button>
            <button className="carousel-button next" data-carousel-button="next">&#8250;</button>
            <ul data-slides>
                <li className="slide" data-active>
                    <img src="nails1.png" alt="Nails #1"/>
                </li>
                <li className="slide">
                    <img src="nails2.png" alt="Nails #2"/>
                </li>
                <li className="slide">
                    <img src="nails3.png" alt="Nails #3"/>
                </li>
            </ul>
        </div>
    )
}
export default ImageCarousel;