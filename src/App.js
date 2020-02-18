import React, { Suspense, useMemo, useRef, useState, useEffect } from 'react'
import { Canvas, Dom, useThree, useFrame, extend, useLoader } from 'react-three-fiber'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import lerp from 'lerp'
import Model from './Model'
import Post from './Post'

extend({ OrbitControls })
const Controls = props => {
  const { gl, camera } = useThree()
  const ref = useRef()
  useFrame(() => ref.current.update())
  return <orbitControls ref={ref} args={[camera, gl.domElement]} {...props} />
}

export default function App() {
  return (
    <>
      <Canvas shadowMap camera={{ position: [0, 0, 12], fov: 50, near: 7, far: 15 }}>
        <fog attach="fog" args={['black', 0, 20]} />
        <pointLight position={[0, 10, -10]} intensity={1} />
        <Controls />
        <Suspense
          fallback={
            <Dom center className="loader">
              LOADING...
            </Dom>
          }>
          <Model position={[0, -6, 0]} rotation={[0, -0.2, 0]} />
          <Post />
        </Suspense>
      </Canvas>
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
    </>
  )
}
