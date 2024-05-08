import React from 'react'
import { Carousel } from 'react-responsive-3d-carousel'
import '../styles/imageloopslider.css'
import SpringCarousel from './SpringCarousel'

const ImageLoopSlider = () => {

    let cards = [
        {
            key: 1,
            content: (
                <img src='test.png' />
            ),
        },
        {
            key: 2,
            content: (
                <img src='test2.png' />
            ),
        },
        {
            key: 3,
            content: (
                <img src='test.png' />
            ),
        },
    ];

    return (
        <div className='slider-container'>
            <SpringCarousel 
                cards={cards}
                height="500px"
                width="60%"
                margin="0 auto"
                offset={1}
                showArrows={false}
            />
            <div className='slider-content'>
                <h4>Virtual reality</h4>
                <br />
                <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur. Nemo enim ipsam voluptatem Nemo enim ipsam voluptatem quia voluptas sit aspernate</p>
                <br />
                <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur. Nemo enim ipsam voluptatem Nemo enim ipsam voluptatem quia voluptas sit aspernate</p>
                <br />
                <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur. Nemo enim ipsam voluptatem Nemo enim ipsam voluptatem quia voluptas sit aspernate</p>
            </div>
        </div>
    )
}

export default ImageLoopSlider