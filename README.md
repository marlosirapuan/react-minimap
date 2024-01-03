# react-minimap

[![NPM](https://img.shields.io/npm/v/react-minimap.svg?style=flat-square)](https://www.npmjs.com/package/react-minimap)

A minimap for React based on [jquery-minimap](https://github.com/john-bai/jquery-minimap)

This is a small fork with React and some libs updated.

## Demo

[react-minimap](https://jeremy-carbonne.github.io/react-minimap/)

## Installation

```bash
pnpm add https://github.com/marlosirapuan/react-minimap.git`
```

If you use typescript, adds to your .d.ts file:
```
declare module 'react-minimap'
```

## Usage
```tsx
import Minimap from 'react-minimap'

import 'react-minimap/dist/react-minimap.css'

type Props = {
  children: React.ReactNode
}
export const MinimapArea = ({ children }: Props) => {
  return (
    <Minimap selector=".mySelector" keepAspectRatio>
      {children}
    </Minimap>
  )
}
```

## Configuration

The `Minimap` supports the following props:

| Prop name        | Type                            | Default value              | Description                                                                              |
|------------------|---------------------------------|----------------------------|------------------------------------------------------------------------------------------|
| selector         | string                          | is required                | A css selector for specify what you want to render inside the minimap                    |
| className        | string                          | ''                         | A className for the minimap component                                                    |
| width            | number                          | `200`                      |                                                                                          |
| height           | number                          | `200`                      |                                                                                          |
| keepAspectRatio  | boolean                         | `false`                    |                                                                                          |
| childComponent   | any                             | Internal Component         | Allows customizing how components matched by selector are rendered (optional)            |
| onMountCenterOnX | boolean                         | `false`                    |                                                                                          |
| onMountCenterOnY | boolean                         | `false`                    |                                                                                          |

