import { cn } from "@/lib/utils"

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "dark" | "copper"
  size?: "sm" | "md"
}

const variantClass = {
  dark:   "bg-imv-dark text-white hover:bg-imv-text",
  copper: "bg-imv-copper text-white hover:bg-imv-copper-mid",
}

const sizeClass = {
  sm: "text-caption px-4 py-2",
  md: "text-body-sm px-6 py-2.5",
}

export function Button({ variant = "dark", size = "sm", className, ...props }: Props) {
  return (
    <button
      className={cn(
        "font-bold rounded-lg transition-colors disabled:opacity-50",
        variantClass[variant],
        sizeClass[size],
        className
      )}
      {...props}
    />
  )
}
