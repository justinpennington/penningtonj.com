---
title: "Your AI Setup Doesn't Need an Org Chart"
date: "2026-11-17"
excerpt: "Anthropic's Applied AI team is telling builders to fold most subagents back into one agent loop. For operators, the lesson is simpler systems you can measure."
---

The fastest-moving idea in my feed this week is a correction, not a launch.

Anthropic's Applied AI team published guidance on when to fold subagents back into the main agent loop. Across several enterprise deployments, they found that a single agent that loads skills and tools as it needs them frequently beat both the one-giant-prompt design and the router-plus-specialists design on quality, and often cost less and ran faster per task. One customer saw roughly twice the speed after testing a single loop against its multi-agent setup. Another had a dozen specialist subagents inside its customer-facing agent and struggled to keep the experience consistent.

They didn't say subagents are dead. They said keep one when a single loop measurably degrades from too much context, when work truly needs to run in parallel in fresh context, or when one agent keeps picking the wrong tool or getting conflicting instructions. Everything else should earn its place.

## Why this matters for operators

A lot of AI projects I see are designed like an org chart. An intake agent hands to a planning agent, which hands to a sales agent, a scheduling agent and a billing agent. It looks organized on a whiteboard. In practice every handoff is a summary, and every summary loses something. When the customer's answer turns out wrong, nobody can tell which box dropped it.

Anthropic's reasoning matches what we see building systems for service businesses. One loop that can see the full job, from the first call to the quote to the schedule, makes better decisions than five agents passing notes. The plan sits in one place. The model that writes the plan is the one carrying it out, so it can change course when a result comes back different.

The part I'd underline is where they put the rules. Ordering and domain procedure go into skills. Hard limits like validation and approval gates go into the tools and the harness: turn budgets, cost budgets, write gates. That's the right split. The agent can be flexible about how it gets there. It should never be flexible about whether it can send the invoice or change the price.

## My take

Before you add another agent, write down how you'll know the system got better.

Anthropic's own migration advice is to build an end-to-end eval first. They say even 10 golden examples is enough to start. Then fold in one subagent at a time and compare. They also warn that a final score can hide regressions: in one test, folding in a subagent lowered latency but broke a process that had been passing, and it only showed up in one of two runs. Run each test more than once.

That's the practical playbook for a 10-person or 100-person company:

- Start with one agent and the real records it needs: customers, jobs, quotes, schedules.
- Put the business rules in the tools, not in a paragraph of prompt.
- Keep 10 real examples of the job done right and rerun them every time you change something.
- Split work off only when the numbers say you have to.

This is how we approach IFX Hub and the custom systems we build at Infraxio. The value isn't the number of agents. It's one clean record of the work, with guardrails around anything that touches money or customers.

Fewer moving parts, measured honestly, beats an impressive diagram.

## Sources

- [Anthropic, "Building agents: When to fold subagents into your main agent loop"](https://claude.com/resources/articles/building-agents-when-to-fold-subagents-into-your-main-agent-loop)
- [Anthropic single-agent-loop-kit on GitHub](https://github.com/anthropics/single-agent-loop-kit)
- [The Decoder, "Anthropic says one AI agent beats many subagents now that models can handle complexity alone"](https://the-decoder.com/anthropic-says-one-ai-agent-beats-many-subagents-now-that-models-can-handle-complexity-alone/)
- [AgenticFeed coverage](https://agenticfeed.io/anthropic-fold-subagents-single-agent-loop-guidance/)
