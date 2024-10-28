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
  href = '/',
}:Props) {

  const Component = !href ? 'button' : Link;

  const linkProps = href ? { href } : {};

  return(
    // @ts-ignore
    <Component className={
      clsx(
        "flex items-center p-2 px-8 rounded text-sm transition-all",
        {
          'bg-primary border-2 border-primary hover:bg-primary/50' : variant === 'primary',
          'border-2 border-primary hover:bg-primary' : variant === 'outlined',
          'hover:bg-fill-300' : variant === 'ghost',
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