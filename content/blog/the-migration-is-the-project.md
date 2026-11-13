---
title: "The Migration Is the Project"
date: "2026-11-13"
excerpt: "Companies budget for the new software and treat the move as a weekend chore. The migration is where the project is won or lost: what history matters, what the fields meant, and the day the old system stops taking new work."
---

A company leaves a spreadsheet, an aging CRM or ERP, or a pile of tools that never quite agreed. The budget goes to the new software. The demo is clean. Someone says the data can move over a weekend.

The weekend decides whether anyone is still in the system a month later.

I run [Infraxio](https://www.infraxio.com) from Ponte Vedra, Florida. We deploy business hubs, growth systems, bid workflows, dock and yard tools, and custom systems. The software is the half you can demo. The migration is the project.

## The Screen Gets the Budget

What gets scoped is the new system: logins, fields, workflows, and a date that assumes the records will arrive. What gets waved through is the move. Which history is worth keeping. Which customers are the same company typed three ways. Which records are dead. Which spreadsheet on one desk actually runs a department.

That is how a new system looks broken on the first morning. It shows the duplicates, a status that meant something else in the old tool, and customers nobody has called in years next to the ones from this week. People open it, do not trust it, and go back to the place that still has the number they believe.

CRM and ERP projects have carried this for years. The meetings go to selection and configuration. Data quality, what a field meant, and whether anyone will leave the old tool get whatever time is left. People leave when the new system hands them records they do not recognize and the spreadsheet they trust is still open. The mechanics of a careful cutover are in [data migration, the unsexy make-or-break](/blog/data-migration-the-unsexy-make-or-break). The migration is the project.

## The Decisions Inside the Move

The import file is the small part.

**What history matters.** Move the open work, the customers someone will call this month, the prices that are still real, and the last clean record of a job someone may still ask about. Years of closed items nobody opens belong in an archive a person can search. Moving every old row buries this week's customer, and then the search gets blamed.

**Duplicates and dead records.** The same customer under three spellings. A vendor from a contract that ended. A contact who has not been reachable for years. Bring those across and the first search returns the wrong company. A script can suggest matches. A person who knows the accounts has to say which records are the same.

**Fields that never meant the same thing.** Status in the old CRM was a mood. In the new system it is a step with a next action. Customer on the spreadsheet was sometimes a site, sometimes the company that pays, sometimes a person. Mapping is the agreement about what the word means now. Skip it and the migration copies the disagreement I wrote about in [why reporting lies](/blog/why-your-reporting-is-lying-to-you).

**The spreadsheet a department actually runs.** It was never purchased, so it is not on the list of systems. It holds the exceptions, the prices someone will not put in the CRM, and the notes that never had a field. Leave it behind and you migrated the decoration. If the department decides from that sheet, the sheet is in scope. That is the [spreadsheet problem](/blog/the-real-cost-of-spreadsheet-operations): the working record wins.

**How long both stay live.** Run the old and the new together only long enough to check the new record against the one people trust. Then pick the day and make the old system read-only. With no end date, people update whichever system they prefer, and the new one falls behind.

## A Faster Build Leaves a Larger Move

Since we adopted AI, Infraxio deploys a full business hub in under three weeks. Before that, the same kind of deployment took four to six months. The build got shorter. The decisions inside the move stayed the same size, so they are now the larger share of the work.

AI sped up configuration and a first pass at the fields. It did not decide which customers are real, which history a department still uses, or which spreadsheet is the record. Those are calls about what the business is.

An agent can draft the field map, flag likely duplicates, and prepare the import. The person who uses the data still has to accept the draft. Same rule as [putting AI on the task board](/blog/put-ai-on-the-task-board): the agent does a piece of the work, and a person reviews it.

[Clean data compounds](/blog/the-compounding-value-of-clean-data) after people trust the system enough to work in it. [Adoption is the real go-live](/blog/adoption-is-the-real-go-live). Bad records on the first morning send people back to a private copy, and the new system gets the blame.

## Same Questions, Different System

[IFX Hub](https://ifxhub.io) holds deals, delivery, tasks, invoicing, and the client record. The move is which deals are still alive, which tasks are real work, and which notes have to travel with the client. Dead deals make the open work hard to find.

[Growth7](https://www.growth7.io) is the growth and marketing system. Keep the people you would still contact. A dump of every old address, including the ones that bounce, makes the first use look careless.

[IFX Bid](https://www.ifxbid.com) keeps the pursuit still in motion, the language the team reuses, and the reasons a pursuit was declined. Finished folders stay where someone can open them.

[DockOps](https://www.dockops.app) needs the appointments still coming, the carriers the yard actually sees, and the rules a supervisor is already enforcing on a board or a sheet. Finished appointments do not help the person at the door tomorrow.

Custom systems are the same shape. A price the team still quotes, a dispatch list, a workbook one person uses for client updates. Naming what that workbook meant is the work.

## Before the First Import

**Move what people use weekly. Archive the rest where it can be looked up.** A record outside this month's work belongs in a place someone can search.

**Name one owner for each set of records.** Customers, open jobs, prices, contacts, the carriers the dock still sees. One person says what is real when two records disagree. A shared folder is not an owner.

**Do a dry-run import, and have the daily users check it.** Not the person who bought the system. The person who searches a customer, writes a bid, schedules a door, or sends an invoice. Ask whether they would work from the sample tomorrow. That check is [user acceptance testing](/blog/user-acceptance-testing-done-right), done before the company depends on the load.

**Pick a cutover date and turn the old system read-only.** Parallel running is a short check with an end. After the date, the old system is for lookup. New work goes in the new system only.

Write down what you refused to move, and why, so the reason is still there when someone asks.

## The Call Is the Project

The migration is the set of calls about the business itself: which customers are current, which history still matters, what a field means, which quiet spreadsheet has been running a department, and the day the old way stops taking new work.

A faster build makes those calls a bigger share of the deployment. They stay human calls.

From Ponte Vedra, with operators around Jacksonville and St. Johns County, I keep seeing the same split. Fund the move the way you fund the system. Put a name on each set of records. Let the people who live in them reject a dry run. Turn the old thing read-only on a date you already chose.

A clean import of bad data is still bad data. On day one, the new system is what will look broken.
