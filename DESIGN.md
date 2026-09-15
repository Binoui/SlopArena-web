---
name: SlopArena
description: A scrappy basement fight flyer for an unfinished platform fighter.
colors:
  newsprint: "#ded8c9"
  soot: "#171814"
  acid: "#dfff36"
  corner-orange: "#f05b35"
  registration-line: "rgba(23, 24, 20, 0.28)"
  field-paper: "#f4efe3"
  success: "#216b26"
  error: "#9a2819"
typography:
  display:
    fontFamily: "Archivo Black, sans-serif"
    fontSize: "clamp(72px, 10vw, 142px)"
    fontWeight: 700
    lineHeight: 0.89
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Archivo Black, sans-serif"
    fontSize: "clamp(38px, 5vw, 68px)"
    fontWeight: 700
    lineHeight: 0.89
    letterSpacing: "-0.04em"
  title:
    fontFamily: "Archivo Black, sans-serif"
    fontSize: "19px"
    fontWeight: 700
    lineHeight: 1
  body:
    fontFamily: "Space Mono, monospace"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Space Mono, monospace"
    fontSize: "12px"
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: "0.06em"
rounded:
  square: "0px"
  circle: "50%"
spacing:
  xs: "8px"
  sm: "12px"
  md: "18px"
  lg: "24px"
  xl: "32px"
components:
  download-primary:
    backgroundColor: "{colors.acid}"
    textColor: "{colors.soot}"
    rounded: "{rounded.square}"
    padding: "18px 30px"
    typography: "{typography.title}"
  feedback-submit:
    backgroundColor: "{colors.acid}"
    textColor: "{colors.soot}"
    rounded: "{rounded.square}"
    padding: "13px 16px"
    typography: "{typography.label}"
  field:
    backgroundColor: "{colors.field-paper}"
    textColor: "{colors.soot}"
    rounded: "{rounded.square}"
    padding: "10px"
    typography: "{typography.body}"
  language-active:
    backgroundColor: "{colors.soot}"
    textColor: "{colors.newsprint}"
    rounded: "{rounded.square}"
    padding: "8px 10px"
    typography: "{typography.label}"
  dark-card:
    backgroundColor: "{colors.soot}"
    textColor: "{colors.newsprint}"
    rounded: "{rounded.square}"
    padding: "12px"
---

# Design System: SlopArena

## Overview

**Creative North Star: "Basement Fight Flyer"**

SlopArena looks like a local tournament announcement assembled with a photocopier, a marker, and just enough layout discipline to keep the fight organized. The system is scrappy, editorial, and playful: oversized condensed-feeling display type does the shouting, compact monospace copy handles instructions and evidence, and small rotations make the composition feel physically placed rather than digitally perfected.

The roughness is controlled. Strong grids, repeated two-pixel rules, strict square controls, and clear section boundaries keep every crooked card and annotation legible. The visual world rejects slick esports polish—no neon gradients, glossy glass, cinematic chrome, or anonymous competitive-gaming spectacle.

**Key Characteristics:**
- Warm newsprint surfaces under near-black structural ink.
- Acid chartreuse for action and status; corner orange for emphasis and interruption.
- Monumental Archivo Black headlines paired with compact Space Mono utility copy.
- Square corners, two-pixel rules, slight rotations, and hard offset-print shadows.
- Editorial sectioning that collapses cleanly from asymmetric desktop grids to single-column mobile flow.

## Colors

The palette behaves like a four-ink flyer: warm stock, dense black ink, one fluorescent action color, and one warm marker accent.

### Primary
- **Acid:** The fluorescent action ink. Use it for download and submit actions, controller callouts, hover inversions, and the live-presence light.

### Secondary
- **Corner Orange:** The disruptive marker color. Use it for the word or number that must break the composition, the feedback field, focus outlines, and selected form accents.

