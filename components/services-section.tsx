import {
  Truck,
  Warehouse,
  Ship,
  PackageCheck,
  Route,
  Headset,
} from 'lucide-react'

const services = [
  {
    icon: Truck,
    title: '公路运输',
    desc: '覆盖全国的整车与零担运输网络，专业车队与智能调度，保障货物安全准时送达。',
  },
  {
    icon: Warehouse,
    title: '仓储配送',
    desc: '现代化智能仓储中心，提供出入库管理、库存优化与城市共同配送一体化服务。',
  },
  {
    icon: Ship,
    title: '国际货运（暂缓）',
    desc: '海运、空运与跨境专线，一站式报关清关服务，助力企业货物通达全球。',
  },
  {
    icon: Route,
    title: '供应链管理',
    desc: '端到端供应链规划与优化，整合运输、仓储与信息流，为企业降本增效。',
  },
  {
    icon: PackageCheck,
    title: '全程可视追踪',
    desc: '数字化调度平台与 GPS 定位，货物运输全流程实时可视，异常及时预警。',
  },
  {
    icon: Headset,
    title: '7×24 客户服务',
    desc: '专属客服团队全程跟进，快速响应运单查询与需求变更，服务无忧。',
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            产品服务
          </span>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            全方位的综合物流能力
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            覆盖运输、仓储、国内货运与供应链全流程，为不同行业客户提供专业、可靠的物流解决方案。
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-2xl border border-border bg-card p-7 transition-colors hover:border-primary/40"
            >
              <span className="flex size-12 items-center justify-center rounded-xl bg-accent text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <service.icon className="size-6" />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-foreground">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
