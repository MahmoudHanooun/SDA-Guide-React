// All page content lives here, so components stay small and the text is easy to edit.
// The guide is summarized in the author's own words; the original belongs to Keypup.

export const SECTIONS = [
  { id: "preamble", short: "Preamble", num: "04", title: "Preamble" },
  { id: "intro", short: "Introduction", num: "05", title: "Introduction" },
  { id: "what", short: "What is SDA", num: "06", title: "What is Software Development Analytics" },
  { id: "benefits", short: "Benefits", num: "08", title: "The benefits" },
  { id: "features", short: "Key features", num: "09", title: "The key features of a solution" },
  { id: "wrap", short: "Wrapping up", num: "13", title: "Wrapping up" },
  { id: "resources", short: "Resources", num: "14", title: "Resources & about" },
];

export const CAPABILITIES = [
  "Aggregate data from multiple sources",
  "Integrate easily with existing tools and workflows",
  "Run exploratory analysis on the data",
  "Build dashboards and reports for every persona in the chain",
  "Share dashboards with your team and beyond",
  "Get real-time insight into your processes",
  "Start fast with adaptable industry templates",
];

export const BENEFITS = [
  { icon: "Zap", title: "Streamlined processes", text: "See how work really flows, find bottlenecks and inefficiencies, and change the process based on facts to raise productivity." },
  { icon: "ShieldCheck", title: "Better quality", text: "Track each development phase to spot habits that lead to defects early and fix them before customers feel the pain." },
  { icon: "Users", title: "Optimized resources", text: "Understand how time is spent, reduce burnout and attrition risk, and invest in tools, training or mentoring where people struggle." },
];

export const FEATURES = [
  { title: "Aggregate data from multiple sources", text: "Unlike Git-only analytics, SDA pulls from several repositories and project-management tools. One view means less tool-hopping, fewer data discrepancies and a traceable history of events that helps with compliance." },
  { title: "Integrate with existing tools and workflows", text: "No new hires or new tools to learn. It should plug into your current stack without data engineering and adapt to your workflows, not the other way round." },
  { title: "Perform exploratory analysis", text: "Dig into all the data in your stack, not only what a vendor deems important. Drill down to the cause of a team's problem and decide quickly." },
  { title: "Build custom dashboards and reports", text: "Visualize data from the whole stack and track delivery, quality and well-being metrics, so you can improve and keep the team performing at its best." },
  { title: "Sharing and user adoption", text: "Dashboards should be shared with the team and beyond so everyone sees the same state. Look for access-level management and customization. Watch the pricing model: per-user pricing makes wide sharing harder." },
  { title: "Real-time insights for in-house processes", text: "Live data lets you catch and fix problems quickly, while static reports are often stale on arrival. The tool should also be tailored to your own needs." },
  { title: "Ready-to-adapt templates", text: "Start from proven templates such as DORA metrics or software-quality dashboards and get insight quickly." },
];

export const COMPARISON = [
  ["Main users", "Business users", "Software stakeholders, up to executives"],
  ["Data", "Often historical", "Historical and real-time"],
  ["Shared ground", "Data warehousing and mining, reporting, OLAP and dashboards; usable by technical and non-technical people", null],
];

export const SELECTION = ["Industry-proven templates", "Strong user-adoption and sharing capabilities", "Real-time metrics"];

export const RESOURCES = [
  { label: "Business intelligence (Wikipedia)", href: "https://en.wikipedia.org/wiki/Business_intelligence" },
  { label: "Business intelligence software (G2)", href: "https://www.g2.com/categories/business-intelligence" },
  { label: "How DORA metrics can measure and improve performance (DevOps.com)", href: "https://devops.com/how-dora-metrics-can-measure-and-improve-performance/" },
];

// Illustrative sample data for the demo dashboards (not real measurements).
const series = (arr) => arr.map((v, i) => ({ x: i + 1, v }));
export const DORA = [
  { title: "Deployment frequency", value: "2.4", unit: "deploys/day", delta: "+18%", good: true, color: "#2563eb", data: series([3, 4, 3, 5, 6, 5, 8, 7, 10, 12]) },
  { title: "Mean time to recovery", value: "3.2", unit: "hours", delta: "-24%", good: true, color: "#6d28d9", data: series([9, 8, 9, 7, 6, 6, 5, 4, 4, 3]) },
  { title: "PR lead time", value: "18", unit: "hours", delta: "-12%", good: true, color: "#059669", data: series([30, 22, 34, 20, 26, 18, 24, 16, 20, 14]) },
  { title: "Change failure rate", value: "6", unit: "%", delta: "+1%", good: false, color: "#dc2626", data: series([4, 6, 5, 7, 5, 6, 8, 5, 6, 6]) },
];
export const SPRINT = [
  { name: "To do", count: 9 },
  { name: "In development", count: 12 },
  { name: "In review", count: 6 },
  { name: "Done", count: 21 },
];
