# Design Document - Legosoft Portfolio

## Overview

El portafolio de Legosoft Dev será una aplicación web moderna construida como una Single Page Application (SPA) utilizando Next.js 14 con App Router. El diseño seguirá principios de minimalismo futurista con una paleta de colores oscura y acentos vibrantes. La arquitectura se basará en componentes reutilizables con animaciones fluidas mediante Framer Motion y elementos 3D opcionales con Three.js.

El sitio estará optimizado para rendimiento, SEO y accesibilidad, con un enfoque en microinteracciones que mejoren la experiencia del usuario sin comprometer la velocidad de carga. Se implementará un sistema de diseño consistente basado en Tailwind CSS con componentes personalizados.

## Architecture

### High-Level Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                        Client Browser                        │
│  ┌────────────────────────────────────────────────────────┐ │
│  │              Next.js App (React 18)                    │ │
│  │  ┌──────────────┐  ┌──────────────┐  ┌─────────────┐ │ │
│  │  │   Pages/     │  │  Components  │  │   Hooks     │ │ │
│  │  │   Routes     │  │   Library    │  │  & Utils    │ │ │
│  │  └──────────────┘  └──────────────┘  └─────────────┘ │ │
│  │  ┌──────────────┐  ┌──────────────┐  ┌─────────────┐ │ │
│  │  │  Animation   │  │    State     │  │    API      │ │ │
│  │  │   Engine     │  │  Management  │  │   Client    │ │ │
│  │  └──────────────┘  └──────────────┘  └─────────────┘ │ │
│  └────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────────┐
│                    API Routes (Next.js)                      │
│  ┌──────────────┐  ┌──────────────┐  ┌─────────────────┐  │
│  │   Contact    │  │     Blog     │  │   AI Assistant  │  │
│  │   Handler    │  │   Content    │  │     Handler     │  │
│  └──────────────┘  └──────────────┘  └─────────────────┘  │
└─────────────────────────────────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────────┐
│                    External Services                         │
│  ┌──────────────┐  ┌──────────────┐  ┌─────────────────┐  │
│  │   reCAPTCHA  │  │   Email      │  │   CMS (Sanity/  │  │
│  │   Service    │  │   Service    │  │   Contentful)   │  │
│  └──────────────┘  └──────────────┘  └─────────────────┘  │
└─────────────────────────────────────────────────────────────┘
```

### Technology Stack

**Frontend:**
- Next.js 14 (App Router) - Framework principal con SSR/SSG
- React 18 - Biblioteca de UI
- TypeScript - Tipado estático
- Tailwind CSS - Estilos utilitarios
- Framer Motion - Animaciones y transiciones
- Three.js / React Three Fiber - Elementos 3D (opcional)
- Lottie - Animaciones vectoriales

**Backend/API:**
- Next.js API Routes - Endpoints serverless
- Nodemailer - Envío de emails
- Zod - Validación de esquemas

**Content Management:**
- Sanity.io o Contentful - CMS headless para blog y proyectos
- Markdown/MDX - Contenido estático

**Deployment & Infrastructure:**
- Vercel - Hosting y CI/CD
- Vercel Analytics - Métricas de rendimiento
- Google Analytics 4 - Analítica web

**Security & Validation:**
- reCAPTCHA v3 - Protección contra spam
- DOMPurify - Sanitización de HTML
- Helmet (via headers) - Seguridad HTTP

## Components and Interfaces

### Core Components

#### 1. Layout Components

**`RootLayout`**
- Wrapper principal de la aplicación
- Gestiona tema (dark/light mode)
- Incluye navegación global y footer
- Maneja transiciones entre páginas

**`Navigation`**
- Barra de navegación sticky/fixed
- Animación al scroll
- Indicador de sección activa
- Menú hamburguesa responsive

**`Footer`**
- Links de navegación
- Información de contacto
- Redes sociales
- Copyright y créditos

#### 2. Home Page Components

**`HeroSection`**
```typescript
interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  animationType: 'typewriter' | 'morphing' | 'fade';
}
```
- Animación de fondo (partículas, gradientes, o 3D)
- Texto animado con efecto typewriter
- CTA principal con microinteracción
- Scroll indicator animado

**`AnimatedBackground`**
- Canvas con Three.js o partículas CSS
- Responde a movimiento del mouse
- Optimizado para rendimiento
- Fallback para dispositivos de bajo rendimiento

#### 3. About Section Components

**`AboutSection`**
```typescript
interface AboutContent {
  story: string;
  philosophy: string[];
  values: string[];
}
```

**`TechStack`**
```typescript
interface Technology {
  name: string;
  icon: string;
  category: 'frontend' | 'backend' | 'cloud' | 'tools';
}
```
- Grid de logos tecnológicos
- Animación al hover
- Tooltip con descripción
- Agrupación por categoría

**`Timeline`**
```typescript
interface TimelineEvent {
  year: number;
  title: string;
  description: string;
  icon?: string;
}
```
- Línea vertical con puntos interactivos
- Animación al scroll
- Microinteracciones al hover
- Responsive (horizontal en móvil)

#### 4. Portfolio Components

**`ProjectGrid`**
```typescript
interface Project {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  technologies: string[];
  category: string;
  featured: boolean;
}
```
- Grid responsivo (1-2-3 columnas)
- Filtros por categoría/tecnología
- Animación stagger al cargar
- Lazy loading de imágenes

**`ProjectCard`**
- Imagen con overlay al hover
- Título y descripción breve
- Tags de tecnologías
- Botón "Ver Detalles"
- Efectos de elevación y blur

**`ProjectDetail`**
```typescript
interface ProjectDetail extends Project {
  fullDescription: string;
  problem: string;
  solution: string;
  results: string[];
  images: string[];
  liveUrl?: string;
  githubUrl?: string;
}
```
- Hero con mockup 3D o screenshot
- Secciones: Problema, Solución, Resultados
- Galería de imágenes
- CTA para proyecto similar
- Navegación prev/next

#### 5. Services Components

**`ServicesGrid`**
```typescript
interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  ctaText: string;
}
```

**`ServiceCard`**
- Icono animado
- Título y descripción
- Lista de características
- Botón "Cotizar"
- Animación de entrada escalonada

**`QuoteModal`**
```typescript
interface QuoteFormData {
  name: string;
  email: string;
  phone?: string;
  service: string;
  message: string;
  budget?: string;
}
```
- Modal con backdrop blur
- Formulario multi-paso (opcional)
- Validación en tiempo real
- Animación de apertura/cierre

#### 6. Contact Components

**`ContactForm`**
```typescript
interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  attachment?: File;
}

