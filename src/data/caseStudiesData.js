export const caseStudies = [
  {
    id: 'ayataone',
    title: 'AyataOne',
    subtitle: 'Designing a Command Centre for eCommerce Operations',
    hookTheme: 'dark',
    hook: 'Teams were jumping between Jira, spreadsheets, monitoring tools, and email threads just to answer one question: what is happening right now?',
    meta: {
      type: 'Enterprise Internal Tool,Operational Dashboard',
      role: 'Lead Product Designer',
      timeline: '2026',
      tools: 'Figma, Prototyping',
      status: 'In Development',
    },
    next: { id: 'invotools', title: 'InvoTools' },
    sections: [
      {
        type: 'overview',
        body: "AyataOne is a centralised operations portal designed to give eCommerce service teams a single place to monitor platform health, manage incidents, track service requests, and review operational performance,all without switching between tools.\n\nBefore AyataOne, operational information was scattered. Teams relied on a combination of Jira tickets, manual spreadsheets, monitoring reports, and communication channels to piece together the state of their platforms. Getting a clear picture required significant effort, and by the time the picture was assembled, it was often already out of date.\n\nThe brief came from AyataCommerce's Managed Service Department Head: build a unified operational workspace that gives both internal teams and client stakeholders immediate visibility into what is happening and where attention is needed.",
        snapshot: [
          '6 primary modules, 20+ screen states designed',
          '4 user types: Operations Manager, Support Engineer, Client Stakeholder, Department Head',
          '3 major sections: Platform Health, Service Management Intelligence, Experience Performance',
        ],
      },
      {
        type: 'single',
        label: 'The Problem',
        title:
          'The Real Challenge Was Not Missing Data. It Was Too Much of It.',
        body: 'The operational data already existed. Platform health reports, incident logs, SLA performance metrics, customer experience data,all of it was available somewhere. The problem was that it lived in too many places and arrived in too many formats.\n\nFour distinct user types needed to work within the same platform, each with fundamentally different priorities. Operations Managers needed platform-wide awareness at a glance. Support Engineers needed to triage and action active incidents without navigational friction. Client Stakeholders needed accessible performance summaries without involving the support team. Department Heads needed high-level SLA and service health data to report upward. Designing for all four in a single interface created an immediate tension: the more information you surface, the harder it becomes to identify what actually matters.\n\nThis was not a data problem. It was an information architecture problem.',
      },
      {
        type: 'process',
        label: 'Process',
        title: 'Starting With Users, Not Screens',
        body: 'The process began with six structured stakeholder sessions across operations managers, support engineers, and service delivery leads. Rather than gathering feature requests, the conversations focused on mapping end-to-end workflows,specifically, the moments where the current process created the most friction. Sessions were conducted as guided walkthroughs: participants described a recent incident or service request from start to finish, narrating every tool they opened and every person they contacted along the way.\n\nTwo patterns emerged consistently:',
        items: [
          {
            label: 'Pattern 01',
            text: 'Users were spending significant time aggregating information that should have been immediately available.',
          },
          {
            label: 'Pattern 02',
            text: 'When information was available, it was often too technical or too detailed to be actionable without further analysis.',
          },
        ],
        closing:
          'These two patterns shaped the entire design direction. AyataOne needed to surface the right information at the right level of detail,and nothing more. I also reviewed similar operational platforms and command centre interfaces to understand industry conventions, identify what worked, and avoid patterns that added visual noise without adding clarity.',
      },
      {
        type: 'decisions',
        title: 'Three Decisions That Defined the Platform',
        items: [
          {
            number: '01',
            title: 'Command Centre, Not Dashboard',
            body: 'Early concepts gravitated toward a traditional reporting dashboard: charts, tables, trend lines, performance summaries across every operational area. The instinct was understandable,every piece of data was genuinely useful.\n\nThe problem was that surfacing everything equally made nothing feel important. A command centre works differently. It is designed around awareness first, detail second. Status indicators, active incidents, and critical alerts moved to the foreground. Analytical reports and trend visualisations moved behind progressive disclosure.',
            placeholder: null,
          },
          {
            number: '02',
            title: 'Separating Incidents From Service Requests',
            body: 'During stakeholder discussions, a structural issue emerged within the service management area. Incidents and service requests were being treated as variations of the same workflow, but in practice they operate very differently.\n\nIncidents are reactive,something has gone wrong and requires immediate attention. Service requests are proactive,a team or client needs something actioned. Combining them into a single view created navigational ambiguity. Separating them into two dedicated sections reduced complexity significantly and gave each workflow the space it needed.',
          },
          {
            number: '03',
            title: 'Progressive Disclosure as the Core Pattern',
            body: "Users see operational summaries first,platform status, active incident counts, SLA performance at a glance. Detailed tables, trend charts, and drill-down reports are available through expandable sections and dedicated views.\n\nThis approach resolved the tension between executive users who need high-level visibility and operational users who need granular data. Neither group is asked to navigate through the other's workflow to reach their own.",
          },
        ],
      },
      {
        type: 'diagrams',
        top: '/desig-map-ayataone.png',
        topAlt: 'AyataOne design map',
        single: '/ayataone-system-ecosystem-diagram.png',
        singleAlt: 'AyataOne system ecosystem diagram',
        pair: [
          {
            src: '/ayataone-user-flow-diagram-incident-resolution.png',
            alt: 'User flow diagram — incident resolution',
          },
          {
            src: '/ayataone-user-flow-diagram-manager.png',
            alt: 'User flow diagram — operations manager',
          },
        ],
        bottom: '/ayataone-low-fidelity-wireframe.png',
        bottomAlt: 'AyataOne low fidelity wireframe',
      },
      {
        type: 'accent',
        label: 'The Pivot',
        title: 'When the Brief Changed Midway',
        body: 'One significant direction change occurred during the design of the Platform Health section.\n\nThe original brief focused on technical platform monitoring,uptime, system status, infrastructure health. Midway through the process, stakeholder discussions revealed a gap: a platform could be operationally healthy but still delivering a poor customer experience. Technical health and experience health are not the same thing.\n\nThis led to the introduction of the Experience Performance layer,incorporating Google Lighthouse metrics, page-level performance monitoring, AI-generated insights, and customer experience trends alongside traditional platform monitoring. The addition transformed Platform Health from a technical status board into a genuinely operational view that connected infrastructure performance to customer impact.',
        slides: [
          '/ayataone-screen1.png',
          '/ayataone-screen2.png',
          '/ayataone-screen3.png',
          '/ayataone-screen4.png',
        ],
      },
      {
        type: 'pullquote',
        quote:
          'Every addition to the primary view makes it harder to see what actually requires attention.',
        context:
          'Throughout the project, there was consistent pressure to add more,more charts, more widgets, more data points on the primary views. Every request was legitimate. Every piece of information had value.\n\nThe pushback was not about the value of the data. It was about the cost of displaying it all at once. The layered approach,summaries on the surface, detail available on demand,was the resolution. It satisfied business requirements without creating an interface that required interpretation before it could be used.',
      },
      {
        type: 'outcome',
        label: 'Outcome',
        title: 'Stakeholder Validation',
        body: 'AyataOne is currently in development. The design was validated through four structured review sessions with operations managers, service delivery leads, and client representatives. Across every session, three outcomes emerged consistently.',
        items: [
          'Operations managers confirmed they could assess full platform status from a single view,a task that previously required opening four separate tools',
          'The separation of incidents from service requests was called out unprompted in three of four sessions as the most immediately useful structural decision',
          'Client stakeholders confirmed they could self-serve the performance summaries they had previously requested from the support team on a weekly basis',
          "The progressive disclosure model resolved the executive-vs-operational tension without either group needing to navigate through the other's workflow",
        ],
      },
      {
        type: 'single',
        label: 'Reflection',
        title: 'What I Would Do Differently',
        body: 'The most valuable change I would make is bringing end users into the process earlier,particularly for information architecture decisions.\n\nMany of the structural choices in AyataOne were driven by stakeholder discussions and business requirements. That input was essential, but it reflects organisational priorities rather than the day-to-day realities of the people who will use the platform. Earlier validation sessions with operations managers and support engineers would likely have surfaced refinements we reached through iteration much faster.\n\nThe second change is introducing interactive prototypes earlier. Many conversations about data density, navigation depth, and drill-down behaviour became significantly more productive once stakeholders could interact with realistic workflows rather than review static screens. That shift in medium changed the quality of feedback immediately.',
      },
    ],
  },

  {
    id: 'invotools',
    title: 'InvoTools',
    subtitle: 'Building a B2B Invoice Management SaaS from the Ground Up',
    hookTheme: 'dark',
    hook: 'Enterprise retail brands managing high volumes of customer invoices across multiple regions,with no centralised system, no visibility into customer engagement, and no way to know if an invoice had even been opened.',
    meta: {
      type: 'B2B SaaS Platform,Enterprise Invoice Management',
      role: 'Lead Product Designer',
      timeline: '2023–2024',
      tools: 'Figma, Prototyping',
      status: 'Live and Evolving',
    },
    next: { id: 'dateryx', title: 'Dateryx' },
    sections: [
      {
        type: 'overview',
        body: 'InvoTools is a B2B SaaS platform that enables enterprise retail brands to create, manage, and distribute digital invoices,while tracking how customers interact with them. It gives operations teams a single place to handle invoice configuration, distribution, reporting, and brand customisation across multiple regions and channels.\n\nThe platform serves medium to large enterprise retailers handling high volumes of customer invoices. Current implementations support clients including Breitling and Games Workshop,brands where invoice presentation, brand consistency, and customer engagement visibility are business-critical requirements.\n\nThis was a greenfield project. There was no existing product to iterate on, no legacy interface to audit, and no established patterns to follow. The design had to be built entirely from first principles,which made every structural decision both consequential and permanent.',
        snapshot: [
          'Greenfield SaaS,designed from zero',
          'Multiple user roles within a single platform',
          'Enterprise clients: Breitling, Games Workshop',
          'Modules: Dashboard, Invoice Management, Reports, Configuration',
        ],
      },
      {
        type: 'single',
        label: 'The Problem',
        title: 'The Gap Between Invoice Creation and Customer Understanding',
        body: 'Before InvoTools, enterprise retail clients lacked a centralised way to manage their digital invoice operations. Invoice creation, distribution, branding, and customer engagement tracking were handled across disconnected systems,or, in many cases, handled manually.\n\nTeams could not easily customise invoice branding to match regional requirements. There was no visibility into whether invoices had been delivered, opened, or acted upon. Reporting required manual data aggregation, and configuration changes required technical involvement rather than being manageable by operations teams directly.\n\nWhat made this project genuinely complex was not the feature set. It was the audience. InvoTools needed to serve multiple user roles simultaneously,operations managers overseeing the platform, finance teams reviewing invoice data, and client stakeholders requiring access to performance reports. Each role had different priorities, different levels of technical fluency, and different definitions of what "useful" looked like.',
      },
      {
        type: 'process',
        label: 'Process',
        title:
          'No Existing Product. No Existing Structure. Start With Workflows.',
        body: 'With no existing product to audit or iterate on, the process had to begin with a thorough understanding of the business workflows the platform would support. The discovery phase involved structured stakeholder discussions to map the end-to-end invoice lifecycle,from initial creation through configuration, distribution, customer interaction, and reporting.\n\nAlongside stakeholder discussions, I reviewed comparable invoice management and B2B SaaS platforms to understand industry conventions. Two findings shaped the design direction that followed:',
        items: [
          {
            label: 'Finding 01',
            text: 'The most significant friction in existing workflows was not any individual task,it was the absence of a clear structure that grouped related tasks together. Users had to navigate across systems to complete what should have been a single workflow.',
          },
          {
            label: 'Finding 02',
            text: 'Configuration and reporting were consistently underserved in competing platforms,either too technical for non-developer users or too simplified to be genuinely useful for enterprise operations teams.',
          },
        ],
        closing:
          'These findings directly informed the modular architecture of InvoTools.',
      },
      {
        type: 'decisions',
        title: 'Three Decisions That Shaped the Platform',
        items: [
          {
            number: '01',
            title:
              'A Modular Architecture Built Around Workflows, Not Features',
            body: 'The first and most consequential structural decision was how to organise the platform at the highest level. An early instinct was to group functionality by data type,all invoice-related screens together, all reporting screens together, all settings together. This approach is logical from a development perspective but creates navigational friction for users who think in terms of tasks rather than data categories.\n\nThe alternative was to organise the platform around workflows. Four core modules: Dashboard, Invoice Management, Reports, and Configuration. Each module represents a complete workflow rather than a data type. Users can enter a module, complete their task, and leave,without needing to navigate across sections.',
            placeholder: null,
          },
          {
            number: '02',
            title: 'Role-Based Information Hierarchy Without Role-Based Logins',
            body: 'Designing for multiple user roles within a single interface presented a specific challenge: how do you surface the right information for each role without creating a fragmented experience or requiring users to switch between role-specific views?\n\nThe solution was a role-based information hierarchy rather than role-based navigation. The platform uses a single navigation structure accessible to all users, but the information density and default views within each module are calibrated to the most common use case for that module. The hierarchy is consistent. The emphasis adapts.',
            placeholder: null,
          },
          {
            number: '03',
            title: 'Making Configuration Accessible Without Oversimplifying It',
            body: 'Configuration workflows in enterprise SaaS are consistently one of the hardest areas to design well. The requirements are genuinely complex,invoice branding, regional settings, distribution rules, user permissions,but the users completing these tasks are not always technically fluent.\n\nThe approach was to separate configuration into clearly labelled categories with plain-language labels and contextual guidance at each step. Complex settings were broken into discrete steps rather than presented as a single dense form. The goal was a configuration experience that an operations manager could complete confidently without requiring technical documentation.',
            placeholder: null,
          },
        ],
      },
      {
        type: 'diagrams',
        top: '/userpersona-invotools.png',
        topAlt: 'User Persona - InvoTools',
        single: '/invoice-management-ecosystem-diagram-invotools.png',
        singleAlt: 'Invoice Management Ecosystem Diagram',
        pair: [],
        bottom: '/user-flow-diagram-manager-invotools.png',
        bottomAlt: 'User Flow Diagram - Manager',
      },
      {
        type: 'accent',
        label: 'The Hardest Part',
        title: 'Balancing Business Requirements With Usability at Every Step',
        body: 'The most persistent challenge throughout InvoTools was not any single design decision,it was the ongoing tension between the depth of business requirements and the need to keep the interface clean and navigable.\n\nEnterprise invoice management involves genuinely complex workflows. The business requirements were detailed, legitimate, and non-negotiable. Every configuration option existed for a reason. Every report field had a specific operational purpose.\n\nThe resolution was a consistent application of layered complexity: primary views show the most frequently needed information and actions, with advanced options and detailed data available through secondary panels, expandable sections, and dedicated configuration screens. This pattern,establish the primary workflow cleanly, then layer in depth,became the design principle that unified the platform.',
        placeholder: null,
      },
      {
        type: 'outcome',
        label: 'Outcome',
        title: 'Enterprise Validation',
        body: 'InvoTools is live and actively used by enterprise retail clients including Breitling and Games Workshop. Stakeholder feedback from enterprise client teams highlighted specific improvements the platform delivered.',
        items: [
          'Operations teams can manage invoice creation, branding, and distribution without technical team involvement for routine tasks',
          'Customer engagement visibility,delivery confirmation, open tracking, interaction data,is now accessible directly within the platform',
          'Configuration changes that previously required developer support can now be completed by operations managers independently',
          'The modular structure received consistent positive feedback for making it easy to navigate to the relevant workflow without unnecessary steps',
        ],
      },
      {
        type: 'slider',
        slides: [
          '/invotools-screen1.png',
          '/invotools-screen2.png',
          '/invotools-screen3.png',
          '/invotools-screen4.png',
          '/invotools-screen5.png',
          '/invotools-screen6.png',
          '/invotools-screen7.png',
        ],
      },
      {
        type: 'single',
        label: 'Reflection',
        title: 'What I Would Do Differently',
        body: 'The most significant change I would make is involving end users,the operations managers and finance teams who use the platform daily,earlier in the process.\n\nInvoTools was designed through stakeholder discussions and business requirement reviews. That input was accurate and well-informed, but it represents the organisational view of what the platform needs to do rather than the lived experience of the people completing tasks within it. Stakeholder requirements tell you what the platform must support. User research tells you how people actually think about their work,the mental models, the shortcuts, the moments of confusion that requirements documents never capture.\n\nThe second change would be prototyping complex configuration workflows interactively from the beginning. Many of the decisions around configuration depth and progressive disclosure became clearer once stakeholders could interact with a working prototype rather than review static screens.',
      },
    ],
  },

  {
    id: 'dateryx',
    title: 'Dateryx',
    subtitle: 'What I Learned Building a Data Product from Zero',
    hookTheme: 'light',
    hook: 'Most people who work with spreadsheets are not analysts. They are operations managers, business owners, and marketers who just need to know what the numbers mean,without spending hours building charts to find out.',
    meta: {
      type: 'Founder Project,Spreadsheet Analytics SaaS',
      role: 'Founder, Product Designer, Builder',
      timeline: 'March 2026 to Present',
      tools: 'Figma, AI-Assisted Development',
      status: 'Live at dateryx.com',
    },
    next: { id: 'voice-commerce', title: 'Voice Commerce' },
    sections: [
      {
        type: 'overview',
        body: 'Dateryx is a privacy-first spreadsheet analytics platform that transforms Excel and CSV files into dashboards, KPIs, charts, and actionable insights,instantly, without manual setup.\n\nUnlike the other projects in this portfolio, Dateryx was not a client brief or an internal initiative. It was a question I wanted to answer: could a non-technical user upload a spreadsheet and immediately get something genuinely useful, without touching a single setting?\n\nI designed it, built it, and shipped it,while working full-time as a product designer. Everything from the product concept and UX architecture to the analytics engine and interface was owned end to end. Dateryx is currently live and in early-stage beta at dateryx.com.',
        snapshot: [
          'Solo founder and designer',
          'Live product,dateryx.com',
          'Rule-based analytics engine with AI-assisted insight generation in development',
          'Built end to end alongside full-time employment',
        ],
      },
      {
        type: 'single',
        label: 'The Problem',
        title: 'The Gap Between Spreadsheets and Understanding',
        body: "Business intelligence tools like Tableau, Power BI, and Looker are powerful. They are also time-consuming to set up, require technical knowledge to use well, and are built for dedicated analysts,not for the operations manager who needs a quick read on last month's numbers before a meeting.\n\nAt the other end of the spectrum, spreadsheets are universal. Almost every business runs on Excel or CSV files in some form. But a spreadsheet is a container for data, not a tool for understanding it. Turning a spreadsheet into something meaningful requires manual work,selecting charts, building pivot tables, identifying metrics, formatting outputs.\n\nUpload a file. Get a dashboard. Understand your data. No configuration. No technical knowledge required. No time spent building what the tool should build for you.",
      },
      {
        type: 'single',
        label: 'The User',
        title: 'Designing for the Spreadsheet-Fluent, Analytics-Resistant User',
        body: 'The target user is not an analyst. Analysts have tools built specifically for them.\n\nThe Dateryx user is someone who works with spreadsheets regularly but has no dedicated analytics expertise and no appetite for learning a complex BI tool just to answer a straightforward business question. They are operations managers reviewing logistics data, small business owners tracking monthly revenue, marketers analysing campaign performance, and team leads monitoring project metrics.\n\nWhat they share is a specific frustration: they know the answer is somewhere in the spreadsheet, but extracting it takes longer than it should. This user profile shaped every product and design decision that followed,particularly around what to automate, what to expose, and what to hide entirely.',
      },
      {
        type: 'phases',
        label: 'Process',
        title: 'From Curiosity to Shipped Product',
        items: [
          {
            label: 'Phase 1',
            title: 'Concept Validation',
            body: 'Before designing any interface, the focus was on understanding whether the core mechanic was technically feasible and whether the output would be genuinely useful. Early experiments with dataset detection, automatic metric identification, and chart selection informed what the analytics engine would need to do before the interface design began.',
          },
          {
            label: 'Phase 2',
            title: 'Defining the Core Flow',
            body: 'The central user journey was deliberately narrow: upload a file, receive a dashboard. Every design decision in the early stages was evaluated against one question,does this make that journey faster or slower? The core flow: upload file → detect dataset structure → clean data automatically → identify key metrics → generate visualisations → present dashboard.',
          },
          {
            label: 'Phase 3',
            title: 'Scope Decisions',
            body: 'With the core flow defined, the harder question was what not to build for v1. A deliberate focus on the minimum viable experience forced difficult decisions about which features to defer,and which to build immediately.',
          },
        ],
      },
      {
        type: 'table',
        label: 'The Cuts',
        title: 'The Features I Planned and Chose Not to Build',
        intro:
          'This is the section most case studies omit. It is also the section that most honestly reflects product thinking. Every cut feature was legitimate. Every one of them added real value. And every one of them would have delayed the single question that mattered most: does the core experience actually work well enough to be useful?',
        rows: [
          {
            feature: 'User accounts and authentication',
            decision: 'Cut from v1',
          },
          { feature: 'Dashboard saving and export', decision: 'Cut from v1' },
          {
            feature: 'Cloud storage and file history',
            decision: 'Cut from v1',
          },
          { feature: 'Live data connections', decision: 'Cut from v1' },
          { feature: 'Collaborative reporting', decision: 'Cut from v1' },
          {
            feature: 'Instant spreadsheet-to-dashboard conversion',
            decision: 'Shipped',
          },
        ],
        closing:
          'Shipping a focused v1 rather than a feature-complete product was a deliberate decision. The goal was not to build everything. It was to prove that the most important thing worked before building anything else around it.',
      },
      {
        type: 'problems',
        label: 'Key Challenges',
        title: 'Two Problems That Proved Harder Than Expected',
        items: [
          {
            number: '01',
            title: 'Designing for Datasets You Cannot Predict',
            body: 'In a client project, the designer knows the data. The structure is defined, the edge cases are known, and the interface can be designed around a predictable information model.\n\nDateryx has no such luxury. Users upload any spreadsheet,clean or messy, structured or inconsistent, simple or deeply nested. The design response was to build the interface around the output rather than the input. Structure detection and automatic data cleaning happen invisibly, before the user sees anything.\n\nThe challenge: how do you design an experience where the content of every dashboard is different, but the interface always feels consistent and trustworthy? The solution was a fixed visual framework,consistent card structure, typography hierarchy, and colour system,applied to dynamically generated content.',
            placeholder: null,
          },
          {
            number: '02',
            title: 'The Difference Between Charts and Insights',
            body: 'Generating charts from a dataset is a solved problem. Generating insights,statements that explain what the data means, why a number matters, and what a user should pay attention to,is significantly harder.\n\nEarly versions of the insight layer produced outputs that were technically accurate but contextually empty. Statements like "Category A has the highest value" describe the data without helping the user understand it.\n\nThe gap between a chart and an insight is the gap between showing data and explaining what it means. The current approach uses a rule-based insight engine that identifies patterns, anomalies, and significant variances. More advanced AI-assisted insight generation is in active development.',
            placeholder: null,
          },
        ],
      },
      {
        type: 'diagrams',
        single: '/analytics-architecture-dateryx.png',
        singleAlt: 'Dateryx analytics architecture diagram',
      },
      {
        type: 'accent',
        label: 'What Building Taught Me',
        title: 'What Client Work Does Not Teach You',
        body: 'Designing for clients develops precision,the ability to translate a brief into a solution that meets defined requirements. That skill is essential and transferable.\n\nBuilding your own product develops something different: the ability to make decisions without a brief, without a stakeholder to validate against, and without the structure that a client engagement provides. Every decision in Dateryx,what to build, what to cut, what to ship, what to defer,was made without external validation.\n\nThe specific lesson that has changed how I approach all design work: the hardest design decisions are not about what to include. They are about what to leave out.',
        highlight:
          'The hardest design decisions are not about what to include. They are about what to leave out.',
        placeholder: null,
      },
      {
        type: 'single',
        label: 'Current State',
        title: 'A Live Product With a Clear Next Chapter',
        body: 'Dateryx is live at dateryx.com and in early-stage beta. The current version delivers the core experience: upload a spreadsheet, receive a structured dashboard with KPIs, charts, and contextual insights automatically generated.\n\nThe immediate development priorities are AI-Assisted Insight Generation,moving beyond rule-based pattern detection to contextually intelligent insights that understand the meaning of data across different dataset types, informed directly by my Masters research in AI/ML. Dashboard Saving and User Accounts follows as the first expansion beyond the v1 core, enabling users to return to previous analyses and build on them over time.\n\nThe AI layer is not a roadmap item added for credibility. It is the natural evolution of the core problem Dateryx is trying to solve,and it is the area where my background in both product design and machine learning creates a genuine advantage.',
      },
      {
        type: 'slider',
        slides: [
          '/dateryx-screen1.png',
          '/dateryx-screen2.png',
          '/dateryx-screen3.png',
        ],
      },
      {
        type: 'single',
        label: 'Reflection',
        title: 'What I Would Do Differently',
        body: 'The most significant change I would make is earlier and more structured user testing with the target audience.\n\nThe early product decisions,particularly around insight presentation and dashboard layout,were based on my own assessment of what "useful" looked like for a non-technical user. That assessment was informed but not validated. Getting five operations managers or small business owners to upload real files and interact with early prototypes would have surfaced assumptions I did not know I was making.\n\nThe second change is documentation. Building solo means that design decisions are made quickly and often without the external pressure to articulate them clearly. Many of the decisions in Dateryx,particularly around the visual framework for dynamic content and the insight generation logic,were made intuitively and recorded insufficiently. That discipline is something this project has taught me to apply more rigorously.',
      },
    ],
  },

  {
    id: 'voice-commerce',
    title: 'Voice Commerce',
    subtitle: 'Designing Conversations for an Emerging Interaction Paradigm',
    hookTheme: 'dark',
    hook: "Every interface we design assumes a screen. A cursor. A tap. Voice commerce begins by removing all of that,and asking what's left.",
    meta: {
      type: 'R&D / Innovation Concept,Conversational UX',
      role: 'Lead UX Designer',
      timeline: '2024',
      tools: 'Figma, Conversation Flow Mapping, Prototyping',
      status: 'Concept,Not Shipped',
    },
    next: { id: 'ayataone', title: 'AyataOne' },
    sections: [
      {
        type: 'overview',
        body: "This project was an internal innovation initiative at AyataCommerce exploring whether common eCommerce tasks,product discovery, search, cart management, order tracking,could be completed more naturally through conversation than through traditional visual interfaces.\n\nIt was not a client brief. There was no shipping deadline and no production requirement. The objective was to understand the future potential of conversational commerce, identify where voice genuinely reduces friction in the shopping experience, and develop an interaction model that could inform the company's approach to emerging interface paradigms.\n\nThis case study is not about a shipped product. It is about what the process of designing for voice revealed about interaction design itself,and about the assumptions that screen-based thinking makes invisible.",
        snapshot: [
          'Internal R&D,AyataCommerce innovation initiative',
          'Complete shopping journey: discovery, search, cart, checkout, order tracking',
          'Deliverables: conversation flow maps, user journeys, companion interface screens, interaction specs',
          'Primary audience: general online shoppers, with accessibility and hands-free use as secondary considerations',
        ],
      },
      {
        type: 'single',
        label: 'Why Voice Commerce',
        title: 'The Friction That Screens Create Without Knowing It',
        body: 'Visual interfaces are so deeply familiar that the effort they require has become invisible. Finding a product involves scanning, filtering, comparing, scrolling. Tracking an order involves navigating to the right page, locating the right section, reading through the right table. These tasks feel natural because we have performed them thousands of times.\n\nVoice removes that familiarity entirely,and in doing so, makes the friction visible again.\n\nThe strategic premise of this project was that a meaningful portion of shopping interactions are fundamentally conversational in nature. "Do you have this in a different colour?" "Where is my order?" "Reorder what I bought last month." These are not search queries. They are questions,and questions are better answered through conversation than through navigation.',
      },
      {
        type: 'single',
        label: 'Relearning Design',
        title: 'Designing for Intent, Not Screens',
        body: 'The first and most disorienting aspect of this project was the absence of a canvas.\n\nIn visual interface design, the screen is both the constraint and the tool. You place elements, establish hierarchy, define proximity, and guide attention through composition. The design is spatial. Users can scan, compare, and return.\n\nVoice interfaces have none of that. There is no layout to compose, no hierarchy to establish visually, no ability to show multiple options simultaneously. The interaction is linear and temporal,it exists in sequence and then disappears.\n\nThis forced a fundamental shift in how the design process began. Instead of starting with screens, the process started with intents,the specific goals a user might want to accomplish through voice interaction. The core intent map covered: product discovery and search, product recommendations, cart management, order placement, order tracking and status, and post-purchase interactions.',
        placeholder: null,
      },
      {
        type: 'lessons',
        label: 'Competitor Research',
        title: 'Three Lessons From Existing Voice Interfaces',
        intro:
          'Before designing any flows, I reviewed voice commerce experiences from Alexa, Google Assistant, and Siri,focusing specifically on shopping-related interactions and where they broke down. Three patterns emerged that directly shaped the design decisions that followed.',
        items: [
          {
            number: '01',
            title: 'Users lose patience faster than you expect.',
            body: 'Voice interactions that required more than two or three exchanges before completing a task generated visible frustration. The tolerance for conversational back-and-forth is significantly lower than the tolerance for navigational steps in a visual interface. Brevity is not a nice-to-have in voice design. It is the primary usability requirement.',
          },
          {
            number: '02',
            title: 'Choice overload is worse in audio than on screen.',
            body: 'Presenting five options through a screen is manageable,users can scan and compare. Presenting five options through voice requires the user to hold all five in working memory while evaluating them. Three options is the practical maximum for voice-presented choices. Two is often better.',
          },
          {
            number: '03',
            title: 'Recovery flows are more important than happy paths.',
            body: 'In visual interfaces, error states are important but rarely the primary design focus. In voice interfaces, the recovery experience,what happens when the system misunderstands, when the user changes direction, when the intent is ambiguous,determines whether the interaction succeeds or fails. A voice interface that handles errors gracefully feels intelligent. One that does not feels broken.',
          },
        ],
      },
      {
        type: 'decisions',
        title: 'Three Decisions That Defined the Interaction Model',
        hidePlaceholders: true,
        items: [
          {
            number: '01',
            title: 'Short, Guided, and Task-Focused Over Conversational',
            body: 'The initial instinct in designing conversation flows was to make interactions feel natural,which, in practice, translated to making them feel conversational. Extended exchanges, follow-up questions, contextual acknowledgements. Early flow drafts reflected this instinct. They were detailed, contextually rich, and consistently too long.\n\nThe revision process was essentially an exercise in reduction. Every exchange that did not move the user closer to completing their intent was a candidate for removal. The guiding principle: a voice interaction should feel like the most efficient version of the conversation, not the most natural one.',
            placeholder: null,
          },
          {
            number: '02',
            title: 'Recovery Flows as First-Class Design',
            body: 'For each core intent, three failure modes were mapped and designed: misunderstanding (the system did not correctly identify intent), ambiguity (the intent was understood but lacked sufficient information), and change of direction (the user wanted to modify or abandon mid-flow).\n\nEach failure mode received a dedicated recovery pattern. Misunderstandings were handled by offering two or three alternative interpretations rather than a generic error message. Ambiguity was resolved through targeted clarifying questions,one question at a time, never multiple simultaneously.',
            placeholder:
              'Recovery flow,ambiguity pattern: input → detection → single clarifying question → resolution',
          },
          {
            number: '03',
            title: 'The Hybrid Model: Voice as a Complementary Layer',
            body: 'The most significant strategic decision was the rejection of voice as a complete interface replacement. Certain tasks,checking delivery status, reordering a known item, adding a product to a cart,are genuinely well-suited to voice. Other tasks,comparing products, reviewing order details, browsing an unfamiliar category,require visual support to be completed confidently.\n\nThe resolution was a hybrid model: voice as a primary interaction layer for task completion, with a companion visual interface that activates for information-dense moments. This is not a compromise. It is an acknowledgement of what each modality does well.',
            placeholder: null,
          },
        ],
      },
      {
        type: 'diagrams',
        top: '/persona-conversational%20ux.png',
        topAlt: 'Conversational UX persona',
        single: '/design-map-conversational%20ux.png',
        singleAlt: 'Conversational UX design map',
        bottom: '/userflow-conversational%20ux.png',
        bottomAlt: 'Conversational UX user flow',
      },
      {
        type: 'pullquote',
        quote: 'Information disappears the moment it is spoken.',
        context:
          'In visual design, users can return to information. They can scan, re-read, compare, and reconsider. The interface holds its state.\n\nVoice interfaces offer none of this. Every response the system delivers exists briefly and then is gone. Users cannot scan a voice response. They cannot return to an earlier option without explicitly asking for it.\n\nThis is the fundamental design constraint of voice,and it changes everything. It changes how much information can be delivered in a single response. It changes how choices must be structured. It changes the importance of confirmation before consequential actions. Designing within this constraint produced something that two-dimensional interface design rarely demands: an obsessive focus on cognitive load at the level of individual sentences.',
      },
      {
        type: 'problems',
        label: 'Unsolved Problems',
        title: 'What Voice Commerce Cannot Yet Solve',
        items: [
          {
            number: '01',
            title: 'Product Discovery for Unknown Items',
            body: 'Voice is comfortable for known items. "Reorder my usual coffee" or "add the black hoodie to my cart" are interactions voice handles well. The user knows what they want and can specify it.\n\nProduct discovery,browsing an unfamiliar category, exploring options without a specific item in mind,remains fundamentally better served by visual interfaces. The ability to scan a product grid, filter by attributes, and compare items visually is not easily replicated through sequential audio presentation.',
            placeholder: null,
          },
          {
            number: '02',
            title: 'Purchase Confidence for High-Consideration Items',
            body: 'Users making confident purchase decisions for significant items rely heavily on visual confirmation,product images, specification details, reviews. The trust signals that visual commerce has developed over decades are difficult to translate to audio.\n\nVoice commerce is likely to succeed at the low-consideration, high-frequency end of the shopping spectrum,routine reorders, quick additions, status checks. High-consideration purchases will continue to require visual interfaces for the foreseeable future.\n\nThese are not failures of this design. They are honest boundaries of the medium,and understanding them is as valuable as the interaction model itself.',
            placeholder: null,
          },
        ],
      },
      {
        type: 'outcome',
        label: 'Internal Reception',
        title: 'Stakeholder Response and Influence',
        body: 'The concept was presented internally as an innovation discussion piece and generated substantive conversations around two areas the company had not previously explored in depth.',
        items: [
          'Accessibility as a commerce differentiator,the hands-free and eyes-free use cases resonated strongly with stakeholders thinking about inclusive commerce experiences',
          'The hybrid model prompted productive discussion about how emerging AI assistant capabilities might be integrated into existing eCommerce platforms',
          'The interaction specifications produced during this project served as reference material for subsequent conversations about conversational features',
          "While the concept was not implemented as a production feature, the thinking it produced continued to inform the company's approach to emerging interaction paradigms",
        ],
      },
      {
        type: 'slider',
        slides: [
          '/conversational-ux-screen1.png',
          '/conversational-ux-screen2.png',
          '/conversational-ux-screen3.png',
          '/conversational-ux-screen4.png',
          '/conversational-ux-screen5.png',
          '/conversational-ux-screen6.png',
        ],
      },
      {
        type: 'single',
        label: 'Reflection',
        title: 'What This Project Changed About How I Design',
        body: 'Every project in this portfolio involved designing interfaces,compositions of visual elements that guide users through tasks and information. This project removed the interface entirely, and in doing so revealed how much of what designers do is spatial and compositional rather than fundamentally about communication.\n\nDesigning for voice forced a different kind of attention: to the weight of individual words, to the cognitive cost of sequential information, to the difference between what a user is told and what a user can actually remember and act on.\n\nThe specific discipline this project developed,asking, at every point, what is the minimum the user needs right now, and nothing more,is one I have carried into every subsequent project. It is also a discipline that maps directly to designing for AI interfaces, where the same tension between information richness and cognitive clarity defines whether an experience feels intelligent or overwhelming.',
      },
    ],
  },
];
