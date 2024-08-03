import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
// import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
// import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
// import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
// import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
// import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
// import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
// import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
// import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
// import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
// import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
// import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
// import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
// import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
// import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Veeresh Kande Portfolio',
  description: "Site built with React, Next.js, and Tailwind CSS",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Veeresh Kande.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I am a <strong className="text-stone-100">Software Development Engineer </strong>, currently pursing Master's in Information Management,
        at the <strong className="text-stone-100">University of Illinois Urbana Champaign</strong>. My expertise spans diverse programming languages,
        databases, and development tools, developing both Full staack and Android applications,My passion is leveraging
        technology to drive efficiency and enhance user experiences.

      </p>
      <p className="font-style: italic prose-sm text-white sm:prose-base lg:prose-lg">
        In my free time time, you can catch me watching anime, or reading science fiction or historic documentaries or exploring the campus or swimming.
      </p>
    </>
  ),
  actions: [
    {
      href: '/wip',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I am a final-year graduate student at the University of Illinois Urbana-Champaign, working on projects that
   integrate Generative AI technology into software applications. I am proficient in React, Python, Golang, and Java, and
    I enjoy solving challenging problems and learning new technologies. My passion lies in leveraging technology to drive 
    efficiency and enhance user experiences.`,
  aboutItems: [
    { label: 'Location', text: 'Urbana, IL', Icon: MapIcon },
    { label: 'Age', text: '26', Icon: CalendarIcon },
    { label: 'Nationality', text: 'Indian', Icon: FlagIcon },
    { label: 'Interests', text: 'Science Fiction, Comics, Swimming', Icon: SparklesIcon },
    { label: 'Masters', text: 'University of Illinois Urbana Champaign', Icon: AcademicCapIcon },
    { label: 'Bachelors', text: 'Birla Institute of Technology and Science, Pilani - Hyderabad', Icon: AcademicCapIcon },
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  // {
  //   name: 'Spoken languages',
  //   skills: [
  //     {
  //       name: 'English',
  //       level: 10,
  //     },
  //     {
  //       name: 'French',
  //       level: 4,
  //     },
  //     {
  //       name: 'Spanish',
  //       level: 3,
  //     },
  //   ],
  // },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 9,
      },
      {
        name: 'Typescript',
        level: 7,
      },
      {
        name: 'Next.js',
        level: 8,
      },
      {
        name: 'Javascript',
        level: 9,
      }
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Spring Boot',
        level: 8,
      },
      {
        name: 'Node.js',
        level: 8,
      },
      {
        name: 'Python',
        level: 9,
      },
      {
        name: 'Golang',
        level: 8,
      },
      {
        name: 'PHP',
        level: 7,
      },
      {
        name: 'Django',
        level: 6,
      },
      {
        name: 'Flask',
        level: 6,
      },
    ],
  },
  {
    name: 'Mobile development',
    skills: [
      {
        name: 'React Native',
        level: 9,
      },
      {
        name: 'Kotlin',
        level: 6,
      },
      {
        name: 'Swift',
        level: 3,
      },
    ],
  },
  {
    name: 'Machine Learning',
    skills: [
      {
        name: 'Pytorch',
        level: 8,
      },
      {
        name: 'LangChain',
        level: 5,
      },
      {
        name: 'Tensorflow',
        level: 5,
      },
      {
        name: 'R',
        level: 6,
      }
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  // {
  //   title: 'Project title 1',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: porfolioImage1,
  // },
  // {
  //   title: 'Project title 2',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: porfolioImage2,
  // },
  // {
  //   title: 'Project title 3',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: porfolioImage3,
  // },
  // {
  //   title: 'Project title 4',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: porfolioImage4,
  // },
  // {
  //   title: 'Project title 5',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: porfolioImage5,
  // },
  // {
  //   title: 'Project title 6',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: porfolioImage6,
  // },
  // {
  //   title: 'Project title 7',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: porfolioImage7,
  // },
  // {
  //   title: 'Project title 8',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: porfolioImage8,
  // },
  // {
  //   title: 'Project title 9',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: porfolioImage9,
  // },
  // {
  //   title: 'Project title 10',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: porfolioImage10,
  // },
  // {
  //   title: 'Project title 11',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: porfolioImage11,
  // },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'August 2023 - December 2024',
    location: 'University of Illinois Urbana Champaign',
    title: 'Masters in Information Management',
    content: <p>At the University of Illinois Urbana-Champaign, I gained a strong foundation in Data Science and
      learned how machine learning technology started and evolved into Generative AI. I got hands-on experience
      integrating Generative AI into software applications. I also learned how to work with large datasets and how
      to apply this knowledge to real-world problems.</p>
  },
  {
    date: 'August 2016 - July 2020',
    location: 'Birla Institute of Technology and Science, Pilani - Hyderabad',
    title: 'Bachelor of Engineering in Civil Engineering',
    content: <p> At BITS Pilani, I gained a strong fundamental understanding of civil engineering and had the opportunity to explore courses in data science.
      I worked on projects that applied AI in civil engineering, such as using machine learning for Structural Health Monitoring and analyzing precipitation data
      in Hyderabad to devise optimal strategies for preventing floods and pollution of rainwater.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'September 2022 - August 2023',
    location: 'GameBerry Labs',
    title: 'Software Development Engineer',
    content: (
      <p>
        At Gameberry Labs, I focused on developing Android and iOS mobile game applications, ensuring optimal performance and scalability.
        I implemented new features, optimized existing ones, and enhanced internal tools using React to improve team efficiency. My work involved using Golang
        for backend development and C++ with the Cocos Game Engine for the Game UI.
      </p>
    ),
  },
  {
    date: 'Septemger 2020 - September 2023',
    location: 'OYO (Oravel Stays Private Limited)',
    title: 'Software Development Engineer',
    content: (
      <p>
        At OYO, I was responsible for developing new features and maintaining the backend of OYO’s Pricing and Inventory system, which is developed using Progress ABL.
        I worked on migrating the existing monolithic codebase to a Spring Boot microservices architecture. Additionally, I created Grafana dashboards and alerts to
        monitor service health and developed Jenkins pipelines to automate the code deployment process. I also migrated the backend application from PHP to Azure and
        enhanced the existing machine learning model to improve hotel inventory management.
      </p>
    ),
  },
  {
    date: 'January 2020 - July 2020',
    location: 'eGovernments Foundation',
    title: 'Software Development Engineer Intern',
    content: (
      <p>
        Developed experimental full stack web applications for a state government project using the MERN stack (MongoDB, Express, React, Node.js).
        These applications facilitated the creation and tracking of road cutting requests, improving project management and efficiency.
      </p>
    ),
  },
  {
    date: 'May 2018 - July 2018',
    location: 'Tamil Nadu e-Governance',
    title: 'Software Development Engineer',
    content: (
      <p>
        Developed a dynamic dashboard for the Tamil Nadu eGovernance customer service team using RShiny and R. The dashboard featured current unresolved calls
        and options to display top counts for services and areas receiving the most calls. This tool enabled the team to analyze data effectively and improve customer
        awareness of government digital services.
      </p>
    ),
  },


];

/**
 * TODO: Fill the Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: '',
  items: [
    {
      type: ContactType.Email,
      text: 'veeresh1729@gmail.com',
      href: 'mailto:veeresh1729@gmail.com',
    },
    // {
    //   type: ContactType.Location,
    //   text: 'Victoria BC, Canada',
    //   href: 'https://www.google.ca/maps/place/Victoria,+BC/@48.4262362,-123.376775,14z',
    // },
    {
      type: ContactType.LinkedIn,
      text: 'Veeresh Kande',
      href: 'https://www.linkedin.com/in/veeresh-kande-4ba207164/',
    },
    {
      type: ContactType.Github,
      text: 'veeresh09',
      href: 'https://github.com/veeresh09',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  { label: 'Github', Icon: GithubIcon, href: 'https://github.com/veeresh09' },
  // { label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/8553186/tim-baker' },
  { label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/veeresh-kande-4ba207164/' },
  // { label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/reactresume/' },
  // { label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/TimBakerx' },
];
