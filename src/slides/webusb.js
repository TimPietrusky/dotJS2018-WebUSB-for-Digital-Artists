import Config from './config'
import React from 'react'
import uuid from 'uuid/v4'
import Fragment from '@dekk/fragment'
import {Text, Title, Subtitle, Uppercase, Bold, Center, Code} from '@dekk/text'
import {default as MaskedImage, FitImage} from '@dekk/image'
import Notes from '@dekk/speaker-notes'
import {Main} from '@dekk/master-slides'
import {Plugins} from '@dekk/deck'
// import * as wimbAnimation from '../animation'
// import * as dekkAnimation from '@dekk/animation'
import {RainbowText} from '../components'

const {Slide, A} = Main

const notes = (
  <Notes>
    <h3>WebUSB</h3>
    <p>When you want to learn how USB can be used in the browser your first starting point will be the specification</p>
    <p>It's very well written and explains WebUSB in an easy to follow way</p>
  </Notes>
)

export default (
  <Slide key={uuid()}>
    <Plugins.Data luminave={['']}></Plugins.Data>
    {notes}

    <A>
      <Title><RainbowText time={30} text="WebUSB"/></Title>
      <Fragment order={1}><Subtitle><a href="https://wicg.github.io/webusb">wicg.github.io/webusb</a></Subtitle></Fragment>
    </A>

  </Slide>
)
