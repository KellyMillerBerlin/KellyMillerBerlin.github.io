/*
  content.js
  ──────────
  Edit this file to update all site copy, links, and case study content.
  You never need to touch index.html or styles.css for content changes.

  HOW TO UPDATE:
  - Text: change the string values below
  - Images: drop a file into /assets/images/ and update the path here
  - Keywords/tags: edit the arrays (comma-separated strings)
  - Case studies: edit the objects in the work.cases array
  - Adding a new case study: copy one object block and paste below it
*/

const CONTENT = {

  /* ── Hero ─────────────────────────────────────────────── */
  hero: {
    name:     "Kelly Marie Miller",
    identity: ["Senior TPM", "Based in Portland, OR"],
    tagline:  "Ten years of human-centered program and product design for public-interest problems, mostly for the underserved.",
    keywords: ["Service design", "Cross-team delivery", "Systems thinking"],
  },

  /* ── About ────────────────────────────────────────────── */
  about: {
    what:    "I lead complex, cross-team products and programs from ambiguity to delivery, balancing strategy and stakeholder alignment with the nitty-gritty of implementation so the work holds up long after launch. I build documentation systems people actually use, have a knack for iterative product design, and automate wherever I can.",
    journey: "A graduate degree in social anthropology taught me to watch how people actually behave, not just what they say they need. I have yet to drop this habit! Solving critical problems by centering the needs of real people, then making sure they can actually access what gets built, is what's kept me doing this work for ten years, across different industries. Whether it's tackling financial inequality, misinformation, or emissions, I want to keep building technology that actually serves the public it claims to serve.",
    offwork: "Off work, I'm a toddler-mom, I write fiction when I can steal the time, and I love to ride my bike. I speak a few languages, too, and am (slowly) learning to play the piano.",
  },

  /* ── Work ─────────────────────────────────────────────── */
  work: {
    cases: [
      {
        title:   "Standing up a cross-team delivery model",
        outcome: "When I joined the team, there was no central system for planning, tracking, or shipping work: features and bugs moved through competing priorities with no QA process or deployment procedure. In a few months, I built the delivery infrastructure from scratch, turning ad hoc tickets into a system the whole org could rely on.",
        details: [
          "Stood up an end-to-end agile process in Jira and GitLab and built the scaffolding for cross-team needs-finding and release planning.",
          "Built error monitoring, handling, and escalation infrastructure, then set up the support ticketing system.",
          "Oversaw CI/CD pipeline implementation and instituted change log and release note procedures and templates.",
          "Built a reusable, well-documented approach to AI use (read: matched to what the technology could and couldn't do, with clear guardrails and verification steps) for faster insight-gathering, documentation, troubleshooting, and deployment coordination.",
        ],
        tags:  ["Agile transformation", "CI/CD", "Cross-team alignment", "AI-augmented workflows"],
        image: "assets/images/case-delivery-model.jpg",
      },
      {
        title:   "Untangling a stalled platform migration",
        outcome: "A migration and redesign of a flagship program had been stalled for five years, stuck on competing opinions about what to solve first and the sheer complexity of the roll-out. We went from stalled to green-lit in three months, shipped within a year, and the migration now serves 10,000+ users annually across four teams, including external B2B partners.",
        details: [
          "Aligned four teams on which problems were actually worth solving after five years of stalled consensus.",
          "Prioritized a pragmatic rollout over a full rebuild, scoping the migration around what we could execute, what delivered the most value to users, and what would teach us which user journeys actually worked.",
          "Iterated with users directly on designs, finding lean, low-lift improvements before committing to systemic changes.",
          "Built stakeholder confidence through transparent and adaptable release planning, clearing the path to green light in three months.",
        ],
        tags:  ["Stakeholder alignment", "Scope prioritization", "User research", "Release planning"],
        image: "assets/images/case-migration-photo.jpg",
      },
      {
        title:   "Crafting an operational tracker from scratch",
        outcome: "Enrollment in a mission-critical program once depended on a cumbersome, manual process for forming lending groups. I built a tool that takes the mental load off managing phone calls, note-taking, shuffling locations and group sizes, then tracking no-shows and roll-overs. Despite reduced resources and competing priorities, enrollment goals for these groups are now hit with significantly less effort.",
        details: [
          "Spent months researching business, staff, and user needs before proposing a solution, working within existing tooling constraints.",
          "Facilitated stakeholder sessions to find a workable fix and designed a lean, discardable pilot to test with minimal risk.",
          "Rolled out the tool to all formations and staff over two months, doing some of the build and all of the testing myself.",
          "Released monthly iterations, responding to staff feedback; staff continue to report significant time savings and improved client experience.",
        ],
        tags:  ["Process design", "Change management", "Continuous iteration"],
        image: "assets/images/case-tracker.jpg",
      },
      {
        title:   "Building accurate means-testing at scale",
        outcome: "A national program needed to determine eligibility segments accurately and at scale, based on various self-reported inputs. I helped to design and roll out a screening process that respected both applicants' time and privacy and staff judgment. After demonstrated success, I upgraded the underlying data infrastructure and institutionalized the model across programs.",
        details: [
          "Co-designed a combination of automatic and human-led eligibility checks based on self-reported attributes and survey responses.",
          "Led implementation, testing, and rollout, catching ineligibility early so applicants weren't stuck completing a full application for a program they wouldn't qualify for.",
          "Ensured staff still received the right eligibility information at the right time to support clients and make informed enrollment decisions.",
          "Led an infrastructure upgrade across all programs, automating retrieval of public benchmark data and geographic matching via a robust external API and custom validation system.",
        ],
        tags:  ["Means-testing", "Eligibility design", "Data infrastructure", "Applicant experience", "Build vs. buy"],
        image: "assets/images/case-means-testing.jpg",
      },
    ],
  },

  /* ── Civic tech project ───────────────────────────────── */
  project: {
    label: "Building in public",
    title: "Service design in my own community",
    desc:  "I'm running a service design process in my own community, using embedded research to find a real problem before reaching for a technology fix. I'm especially drawn to how public infrastructure and services can make the work of parenting easier.",
  },

  /* ── Footer / contact ─────────────────────────────────── */
  contact: {
    email:    "kelly.m.miller0@gmail.com",
    linkedin: "https://www.linkedin.com/in/kelmariemiller/",
    location: "Portland, Oregon",
    status:   "open to remote",
  },

};
