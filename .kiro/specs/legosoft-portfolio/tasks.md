# Implementation Plan - Legosoft Portfolio

- [x] 1. Configurar proyecto Next.js y estructura base



  - Inicializar proyecto Next.js 14 con App Router y TypeScript
  - Configurar Tailwind CSS con tema personalizado (colores, fuentes, espaciado)
  - Instalar dependencias principales: Framer Motion, Zod, React Hook Form
  - Configurar ESLint, Prettier y Husky para git hooks
  - Crear estructura de carpetas: /app, /components, /lib, /types, /content
  - Configurar variables de entorno (.env.local y .env.example)




  - _Requirements: 8.1, 8.2, 8.3, 8.4, 8.5_

- [ ] 2. Implementar sistema de diseño y componentes base
  - [ ] 2.1 Crear componentes UI fundamentales
    - Implementar componente Button con variantes (primary, secondary, ghost, outline)
    - Implementar componente Card con variantes (elevated, outlined, glass)
    - Implementar componente Input con validación visual
    - Crear sistema de tipografía (headings, body, code)
    - Implementar componente Container para layouts consistentes
    - _Requirements: 12.3, 12.5_
  
  - [ ] 2.2 Escribir property test para componentes Button
    - **Property 30: Button interaction effects**
    - **Validates: Requirements 12.3**
  
  - [ ] 2.3 Implementar tema y modo oscuro
    - Configurar ThemeProvider con detección automática de preferencia del sistema
    - Implementar variables CSS para colores en ambos temas
    - Crear hook useTheme para acceso al tema actual
    - Implementar transiciones suaves entre temas
    - _Requirements: 13.1, 13.2, 13.3_
  
  - [ ] 2.4 Escribir property test para tema
    - **Property 33: Theme preference detection**
    - **Validates: Requirements 13.1**
  
  - [ ] 2.5 Escribir property test para contraste
    - **Property 34: Contrast ratio compliance**
    - **Validates: Requirements 13.3**

- [ ] 3. Implementar layout principal y navegación
  - [ ] 3.1 Crear RootLayout con metadata SEO
    - Implementar layout raíz con providers (Theme, Analytics)
    - Configurar metadata base para SEO (title, description, OpenGraph)
    - Implementar fuentes personalizadas (Poppins, Inter, JetBrains Mono)
    - Configurar viewport y manifest para PWA futuro
    - _Requirements: 11.1, 11.2_
  
  - [ ] 3.2 Implementar componente Navigation
    - Crear barra de navegación sticky con animación al scroll
    - Implementar indicador de sección activa
    - Crear menú hamburguesa responsive para móvil
    - Añadir animaciones de entrada y transiciones
    - _Requirements: 9.1, 9.2, 9.3, 14.1_
  
  - [ ] 3.3 Escribir property test para navegación SPA
    - **Property 35: SPA navigation without reload**
    - **Validates: Requirements 14.1**
  
  - [ ] 3.4 Implementar componente Footer
    - Crear footer con links de navegación
    - Añadir iconos de redes sociales con animaciones
    - Implementar información de contacto
    - Añadir copyright y créditos
    - _Requirements: 5.5_
  
  - [ ] 3.5 Escribir property test para historial del navegador
    - **Property 37: Browser history management**
    - **Validates: Requirements 14.3**

- [ ] 4. Implementar Hero Section y página de inicio
  - [ ] 4.1 Crear HeroSection con animaciones
    - Implementar hero con gradiente animado de fondo
    - Crear efecto typewriter para título principal
    - Añadir subtítulo con fade-in
    - Implementar botón CTA con microinteracción
    - Añadir scroll indicator animado
    - _Requirements: 1.1, 1.2, 1.3, 1.4_
  
  - [ ] 4.2 Implementar AnimatedBackground (opcional)
    - Crear canvas con partículas o gradientes animados
    - Implementar respuesta a movimiento del mouse
    - Optimizar rendimiento con requestAnimationFrame
    - Añadir fallback para dispositivos de bajo rendimiento
    - _Requirements: 1.1, 8.2_
  
  - [ ] 4.3 Crear AnimatedSection wrapper
    - Implementar Intersection Observer para detectar viewport
    - Crear animaciones de entrada (fade, slide, scale, blur)
    - Añadir delays escalonados para múltiples elementos
    - Optimizar con lazy loading
    - _Requirements: 1.5_
  
  - [ ] 4.4 Escribir property test para animaciones de viewport
    - **Property 1: Viewport entrance animations**
    - **Validates: Requirements 1.5**

