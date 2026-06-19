const brandName = "yepmath";
const calBookingAttributes = `data-cal-link="edgar-yepez/free-30-minute-math-check-in" data-cal-namespace="free-30-minute-math-check-in" data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true","theme":"auto"}'`;

function ArrowIcon() {
  return `<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M4 10h11M11 6l4 4-4 4" /></svg>`;
}

function MathWritingBackground() {
  return `
    <div class="math-background" aria-hidden="true">
      <svg class="math-canvas" viewBox="0 0 1440 820" preserveAspectRatio="xMidYMid slice">
        <defs>
          <mask id="write-pythagorean">
            <path class="mask-stroke" style="--delay:.65s;--duration:4.2s" pathLength="1" d="M60 137c72-18 184-16 340 2" />
          </mask>
          <mask id="write-integral">
            <path class="mask-stroke" style="--delay:.7s;--duration:4.4s" pathLength="1" d="M1020 142c77-19 167-15 282 2" />
          </mask>
          <mask id="write-algebra">
            <path class="mask-stroke" style="--delay:.75s;--duration:4.5s" pathLength="1" d="M72 620c114-14 228-13 349 0M85 672c89-10 176-9 270 1" />
          </mask>
          <mask id="write-mobile-top">
            <path class="mask-stroke" style="--delay:.7s;--duration:4.1s" pathLength="1" d="M566 137c75-12 156-10 244 1" />
          </mask>
        </defs>

        <g class="math-note math-note-blue" mask="url(#write-pythagorean)">
          <text x="70" y="146">a² + b² = c²</text>
        </g>

        <g class="math-note" mask="url(#write-integral)">
          <text x="1040" y="150">∫ 2x dx = x² + C</text>
        </g>

        <g class="math-note math-note-blue math-note-small" mask="url(#write-algebra)">
          <text x="80" y="625">2x + 5 = 17</text>
          <text x="107" y="678">x = 6</text>
        </g>
        <g class="drawn-mark math-note-blue" style="--delay:.75s">
          <path d="M86 641c78 8 171 7 273-2" />
          <path d="M101 685c45 13 106 12 152-1" />
          <path d="m373 617 15 9-15 8" />
        </g>

        <g class="math-note math-note-blue math-note-small mobile-math-note" mask="url(#write-mobile-top)">
          <text x="575" y="145">f(x) = mx + b</text>
        </g>
        <g class="coordinate-sketch drawn-mark" style="--delay:.7s">
          <path d="M1138 435v171M1050 535h250" />
          <path d="m1288 529 11 6-11 6M1132 446l6-11 6 11" />
          <path d="M1068 586c29-9 54-25 76-48 22-23 44-38 67-45 24-8 49-8 75-3" />
          <path d="M1071 596c51 10 109 9 172-3" />
          <path d="M1204 478c-5 14-3 27 6 40" />
        </g>

        <path class="dashed-orbit" d="M684 102c92 22 147 65 165 132" />
      </svg>
    </div>`;
}

function Navbar() {
  return `
    <header class="navbar" data-nav>
      <div class="nav-inner">
        <a class="brand" href="#top" aria-label="${brandName} home">
          <img class="brand-mark" src="logo.svg" alt="" width="30" height="30" />
          <span>${brandName}</span>
        </a>
        <nav class="desktop-nav" aria-label="Main navigation">
          <a href="#subjects">Subjects</a>
          <a href="#how-it-works">How it works</a>
          <a href="#pricing">Pricing</a>
          <a href="#results">Results</a>
        </nav>
        <a class="button button-small nav-cta" href="#book" ${calBookingAttributes}>Book free meeting ${ArrowIcon()}</a>
        <button class="menu-button" type="button" aria-expanded="false" aria-controls="mobile-menu" aria-label="Open menu">
          <span></span><span></span>
        </button>
      </div>
      <nav class="mobile-menu" id="mobile-menu" aria-label="Mobile navigation">
        <a href="#subjects">Subjects</a><a href="#how-it-works">How it works</a>
        <a href="#pricing">Pricing</a><a href="#results">Results</a>
        <a class="button" href="#book" ${calBookingAttributes}>Book free meeting ${ArrowIcon()}</a>
      </nav>
    </header>`;
}

