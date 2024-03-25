import { tv, VariantProps } from 'tailwind-variants'
import { FC, PropsWithChildren } from 'react'

const button = tv({
  base: 'mej-font-bold mej-background-transition mej-py-1 mej-px-3 mej-rounded-full active:mej-opacity-80',
  variants: {
    color: {
      primary: '',
      secondary: '',
      accent: '',
    },
    size: {
      sm: 'mej-py-1 mej-px-3 mej-text-xs',
      md: 'mej-py-1.5 mej-px-4 mej-text-sm',
      lg: 'mej-py-2 mej-px-6 mej-text-md',
    },
    style: {
      constant: 'mej-text-white',
      outline: 'mej-text-body mej-bg-white',
    },
  },
  compoundVariants: [
    {
      color: 'primary',
      style: 'outline',
      class: 'mej-border-primary mej-border',
    },
    {
      color: 'secondary',
      style: 'outline',
      class: 'mej-border-secondary mej-border',
    },
    {
      color: 'accent',
      style: 'outline',
      class: 'mej-border-accent mej-border',
    },
    {
      color: 'primary',
      style: 'constant',
      class: 'mej-bg-primary',
    },
    {
      color: 'secondary',
      style: 'constant',
      class: 'mej-bg-secondary',
    },
    {
      color: 'accent',
      style: 'constant',
      class: 'mej-bg-accent',
    },
  ],
  defaultVariants: {
    color: 'primary',
    size: 'md',
    style: 'constant',
  },
})

export const Button: FC<PropsWithChildren<VariantProps<typeof button>>> = ({
  children,
  ...props
}) => {
  return <button className={button(props)}>{children}</button>
}
