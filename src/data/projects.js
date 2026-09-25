// Where the "View More Projects" button points. Leave empty to hide the button.
export const moreProjectsUrl = ''

// Tabs above the grid, in order. Tabs with no projects are hidden.
export const projectTabs = [
  'Websites',
  'Landing Pages',
  'Full Stack Apps',
  'Shopify',
  'Headless E-commerce',
]

// `image` is a saved screenshot; without one the card loads a live preview.
export const projects = [
  // Full Stack Apps
  {
    title: 'MAP Petro Emirates',
    url: 'https://www.petroemirates.com/',
    tab: 'Full Stack Apps',
    image: '/projects/screens/map-petro-emirates.jpg',
    category: 'Careers & Recruitment',
    stack: ['React', 'Next.js'],
  },
  {
    title: 'Petro Emirates Admin Portal',
    url: 'https://admin.petroemirates.com/dashboard',
    tab: 'Full Stack Apps',
    image: '/projects/screens/petro-emirates-admin-portal.jpg',
    category: 'Job & Resume Dashboard',
    stack: ['React', 'Next.js'],
    // Behind a login: show a note instead of a public link.
    private: true,
  },
  {
    title: 'Plots7',
    url: 'https://plots7.com/',
    tab: 'Full Stack Apps',
    image: '/projects/screens/plots7.jpg',
    category: 'Property Marketplace',
    stack: ['React'],
  },

  // Websites
  {
    title: 'Weinkling',
    url: 'https://we-inkling.com/',
    tab: 'Websites',
    image: '/projects/screens/weinkling.jpg',
    category: 'Smart Home Automation',
    stack: ['React', 'Next.js'],
  },
  {
    title: 'TamilNadu Now',
    url: 'https://tamilnadunow.com/',
    tab: 'Websites',
    image: '/projects/screens/tamilnadu-now.jpg',
    category: 'Headless WordPress News',
    stack: ['WordPress', 'Headless', 'Next.js'],
  },
  {
    title: 'Allies of Movement',
    url: 'https://alliesofmovement.com/',
    tab: 'Websites',
    image: '/projects/screens/allies-of-movement.jpg',
    category: 'Pilates Studio',
    stack: ['React'],
  },
  {
    title: 'UPL Solar',
    url: 'https://uplsolarcanberra.com/',
    tab: 'Websites',
    image: '/projects/screens/upl-solar.jpg',
    category: 'Solar Energy',
    stack: ['WordPress', 'Elementor'],
  },
  {
    title: 'Star Housing',
    url: 'https://starhousing.org.in/',
    tab: 'Websites',
    image: '/projects/screens/star-housing.jpg',
    category: 'Real Estate',
    stack: ['WordPress', 'Elementor'],
  },
  {
    title: 'Vishaka Clinic',
    url: 'https://vishakaclinic.com/',
    tab: 'Websites',
    image: '/projects/screens/vishaka-clinic.jpg',
    category: 'Hair & Skin Clinic',
    stack: ['WordPress', 'Elementor'],
  },
  {
    title: 'Study Doctors',
    url: 'https://studydoctors.com/',
    tab: 'Websites',
    image: '/projects/screens/study-doctors.jpg',
    category: 'Education',
    stack: ['WordPress', 'Elementor'],
  },
  {
    title: 'GCC Digital Hub',
    url: 'https://gccdigitalhub.com/',
    tab: 'Websites',
    image: '/projects/screens/gcc-digital-hub.jpg',
    category: 'Digital Marketing Agency',
    stack: ['WordPress', 'Elementor'],
  },
  {
    title: 'Eligro Substrate',
    url: 'https://eligro.com.au/',
    tab: 'Websites',
    category: 'Manufacturing',
    stack: ['WordPress', 'Elementor'],
  },
  {
    title: 'Eventricks',
    url: 'https://eventricks.com.au/',
    tab: 'Websites',
    image: '/projects/screens/eventricks.jpg',
    category: 'Events',
    stack: ['WordPress', 'Elementor'],
  },
  {
    title: 'BlackBen',
    url: 'https://blackben.in/',
    tab: 'Websites',
    image: '/projects/screens/blackben.jpg',
    category: 'Software Company',
    stack: ['WordPress', 'Elementor'],
  },
  {
    title: 'RYEC',
    url: 'https://rjpmyec.com/',
    tab: 'Websites',
    image: '/projects/screens/ryec.jpg',
    category: 'Business Website',
    stack: ['WordPress', 'Elementor'],
  },
  {
    title: 'Innotrat',
    url: 'https://innotrat.com/',
    tab: 'Websites',
    image: '/projects/screens/innotrat.jpg',
    category: 'Business Website',
    stack: ['WordPress', 'Elementor'],
  },
  {
    title: 'The Vegan Taste',
    url: 'https://thevegantaste.com/',
    tab: 'Websites',
    image: '/projects/screens/the-vegan-taste.jpg',
    category: 'Meal Delivery',
    stack: ['WordPress', 'WooCommerce'],
  },
  {
    title: 'Shri Vasudeva Textiles',
    url: 'https://shrivasudevatextiles.com/',
    tab: 'Websites',
    category: 'Textiles Store',
    stack: ['WordPress', 'Elementor', 'WooCommerce'],
  },
  {
    title: 'Unify Mattress',
    url: 'https://unifymattress.com/',
    tab: 'Websites',
    image: '/projects/screens/unify-mattress.jpg',
    category: 'Mattress Store',
    stack: ['WordPress', 'WooCommerce'],
  },

  // Shopify
  {
    title: 'Benjo World',
    url: 'https://benjoworld.com/',
    tab: 'Shopify',
    image: '/projects/screens/benjo-world.jpg',
    category: 'Sportswear Brand',
    stack: ['Shopify'],
  },
  {
    title: 'BMT Poojas',
    url: 'https://bmtpoojas.com/',
    tab: 'Shopify',
    image: '/projects/screens/bmt-poojas.jpg',
    category: 'Pooja Essentials',
    stack: ['Shopify'],
  },
  {
    title: 'Salt & Cure',
    url: 'https://saltncure.com/',
    tab: 'Shopify',
    image: '/projects/screens/salt-cure.jpg',
    category: 'Low-Sodium Foods',
    stack: ['Shopify'],
  },

  // Headless E-commerce
  {
    title: 'Your Derm Chronicles',
    url: 'https://yourdermchronicles.com/',
    tab: 'Headless E-commerce',
    image: '/projects/screens/your-derm-chronicles.jpg',
    category: 'Skincare Store',
    stack: ['WordPress', 'Headless', 'WooCommerce'],
  },
  {
    title: 'The Hookah Store',
    url: 'https://thehookahstore.in/',
    tab: 'Headless E-commerce',
    image: '/projects/screens/the-hookah-store.jpg',
    category: 'Hookah Store',
    stack: ['WordPress', 'Headless', 'WooCommerce'],
  },
  {
    title: 'The Green Roots',
    url: 'https://www.thegreenroots.in/',
    tab: 'Headless E-commerce',
    image: '/projects/screens/the-green-roots.jpg',
    category: 'Clothing & Gifts',
    stack: ['Next.js', 'Headless'],
  },
]

// Featured mobile apps, shown above the grid in their tab.
export const appProjects = [
  {
    title: 'PMC Portal',
    tab: 'Full Stack Apps',
    category: 'Mobile App',
    status: 'In Progress',
    description:
      'A project management app for construction clients and site staff, with daily progress reports, task-based delay analysis, interactive task flowcharts, attendance and leave tracking, invoices and documents.',
    stack: ['React Native', 'iOS', 'Android'],
    screenshots: [
      { src: '/projects/pmc-portal/login.jpg', alt: 'PMC Portal login screen' },
      { src: '/projects/pmc-portal/menu.jpg', alt: 'PMC Portal navigation menu' },
      { src: '/projects/pmc-portal/daily-report.jpg', alt: 'Daily progress report screen' },
      { src: '/projects/pmc-portal/task-report.jpg', alt: 'Task-based report with delay breakdown chart' },
      { src: '/projects/pmc-portal/flowchart.jpg', alt: 'Task flowchart screen' },
    ],
  },
]
