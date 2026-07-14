# Colegio Miguel Hidalgo

Sitio institucional del Colegio Miguel Hidalgo construido con Next.js, React y TypeScript.

## Scripts

```bash
npm run dev
npm run lint
npm run build
```

En este entorno de Windows, si el wrapper de PowerShell de npm falla, usa:

```bash
cmd /c npm.cmd run build
```

## Estructura

```text
app/                         Rutas de Next.js App Router
components/
  calendar/                  Calendario, filtros, vistas y agenda
  history/                   Pagina y bloques de historia
  home/                      Secciones de inicio
  institution/               Secciones de Quienes somos
  layout/                    Header, navegacion y footer
config/                      Configuracion estable del sitio y navegacion
data/
  confirmed/                 Datos validados
  demo/                      Datos de ejemplo
  draft/                     Datos pendientes de validacion
public/
  brand/                     Escudo y marca institucional
  documents/                 Documentos publicos
  images/                    Imagenes por categoria
types/                       Tipos compartidos por dominio
```

## Datos

- `config/site.ts`: nombre, lema y datos estables del sitio.
- `config/navigation.ts`: navegacion principal y anclas institucionales.
- `data/confirmed/contact.ts`: contacto y redes.
- `data/confirmed/institution.ts`: mision, vision, valores, himno, escudo y organigrama.
- `data/confirmed/education-levels.ts`: niveles educativos.
- `data/confirmed/events.ts`: eventos del calendario.
- `data/draft/timeline.ts`: linea de tiempo pendiente de validar.
- `data/demo/news.ts`: noticias de demostracion.

## Assets

El escudo institucional vive en `public/brand/` como:

- `shield.webp`
- `shield.png`

## Notas para agentes

Antes de modificar codigo de Next.js, leer `AGENTS.md` y la guia local en `node_modules/next/dist/docs/`.
