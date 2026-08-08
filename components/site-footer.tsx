import { Truck, MapPin, Phone, Mail } from 'lucide-react'

const linkGroups = [
  {
    title: '物流服务',
    links: ['公路运输', '仓储配送', '国际货运', '供应链管理'],
  },
  {
    title: '关于我们',
    links: ['公司简介', '发展历程', '网络覆盖', '加入我们'],
  },
]

const contacts = [
  { icon: MapPin, text: '上海市青浦区华新镇物流大道 168 号远通物流园 A 栋' },
  { icon: Phone, text: '400-800 6688' },
  { icon: Mail, text: 'service@yuantong-logistics.com' },
]

export function SiteFooter() {
  return (
    <footer id="contact" className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="flex size-9 items-center justify-center rounded-lg bg-primary-foreground text-primary">
                <Truck className="size-5" />
              </span>
              <span className="text-lg font-bold">远通物流</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-primary-foreground/70">
              专注综合物流服务，让每一件货物安全、准时、高效抵达。
            </p>
          </div>

          {linkGroups.map((group) => (
            <div key={group.title}>
              <h3 className="text-sm font-semibold">{group.title}</h3>
              <ul className="mt-4 space-y-3">
                {group.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="text-sm font-semibold">联系我们</h3>
            <ul className="mt-4 space-y-3">
              {contacts.map((item) => (
                <li
                  key={item.text}
                  className="flex items-start gap-2.5 text-sm text-primary-foreground/70"
                >
                  <item.icon className="mt-0.5 size-4 shrink-0" />
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-primary-foreground/15 pt-6 text-xs text-primary-foreground/60 sm:flex-row">
          <p>© 2026 远通物流（上海）有限公司 版权所有</p>
          <p>沪ICP备 12345678 号</p>
        </div>
      </div>
    </footer>
  )
}
