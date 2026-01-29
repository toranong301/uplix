# Language Routing & Navigation

## Routing
- All routes are prefixed with language: `/en/...` and `/th/...`.
- Root `/` redirects to `/en/home`.
- Example mappings:
  - `/en/products-and-services` ↔ `/th/products-and-services`
  - `/en/information-inquiry/inquiry-form` ↔ `/th/information-inquiry/inquiry-form`

## Language Switching
- `LanguageService.swapLangUrl(targetLang)` swaps only the prefix and keeps path, query, and hash.
- The header language buttons call this helper and navigate to the swapped URL.

## Creating Links
- Use `LangLinkPipe` for internal links:
  - `['/about' | langLink]` → `/en/about` or `/th/about`
- For hash links, pass fragment separately:
  - `[routerLink]="'/home' | langLink" [fragment]="'kpi'"`

## Adding New Pages
1) Add the route under `:lang` in `src/app/app.routes.ts`.
2) Add nav metadata in `src/app/core/navigation/nav.config.ts` if needed.
3) Add translations in:
   - `uplix-web/public/i18n/en.json`
   - `uplix-web/public/i18n/th.json`

## Menu Configuration
- `NAV_ITEMS` drives the main navigation and sitemap.
- Each item supports:
  - `labelKey` (i18n key)
  - `path` (no language prefix)
  - `descKey` (short description)
  - `groups` with child links (used in mega menu + mobile accordion)

## SEO
- `<html lang>` is updated dynamically based on current language.
- Canonical and `hreflang` links are injected on navigation.
