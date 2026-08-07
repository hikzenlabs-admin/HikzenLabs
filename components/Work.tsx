import Image from 'next/image'
import Link from 'next/link'
import Reveal from './Reveal'
import { work } from '@/content/site'

export default function Work() {
  return (
    <section id="work" className="border-t border-line bg-paper-2">
      <Reveal className="mx-auto max-w-[1180px] px-6 py-20 md:px-12 md:py-24">
        <h2 className="font-display text-[28px] font-semibold tracking-[-0.02em] md:text-[40px]">
          {work.heading}
        </h2>
        <div className="mt-12 flex flex-col gap-16 md:mt-16 md:gap-24">
          {work.items.map((item, index) => (
            <article
              key={item.number}
              className="flex flex-col gap-6 md:flex-row md:items-center md:gap-12"
            >
              <div
                className={`md:w-3/5 ${index % 2 === 1 ? 'md:order-2' : 'md:order-1'}`}
              >
                <Image
                  src={item.image.src}
                  alt={item.image.alt}
                  width={item.image.width}
                  height={item.image.height}
                  className="h-auto w-full"
                />
              </div>
              <div
                className={`flex flex-col gap-3 md:w-2/5 ${
                  index % 2 === 1 ? 'md:order-1' : 'md:order-2'
                }`}
              >
                <span className="text-[13px] text-ink-mut md:text-[14px]">{item.number}</span>
                <h3 className="font-display text-[22px] font-semibold tracking-[-0.02em] md:text-[28px]">
                  {item.client}
                </h3>
                <p className="text-[16px] leading-[1.65] text-ink-mut md:text-[18px]">
                  {item.description}
                </p>
                {item.outcome && (
                  <p className="text-[16px] leading-[1.65] text-ink-mut md:text-[18px]">
                    {item.outcome}
                  </p>
                )}
                {item.link && (
                  <Link
                    href={item.link.href}
                    className="text-[16px] text-ink underline underline-offset-[3px] hover:text-ink-mut"
                  >
                    {item.link.label}
                  </Link>
                )}
              </div>
            </article>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
