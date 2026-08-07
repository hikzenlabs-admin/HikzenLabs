import Reveal from '../Reveal'
import { howWeWork } from '@/content/site'

export default function HowWeWork() {
  return (
    <section className="border-t border-line bg-paper">
      <Reveal className="mx-auto max-w-[1180px] px-6 py-20 md:px-12 md:py-24">
        <h2 className="font-display text-[28px] font-semibold tracking-[-0.02em] md:text-[40px]">
          {howWeWork.heading}
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-x-12 gap-y-10 md:mt-16 md:grid-cols-2">
          {howWeWork.items.map((item) => (
            <div key={item.label} className="border-t border-line pt-8">
              <h3 className="font-display text-[20px] font-semibold tracking-[-0.02em] md:text-[22px]">
                {item.label}
              </h3>
              <p className="mt-3 text-[16px] leading-[1.65] text-ink-mut md:text-[18px]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
