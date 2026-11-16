---
title: "The AI Tool You Set Up Last Quarter Is Holding Keys Someone Wants"
date: "2026-11-16"
excerpt: "Amazon's decoy servers caught attackers' AI agents hunting exposed AI gateways and app builders for the provider keys inside them. None of the techniques were new. Here's the short list I'd check this week."
---

Last Thursday, Amazon's threat intelligence team published something every operator who has spun up an AI tool should read. From October 3 to November 5, Amazon's MadPot network, a set of decoy sensors set up to look like popular AI model APIs, received requests from attackers' AI agents. Because those agents were treating the decoys as their own model backend, the requests carried the agents' working records: their instructions, their targets and what they reported finding.

The main campaign was simple and a little unsettling. The agents searched the internet for exposed AI applications, pulled out the model-provider API keys stored inside them, checked that the keys worked and added them to a shared pool. According to the agents' own records, the stolen keys were then fed back into the attackers' own gateway to pay for the AI that ran the next round of searching. Someone else's bill funded the hunt.

The targets weren't exotic. Amazon names LLM gateways and proxies like LiteLLM and One API, and AI app builders like Dify, Langflow, Open WebUI and Ollama. These are the tools a capable team member installs on a Friday to let the company try AI without a big project. The agents favored them for a reason: a gateway often holds keys for several providers, so one weak admin page can expose many accounts.

Two caveats matter. Amazon says it did not watch the downstream activity and cannot verify the outcomes the agents reported. It assesses with moderate confidence that the agents ran on ARTEX, an open-source AI penetration testing framework. So this isn't a count of victims. It's a clear look at what attackers were going after and how.

The line from Amazon's post that stuck with me: "None of the techniques in these campaigns were new." What AI agents change is speed and persistence. The agents succeeded where basic hygiene was missing: default or hardcoded credentials, keys left in code and public files, unauthenticated interfaces and unpatched software.

## What I'd check this week

**Find every AI tool that holds a key.** Not just the official ones. The gateway someone set up for testing, the chatbot builder running on a spare server, the notebook with a key pasted in. If you don't have a list, that's the first task.

**Close anything that answers without a login.** If an admin page or model endpoint is reachable from the internet without authentication, assume something has already found it. Put it behind a login or take it off the public internet.

**Change the defaults.** Amazon specifically calls out default administrator credentials, including LiteLLM's default master key. Default passwords are the first thing an automated scanner tries.

**Rotate keys and set spend limits.** If a key has ever lived in a repo, a shared doc or a config file, rotate it. Then set usage caps and alerts with each provider, so a stolen key shows up as a spike on a dashboard instead of a surprise on an invoice.

**Patch the AI stack like the rest of the stack.** Amazon's list includes known CVEs in Langflow and RAGFlow. AI tools are software, and they need the same update routine as everything else.

When we build systems at Infraxio, provider keys live in one managed place, not scattered across tools, and every AI feature sits behind the same sign-in as the rest of the business. That isn't clever. It's the fundamentals, and Amazon's own conclusion is that getting the fundamentals right is still the most effective defense.

The attackers now have agents that never get tired of checking. Your side of that is a short list and an afternoon.

## Sources

- [AWS Security Blog: Amazon Threat Intelligence observes threat actors running cybercrime campaigns with ARTEX AI agents (Nov 13, 2026)](https://aws.amazon.com/blogs/security/amazon-threat-intelligence-observes-threat-actors-running-cybercrime-campaigns-with-artex-ai-agents/)
- [The Hacker News: Amazon uncovers AI agent campaign targeting LiteLLM, Dify, and other apps for API keys](https://thehackernews.com/2026/11/amazon-uncovers-ai-agent-campaign.html)
- [Security Affairs: ARTEX, how cybercriminals use AI agents to scale their attacks](https://securityaffairs.com/203188/ai/artex-how-cybercriminals-use-ai-agents-to-scale-their-attacks.html)
