# Spartan Gym Website — Build Plan

## Chunk 1: Data Files + UI Primitives
- **Files:** `src/data/coaches.js`, `src/data/packages.js`, `src/data/testimonials.js`
- Populate all 3 data files with full content (realistic placeholder data)
- **Files:** `src/lib/utils.js` — already has `cn()` helper
- **Files:** `src/components/ui/SectionHeading.js`, `src/components/ui/Button.js`, `src/components/ui/StatCard.js`
- Build the reusable UI components: SectionHeading (eyebrow + title + optional subtext), Button (primary red + outlined variant), StatCard (big red number + label)

## Chunk 2: Navbar (`src/components/layout/Navbar.js`)
- Sticky top navbar, offwhite background with shadow on scroll
- Logo wordmark (Anton font, red accent letter)
- Nav links: Home, About, Coaches, Packages, Reviews, Contact
- "Join Now" red CTA button
- Mobile hamburger (lucide-react Menu) → slide-in offwhite menu
- Scroll-based background toggle (transparent → solid on scroll)

## Chunk 3: Hero Section (`src/components/sections/Hero.js`)
- Full viewport (min-h-screen), offwhite bg
- Large centered hero image + "NO PAIN NO GAIN" text below it with red accent
- Left: heading, description, two stat blocks (500+ Active Members, 10+ Years Experience)
- Right: card with secondary image + "Certified Trainers" badge
- Desktop: grid layout. Mobile: stacked.
- Scroll-down indicator at bottom

## Chunk 4: About Section (`src/components/sections/About.js`)
- "WHO WE ARE" / "About Our Gym" heading
- Two-column: image left, text right with feature bullets (Modern Equipment, Certified Coaches, Flexible Hours, Personalized Plans)
- Each bullet: lucide-react icon in red circle

## Chunk 5: Coaches Section (`src/components/sections/Coaches.js`)
- "MEET THE TEAM" / "Our Expert Coaches" heading
- Grid of coach cards from `data/coaches.js`
- Image + name + specialty + social icons (Instagram/Facebook/Twitter)
- Responsive grid: 4-col desktop → 1-col mobile

## Chunk 6: Packages Section (`src/components/sections/Packages.js`)
- "MEMBERSHIP" / "Choose Your Plan" heading
- 3 pricing cards from `data/packages.js`
- Middle card featured: red border, elevated, "Most Popular" badge
- Feature checklists, CTA buttons at bottom
- Responsive: side-by-side → stacked

## Chunk 7: Reviews Section (`src/components/sections/Reviews.js`)
- "TESTIMONIALS" / "What Our Members Say" heading
- Embla carousel of testimonial cards from `data/testimonials.js`
- Star rating row, quote, avatar + name + subtext
- Left/right arrow controls + dot indicators (brand colors)

## Chunk 8: Contact + Footer
- **Contact:** "GET IN TOUCH" heading, react-hook-form (Name, Email, Phone, Message), red focus rings, submit button / Right side: contact info on red-tinted card with icon rows
- **Footer:** Dark bg, logo + tagline, quick links, contact info, social icons, newsletter input + red subscribe button, copyright bar

## Chunk 9: Assemble Page + Final Polish
- Wire everything in `src/app/page.js` (Navbar → Hero → About → Coaches → Packages → Reviews → Contact → Footer)
- Add smooth scroll to `<html>` tag in `layout.js`
- Add section IDs for nav anchor scrolling
- Add framer-motion fade-up animations across sections
- Run dev server, verify no errors at 375px / 768px / 1280px+
