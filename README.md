# Kabilan — Portfolio

Personal portfolio site built with React, Vite and Tailwind CSS.

## Run it

```bash
npm install
npm run dev      # local dev server
npm run build    # production build in dist/
npm run lint     # oxlint
```

## Editing content

Everything on the page comes from the data files, so you rarely need to touch components.

| What | File |
|---|---|
| Name, title, email, phone, social links, résumé | `src/data/site.js` |
| Skills cards | `src/data/skills.js` |
| Work experience | `src/data/experience.js` |
| Projects, tabs, mobile app showcase | `src/data/projects.js` |

- **Résumé:** put the PDF in `public/` and set `resumeUrl` in `site.js`. The download buttons appear automatically.
- **Social links:** fill in `links` in `site.js`. Empty values are hidden.
- **Project screenshots:** saved in `public/projects/screens/`. A project without an `image` loads a live preview from Microlink.
- **Company logos:** `public/logos/`.
- **Link previews:** set `VITE_SITE_URL` in `.env` to your domain.
