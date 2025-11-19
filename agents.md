# @snokam/core Package Documentation

## Overview

The `@snokam/core` package is a comprehensive React component library that provides a foundation for building Snøkam applications. It includes layout components, theming support, loaders, breadcrumbs, meta tags, and scripts. The package is built with React, TypeScript, Emotion (styled-components), and Material-UI (MUI).

---

## Main Exports

### From Root Package (`.`)

```typescript
export { default as Layout } from "./Layout/index";
export { default as Theme, Color, BaseColor } from "./Themes/index";
export { default as Breadcrumbs } from "./Breadcrumbs";
export { default as CommonMetaTags } from "./MetaTags";
export { default as CommonScripts } from "./Scripts";
export { LogoLoader, PageLoader, LoaderVariant } from "./Loader";
```

### From `./theme` Export

```typescript
export { BaseColor, Color, theme } from './Themes';
export { default as Theme };
```

### From `./layout` Export

```typescript
export { default as Layout };
export { Breakpoints } from "./Layout/index";
export * from "./Layout/types"; // Includes all type definitions
```

---

### Color Enum

Predefined colors used throughout the package:

```typescript
export enum Color {
  Inherit = 'inherit',
  DarkBlue = '#071d41',
  Blue = '#67DAFD',
  LightBlue = '#E1F8FF',
  LightGreen = '#ACFFA4',
  DarkGreen = '#11CF7F',
}
```

---

## Layout Components

The Layout system provides three main components: `Container`, `Section`, and `Content`.

### Container

The root layout container with support for themes and animated transitions.

#### LayoutTheme Enum

```typescript
export enum LayoutTheme {
  Light = "light",
  Dark = "dark",
}
```

#### Usage Example

```typescript
import { Layout } from '@snokam/core';
import { LayoutTheme, TransitionType, Color } from '@snokam/core/layout';

export function MyComponent() {
  return (
    <Layout.Container
      theme={LayoutTheme.Dark}
      transitions={{
        bottom: {
          type: TransitionType.Wave,
          color: Color.DarkGreen,
        },
      }}
    >
      <Layout.Content>Your content here</Layout.Content>
    </Layout.Container>
  );
}
```

### Section

A flex container for organizing content vertically with configurable padding.

#### Padding Enum

```typescript
export enum Padding {
  None = "none",          // 0
  Small = "small",        // 2rem
  Medium = "medium",      // 4rem
  Large = "large",        // 6rem
}
```

#### Usage Example

```typescript
<Layout.Section padding={Padding.Medium}>
  <div>Item 1</div>
  <div>Item 2</div>
</Layout.Section>
```

### Content

A centered content wrapper with responsive padding and maximum widths.

#### Width Enum

```typescript
export enum Width {
  Normal = "normal",              // 1272px
  Narrow = "narrow",              // 1080px
  ExtraNarrow = "extraNarrow",    // 880px
}
```

---

## Transitions

### TransitionType Enum

```typescript
export enum TransitionType {
  Wave = "wave",
  Curve = "curve",
}
```

### Transitions Interface

```typescript
export interface Transitions {
  top?: TransitionWithOptions;
  bottom?: TransitionWithOptions;
}
```

---

## Loaders

### LoaderVariant Enum

```typescript
export enum LoaderVariant {
  Slide = "slide",
  Pulse = "pulse",
  TriplePulse = "triple-pulse",
}
```

#### Usage Example

```typescript
import { LogoLoader, PageLoader, LoaderVariant } from '@snokam/core';

// Logo loader
<LogoLoader variant={LoaderVariant.Pulse} />

// Full-page loader
<PageLoader variant={LoaderVariant.TriplePulse} />
```

---

## Other Components

### CommonMetaTags

Provides essential meta tags including stylesheets and favicons.

```typescript
import { CommonMetaTags } from '@snokam/core';

<head>
  <CommonMetaTags />
</head>
```

### Breadcrumbs

Navigation breadcrumbs using Material-UI.

```typescript
import { Breadcrumbs } from '@snokam/core';

<Breadcrumbs
  crumbs={[
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
  ]}
/>
```