import { render } from 'react-dom'
import React, { Suspense, lazy } from 'react'
import './styles.css'

// Create a lazy-loaded split bundle for the canvas
const Canvas = lazy(() => import('./Canvas'))

render(
  <>
    <Suspense fallback={null}>
      <Canvas />
    </Suspense>
    <div class="header">
      <span class="active">ART</span>
      <span>ABOUT</span>
      <span>VISIT</span>
      <span>SHOP</span>
      <span>SEARCH</span>
    </div>
    <div class="middle">
      <h2>The</h2>
      <h1>THREE GRACES</h1>
    </div>
  </>,
  document.getElementById('root'),
)
