const cases = [
  {
    image: '/images/case-1.png',
    tag: '仓储运输配送一站式',
    title: '雀巢（中国）有限公司',
    desc: '定制汽运整柜与仓储方案，全国货运时效缩短 30%，物流成本下降 22%。',
  },
  {
    image: '/images/case-2.png',
    tag: '仓储货运',
    title: '飞鹤乳业有限公司',
    desc: '搭建仓储货运专线与全程温控追踪，损耗率降至 1% 以内，准时率达 99%。',
  },
  {
    image: '/images/case-3.png',
    tag: '城市配送',
    title: '连锁零售末端配送升级',
    desc: '智能路线规划与共同配送，末端配送效率提升 35%，客户满意度显著提高。',
  },
]

export function CasesSection() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            客户案例
          </span>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            真实合作伙伴（案例）
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            与各行业领先企业携手，用可靠的物流方案创造可衡量的业务价值。
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {cases.map((item) => (
            <article
              key={item.title}
              className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow hover:shadow-md"
            >
              <img
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                className="aspect-[16/10] w-full object-cover"
              />
              <div className="p-6">
                <span className="inline-block rounded-full bg-accent px-3 py-1 text-xs font-medium text-primary">
                  {item.tag}
                </span>
                <h3 className="mt-4 text-lg font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
