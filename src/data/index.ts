/**
 * All site data – dummy data only, no backend.
 * Edit these arrays to change menu, pages, posts, projects, testimonials, news, and sitemap.
 */

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'

// ─── Menu (Navigation) ─────────────────────────────────────────────────────
export interface MenuItemNode {
  uri: string
  target: string
  label: string
}

export const menuItemsData = {
  nodes: [
    { uri: '/', target: '_self', label: 'Home' },
    { uri: '/#our-projects', target: '_self', label: 'Our Projects' },
    { uri: '/#in-news', target: '_self', label: 'News' },
    { uri: '/#testimonials', target: '_self', label: 'Testimonials' },
    { uri: '/#contact-us', target: '_self', label: 'Contact' },
  ] as MenuItemNode[],
}

// ─── SEO (shared shape for pages/posts) ────────────────────────────────────
export interface SeoImage {
  altText?: string
  sourceUrl?: string
  mediaDetails?: { width?: number; height?: number }
}

export interface SeoData {
  title?: string
  metaDesc?: string
  canonical?: string
  opengraphTitle?: string
  opengraphDescription?: string
  opengraphUrl?: string
  opengraphSiteName?: string
  opengraphType?: string
  opengraphImage?: SeoImage
  twitterTitle?: string
  twitterDescription?: string
  twitterImage?: SeoImage
  metaRobotsNoindex?: string
  metaRobotsNofollow?: string
}

// ─── Content nodes (for dynamic routes: pages + posts) ─────────────────────
export interface ContentNodeItem {
  contentTypeName: 'page' | 'post'
  databaseId: number
  status: string
  uri: string
  seo?: SeoData | null
}

export const contentNodesByUri = new Map<string, ContentNodeItem>()
export const contentNodesById = new Map<number, ContentNodeItem>()

// ─── Pages (by databaseId) ─────────────────────────────────────────────────
export interface PageItem {
  databaseId: number
  content: string
  uri: string
  seo?: SeoData | null
}

export const pagesData: PageItem[] = [
  {
    databaseId: 27,
    uri: '/404-not-found/',
    content:
      '<h1>Page not found</h1><p>The page you are looking for does not exist.</p>',
    seo: { title: '404 Not Found', metaDesc: 'Page not found' },
  },
  {
    databaseId: 1,
    uri: '/',
    content: '',
    seo: {
      title: 'Vertalex | Home',
      metaDesc: 'Cost effective & CO2 compliant aluminium solutions.',
    },
  },
]

// ─── Posts (by databaseId) ─────────────────────────────────────────────────
export interface PostItem {
  databaseId: number
  title: string
  content: string
  uri: string
  author?: { node: { name: string } }
  seo?: SeoData | null
}

export const postsData: PostItem[] = [
  {
    databaseId: 1,
    uri: '/blog/sample-post/',
    title: 'Sample Post',
    content:
      '<p>This is a sample post. Add more in <code>src/data/index.ts</code>.</p>',
    author: { node: { name: 'Admin' } },
    seo: { title: 'Sample Post', metaDesc: 'A sample blog post.' },
  },
]

// ─── Projects (Our Projects) ──────────────────────────────────────────────
export interface ProjectImage {
  id: string
  sourceUrl: string
}

export interface ProjectNode {
  projects: {
    title: string
    description: string
    color?: string
    image: ProjectImage
  }
}

export const projectsData: ProjectNode[] = [
  {
    projects: {
      title: 'OCTAGON BIRMINGHAM, UK',
      description:
        'A 49 storey landmark residential tower in Birmingham city, UK. ​ We are currently supplying 32 dies, with thermal breaks, powder coating, anodizing and mill finish for the facade of this building. ',
      // color: 'ffffff',
      image: { id: '2', sourceUrl: '/heroTwo.jpeg' },
    },
  },
  {
    projects: {
      title: 'CONSTRUCTION & INDUSTRIAL Project One',
      description:
        'A three tower mixed-use development in the heart of Canary Wharf  comprising buildings of 65, 35 & 20 storeys. Crofton MEA supplied approx. 500 MT across 50 dies with thermal breaks, powder coating, anodizing and mill finish for the facades of these buildings. ',
      // color: '445ae0',
      image: { id: '1', sourceUrl: '/heroOne.jpeg' },
    },
  },
  {
    projects: {
      title: 'CONSORT PLACE CANARY WHARF, UK',
      description:
        'A three tower mixed-use development in the heart of Canary Wharf  comprising buildings of 65, 35 & 20 storeys. Crofton MEA supplied approx. 500 MT across 50 dies with thermal breaks, powder coating, anodizing and mill finish for the facades of these buildings.',
      // color: '64ce5b',
      image: { id: '3', sourceUrl: '/heroThree.jpeg' },
    },
  },
]

// ─── Testimonials ─────────────────────────────────────────────────────────
export interface TestimonialNode {
  testimonial: {
    name: string
    designation: string
    review: string
    logo: { id?: string; sourceUrl: string }
  }
}

export const testimonialsData: TestimonialNode[] = [
  {
    testimonial: {
      name: 'Ravi Sharma',
      designation: 'Tech Startup Founder, India',
      review:
        "Stephen's expertise helped me secure funding and mentorship for my startup. By connecting me with angel investors and tech professionals across the globe, he opened doors I didn’t even know existed",
      logo: { sourceUrl: '/userImage.png' },
    },
  },
  {
    testimonial: {
      name: 'Professor Hiroshi Tanaka',
      designation: 'University Lecturer, Japan',
      review:
        "As a lecturer in higher education, I was struggling to establish international collaborations. Stephen's approach enabled me to connect with educators and researchers worldwide, leading to joint projects and academic exchanges",
      logo: { sourceUrl: '/userImage.png' },
    },
  },
  {
    testimonial: {
      name: 'Dr. Emily Carter',
      designation: 'Surgeon, USA',
      review:
        'Stephen’s LinkedIn strategies have transformed the way I approach networking. By targeting the right keywords and optimizing my profile, I’ve connected with top specialists in the United States and beyond, gaining collaborative opportunities that have significantly boosted my careers',
      logo: { sourceUrl: '/userImage.png' },
    },
  },
]

