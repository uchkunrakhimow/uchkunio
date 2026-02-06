import { Moon, Sun } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/components/theme-provider"
import { motion, AnimatePresence } from "framer-motion"

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

  const isDark = theme === "dark" || 
    (theme === "system" && (typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches))

  return (
    <Button 
      variant="outline" 
      className={cn("rounded-full size-12 relative", className)} 
      size="icon" 
      onClick={toggleTheme}
    >
      <AnimatePresence initial={false}>
        {isDark ? (
          <motion.div
            key="moon"
            className="absolute inset-0 flex items-center justify-center"
            initial={{ scale: 0, rotate: -90, opacity: 0 }}
            animate={{ scale: 1, rotate: 0, opacity: 1 }}
            exit={{ scale: 0, rotate: 90, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <Moon className="size-6" />
          </motion.div>
        ) : (
          <motion.div
            key="sun"
            className="absolute inset-0 flex items-center justify-center"
            initial={{ scale: 0, rotate: -90, opacity: 0 }}
            animate={{ scale: 1, rotate: 0, opacity: 1 }}
            exit={{ scale: 0, rotate: 90, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <Sun className="size-6" />
          </motion.div>
        )}
      </AnimatePresence>
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}