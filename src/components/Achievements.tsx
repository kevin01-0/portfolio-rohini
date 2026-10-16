import { motion } from 'framer-motion';
import { achievements } from '../data/portfolio';
import { EASE, SectionHeading, Tilt } from './fx';

export default function Achievements() {
  return <>
    <SectionHeading kicker="Passion & craft" title="Things I Love Doing" />
    <div className="gutter grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 [perspective:1400px]">
      {achievements.map((a, i) => <motion.div key={a.id} initial={{ opacity: 0, y: 40, rotateX: 12 }} whileInView={{ opacity: 1, y: 0, rotateX: 0 }} viewport={{ once: true, margin: '-8% 0px' }} transition={{ duration: 0.75, delay: i * 0.06, ease: EASE }}>
        <Tilt max={8} className="group h-full rounded-2xl"><article className="relative flex h-full min-h-[250px] flex-col overflow-hidden rounded-2xl bg-[radial-gradient(120%_80%_at_50%_0%,#2a1f10,#0d0b08_60%,#07070a)] p-6 ring-1 ring-white/10 transition duration-500 group-hover:ring-crimson-2/50"><div aria-hidden className="absolute -top-20 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-crimson-2/10 blur-3xl transition duration-700 group-hover:bg-crimson-2/25"/><p className="relative text-[9px] font-bold uppercase tracking-[0.24em] text-crimson-2">{a.laurel}</p><h3 className="relative mt-8 font-display text-4xl leading-[0.92] tracking-wide text-bone">{a.title}</h3><p className="relative mt-3 text-xs font-semibold uppercase tracking-[0.2em] text-mist">{a.org}</p><p className="relative mt-4 text-[13px] leading-relaxed text-bone/70">{a.detail}</p></article></Tilt>
      </motion.div>)}
    </div>
  </>;
}
