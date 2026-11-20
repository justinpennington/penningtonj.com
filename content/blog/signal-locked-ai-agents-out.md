---
title: "Signal Just Locked AI Agents Out. Do You Know What Yours Can See?"
date: "2026-11-20"
excerpt: "Signal now blocks screenshots by default to keep phone AI agents out of private chats, the same week Gemini on Mac learned to click through your apps. Here's what that means for businesses."
---

Two stories crossed my feed within a day of each other, and they belong together.

On Thursday, Google rolled out computer use in the Gemini app for Mac. With permission, Gemini can now click, type, scroll and work through menus across desktop apps, local files and the web. Google's examples include pulling weights and addresses out of PDFs to fill in shipping quotes and staging resale listings from a folder of photos.

On Friday, Signal said it will restrict screenshots by default to stop AI agents built into phone operating systems from reading people's chats. Signal president Meredith Whittaker wrote that these agents "scan" what is on screen, and that the result is an environment that is "increasingly hostile to privacy." On iOS 27 the app blocks screenshots. On Android it turns on its Screen Security setting when it detects an AI assistant trying to read the screen. Signal called its own fix "incomplete," said it can't reliably offer the same protection on macOS, and asked Apple, Google and Microsoft to give developers a simple way to opt their apps out of AI data access.

## What changed

The way most AI assistants get work done is shifting. Instead of connecting to a system through an integration with defined permissions, more of them now look at the screen and act on whatever is there. That's useful. It's also a much wider door.

Google's own help page is direct about it. Gemini has access to logged-in accounts and active sessions in the Mac apps you allow. It can read multi-factor codes visible in messaging apps. Untrusted content on screen in one app can push it to take actions in another. Some actions can't be undone.

Signal's move is one app deciding it doesn't want to be part of that.

## Why it matters for operators

Picture a typical office laptop. Email, the accounting system, the CRM, a bank portal, a few client chats. If someone turns on a screen-reading assistant to save time on a form, the assistant can see all of it, not just the form. Whatever it captures may be stored or sent somewhere outside your control.

Most small and mid-size businesses don't have a policy for this yet, because a year ago there was nothing to have a policy about.

## My take

I like these tools. Filling out the same shipping form forty times is exactly the kind of work software should take off people's plates. But how an agent gets to your data matters as much as what it does with it.

A few things worth doing now:

- **Ask what's turned on.** Find out which AI assistants your team is using on company machines and phones, and which apps they've been allowed to see or control.
- **Keep sensitive apps out of reach.** Banking, payroll, client records and anything holding passwords or codes shouldn't be on the allowed list. Signal suggests adding it to the Excluded Apps list under Siri settings on a Mac, and most assistants have a similar setting.
- **Prefer scoped access over screen access.** When a workflow matters, connect the systems properly, with a login that can only touch what that job needs and a log of what it did.
- **Keep a person on the final click.** Payments, submissions and anything sent to a customer should wait for approval.

That last pair is how we build at Infraxio. In IFX Hub, IFX Bid and the custom systems we deploy, automation works through defined permissions and leaves a record, and the steps that commit money or speak for the business wait for a human. A screen-reading assistant is a fine tool for one-off chores. It shouldn't be the way your business-critical work gets done.

The question for this week isn't whether to use AI agents. It's whether you know what yours can see.

## Sources

- [Signal is Serious About Protecting Your Privacy](https://signal.org/blog/protecting-your-privacy/) (Signal, Nov 20, 2026)
- [Signal restricts screenshots to block AI agents from reading messages](https://www.investing.com/news/stock-market-news/exclusivesignal-restricts-screenshots-to-block-ai-agents-from-reading-messages-5040998) (Reuters, via Investing.com)
- [Signal is blocking Gemini and Siri AI from reading your screen](https://www.theverge.com/ai-artificial-intelligence/1038390/signal-blocking-ai-agent-screenshots-mobile-app) (The Verge)
- [Let Gemini tackle repetitive chores on your Mac](https://blog.google/innovation-and-ai/products/gemini-app/computer-use-mac/) (Google, Nov 19, 2026)
- [Use Gemini to work with apps on your Mac](https://support.google.com/gemini/answer/18956635) (Gemini Apps Help)
- [Signal restricts screenshots to block AI agents](https://x.com/Reuters/status/2123772132924485759) (Reuters on X)