- [ ] 5. Implementar sección "Sobre Legosoft Dev"
  - [ ] 5.1 Crear AboutSection con contenido
    - Implementar sección con historia de la empresa
    - Añadir filosofía de desarrollo con iconos
    - Crear diseño responsive para móvil/desktop
    - Añadir animaciones de entrada
    - _Requirements: 2.1, 2.2_
  
  - [ ] 5.2 Implementar TechStack con logos animados
    - Crear grid de tecnologías con logos
    - Implementar animaciones al hover (rotación, escala)
    - Añadir tooltips con nombres de tecnologías
    - Agrupar por categorías (frontend, backend, cloud, tools)
    - _Requirements: 2.3_
  
  - [ ] 5.3 Crear Timeline interactiva
    - Implementar línea de tiempo vertical con eventos
    - Añadir microinteracciones al hover en cada hito
    - Crear versión horizontal para móvil
    - Implementar animación al scroll
    - _Requirements: 2.4_
  
  - [ ] 5.4 Escribir property test para timeline
    - **Property 2: Timeline interaction handlers**
    - **Validates: Requirements 2.4**

- [ ] 6. Definir modelos de datos y tipos TypeScript
  - [ ] 6.1 Crear interfaces para Project
    - Definir tipo Project con todos los campos
    - Crear tipo ProjectCategory
    - Definir tipo Technology
    - Crear schemas Zod para validación
    - _Requirements: 3.1, 3.4_
  
  - [ ] 6.2 Crear interfaces para Service
    - Definir tipo Service con campos completos
    - Crear schemas Zod para validación
    - _Requirements: 4.1, 4.2_
  
  - [ ] 6.3 Crear interfaces para BlogPost
    - Definir tipo BlogPost con metadata
    - Crear tipo Author
    - Definir tipo BlogCategory
    - Crear schemas Zod para validación
    - _Requirements: 7.1, 7.3_
  
  - [ ] 6.4 Crear interfaces para formularios
    - Definir tipo ContactFormData
    - Definir tipo QuoteFormData
    - Crear schemas Zod para validación de formularios
    - Definir tipos para errores de validación
    - _Requirements: 5.1, 5.2, 5.3, 5.4_

- [ ] 7. Implementar sección de portafolio
  - [ ] 7.1 Crear ProjectGrid con datos mock
    - Implementar grid responsivo (1-2-3 columnas)
    - Añadir animación stagger al cargar
    - Implementar lazy loading de imágenes
    - Crear datos mock de proyectos para desarrollo
    - _Requirements: 3.1_
  
  - [ ] 7.2 Escribir property test para completitud del grid
    - **Property 3: Project grid completeness**
    - **Validates: Requirements 3.1**
  
  - [ ] 7.3 Implementar ProjectCard con efectos
    - Crear tarjeta con imagen y overlay
    - Implementar efectos hover (elevación, blur, rotación)
    - Añadir título, descripción y tags de tecnologías
    - Implementar botón "Ver Detalles"
    - _Requirements: 3.2_
  
  - [ ] 7.4 Escribir property test para hover en cards
    - **Property 4: Project card hover effects**
    - **Validates: Requirements 3.2**
  
  - [ ] 7.5 Escribir property test para efectos hover generales
    - **Property 28: Card hover effects**
    - **Validates: Requirements 12.1**
  
  - [ ] 7.6 Crear página ProjectDetail
    - Implementar hero con mockup o screenshot
    - Crear secciones: Problema, Solución, Resultados
    - Añadir galería de imágenes
    - Implementar navegación prev/next entre proyectos
    - _Requirements: 3.3, 3.4_
  
  - [ ] 7.7 Escribir property test para navegación de proyectos
    - **Property 5: Project navigation**
    - **Validates: Requirements 3.3**
  
  - [ ] 7.8 Escribir property test para completitud de detalles
    - **Property 6: Project detail completeness**
    - **Validates: Requirements 3.4**
  
  - [ ] 7.9 Añadir CTA en página de proyecto
    - Implementar sección CTA al final del proyecto
    - Crear botón para solicitar proyecto similar
    - Añadir animación de entrada
    - _Requirements: 3.5_
  
  - [ ] 7.10 Escribir property test para presencia de CTA
    - **Property 7: Project CTA presence**
    - **Validates: Requirements 3.5**

