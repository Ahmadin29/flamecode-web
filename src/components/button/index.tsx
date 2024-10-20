import clsx from "clsx"

interface Props {
  className?: string,
  labelClassName?: string,
  icon?: any,
  rightIcon?: any,
  variant?: 'primary' | 'outlined' | 'ghost',
  label?: string,
  onClick?: () => void,
  children?: any,
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
}:Props) {
  return(
    <button className={
      clsx(
        "flex items-center p-2 px-8 rounded text-sm transition-all",
        {
          'bg-primary border-2 border-primary hover:bg-primary/50' : variant === 'primary',
          'border-2 border-primary hover:bg-primary' : variant === 'outlined',
          'hover:bg-fill-300' : variant === 'ghost',
        },
        className,
      )
    } onClick={()=>onClick?.()}>
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
    </button>
  )
}