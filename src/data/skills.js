import { FiServer } from 'react-icons/fi'
import {
  SiBootstrap,
  SiCss,
  SiElementor,
  SiExpress,
  SiFigma,
  SiGit,
  SiGraphql,
  SiHostinger,
  SiHtml5,
  SiJavascript,
  SiLottiefiles,
  SiMui,
  SiNextdotjs,
  SiNodedotjs,
  SiPostman,
  SiReact,
  SiRedis,
  SiSass,
  SiSupabase,
  SiTailwindcss,
  SiVercel,
  SiWoo,
  SiWordpress,
} from 'react-icons/si'
import { TbBrandReactNative } from 'react-icons/tb'

// Three columns on desktop, top to bottom. On smaller screens the columns are
// flattened in this order. An entry with `pair` renders two compact cards
// side by side.
export const skillColumns = [
  [
    {
      title: 'Frontend Development',
      description:
        'Building responsive, interactive user interfaces with modern JavaScript and React.',
      icons: [
        { Icon: SiHtml5, label: 'HTML', color: '#E34F26' },
        { Icon: SiJavascript, label: 'JavaScript', color: '#F0DB4F' },
        { Icon: SiNextdotjs, label: 'Next.js', color: '#000000' },
        { Icon: SiReact, label: 'React', color: '#149ECA' },
      ],
    },
    {
      title: 'Backend Development',
      description:
        'Building server-side logic and API routes using Next.js, Node.js and Express.',
      icons: [
        { Icon: SiNodedotjs, label: 'Node.js', color: '#5FA04E' },
        { Icon: SiExpress, label: 'Express', color: '#000000' },
        { Icon: SiNextdotjs, label: 'Next.js', color: '#000000' },
      ],
    },
    {
      title: 'Core Computer Science Concepts',
      description:
        'A solid grounding in the fundamentals behind reliable software, from data structures to system architecture.',
      icons: [],
      tags: [
        'Operating Systems',
        'Computer Networks',
        'Object-Oriented Programming',
        'DSA',
        'System Design',
      ],
    },
    {
      title: 'Personal Development',
      description:
        'Always learning, and working well both on my own and as part of a team.',
      icons: [],
      tags: ['Time Management', 'Problem Solving', 'Communication', 'Leadership'],
    },
    {
      title: 'Headless E-commerce',
      description:
        'Building headless stores with WordPress and WooCommerce as the backend and a React frontend, connected through GraphQL, using custom post types and custom fields.',
      icons: [
        { Icon: SiWoo, label: 'WooCommerce', color: '#7F54B3', size: 40 },
        { Icon: SiReact, label: 'React', color: '#149ECA' },
        { Icon: SiGraphql, label: 'GraphQL', color: '#E10098' },
      ],
    },
  ],
  [
    {
      title: 'Styling & Design',
      description:
        'Crafting clean, responsive designs using utility-first CSS frameworks and component libraries.',
      icons: [
        { Icon: SiCss, label: 'CSS', color: '#663399' },
        { Icon: SiTailwindcss, label: 'Tailwind CSS', color: '#06B6D4' },
        { Icon: SiBootstrap, label: 'Bootstrap', color: '#7952B3' },
        { Icon: SiSass, label: 'Sass', color: '#CC6699' },
        { Icon: SiMui, label: 'Material UI', color: '#007FFF' },
      ],
    },
    {
      title: 'Web Animations',
      description:
        'Adding lightweight Lottie animations that make interfaces feel alive.',
      icons: [{ Icon: SiLottiefiles, label: 'Lottie', color: '#00DDB3' }],
    },
    {
      title: 'Deployment & Hosting',
      description:
        'Deploying and managing sites and apps on Vercel, Hostinger and VPS servers.',
      icons: [
        { Icon: SiVercel, label: 'Vercel', color: '#000000' },
        { Icon: SiHostinger, label: 'Hostinger', color: '#673DE6' },
        { Icon: FiServer, label: 'VPS', color: '#0b2a4a' },
      ],
    },
    {
      title: 'Testing & Debugging',
      description: 'Testing and debugging APIs with Postman.',
      icons: [{ Icon: SiPostman, label: 'Postman', color: '#FF6C37' }],
    },
  ],
  [
    {
      title: 'Database Management',
      description:
        'Setting up Supabase databases for web apps and using Redis for caching.',
      icons: [
        { Icon: SiSupabase, label: 'Supabase', color: '#3ECF8E' },
        { Icon: SiRedis, label: 'Redis', color: '#FF4438' },
      ],
    },
    {
      pair: [
        {
          title: 'Mobile App Development',
          description: 'Building cross-platform mobile apps for iOS and Android using React Native.',
          icons: [
            { Icon: TbBrandReactNative, label: 'React Native', color: '#149ECA' },
          ],
        },
        {
          title: 'Version Control',
          description: 'Tracking changes and managing code with Git.',
          icons: [{ Icon: SiGit, label: 'Git', color: '#F05032' }],
        },
      ],
    },
    {
      title: 'Figma & UI Design',
      description:
        'Designing simple, clean page layouts in Figma, then turning Figma designs into responsive, pixel-accurate code.',
      icons: [{ Icon: SiFigma, label: 'Figma', color: '#F24E1E' }],
      tags: ['Basic UI Design', 'Figma to Code'],
      inline: true,
    },
    {
      title: 'WordPress Development',
      description:
        'Building and customizing WordPress sites with Elementor, including custom field integration.',
      icons: [
        { Icon: SiWordpress, label: 'WordPress', color: '#21759B' },
        { Icon: SiElementor, label: 'Elementor', color: '#92003B' },
      ],
    },
  ],
]