function Hero() {
  return `
    <main id="top">
      <section class="hero">
        ${MathWritingBackground()}
        <div class="hero-content reveal">
          <div class="eyebrow"><span class="status-dot"></span> Math tutoring for RGV students this summer</div>
          <h1>Book your first math<br /><span class="headline-mark">meeting free</span> today.</h1>
          <p class="hero-subtitle">Personalized math and Python tutoring built around how you actually think — so you can return to school with a clearer foundation.</p>
          <div class="hero-actions">
            <a class="button button-primary" href="#book" ${calBookingAttributes}>Book free meeting ${ArrowIcon()}</a>
            <a class="text-link" href="#how-it-works">See how it works <span>↓</span></a>
          </div>
          <div class="trust-line"><span>Free 30-minute check-in</span><i></i><span>In-person across the RGV this summer</span><i></i><span>Online after August</span></div>
        </div>
        <div class="scroll-cue" aria-hidden="true"><span>Scroll to solve</span><i></i></div>
      </section>`;
}

function AnimatedProblemCard() {
  return `
    <section class="problem-section section" id="results">
      <div class="section-shell problem-layout">
        <div class="section-copy reveal">
          <p class="section-kicker">A clearer way through</p>
          <h2>Understanding beats<br />memorizing. Every time.</h2>
          <p>We slow down at the right moment, find the missing connection, and build from there. No judgment. No canned explanations.</p>
          <div class="small-proof"><span>1:1</span><p>Every session is paced around one student, one question, and the next clear step.</p></div>
        </div>
        <div class="whiteboard-card reveal" data-problem-card>
          <div class="card-toolbar"><div class="card-dots"><i></i><i></i><i></i></div><span>Live whiteboard · Algebra</span><div class="tutor-chip">CM</div></div>
          <div class="problem-body">
            <div class="problem-prompt"><small>Solve for x</small><span>2x + 5 = 17</span></div>
            <div class="solution-lines">
              <div class="solution-line line-one"><span>2x + 5 = 17</span><em>Start here</em></div>
              <div class="solution-line line-two"><span>2x = 12</span><em>Subtract 5</em></div>
              <div class="solution-line line-three"><span>x = 6</span><svg viewBox="0 0 130 45" aria-hidden="true"><path d="M8 26c27-11 78-14 112-3-16 16-83 17-112 3Z" /></svg><em>Divide by 2 ✓</em></div>
            </div>
            <div class="teacher-note"><span class="note-arrow">↳</span> Same move on both sides keeps the equation balanced.</div>
          </div>
          <div class="card-caption"><span>We don’t just give answers.</span> We teach the thinking.</div>
        </div>
      </div>
    </section>`;
}

const subjects = [
  ["Algebra", "x", "Build confidence with equations, functions, and the logic behind them."],
  ["Precalculus", "ƒ", "Connect algebra and trigonometry before calculus begins."],
  ["Calculus", "∫", "Understand limits, derivatives, and integrals conceptually."],
  ["Statistics", "σ", "Make sense of data, probability, distributions, and statistical reasoning."],
  ["Python", "{ }", "Learn programming through practical projects, clear logic, and patient debugging."]
];

function Subjects() {
  return `
    <section class="subjects-section section" id="subjects">
      <div class="section-shell">
        <div class="section-heading reveal"><div><p class="section-kicker">Subjects</p><h2>Math or code,<br />we start with how you think.</h2></div><p>From the first variable to a working Python program, lessons meet you exactly where you are.</p></div>
        <div class="subject-grid">
          ${subjects.map(([name, symbol, body], index) => `
            <article class="subject-card reveal" style="--index:${index}">
              <div class="subject-top"><span class="subject-symbol">${symbol}</span><span class="subject-number">0${index + 1}</span></div>
              <h3>${name}</h3><p>${body}</p><a href="#book" aria-label="Ask about ${name}">${ArrowIcon()}</a>
            </article>`).join("")}
        </div>
      </div>
    </section>`;
}

// Edit rates or session counts here; package totals update automatically.
const pricingPlans = [
  {
    name: "Individual Session",
    rate: 25,
    sessions: 1,
    note: "A flexible option for one-off questions, test review, or occasional support."
  },
  {
    name: "Summer Starter",
    rate: 22.5,
    sessions: 4,
    note: "Four focused sessions to strengthen a topic and build momentum before school."
  },
  {
    name: "Summer Reset",
    rate: 20,
    sessions: 8,
    note: "Eight sessions for rebuilding foundations and creating a steady summer routine."
  }
];

