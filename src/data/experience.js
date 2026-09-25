import { FiBriefcase } from 'react-icons/fi'

// Newest first. `period` is shown in the pill on the right; `points` render
// as a bullet list under the description.
export const experience = [
  {
    role: 'Freelance Web & App Developer',
    company: 'Self-employed',
    icon: FiBriefcase,
    logoText: 'Freelance',
    type: 'Freelance',
    period: '2024 - Present',
    description:
      'Working independently with clients across India and abroad on e-commerce stores, web apps and mobile apps.',
    points: [
      'Delivered headless WordPress and WooCommerce stores for clients across India and abroad.',
      'Built and deployed Shopify storefronts tailored to client branding and product catalogs.',
      'Developed full-stack web applications using Next.js, integrating with Supabase and Neon.',
      'Built and shipped a React Native mobile app across iOS and Android.',
      'Managed end-to-end client communication, from requirement gathering to final delivery.',
      'Integrated third-party APIs and payment gateways into e-commerce and web projects.',
      'Deployed and managed hosting across Vercel, VPS, and Hostinger environments.',
      'Used Git/GitHub for version control and collaborative development workflows.',
    ],
  },
  {
    role: 'WordPress Developer Intern → WordPress Developer',
    company: 'BrandingBeez',
    logo: '/logos/brandingbeez.png',
    type: 'Internship → Full-time',
    period: '6 months',
    description:
      'Started as a WordPress Developer Intern at a white-label digital marketing agency serving US clients, promoted to full-time Developer after 3 months.',
    points: [
      'Built and maintained WordPress websites for US-based client campaigns under white-label delivery.',
      'Customized themes and used Elementor to create responsive, brand-aligned pages.',
      'Collaborated with the marketing team to implement SEO-friendly site structures.',
      'Handled ongoing site maintenance, bug fixes, and performance optimization for client sites.',
      'Promoted from intern to full-time developer after 3 months based on delivery performance.',
    ],
  },
  {
    role: 'Frontend Developer Intern',
    company: 'AeroLeads',
    logo: '/logos/aeroleads.png',
    type: 'Internship',
    period: '3 months',
    description:
      'Frontend developer intern at AeroLeads, a B2B lead-generation platform, working on their website and lead scraper product pages.',
    points: [
      'Built and updated pages on the AeroLeads website using JavaScript and React.',
      'Worked on pages for the Leads Scraper tool, which helps sales teams find business emails and phone numbers.',
      'Turned design mockups into responsive, reusable frontend components.',
      'Improved page performance and fixed layout issues across browsers and mobile devices.',
      'Collaborated with the design and marketing teams to ship new pages and feature updates.',
    ],
  },
  {
    role: 'Client Relations Intern',
    company: 'NP Digital (Neil Patel Digital)',
    logo: '/logos/np-digital.svg',
    type: 'Bangalore · Internship',
    period: '2022 · 4 months',
    description:
      'Worked as a client relations intern at an SEO and digital marketing agency, managing client communication and supporting campaign delivery.',
    points: [
      'Served as a point of contact for client communication, coordinating campaign updates and addressing queries.',
      'Assisted in preparing SEO performance reports and presenting key metrics to clients.',
      'Coordinated between the SEO/content team and clients to ensure project timelines were met.',
      'Helped onboard new clients by gathering requirements and setting expectations for campaigns.',
      'Supported client retention efforts by tracking feedback and escalating concerns to the relevant team.',
    ],
  },
]