- [ ] 8. Implementar sección de servicios
  - [ ] 8.1 Crear ServicesGrid con datos
    - Implementar grid de servicios con datos mock
    - Añadir animación stagger de entrada
    - Crear diseño responsive
    - _Requirements: 4.1_
  
  - [ ] 8.2 Implementar ServiceCard
    - Crear tarjeta con icono animado
    - Añadir título, descripción y características
    - Implementar microinteracciones al hover
    - Añadir botón "Cotizar"
    - _Requirements: 4.2, 4.4_
  
  - [ ] 8.3 Escribir property test para descripción de servicios
    - **Property 8: Service description completeness**
    - **Validates: Requirements 4.2**
  
  - [ ] 8.4 Escribir property test para interacciones de servicios
    - **Property 9: Service card interactions**
    - **Validates: Requirements 4.4**
  
  - [ ] 8.5 Crear QuoteModal
    - Implementar modal con backdrop blur
    - Crear formulario de cotización
    - Añadir validación en tiempo real
    - Implementar animaciones de apertura/cierre
    - _Requirements: 4.3_

- [ ] 9. Implementar sistema de validación de formularios
  - [ ] 9.1 Crear utilidades de validación
    - Implementar funciones de validación con Zod
    - Crear validadores personalizados (email, teléfono, URL)
    - Implementar sanitización de inputs
    - Crear helpers para mensajes de error
    - _Requirements: 5.2, 5.4, 10.1_
  
  - [ ] 9.2 Escribir property test para sanitización
    - **Property 21: Input sanitization**
    - **Validates: Requirements 10.1**
  
  - [ ] 9.3 Crear hook useFormValidation
    - Implementar hook para validación en tiempo real
    - Añadir debounce para validación mientras se escribe
    - Gestionar estado de errores por campo
    - Implementar lógica de submit
    - _Requirements: 5.2_
  
  - [ ] 9.4 Escribir property test para validación en tiempo real
    - **Property 10: Form field real-time validation**
    - **Validates: Requirements 5.2**

- [ ] 10. Implementar formulario de contacto
  - [ ] 10.1 Crear ContactForm
    - Implementar formulario con campos (nombre, email, asunto, mensaje)
    - Añadir validación visual en tiempo real
    - Implementar indicadores de error/éxito
    - Añadir botón de envío con loading state
    - _Requirements: 5.1, 5.2_
  
  - [ ] 10.2 Escribir property test para validación de campos
    - **Property 32: Form input visual feedback**
    - **Validates: Requirements 12.5**
  
  - [ ] 10.3 Crear API route para contacto
    - Implementar endpoint POST /api/contact
    - Añadir validación de datos con Zod
    - Implementar sanitización de inputs
    - Integrar reCAPTCHA v3 para validación
    - Implementar envío de email con Nodemailer
    - _Requirements: 5.3, 5.4, 10.1, 10.2_
  
  - [ ] 10.4 Escribir property test para envío válido
    - **Property 11: Valid form submission success**
    - **Validates: Requirements 5.3**
  
  - [ ] 10.5 Escribir property test para errores de validación
    - **Property 12: Invalid form submission errors**
    - **Validates: Requirements 5.4**
  
  - [ ] 10.6 Escribir property test para reCAPTCHA
    - **Property 22: reCAPTCHA validation**
    - **Validates: Requirements 10.2**
  
  - [ ] 10.7 Implementar detección de spam
    - Crear función para detectar patrones de spam
    - Implementar verificación de score de reCAPTCHA
    - Añadir logging de intentos sospechosos
    - Implementar rate limiting
    - _Requirements: 10.4_
  
  - [ ] 10.8 Escribir property test para detección de spam
    - **Property 23: Spam detection and blocking**
    - **Validates: Requirements 10.4**
  
  - [ ] 10.9 Crear ContactInfo
    - Implementar tarjetas con información de contacto
    - Añadir links directos (WhatsApp, Email, GitHub, LinkedIn)
    - Implementar iconos animados
    - Añadir efectos hover
    - _Requirements: 5.5_