interface FormValidation {
  field: keyof ContactFormData;
  isValid: boolean;
  errorMessage?: string;
}
```
- Campos con validación en tiempo real
- Indicadores visuales de error/éxito
- Botón de envío con loading state
- Mensaje de confirmación animado

**`ContactInfo`**
- Tarjetas con información de contacto
- Links directos (WhatsApp, Email, etc.)
- Iconos animados
- Efecto hover

**`AIAssistant`**
```typescript
interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

interface AssistantState {
  isOpen: boolean;
  messages: ChatMessage[];
  isTyping: boolean;
}
```
- Widget flotante
- Interfaz de chat
- Respuestas predefinidas
- Captura de leads
- Animación de typing

#### 7. Blog Components

**`BlogGrid`**
```typescript
interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  coverImage: string;
  author: string;
  publishedAt: Date;
  tags: string[];
  readTime: number;
}
```

**`BlogCard`**
- Imagen destacada
- Título y excerpt
- Metadata (fecha, autor, tiempo de lectura)
- Tags
- Link a artículo completo

**`BlogPost`**
- Hero con imagen
- Contenido MDX renderizado
- Table of contents
- Share buttons
- Related posts

**`SearchBar`**
- Input con debounce
- Sugerencias en tiempo real
- Filtros por tags
- Resultados destacados

### Shared Components

**`Button`**
```typescript
interface ButtonProps {
  variant: 'primary' | 'secondary' | 'ghost' | 'outline';
  size: 'sm' | 'md' | 'lg';
  icon?: ReactNode;
  loading?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}
