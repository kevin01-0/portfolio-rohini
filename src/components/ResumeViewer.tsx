import { useState } from 'react';
import { motion } from 'framer-motion';
import { profile, projects, skillCategories } from '../data/portfolio';
import { EASE, Magnetic, SectionHeading } from './fx';

export default function ResumeSection({ onView }: { onView: () => void }) {
  const skills = skillCategories.flatMap((c) => c.skills.map((s) => s.name));
  return <>
    <SectionHeading kicker="Portfolio snapshot" title="The Full Story" />
    <div className="gutter grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-14">
      <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: EASE }}>
        <ResumeSheet />
      </motion.div>
      <div className="lg:sticky lg:top-28 lg:self-start">
        <p className="font-serif text-3xl italic leading-tight text-bone">Design that feels intuitive.</p>
        <p className="mt-3 text-sm leading-relaxed text-mist">A quick overview of Rohini's featured projects, design tools, and creative interests.</p>
        <div className="mt-6 flex flex-col gap-3">
          <Magnetic className="w-full"><button type="button" onClick={onView} className="flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-bone px-6 text-[15px] font-bold text-ink">▶ Open Portfolio Snapshot</button></Magnetic>
          <Magnetic className="w-full"><a href={`mailto:${profile.email}`} className="glass flex min-h-12 w-full items-center justify-center gap-2 rounded-md px-6 text-[15px] font-semibold text-bone">✉ Contact Rohini</a></Magnetic>
        </div>
        <dl className="mt-8 grid grid-cols-3 gap-px overflow-hidden rounded-xl bg-white/10 text-center">
          {[{ v: String(projects.length), k: 'Projects' }, { v: String(skills.length), k: 'Skills' }, { v: String(profile.interests.length), k: 'Interests' }].map((s) => <div key={s.k} className="bg-ink-2 px-2 py-4"><dd className="font-display text-3xl leading-none text-bone">{s.v}</dd><dt className="mt-1 text-[10px] font-bold uppercase tracking-[0.2em] text-smoke">{s.k}</dt></div>)}
        </dl>
      </div>
    </div>
  </>;
}

export function ResumeSheet() {
  const [expanded, setExpanded] = useState(false);
  return <article className="relative overflow-hidden rounded-2xl bg-[linear-gradient(180deg,#121218,#0c0c11)] p-6 ring-1 ring-white/10 sm:p-10">
    <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-crimson-2/70 to-transparent" />
    <header className="mb-8 border-b border-white/10 pb-6">
      <p className="text-[10px] font-bold tracking-[0.34em] text-smoke">UI/UX DESIGNER</p>
      <h3 className="mt-2 font-display text-[clamp(1.9rem,4.4vw,3.2rem)] leading-[0.9] tracking-wide text-bone">{profile.fullName}</h3>
      <p className="mt-3 text-sm text-mist">{profile.intro}</p>
      <a href={`mailto:${profile.email}`} className="mt-3 inline-block text-xs text-bone hover:underline">{profile.email}</a><p className="mt-1 text-xs text-mist">{profile.phone}</p>
      <div className="mt-2 flex flex-wrap gap-4 text-xs text-mist"><a href={profile.links.linkedin} target="_blank" rel="noreferrer" className="hover:text-bone">LinkedIn ↗</a><a href={profile.links.behance} target="_blank" rel="noreferrer" className="hover:text-bone">Behance ↗</a></div>
    </header>
    <h4 className="mb-3 border-b border-white/10 pb-1.5 text-[10px] font-bold uppercase tracking-[0.3em] text-crimson-2">Featured Projects</h4>
    <div className="space-y-4">{projects.map((p) => <div key={p.id}><p className="text-sm font-semibold text-bone">{p.title}</p><p className="mt-1 text-xs leading-relaxed text-mist">{p.logline}</p><p className="mt-1 text-[11px] text-smoke">{p.stack.join(' · ')}</p></div>)}</div>
    <button type="button" onClick={() => setExpanded((v) => !v)} className="mt-5 rounded-full border border-white/20 px-4 py-2 text-xs font-semibold text-bone hover:bg-white/10">{expanded ? 'Hide skills & interests −' : 'Show skills & interests +'}</button>
    {expanded && <div className="mt-6 grid gap-6 sm:grid-cols-2"><div><h4 className="mb-2 text-[10px] font-bold uppercase tracking-[0.3em] text-crimson-2">Skills</h4>{skillCategories.map((c) => <p key={c.id} className="mb-2 text-xs leading-relaxed text-mist"><span className="font-semibold text-bone">{c.title}: </span>{c.skills.map((s) => s.name).join(', ')}</p>)}</div><div><h4 className="mb-2 text-[10px] font-bold uppercase tracking-[0.3em] text-crimson-2">Things I Love Doing</h4><p className="text-xs leading-relaxed text-mist">{profile.interests.join(' · ')}</p></div></div>}
  </article>;
}
