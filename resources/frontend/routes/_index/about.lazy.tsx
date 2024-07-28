import About from '@/pages/about'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/_index/about')({
  component: () => About
})