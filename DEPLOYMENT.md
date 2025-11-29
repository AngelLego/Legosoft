# Guía de Despliegue en Vercel

## 📋 Requisitos Previos

- Cuenta en [Vercel](https://vercel.com)
- Repositorio en GitHub: `https://github.com/AngelLego/Legosoft`
- Node.js 18+ instalado localmente (para pruebas)

## 🚀 Pasos para Desplegar

### 1. Conectar con Vercel

1. Ve a [vercel.com](https://vercel.com) e inicia sesión
2. Click en **"Add New Project"** o **"Import Project"**
3. Selecciona **"Import Git Repository"**
4. Autoriza a Vercel para acceder a tu cuenta de GitHub
5. Selecciona el repositorio: `AngelLego/Legosoft`

### 2. Configurar el Proyecto

Vercel detectará automáticamente que es un proyecto Next.js. Verifica la configuración:

**Framework Preset:** Next.js
**Build Command:** `npm run build` (detectado automáticamente)
**Output Directory:** `.next` (detectado automáticamente)
**Install Command:** `npm install` (detectado automáticamente)
**Development Command:** `npm run dev`

### 3. Variables de Entorno (Opcional)

Si necesitas configurar variables de entorno, agrégalas en la sección **"Environment Variables"**:

```
NEXT_PUBLIC_SITE_URL=https://tu-dominio.vercel.app
```

**Nota:** Por ahora no necesitas configurar variables de entorno adicionales. El sitio funcionará sin ellas.

### 4. Desplegar

1. Click en **"Deploy"**
2. Vercel comenzará a construir tu proyecto
3. Espera 2-3 minutos mientras se completa el build
4. Una vez completado, recibirás una URL como: `https://legosoft.vercel.app`

## ✅ Verificación Post-Despliegue

Después del despliegue, verifica que todo funcione:

- ✅ Página principal: `https://tu-dominio.vercel.app`
- ✅ Página About: `https://tu-dominio.vercel.app/about`
- ✅ Página Portfolio: `https://tu-dominio.vercel.app/portfolio`
- ✅ Logo y favicon se muestran correctamente
- ✅ Cambio de idioma funciona (ES/EN)
- ✅ Enlaces de contacto funcionan (teléfono y email)
- ✅ Enlaces a proyectos externos funcionan

## 🔄 Despliegues Automáticos

Vercel está configurado para despliegues automáticos:

- **Push a `main`**: Despliega automáticamente a producción
- **Pull Requests**: Crea preview deployments automáticos
- **Branches**: Cada branch tiene su propia URL de preview

## 🌐 Dominio Personalizado (Opcional)

Si quieres usar un dominio personalizado:

1. Ve a tu proyecto en Vercel
2. Click en **"Settings"** → **"Domains"**
3. Agrega tu dominio personalizado
4. Sigue las instrucciones para configurar los DNS

Dominios sugeridos:
- `legosoftdev.com`
- `legosoft.dev`
- `legosoftdev.mx`

## 📊 Monitoreo y Analytics

Vercel incluye analytics automáticos:

- **Speed Insights**: Rendimiento de la página
- **Web Vitals**: Core Web Vitals
- **Real User Monitoring**: Experiencia real de usuarios

Accede desde: Dashboard → Tu Proyecto → Analytics

## 🐛 Solución de Problemas

### Error: "Build Failed"

1. Verifica que el build funcione localmente:
   ```bash
   npm run build
   ```

2. Revisa los logs en Vercel para ver el error específico

### Error: "Module not found"

1. Asegúrate de que todas las dependencias estén en `package.json`
2. Verifica que no haya imports con rutas incorrectas

### Imágenes no se cargan

1. Verifica que las imágenes estén en la carpeta `public/`
2. Usa rutas relativas: `/images/logo.png`

## 📝 Notas Importantes

- **Build Time**: ~2-3 minutos
- **Región**: US East (iad1) - configurado en `vercel.json`
- **Node Version**: 18.x (detectado automáticamente)
- **Framework**: Next.js 13.5.6

## 🔗 Enlaces Útiles

- [Documentación de Vercel](https://vercel.com/docs)
- [Next.js en Vercel](https://vercel.com/docs/frameworks/nextjs)
- [Variables de Entorno](https://vercel.com/docs/environment-variables)
- [Dominios Personalizados](https://vercel.com/docs/custom-domains)

## 📞 Soporte

Si tienes problemas con el despliegue:
- Revisa los logs en el dashboard de Vercel
- Consulta la documentación oficial
- Verifica que el proyecto funcione localmente primero
