import { Moon, Sun } from "lucide-react"
import { cn } from "@/lib/utils"

import { Button } from "@/components/ui/button"
import { useTheme } from "@/components/theme-provider"

export function ModeToggle({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light")
      return
    }
    if (theme === "light") {
      setTheme("dark")
      return
    }

    const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    setTheme(isDark ? "light" : "dark")
  }

  return (
    <Button variant="outline" className={cn("rounded-full size-12", className)} size="icon" onClick={toggleTheme}>
      <Sun className="size-6 scale-125 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
      <Moon className="absolute size-6 scale-0 rotate-90 transition-all dark:scale-125 dark:rotate-0" />
    </Button>
  )
}