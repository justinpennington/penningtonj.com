---
title: "Design for the Exception, Not the Happy Path"
date: "2026-11-23"
excerpt: "Most business software is drawn around the order that goes through and the truck that shows up on time. The staff time lives in the exceptions, and if those have no state in the system they fall back to email and one person's memory."
---

The demo always works. The order is complete, the truck is on time, the bid has every document, and the lead filled the form the way the routing rules expected. Someone clicks through. The status moves. The room nods.

Monday is different. The truck is two hours late, and the door it was assigned is already taken. The spec changed after the quote went out. The same company came in twice, with two phone numbers. A customer calls instead of answering the email. An approval sits with someone who is out on a job.

I run [Infraxio](https://www.infraxio.com) from Ponte Vedra. The operators I sit with around Jacksonville and St. Johns County talk about the late truck, the changed spec, the duplicate, and the call. That is the week. That is where the staff time goes.

## The Happy Path Is What Gets Drawn

Most business software, and most of the automation on top of it, is drawn around the case that goes through. That case is easy to demo. Intake, process, done.

Some of the work really does go through clean. The mistake is treating that slice as the whole system.

If those are the only states in the software, everything else has nowhere to sit. The late truck becomes a text. The changed spec becomes an email thread. The duplicate becomes a note. The stalled approval becomes "I think they said yes on Thursday." The system still looks fine. The records left inside it are the ones that behaved.

An exception is how work leaves. I have written about [the handoff where revenue leaks](/blog/the-handoff-is-where-revenue-leaks). The odd case walks out of the system, and a person becomes the record.

## Where the Time Actually Goes

The order that sailed through does not take the afternoon. The one that did not does.

Someone decides whether to hold the late truck's door or give it away, then tells the driver and the office. Someone opens the addendum, sees which sections changed, and stops the version about to go out. Someone catches two leads for the same company before both get a call. Someone notices an approval has been sitting and chooses to wait, move it, or send the work back.

None of that is rare. On a dock, in a bid week, in a lead queue, it is the day.

When those cases have no place in the software, they land in email, a spreadsheet, a group text, or on a whiteboard. People go there the moment a case falls outside the path. Ownership disappears there. A row has a next step only if someone typed one. A thread has no state. A memory does not cover a sick day.

What is left in the system is the clean work. The report looks calm. The real queue is the one that never made it in.

## An Owner, a State, and a Next Step

The exception needs the same three things as the normal case.

A named owner, not "the team." A state the system understands: late, changed, duplicate, waiting, blocked, handed back. A next step, including what done looks like. Miss one of the three and it is still a side conversation.

That is how we have shaped the products.

In [IFX Hub](https://ifxhub.io), an exception is a state on the work, with an owner, not a thread beside it. A stalled approval, a record that does not match, a task that cannot move. It sits on a queue a person can see and pick up. Who owns what is on the board. A yes that lives in email is not a state. I wrote about keeping [approvals inside the workflow](/blog/approvals-belong-inside-the-workflow).

[DockOps](https://www.dockops.app) assumes the day will miss the plan. Trucks are early, trucks are late, and appointments get missed. Moving a door and moving a time have to be ordinary, with the yard and the office on the same board. I have written about [the dock schedule as a promise](/blog/your-dock-schedule-is-a-promise-you-cannot-keep-on-a-whiteboard). The promise holds only if a change updates it where the appointment already lives.

[IFX Bid](https://www.ifxbid.com) treats addenda, changed requirements, and missing documents as expected. A pursuit that assumes the solicitation will sit still gets built twice: once in the tool, and once in an inbox the night the addendum lands. The change needs an owner, and a way to see which sections are now incomplete. A missing document is a state, not a surprise at the deadline.

[Growth7](https://www.growth7.io) has the same shape on leads. Duplicates, bad numbers, companies that do not fit, and leads that match no routing rule. If the only path is "the form is complete, send it here," the rest fall into a shared inbox. They need a place to go, where a person merges them, fixes them, or sets them aside and notes why.

On a custom system we ask the same thing before drawing a screen. Which cases do not fit, who picks them up, and what the system calls them.

## An Agent Needs a Place to Stop

An agent can take the routine part. The complete form, the status that maps cleanly, the draft that follows a pattern you already wrote down.

The odd case is where it breaks. With no path for that case, the agent stalls, and the queue behind it stalls. Or it guesses. A guess is worse. The record looks finished, and someone will act on it.

Give it a rule that says stop and hand this to a person. Name the role, and the state the work moves into. Log what it saw, why it stopped, and who took it. Stopping counts as doing the job.

Read that log once a week. A one-off can stay a handoff. An exception that keeps coming back is the next workflow to design. The same missing document, or the same lead that fits no territory, is no longer odd. The staff is still walking that path by hand.

That stop rule belongs on the fence. Every agent needs [a fence and an off switch](/blog/every-ai-agent-needs-a-fence-and-an-off-switch).

## List the Exceptions Before the Happy Path

When we scope a system, the first list is the ten ordinary ways a job goes sideways. Late. Early. Duplicate. Incomplete. Changed after it was sent. A call instead of the form. Signed off by the wrong person. Waiting on someone who is out. A document that is not there. A record that fits no rule.

Give each one an owner, a state, and a next step. If you cannot name those three, you have a demo, not a workflow. The people doing the work already know the list. Scoping is writing it down before anyone draws a screen.

After go-live, watch what leaves the system. If the real reschedule, the real addendum, and the real duplicate are still in email or in one person's head, the software is only the happy path. You do not need a precise count to see it.

That is how we scope at Infraxio. Draw the odd day first. The straight-through case will fit. The other way around, it never does.
