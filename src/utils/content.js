export const products = [
  {
    slug: "askbiz",
    name: "AskBiz",
    flagship: true,
    kicker: "Flagship · AI Business Network",
    tagline: "Every business answer in India, one question away.",
    short:
      "AskBiz connects aspiring entrepreneurs, legacy businesses, and verified experts on one platform, with an AI assistant that answers any business question instantly. Think IndiaMart's directory, LinkedIn's networking, and a personal business advisor, built specifically for India's 63 million MSMEs.",
    problem:
      "Starting or growing a business in India isn't held back by a lack of knowledge. It's held back by a lack of access. The people who have already solved these problems, and the businesses who supply what's needed, are impossible to find without an existing personal network.",
    solution:
      "AskBiz closes that gap. It's a three-sided platform connecting Individuals looking to start or grow a business, Businesses (particularly established, legacy operations) looking for visibility and peer connections, and verified Experts like CAs, lawyers, and consultants who guide them through it.",
    ai:
      "At the centre sits an AI assistant that answers any business question by pulling from three sources at once: the platform's own verified business database, a curated knowledge base of Indian regulations and schemes, and live web search when needed. Ask it anything, how to register an MSME, which supplier to trust, what subsidy you qualify for, and it responds instantly, in your language, while pointing you toward real people on the platform who can help further.",
    flywheel:
      "Every question posted, every connection made, and every answer given adds to a permanent, searchable knowledge base. That makes the platform more valuable with every user who joins.",
    closing: "Built for India. Starting with the legacy businesses everyone else has overlooked.",
    sides: [
      { title: "Individuals", text: "Aspiring founders looking to start or grow a business." },
      { title: "Businesses", text: "Established, legacy operations seeking visibility and peers." },
      { title: "Experts", text: "Verified CAs, lawyers and consultants who guide the way." },
    ],
    sources: ["Verified business database", "Indian regulations & schemes", "Live web search"],
    pitch:
      "We are building India's first business knowledge platform, where aspiring entrepreneurs get answers, legacy businesses find growth, and everyone is connected through community and AI.",
    triangle:
      "Think of AskBiz as a triangle of trust. Individuals come with questions and ambitions. Businesses, especially legacy and traditional ones, bring real-world experience and potential partnerships. Experts provide domain-specific guidance. Everyone benefits from being on the same platform.",
    overview: {
      roles: [
        { key: "individual", title: "Individual", sub: "Aspiring entrepreneur", verbs: "Ask, explore, learn", text: "Someone with a business idea brewing, or a job-holder ready to go independent, with ambition but no roadmap." },
        { key: "business", title: "Business", sub: "Legacy / established", verbs: "Connect, list, grow", text: "Traders, MSMEs, family-run shops and manufacturers with decades of experience but little visibility beyond their city." },
        { key: "expert", title: "Expert", sub: "Domain specialists", verbs: "Guide, advise, earn", text: "Verified CAs, lawyers and consultants who turn their know-how into reputation, clients and income." },
      ],
      hub: {
        title: "Community hub",
        tagline: "IndiaMart × LinkedIn for Indian entrepreneurs",
        items: [
          { title: "Post queries", text: "Ask the community a real question and get answers from people who have done it." },
          { title: "Join field communities", text: "Textiles, food processing, agri, retail: spaces where your industry is already talking." },
          { title: "B2B connections", text: "Businesses find suppliers, logistics partners and peers across India." },
          { title: "Get answers", text: "Answers from verified businesses and experts, ranked by credibility." },
          { title: "Follow businesses", text: "Track updates, offers and knowledge shared by the businesses you trust." },
          { title: "Peer support", text: "Founders and owners in the same trade helping each other through the hard parts." },
        ],
      },
      outputs: [
        { title: "Profiles", lines: ["Verified role accounts", "Portfolio + reviews"], text: "Every member has a verified profile. Individuals show goals, Businesses show products and trust score, Experts show credentials and reviews." },
        { title: "Feed", lines: ["Industry-specific posts", "Q&A + discussions"], text: "A feed tuned to the industries and communities you follow, not a generic timeline." },
        { title: "B2B network", lines: ["Business-to-business", "Supplier + partner ties"], text: "A horizontal layer between businesses, something neither IndiaMart nor LinkedIn does well for this segment." },
      ],
      ai: {
        title: "Intelligent business assistant",
        sources: [
          { title: "Platform database", text: "Real businesses, real experts and real queries from AskBiz itself." },
          { title: "Curated RAG data", text: "A curated knowledge base of Indian regulations, licences and government schemes." },
          { title: "Live web search", text: "Fresh information from the web when the question needs it." },
        ],
        result: "One unified answer for any question, any topic, any business",
      },
    },
    journeys: [
      {
        key: "individual",
        label: "Individual",
        who: "Aspiring entrepreneur, job-seeker, curious learner",
        story: [
          "The Individual is the heart of the platform, the person the whole thing is built for. A young person in a tier-2 city who wants to open a textile business, or a woman ready to turn a home-cooking talent into a food brand. The ambition is there; the ecosystem support isn't.",
          "Their core problem is isolation. They don't know who to talk to, what steps to take, or where reliable information even exists. Google gives generic results; family gives outdated advice.",
          "On AskBiz they get access to real people they can message, a community in their exact field, and an AI assistant that explains schemes, answers questions and points them to the right expert. They come in with a question and leave with a path forward.",
        ],
        problems: [
          { title: "No information", text: "Don't know where to start", solves: [0, 3] },
          { title: "No contacts", text: "No access to experts", solves: [1, 2] },
          { title: "No resources", text: "Guidance, tools, capital", solves: [0, 2, 3] },
        ],
        actions: [
          { title: "Ask questions", text: "Post queries to businesses & experts" },
          { title: "Join communities", text: "Follow industries & interest areas" },
          { title: "Connect directly", text: "Message businesses and experts" },
          { title: "Use AI assistant", text: "Ask anything, get instant answers" },
        ],
        profile: ["Goals + interests", "Questions asked", "Connections made", "Communities joined"],
        gains: [
          { title: "Clarity", text: "Direction to start", from: [0, 3] },
          { title: "Real connections", text: "People who can help", from: [1, 2] },
          { title: "Knowledge", text: "Learn from experience", from: [0, 1, 3] },
        ],
        quote: "From “I have an idea” to “I know what to do next”",
        journey: ["Curious visitor", "Confident founder"],
      },
      {
        key: "business",
        label: "Business",
        who: "Legacy traders, MSMEs, family-run shops, manufacturers",
        story: [
          "The Business role is the platform's backbone. The textile trader in Surat running the same shop for 30 years, the steel fabricator in Ludhiana, the spice wholesaler in Kochi: deep domain knowledge, established operations, and almost invisible outside their own geography.",
          "They aren't doing badly; they're stuck. New customers only come by word of mouth, reliable suppliers in other cities are hard to find, and there's no way to share what they know or build credibility at scale.",
          "AskBiz gives them a living, active presence — not just a listing, not just a profile. They answer questions, post updates, connect with peer businesses, and as the AI indexes their expertise it recommends them to Individuals asking relevant questions. Discovery becomes organic and intent-driven.",
        ],
        problems: [
          { title: "Invisible online", text: "No digital presence or discoverability", solves: [0, 3] },
          { title: "No new reach", text: "Can't attract new customers or partners", solves: [1, 3] },
          { title: "Isolated", text: "No peer network or supplier ties", solves: [2] },
        ],
        actions: [
          { title: "List their business", text: "Profile, products, services & story" },
          { title: "Answer queries", text: "Help Individuals, build reputation" },
          { title: "B2B connect", text: "Find suppliers, partners, peers" },
          { title: "Post & share", text: "Share knowledge, updates, offers" },
        ],
        profile: ["Business story", "Products & services", "Reviews & trust score", "Field + location + years of experience"],
        gains: [
          { title: "Visibility", text: "Found by people who need them", from: [0, 3] },
          { title: "Growth", text: "New partners, suppliers", from: [2, 3] },
          { title: "Trust", text: "Reviews + credibility", from: [1] },
        ],
        highlight: "Key differentiator: businesses can connect with other businesses",
        quote: "From “only my local area knows me” to “visible across India”",
        journey: ["Local shop", "Trusted industry name"],
      },
    ],
    shots: [
      { src: "/products/askbiz-feed.png", label: "Community feed", device: "phone" },
      { src: "/products/askbiz-assistant.png", label: "Business Assistant", device: "phone" },
      { src: "/products/askbiz-assistant-2.png", label: "Connect with experts", device: "phone" },
    ],
  },
  {
    slug: "pioneer",
    name: "Pioneer",
    kicker: "SaaS · EdTech for Schools",
    tagline: "A launchpad for every student's future.",
    short:
      "Pioneer is a SaaS learning platform licensed to schools so their students can upskill themselves — with built-in career consultancy that helps each student discover which field they should focus on.",
    features: [
      { title: "Career Discovery", text: "A curated library of career paths for the modern Indian economy, with shortlists students can build." },
      { title: "DISHA Psychometrics", text: "Scientifically designed assessments across aptitude, interests, EQ, creativity and leadership." },
      { title: "Skill Readiness", text: "Monthly programs with weekly modules and a final evaluation — from Python to communication." },
      { title: "Student Dashboard", text: "Readiness tiers, academic performance and next steps, all in one clear view." },
    ],
    shots: [
      { src: "/products/pioneer-dashboard.png", label: "Student dashboard", device: "browser" },
      { src: "/products/pioneer-careers.png", label: "Career discovery", device: "browser" },
      { src: "/products/pioneer-psychometric.png", label: "Psychometric tests", device: "browser" },
      { src: "/products/pioneer-skills.png", label: "Skill readiness", device: "browser" },
    ],
  },
  {
    slug: "jamsd",
    name: "JAMSD",
    kicker: "Publishing · Peer Review",
    tagline: "A modern home for medical research.",
    short:
      "JAMSD — the Journal of Applied Medical and Surgical Disciplines — is a publishing platform where authors submit articles, editors review them through a transparent workflow, and anyone can read the published work openly.",
    features: [
      { title: "Author Workspace", text: "Submit manuscripts, track status and read editorial comments with a full audit history." },
      { title: "Editorial Review", text: "Editors move submissions through review, revision and acceptance with clarity." },
      { title: "Open Access", text: "Published articles are free for anyone to read under CC BY 4.0." },
    ],
    shots: [
      { src: "/products/jamsd-home.png", label: "Journal home", device: "browser" },
      { src: "/products/jamsd-manuscripts.png", label: "Author workspace", device: "browser" },
      { src: "/products/jamsd-about.png", label: "Journal information", device: "browser" },
    ],
  },
];

export const testimonials = [
  { quote: "Infokai didn't just build our journal platform — they understood peer review better than most vendors we spoke to. Our editors adopted it in a week.", name: "Editorial Board", role: "JAMSD" },
  { quote: "Pioneer changed how our students think about careers. The DISHA assessments give counsellors something concrete to work with.", name: "School Principal", role: "Pioneer partner school" },
  { quote: "Asked the AskBiz assistant about a trade licence at midnight and had a clear checklist — plus two experts to call — in seconds.", name: "First-time founder", role: "AskBiz user, Meerut" },
  { quote: "Thoughtful engineers, calm communicators, and a design sense that made our product feel premium from day one.", name: "Product Lead", role: "Client partner" },
];

export const stats = [
  { value: 63, suffix: "M", label: "MSMEs AskBiz is built for" },
  { value: 3, suffix: "", label: "Live products in market" },
  { value: 11, suffix: "", label: "Assessment modules in DISHA" },
  { value: 100, suffix: "%", label: "Open access on JAMSD" },
];
