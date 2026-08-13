import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

const highlights = ['22 年物流经验', '运输覆盖全国 300+ 城市', '7×24 全程追踪']

export function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden bg-primary">
      <img
        src="/images/hero.png"
        alt="哈尔滨龙港物流运输车队行驶在高速公路上"
        className="absolute inset-0 size-full object-cover opacity-25"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/60" />

      <div className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:py-32">
        <div className="max-w-2xl">
          <span className="inline-block rounded-full bg-primary-foreground/10 px-4 py-1.5 text-sm font-medium text-primary-foreground ring-1 ring-primary-foreground/20">
            专注综合物流服务
          </span>
          <h1 className="mt-6 text-pretty text-4xl font-bold leading-tight tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl">
            连接每一段旅程 准时送达
          </h1>
          <p className="mt-6 text-pretty text-lg leading-relaxed text-primary-foreground/80">
            哈尔滨龙港物流提供公路运输、仓储配送、国内货运与供应链管理一站式服务，
            以覆盖全国的智能网络，让您的货物安全、准时、高效抵达目的地。
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              size="lg"
              variant="secondary"
              nativeButton={false}
              render={<a href="#services" />}
            >
              了解物流服务
              <ArrowRight className="size-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              nativeButton={false}
              render={<a href="#contact" />}
            >
              联系我们
            </Button>
          </div>

          <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
            {highlights.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 text-sm font-medium text-primary-foreground/90"
              >
                <CheckCircle2 className="size-5 text-primary-foreground" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