### Neutral
- **Newsprint:** The dominant warm page stock and reversed text on Soot.
- **Soot:** The structural ink for text, rules, dark bands, and offset shadows.
- **Registration Line:** A translucent Soot rule for oversized background geometry where a full-strength border would compete.
- **Field Paper:** A lighter stock reserved for editable fields inside Newsprint panels.
- **Success:** Semantic confirmation copy only.
- **Error:** Validation and submission failure copy only.

**The Four-Ink Rule.** Newsprint and Soot build the page; Acid calls for action; Corner Orange interrupts. Do not introduce a fifth decorative hue.

**The Acid Is Action Rule.** Acid must remain scarce enough to identify interaction or live status immediately.

## Typography

**Display Font:** Archivo Black (with sans-serif fallback)  
**Body Font:** Space Mono (with monospace fallback)  
**Label/Mono Font:** Space Mono

**Character:** Archivo Black delivers blunt flyer-scale impact while Space Mono makes every instruction, status, and aside feel typed onto the same physical artifact. The contrast is intentionally extreme: display text shouts; utility text stays compact and exact.

### Hierarchy
- **Display:** Heavy Archivo Black at the fluid hero scale, tightly tracked and compressed vertically. Reserve it for the first-view statement.
- **Headline:** Heavy Archivo Black at the smaller fluid section scale with the same tight rhythm.
- **Title:** Archivo Black at compact component scale for primary action labels and installation steps.
- **Body:** Space Mono at compact reading scale with open line height for explanations and form content.
- **Label:** Bold Space Mono with positive tracking, commonly uppercase, for navigation, legends, metadata, and status.

**The Shout and Type Rule.** Archivo Black names the fight or action; Space Mono explains, labels, and reports it. Never set paragraphs in the display face.

**The Compact Utility Rule.** Small monospace copy earns its size through short lines, strong contrast, and generous line height; do not use it for long-form reading.

## Layout

The desktop composition alternates full-bleed structural bands with a centered content frame capped at 1120px. The hero is a centered overlay composition: copy sits above two edge-anchored character renders and a large registration circle. Gameplay and feedback use asymmetric two-column grids; installation uses three equal sequential cells. Major sections use approximately 90px vertical padding, while navigation and footer rely on full-width bands and responsive horizontal gutters.

At 820px and below, content becomes single-column. Secondary navigation links disappear while the primary Play link and language controls remain. Character renders shrink and move toward the hero edges, annotations disappear, presence wraps, installation cells stack with horizontal separators, and the footer changes to a vertical stack. The implemented 390px layout has no horizontal overflow.

**The Structure Before Slop Rule.** Establish the grid, reading order, and section boundary first; rotation and overlap may disturb the surface but never the task flow.

## Elevation & Depth

Depth follows a structural offset-print philosophy. Most surfaces remain flat. Priority cards use unblurred offset shadows in Soot or Corner Orange, as if a second ink plate or paper layer slipped during printing; slight rotation reinforces the physical registration error. The presence indicator is the exception: its soft Acid glow communicates live state rather than elevation.

### Shadow Vocabulary
- **Primary press:** A 7px Soot offset for the download control and feedback panel; compresses to 4px as the download control is pressed by hover movement.
- **Compact press:** A 5px Soot offset for the feedback submit control; compresses to 3px on hover.
- **Feature offset:** A 10px Corner Orange offset for the dark gameplay card.
- **Live glow:** A soft 12px Acid halo around the presence light; never use it on containers.
- **Character ground:** A downward translucent Soot drop-shadow under fighter renders.

**The Printed Depth Rule.** Hard shadows indicate physical offset or pressability, not ambient light. Never put them on every container.

## Shapes

The system is overwhelmingly square. Cards, buttons, fields, switches, and structural bands use zero-radius corners with two-pixel Soot rules. Circles are reserved for the oversized hero registration mark and the live-presence dot. Slight rotations between roughly one-half and two degrees create human placement without weakening the grid.

