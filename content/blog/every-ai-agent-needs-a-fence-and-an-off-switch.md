---
title: "Every AI Agent Needs a Fence and an Off Switch"
date: "2026-11-03"
excerpt: "In one week, an engineer's testing agents wandered into a competitor's systems, an autonomous attack framework got into WorkOS's sales tools, and CrowdStrike agreed to buy two AI security startups. The lesson for operators is the same in all three: scope your agents before you scale them."
---

Three stories crossed my feed in the last few days, and they belong together.

First, Railway. An engineer there was running AI agents to sign up for and test competing hosting platforms. Primcloud founder Josh Manders posted that those agents were scanning his systems and reaching for credentials. The engineer, Jake Runzer, replied that it was him, that there was no malice, and that he had halted the harness because it was "going off the rails and reaching too far." Railway CEO Jake Cooper apologized publicly and said Railway would ban non-manual external testing. Primcloud says nothing was breached.

Second, WorkOS. The company disclosed that on October 30 it found unauthorized access to an internal tool its sales team uses. It says production systems and application data were not touched, but CRM records, account histories, and summaries of sales and support conversations were exposed. CEO Michael Grinich said the attack involved ARTEX, an autonomous AI framework built for offensive security work.

Third, CrowdStrike. On November 3 it announced agreements to acquire Fiddler AI, which tracks what agents do and why, and Dreadnode, which tests AI models and agents for weaknesses before they ship. Reporting puts the combined price at about $495 million. CrowdStrike is pitching the pair as a way for companies to see what every agent did and prove it stayed within its task.

## What changed

For the last two years, the business question about AI agents was whether they could do useful work. That question is mostly answered. The Railway agents were good enough at their job that they kept going past it. The new question is what an agent is allowed to touch, who answers for it, and how fast you can stop it.

Cooper put it plainly in his response: if you operate the machinery, you are responsible for what it does. That is true for a startup engineer, and it is true for a 20-person distributor that just wired an agent into its CRM.

## Why it matters for operators

Most small and mid-size companies are not going to buy an enterprise AI security platform this year. They are going to connect agents to email, the CRM, the accounting system, and shared drives, often through a tool someone signed up for on a Tuesday. The WorkOS breach is a reminder of what sits in those systems: contact lists, deal notes, and call summaries that make a fake invoice or a fake request from a colleague look real.

The fix is not to avoid agents. It is to give them the same structure you would give a new hire.

- **A fence.** Each agent gets access to the systems and records its job requires, and nothing else. No shared admin logins, no "just give it everything for now."
- **An owner.** A named person is accountable for each agent, the same way someone owns a vendor relationship.
- **A record.** Every action the agent takes is logged where a human can read it, tied to the task it was working on.
- **An off switch.** Someone can pause it in minutes, and you have tested that you can.

## My take

At Infraxio, this is how we build agents into IFX Hub and the custom systems we ship: agents work from assigned tasks, with scoped access, a human owner, and approval steps before anything leaves the building. That structure is not there to slow the work down. It is what lets us hand agents more of it.

The Railway story will get remembered as a funny "the AI did it" moment. I think it is more useful as a checklist. Before you add the next agent, write down what it can reach, who owns it, where its actions are logged, and how you would stop it. If you cannot answer all four, it is not ready for production.

*Sources: [Primcloud and Railway coverage (Runtime Wire)](https://runtimewire.com/article/railway-cofounder-apologizes-after-employee-accused-of-trying-to-breach-primclou), [WorkOS security bulletin](https://workos.com/security/bulletins/october-30th-2026-data-security-incident), [CrowdStrike on Fiddler](https://www.crowdstrike.com/en-us/press-releases/crowdstrike-to-acquire-fiddler-to-deliver-agent-observability/), [CrowdStrike on Dreadnode](https://www.crowdstrike.com/en-us/press-releases/crowdstrike-to-acquire-dreadnode-advance-ai-trust/), and [deal value reporting (Crypto Briefing)](https://cryptobriefing.com/crowdstrike-acquires-fiddler-ai-dreadnode/).*
