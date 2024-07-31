import Login from '@/pages/admin/login'
import React from 'react'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/admin/')({
  component: React.memo(Login),
})