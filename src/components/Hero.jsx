import { Area, AreaChart, ResponsiveContainer } from "recharts";
import { motion } from "framer-motion";
import { DORA } from "../data/content.js";

export default function Hero() {
  return (
    <section className="hero">
      <div className="wrap hero-grid">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <p className="eyebrow">Streamlining SDLC with</p>
          <h1>Software Development <span>Analytics</span></h1>
          <p className="tag">Tech Leader's Guide</p>
          <p className="lead">Turn the data your engineering team already produces into decisions: find bottlenecks, protect quality and keep teams healthy.</p>
          <div className="btns">
            <a className="btn pri" href="#preamble">Start reading</a>
            <a className="btn ghost" href="#demo">See live demo</a>
          </div>
        </motion.div>
        <motion.div className="glass" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }}>
          <div className="gh"><b>Delivery overview</b><small>sample data</small></div>
          <div className="big">2.4<small> deploys/day</small></div>
          <div className="chart">
            <ResponsiveContainer width="100%" height={110}>
              <AreaChart data={DORA[0].data}>
                <defs>
                  <linearGradient id="heroFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor="#7ee8fa" stopOpacity={0.5} />
                    <stop offset="1" stopColor="#7ee8fa" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <Area type="monotone" dataKey="v" stroke="#7ee8fa" strokeWidth={2.5} fill="url(#heroFill)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
