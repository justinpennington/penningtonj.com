---
title: "Stop Shopping for the Best AI Model. Fix What's Around It."
date: "2026-11-09"
excerpt: "The same AI model scored anywhere from 58% to 76.4% on one coding benchmark depending on the software wrapped around it. For operators, the lesson is to spend less time picking models and more time on what the agent sees, what it can touch, and how you check its work."
---

A chart has been making the rounds on X this weekend. Same AI model, same benchmark, wildly different scores. The only thing that changed was the software wrapped around the model, what engineers now call the harness.

The numbers come from Stanford's [Meta-Harness paper](https://arxiv.org/abs/2603.28052), which pulled results from the official Terminal-Bench 2.0 leaderboard. Claude Opus 4.6 passed 58.0% of the 89 tasks when run through Claude Code, 62.9% through Terminus 2, 69.9% through Droid, 74.7% through Terminus-KIRA, and 76.4% through the harness the Stanford team's automated search discovered. That's an 18.4-point spread with the model held constant.

There are fair caveats. The paper says it searched for and scored its harness on the same 89 tasks, and benchmark leaderboards are not your business. But the direction lines up with other evidence. Earlier this year Anthropic published [research on infrastructure noise](https://www.anthropic.com/research/infrastructure-noise) showing that changing nothing but the resource configuration (same Claude model, same harness, same tasks) moved Terminal-Bench 2.0 results by 6 percentage points.

## What the harness actually is

Strip away the jargon and the harness is everything except the model: what information the agent gets up front, which tools it's allowed to use, how it keeps track of progress, and how it checks whether it's actually done.

The Stanford harness's main trick is almost boring. According to the [project's write-up](https://github.com/stanford-iris-lab/meta-harness-tbench2-artifact), before the agent starts it takes a snapshot of its environment (the working directory, files, available tools, memory) and puts that into the first prompt. That saves the agent two to five turns of fumbling around figuring out where it is.

That's a briefing. Any good manager does it for a new hire.

## Why operators should care

A lot of small and mid-size businesses are still starting with the wrong question: which model should we use? Every few weeks a new release tops a leaderboard and the question starts over.

If one model can swing 18 points depending on its setup, then model choice is often not your biggest lever. The setup is. And the setup is the part you control, because it's made of your data, your processes, and your rules.

Here's the practical version:

1. **Brief the agent like a new hire.** Give it the customer record, the job history, the price sheet, and the policy, up front. Don't make it hunt.
2. **Give it the tools for one job, not every tool you own.** Fewer, clearer tools beat a long list it has to guess between.
3. **Define "done" in a way you can check.** A quote matches the price sheet. A follow-up got logged. A schedule has no double bookings. If you can't check it, the agent can't either.
4. **Keep a small test set of your own real work.** Twenty past jobs with known right answers is enough to start. Run it whenever you change the model or the setup.

That last point is where Garry Tan landed this week. He [posted](https://x.com/garrytan/status/2118920030243139596) that eval-driven loops for agent skills are necessary, and that he just removed one of his skills because a newer model handles that work better without it. Tests tell you what to add, and they also tell you what to take away.

## My take

At Infraxio we went from 30 people to seven since adopting AI, and we now deploy a full business hub in under three weeks instead of four to six months. Very little of that came from picking the right model. It came from the boring layer: clean records in IFX Hub, clear permissions, and checks that catch a wrong answer before a customer sees it. Models get swapped. That layer stays.

So when the next model tops a leaderboard, by all means try it. Just run it through your own test set first. If your agents aren't performing, look at what you're handing them before you blame the model.
