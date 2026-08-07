import Reveal from './Reveal'
import { pricing } from '@/content/site'

export default function Pricing() {
  return (
    <section id="pricing" className="border-t border-line bg-paper-2">
      <Reveal className="mx-auto max-w-[1180px] px-6 py-20 md:px-12 md:py-24">
        <h2 className="font-display text-[28px] font-semibold tracking-[-0.02em] md:text-[40px]">
          {pricing.heading}
        </h2>
        <div className="mt-12 md:mt-16">
          {pricing.items.map((item) => (
            <div
              key={item.name}
              className="flex items-baseline justify-between gap-6 border-t border-line py-5 last:border-b"
            >
              <span className="font-display text-[18px] font-semibold tracking-[-0.02em] md:text-[20px]">
                {item.name}
              </span>
              <span className="whitespace-nowrap text-[16px] text-ink-mut md:text-[18px]">
                {item.price}
              </span>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
