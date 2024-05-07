import React, { useState } from 'react'
import '../styles/boxslider.css'

const boxItems = [
    {
        index: 1,
        title: "BiD TV"
    },
    {
        index: 2,
        title: "News & Media"
    },
    {
        index: 3,
        title: "Events & Webinars"
    },
    {
        index: 4,
        title: "A Who's Who"
    },
    {
        index: 5,
        title: "Product Launches"
    },
    {
        index: 6,
        title: "Podcasts"
    },
]

const BoxSlider = () => {

    const [activeIndex, setActiveIndex] = useState(1);


    // const handleActiveIndex = () => {
    //     if (activeIndex === 6) {
    //         setActiveIndex(1);
    //     } else {
    //         setActiveIndex(activeIndex + 1);
    //     }
    // }


    return (
        <div className='boxslider-container'>
            {boxItems.map((item, index) => (
                <div
                    className={`${activeIndex === item.index ? 'activebox' : 'box'}`}
                    onClick={() => setActiveIndex(index + 1)}
                    key={index}
                >
                    <img src='d_service.png' alt='d_service'/> 
                    <h2 
                        className={`${activeIndex === item.index ? 'title-inside' : 'title-outside'}`}
                    >
                        {item.title}
                    </h2>
                    <div className={`${activeIndex === item.index ? 'box-content' : 'box-initial'}`}>
                        <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                        <button>Learn more</button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default BoxSlider