- [ ] 11. Implementar AI Assistant (chat básico)
  - [ ] 11.1 Crear componente AIAssistant
    - Implementar widget flotante con botón de apertura
    - Crear interfaz de chat con mensajes
    - Añadir animación de typing
    - Implementar scroll automático a último mensaje
    - _Requirements: 6.1_
  
  - [ ] 11.2 Crear sistema de respuestas FAQ
    - Implementar base de datos de preguntas frecuentes
    - Crear función de matching de keywords
    - Implementar respuestas predefinidas
    - Añadir sugerencias de servicios
    - _Requirements: 6.2, 6.3_
  
  - [ ] 11.3 Escribir property test para respuestas FAQ
    - **Property 13: FAQ response relevance**
    - **Validates: Requirements 6.2**
  
  - [ ] 11.4 Escribir property test para sugerencias de servicios
    - **Property 14: Service suggestion accuracy**
    - **Validates: Requirements 6.3**
  
  - [ ] 11.5 Implementar captura de leads
    - Crear flujo para capturar datos de contacto
    - Implementar formulario inline en chat
    - Guardar conversación con contexto
    - _Requirements: 6.4_

- [ ] 12. Implementar sección de blog
  - [ ] 12.1 Crear BlogGrid
    - Implementar grid de artículos con datos mock
    - Añadir diseño de tarjetas limpias
    - Crear paginación o infinite scroll
    - Implementar diseño responsive
    - _Requirements: 7.1_
  
  - [ ] 12.2 Implementar BlogCard
    - Crear tarjeta con imagen destacada
    - Añadir título, excerpt y metadata
    - Implementar tags de categorías
    - Añadir link a artículo completo
    - _Requirements: 7.1_
  
  - [ ] 12.3 Crear SearchBar para blog
    - Implementar input con debounce
    - Crear función de filtrado por término
    - Añadir sugerencias en tiempo real
    - Implementar filtros por tags
    - _Requirements: 7.2_
  
  - [ ] 12.4 Escribir property test para búsqueda
    - **Property 15: Blog search filtering**
    - **Validates: Requirements 7.2**
  
  - [ ] 12.5 Crear página BlogPost
    - Implementar hero con imagen
    - Renderizar contenido MDX
    - Añadir table of contents
    - Implementar botones de compartir
    - Añadir sección de posts relacionados
    - _Requirements: 7.3_
  
  - [ ] 12.6 Escribir property test para navegación de blog
    - **Property 16: Blog post navigation**
    - **Validates: Requirements 7.3**

- [ ] 13. Implementar optimizaciones de rendimiento
  - [ ] 13.1 Configurar optimización de imágenes
    - Configurar Next.js Image component
    - Implementar conversión automática a WebP/AVIF
    - Añadir placeholders blur
    - Configurar lazy loading
    - _Requirements: 8.1_
  
  - [ ] 13.2 Escribir property test para formatos de imagen
    - **Property 17: Image format optimization**
    - **Validates: Requirements 8.1**
  
  - [ ] 13.3 Implementar lazy loading de componentes
    - Usar dynamic imports para componentes pesados
    - Implementar lazy loading para componentes fuera de viewport
    - Añadir loading skeletons
    - Optimizar bundle splitting
    - _Requirements: 8.2_
  
  - [ ] 13.4 Escribir property test para lazy loading
    - **Property 18: Lazy loading for off-viewport components**
    - **Validates: Requirements 8.2**
  
  - [ ] 13.5 Configurar caché y revalidación
    - Implementar ISR para contenido dinámico
    - Configurar cache headers apropiados
    - Añadir SWR para client-side caching
    - _Requirements: 8.3, 8.4, 8.5_

