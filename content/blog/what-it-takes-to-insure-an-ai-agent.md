---
title: "An Insurer Just Told Us What It Takes to Trust an AI Agent"
date: "2026-11-10"
excerpt: "Crosby, a New York AI law firm, got a $5 million policy covering its agents' work. What the insurer asked to see is a checklist every operator can use."
---

Last week a New York law firm called Crosby did something I haven't seen before. It bought a $5 million liability policy that covers the work of its AI agents, from Testudo, a two-year-old insurer backed by Lloyd's of London. The policy took effect at the start of November. Once it did, Crosby took lawyers off the tasks that don't legally need one, things like summarizing negotiations, pulling prior business context and routing documents for approval. That's about 20% of the work its lawyers used to do.

I'm not a lawyer, and I don't run a law firm. The part that caught my attention is how they got there.

## What the insurer wanted to see

According to Crosby founder Ryan Daniels, getting covered took about six months. Testudo did a technical review of Crosby's systems and models, its governance controls, and the logs of every human review step. It also read through the firm's internal contracts and policies. Crosby had to show, with records, that its agents were safer than people for a specific set of tasks.

Crosby also says it measures each new agent capability against its own test data. Before launch it hit 94% accuracy on escalation, meaning the agent either finished the task correctly or correctly handed it to a lawyer. The agents run in a sandbox and only see the data for the client they're working on.

Read that list again: a defined scope, logs of who reviewed what, a measured accuracy number, a clear handoff to a human, and walls between customers. None of it is about which model they use. It's all about the system around the model.

## Why this matters if you run a business

Most owners I talk to are stuck in the same spot. They've tried an agent, it works most of the time, and they still have someone checking everything it does. So they get the cost of the software and the cost of the person. The work doesn't get cheaper. It just gets a second step.

The way out isn't hoping the next model is smarter. It's being able to prove, to yourself, your customers or eventually an insurer, that a specific task is safe to hand off. You can't prove that from a feeling. You prove it from records.

Here's what I'd do this week if I were running operations anywhere:

- Pick one narrow task the agent already handles, not a whole job.
- Log every run: what came in, what the agent did, whether a person changed it.
- Track two numbers: how often the output was right, and how often it correctly said "this one needs a human."
- Set the bar in advance for when review stops for that task, and write it down.

If you can't produce those records, nobody should remove the human, and an insurer certainly won't cover it.

## Where we've landed at Infraxio

This is how we build in IFX Hub. Agent work happens inside the same system where the customer record, the approval and the audit trail live, so the history exists before anyone asks for it. It's the difference between telling a client "the AI is pretty good" and showing them exactly what it did on every job.

Crosby is betting that a year from now, serious firms will insure their agents the way they insure their people. I don't know if that timeline holds outside of law. But the paperwork the insurer asked for is a good test for any business, whether or not you ever buy the policy. If you can't show your work, the agent isn't ready to work alone.

## Sources

- Ryan Daniels, [Building safer lawyer agents](https://crosby.ai/blog/ai-agent-insurance), Crosby, November 9, 2026
- [Crosby Insures Paralegal Agents – Interview](https://www.artificiallawyer.com/2026/11/10/crosby-insures-paralegal-agents-interview/), Artificial Lawyer, November 10, 2026
- [A.I. law firm Crosby bought $5 million in liability insurance for its agents](https://qz.com/crosby-ai-law-firm-liability-insurance-testudo-110726), Quartz, citing The New York Times
- [Crosby takes out a "first of its kind" malpractice policy for its AI agents](https://www.pointblank.law/p/crosby-takes-out-a-first-of-its-kind-malpractice-policy-for-its-ai-agents), Point Blank, November 10, 2026
