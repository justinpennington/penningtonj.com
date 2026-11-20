---
title: "Who Can See What Is a Workflow Decision, Not an IT Setting"
date: "2026-11-20"
excerpt: "Permissions set at go-live are a guess. Who can see and change a quote, a bid, a job, a customer view, or an agent's work is how the business runs, and it belongs in the workflow."
---

A crew lead is on a job and needs the site note. The note is in the system. Their login cannot open it, so they call the office. Or the margin on a quote is visible to everyone with a password, so the next quote gets built in a spreadsheet, where the number feels safer.

A system goes live. Someone from IT, or the person the vendor left in charge, sets the permissions on the way out, and that screen is treated as finished. Leave everything open and people stop trusting the system with a sensitive number, so the real work goes back to email. Lock almost everything and people ask a coworker for a report, or share a login, so the day can move.

I run [Infraxio](https://www.infraxio.com) from Ponte Vedra. Operators around Jacksonville and St. Johns County rarely call this a security project. They describe someone stuck waiting on a lookup, or a record that never entered the system because the wrong people would have seen it.

## Who Can See What Is the Work

Who owns a quote. Who can change the price. Who approves a bid before it leaves. What a crew lead needs at the job, and what stays with the office. What a customer can see, what a subcontractor can see, and what an AI agent is allowed to read and do.

That is the business. The permissions screen is where you write it down.

CRM and ERP projects still treat it as a setting. The vendor ships roles named after an org chart. Go-live copies them onto people, and a few weeks later the real work has moved. People will not put a sensitive number where the whole company can open it, or they cannot reach the record the job needs. I wrote about the wider failure in [nobody lives in the CRM](/blog/nobody-lives-in-the-crm). A system people do not trust, or cannot work inside, is a system they open when someone asks them to.

## Design the Role From the Handoff

Start with the handoff, not the title on the org chart.

The estimator owns the quote until a customer accepts it: the open quotes, the pricing rules, the history on that customer. Marking the job invoiced is someone else's step. The person who approves a bid needs the package, the price, and the deadline, not the draft library. Approval is a step. It is not a login with every switch turned on.

The crew lead needs today's jobs, the scope, the site notes, and a way to say the work is done. The office needs the schedule and what is waiting. Management needs the exceptions that crossed a line. The work moves from quote to job to field to invoice, and from pursuit to approval to submission. The role should follow that path.

## The First Screen Is Part of the Role

Less access is only half of it. Less noise is the other half.

A field user blocked from payroll can still open onto other people's jobs and a dashboard built for the owner. They decide the system is for the office. The crew lead should open today's jobs. The estimator should open open quotes. The approver should open what is waiting on a yes. The first screen decides whether they stay.

## People Outside Get a View

Customers, vendors, and subcontractors often get a thinned-out internal login. Someone then spends the rollout turning features off, or an outside party reads notes that were meant to stay inside.

Give them a narrow view built for one purpose. A carrier needs their appointment, not the yard. A customer needs a stage they can read, not the task list. A sub needs the scope they own and a place to say they are done. That view is easier to trust than an account you are always about to restrict.

## An Agent Is a Role

An AI agent is another worker, with its own role. What it can read, change, and send. Who is named when it is wrong. A log a person can read, tied to the task.

The shortcut is a shared login. The setup asks for a key, and someone pastes an admin key because it works. The agent can now see every customer's file and the button that sends. You would not hand a new hire that on the first day. The same shortcut is how agents get attached to the CRM, the inbox, and the shared drive: the agent inherits a person instead of getting a job. I wrote about giving every agent [a fence and an off switch](/blog/every-ai-agent-needs-a-fence-and-an-off-switch). The fence is the role. Scoped access, a named owner, and a record of what it did. If you cannot say which records it may touch, it is not ready.

## Where the Split Has to Live

In [IFX Hub](https://ifxhub.io), the office, the field, and management open different views of the same records. A crew lead sees the jobs in front of them. The office sees the board. A customer sees the stage, not the internal thread.

[IFX Bid](https://www.ifxbid.com) splits a pursuit across the hands that actually touch it. Someone drafts. Someone prices. Someone approves the submission. A shared folder pretends those are one person. The approval stays on the pursuit.

[Growth7](https://www.growth7.io) draws the line between marketing and sales on a lead. Marketing needs the campaign and who responded. Sales needs the lead that is ready and the history that came with it. Neither side needs the other's entire workspace.

[DockOps](https://www.dockops.app) is the outside view at a door. A carrier or a driver sees their appointment. The dock office sees the day. The driver does not see the rest of the yard.

Custom systems start with the same questions, before a role gets a name. Who creates the record, who changes it, who approves it, who only reads it, who stands outside the company, and which of those is an agent. The permissions fall out of the answers.

## The Go-Live Version Is a Guess

You will not know the real screens until people have used them on a job, or that accounting needs the accepted quote until an invoice is missing a line the customer already accepted. A shared login will turn up, because someone got blocked and the work did not wait.

Review the roles after the first few weeks of real use. Ask what people cannot see that they need, and what they never open. Tightening every role hides the work. Opening every role sends the sensitive work back to email. If the real quote, the real approval, and the real agent action live in email, the permissions are wrong.

## Questions for This Week

Take one workflow you actually run. A quote, a bid, a job, a dock appointment. Write down the hands on it.

**Who creates it, who changes it, and who only reads it?** If the answer is everyone with a login, you have a shared desk.

**What is on each person's first screen?** If it is the same screen for all of them, you cut access somewhere and left the noise.

**Who outside the company needs a view, and did you give them an account?** An account is the system. A view is the one thing they came for.

**What can an AI agent read and do, and where is the log?** If it uses someone's login, it does not have a role yet.

**Which of these did you set at go-live and never reopen?** The first version was a guess. The work since then is the spec.

Who can see what is how the business runs. Write the roles from the workflow, and the work can stay in the system.
