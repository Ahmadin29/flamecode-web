import clsx from "clsx"
import Link from "next/link";

interface Props {
  className?: string,
  labelClassName?: string,
  icon?: any,
  rightIcon?: any,
  variant?: 'primary' | 'outlined' | 'ghost',
  label?: string,
  onClick?: () => void,
  children?: any,
  href?: string,
  size?: 'sm' | 'md' | 'lg',
}

export default function Button({
  className,
  labelClassName,
  icon,
  label,
  onClick,
  variant = 'primary',
  children,
  rightIcon,
  href,
  size = 'md',
}:Props) {

  const Component = !href ? 'button' : Link;

  const linkProps = href ? { href } : {};

  return(
    // @ts-ignore
    <Component className={
      clsx(
        "flex items-center rounded text-sm transition-all",
        {
          'bg-primary border-2 border-primary hover:bg-primary-300' : variant === 'primary',
          'border-2 border-primary hover:bg-primary' : variant === 'outlined',
          'hover:bg-fill-300' : variant === 'ghost',
          'px-4 py-1' : size === 'sm',
          'px-8 py-2' : size === 'md',
          'px-12 py-4' : size === 'lg',
        },
        className,
      )
    } onClick={()=>onClick?.()} {...(href ? linkProps : {})}>
      {
        icon && icon
      }
      {
        label && <span className={
          clsx(
            icon && "ml-3",
            rightIcon && "mr-3",
            labelClassName
          )
        }>{label}</span>
      }
      {
        rightIcon && rightIcon
      }
      {children}
    </Component>
  )
}