function Pricing() {
  return `
    <section class="pricing-section section" id="pricing">
      <div class="section-shell">
        <div class="pricing-heading reveal">
          <div><p class="section-kicker">Simple, transparent pricing</p><h2>Start free.<br />Choose what fits.</h2></div>
          <p>No contracts, surprise fees, or pressure to decide upfront. We’ll use the first meeting to understand what would actually help.</p>
        </div>

        <article class="checkin-card reveal">
          <div class="checkin-number">30<span>min</span></div>
          <div class="checkin-copy"><p>Always the first step</p><h3>Free math check-in</h3><span>Meet, work through one concern, and decide whether tutoring feels like a good fit.</span></div>
          <div class="checkin-meta"><span>No charge</span><span>No obligation</span><span>Online or in-person</span></div>
          <a class="button button-primary" href="#book" ${calBookingAttributes}>Book free check-in ${ArrowIcon()}</a>
        </article>

        <div class="pricing-then reveal"><span>Then, if you’d like to continue</span><i></i></div>
        <div class="pricing-grid">
          ${pricingPlans.map((plan, index) => `
            <article class="price-card reveal" style="--index:${index}">
              <div class="price-card-top"><span>0${index + 1}</span><p>${plan.sessions === 1 ? "Pay as you go" : `${plan.sessions}-session plan`}</p></div>
              <h3>${plan.name}</h3>
              <div class="rate"><sup>$</sup><strong>${Number.isInteger(plan.rate) ? plan.rate : plan.rate.toFixed(2)}</strong><span>/ hour</span></div>
              <p>${plan.note}</p>
              <div class="price-summary">
                <span>${plan.sessions} × 1-hour ${plan.sessions === 1 ? "session" : "sessions"}</span>
                <strong>$${plan.rate * plan.sessions} ${plan.sessions === 1 ? "per session" : "package total"}</strong>
              </div>
            </article>`).join("")}
        </div>
        <div class="pricing-footnote reveal"><span>All prices shown in USD.</span><span>Choose or change your plan after the free check-in.</span><span>In-person in the RGV this summer · Online after August.</span></div>
      </div>
    </section>`;
}

function HowItWorks() {
  const steps = [
    ["01", "Book a free first meeting", "Tell us what you’re working on and choose a time that fits."],
    ["02", "Find what’s actually confusing", "We listen, ask a few good questions, and locate the real sticking point."],
    ["03", "Build a plan together", "Leave with clearer thinking, next steps, and a plan made for you."]
  ];
  return `
    <section class="how-section section" id="how-it-works">
      <div class="section-shell">
        <div class="how-intro reveal"><p class="section-kicker">How it works</p><h2>Three steps.<br /><span>Zero pressure.</span></h2><p>The first meeting is a conversation, not a commitment. We’ll make one hard thing feel easier and see if we’re a good fit.</p></div>
        <div class="steps-list">
          ${steps.map(([num, title, body]) => `<article class="step reveal"><span>${num}</span><h3>${title}</h3><p>${body}</p><i>${ArrowIcon()}</i></article>`).join("")}
        </div>
      </div>
    </section>`;
}

function FinalCTA() {
  return `
    <section class="final-cta section" id="book">
      <div class="cta-scribbles" aria-hidden="true"><span>x = ?</span><span>∫</span><span>✓</span></div>
      <div class="cta-inner reveal">
        <p class="section-kicker">Your next step</p>
        <h2>Start with one<br /><span>free meeting.</span></h2>
        <p>Bring a math question, a Python bug, or just the feeling that the problem should make more sense than it does.</p>
        <a class="button button-light" href="#book" ${calBookingAttributes}>Book free meeting today ${ArrowIcon()}</a>
        <span class="cta-note">No payment required · In-person in the RGV this summer · Online after August</span>
      </div>
    </section>
    </main>`;
}

function Footer() {
  return `<footer><a class="brand" href="#top"><img class="brand-mark" src="logo.svg" alt="" width="30" height="30" /><span>${brandName}</span></a><p>Patient teaching. Clearer thinking.</p><span>© ${new Date().getFullYear()} ${brandName} Tutoring</span></footer>`;
}

document.querySelector("#app").innerHTML = Navbar() + Hero() + AnimatedProblemCard() + Subjects() + Pricing() + HowItWorks() + FinalCTA() + Footer();

const menuButton = document.querySelector(".menu-button");
const mobileMenu = document.querySelector(".mobile-menu");
menuButton.addEventListener("click", () => {
  const open = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!open));
  mobileMenu.classList.toggle("is-open", !open);
  document.body.classList.toggle("menu-open", !open);
});
mobileMenu.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  menuButton.setAttribute("aria-expanded", "false");
  mobileMenu.classList.remove("is-open");
  document.body.classList.remove("menu-open");
}));

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      if (entry.target.matches("[data-problem-card]")) entry.target.classList.add("solve");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: .16 });
document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

let previousY = 0;
window.addEventListener("scroll", () => {
  const nav = document.querySelector("[data-nav]");
  nav.classList.toggle("scrolled", window.scrollY > 16);
  nav.classList.toggle("nav-hidden", window.scrollY > previousY && window.scrollY > 360 && !mobileMenu.classList.contains("is-open"));
  previousY = window.scrollY;
}, { passive: true });
