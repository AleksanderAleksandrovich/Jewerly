import { SelectedPage } from '@/types/home'

type Props = {
  id: SelectedPage
  children: React.ReactNode
  className?: string
}

const Section = ({ id, children, className }: Props) => {
  const defaultStyles = 'mx-24 pt-28 sm:mx-14 sm:pt-32'
  let filteredClasses = ''
  if (className) {
    const classNamesArray = defaultStyles?.split(' ')
    filteredClasses = classNamesArray
      ?.filter((item) => !item.startsWith('pt-') && !item.startsWith('sm:pt-'))
      .join(' ')
  }

  return (
    <section
      id={id}
      className={className ? `${filteredClasses} ${className}` : defaultStyles}
    >
      {children}
    </section>
  )
}

export default Section
