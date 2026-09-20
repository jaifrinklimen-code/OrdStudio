// ORD Studio Design DNA Architecture
// Governs genuine structural, compositional, typographic, and art-directional diversity.
// Strictly prevents recolored duplicates, repeated layout recipes, and empty templates.

export interface TypographyScale {
  display: number;       // 44–96px
  title: number;         // 32–44px
  h1: number;            // 20–28px
  h2: number;            // 15–18px
  body: number;          // 13–15px
  caption: number;       // 10–12px
  lineHeight: number;
  letterSpacing?: number;
}

export interface FontPairing {
  display: string;
  body: string;
  mono?: string;
}

export interface ImageTreatment {
  type: 
    | 'none'
    | 'full-bleed'
    | 'top-hero'
    | 'right-portrait'
    | 'left-portrait'
    | 'bottom-panoramic'
    | 'floating-card'
    | 'split-half'
    | 'collage-3'
    | 'circular-badge'
    | 'arch-window'
    | 'center-stage'
    | 'diagonal-accent';
  borderRadius: number;
  borderStroke?: string;
  borderWidth?: number;
  scrim?: boolean;
}

export interface ColorSystem {
  background: string;
  surface: string;
  primary: string;
  secondary: string;
  accent: string;
  textPrimary: string;
  textSecondary: string;
  border: string;
  gradient?: string;
}

export interface DesignDna {
  id: number;
  category: 'Presentation' | 'Resume' | 'Business' | 'Invitations' | 'Posters' | 'Flyers' | 'Reports';
  name: string;
  archetype: string;
  
  // Spatial & Grid Composition
  gridType: 
    | '1-col-monograph'
    | '2-col-asymmetric-60-40'
    | '2-col-asymmetric-40-60'
    | '2-col-equal-split'
    | '3-col-ledger'
    | '4-col-metrics'
    | 'horizontal-split-50-50'
    | '3-tier-horizontal'
    | 'timeline-rail'
    | 'terminal-console'
    | 'bento-grid'
    | 'floating-card-center'
    | 'diagonal-kinetic'
    | 'collage-staggered'
    | 'architectural-blueprint'
    | 'engraved-formal-frame'
    | 'minimal-pure-whitespace'
    | 'monumental-typography-hero';
  columnStructure: string;
  symmetry: 'symmetric' | 'asymmetric' | 'diagonal' | 'radial';
  alignment: 'left' | 'center' | 'right' | 'split';
  visualFocalPoint: 'top-hero' | 'center-monumental' | 'asymmetric-left' | 'asymmetric-right' | 'bottom-anchor' | 'grid-distributed' | 'full-canvas';
  
  // Spacing & Margins
  margins: { top: number; left: number; right: number; bottom: number };
  spacingRhythm: number; // e.g. 16, 24, 32, 48

  // Typography & System
  typographyScale: TypographyScale;
  fontPairing: FontPairing;

  // Visual Assets & Shapes
  imageTreatment: ImageTreatment;
  shapeLanguage: 'sharp' | 'rounded-cards' | 'circular-rings' | 'hairline-borders' | 'terminal-monoblocks' | 'pill-badges' | 'engraved-frames';
  borderLanguage: 'none' | 'hairline-single' | 'double-luxury' | 'bold-terminal' | 'architectural-grid';
  informationDensity: 'minimal-airy' | 'editorial' | 'dense-analytical';

  // Art Direction & Color Palette
  colorSystem: ColorSystem;
}

export function el(id: string, type: string, x: number, y: number, width: number, height: number, props: any = {}) {
  return {
    visible: true,
    id,
    type,
    x,
    y,
    width,
    height,
    ...props
  };
}
