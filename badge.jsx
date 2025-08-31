
import React from 'react'

export function Badge({ children, className='', variant='default', ...props }) {
  const variants = {
    default: 'bg-[#FF6A00] text-white',
    secondary: 'bg-neutral-100 text-neutral-700',
  }
  return (
    <span className={`inline-block px-3 py-1 text-xs rounded-xl ${variants[variant]} ${className}`} {...props}>
      {children}
    </span>
  )
}
