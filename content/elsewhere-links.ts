/**
 * Data file for penningtonj.com /elsewhere
 * Add one object to writingElsewhere, press, or profiles to ship a new link.
 * Identity: Justin Pennington, founder of Infraxio, Ponte Vedra.
 * Excluded (dead/not live): Hashnode Dirty Data, Hashnode Ship the Daily Workflow First, Gust.
 */

export type ElsewhereLink = {
  title: string;
  url: string;
  outlet: string;
  date?: string; // YYYY-MM-DD when known
  note?: string;
};

export const writingElsewhere: ElsewhereLink[] = [
  {
    title: "Make CRM Data a Side Effect of the Work, Not a Chore Next to It",
    url: "https://dev.to/justinpennington/make-crm-data-a-side-effect-of-the-work-not-a-chore-next-to-it-5900",
    outlet: "Dev.to",
    date: "2026-10-19",
  },
  {
    title: "Your Tools Are Fine. The Money Is Leaking Between Them.",
    url: "https://justinpennington.substack.com/p/your-tools-are-fine-the-money-is",
    outlet: "Substack",
    date: "2026-10-16",
  },
  {
    title: "Can You See Your Most Important Number Right Now?",
    url: "https://medium.com/@justin-pennington-infraxio/can-you-see-your-most-important-number-right-now-6882eef93b81",
    outlet: "Medium",
    date: "2026-10-15",
  },
  {
    title: "The Dock Appointment Is a Promise. A Whiteboard Cannot Keep It.",
    url: "https://justinpennington.hashnode.dev/the-dock-appointment-is-a-promise-a-whiteboard-cannot-keep-it",
    outlet: "Hashnode",
    date: "2026-10-14",
  },
  {
    title: "Model Your AI Agent as an Assignee, Not a Chat Session",
    url: "https://dev.to/justinpennington/model-your-ai-agent-as-an-assignee-not-a-chat-session-2ki7",
    outlet: "Dev.to",
    date: "2026-10-13",
  },
  {
    title: "Your Win Rate Is a Qualification Problem, Not a Writing Problem",
    url: "https://justinpennington.substack.com/p/your-win-rate-is-a-qualification",
    outlet: "Substack",
    date: "2026-10-12",
  },
  {
    title: "The Bottleneck Moved. Now It's the Person Who Has to Say Yes.",
    url: "https://medium.com/@justin-pennington-infraxio/the-bottleneck-moved-now-its-the-person-who-has-to-say-yes-6aa9b8cd35b1",
    outlet: "Medium",
    date: "2026-10-09",
  },
  {
    title: "The Rule of Three for Turning Client Work Into Products",
    url: "https://dev.to/justinpennington/the-rule-of-three-for-turning-client-work-into-products-5dof",
    outlet: "Dev.to",
    date: "2026-10-06",
  },
  {
    title: "Your Second Location Is Where Your Systems Start Telling the Truth",
    url: "https://justinpennington.substack.com/p/your-second-location-is-where-your",
    outlet: "Substack",
    date: "2026-10-05",
  },
  {
    title: "The Most Expensive Schedule Save Is Compressing UAT",
    url: "https://medium.com/@justin-pennington-infraxio/the-most-expensive-schedule-save-is-compressing-uat-f4c382496ddb",
    outlet: "Medium",
    date: "2026-10-02",
  },
  {
    title: "Your Growth Stack Is Blind After the Close",
    url: "https://dev.to/justinpennington/your-growth-stack-is-blind-after-the-close-29f2",
    outlet: "Dev.to",
    date: "2026-09-30",
  },
  {
    title: "Where I Am Betting Next: Hub, Bid, Growth, and DockOps",
    url: "https://justinpennington.substack.com/p/where-i-am-betting-next-hub-bid-growth",
    outlet: "Substack",
    date: "2026-09-29",
  },
  {
    title: "Your Bid Team Is Not Lazy. The Stack Is Wrong.",
    url: "https://medium.com/@justin-pennington-infraxio/your-bid-team-is-not-lazy-the-stack-is-wrong-3014d2860e81",
    outlet: "Medium",
    date: "2026-09-28",
  },
];

