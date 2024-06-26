import Link from 'next/link'
import clsx, { ClassValue } from 'clsx'

const baseStyles = {
  solid:
    'inline-flex justify-center rounded py-2 px-3 text-sm font-semibold outline-2 outline-offset-2 transition-colors',
  outline:
    'inline-flex justify-center rounded border py-[calc(theme(spacing.2)-1px)] px-[calc(theme(spacing.3)-1px)] text-sm outline-2 outline-offset-2 transition-colors',
  dls:
    'inline-flex justify-start rounded p-4 text-base outline-4 outline-offset-2 transition-colors ',
  }

const variantStyles = {
  solid: {
    cyan: 'relative overflow-hidden bg-ainblue-800 text-white before:absolute before:inset-0 active:before:bg-transparent hover:before:bg-white/10 active:bg-ainblue-800 active:text-white/80 before:transition-colors',
    white:
      'bg-white text-ainblue-900 hover:bg-white/90 active:bg-white/90 active:text-ainblue-900/70',
    gray: 'bg-gray-800 text-white hover:bg-gray-900 active:bg-gray-800 active:text-white/80',
  },
  outline: {
    cyan: 'border-ainblue-600 text-ainblue-600 hover:border-ainblue-200 active:bg-ainblue-200 active:text-ainblue-700/80',
    gray: 'border-gray-300 text-gray-700 hover:border-gray-400 active:bg-gray-100 active:text-gray-700/80',
  },
  dls: {
    cyan: 'border-ainblue-600 text-ainblue-600 hover:border-ainblue-200 active:bg-ainblue-200 active:text-ainblue-700/80',
    gray: 'justify-self-stretch grid cols-1  bg-gray-800 text-lg font-medium text-gray-100 leading-snug hover:bg-ainblue-600 hover:text-gray-600 active:bg-gray-100 active:text-gray-700/80',
  },
}

type VariantKey = keyof typeof variantStyles
type ColorKey<Variant extends VariantKey> =
  keyof (typeof variantStyles)[Variant]

type ButtonProps<
  Variant extends VariantKey,
  Color extends ColorKey<Variant>,
> = {
  variant?: Variant
  color?: Color
} & (
  | Omit<React.ComponentPropsWithoutRef<typeof Link>, 'color'>
  | (Omit<React.ComponentPropsWithoutRef<'button'>, 'color'> & {
      href?: undefined
    })
)

export function Button<
  Color extends ColorKey<Variant>,
  Variant extends VariantKey = 'solid',
>({ variant, color, className, ...props }: ButtonProps<Variant, Color>) {
  variant = variant ?? ('solid' as Variant)
  color = color ?? ('gray' as Color)

  className = clsx(
    baseStyles[variant],
    variantStyles[variant][color] as ClassValue,
    className,
  )

  return typeof props.href === 'undefined' ? (
    <button className={className} {...props} />
  ) : (
    <Link className={className} {...props} />
  )
}
