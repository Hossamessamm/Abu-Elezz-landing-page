/**
 * Delivery for the enroll form.
 * email: address that should receive the request
 * whatsapp: country code plus number, digits only, for example 201012345678
 * Leave both empty and the page copies a request the student can paste.
 */
const CONTACT = {
  email: "AhmedRaafat5@gmail.com",
  whatsapp: "201001434321",
};

const WEEK = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const PARTS = [
  {
    id: "p2",
    name: "Part 2",
    range: "30 Oct 2026 to 29 Jan 2027",
    groups: [
      {
        title: "Introduction",
        meta: "30 Oct 2026",
        sessions: [
          {
            date: "2026-10-30",
            title: "Course introduction",
            detail: "Objectives, section exam weights, the timetable, study materials, and how practice questions will be handled.",
          },
        ],
      },
      {
        title: "Financial statement analysis",
        meta: "20% of the exam · 3 to 13 Nov 2026",
        sessions: [
          {
            date: "2026-11-03",
            title: "Liquidity, solvency, and leverage",
            detail: "Unit 1. Common-size statements, liquidity, solvency, and leverage. Practice on working capital, capital structure, and coverage. PDF pages 1 to 18.",
          },
          {
            date: "2026-11-06",
            title: "Profitability and per-share ratios",
            detail: "Unit 2. Profitability, factors that change reported profit, and per-share ratios. PDF pages 19 to 35.",
          },
          {
            date: "2026-11-10",
            title: "Activity ratios and earnings quality",
            detail: "Unit 3. Activity ratios, then ratio analysis and earnings quality. PDF pages 36 to 47.",
          },
          {
            date: "2026-11-13",
            title: "Revision: units 1 to 3",
            detail: "Mixed practice across liquidity, profitability, and activity ratios. Rework errors before corporate finance begins. PDF pages 1 to 47.",
          },
        ],
      },
      {
        title: "Corporate finance",
        meta: "20% of the exam · 17 Nov to 18 Dec 2026",
        sessions: [
          {
            date: "2026-11-17",
            title: "Bonds and stock",
            detail: "Unit 4.1 to 4.2. Features and valuation examples for bonds and stock, in source order. PDF pages 48 to 58.",
          },
          {
            date: "2026-11-20",
            title: "Dividends and repurchases",
            detail: "Unit 4.3. Dividend types, stock splits, dividend policy, and share repurchases. PDF pages 59 to 63.",
          },
          {
            date: "2026-11-24",
            title: "Markets, offerings, and return",
            detail: "Unit 5.1 to 5.2. Financial markets, securities offerings, and financial risk and return. PDF pages 64 to 74.",
          },
          {
            date: "2026-11-27",
            title: "Portfolios and short-term financing",
            detail: "Unit 5.3 to 5.4. Portfolio management and short-term financing. PDF pages 75 to 88.",
          },
          {
            date: "2026-12-01",
            title: "Long-term financing and stock valuation",
            detail: "Unit 5.5, then Unit 6.1. Long-term financing and stock valuation methods. PDF pages 89 to 95.",
          },
          {
            date: "2026-12-04",
            title: "Cost of capital",
            detail: "Unit 6.2 to 6.3. Cost of capital for current capital and for new capital. PDF pages 96 to 103.",
          },
          {
            date: "2026-12-08",
            title: "Options and derivatives",
            detail: "Unit 6.4. Hedging, options, forwards, futures, and swaps. PDF pages 104 to 113.",
          },
          {
            date: "2026-12-11",
            title: "Working capital management",
            detail: "Unit 7. Working capital, cash, marketable securities, receivables, and inventory. PDF pages 114 to 129.",
          },
          {
            date: "2026-12-15",
            title: "Mergers, trade, and exchange rates",
            detail: "Unit 8.1 to 8.3. Mergers and acquisitions, international trade, and exchange-rate systems and calculations. PDF pages 130 to 144.",
          },
          {
            date: "2026-12-18",
            title: "Foreign-exchange risk",
            detail: "Unit 8.4 to 8.5. What moves exchange rates, how risk is mitigated, and the effect of fluctuations. PDF pages 145 to 160.",
          },
        ],
      },
      {
        title: "Decision analysis",
        meta: "25% of the exam · 22 Dec 2026 to 5 Jan 2027",
        sessions: [
          {
            date: "2026-12-22",
            title: "Cost-volume-profit",
            detail: "Unit 9. CVP analysis, target income, and multi-product calculations. PDF pages 161 to 171.",
          },
          {
            date: "2026-12-25",
            title: "Marginal analysis and special orders",
            detail: "Unit 10.1 to 10.3. Short-run profit maximization, applying marginal analysis, and special orders. PDF pages 172 to 183.",
          },
          {
            date: "2026-12-29",
            title: "Make, process, or drop",
            detail: "Unit 10.4 to 10.6. Make or buy, sell as is or process further, and keep or drop. PDF pages 184 to 191.",
          },
          {
            date: "2027-01-01",
            title: "Elasticity and market structure",
            detail: "Unit 11.1 to 11.2. Price elasticity of demand and market structures. PDF pages 192 to 201.",
          },
          {
            date: "2027-01-05",
            title: "Pricing methods",
            detail: "Unit 11.3. Buyer-based and cost-based pricing, target pricing, and target costing. PDF pages 202 to 211.",
          },
        ],
      },
      {
        title: "Risk management",
        meta: "10% of the exam · 8 Jan 2027",
        sessions: [
          {
            date: "2027-01-08",
            title: "Risk and the COSO ERM framework",
            detail: "Unit 12. Risk management and the COSO enterprise risk management framework. PDF pages 212 to 230.",
          },
        ],
      },
      {
        title: "Investment decisions",
        meta: "10% of the exam · 12 to 15 Jan 2027",
        sessions: [
          {
            date: "2027-01-12",
            title: "Capital budgeting and real options",
            detail: "Unit 13.1 to 13.2. The capital budgeting process, risk analysis, and real options. PDF pages 231 to 241.",
          },
          {
            date: "2027-01-15",
            title: "Discounted cash flow and ranking",
            detail: "Unit 13.3 to 13.6. Discounted cash flow, payback, discounted payback, ranking projects, and a full example. PDF pages 242 to 258.",
          },
        ],
      },
      {
        title: "Professional ethics",
        meta: "15% of the exam · 19 to 22 Jan 2027",
        sessions: [
          {
            date: "2027-01-19",
            title: "Ethics for the professional",
            detail: "Unit 14. Business ethics, ethics for management accountants, and fraud with the fraud triangle. PDF pages 259 to 270.",
          },
          {
            date: "2027-01-22",
            title: "Ethics for the organization",
            detail: "Unit 15. Corporate ethical legislation, responsibility for ethical behavior, and data ethics. Finish any missed examples. PDF pages 271 to 283.",
          },
        ],
      },
      {
        title: "Final consolidation",
        meta: "26 to 29 Jan 2027 · no extra exam weight",
        sessions: [
          {
            date: "2027-01-26",
            title: "Review units 1 to 8",
            detail: "Financial statement analysis and corporate finance, in unit order. Rework examples and record anything still open. PDF pages 1 to 160.",
          },
          {
            date: "2027-01-29",
            title: "Review units 9 to 15",
            detail: "Decision analysis, risk, investment decisions, and ethics. Close on weak areas. PDF pages 161 to 283.",
          },
        ],
      },
    ],
  },
  {
    id: "p1",
    name: "Part 1",
    range: "12 Feb 2027 to 29 Jun 2027",
    groups: [
      {
        title: "Introduction",
        meta: "12 Feb 2027",
        sessions: [
          {
            date: "2027-02-12",
            title: "Course introduction",
            detail: "The 20-unit outline, exam weights, study materials, and how to keep an error log through the six competencies.",
          },
        ],
      },
      {
        title: "External financial reporting",
        meta: "15% of the exam · 16 Feb to 26 Mar 2027",
        sessions: [
          {
            date: "2027-02-16",
            title: "External financial statements, first evening",
            detail: "Unit 1.1 to 1.3. Concepts of financial accounting, the statement of financial position, and income and comprehensive income.",
          },
          {
            date: "2027-02-19",
            title: "Equity, cash flows, and consolidation",
            detail: "Unit 1.4 to 1.6. Changes in equity, the statement of cash flows, and consolidation accounting.",
          },
          {
            date: "2027-02-23",
            title: "Receivables and inventory",
            detail: "Unit 2.1 to 2.2. Accounts receivable and inventory fundamentals.",
          },
          {
            date: "2027-02-26",
            title: "Inventory cost flow and measurement",
            detail: "Unit 2.3 to 2.4. Cost flow methods and measurement of inventory after initial recognition.",
          },
          {
            date: "2027-03-02",
            title: "Investments",
            detail: "Unit 3.1 to 3.3. Equity securities, the equity method, and debt securities.",
          },
          {
            date: "2027-03-05",
            title: "Property, plant, and intangibles",
            detail: "Unit 3.4 to 3.5. Property, plant and equipment, and intangible assets.",
          },
          {
            date: "2027-03-09",
            title: "Contingencies, warranties, and leases",
            detail: "Unit 4.1 to 4.2. Contingencies, warranties, and leases.",
          },
          {
            date: "2027-03-12",
            title: "Income taxes and bonds payable",
            detail: "Unit 4.3 to 4.4. Accounting for income taxes and for bonds payable.",
          },
          {
            date: "2027-03-16",
            title: "Revenue from contracts",
            detail: "Unit 5.1 to 5.2. Revenue from contracts with customers, and recognition of revenue over time.",
          },
          {
            date: "2027-03-19",
            title: "Impairment and disposal",
            detail: "Unit 5.3. Impairment and disposal of long-lived assets.",
          },
          {
            date: "2027-03-23",
            title: "Integrated reporting",
            detail: "Unit 6. Integrated thinking and the report, fundamental concepts, guiding principles, content elements, and adoption.",
          },
          {
            date: "2027-03-26",
            title: "Review of units 1 to 6",
            detail: "Mixed practice on statements, measurement, and recognition. Correct errors and revisit integrated reporting. No additional exam weight.",
          },
        ],
      },
      {
        title: "Cost management",
        meta: "15% of the exam · 30 Mar to 27 Apr 2027",
        sessions: [
          {
            date: "2027-03-30",
            title: "Cost terms and behavior",
            detail: "Unit 7.1 to 7.2. Cost management terminology, cost behavior, and the relevant range.",
          },
          {
            date: "2027-04-02",
            title: "Costing techniques",
            detail: "Unit 7.3 to 7.4. Costing techniques, then absorption costing and variable costing.",
          },
          {
            date: "2027-04-06",
            title: "Job-order and process costing",
            detail: "Unit 8.1 to 8.2. Job-order costing and process costing.",
          },
          {
            date: "2027-04-09",
            title: "Activity-based and life-cycle costing",
            detail: "Unit 8.3 to 8.4. Activity-based costing and life-cycle costing.",
          },
          {
            date: "2027-04-13",
            title: "Joint products and overhead",
            detail: "Unit 9.1 to 9.2. Joint product and by-product costing, overhead allocation, and normal costing.",
          },
          {
            date: "2027-04-16",
            title: "Service department costs",
            detail: "Unit 9.3. Allocating service department costs.",
          },
          {
            date: "2027-04-20",
            title: "Lean and just-in-time",
            detail: "Unit 10.1. Just-in-time inventory and lean resource management.",
          },
          {
            date: "2027-04-23",
            title: "ERP, outsourcing, and capacity",
            detail: "Unit 10.2 to 10.3. Enterprise resource planning, outsourcing, and capacity management.",
          },
          {
            date: "2027-04-27",
            title: "Process improvement",
            detail: "Unit 11. Value-chain analysis and other process improvement tools. Revisit examples from units 7 to 10.",
          },
        ],
      },
      {
        title: "Planning, budgeting, and forecasting",
        meta: "20% of the exam · 30 Apr to 18 May 2027",
        sessions: [
          {
            date: "2027-04-30",
            title: "Regression, learning curves, and sensitivity",
            detail: "Unit 12.1 to 12.3. Correlation and regression, learning curves, expected value, and sensitivity analysis.",
          },
          {
            date: "2027-05-04",
            title: "Strategy",
            detail: "Unit 12.4 to 12.5. Strategic management and strategic planning.",
          },
          {
            date: "2027-05-07",
            title: "What budgets are for",
            detail: "Unit 13.1 to 13.2. Roles of budgets, the budgeting process, and standard costs.",
          },
          {
            date: "2027-05-11",
            title: "The master budget and methodologies",
            detail: "Unit 13.3 to 13.4. The master budget and budgeting methodologies.",
          },
          {
            date: "2027-05-14",
            title: "Operating budget calculations",
            detail: "Unit 14.1 to 14.3. Sales forecasts, the sales budget, production and direct materials, and other operating budgets.",
          },
          {
            date: "2027-05-18",
            title: "Cash budgets and pro forma statements",
            detail: "Unit 14.4 to 14.6. The capital budget, projected collections, cash disbursements, the cash budget, and pro forma financial statements.",
          },
        ],
      },
      {
        title: "Performance management",
        meta: "20% of the exam · 21 May to 1 Jun 2027",
        sessions: [
          {
            date: "2027-05-21",
            title: "Material and labor variances",
            detail: "Unit 15.1 to 15.4. Variance analysis, static and flexible budget variances, direct materials, and direct labor.",
          },
          {
            date: "2027-05-25",
            title: "Mix, yield, overhead, and sales variances",
            detail: "Unit 15.5 to 15.8. Mix and yield, overhead variances, a comprehensive example, and sales variances.",
          },
          {
            date: "2027-05-28",
            title: "Responsibility centers",
            detail: "Unit 16.1 to 16.2. Responsibility centers and performance measures for cost, revenue, and profit centers.",
          },
          {
            date: "2027-06-01",
            title: "Investment centers, scorecards, and transfer prices",
            detail: "Unit 16.3 to 16.5. Investment-center measures, the balanced scorecard, and transfer pricing.",
          },
        ],
      },
      {
        title: "Internal controls",
        meta: "15% of the exam · 4 to 11 Jun 2027",
        sessions: [
          {
            date: "2027-06-04",
            title: "Governance and internal control",
            detail: "Unit 17. Corporate governance, regulations related to internal control, and risk. Applied to practice scenarios.",
          },
          {
            date: "2027-06-08",
            title: "Control procedures",
            detail: "Unit 18.1. Control procedures.",
          },
          {
            date: "2027-06-11",
            title: "Systems controls and continuity",
            detail: "Unit 18.2 to 18.3. Systems controls, information security, security measures, and business continuity planning.",
          },
        ],
      },
      {
        title: "Technology and analytics",
        meta: "15% of the exam · 15 to 22 Jun 2027",
        sessions: [
          {
            date: "2027-06-15",
            title: "Systems and the data life cycle",
            detail: "Unit 19.1 to 19.2. Accounting information systems, data governance, and the data life cycle.",
          },
          {
            date: "2027-06-18",
            title: "COSO and data governance",
            detail: "Unit 19.3. The COSO framework for internal control over data governance.",
          },
          {
            date: "2027-06-22",
            title: "Finance technology and analytics",
            detail: "Unit 20. Technology-enabled finance transformation, analytics, and big data. Practice questions connect the two topics.",
          },
        ],
      },
      {
        title: "Final consolidation",
        meta: "25 to 29 Jun 2027 · no extra exam weight",
        sessions: [
          {
            date: "2027-06-25",
            title: "Review units 1 to 14",
            detail: "External reporting, cost management, planning, and budgeting. Rework missed examples and start with the error log.",
          },
          {
            date: "2027-06-29",
            title: "Review units 15 to 20",
            detail: "Performance, internal controls, and technology. Mixed practice, then a check that all 20 units have been covered.",
          },
        ],
      },
    ],
  },
];

