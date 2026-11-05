---
title: "If You Can't Undo What the Agent Did, You Won't Let It Do Much"
date: "2026-11-05"
excerpt: "Dropbox's new agent records which conversation changed each file so you can roll back only that work. That undo button is the feature operators should be asking every AI vendor about."
---

Dropbox announced this morning that its app can now act on your files, not just search them. You describe what you want, it finds the relevant content, proposes a plan, and carries out supported actions after you approve. The company says the new experience has already rolled out to more than 70,000 teams, alongside a new storage product for AI apps called DBX Agent Cloud and a planned acquisition of Tigris Data.

The acquisition is the headline. The part I'd pay attention to as an operator is buried in a Dropbox engineering post about how the feature was built.

## What actually changed

Two Dropbox engineers, Daniel Reiter Horn and Rich Chan, describe the guardrails behind the agent. Each conversation runs in its own isolated workspace. Credentials stay outside that workspace, and permission checks happen in a separate layer the agent can't touch, so it can't give itself more access. For a broad request, the agent has to propose a plan first and can't even ask to change files until that plan is accepted. Then it asks for access to specific folders, and you click Allow or Deny.

And then there's undo. Dropbox records which conversation produced each version of every file the agent changes. If you don't like the result, you pick that turn and roll back only the agent's changes, leaving everything else alone. If a coworker edited one of those files in the meantime, Dropbox saves the restored version as a separate copy so their work isn't wiped out.

## Why this matters for operators

In my experience, most businesses aren't stuck on whether an AI agent can do the work. They're stuck on what happens when it does the work wrong. If the only recovery plan is "restore last night's backup," nobody is going to let an agent rename 400 files, update a pricing sheet, or clean up a customer list. The risk is too lopsided.

A precise undo changes the math. When you can see exactly which request caused a change and reverse just that, the cost of a mistake drops to a few minutes. That's when people actually start handing work over.

The plan-first step matters for the same reason. Dropbox's engineers point out that reviewing hundreds of individual changes would make the tool useless, so you approve the approach and the folders instead of every edit. That's the right level for a busy owner. You're signing off on intent, not proofreading.

## My take

When we build systems at Infraxio, whether it's a business hub, a bidding workflow, or something custom, the question I ask before an agent gets write access isn't "how smart is the model?" It's "if this goes sideways at 4 p.m. on a Friday, can we put it back, and can we see why it happened?"

So here's a simple test for any AI tool you're evaluating this quarter. Ask the vendor three things:

1. Does every change the agent makes get tied back to the request that caused it?
2. Can I undo one agent task without undoing everything else that happened that day?
3. Are the agent's permissions enforced somewhere the agent itself can't change?

If the answer to any of those is no, keep it read-only for now. If it's yes to all three, you can start giving it real work, and you'll find out quickly where it earns its keep.

The labs will keep competing on how capable their models are. For the people actually running businesses, being able to undo the agent's work will matter more.

*Sources: [Dropbox announcement via Business Wire](https://www.businesswire.com/news/home/20261105637007/en/Dropbox-Announces-Plans-to-Acquire-Tigris-Data-Inc.-and-Unveils-DBX-Agent-Cloud-as-Part-of-AI-Powered-Product-Evolution), [Dropbox engineering blog](https://dropbox.tech/machine-learning/how-two-engineer-side-projects-became-the-agent-taking-action-inside-dropbox), and [@Dropbox on X](https://x.com/Dropbox/status/2118343261354086409).*
