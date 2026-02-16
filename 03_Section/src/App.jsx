import React from 'react'
import {Button} from "../src/components/ui/button"
import Nav from './page/Nav'
import { ThreeDCardDemo } from './page/ThreeDCardDemo'
import { TextHoverEffectDemo } from './page/TextHoverEffectDemo'
function App() {
  return (
    <>
    <div
    className='bg-background text-foreground'></div>
    <Nav/>
    <ThreeDCardDemo/>
    Heloo
    <Button variant="destructive">Hello</Button>
    <TextHoverEffectDemo/>
    </>
  )
}

export default App