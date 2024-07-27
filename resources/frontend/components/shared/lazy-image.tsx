import * as React from "react"

import { Blur, Grow, Slide } from "transitions-kit"

import { TransitionType } from "@/lib/types"
import { AsyncImage, AsyncImageProps } from "loadable-image"

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