**The Circle Has a Job Rule.** Circular geometry means presence or print registration; it is not a generic container shape.

**The Two-Pixel Rule.** Interactive and sectional outlines use decisive two-pixel Soot strokes. One-pixel borders belong only to low-emphasis detail inside a dark surface.

## Components

Components are rough but orderly: hard-edged, visibly interactive, and placed on disciplined grids.

### Buttons
- **Shape:** Square, two-pixel Soot outline.
- **Primary:** Acid fill, Soot type, and a hard offset shadow. The large download action uses a stacked Archivo Black title and tracked Space Mono note; the compact submit action uses bold Space Mono.
- **Hover / Focus:** Hover translates the control toward its shadow and shortens the offset, producing a physical press. Keyboard focus uses a three-pixel Corner Orange outline with a two-pixel gap.
- **Disabled:** Retains its silhouette and shadow, reduces opacity, removes press movement, and uses the appropriate waiting cursor.

### Cards / Containers
- **Corner Style:** Square.
- **Background:** Soot for media presentation; Newsprint for forms; Corner Orange for the feedback section field.
- **Shadow Strategy:** Apply only to priority layers—the gameplay card and feedback panel—not routine section wrappers.
- **Border:** Two-pixel Soot borders on Newsprint containers; low-contrast one-pixel inner rule on the dark media placeholder.
- **Internal Padding:** Compact 12px media frame; responsive 18–30px form panel.

### Inputs / Fields
- **Style:** Field Paper fill, two-pixel Soot stroke, square corners, 10px internal padding, and a 16px Space Mono input size that avoids mobile focus zoom.
- **Focus:** Three-pixel Corner Orange outline with a two-pixel offset.
- **Error / Disabled:** Error appears as semantic Error text with an explicit retry action. Failed submission preserves the visible draft; disabled identity fields retain layout, lower opacity, and show a blocked cursor.

### Navigation
- The top bar is a 74px Newsprint band separated by a two-pixel Soot rule. The slightly rotated Archivo Black wordmark anchors the left; tracked Space Mono links and a boxed language switch align right with 44px-high targets.
- Link hover uses a three-pixel Corner Orange underline with a six-pixel offset. The active language is a Soot block reversed to Newsprint; hover and keyboard focus invert to Acid.
- At the mobile breakpoint, retain Play, Feedback, and the language switch while hiding Install. At 360px and below, the wordmark already returns home, so retain Feedback as the single task link.

### Presence Band
- A full-width Soot strip with reversed Newsprint status copy and a glowing Acid dot.
- Player names align to the far edge on desktop and wrap beneath the status on mobile.
- Offline fallback uses the same structure as live data so loss of service does not destabilize the page.

### Editorial Section Title
- A small Corner Orange sequence number precedes an oversized Archivo Black heading on a shared baseline.
- Use only when the section belongs to an actual ordered walkthrough or page sequence.

## Do's and Don'ts

### Do:
- **Do** build with Newsprint and Soot before assigning Acid or Corner Orange.
- **Do** use Archivo Black for declarations and Space Mono for instructions, labels, and status.
- **Do** keep square corners and two-pixel structural rules across controls and panels.
- **Do** let one rotated or offset element disrupt an otherwise disciplined composition.
- **Do** collapse asymmetric desktop grids into a clear single-column mobile reading order.
- **Do** preserve visible keyboard focus and reduced-motion behavior.

### Don't:
- **Don't** introduce neon gradients, glass panels, glossy chrome, or generic esports spectacle.
- **Don't** soften the system with rounded cards, pill-shaped buttons, or diffuse ambient card shadows.
- **Don't** use Acid as general decoration; it signals action or live state.
- **Don't** scatter rotations, annotations, or hard shadows across every element.
- **Don't** replace real character renders with generic gaming icons or abstract hero decoration.
- **Don't** add decorative colors outside the four-ink hierarchy.
