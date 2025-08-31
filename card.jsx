
import React from 'react'

export function Card({ children, className='', ...props }) {
  return <div className={`border rounded-xl bg-white ${className}`} {...props}>{children}</div>
}
export function CardHeader({ children, className='', ...props }) {
  return <div className={`p-4 ${className}`} {...props}>{children}</div>
}
export function CardTitle({ children, className='', ...props }) {
  return <h3 className={`font-semibold ${className}`} {...props}>{children}</h3>
}
export function CardContent({ children, className='', ...props }) {
  return <div className={`p-4 pt-0 ${className}`} {...props}>{children}</div>
}
export function CardFooter({ children, className='', ...props }) {
  return <div className={`p-4 pt-0 ${className}`} {...props}>{children}</div>
}
