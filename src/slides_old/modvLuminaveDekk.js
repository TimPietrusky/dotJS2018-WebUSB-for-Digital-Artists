import Config from './config'
import React from 'react'
import uuid from 'uuid/v4'
import Fragment from '@dekk/fragment'
import {Text, Title, Subtitle, Uppercase, Bold, Center, colorSchemes} from '@dekk/text'
import {default as MaskedImage, FitImage} from '@dekk/image'
import Notes from '@dekk/speaker-notes'
import {Main} from '@dekk/master-slides'
import 'codemirror/mode/javascript/javascript'
import {Plugins} from '@dekk/deck'
// import * as wimbAnimation from '../animation'
// import * as dekkAnimation from '@dekk/animation'
import {RainbowText} from '../components'

const {Slide, A} = Main

const notes = (
  <Notes>
    <h3>modV + luminave</h3>
    <p>Integrate modV into luminave</p>
    <p>Average color from modV is send over WebSocket to luminave</p>
    <p>Luminave is using this to set the color of all fixtures</p>
    <p>Open luminave</p>
    <p>CONNECT MODV</p>
  </Notes>
)

export default (
  <Slide key={uuid()}>
    <Plugins.Data luminave={['']}></Plugins.Data>
    {notes}

    <A>
      <Title><RainbowText time={5} text="luminave"/> + modV</Title>
      <Fragment order={1}><Subtitle>1. WebSocket</Subtitle></Fragment>
    </A>

  </Slide>
)
