type ButtonProps = {
  iconLeft?: React.ReactNode | null
  children?: React.ReactNode | null
  buttonProps?: React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
}

export default function Button({
  children = null,
  iconLeft,
  buttonProps,
}: ButtonProps) {
  return (
    <button {...buttonProps}>
      {iconLeft}
      {children}
    </button>
  )
}