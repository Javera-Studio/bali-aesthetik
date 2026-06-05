import { readFileSync, writeFileSync, readdirSync, statSync } from 'fs'

const assetsDir = 'dist/client/assets'
const files = readdirSync(assetsDir)

const cssFiles = files.filter(f => f.endsWith('.css'))
const jsFiles = files.filter(f => f.endsWith('.js'))

// Prefer manifest to find the real entry, fallback to largest JS file
let entryFile
try {
  const manifest = JSON.parse(readFileSync('dist/client/.vite/manifest.json', 'utf-8'))
  const entry = Object.values(manifest).find(m => m.isEntry)
  if (entry) entryFile = entry.file
} catch (_) {}

if (!entryFile) {
  const sorted = jsFiles.slice().sort(
    (a, b) => statSync(`${assetsDir}/${b}`).size - statSync(`${assetsDir}/${a}`).size
  )
  entryFile = `assets/${sorted[0]}`
}

const html = `<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>BALI ÄSTHETIK – Lashes &amp; Brows by Angelina Balizki · Wien</title>
  <meta name="description" content="Premium Wimpernverlängerung in Wien &amp; Umgebung. Classic, Hybrid, Volume und Wispy Lashes mit UV-System – individuell, hygienisch und mit Liebe zum Detail." />
${cssFiles.map(f => `  <link rel="stylesheet" href="/assets/${f}" />`).join('\n')}
</head>
<body>
  <script type="module" src="/${entryFile}"></script>
</body>
</html>
`

writeFileSync('dist/client/index.html', html)
console.log(`[generate-index] Created dist/client/index.html (entry: ${entryFile})`)
