'use client'

/* Framework */
// Libraries
import { useTheme } from 'next-themes'

// Src
import { Button } from '@/components/ui/button'
import { Icons } from '@/components/ui/icons'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <Button
      variant="ghost"
      aria-label="Toggle dark mode"
      size="sm"
      className="w-9 px-0"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {/*  */}
      <Icons.sun className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      {/*  */}
      <Icons.moon className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    </Button>
  )
}
