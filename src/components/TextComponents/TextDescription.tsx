import React from 'react'

type Props = {
  children: React.ReactNode
  spanProps?: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >
}

const TextDescription = ({ children, spanProps }: Props) => {
  return (
    <span
      {...spanProps}
      className={`mb-8 inline-block w-[100%] whitespace-nowrap border-b-2 border-primary-500 pb-2 text-[1.5rem] tracking-tight ${spanProps?.className}`}
    >
      {children}
    </span>
  )
}

export default TextDescription
