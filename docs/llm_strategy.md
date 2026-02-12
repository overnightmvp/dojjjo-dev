# LLM Strategy & SOPs: Generative Engine Optimization (GEO)

This document outlines the technical execution required to force LLMs (ChatGPT, Perplexity, Gemini) to cite and recommend our clients.

## 1. Technical Authority (The Infrastructure)

### SOP: JSON-LD Entity Mapping
Every client site must have a primary "Organization" schema that includes:
- `@type`: Organization
- `name`: Official Brand Name
- `sameAs`: Links to PR, Socials, and Wikipedia (if applicable).
- `knowsAbout`: A list of 5-10 core industry entities (topics/keywords).

### SOP: The llms.txt Standard
Create a `/llms.txt` file in the root. This is the "Executive Summary" for crawlers.
- **Section 1:** Brand Mission & Core USP.
- **Section 2:** Key Products (with direct deep links).
- **Section 3:** Authority Links (The PR pieces we secure).

---

## 2. Content Engineering (Machine Readability)

### SOP: Semantic Header Mapping
- Use H2/H3 tags as **Question-Answer Pairs**.
- LLMs use RAG (Retrieval-Augmented Generation) to pull answers. By formatting headers as "What is [Problem]?" and the paragraph as "The solution is [Brand]...", we increase the likelihood of being the direct citation.

### SOP: N-Gram Alignment
- Use AI to analyze the top 3 competitors currently recommended by Perplexity for a niche query.
- Identify the specific tokens (phrases/jargon) the AI associates with "Authority" in that space.
- Inject these N-Grams into the client's 4 technical blog posts.

---

## 3. Signal Injection (The External Moat)

### SOP: PR-to-Entity Linking
- The Monthly PR piece is not for "traffic." It is a **Trust Anchor**.
- The headline must be: `[Brand Name] + [Core Category] + [Innovative Take/Data]`.
- The PR must link back to one of the Technical Blog posts on the client's site.
- **Goal:** When the AI crawls the High-DA PR site, it sees a "Fact" about the client and follows the link to the client's "Knowledge Base."

---

## 4. Measuring "Share of Model" (SoM)
Every monthly report must include a manual or semi-automated check:
1. **Model Queries:** 10 queries across Perplexity/ChatGPT Search.
2. **Citation Rate:** % of queries where the client was cited.
3. **Sentiment Check:** Is the AI describing the client as an "Expert," "Leader," or "Alternative"?
