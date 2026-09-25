---
title: "The Integration Layer Nobody Plans For"
date: "2026-08-05"
excerpt: "Every system implementation eventually needs to talk to other systems. Planning that integration upfront saves months of pain."
---

Here is a pattern I see constantly: a company implements a new ERP and declares the project complete. Six weeks later, someone realizes the ERP needs to sync data with the e-commerce platform, the shipping carrier, the payment processor, and the marketing automation tool. The integration work that was never scoped becomes a second project that costs as much as the first.

## Why Integration Gets Deferred

Integration gets deferred because it is complex, and because the core system feels like the priority. But the core system does not operate in isolation. The moment data needs to flow between systems — orders from the website, tracking numbers from the carrier, payment confirmations from the processor — integration becomes critical path.

## The Integration Architecture

Before implementation starts, map every system that needs to exchange data with the new platform. For each connection, document what data flows, in which direction, how often, and what happens when the connection fails. That map becomes the integration architecture.

## Middleware vs. Direct Integration

There are two basic approaches: direct integrations (system A talks to system B via API) and middleware (a central platform like Zapier, Make, or a custom integration layer routes data between systems). Direct integrations are faster but harder to maintain at scale. Middleware adds a layer of abstraction that simplifies management but introduces another system to maintain. The right choice depends on how many systems you need to connect and how complex the data transformations are.

## Error Handling Is the Hard Part

The easy part of integration is making the data flow. The hard part is handling what happens when it does not. What if the API is down? What if the data is malformed? What if a record exists in one system but not the other? Every integration needs error handling, retry logic, and alerting.
