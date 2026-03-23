export const professionalQA = [
  {
    keywords: ["Abhijit", "hyper text markup language"],
    answer: `HTML (Hyper Text Markup Language) is the standard markup language for creating web pages.`,
  },
  {
    keywords: ["anju", "anjutag"],
    answer: `An HTML element is a component of an HTML document that defines its structure and content.`,
  },
  {
    keywords: ["intro", "introduction"],
    answer: `Good Afternoon, and thank you for the opportunity. My name is Chaitanya Avadhut, and I have around 3+ years of experience as a Frontend Developer, mainly working with React.js and TypeScript. Currently, I'm working at Ciklum on the Hatch project, which is an educational platform used by US schools for student assessments and learning activities. My main role was to migrate a legacy PHP-based system to a modern React architecture, where I worked on breaking large screens into reusable components, improving performance, and making the UI more maintainable. In this project, I: Implemented state management using Redux Toolkit for handling user data, sessions, and activity flows. Integrated multiple REST APIs and handled error states, loaders, and edge cases. Worked with Material UI and Tailwind CSS to build responsive dashboards for teachers and students. Added role-based access control, where different features were shown for teachers, students, and admins. Also wrote unit tests using Jest and React Testing Library for key components. I also contributed to another Hatch project called WPS Ignite Table, where I developed interactive 2D educational games using Phaser.js and JavaScript. Here I worked on: Game logic like scoring, timers, animations, and sound effects. Optimizing performance for tablets and touch devices. Making the UI kid-friendly and intuitive. Overall, I'm passionate about building clean, scalable, and user-friendly applications. I enjoy understanding business requirements, converting them into technical solutions, and I'm now looking for an opportunity where I can take more ownership, work on challenging products, and grow as a frontend engineer.`,
  },
  {
    keywords: ["hatch"],
    answer: `Hatch is an educational platform used by US schools for managing student learning activities and assessments. I worked as a Frontend Developer at Ciklum, where my main responsibility was migrating a legacy PHP system into a modern React and TypeScript-based application. The application uses React with Redux Toolkit for state management, REST APIs for data, and Material UI for responsive design. One major feature I worked on was the Activity Planning module. Teachers can create weekly plans by selecting date ranges, groups, and games. I handled the complete frontend logic including API integration, Redux state, validation, conditional rendering, and error handling. One challenge was managing complex state across multiple filters, which I solved by structuring Redux slices properly and using reusable components. This migration improved performance, maintainability, and overall user experience.`,
  },
  {
    keywords: ["challenge", " project challenge"],
    answer: `One challenge I faced in my project was performance issue when rendering large data in a list. The UI was becoming slow because too many components were re-rendering. I used React.memo to prevent unnecessary re-renders. I optimized state management. I used lazy loading where needed. I checked performance using React DevTools.`,
  },
  {
    keywords: ["optimize", "performance optimize"],
    answer: `I optimized performance mainly by reducing unnecessary re-renders. I used React.memo for heavy components, useCallback and useMemo for expensive functions, and implemented lazy loading for large modules. I also avoided deeply nested props by normalizing state in Redux and split large components into smaller reusable ones. This improved rendering performance, especially on low-end tablets used in schools.`,
  },
  {
    keywords: ["statehatch"],
    answer: `We use Redux Toolkit for global state management. Global data like user info, roles, selected groups, and session data are stored in Redux slices. Local UI states like modal open/close or form inputs are managed using React useState. For async operations, we use createAsyncThunk to handle API calls and store loading, success, and error states in Redux.`,
  },
  {
    keywords: ["global", "local", "state diff"],
    answer: `I explain it like this: Local State (useState): This is like your pocket. You keep small things there that only you need (like a toggle or a single input value). Global State (Redux): This is like a School Notice Board. Everyone in the school can see it and use that information (like User Login info or the user's Role).`,
  },
  {
    keywords: ["clean code", "best practices"],
    answer: `Clean code means writing code for people, not just for computers. I follow these simple rules: Meaningful Names: Don't name a variable 'x', name it 'isUserLoggedIn'. Small Components: One component should do only one thing. DRY (Don't Repeat Yourself): If I write the same code twice, I move it to a helper function. Comments: I write comments for 'Why' I did something, not 'What' I did.`,
  },
  {
    keywords: ["code review", "teammate"],
    answer: `Code review is like a second pair of eyes. When I review a teammate's code: I look for bugs or performance issues. I check if the code is easy to read. I am always polite. I don't say "This is wrong," I say "Can we try this way to make it faster?" It's not about finding mistakes; it's about making the product better together.`,
  },
  {
    keywords: ["conflict", "argument"],
    answer: `If I have a disagreement with a teammate about code: 1. First listen to their reason. 2. I explain my reason with logic. 3. If we still can't agree, i ask a Senior/Lead for a third opinion.`,
  },
  {
    keywords: ["learn", "new technology"],
    answer: `Technology changes fast, so I stay updated by: Reading official documentation (like React.dev). Building small side projects to test new things (like Vite or React 19). Watching technical blogs or YouTube channels like 'Web Dev Simplified'.`,
  },
  {
    keywords: ["bug", "fix", "stuck"],
    answer: `1. I use console.log and React DevTools to see where the data is stopping. 2. I check if it's a "Shallow Copy" issue (very common in React). 3. If I am stuck for more than 1 hour, I ask a teammate.`,
  },
  {
    keywords: ["leaving", "reason", "change"],
    answer: `I learned a lot at Ciklum working on the Hatch project, especially about migrating old systems to React. But now, I am looking for a new challenge where I can take more ownership and work on a bigger product. I want to join a team where I can use my 3+ years of experience to help the company grow while I grow as a Senior Engineer.`,
  },
  {
    keywords: ["deadline", "pressure", "time"],
    answer: `When time is short, I work smarter, not just faster: I focus on "Must-Have" features first. I talk to my manager to see if small things (like extra animations) can be done later. I write clean code so I don't create new bugs that will waste more time later. The key is to keep the manager updated every day so there are no surprises.`,
  },
  {
    keywords: ["strength", "weakness"],
    answer: `Strength: I can explain complex technical things in simple words. This helps me work well with designers and junior developers. Weakness: Sometimes I try to make my code "too perfect" and it takes extra time. Now, I focus on making it "work first," and then I make it "perfect" later if I have time.`,
  },
  {
    keywords: ["future", "5 years", "goals"],
    answer: `In 5 years, I see myself as a Technical Lead or Architect. I want to be the person who decides the structure of big projects and helps other developers solve their problems. I want to stay close to coding but also help the business grow with good technology.`,
  },
  {
    keywords: ["ask them", "questions"],
    answer: `1. "How does the team handle code reviews and testing?" 2. "What are the growth opportunities for someone in this role?"`,
  },
];
