# How to Edit Your Site

You should only ever need to open **content.js** for routine updates. Everything text-based on the page — your bio, projects, links, skills — lives in that one file, inside an object called `SITE_DATA`.

## Common edits

**Change your bio**
Open `content.js` → find `about.paragraphs` → edit the text inside the quotes.

**Add a project**
Find `projects.items`. Copy one block (from `{` to `}`), paste it as a new entry, and change `title`, `description`, `tags`, `category`, and `link`. No public repo yet? Set `link: null` — the card will show "Write-up coming soon" instead of a dead link.

**Add a blog post**
`blogPosts` is empty right now, which is why the Blog section is hidden — it only appears once there's at least one post. Add an entry like this:
```js
{ title: "My first post", date: "August 2026", excerpt: "One sentence on what it's about.", link: "https://..." }
```

**Update links or your email**
Find `contact.email`, `contact.telegram`, `contact.github` and swap in your values. Same pattern for `community.ctaHref` and any project's `link`.

**Change the hero taglines**
`hero.phrases` is a list — the homepage types out each one, then moves to the next. Add, remove, or reorder freely.

**Teach the terminal a new command**
Scroll to `terminal.commands` and add a line like `"mycommand": "the response text"`.

## Add your real photo
Add a file named exactly `portrait.jpg` next to `index.html`. Until you do, a placeholder avatar shows automatically — nothing else to change either way.

## Change the look
Open `styles.css` and scroll to the `:root` block at the very top. `--color-accent` is the one accent color used across the whole site — change that single hex value to re-theme everything. Fonts and spacing are defined the same way just below it.

## Preview it
Double-click `index.html`. It opens straight in your browser — no install, no build step, no server needed.

## Deploy it (GitHub Pages, since your projects already live there)
1. Push all of these files to a repo (new or existing).
2. Go to **Settings → Pages**, set the source to your main branch.
3. Your site goes live at `https://nattify-x.github.io/<repo-name>/`.

## File map

| File | What it's for | Edit it? |
|---|---|---|
| `content.js` | All your text, links, and lists | **Yes — this is the one you'll use** |
| `styles.css` | Colors, fonts, spacing, layout | Only for look-and-feel changes |
| `index.html` | Page structure | Rarely |
| `app.js` | Behavior — typewriter, filters, terminal, animations | Rarely |
| `portrait.jpg` | Your photo | Add it whenever you're ready |
| `favicon.svg` / `avatar-placeholder.svg` | Browser-tab icon / fallback photo | Optional to replace |

## What changed from your old version, and why

- **New look**: moved off the neon-glass "AI portfolio template" palette (busy 4-color glow, Tailwind CDN defaults) to a deep ink-navy background with one warm amber/copper accent, a subtle coordinate-grid texture, and a type pairing (Space Grotesk + IBM Plex Sans/Mono) chosen for this brief rather than generic defaults.
- **Faster**: dropped the Tailwind CDN script (it recompiled your whole design system in every visitor's browser) and the unpinned `lucide@latest` icon library. Icons are now a small inline SVG set that ships with the page — no extra network requests, nothing that can silently change later.
- **Fixed bugs**: an unclosed HTML tag in your old first "blog" card was distorting that layout — gone now that cards render from data.
- **Reorganized content**: merged your 3 "blog" entries (Amharic transcription, breast cancer detection, skin disease detection) into **Projects** under a new **AI** tag, since they're project case studies, not articles. The Blog section is still there, just hidden until you add a real post.
- **Removed**: the random stock-photo gallery (it was pulling strangers' photos from picsum.photos, not your work).
- **Added**: a proper Skills & Tools section, an interactive terminal easter egg (try typing `help`), scroll-triggered reveals, a copy-to-clipboard email button, a live-status badge, and social-share meta tags.

Everything else — your actual projects, bio, links, faith section, and community invite — is exactly what you had, just restyled and wired up so future edits take minutes, not a rebuild.