const state = {
  part: "p2",
  query: "",
  section: "all",
};

const root = document.getElementById("schedule-root");
const sectionFilter = document.getElementById("section-filter");
const searchInput = document.getElementById("session-search");
const resultCount = document.getElementById("result-count");
const tabP2 = document.getElementById("tab-p2");
const tabP1 = document.getElementById("tab-p1");

function parseISO(iso) {
  const [year, month, day] = iso.split("-").map(Number);
  return new Date(year, month - 1, day);
}

function esc(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function dateParts(iso) {
  const date = parseISO(iso);
  return {
    dow: WEEK[date.getDay()],
    mon: MONTHS[date.getMonth()],
    day: String(date.getDate()),
  };
}

function currentPart() {
  return PARTS.find((part) => part.id === state.part);
}

function eveningCount(part) {
  return part.groups.reduce((sum, group) => sum + group.sessions.length, 0);
}

function fillSections() {
  const part = currentPart();
  const previous = state.section;
  sectionFilter.replaceChildren();
  const all = document.createElement("option");
  all.value = "all";
  all.textContent = "All sections";
  sectionFilter.append(all);
  part.groups.forEach((group, index) => {
    const option = document.createElement("option");
    option.value = String(index);
    option.textContent = group.title;
    sectionFilter.append(option);
  });
  const stillThere = [...sectionFilter.options].some((option) => option.value === previous);
  state.section = stillThere ? previous : "all";
  sectionFilter.value = state.section;
}

function sessionMatches(session, groupTitle) {
  if (!state.query) return true;
  const haystack = `${groupTitle} ${session.title} ${session.detail} ${session.date}`.toLowerCase();
  return haystack.includes(state.query);
}

function render() {
  const part = currentPart();
  const total = eveningCount(part);
  let shown = 0;
  let evening = 0;
  const blocks = [];

  part.groups.forEach((group, index) => {
    if (state.section !== "all" && state.section !== String(index)) {
      evening += group.sessions.length;
      return;
    }
    const rows = [];
    group.sessions.forEach((session) => {
      evening += 1;
      if (!sessionMatches(session, group.title)) return;
      shown += 1;
      const stamp = dateParts(session.date);
      const dayClass = stamp.dow === "Fri" ? "fri" : "tue";
      rows.push(`
        <article class="session">
          <time class="date-block ${dayClass}" datetime="${session.date}">
            <span class="dow">${stamp.dow}</span>
            <span class="num">${stamp.day}</span>
            <span class="mon">${stamp.mon}</span>
          </time>
          <div>
            <p class="session-kicker">Evening ${evening} of ${total}</p>
            <h3>${esc(session.title)}</h3>
            <p>${esc(session.detail)}</p>
          </div>
        </article>
      `);
    });
    if (!rows.length) return;
    blocks.push(`
      <section class="group">
        <header class="group-head">
          <h3>${esc(group.title)}</h3>
          <p>${esc(group.meta)}</p>
        </header>
        ${rows.join("")}
      </section>
    `);
  });

  if (!blocks.length) {
    root.innerHTML = `<p class="empty">No evening matches that search. Clear the search or choose all sections.</p>`;
  } else {
    root.innerHTML = `<div class="schedule-panel" id="panel-${part.id}" role="tabpanel">${blocks.join("")}</div>`;
  }

  const label = shown === 1 ? "evening" : "evenings";
  resultCount.textContent = state.query || state.section !== "all"
    ? `${shown} ${label} match in ${part.name}.`
    : `${total} evenings in ${part.name}, ${part.range}.`;
}

function setPart(partId) {
  state.part = partId;
  state.section = "all";
  const selectedP2 = partId === "p2";
  tabP2.setAttribute("aria-selected", String(selectedP2));
  tabP1.setAttribute("aria-selected", String(!selectedP2));
  tabP2.tabIndex = selectedP2 ? 0 : -1;
  tabP1.tabIndex = selectedP2 ? -1 : 0;
  fillSections();
  render();
}

function startOfDay(date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

function writeCountdown() {
  const node = document.getElementById("countdown");
  const today = startOfDay(new Date());
  const part2Start = parseISO("2026-10-30");
  const part2End = parseISO("2027-01-29");
  const part1Start = parseISO("2027-02-12");
  const part1End = parseISO("2027-06-29");
  let text = "CMA Part 1 and Part 2";
  if (today < part2Start) {
    const days = Math.round((part2Start - today) / 86400000);
    text = days === 1 ? "First evening is tomorrow" : `First evening in ${days} days`;
  } else if (today.getTime() === part2Start.getTime()) {
    text = "First evening is today";
  } else if (today <= part2End) {
    text = "Part 2 is in session";
  } else if (today < part1Start) {
    text = "Part 2 is complete. Part 1 opens 12 February";
  } else if (today <= part1End) {
    text = "Part 1 is in session";
  } else {
    text = "This cohort has finished";
  }
  node.textContent = text;
}

function hintForContact() {
  const hint = document.getElementById("form-hint");
  if (CONTACT.whatsapp) {
    hint.textContent = "This opens WhatsApp with your request ready to send.";
  } else if (CONTACT.email) {
    hint.textContent = "This opens your email app with the request addressed and written.";
  } else {
    hint.textContent = "This prepares a request you can copy into WhatsApp or email. Add a phone number in the form so the reply has somewhere to go.";
  }
}

function selectedPart() {
  const checked = document.querySelector('input[name="part"]:checked');
  return checked ? checked.value : "";
}

function buildMessage(data) {
  const lines = [
    "CMA enrollment request",
    "Ahmed Abu El-Ezz",
    "",
    `Name: ${data.name}`,
    `Phone: ${data.phone}`,
    `Email: ${data.email}`,
    `Course: ${data.part}`,
  ];
  if (data.note) lines.push(`Note: ${data.note}`);
  return lines.join("\n");
}

function showError(message) {
  const error = document.getElementById("form-error");
  error.hidden = !message;
  error.textContent = message || "";
}

function validate(form) {
  const name = form.name.value.trim();
  const phone = form.phone.value.trim();
  const email = form.email.value.trim();
  form.name.setAttribute("aria-invalid", name ? "false" : "true");
  form.phone.setAttribute("aria-invalid", phone ? "false" : "true");
  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  form.email.setAttribute("aria-invalid", emailOk ? "false" : "true");
  if (!name || !phone || !emailOk || !selectedPart()) {
    showError("Add your name, a phone number, a valid email, and a part.");
    return null;
  }
  showError("");
  return {
    name,
    phone,
    email,
    part: selectedPart(),
    note: form.note.value.trim(),
  };
}

async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (error) {
    const area = document.getElementById("done-message");
    area.focus();
    area.select();
    return false;
  }
}

function openDelivery(message) {
  if (CONTACT.whatsapp) {
    const number = String(CONTACT.whatsapp).replace(/\D/g, "");
    window.open(`https://wa.me/${number}?text=${encodeURIComponent(message)}`, "_blank", "noopener");
    return "WhatsApp should open with this request. If it does not, copy the text and send it yourself.";
  }
  if (CONTACT.email) {
    const subject = encodeURIComponent("CMA enrollment");
    const body = encodeURIComponent(message);
    window.location.href = `mailto:${CONTACT.email}?subject=${subject}&body=${body}`;
    return "Your email app should open with this request. If it does not, copy the text and send it yourself.";
  }
  return "Copy the request and send it to Abu El-Ezz by WhatsApp or email.";
}

function bindForm() {
  const form = document.getElementById("enroll-form");
  const done = document.getElementById("enroll-done");
  const doneMessage = document.getElementById("done-message");
  const doneLead = document.getElementById("done-lead");
  hintForContact();

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = validate(form);
    if (!data) return;
    const message = buildMessage(data);
    doneMessage.value = message;
    doneLead.textContent = openDelivery(message);
    form.hidden = true;
    done.hidden = false;
    document.getElementById("copy-request").focus();
  });

  document.getElementById("copy-request").addEventListener("click", async () => {
    const copied = await copyText(doneMessage.value);
    const button = document.getElementById("copy-request");
    button.textContent = copied ? "Copied" : "Select the text above and copy it";
    window.setTimeout(() => {
      button.textContent = "Copy request";
    }, 2200);
  });

  document.getElementById("edit-request").addEventListener("click", () => {
    done.hidden = true;
    form.hidden = false;
    form.name.focus();
  });
}

function bindSchedule() {
  tabP2.addEventListener("click", () => setPart("p2"));
  tabP1.addEventListener("click", () => setPart("p1"));
  tabP2.addEventListener("keydown", onTabKey);
  tabP1.addEventListener("keydown", onTabKey);
  searchInput.addEventListener("input", () => {
    state.query = searchInput.value.trim().toLowerCase();
    render();
  });
  sectionFilter.addEventListener("change", () => {
    state.section = sectionFilter.value;
    render();
  });
  document.getElementById("print-schedule").addEventListener("click", () => window.print());
  document.querySelectorAll("[data-open-part]").forEach((link) => {
    link.addEventListener("click", () => setPart(link.dataset.openPart));
  });
}

function onTabKey(event) {
  if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
  event.preventDefault();
  const next = state.part === "p2" ? "p1" : "p2";
  setPart(next);
  (next === "p2" ? tabP2 : tabP1).focus();
}

writeCountdown();
fillSections();
render();
bindSchedule();
bindForm();
