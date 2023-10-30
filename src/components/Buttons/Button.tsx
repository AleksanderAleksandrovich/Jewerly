type ButtonProps = {
  iconRight?: React.ReactNode | null
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
  iconRight,
}: ButtonProps) {
  return (
    <button {...buttonProps}>
      {iconLeft}
      {children}
      {iconRight}
    </button>
  )
}
