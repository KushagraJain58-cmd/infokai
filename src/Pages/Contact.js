import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Mail, MapPin, Check } from "lucide-react";
import PageTransition from "../Components/common/PageTransition";
import PageHero from "../Components/common/PageHero";
import Reveal from "../Components/common/Reveal";
import InfokaiMark from "../assets/svg/InfokaiMark";

const interests = ["AskBiz", "Pioneer for schools", "JAMSD", "Custom product", "Partnership"];

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [picked, setPicked] = useState(["Custom product"]);
  const [sent, setSent] = useState(false);

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });
  const toggle = (i) => setPicked((p) => (p.includes(i) ? p.filter((x) => x !== i) : [...p, i]));

  // TODO: wire to a backend endpoint; for now this opens the user's mail client.
  const submit = (e) => {
    e.preventDefault();
    const body = `${form.message}\n\n— ${form.name}${form.company ? `, ${form.company}` : ""}\nInterested in: ${picked.join(", ")}`;
    window.location.href = `mailto:hello@infokai.com?subject=${encodeURIComponent(`Enquiry from ${form.name}`)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <PageTransition>
      <PageHero eyebrow="Contact us" title="Let's build something lasting." italic={[3, 4]}>
        Whether you want AskBiz for your business, Pioneer for your school, or a product of your own — we'd love to hear from you.
      </PageHero>
      <section className="grain relative bg-[color:var(--abyss)] py-24 text-[color:var(--ivory)] md:py-32">
        <div className="container-x relative z-10 grid gap-20 lg:grid-cols-[1fr_1.6fr]">
          <Reveal className="space-y-10">
            <div>
              <div className="eyebrow mb-3 text-[color:var(--brass)]">Write to us</div>
              <a href="mailto:hello@infokai.com" className="link-u flex w-fit items-center gap-3 font-display text-2xl md:text-3xl"><Mail size={22} /> hello@infokai.com</a>
            </div>
            <div>
              <div className="eyebrow mb-3 text-[color:var(--brass)]">Based in</div>
              <p className="flex items-center gap-3 font-display text-2xl md:text-3xl"><MapPin size={22} /> India</p>
            </div>
            <div className="pt-6 opacity-30"><InfokaiMark size={140} color="var(--mist)" animate delay={0.8} /></div>
          </Reveal>

          <AnimatePresence mode="wait">
            {sent ? (
              <motion.div key="done" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-start justify-center">
                <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", delay: 0.2 }} className="grid h-20 w-20 place-items-center rounded-full bg-[color:var(--brass)] text-[color:var(--deep)]"><Check size={36} /></motion.span>
                <h2 className="mt-8 font-display text-5xl">Thank you, {form.name.split(" ")[0] || "friend"}.</h2>
                <p className="mt-4 text-white/60">Your mail app should have opened with the message ready. We usually reply within one business day.</p>
                <button onClick={() => setSent(false)} className="link-u mt-8 text-sm text-[color:var(--brass)]">Send another message</button>
              </motion.div>
            ) : (
              <motion.form key="form" onSubmit={submit} exit={{ opacity: 0, y: -20 }} className="space-y-10">
                <Reveal delay={0.1}>
                  <div className="eyebrow mb-4 text-white/50">I'm interested in</div>
                  <div className="flex flex-wrap gap-2">
                    {interests.map((i) => {
                      const on = picked.includes(i);
                      return (
                        <motion.button type="button" key={i} whileTap={{ scale: 0.94 }} onClick={() => toggle(i)}
                          className={`rounded-full border px-5 py-2.5 text-sm transition-all duration-400 ${on ? "border-[color:var(--brass)] bg-[color:var(--brass)] text-[color:var(--deep)]" : "border-white/20 text-white/70 hover:border-white/50"}`}>
                          {i}
                        </motion.button>
                      );
                    })}
                  </div>
                </Reveal>
                <div className="grid gap-8 md:grid-cols-2">
                  <Reveal delay={0.15}><input required className="field" placeholder="Your name *" value={form.name} onChange={set("name")} /></Reveal>
                  <Reveal delay={0.2}><input required type="email" className="field" placeholder="Email *" value={form.email} onChange={set("email")} /></Reveal>
                </div>
                <Reveal delay={0.25}><input className="field" placeholder="Company / School" value={form.company} onChange={set("company")} /></Reveal>
                <Reveal delay={0.3}><textarea required rows={4} className="field resize-none" placeholder="Tell us about your project *" value={form.message} onChange={set("message")} /></Reveal>
                <Reveal delay={0.35}><button type="submit" className="btn btn-light cut">Send message <ArrowRight size={16} /></button></Reveal>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </section>
    </PageTransition>
  );
};

export default Contact;
