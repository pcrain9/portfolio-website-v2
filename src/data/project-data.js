const projectData = [
  {
    title: "Harvard in Tech - Seattle React app",
    link: "https://react.harvardintechseattle.com/",
    repo: null,
    framesandlangs: [
      "React",
      "Bootstrap",
      "react-bootstrap",
      "Gatsby",
      "jquery",
    ],
    role: "For Harvard in Tech, I was tasked with overseeing the migration of the former site to a React App that would also incorporate Gatsby as a CMS.  I reviewed the codebase after the migration and had to optimize any components wherever I saw a need for either reducing the code’s size or implementing some of the great features that React offers through its use of JSX.",
    journey:
      "While the app appeared acceptable and only needed minor bug fixes and styling changes, there were many issues with the codebase.  The major one was that the devs who used standard HTML/CSS/JS to build the initial app hand-wrote many of the features(buttons, cards,etc.) over and over.  I decided to translate the data into an array of objects and then simply mapped them within the component.  This saved over 1500 lines of code and made styling much easier!",
    features: [
      "Join weekly webinars",
      "Find podcasts",
      "Discover volunteer opportunities",
    ],
  },
  {
    title: "Dev Launchers Basecamp Project",
    link: "https://basecamp.devlaunchers.org/",
    repo: "https://github.com/dev-launchers/platform__dl-edu/",
    framesandlangs: [
      "React",
      "Material-UI",
      "Formik",
      "Yup",
      "Strapi",
      "React-Router",
    ],
    role: "I single-handedly took wireframes from our UI/UX team and converted those into clean, resuseable React code.  I also wired up the app, readying it for our users by adding form validation with Formik and yup, creating routing through React Router v6, while at the same time debugging and adding quality-of-life features.",
    journey:
      "This app has been the culmination of many months of work.  I have encountered numerous issues that were all eventually solved through my sheer force of will.  I had to learn Material UI from scratch along with Formik, yup, and many other third-party libraries.  My skills with CSS layouts improved tremendously to the point where I have no issues writing complex CSS layouts.",
    features: [
      "Form validation through Formik and Yup",
      "User validation and log-in",
      "User-generated content",
    ],
  },
  {
    title: "Metadata Parser",
    link: "https://pcrain-metadata-parser.netlify.app/",
    repo: "https://github.com/pcrain9/parse-metadata",
    framesandlangs: ["React", "Material UI"],
    role: "I built this Metadata Parser on my own for a client.",
    journey:
      "This app was very tricky to get right!  The hardest part was definitely figuring out the best way to take in a snippet of metadata and parse it correctly.  I tried to be heroic and build a function myself but it tured out that the best way to proceed was to use the DOMparser interface provided by JavaScript. Once the snippet was parsed, I looped through the result and created an array of objects with all the necessary information.  This was then translated to the graph on the right.",
    features: [
      "DOMparser interface",
      "Material UI interface",
      "error handling",
    ],
  },
  {
    title: "Mock Weather App",
    link: "https://pcrain9.github.io/weather_app/",
    repo: "https://github.com/pcrain9/weather_app",
    framesandlangs: ["React", "API requests", "React-Router"],
    role: "I built this mock weather.com app to practice requesting information from various APIs.  The two that I use in this app are from Google maps and weather.gov.",
    journey:
      "This app was tremendous practice for me to get used to making requests from APIs and displaying received data on screen.  I gained a lot of practice reading parsed JSON files and deciphering where in the file the relevant data had been stored.",
    features: [
      "Localized weekly weather forecast",
      "Current weather loaded from computer location",
    ],
  },
];

const sevenData = {
  framesAndLangs: [
    "React",
    "react-bootstrap",
    "module federation",
    "Redux Toolkit Query",
  ],
  role: "At 7/11, my team and I created a new React application that replaced a 15 year old internal application that handled querying information about 7/11 stores in the United States. For the new application, I learned and integrated the most modern features available in website design today including module federation, micro-frontends, and Redux Toolkit Query.",
  journey:
    "A lot of what I had to do was self-taught, guided by my project manager.  I was told to look into how micro front-ends work by using module federation.  The rest was up to me!  I had to decide how I wanted to learn, test, and execute this, which I did through a combination of reading the documentation, watching other engineers create their own micro front-ends, along with personal testing and debugging the application.  The same thing happened with Redux Toolkit Query.  We wanted an easy way to make many queries throughout the app so I researched RTK Query and was able to implement it while also teaching my co-workers how they could add to the reducer function I created.",
  features: [
    "Global style overrides using bootstrap, Module federation using webpack",
    "Querying  handled by Redux Toolkit Query",
  ],
};

export { projectData, sevenData };
