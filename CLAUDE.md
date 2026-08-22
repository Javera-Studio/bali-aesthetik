# BALI ÄSTHETIK – Projektspezifische Hinweise

Ergänzt die globalen Standards aus `~/.claude/CLAUDE.md` und `02_JAVERA GitHub/CLAUDE.md`.

## Tech-Stack (Abweichung vom globalen Default)

Dieses Projekt läuft **nicht** auf Next.js, sondern auf **Vite + TanStack Router (File-based Routing) + TanStack Start**. Routen liegen in `src/routes/`, siehe `src/routes/README.md` für Konventionen. Globale Next.js-Vorgaben (App Router, `generateMetadata()` etc.) gelten hier sinngemäß, müssen aber auf TanStack-Äquivalente übertragen werden.

## Offene Baustellen

- **`/impressum` und `/datenschutz` sind NOCH NICHT FERTIG.** Es sind rechtliche Platzhalter-Texte (Impressum nach § 5 TMG, Datenschutzerklärung) mit `[...]`-Markierungen für fehlende Angaben (E-Mail, USt-Hinweis/Kleinunternehmerregelung, Hosting-Anbieter, zuständige Aufsichtsbehörde, Cookie-/Tracking-Hinweise). Vor Go-Live müssen diese Inhalte von der Kundin bzw. rechtlich geprüft final ausgefüllt werden – nicht ungeprüft live schalten.
- `WHATSAPP_URL` in `src/lib/contact.ts` ist noch ein Platzhalter (`https://wa.me/43XXXXXXXXXX`) und muss vor Go-Live durch die echte Nummer ersetzt werden.