- [ ] 14. Implementar responsive design completo
  - [ ] 14.1 Crear breakpoints y utilidades responsive
    - Configurar breakpoints en Tailwind (mobile, tablet, desktop)
    - Crear hooks useMediaQuery y useBreakpoint
    - Implementar utilidades para detección de dispositivo
    - _Requirements: 9.1, 9.2, 9.3_
  
  - [ ] 14.2 Escribir property test para responsive
    - **Property 19: Responsive layout adaptation**
    - **Validates: Requirements 9.1, 9.2, 9.3**
  
  - [ ] 14.3 Implementar soporte táctil
    - Añadir event handlers para touch
    - Implementar gestos (swipe, pinch)
    - Optimizar tamaños de touch targets (min 44x44px)
    - Añadir feedback visual para interacciones táctiles
    - _Requirements: 9.4_
  
  - [ ] 14.4 Escribir property test para gestos táctiles
    - **Property 20: Touch gesture responsiveness**
    - **Validates: Requirements 9.4**

- [ ] 15. Implementar SEO completo
  - [ ] 15.1 Crear componente SEO
    - Implementar componente para metadata dinámica
    - Añadir soporte para OpenGraph
    - Implementar Twitter Cards
    - Crear función para generar JSON-LD
    - _Requirements: 11.1, 11.2_
  
  - [ ] 15.2 Escribir property test para metadata
    - **Property 24: Page metadata completeness**
    - **Validates: Requirements 11.1**
  
  - [ ] 15.3 Escribir property test para structured data
    - **Property 25: Structured data presence**
    - **Validates: Requirements 11.2**
  
  - [ ] 15.4 Configurar URLs y routing
    - Implementar URLs limpias para todas las rutas
    - Crear redirects para URLs antiguas si aplica
    - Configurar canonical URLs
    - _Requirements: 11.3_
  
  - [ ] 15.5 Escribir property test para estructura de URLs
    - **Property 26: Clean URL structure**
    - **Validates: Requirements 11.3**
  
  - [ ] 15.6 Generar sitemap y robots.txt
    - Crear script para generar sitemap.xml dinámico
    - Configurar robots.txt con reglas apropiadas
    - Añadir sitemap a Google Search Console
    - _Requirements: 11.4_
  
  - [ ] 15.7 Implementar alt text para imágenes
    - Asegurar que todas las imágenes tengan alt text
    - Crear utilidad para generar alt text descriptivo
    - Validar presencia de alt en build time
    - _Requirements: 11.5_
  
  - [ ] 15.8 Escribir property test para alt text
    - **Property 27: Image alt text presence**
    - **Validates: Requirements 11.5**

- [ ] 16. Implementar microinteracciones finales
  - [ ] 16.1 Añadir efectos de carga de contenido
    - Implementar transiciones fade y scale para contenido nuevo
    - Añadir loading skeletons
    - Crear animaciones de entrada suaves
    - _Requirements: 12.2_
  
  - [ ] 16.2 Escribir property test para transiciones
    - **Property 29: Content loading transitions**
    - **Validates: Requirements 12.2**
  
  - [ ] 16.3 Implementar animaciones de scroll
    - Crear animaciones para iconos al entrar en viewport
    - Añadir parallax sutil en hero
    - Implementar progress bar de lectura para blog
    - _Requirements: 12.4_
  
  - [ ] 16.4 Escribir property test para animaciones de scroll
    - **Property 31: Scroll-triggered icon animations**
    - **Validates: Requirements 12.4**

- [ ] 17. Implementar persistencia de estado
  - [ ] 17.1 Crear sistema de persistencia
    - Implementar localStorage para tema
    - Guardar preferencias de usuario
    - Implementar recuperación de estado al recargar
    - _Requirements: 14.2_
  
  - [ ] 17.2 Escribir property test para persistencia
    - **Property 36: Application state persistence**
    - **Validates: Requirements 14.2**

