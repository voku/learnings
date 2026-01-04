import { Category, Lesson } from './types';

export const AUTHOR_NAME = "Lars Moelleken";
export const AUTHOR_ROLES = [
  "Assistant for business IT",
  "IT specialist for system integration",
  "IT specialist for application development"
];

export const LESSONS: Lesson[] = [
  // --- System Integration ---
  {
    id: 'sys-1',
    category: Category.SYS_ADMIN,
    title: "You only learn as much as you want to learn",
    content: "In contrast to school, you have to teach and work on many things yourself during training. Once you realize you only learn as much as you want, you become happy to sit down and learn via courses, meetups, or conferences. If you do something, do it right.",
    quote: {
      text: "An investment in knowledge still pays the best interest.",
      author: "Benjamin Franklin"
    },
    tags: ['Learning', 'Self-improvement']
  },
  {
    id: 'sys-2',
    category: Category.SYS_ADMIN,
    title: "No panic!",
    content: "Keep calm and think first – then act. Hasty actionism usually damages things. Obtain information from log files, hardware status, and system status before trying to fix errors.",
    tags: ['Mindset', 'Troubleshooting']
  },
  {
    id: 'sys-3',
    category: Category.SYS_ADMIN,
    title: "Unix & command line <3",
    content: "Leave your comfort zone and try new operating systems like Linux (or WSL). Becoming familiar with the command line increases productivity rapidly.",
    codeSnippets: [
      {
        language: "bash",
        code: "find / grep / lsof / strace",
        description: "Commands to take a closer look at"
      }
    ],
    tags: ['Linux', 'Terminal', 'Productivity']
  },
  {
    id: 'sys-4',
    category: Category.SYS_ADMIN,
    title: "Read the official documentation",
    content: "StackOverflow gives answers, but documentation explains the 'why' and 'how'. Reading specs helps you understand the problem deeply and solve similar future problems.",
    tags: ['Documentation', 'Research']
  },
  {
    id: 'sys-5',
    category: Category.SYS_ADMIN,
    title: "Always make a backup",
    content: "Some things you learn the hard way. Never use sudo while drunken.",
    quote: {
      text: "Man has three ways of acting wisely. First, on meditation; that is the noblest. Secondly, on imitation; that is the easiest. Thirdly, on experience; that is the bitterest.",
      author: "Confucius"
    },
    codeSnippets: [{
      language: 'bash',
      code: 'apt-get install safe-rm',
      description: 'A tool to prevent accidental deletion of important files'
    }],
    tags: ['Safety', 'Backup']
  },
  {
    id: 'sys-6',
    category: Category.SYS_ADMIN,
    title: "Be honest",
    content: "Be honest with customers, employees, and yourself. If a product fails, offer solutions, not excuses. Don't play the blame game.",
    tags: ['Soft Skills', 'Ethics']
  },
  {
    id: 'sys-7',
    category: Category.SYS_ADMIN,
    title: "Ask questions",
    content: "Don't talk to customers about things you don't understand. Ask a colleague first.",
    tags: ['Communication', 'Learning']
  },
  {
    id: 'sys-8',
    category: Category.SYS_ADMIN,
    title: "Critical Thinking",
    content: "Question your work. Is this a good, safe, future-oriented solution? Should we use Nagios or Icinga? Challenge best practices and discuss with others.",
    tags: ['Critical Thinking', 'Decision Making']
  },
  {
    id: 'sys-9',
    category: Category.SYS_ADMIN,
    title: "Use Google correctly",
    content: "Mastering search operators helps you find specific errors, files, or specific URLs quickly.",
    codeSnippets: [
      {
        language: "text",
        code: 'intitle:index.of mp3 "Männer Sind Schweine" -html -htm -php',
        description: "Advanced search example"
      },
      {
        language: "text",
        code: 'filetype:txt inurl:suckup.de',
        description: "Finding specific file types on a domain"
      }
    ],
    tags: ['Research', 'Google Hacks']
  },

  // --- Application Development ---
  {
    id: 'dev-1',
    category: Category.APP_DEV,
    title: "You never stop learning",
    content: "Web programming is vast. Concepts recur. You can combine many APIs. It's exciting because you never stop learning.",
    tags: ['Growth', 'Web']
  },
  {
    id: 'dev-2',
    category: Category.APP_DEV,
    title: "Write code every day",
    content: "Set yourself a limit, but try to code daily. If you have downtime at work, code. If you are bored at home, code. But if you are on vacation, stay on vacation!",
    links: [{ text: "John Resig: Write Code Every Day", url: "http://ejohn.org/blog/write-code-every-day/" }],
    tags: ['Discipline', 'Practice']
  },
  {
    id: 'dev-3',
    category: Category.APP_DEV,
    title: "Think in modules and packages",
    content: "Don't repeat logic. Design applications in interchangeable parts. Minimize coupling. Use package managers like npm or composer.",
    tags: ['Architecture', 'Modularization']
  },
  {
    id: 'dev-4',
    category: Category.APP_DEV,
    title: "Open-Source Software",
    content: "Publishing OSS improves code quality because you are conscious of public view. It adds tests and documentation.",
    tags: ['OSS', 'Community']
  },
  {
    id: 'dev-5',
    category: Category.APP_DEV,
    title: "Git & Good",
    content: "Version control is mandatory, even for private projects. It allows tracing changes, undoing mistakes, code reviews, and simultaneous collaboration.",
    tags: ['Git', 'Version Control']
  },
  {
    id: 'dev-6',
    category: Category.APP_DEV,
    title: "Learn from the best on GitHub",
    content: "Read source code of popular projects. See how they structure code, write commit messages, and test.",
    tags: ['Learning', 'GitHub']
  },
  {
    id: 'dev-7',
    category: Category.APP_DEV,
    title: "try { tests() }",
    content: "Test cases you haven't considered. Add a test whenever an error occurs so it doesn't regress.",
    links: [{ text: "Big List of Naughty Strings", url: "https://github.com/minimaxir/big-list-of-naughty-strings" }],
    tags: ['Testing', 'QA']
  },
  {
    id: 'dev-8',
    category: Category.APP_DEV,
    title: "Automate your tests",
    content: "Tests only help if executed. Automate them. Avoid too many parameters in functions to keep testing manageable.",
    tags: ['CI/CD', 'Automation']
  },
  {
    id: 'dev-9',
    category: Category.APP_DEV,
    title: "Deployment is important",
    content: "Use symlink switching for atomic deployments and easy rollbacks. Avoid complex migration rollbacks if possible.",
    tags: ['DevOps', 'Deployment']
  },
  {
    id: 'dev-10',
    category: Category.APP_DEV,
    title: "Concepts > Implementation",
    content: "Understanding design patterns (OOP, ORM, MVC, DDD) is more transferable than knowing a specific framework syntax.",
    quote: { text: "If you only have a hammer as a tool, you see a nail in every problem.", author: "Law of the Instrument" },
    tags: ['Patterns', 'Architecture']
  },
  {
    id: 'dev-11',
    category: Category.APP_DEV,
    title: "Understand the Customer",
    content: "Ask what problem is actually being solved. Sometimes the customer wants something different than what they asked for.",
    tags: ['Product', 'Soft Skills']
  },
  {
    id: 'dev-12',
    category: Category.APP_DEV,
    title: "Spread code across multiple files",
    content: "One class per file. One file for specific CSS. A predefined directory structure helps navigation.",
    tags: ['Organization', 'Clean Code']
  },
  {
    id: 'dev-13',
    category: Category.APP_DEV,
    title: "Readability comes first",
    content: "You or your colleagues will have to maintain this. Optimize for reading, not writing.",
    tags: ['Clean Code', 'Maintainability']
  },
  {
    id: 'dev-14',
    category: Category.APP_DEV,
    title: "Good naming",
    content: "Avoid abbreviations. Describe what the function *does*, not *how* it does it.",
    codeSnippets: [
      {
        language: "php",
        code: "sendMailViaSwiftmailer() // Incorrect\nmail->send() // Correct",
        description: "Method naming",
        isBadExample: false
      },
      {
        language: "php",
        code: "$array2use // Incorrect\n$pages // Correct",
        description: "Variable naming",
        isBadExample: false
      }
    ],
    tags: ['Naming', 'Best Practices']
  },
  {
    id: 'dev-15',
    category: Category.APP_DEV,
    title: "Save on comments",
    content: "Good comments explain 'why', not 'what'. Use expressive code instead of comments where possible.",
    codeSnippets: [
      {
        language: "php",
        code: "// Check if the user is already logged in\nif ( isset ( $_SESSION['user_loggedin']) && $_SESSION['user_loggedin'] > 1 ) { ... }",
        description: "Bad Code",
        isBadExample: true
      },
      {
        language: "php",
        code: "if ( $user->isLoggedin === true ) { ... }",
        description: "Better Code",
        isBadExample: false
      },
      {
        language: "php",
        code: "define ( 'EMAIL_REGEX_SIMPLE' , '/^(.*<?)(.*)@(.*)(>?)$/' );\nif (! preg_match ( EMAIL_REGEX_SIMPLE , $email ) { ... }",
        description: "Using constants for readability",
        isBadExample: false
      }
    ],
    tags: ['Comments', 'Refactoring']
  },
  {
    id: 'dev-16',
    category: Category.APP_DEV,
    title: "Consistency > Preference",
    content: "Follow the project's existing style. If you introduce a new pattern, refactor the whole project to match.",
    tags: ['Consistency', 'Teamwork']
  },
  {
    id: 'dev-17',
    category: Category.APP_DEV,
    title: "Uniform code style",
    content: "Use automated tools like PHP-CS-Fixer. If code looks tidy, people are less likely to write bad code.",
    tags: ['Linting', 'Formatting']
  },
  {
    id: 'dev-18',
    category: Category.APP_DEV,
    title: "Functional & OO Principles",
    content: "Use Pure Functions. Avoid side effects. Use immutable objects.",
    tags: ['Functional Programming', 'OOP']
  },
  {
    id: 'dev-19',
    category: Category.APP_DEV,
    title: "No global variables",
    content: "Globals make testing and refactoring difficult due to side effects.",
    tags: ['Best Practices', 'Architecture']
  },
  {
    id: 'dev-20',
    category: Category.APP_DEV,
    title: "Learn your tools",
    content: "Don't dig a hole with a spoon. Use an IDE (JetBrains, VS Code). Use plugins. Learn shortcuts.",
    tags: ['Productivity', 'IDE']
  },
  {
    id: 'dev-21',
    category: Category.APP_DEV,
    title: "Performance?",
    content: "Don't prematurely optimize. Modern frameworks are fast. Profile before optimizing.",
    tags: ['Performance', 'Optimization']
  },
  {
    id: 'dev-22',
    category: Category.APP_DEV,
    title: "Exceptions === Exceptions",
    content: "Don't use exceptions for flow control. Handle regular cases with regular code.",
    tags: ['Error Handling']
  },
  {
    id: 'dev-23',
    category: Category.APP_DEV,
    title: "Finish your work",
    content: "Clean up after yourself. If you open a file handle, close it.",
    tags: ['Discipline', 'Cleanup']
  },
  {
    id: 'dev-24',
    category: Category.APP_DEV,
    title: "Source code should be searchable",
    content: "Avoid magic string concatenation that makes Ctrl+F impossible. Avoid Sass nesting that hides class names.",
    codeSnippets: [
      {
        language: "php",
        code: "extract(array('bar' => 'bar')); // Bad, creates variable magic",
        description: "Avoid magic variables",
        isBadExample: true
      },
      {
        language: "scss",
        code: ".teaser { & __link { ... } } // Bad, cannot search for .teaser__link",
        description: "Avoid deep CSS nesting",
        isBadExample: true
      }
    ],
    tags: ['Searchability', 'Maintenance']
  },
  {
    id: 'dev-25',
    category: Category.APP_DEV,
    title: "Program for your use case!",
    content: "Don't over-engineer. Customers change minds. Only write code required for the current use case.",
    tags: ['YAGNI', 'Pragmatism']
  },
  {
    id: 'dev-26',
    category: Category.APP_DEV,
    title: "KISS - Keep it simple, stupid",
    content: "Code value comes from others understanding it. If a simple solution works, use it.",
    tags: ['KISS', 'Simplicity']
  },
  {
    id: 'dev-27',
    category: Category.APP_DEV,
    title: "DRY - Don't Repeat Yourself",
    content: "Avoid redundancy. Make solutions easy to find so others don't re-invent them.",
    tags: ['DRY', 'Refactoring']
  },

  // --- General ---
  {
    id: 'gen-1',
    category: Category.GENERAL,
    title: "The will to learn",
    content: "The will to learn is more important than previous knowledge. The only constant is change.",
    quote: { text: "The only constant in the universe is change.", author: "Heraclitus" },
    tags: ['Mindset', 'Growth']
  },
  {
    id: 'gen-2',
    category: Category.GENERAL,
    title: "Read good books",
    content: "Read books and magazines to deepen knowledge.",
    tags: ['Reading', 'Resources']
  },
  {
    id: 'gen-3',
    category: Category.GENERAL,
    title: "Follow developers online",
    content: "Follow others on Twitter, GitHub, dev.to. It motivates you and you learn for free.",
    tags: ['Social', 'Networking']
  },
  {
    id: 'gen-4',
    category: Category.GENERAL,
    title: "Podcasts & RSS",
    content: "Consume media in different situations (commuting, cooking). Listen to podcasts on architecture or DevOps.",
    tags: ['Podcasts', 'Continuous Learning']
  },
  {
    id: 'gen-5',
    category: Category.GENERAL,
    title: "Attend Meetups & Conferences",
    content: "Meet wonderful people. Gain new impressions. Ask your employer to sponsor tickets.",
    tags: ['Networking', 'Community']
  },
  {
    id: 'gen-6',
    category: Category.GENERAL,
    title: "Share Knowledge",
    content: "Post answers on StackOverflow or write a blog. Explaining things helps you understand them better.",
    tags: ['Teaching', 'Writing']
  },
  {
    id: 'gen-7',
    category: Category.GENERAL,
    title: "Work-Life Balance",
    content: "Don't stay at work so long that nobody is waiting for you at home. Don't lose sight of essential things.",
    tags: ['Life', 'Health']
  },

  // --- From "The Best Programmers I Know" ---
  {
    id: 'best-1',
    category: Category.APP_DEV,
    title: "Read the Reference",
    content: "Don't go to Stack Overflow, don't ask the LLM, don't guess, just go straight to the source (e.g., Apache docs, Python Standard Library). It’s surprisingly accessible and accurate.",
    tags: ['Documentation', 'Learning', 'Best Practices']
  },
  {
    id: 'best-2',
    category: Category.APP_DEV,
    title: "Know Your Tools Really Well",
    content: "Truly grok your tools. Understand their history, limitations, and ecosystem. Don't just fumble around; be able to explain every line of the config.",
    tags: ['Mastery', 'Tools', 'Depth']
  },
  {
    id: 'best-3',
    category: Category.APP_DEV,
    title: "Read The Error Message",
    content: "Sit and meditate about the error message until it speaks to you. The best engineers infer a ton of information from very little context.",
    tags: ['Debugging', 'Troubleshooting']
  },
  {
    id: 'best-4',
    category: Category.GENERAL,
    title: "Break Down Problems",
    content: "Simplify problems until they become digestible. If you do it right, it feels like cheating: you just solve simple problems until you’re done.",
    tags: ['Problem Solving', 'Strategy']
  },
  {
    id: 'best-5',
    category: Category.GENERAL,
    title: "Don't Be Afraid To Get Your Hands Dirty",
    content: "Never say 'that’s not for me'. Read code, touch it, learn it. Become the go-to person simply because you weren't afraid to look.",
    tags: ['Mindset', 'Growth', 'Ownership']
  },
  {
    id: 'best-6',
    category: Category.GENERAL,
    title: "Always Help Others",
    content: "Great engineers are always busy but always try to help. Their supportive mind is what makes them great problem solvers.",
    tags: ['Teamwork', 'Mentoring', 'Soft Skills']
  },
  {
    id: 'best-7',
    category: Category.GENERAL,
    title: "Write",
    content: "Mastering writing is mastering thinking. If your writing is confused, your code will be too. Share knowledge via blogs, talks, or OSS.",
    tags: ['Communication', 'Writing', 'Thinking']
  },
  {
    id: 'best-8',
    category: Category.GENERAL,
    title: "Never Stop Learning",
    content: "Don't get stuck thinking what you learned in school is the only way. Evaluate new tech carefully, but don't be 'mentally retired' at 25.",
    tags: ['Learning', 'Growth', 'Adaptability']
  },
  {
    id: 'best-9',
    category: Category.GENERAL,
    title: "Status Doesn't Matter",
    content: "Learn from everyone, young and old. Juniors bring fresh minds and creative solutions because they don't know why things are hard yet.",
    tags: ['Culture', 'Humility', 'Openness']
  },
  {
    id: 'best-10',
    category: Category.GENERAL,
    title: "Build a Reputation",
    content: "Extend your radius of impact. Ship critical services, write famous tools, or contribute to OSS. Let your work speak for itself over time.",
    tags: ['Career', 'Impact', 'Reputation']
  },
  {
    id: 'best-11',
    category: Category.GENERAL,
    title: "Have Patience",
    content: "You need patience with computers, humans, and yourself. Without it, you feel the world is against you. Push through distractions to solve hard problems.",
    tags: ['Mindset', 'Patience', 'Focus']
  },
  {
    id: 'best-12',
    category: Category.APP_DEV,
    title: "Never Blame the Computer",
    content: "No matter how erratic a bug seems, there is a logical explanation. Don't blame the software or the weather. Keep digging until you find the reason.",
    tags: ['Debugging', 'Mindset', 'Accountability']
  },
  {
    id: 'best-13',
    category: Category.GENERAL,
    title: "Don't Be Afraid to Say 'I Don't Know'",
    content: "Don't bullshit. Admitting ignorance allows you to learn. Stand on the edge of your knowledge and deduce answers instead of guessing.",
    quote: { 
      text: "The important thing is that you don't stop asking questions.", 
      author: "Albert Einstein" 
    },
    tags: ['Honesty', 'Interviewing', 'Learning']
  },
  {
    id: 'best-14',
    category: Category.APP_DEV,
    title: "Don't Guess",
    content: "In the face of ambiguity, refuse the temptation to guess. Guessing leads to bugs or wrong mental models that haunt you later.",
    quote: { 
      text: "In the Face of Ambiguity, Refuse the Temptation to Guess", 
      author: "The Zen of Python" 
    },
    tags: ['Best Practices', 'Python', 'Rigor']
  },
  {
    id: 'best-15',
    category: Category.APP_DEV,
    title: "Keep It Simple (The Best)",
    content: "Clever engineers write clever code. Exceptional engineers write simple code. Simple is more maintainable than complex.",
    tags: ['KISS', 'Simplicity', 'Maintenance']
  }
];