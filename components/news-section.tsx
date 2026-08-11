import { ArrowUpRight } from 'lucide-react'

const news = [
  {
    date: '2026-01-28',
    category: '公司动态',
    title: '哈尔滨龙港物流荣获「雀巢年度诚信物流企业」称号',
    desc: '凭借稳定可靠的服务品质与全国网络布局，哈尔滨龙港物流获得行业权威机构认可。',
  },
  {
    date: '2026-03-15',
    category: '网络拓展',
    title: '飞鹤智能仓储中心正式启用',
    desc: '日处理能力提升至 5 万件。',
  },
  {
    date: '2025-06-30',
    category: '行业洞察',
    title: '企业降低物流成本的五个关键实践',
    desc: '结合大量落地案例，分享企业在运输与仓储环节优化成本的经验与建议。',
  },
  {
    date: '2025-06-12',
    category: '合作签约',
    title: '哈尔滨龙港物流与天臣微纳米达成战略合作',
    desc: '双方将在城市配送与供应链管理领域展开深度合作，共建高效配送网络。',
  },
]

export function NewsSection() {
  return (
    <section id="news" className="bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            新闻资讯
          </span>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            了解龙港物流的最新动态
          </h2>
        </div>

        <div className="mx-auto mt-14 max-w-3xl divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card">
          {news.map((item) => (
            <a
              key={item.title}
              href="#"
              className="group flex items-start gap-5 p-6 transition-colors hover:bg-accent/50"
            >
              <div className="hidden shrink-0 flex-col items-center rounded-lg bg-accent px-4 py-3 text-primary sm:flex">
                <span className="text-2xl font-bold leading-none">
                  {item.date.slice(8, 10)}
                </span>
                <span className="mt-1 text-xs text-muted-foreground">
                  {item.date.slice(0, 7)}
                </span>
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-3">
                  <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                    {item.category}
                  </span>
                  <time className="text-xs text-muted-foreground sm:hidden">
                    {item.date}
                  </time>
                </div>
                <h3 className="mt-2 truncate text-base font-semibold text-foreground transition-colors group-hover:text-primary">
                  {item.title}
                </h3>
                <p className="mt-1 line-clamp-1 text-sm text-muted-foreground">
                  {item.desc}
                </p>
              </div>

              <ArrowUpRight className="mt-1 size-5 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
