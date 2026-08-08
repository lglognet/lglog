'use client'

import { useState } from 'react'
import { Menu, X, Truck } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const navItems = [
  { label: '首页', href: '#home' },
  { label: '关于我们', href: '#about' },
  { label: '产品服务', href: '#services' },
  { label: '联系我们', href: '#contact' },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#home" className="flex items-center gap-2" aria-label="哈尔滨龙港物流首页">
          <span className="flex size-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Truck className="size-5" />
          </span>
          <span className="text-lg font-bold tracking-tight text-foreground">
            哈尔滨龙港物流
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="主导航">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button size="lg" nativeButton={false} render={<a href="#contact" />}>
            免费咨询
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex size-10 items-center justify-center rounded-lg text-foreground md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? '关闭菜单' : '打开菜单'}
          aria-expanded={open}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      <div
        className={cn(
          'overflow-hidden border-t border-border bg-background md:hidden',
          open ? 'max-h-96' : 'max-h-0 border-t-0',
        )}
      >
        <nav
          className="flex flex-col gap-1 px-4 py-3"
          aria-label="移动端导航"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-accent hover:text-primary"
            >
              {item.label}
            </a>
          ))}
          <Button
            className="mt-2"
            size="lg"
            nativeButton={false}
            render={<a href="#contact" onClick={() => setOpen(false)} />}
          >
            免费咨询
          </Button>
        </nav>
      </div>
    </header>
  )
}
