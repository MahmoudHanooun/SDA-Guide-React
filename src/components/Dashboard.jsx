import { useState } from "react";
import { Area, AreaChart, Bar, BarChart, Cell, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { DORA, SPRINT } from "../data/content.js";

function Tile({ title, children }) {
  return <div className="tile"><h4>{title}</h4>{children}</div>;
}

function DoraTab() {
  return DORA.map((m) => (
    <Tile key={m.title} title={m.title}>
      <div className="kpi">{m.value}<small> {m.unit}</small></div>
      <span className={m.good ? "up" : "down"}>{m.delta}</span>
      <ResponsiveContainer width="100%" height={70}>
        <AreaChart data={m.data}>
          <defs>
            <linearGradient id={`f-${m.title}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor={m.color} stopOpacity={0.45} />
              <stop offset="1" stopColor={m.color} stopOpacity={0} />
            </linearGradient>
          </defs>
          <Tooltip contentStyle={{ fontSize: 12 }} />
          <Area type="monotone" dataKey="v" stroke={m.color} strokeWidth={2.5} fill={`url(#f-${m.title})`} />
        </AreaChart>
      </ResponsiveContainer>
    </Tile>
  ));
}

function SprintTab() {
  const total = SPRINT.reduce((s, x) => s + x.count, 0);
  const done = SPRINT[SPRINT.length - 1].count;
  const pct = Math.round((done / total) * 100);
  const pie = [{ name: "Done", value: done }, { name: "Open", value: total - done }];
  return (
    <>
      <Tile title="Sprint depth"><div className="kpi">{total}<small> items</small></div></Tile>
      <Tile title="Sprint progress">
        <div className="pie">
          <ResponsiveContainer width="100%" height={110}>
            <PieChart>
              <Pie data={pie} dataKey="value" innerRadius={34} outerRadius={50} startAngle={90} endAngle={-270} stroke="none">
                <Cell fill="#2563eb" /><Cell fill="#e8ecf8" />
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <b>{pct}%</b>
        </div>
      </Tile>
      <Tile title="Overdue items"><div className="kpi" style={{ color: "#ea580c" }}>7<small> items</small></div></Tile>
      <Tile title="Status">
        <ResponsiveContainer width="100%" height={110}>
          <BarChart data={SPRINT} layout="vertical" margin={{ left: 10 }}>
            <XAxis type="number" hide />
            <YAxis type="category" dataKey="name" width={96} tick={{ fontSize: 11 }} axisLine={false} tickLine={false} />
            <Tooltip cursor={false} contentStyle={{ fontSize: 12 }} />
            <Bar dataKey="count" fill="#3b82f6" radius={6} />
          </BarChart>
        </ResponsiveContainer>
      </Tile>
    </>
  );
}

export default function Dashboard() {
  const [tab, setTab] = useState("dora");
  return (
    <>
      <h3 id="demo" className="demo-h">Live demo: adaptable dashboard templates</h3>
      <div className="tabs" role="tablist">
        <button className={tab === "dora" ? "on" : ""} onClick={() => setTab("dora")}>DORA metrics</button>
        <button className={tab === "sprint" ? "on" : ""} onClick={() => setTab("sprint")}>Sprint overview</button>
      </div>
      <div className="dash">{tab === "dora" ? <DoraTab /> : <SprintTab />}</div>
      <p className="fine">Illustrative sample data, generated in your browser.</p>
    </>
  );
}