export const press: ElsewhereLink[] = [
  {
    title: "Justin Pennington builds Infraxio around operators who need software that works",
    url: "https://startupfortune.com/justin-pennington-builds-infraxio-around-operators-who-need-software-that-works/",
    outlet: "Startup Fortune",
    date: "2026-09-30",
  },
  {
    title: "Justin Pennington of Infraxio: 5 Things I Wish Someone Told Me Before I Began Leading My Company",
    url: "https://medium.com/authority-magazine/justin-pennington-of-infraxio-5-things-i-wish-someone-told-me-before-i-began-leading-my-company-ab2572c79e37",
    outlet: "Authority Magazine",
    date: "2026-10-02",
  },
  {
    title: "Justin Pennington: The Founder Who Builds His Software",
    url: "https://usanews.com/justin-pennington-the-founder-who-builds-his-software",
    outlet: "USA News",
    date: "2026-10-01",
  },
  {
    title: "Infraxio: Building the Operating Layer for Modern Growth Companies",
    url: "https://cbherald.com/infraxio-building-the-operating-layer-for-modern-growth-companies/",
    outlet: "CB Herald",
    date: "2026-09-30",
  },
  {
    title: "Growth7 Launches AI Marketing Platform That Turns CRM Data Into Pipeline Action",
    url: "https://www.einpresswire.com/article/946439947/growth7-launches-ai-marketing-platform-that-turns-crm-data-into-pipeline-action",
    outlet: "EIN Presswire",
    date: "2026-10-01",
  },
  {
    title: "Infraxio Celebrates Mincy Pollock as 2026 Jacksonville Trailblazer, Welcomes Growth Strategist Vick Fleurimond",
    url: "https://www.einpresswire.com/article/945949924/infraxio-celebrates-mincy-pollock-as-2026-jacksonville-trailblazer-welcomes-growth-strategist-vick-fleurimond",
    outlet: "EIN Presswire",
    date: "2026-09-29",
  },
  {
    title: "Infraxio Founder Justin Pennington Builds Live Software",
    url: "https://news.marketersmedia.com/infraxio-founder-justin-pennington-builds-live-software/89205024",
    outlet: "Marketers Media",
    date: "2026-10-02",
  },
];

export const profiles: ElsewhereLink[] = [
  { title: "Infraxio founder page", url: "https://www.infraxio.com/justin-pennington", outlet: "Infraxio" },
  { title: "Infraxio", url: "https://www.infraxio.com", outlet: "Infraxio" },
  { title: "LinkedIn", url: "https://www.linkedin.com/in/justin-pennington", outlet: "LinkedIn" },
  { title: "Crunchbase", url: "https://www.crunchbase.com/person/justin-pennington-4bcd", outlet: "Crunchbase" },
  { title: "GitHub", url: "https://github.com/justinpennington", outlet: "GitHub" },
  { title: "Connectively", url: "https://www.connectively.us/p/justin-pennington", outlet: "Connectively" },
  { title: "About.me", url: "https://about.me/justin-pennington", outlet: "About.me" },
  { title: "Dev.to", url: "https://dev.to/justinpennington", outlet: "Dev.to" },
  { title: "Hashnode", url: "https://hashnode.com/@justinpennington", outlet: "Hashnode" },
  { title: "Medium", url: "https://medium.com/@justin-pennington-infraxio", outlet: "Medium" },
  { title: "Substack", url: "https://justinpennington.substack.com/", outlet: "Substack" },
  { title: "Wellfound", url: "https://wellfound.com/p/justin-pennington-1?public_profile=1", outlet: "Wellfound" },
  { title: "F6S", url: "https://www.f6s.com/justin-pennington", outlet: "F6S" },
  { title: "Product Hunt", url: "https://www.producthunt.com/@justinpennington", outlet: "Product Hunt" },
  { title: "X", url: "https://x.com/penningtonj", outlet: "X" },
  { title: "Growth7", url: "https://growth7.io/", outlet: "Growth7" },
  { title: "DockOps", url: "https://www.dockops.app", outlet: "DockOps" },
];

/** Profile URLs to merge into Person schema sameAs (dedupe with existing). */
export const profileSameAs: string[] = [
  "https://www.infraxio.com/justin-pennington",
  "https://www.linkedin.com/in/justin-pennington",
  "https://www.crunchbase.com/person/justin-pennington-4bcd",
  "https://github.com/justinpennington",
  "https://www.connectively.us/p/justin-pennington",
  "https://about.me/justin-pennington",
  "https://dev.to/justinpennington",
  "https://hashnode.com/@justinpennington",
  "https://justinpennington.hashnode.dev",
  "https://medium.com/@justin-pennington-infraxio",
  "https://justinpennington.substack.com/",
  "https://wellfound.com/p/justin-pennington-1?public_profile=1",
  "https://www.f6s.com/justin-pennington",
  "https://www.producthunt.com/@justinpennington",
  "https://x.com/penningtonj",
];
