import Image from 'next/image'
import Reveal from './Reveal'
import { about } from '@/content/site'

export default function About() {
  return (
    <section className="border-t border-line bg-paper-2">
      <div className="mx-auto max-w-[1180px] px-6 py-20 md:px-12 md:py-24">
        <Reveal className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <h2 className="font-display text-[28px] font-semibold tracking-[-0.02em] md:text-[40px]">
              {about.heading}
            </h2>
            <div className="mt-6 flex flex-col gap-4">
              {about.paragraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="max-w-md text-[16px] leading-[1.65] text-ink-mut md:text-[18px]"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {about.founders.map((founder) => (
              <figure key={founder.name}>
                <Image
                  src={founder.photo.src}
                  alt={founder.photo.alt}
                  width={founder.photo.width}
                  height={founder.photo.height}
                  className="h-auto w-full"
                />
                <figcaption className="mt-3 text-[16px] text-ink-mut">{founder.name}</figcaption>
              </figure>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
