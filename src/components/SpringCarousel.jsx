import React, { useState, useEffect } from "react";
import Carousel from "react-spring-3d-carousel";
import { config } from "react-spring";

export default function SpringCarousel(props) {
    const table = props.cards.map((element, index) => {
        let scale = 1; // Default scale


        if (index !== 1) { // For tabs other than the center one
            scale = 0.8; // Adjust the scale ratio as needed
            // translate = [0, 0, -100]; // Adjust the translation as needed
        }

        return {
            ...element,
            onClick: () => setGoToSlide(index),
            config: {
                ...config.default, // Use default animation config
                config: { mass: 1, tension: 280, friction: 60 }, // Example config
                scale,
                // translate
            }
        };
    });

    const [offsetRadius, setOffsetRadius] = useState(2);
    const [showArrows, setShowArrows] = useState(false);
    const [goToSlide, setGoToSlide] = useState(null);
    const [cards] = useState(table);

    useEffect(() => {
        setOffsetRadius(props.offset);
        setShowArrows(props.showArrows);

        // Auto-scroll functionality
        const autoScrollInterval = props.autoScrollInterval || 3000; // Default auto-scroll interval is 3 seconds
        const autoScrollTimer = setInterval(() => {
            const nextIndex = (goToSlide + 1) % cards.length;
            setGoToSlide(nextIndex);
        }, autoScrollInterval);

        // Clean up timer on component unmount
        return () => clearInterval(autoScrollTimer);
    }, [props.offset, props.showArrows, props.autoScrollInterval, goToSlide, cards.length]);

    return (
        <div
            style={{ width: props.width, height: props.height, margin: props.margin }}
        >
            <Carousel
                slides={cards}
                goToSlide={goToSlide}
                offsetRadius={offsetRadius}
                showNavigation={showArrows}
            />
        </div>
    );
}