```

**`Card`**
```typescript
interface CardProps {
  variant: 'elevated' | 'outlined' | 'glass';
  hoverable?: boolean;
  children: ReactNode;
}
```

**`AnimatedSection`**
```typescript
interface AnimatedSectionProps {
  children: ReactNode;
  animation: 'fade' | 'slide' | 'scale' | 'blur';
  delay?: number;
  threshold?: number;
}
```

## Data Models

### Project Model

```typescript
interface Project {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  thumbnail: {
    url: string;
    alt: string;
    width: number;
    height: number;
  };
  images: Array<{
    url: string;
    alt: string;
    caption?: string;
  }>;
  technologies: Technology[];
  category: ProjectCategory;
  featured: boolean;
  problem: string;
  solution: string;
  results: string[];
  metrics?: Array<{
    label: string;
    value: string;
  }>;
  liveUrl?: string;
  githubUrl?: string;
  publishedAt: Date;
  order: number;
}

type ProjectCategory = 
  | 'web-development'
  | 'mobile-app'
  | 'cloud-integration'
  | 'ai-automation'
  | 'enterprise-system';

interface Technology {
  name: string;
  icon: string;
  category: TechCategory;
}

type TechCategory = 'frontend' | 'backend' | 'cloud' | 'database' | 'tools';
```

### Service Model

```typescript
interface Service {
  id: string;
  slug: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  benefits: string[];
  technologies: Technology[];
  pricing?: {
    type: 'fixed' | 'hourly' | 'project';
    range?: string;
  };
  order: number;
}
```

### Blog Post Model

```typescript
interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string; // MDX content
  coverImage: {
    url: string;
    alt: string;
  };
  author: Author;
  publishedAt: Date;
  updatedAt?: Date;
  tags: string[];
  category: BlogCategory;
  readTime: number;
  featured: boolean;
  seo: SEOMetadata;
}

interface Author {
  name: string;
  avatar: string;
  bio: string;
  social: {
    twitter?: string;
    github?: string;
    linkedin?: string;
  };
}

type BlogCategory = 
  | 'tutorial'
  | 'case-study'
  | 'technology'
  | 'best-practices'
  | 'news';
```

### Contact Form Model

```typescript
interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  attachment?: {
    filename: string;
    size: number;
    mimeType: string;
  };
  source: 'contact-form' | 'quote-modal' | 'ai-assistant';
  metadata: {
    userAgent: string;
    referrer: string;
    timestamp: Date;
    ipAddress?: string;
  };
  status: 'pending' | 'processed' | 'spam';
  recaptchaScore?: number;
}
```

### AI Assistant Model

```typescript
interface ChatSession {
  id: string;
  messages: ChatMessage[];
  context: {
    currentPage: string;
    userIntent?: 'inquiry' | 'quote' | 'support';
    capturedData?: Partial<ContactFormData>;
  };
  startedAt: Date;
  lastActivity: Date;
}

