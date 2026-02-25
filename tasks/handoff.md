# Session Handoff

## Done
- **Mobile scroll fix**: Swapped `h-screen overflow-hidden` for `min-h-screen` with `md:` breakpoint overrides so mobile scrolls naturally while desktop keeps fixed two-panel layout
- **Parchment theme**: Added 6th theme — warm cream background with sepia text, higher noise opacity for paper texture feel
- **AwAI badge + website link**: Added header right section with `briandell.xyz` link and AwAI pill badge (purple border, matching personal site)
- **GitHub repo link**: Added GitHub link in header alongside website and AwAI badge
- **README**: Created project README covering features, themes, devices, stack, architecture, and rendering details
- **Custom domain**: Set up `verses.briandell.xyz` — CNAME to `cname.vercel-dns.com`, SSL provisioned and verified
- **Optional poem prop**: Made `poem` optional in LockScreenPreview to handle empty state gracefully
- All changes committed and pushed across 3 commits (`adbcdad`, `2bb385c`, `eef407b`)
- Deployed to Vercel production after each change

## Pending
- Nothing blocking — app is shipped and live

## Decisions
- Parchment theme uses dark brown text (not black) on warm cream — sepia tones feel more literary
- AwAI badge matches the one on briandell.xyz: 10px text, subtle purple border, pill shape
- Subtitle hides on small screens (`hidden sm:inline`) to make room for header links on mobile
- Used CNAME record (not A record) for subdomain — follows Vercel IP changes automatically

## Open Questions
- Consider adding more light themes if Parchment is popular
- The `tasks/` folder in verses-app is not gitignored — decide if handoff files should be tracked
