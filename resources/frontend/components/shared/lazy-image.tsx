import * as React from "react"

import { AsyncImage, AsyncImageProps } from "loadable-image"
import { Blur, Collapse, Fade, Grow, Slide, Zoom } from "transitions-kit"

import { TransitionType } from "@/lib/types"

interface LazyImageProps extends AsyncImageProps {
  transition: TransitionType
}

export const LazyImage: React.FC<LazyImageProps> = ({
  transition,
  ...props
}) => {
  const TransitionComponent = {
    [TransitionType.Blur]: Blur,
    [TransitionType.Grow]: Grow,
    [TransitionType.Slide]: Slide,
    [TransitionType.Collapse]: Collapse,
    [TransitionType.Fade]: Fade,
    [TransitionType.Zoom]: Zoom,
  }[transition]

  return (
    <AsyncImage
      {...props}
      Transition={TransitionComponent}
      loader={<div style={{ background: "#888" }} />}
      // loader={<Skeleton className="w-[100px] h-[20px]" />}
    />
  )
}
