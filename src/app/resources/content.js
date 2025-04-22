import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Shiraz",
  lastName: "Yousuf",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Software Developer",
  avatar: "/images/avatar.jpg",
  location: "Asia/Kolkata", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Malayalam", "Hindi"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: false,
  title: <>Connect with {person.firstName}</>,
  description: (
    <>
      You can send me your messahe or ask me anything. I'll get back to you as
      soon as possible.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/Shiraz-2022",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/shiraz-yousuf/",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:shirazyousuf2017@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Software Developer</>,
  subline: (
    <>
      Hi, I'm Shiraz Yousuf — a proactive software developer who builds
      solutions, not just projects. I specialize in full-stack development, love
      solving real-world problems, and quickly adapt to new technologies.
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Shiraz Yousuf is a tech enthusiast and software developer passionate
        about solving real-world problems through innovative technology. Based
        in Kerala, he specializes in building scalable applications that blend
        functionality with intuitive user experiences. His expertise spans
        full-stack development, AI-driven solutions, and creating impactful
        projects that merge creativity and technology.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Healthflex",
        timeframe: "March 2025 - Present",
        role: "SDE",
        achievements: [
          <>Built and optimized a real-time chat system.</>,
          <>
            Developed a seamless appointment booking system with scheduling
            logic.
          </>,
          <>
            Engineered a robust notification system supporting in-app and push
            notifications.
          </>,
          <>
            Implemented CI/CD pipelines to automate deployment for faster
            delivery cycles.Built and optimized a real-time chat system.
          </>,
          <>
            Contributed to three different projects: Stance Health website,
            HealthFlex mobile app, and the Admin Dashboard.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/healthflex.png",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Fleeguide",
        timeframe: "June 2024 - July 2024",
        role: "Full stack developer",
        achievements: [
          <>
            Created and implemented user interfaces, enhancing user engagement
            and experience.
          </>,
          <>Developed and integrated backend APIs with database connections.</>,
          <>
            Deployed frontend and backend services on AWS, achieving
            scalability.
          </>,
          <>Automated deployment processes using Terraform scripts.</>,
          <>Integrated the Meta WhatsApp API for automating messages.</>,
          <>
            Integrated the Razorpay API to enable seamless payment processing.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/fleeguide.png",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Idea2reality",
        timeframe: "Nov 2023 - Jan 2024",
        role: "Frontend Developer",
        achievements: [
          <>
            Participated in the development of two React and two React Native
            projects (Qrooh, AKC, Qalb, and Fits-list).
          </>,
          <>
            Bootstrapped the Fits-list app independently and took a leadership
            role in its development.
          </>,
          <>
            Designed user interfaces, managed project roadmapping, integrated
            APIs, and streamlined deployment workflows.
          </>,
          <>
            Collaborated with team members to maintain best practices while
            delivering high-quality user experiences.
          </>,
          <>Built complex chat interfaces ensuring a smooth user experience.</>,
        ],

        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "IIIT Dharwad",
        description: <>Studied Electronics and communication engineering.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "HTML, CSS, JavaScript, TypeScript, SQL",
        description: (
          <>
            Proficient in front-end and back-end web development using HTML,
            CSS, JavaScript, TypeScript, and SQL.
          </>
        ),
        images: [], // no images needed here, so this is empty
      },
      {
        title: "React.js, ReactNative, Expo, Redux.js",
        description: (
          <>
            Experienced in building modern web and mobile applications with
            React.js, React Native, Expo, and Redux.js.
          </>
        ),
        images: [], // no images here either
      },
      {
        title: "UI/UX Design",
        description: (
          <>
            Skilled in UI/UX design, creating seamless, user-friendly
            interfaces.
          </>
        ),
        images: [], // add images if required
      },
      {
        title: "Express.js, RESTful APIs",
        description: (
          <>
            Developed back-end applications using Express.js and RESTful APIs.
          </>
        ),
        images: [], // no images needed here
      },
      {
        title: "MongoDB, MySQL",
        description: (
          <>
            Experienced with MongoDB and MySQL for database management and
            optimization.
          </>
        ),
        images: [], // no images
      },
      {
        title: "Git version control, CI/CD",
        description: (
          <>
            Proficient in using Git for version control and setting up CI/CD
            pipelines for automated deployments.
          </>
        ),
        images: [], // no images
      },
      {
        title: "AWS, Docker",
        description: (
          <>
            Experienced in deploying applications on AWS and utilizing Docker
            for containerization.
          </>
        ),
        images: [], // no images
      },
      {
        title: "Next.js, Tailwind CSS, Node.js",
        description: (
          <>
            Specialized in building applications with Next.js, styling with
            Tailwind CSS, and backend development with Node.js.
          </>
        ),
        images: [], // no images
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    // {
    //   src: "/images/gallery/img-11.jpg",
    //   alt: "image",
    //   orientation: "vertical",
    // },
    // {
    //   src: "/images/gallery/img-12.jpg",
    //   alt: "image",
    //   orientation: "horizontal",
    // },
    // {
    //   src: "/images/gallery/img-13.jpg",
    //   alt: "image",
    //   orientation: "horizontal",
    // },
    // {
    //   src: "/images/gallery/img-14.jpg",
    //   alt: "image",
    //   orientation: "horizontal",
    // },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