// ─── News ─────────────────────────────────────────────────────────────────
export interface NewsUserImage {
  id: string
  sourceUrl: string
}

export interface NewsImage {
  id: string
  sourceUrl: string
}

export interface NewsNode {
  New: {
    about: string
    description: string
    readtime: string
    title: string
    username: string
    userimage: NewsUserImage
    image: NewsImage
  }
}

export const newsData: NewsNode[] = [
  {
    New: {
      title: 'Aluminum: Powering the Future of Sustainable Innovation.',
      about: 'Market, Trends, Sustainability',
      description:
        'An overview of the aluminium market and sustainability trends.',
      readtime: '12 min read',
      username: 'Jenny Wilson',
      userimage: { id: 'u1', sourceUrl: '/userImage.png' },
      image: { id: 'n1', sourceUrl: '/newsMainImage.png' },
    },
  },
  {
    New: {
      title: 'How green aluminium is transforming the metal industry',
      about: 'Aluminuim, Solutions',
      description:
        "Aluminum is revolutionizing the way we build and create. In this blog post, we'll explore the remarkable potential of aluminum technology, its environmental advantages, and how you can harness this sustainable material for a stronger, more efficient future.",
      readtime: '9 min read',
      username: 'Leslie Alexander',
      userimage: { id: 'u2', sourceUrl: '/userImage.png' },
      image: { id: 'n2', sourceUrl: '/newsInnovation.png' },
    },
  },
  {
    New: {
      title: 'Aluminum: A Spark of Innovation for Sustainable Solutions.',
      about: 'Aluminuim, Solutions',
      description:
        "Aluminum is revolutionizing the way we build and create. In this blog post, we'll explore the remarkable potential of aluminum technology, its environmental advantages, and how you can harness this sustainable material for a stronger, more efficient future.",
      readtime: '7 min read',
      username: 'Wade Warren',
      userimage: { id: 'u2', sourceUrl: '/userImage.png' },
      image: { id: 'n2', sourceUrl: '/newsInnovation.png' },
    },
  },
]

// ─── Sitemap entries (built from pages + posts + static routes) ────────────
const today = new Date().toISOString().split('T')[0]
export const sitemapEntries: { url: string; lastModified: string }[] = [
  { url: `${baseUrl}/`, lastModified: today },
  { url: `${baseUrl}/BookMeeting`, lastModified: today },
  { url: `${baseUrl}/LetsConnect`, lastModified: today },
  { url: `${baseUrl}/Services`, lastModified: today },
  { url: `${baseUrl}/Partners`, lastModified: today },
  { url: `${baseUrl}/WhyUs`, lastModified: today },
  { url: `${baseUrl}/KeyElement`, lastModified: today },
  { url: `${baseUrl}/OurProjects`, lastModified: today },
  { url: `${baseUrl}/News`, lastModified: today },
  { url: `${baseUrl}/Testimonials`, lastModified: today },
  ...pagesData.map((p) => ({ url: `${baseUrl}${p.uri}`, lastModified: today })),
  ...postsData.map((p) => ({ url: `${baseUrl}${p.uri}`, lastModified: today })),
]

// Build content node lookups from pages + posts
function buildContentNodeMaps() {
  for (const p of pagesData) {
    const node: ContentNodeItem = {
      contentTypeName: 'page',
      databaseId: p.databaseId,
      status: 'publish',
      uri: p.uri,
      seo: p.seo ?? null,
    }
    contentNodesByUri.set(p.uri.replace(/\/$/, '') || '/', node)
    contentNodesByUri.set(p.uri, node)
    contentNodesById.set(p.databaseId, node)
  }
  for (const p of postsData) {
    const node: ContentNodeItem = {
      contentTypeName: 'post',
      databaseId: p.databaseId,
      status: 'publish',
      uri: p.uri,
      seo: p.seo ?? null,
    }
    contentNodesByUri.set(p.uri.replace(/\/$/, ''), node)
    contentNodesById.set(p.databaseId, node)
  }
}
buildContentNodeMaps()

// ─── Getters (used by app instead of GraphQL) ──────────────────────────────

export function getMenuItems() {
  return menuItemsData
}

export function getContentNodeBySlug(
  slug: string,
  idType: 'URI' | 'DATABASE_ID'
) {
  if (idType === 'DATABASE_ID') {
    const id = parseInt(slug, 10)
    return isNaN(id) ? null : (contentNodesById.get(id) ?? null)
  }
  const path = slug.startsWith('/') ? slug : `/${slug}`
  const withTrailing = path.endsWith('/') ? path : `${path}/`
  return (
    contentNodesByUri.get(path) ??
    contentNodesByUri.get(withTrailing) ??
    contentNodesByUri.get(path.replace(/\/$/, '')) ??
    null
  )
}

export function getPageByDatabaseId(id: number) {
  return pagesData.find((p) => p.databaseId === id) ?? null
}

export function getPostByDatabaseId(id: number) {
  return postsData.find((p) => p.databaseId === id) ?? null
}

export function getProjects() {
  return { projects: { nodes: projectsData } }
}

export function getTestimonials() {
  return { testimonials: { nodes: testimonialsData } }
}

export function getNews() {
  return { news: { nodes: newsData } }
}

export function getSitemapEntries() {
  return sitemapEntries
}
