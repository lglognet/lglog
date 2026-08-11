const stats = [
  { value: '22+', label: '年物流经验' },
  { value: '300+', label: '覆盖城市' },
  { value: '100+', label: '自有运输车辆' },
  { value: '99.6%', label: '准时送达率' },
]

export function AboutSection() {
  return (
    <section id="about" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative">
            <img
              src="/images/about.png"
              alt="远通物流智能仓储中心作业场景"
              className="w-full rounded-2xl object-cover shadow-lg"
            />
          </div>

          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              关于我们
            </span>
            <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              值得信赖的综合物流服务商
            </h2>
            <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
              哈尔滨龙港物流成立于 2003 年，是一家专注于综合物流服务的现代化企业。
              我们拥有覆盖全国的运输网络、智能仓储中心与专业运营团队，
              业务涵盖公路运输、仓储配送、国际货运与供应链管理，为各行业客户提供端到端的物流解决方案。
            </p>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              我们始终坚持「安全、准时、高效」的服务承诺，
              依托数字化调度与全程可视化追踪，服务超过 300 家企业客户，成为行业内广受信赖的物流合作伙伴。
            </p>

            <dl className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="text-3xl font-bold text-primary">
                    {stat.value}
                  </dt>
                  <dd className="mt-1 text-sm text-muted-foreground">
                    {stat.label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}
