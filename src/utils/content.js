export const askbiz = {
    slug: "askbiz",
    name: "AskBiz",
    kicker: "AI business network",
    tagline: "Ask a question. Reach the people who have already solved it.",
    short:
      "Entrepreneurs, established businesses and verified experts on one platform. Find suppliers and partners, learn from people who have done it before, and get answers grounded in Indian regulations and schemes.",
    problem:
      "For most small businesses in India, the answers already exist. The people who have solved the same problem, and the suppliers who can help, are simply hard to reach without an existing personal network.",
    solution:
      "One platform connects first-time founders, established businesses looking for trade partners, and verified chartered accountants, lawyers and consultants.",
    ai:
      "Answers draw on verified businesses and experts on the platform, a curated base of Indian regulations, licences and schemes, and live web search for anything current. Each one links to people who can help further.",
    sides: [
      { title: "Individuals", text: "First-time founders and professionals planning to start or grow a business." },
      { title: "Businesses", text: "Established traders, manufacturers and MSMEs seeking visibility and trade partners." },
      { title: "Experts", text: "Verified chartered accountants, lawyers and consultants offering guidance." },
    ],
    sources: ["Verified business directory", "Indian regulations and schemes", "Live web search"],
    features: [
      { icon: "BadgeCheck", title: "Verified profiles", text: "Role-based profiles for individuals, businesses and experts, with credentials, reviews and trust scores." },
      { icon: "Users", title: "Industry communities", text: "Sector spaces for textiles, food processing, agriculture, retail and more, with questions answered by practitioners." },
      { icon: "Network", title: "B2B network", text: "Businesses find suppliers, logistics partners and peers across India, beyond their own city." },
      { icon: "Sparkles", title: "AI business assistant", text: "Answers on registrations, compliance and schemes, linked to the people on the platform who can help." },
    ],
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
          "AskBiz gives them a living, active presence, not just a listing or a profile. They answer questions, post updates, connect with peer businesses, and as the AI indexes their expertise it recommends them to Individuals asking relevant questions. Discovery becomes organic and intent-driven.",
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
      { src: "/askbiz/app-feed.png", label: "Community feed", device: "phone" },
      { src: "/askbiz/app-chat.png", label: "Ask, the AI assistant", device: "phone" },
      { src: "/askbiz/app-discover.png", label: "Find experts", device: "phone" },
      { src: "/askbiz/app-community.png", label: "Industry communities", device: "phone" },
    ],
};

export const clientWork = [
  {
    slug: "edu-platform",
    kicker: "Client project · EdTech SaaS",
    title: "A learning and career-guidance platform for schools",
    tagline: "Helping students see where they could go next.",
    client: "An education-technology company",
    short:
      "Development partner for a SaaS platform that schools license to help students build skills, explore careers and decide which field to pursue, with guided recommendations for each student.",
    built: "Product engineering, UX and UI design, and the full web application, delivered end to end as the client's software team.",
    features: [
      { title: "Career discovery", text: "A curated library of career paths, with shortlists students can build and revisit." },
      { title: "Psychometric assessments", text: "A multi-module assessment suite covering aptitude, interests, emotional intelligence and leadership." },
      { title: "Skill programmes", text: "Monthly programmes with weekly modules and a final evaluation." },
      { title: "Student dashboard", text: "Readiness tiers, academic performance and next steps in one clear view." },
    ],
    shots: [
      { src: "/work/edu-report.png", label: "Assessment report", device: "browser" },
      { src: "/work/edu-school.png", label: "School overview", device: "browser" },
      { src: "/work/edu-assessments.png", label: "Psychometric assessments", device: "browser" },
      { src: "/work/edu-careers.png", label: "Career discovery", device: "browser" },
    ],
  },
  {
    slug: "journal-platform",
    kicker: "Client project · Academic publishing",
    title: "A peer-review and open-access journal platform",
    tagline: "A modern home for medical research.",
    client: "An academic publisher",
    short:
      "We built the publishing platform for a medical journal: authors submit manuscripts, editors manage them through a transparent peer-review workflow, and published articles are open to all readers.",
    built: "Workflow design, backend and frontend engineering, and the author and editor workspaces, delivered as the client's development partner.",
    features: [
      { title: "Author workspace", text: "Submit manuscripts, track status and read editorial comments with a full audit history." },
      { title: "Editorial review", text: "Editors manage submissions through review, revision and acceptance in a single workflow." },
      { title: "Open access", text: "Published articles are freely available to read and cite." },
    ],
    shots: [
      { src: "/work/journal-dashboard.png", label: "Editorial dashboard", device: "browser" },
      { src: "/work/journal-review.png", label: "Manuscript review", device: "browser" },
    ],
  },
];

export const services = [
  { icon: "Code2", title: "Custom software development", text: "Web applications, internal tools and enterprise systems, engineered around how your business actually works.", items: ["Web applications", "Enterprise and internal systems", "APIs and integrations"] },
  { icon: "Layers", title: "SaaS and product engineering", text: "We take a product from idea to a scalable, multi-tenant platform you can sell and support.", items: ["MVP to scale", "Multi-tenant architecture", "Subscription billing and licensing"] },
  { icon: "Bot", title: "AI solutions", text: "AI assistants and automation built on your own business data, added where they measurably save time or improve decisions.", items: ["AI assistants and chatbots", "Search and Q&A over your data", "Workflow automation and reporting"] },
  { icon: "Smartphone", title: "Mobile app development", text: "Native and cross-platform apps for Android and iOS, from first prototype to store release.", items: ["Android and iOS", "Cross-platform apps", "Store release and maintenance"] },
  { icon: "PenTool", title: "UI/UX design", text: "Research-led interface and experience design that makes complex software simple to use.", items: ["Product and UX design", "Design systems", "Prototyping and usability testing"] },
  { icon: "Cloud", title: "Cloud and DevOps", text: "Hosting, automated delivery and monitoring that keep your applications fast, secure and available.", items: ["Cloud setup and migration", "CI/CD pipelines", "Monitoring and security"] },
];

export const process = [
  { k: "Discover", t: "Understand the problem", d: "We start with your goals, users and constraints, and agree on scope before any code is written." },
  { k: "Design", t: "Shape the solution", d: "Architecture, user flows and interface design, reviewed with you at every step." },
  { k: "Build", t: "Engineer for quality", d: "Iterative development with regular demos, automated testing and clean, documented code." },
  { k: "Launch & support", t: "Run and improve", d: "Deployment, monitoring and ongoing support, so your software keeps pace as your business grows." },
];
