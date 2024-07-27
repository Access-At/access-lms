import * as React from 'react'

import { Blur, Grow, Slide } from 'transitions-kit'

import { AsyncImage } from 'loadable-image'

export enum TransitionType {
    Blur = 'Blur',
    Grow = 'Grow',
    Slide = 'Slide'
}

type LazyImageProps = {
    src: string
    transition: TransitionType
    className?: string
    alt: string
}

export const LazyImage: React.FC<LazyImageProps> = ({
    src,
    transition,
    className,
    alt,
}) => {
    const TransitionComponent = {
        [TransitionType.Blur]: Blur,
        [TransitionType.Grow]: Grow,
        [TransitionType.Slide]: Slide
    }[transition];

    return (
        <AsyncImage
            src={src}
            Transition={TransitionComponent}
            style={{ width: "100%", height: "auto", aspectRatio: 16 / 9 }}
            className={className}
            loader={<div style={{ background: '#888' }}/>}
            // loader={<Skeleton className="w-[100px] h-[20px]" />}
            alt={alt}
        />
    )
}