interface ChatMessage {
  id: string;
  role: 'user' | 'assistant' | 'system';
  content: string;
  timestamp: Date;
  metadata?: {
    suggestedActions?: string[];
    relatedServices?: string[];
  };
}
```

### SEO Metadata Model

```typescript
interface SEOMetadata {
  title: string;
  description: string;
  keywords: string[];
  ogImage: string;
  ogType: 'website' | 'article';
  twitterCard: 'summary' | 'summary_large_image';
  canonicalUrl: string;
  structuredData?: Record<string, any>; // JSON-LD
}
```

## Correctness Properties

*A property is a characteristic or behavior that should hold true across all valid executions of a system-essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.*


### Property Reflection

Después de analizar todos los criterios de aceptación, he identificado las siguientes áreas de redundancia y consolidación:

**Redundancias identificadas:**
- Las propiedades 9.1, 9.2, 9.3 sobre responsive design pueden consolidarse en una sola propiedad sobre adaptación de viewport
- Las propiedades 12.1, 12.2, 12.3, 12.4, 12.5 sobre microinteracciones pueden agruparse por tipo de componente
- Las propiedades 3.2, 4.4, 12.1 sobre efectos hover se pueden consolidar en una propiedad general

**Propiedades consolidadas:**
- Responsive behavior: Una propiedad que valide adaptación para todos los tamaños de viewport
- Microinteracciones: Propiedades específicas por tipo de interacción (hover, scroll, input)
- Metadata SEO: Una propiedad que valide presencia de metadata en todas las páginas

### Core Properties

**Property 1: Viewport entrance animations**
*For any* component that enters the viewport, the system should apply entrance animations with appropriate timing and easing
**Validates: Requirements 1.5**

**Property 2: Timeline interaction handlers**
*For any* timeline event item, the system should have registered interaction handlers that trigger microinteractions
**Validates: Requirements 2.4**

**Property 3: Project grid completeness**
*For any* set of projects in the data source, all projects should be rendered in the portfolio grid
**Validates: Requirements 3.1**

**Property 4: Project card hover effects**
*For any* project card component, hover interactions should trigger visual effects (elevation, blur, or transform)
**Validates: Requirements 3.2**

**Property 5: Project navigation**
*For any* project in the portfolio, clicking the "Ver Detalles" button should navigate to that project's detail page with the correct slug
**Validates: Requirements 3.3**

**Property 6: Project detail completeness**
*For any* project detail page, it should render all required sections: mockups/screenshots, problem statement, solution description, technologies used, and results
**Validates: Requirements 3.4**

**Property 7: Project CTA presence**
*For any* project detail page, a call-to-action for requesting a similar project should be present and functional
**Validates: Requirements 3.5**

**Property 8: Service description completeness**
*For any* service in the services section, it should have a non-empty description field rendered
**Validates: Requirements 4.2**

**Property 9: Service card interactions**
*For any* service card, user interactions (hover, focus) should trigger visual microinteractions
**Validates: Requirements 4.4**

**Property 10: Form field real-time validation**
*For any* input field in the contact form, typing should trigger validation logic that updates the field's validation state
**Validates: Requirements 5.2**

**Property 11: Valid form submission success**
*For any* contact form submission with valid data (passing all validation rules), the system should process the submission and return a success response
**Validates: Requirements 5.3**

**Property 12: Invalid form submission errors**
*For any* contact form submission with invalid data, the system should return specific error messages for each invalid field
**Validates: Requirements 5.4**

**Property 13: FAQ response relevance**
*For any* frequently asked question submitted to the AI assistant, the system should return a response that contains relevant keywords from the question
**Validates: Requirements 6.2**

**Property 14: Service suggestion accuracy**
*For any* service inquiry to the AI assistant, the system should suggest services whose descriptions or keywords match the inquiry terms
**Validates: Requirements 6.3**

**Property 15: Blog search filtering**
*For any* search term entered in the blog search, all returned results should have titles, excerpts, or content that contain the search term
**Validates: Requirements 7.2**

**Property 16: Blog post navigation**
*For any* blog post card, clicking should navigate to the full article page with the correct slug
**Validates: Requirements 7.3**

**Property 17: Image format optimization**
*For any* image loaded by the system, it should be served in an optimized format (WebP or AVIF) with appropriate fallbacks
**Validates: Requirements 8.1**

**Property 18: Lazy loading for off-viewport components**
*For any* animated component that is initially outside the viewport, lazy loading should be applied to defer rendering until needed
**Validates: Requirements 8.2**

**Property 19: Responsive layout adaptation**
*For any* viewport size (mobile: <768px, tablet: 768-1024px, desktop: >1024px), the layout should adapt appropriately with correct breakpoint styles applied
**Validates: Requirements 9.1, 9.2, 9.3**

**Property 20: Touch gesture responsiveness**
*For any* touch-enabled interactive element, touch gestures (tap, swipe) should trigger the appropriate event handlers
**Validates: Requirements 9.4**

**Property 21: Input sanitization**
*For any* user input received through forms, the system should sanitize the input to remove potentially malicious content before processing
**Validates: Requirements 10.1**

**Property 22: reCAPTCHA validation**
*For any* form submission attempt, the system should validate the submission with reCAPTCHA v3 and check the score threshold
**Validates: Requirements 10.2**

**Property 23: Spam detection and blocking**
*For any* form submission that matches spam patterns (excessive links, suspicious keywords, low reCAPTCHA score), the system should block the submission and log the attempt
**Validates: Requirements 10.4**

**Property 24: Page metadata completeness**
*For any* page in the application, it should include complete OpenGraph and Twitter Card metadata (title, description, image, type)
**Validates: Requirements 11.1**

**Property 25: Structured data presence**
*For any* page with structured content (blog posts, projects, services), JSON-LD structured data should be present in the page head
**Validates: Requirements 11.2**

**Property 26: Clean URL structure**
*For any* route in the application, the URL should follow a clean, descriptive pattern without query parameters for core navigation
**Validates: Requirements 11.3**

**Property 27: Image alt text presence**
*For any* image element rendered by the system, it should have a non-empty alt attribute for accessibility
**Validates: Requirements 11.5**

**Property 28: Card hover effects**
*For any* card component (project, service, blog), hovering should apply visual effects (rotation, blur, elevation, or glow)
**Validates: Requirements 12.1**

**Property 29: Content loading transitions**
*For any* new content loaded dynamically, the system should apply smooth fade and scale transitions
**Validates: Requirements 12.2**

**Property 30: Button interaction effects**
*For any* button component, user interactions should trigger visual effects (ripple, glow, or scale)
**Validates: Requirements 12.3**

**Property 31: Scroll-triggered icon animations**
*For any* icon element that enters the viewport during scroll, an animation should be triggered
**Validates: Requirements 12.4**

**Property 32: Form input visual feedback**
*For any* form input field, typing or focusing should trigger visual feedback (border color, label animation, or glow)
**Validates: Requirements 12.5**

**Property 33: Theme preference detection**
*For any* user system theme preference (light or dark), the application should detect and apply the matching theme on initial load
**Validates: Requirements 13.1**

**Property 34: Contrast ratio compliance**
*For any* text element in dark mode, the contrast ratio between text and background should meet WCAG AA standards (minimum 4.5:1 for normal text)
**Validates: Requirements 13.3**

**Property 35: SPA navigation without reload**
*For any* navigation action between sections or pages, the page should not perform a full reload (no browser refresh)
**Validates: Requirements 14.1**

**Property 36: Application state persistence**
*For any* page transition, application state (theme, scroll position, form data) should persist appropriately
**Validates: Requirements 14.2**

**Property 37: Browser history management**
*For any* browser navigation action (back, forward), the application should correctly update the displayed content and URL
**Validates: Requirements 14.3**

## Error Handling

### Client-Side Error Handling

**Form Validation Errors:**
- Display inline error messages below each invalid field
- Highlight invalid fields with red border and error icon
- Prevent form submission until all validations pass
- Show summary of errors at form level for accessibility

**Network Errors:**
- Display user-friendly error messages for failed API calls
- Implement retry logic with exponential backoff
- Show loading states during retries
- Provide fallback content when data fetching fails

**404 Not Found:**
- Custom 404 page with navigation back to home
- Suggest related content or popular pages
- Maintain site navigation and branding

**JavaScript Errors:**
- Implement error boundaries in React components
- Log errors to monitoring service (e.g., Sentry)
- Display graceful fallback UI
- Prevent entire app crash from component errors

### Server-Side Error Handling

**API Route Errors:**
```typescript
interface APIError {
  code: string;
  message: string;
  details?: Record<string, any>;
  statusCode: number;
}
```

**Error Response Format:**
```typescript
{
  success: false,
  error: {
    code: 'VALIDATION_ERROR',
    message: 'Invalid form data',
    details: {
      email: 'Invalid email format',
      message: 'Message is required'
    }
  }
}
```

**Error Categories:**
- `VALIDATION_ERROR` (400): Invalid input data
- `AUTHENTICATION_ERROR` (401): Missing or invalid authentication
- `RATE_LIMIT_ERROR` (429): Too many requests
- `SERVER_ERROR` (500): Internal server error
- `SERVICE_UNAVAILABLE` (503): External service failure

**Error Handling Strategy:**
- Validate all inputs with Zod schemas
- Sanitize user inputs to prevent XSS
- Log errors with context for debugging
- Return appropriate HTTP status codes
- Never expose sensitive information in error messages

### Third-Party Service Failures

**Email Service Failure:**
- Queue failed emails for retry
- Log failure for manual follow-up
- Show user confirmation but flag for review
- Implement fallback notification method

**CMS Service Failure:**
- Serve cached content when CMS is unavailable
- Display stale data with timestamp
- Implement ISR (Incremental Static Regeneration) for resilience
- Show maintenance message if cache is empty

**reCAPTCHA Failure:**
- Allow form submission with manual review flag
- Log suspicious submissions
- Implement rate limiting as backup
- Alert admin of reCAPTCHA service issues

## Testing Strategy

### Unit Testing

**Framework:** Vitest with React Testing Library

**Coverage Areas:**
- Component rendering and props
- User interaction handlers (clicks, inputs, hovers)
- Form validation logic
- Data transformation utilities
- API route handlers
- Error boundary behavior

**Example Unit Tests:**
- ContactForm renders all required fields
- Button component applies correct variant styles
- Form validation rejects invalid email formats
- ProjectCard displays all project information
- Navigation component highlights active route
- Theme toggle switches between light and dark modes

**Testing Utilities:**
- Mock API responses with MSW (Mock Service Worker)
- Mock intersection observer for animation tests
- Mock window.matchMedia for responsive tests
- Custom render function with providers (theme, router)

### Property-Based Testing

**Framework:** fast-check (JavaScript/TypeScript property-based testing library)

**Configuration:**
- Minimum 100 iterations per property test
- Seed-based reproducibility for failed tests
- Shrinking to find minimal failing examples
- Timeout of 5000ms per property

**Property Test Tagging:**
Each property-based test MUST include a comment with this format:
```typescript
// Feature: legosoft-portfolio, Property X: [property description]
```

**Core Properties to Test:**

1. **Form Validation Properties:**
   - Property 10, 11, 12: Generate random form data (valid and invalid) and verify validation behavior
   - Property 21: Generate strings with potential XSS payloads and verify sanitization

2. **Navigation Properties:**
   - Property 5, 16: Generate random project/blog slugs and verify navigation
   - Property 35, 37: Test navigation sequences and verify SPA behavior

3. **Responsive Design Properties:**
   - Property 19: Generate random viewport sizes and verify layout adaptation
   - Property 20: Generate touch event sequences and verify responses

4. **SEO Properties:**
   - Property 24, 25, 27: Generate random page data and verify metadata presence
   - Property 26: Generate route paths and verify URL structure

5. **Accessibility Properties:**
   - Property 34: Generate color combinations and verify contrast ratios
   - Property 27: Generate image data and verify alt text presence

6. **Data Completeness Properties:**
   - Property 3, 6, 8: Generate random data sets and verify all items are rendered
   - Property 7: Generate project data and verify CTA presence

**Generator Strategies:**
- Use domain-specific generators (valid emails, URLs, names)
- Constrain generators to realistic input ranges
- Include edge cases (empty strings, very long strings, special characters)
- Generate structured data matching TypeScript interfaces

### Integration Testing

**Framework:** Playwright for E2E testing

**Test Scenarios:**
- Complete user journey: Home → Portfolio → Project Detail → Contact
- Form submission flow with validation errors and success
- Blog search and article reading flow
- AI Assistant interaction and lead capture
- Theme switching and persistence
- Mobile navigation and interactions

**Performance Testing:**
- Lighthouse CI in GitHub Actions
- Core Web Vitals monitoring (LCP, FID, CLS)
- Bundle size tracking
- Image optimization verification

### Visual Regression Testing

**Framework:** Percy or Chromatic

**Coverage:**
- All major page layouts
- Component states (hover, focus, error)
- Responsive breakpoints
- Theme variations (light/dark)
- Animation keyframes

## Performance Optimization

### Code Splitting

- Route-based code splitting with Next.js dynamic imports
- Component-level splitting for heavy components (Three.js, Lottie)
- Lazy load below-the-fold content
- Preload critical resources

### Image Optimization

- Next.js Image component with automatic optimization
- Responsive images with srcset
- WebP/AVIF with fallbacks
- Lazy loading with blur placeholder
- CDN delivery (Vercel Image Optimization)

### Font Optimization

- Self-host fonts to avoid external requests
- Font subsetting for used characters
- Font-display: swap for faster rendering
- Preload critical fonts

### Caching Strategy

- Static assets: Cache-Control: public, max-age=31536000, immutable
- API routes: Cache-Control: public, s-maxage=60, stale-while-revalidate
- ISR for blog posts and projects (revalidate: 3600)
- Client-side caching with SWR or React Query

### Bundle Optimization

- Tree shaking unused code
- Minification and compression (Brotli)
- Remove console.logs in production
- Analyze bundle with @next/bundle-analyzer
- Target modern browsers to reduce polyfills

## Deployment Strategy

### Hosting Platform

**Vercel** (recommended for Next.js)
- Automatic deployments from Git
- Preview deployments for PRs
- Edge network for global performance
- Built-in analytics and monitoring
- Zero-config setup

### Environment Configuration

**Environment Variables:**
```
# Public (exposed to browser)
NEXT_PUBLIC_SITE_URL=https://legosoftdev.com
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=xxx
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Private (server-only)
RECAPTCHA_SECRET_KEY=xxx
EMAIL_HOST=smtp.gmail.com
EMAIL_USER=contact@legosoftdev.com
EMAIL_PASSWORD=xxx
SANITY_API_TOKEN=xxx
SANITY_PROJECT_ID=xxx
SANITY_DATASET=production
```

### CI/CD Pipeline

**GitHub Actions Workflow:**
1. Run linting (ESLint, Prettier)
2. Run type checking (TypeScript)
3. Run unit tests (Vitest)
4. Run property-based tests (fast-check)
5. Build production bundle
6. Run Lighthouse CI
7. Deploy to Vercel (automatic)

### Monitoring and Analytics

**Performance Monitoring:**
- Vercel Analytics for Core Web Vitals
- Real User Monitoring (RUM)
- Error tracking with Sentry

**User Analytics:**
- Google Analytics 4 for user behavior
- Event tracking for key interactions (CTA clicks, form submissions)
- Conversion funnel analysis

**Uptime Monitoring:**
- Vercel built-in monitoring
- External uptime checker (UptimeRobot)
- Alert notifications for downtime

## Security Considerations

### Input Validation and Sanitization

- Validate all inputs with Zod schemas on both client and server
- Sanitize HTML content with DOMPurify
- Escape user-generated content before rendering
- Implement rate limiting on API routes

### Authentication and Authorization

- No user authentication required for public portfolio
- Admin access for CMS (handled by Sanity/Contentful)
- API route protection with secret tokens for sensitive operations

### Content Security Policy

```typescript
// next.config.js
const securityHeaders = [
  {
    key: 'Content-Security-Policy',
    value: `
      default-src 'self';
      script-src 'self' 'unsafe-eval' 'unsafe-inline' *.google.com *.gstatic.com;
      style-src 'self' 'unsafe-inline';
      img-src 'self' data: blob: *.sanity.io;
      font-src 'self' data:;
      connect-src 'self' *.google-analytics.com *.sanity.io;
      frame-src 'self' *.google.com;
    `.replace(/\s{2,}/g, ' ').trim()
  },
  {
    key: 'X-Frame-Options',
    value: 'DENY'
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  },
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin'
  },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=()'
  }
];
```

### HTTPS and SSL

- Enforce HTTPS for all connections
- HSTS header to prevent downgrade attacks
- Automatic SSL certificate management via Vercel

### Dependency Security

- Regular dependency updates with Dependabot
- Audit dependencies with `npm audit`
- Use lock files to ensure consistent versions
- Review security advisories for critical packages

## Accessibility

### WCAG 2.1 AA Compliance

**Keyboard Navigation:**
- All interactive elements accessible via keyboard
- Visible focus indicators
- Logical tab order
- Skip to main content link

**Screen Reader Support:**
- Semantic HTML elements
- ARIA labels for interactive components
- Alt text for all images
- Descriptive link text

**Color and Contrast:**
- Minimum 4.5:1 contrast ratio for normal text
- Minimum 3:1 contrast ratio for large text
- Don't rely solely on color to convey information
- Test with color blindness simulators

**Responsive and Zoom:**
- Support 200% zoom without horizontal scroll
- Responsive text sizing (rem units)
- Touch targets minimum 44x44px
- No fixed viewport that prevents zooming

### Testing Tools

- axe DevTools for automated accessibility testing
- NVDA/JAWS screen reader testing
- Keyboard-only navigation testing
- Lighthouse accessibility audit

## Internationalization (Future Consideration)

While not in initial scope, the architecture should support future i18n:

- Use Next.js i18n routing
- Externalize all strings to translation files
- Support RTL languages in CSS
- Date/time formatting with locale awareness
- Number and currency formatting

## Content Management

### CMS Integration (Sanity.io)

**Schema Design:**
```typescript
// Project schema
{
  name: 'project',
  type: 'document',
  fields: [
    { name: 'title', type: 'string' },
    { name: 'slug', type: 'slug' },
    { name: 'shortDescription', type: 'text' },
    { name: 'fullDescription', type: 'blockContent' },
    { name: 'thumbnail', type: 'image' },
    { name: 'images', type: 'array', of: [{ type: 'image' }] },
    { name: 'technologies', type: 'array', of: [{ type: 'reference', to: [{ type: 'technology' }] }] },
    { name: 'category', type: 'string' },
    { name: 'featured', type: 'boolean' },
    { name: 'problem', type: 'blockContent' },
    { name: 'solution', type: 'blockContent' },
    { name: 'results', type: 'array', of: [{ type: 'string' }] },
    { name: 'liveUrl', type: 'url' },
    { name: 'githubUrl', type: 'url' },
    { name: 'publishedAt', type: 'datetime' },
    { name: 'order', type: 'number' }
  ]
}
```

**Content Fetching:**
- Use GROQ queries for flexible data fetching
- Implement ISR for automatic content updates
- Cache responses with appropriate revalidation
- Preview mode for draft content

### Static Content

- Store in `/content` directory as MDX files
- Version control with Git
- Easy editing without CMS overhead
- Compile-time validation

## Development Workflow

### Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Run tests
npm run test
npm run test:watch

# Run property-based tests
npm run test:properties

# Type checking
npm run type-check

# Linting
npm run lint
npm run lint:fix

# Build for production
npm run build

# Start production server
npm run start
```

### Code Quality

**ESLint Configuration:**
- Next.js recommended rules
- React hooks rules
- TypeScript rules
- Accessibility rules (eslint-plugin-jsx-a11y)
- Import order rules

**Prettier Configuration:**
- Single quotes
- 2 space indentation
- Trailing commas
- Semicolons
- Line width: 100

**Git Hooks (Husky):**
- Pre-commit: Lint staged files
- Pre-commit: Type check
- Pre-push: Run tests
- Commit message: Conventional commits

### Documentation

- README with setup instructions
- Component documentation with Storybook (optional)
- API route documentation
- Deployment guide
- Content management guide

## Future Enhancements

### Phase 2 Features

- Advanced AI assistant with GPT integration
- Project filtering and search
- Client testimonials section
- Case study downloads (PDF)
- Newsletter subscription
- Dark/light mode toggle (manual override)

### Phase 3 Features

- Multi-language support (Spanish/English)
- Admin dashboard for content management
- Analytics dashboard
- A/B testing framework
- Progressive Web App (PWA) features
- Offline support

### Technical Debt Prevention

- Regular dependency updates
- Performance budget monitoring
- Accessibility audit schedule
- Security review process
- Code review guidelines
- Refactoring sprints
