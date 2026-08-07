import Reveal from './Reveal'
import { process } from '@/content/site'

export default function Process() {
  return (
    <section className="border-t border-line bg-paper">
      <Reveal className="mx-auto max-w-[1180px] px-6 py-20 md:px-12 md:py-24">
        <h2 className="font-display text-[28px] font-semibold tracking-[-0.02em] md:text-[40px]">
          {process.heading}
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-10 md:mt-16 md:grid-cols-3 md:gap-12">
          {process.steps.map((step) => (
            <div key={step.name}>
              <h3 className="font-display text-[22px] font-semibold tracking-[-0.02em] md:text-[28px]">
                {step.name}
              </h3>
              <p className="mt-3 text-[16px] leading-[1.65] text-ink-mut md:text-[18px]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