- [ ] 18. Configurar seguridad y headers
  - [ ] 18.1 Configurar security headers
    - Implementar Content Security Policy
    - Añadir X-Frame-Options, X-Content-Type-Options
    - Configurar Referrer-Policy
    - Añadir Permissions-Policy
    - _Requirements: 10.3_
  
  - [ ] 18.2 Configurar HTTPS y SSL
    - Verificar configuración HTTPS en Vercel
    - Añadir HSTS header
    - Configurar redirects HTTP a HTTPS
    - _Requirements: 10.3_

- [ ] 19. Implementar analytics y monitoring
  - [ ] 19.1 Integrar Google Analytics 4
    - Configurar GA4 con Next.js
    - Implementar event tracking para CTAs
    - Añadir tracking de conversiones
    - Configurar goals y funnels
    - _Requirements: 8.3, 8.4, 8.5_
  
  - [ ] 19.2 Configurar Vercel Analytics
    - Habilitar Vercel Analytics
    - Configurar Web Vitals tracking
    - Implementar custom metrics
    - _Requirements: 8.3, 8.4, 8.5_

- [ ] 20. Testing y validación final
  - [ ] 20.1 Ejecutar suite completa de property tests
    - Ejecutar todos los property tests con 100+ iteraciones
    - Verificar que todos los tests pasen
    - Documentar cualquier edge case encontrado
    - _Requirements: Todos_
  
  - [ ] 20.2 Ejecutar tests de integración E2E
    - Crear tests E2E con Playwright para flujos principales
    - Test: Home → Portfolio → Project Detail → Contact
    - Test: Form submission con validación
    - Test: Blog search y lectura
    - Test: AI Assistant interaction
    - Test: Theme switching
    - _Requirements: Todos_
  
  - [ ] 20.3 Ejecutar auditoría Lighthouse
    - Ejecutar Lighthouse en todas las páginas principales
    - Verificar Performance > 90
    - Verificar SEO > 90
    - Verificar Best Practices > 95
    - Verificar Accessibility > 90
    - Documentar y resolver issues
    - _Requirements: 8.3, 8.4, 8.5_
  
  - [ ] 20.4 Validar accesibilidad
    - Ejecutar axe DevTools en todas las páginas
    - Test de navegación solo con teclado
    - Test con screen reader (NVDA)
    - Verificar contraste de colores
    - Validar ARIA labels
    - _Requirements: 13.3, 11.5_

- [ ] 21. Checkpoint final - Asegurar que todos los tests pasen
  - Ejecutar suite completa de tests (unit + property + E2E)
  - Verificar que no hay errores de TypeScript
  - Validar que no hay warnings de ESLint
  - Confirmar que Lighthouse scores cumplen requisitos
  - Preguntar al usuario si surgen dudas o issues

- [ ] 22. Preparar para deployment
  - [ ] 22.1 Configurar variables de entorno
    - Documentar todas las variables necesarias
    - Configurar variables en Vercel
    - Crear .env.example actualizado
    - _Requirements: 10.2, 10.3_
  
  - [ ] 22.2 Optimizar build de producción
    - Ejecutar build de producción localmente
    - Analizar bundle size con @next/bundle-analyzer
    - Optimizar imports y tree shaking
    - Verificar que no hay errores de build
    - _Requirements: 8.3, 8.4, 8.5_
  
  - [ ] 22.3 Crear documentación
    - Escribir README con instrucciones de setup
    - Documentar estructura del proyecto
    - Crear guía de deployment
    - Documentar API routes y endpoints
    - Crear guía de gestión de contenido
    - _Requirements: Todos_

- [ ] 23. Deploy inicial a Vercel
  - Conectar repositorio a Vercel
  - Configurar dominio personalizado
  - Verificar deployment exitoso
  - Ejecutar smoke tests en producción
  - Configurar monitoring y alertas
  - _Requirements: Todos_
