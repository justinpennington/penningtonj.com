---
title: "The Todoist Breach Is a Checklist for Every App You've Connected"
date: "2026-11-25"
excerpt: "Todoist's breach notice shows what an attacker looks for once inside a tool your team uses: tokens, connected inboxes and passwords pasted into tasks. Here's the checklist I'd run this week."
---

Todoist, the to-do app, disclosed a breach this week. Between November 22 and 23, an attacker used a stolen credential tied to the company's version control system, changed automated workflows to collect more credentials, took over an employee's work account and got into Todoist's cloud infrastructure and production systems. Founder and CEO Amir Salihefendić posted about it on X and said in a reply that a developer's machine was compromised and used to gain further access.

I want to give Todoist credit first. Its incident page has a timestamped timeline, a plain list of what was taken and specific steps for customers. That's what you want from a vendor on its worst day.

But the reason this one is worth an operator's time is what the attacker went looking for once inside.

## What changed

For about 6% of users, the attacker downloaded email addresses, account creation dates and old salted SHA1 password hashes. Todoist stopped using that method more than a decade ago, but kept those hashes for accounts whose passwords had never been changed. The company said it should have retired it sooner.

For much smaller groups, the attacker pulled Todoist API tokens and Slack integration tokens. They searched tasks, comments and attachment names for anything that looked like an API key, access token or other credential. And using credentials from the Todoist for Outlook add-in, they read parts of connected mailboxes, including subjects, senders, the start of messages and attachment names, searching for terms tied to developer tools, credentials, cryptocurrency and file sharing.

Read that list again. The attacker wasn't after anyone's grocery list. They wanted keys to other systems.

## Why it matters for operators

Most small and mid-size businesses run on a dozen or more apps connected to each other. A task app talks to Slack. A calendar tool reads email. A script uses an API token someone created two years ago. Each of those connections is a door, and when one vendor gets breached, the doors it holds open into your business matter more than the vendor's own data.

And people paste secrets wherever they're working. A password in a task comment so a teammate can finish a job. An API key in a chat thread. Todoist's own guidance says it plainly: "Deleting a comment does not invalidate a secret that may already have been copied."

## My take

You don't need to be a Todoist customer to use this. Here's the checklist I'd run this week:

- **Get secrets out of work tools.** Search your task app, chat and shared docs for passwords and keys. Move them into a password manager and rotate anything you find, because deleting it isn't enough.
- **Review connected apps.** Pull the list of third-party apps connected to your Microsoft 365, Google Workspace and Slack accounts. Remove anything nobody uses.
- **Question the permissions.** If an add-in can read every email in a mailbox, decide whether the job it does is worth that.
- **Find the old stuff.** Accounts, passwords and tokens nobody has touched in years are exactly what lingered here. Retire them.
- **Know your vendor's notice address.** Todoist told users its notices come from one address and that it would never ask for a password. Phishing follows every breach, so make sure your team knows to check.

We hold ourselves to the same list. Infraxio is seven people, and a lot of our work runs through connected tools and AI agents. When we build an IFX Hub or a custom system for a client, credentials live in a vault, each integration gets the narrowest access that does the job, and every connection has a name next to it. None of that stops a vendor from getting breached. It does limit what an attacker can reach when one does.

## Sources

- Todoist, [Security incident in November 2026](https://www.todoist.com/help/todoist/get-started/security-incident-in-november-2026-cG0EIACNU) (initially published November 24, 2026; updated November 25)
- TechCrunch, [Todoist confirms 6% of customers' details were stolen in data breach](https://techcrunch.com/2026/11/25/todoist-confirms-6-of-customers-details-were-stolen-in-data-breach/) (Ivan Mehta, November 25, 2026)
- Amir Salihefendić on X, [incident post](https://x.com/amix3k/status/2125449691739328535) and [reply on how access was gained](https://x.com/amix3k/status/2125520001356726509) (November 25, 2026)
