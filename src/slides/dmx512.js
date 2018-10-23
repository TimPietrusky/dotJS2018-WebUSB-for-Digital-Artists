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
    <h3>DMX512</h3>
    <p>DMX stands for Digital Miultiplex</p>
    <p>The 512 stands for 512 channels</p>
    <p>In general, it is used for professional stage lightning, but you can use it for anything you want</p>
  </Notes>
)

export default (
  <Slide key={uuid()}>
    <Plugins.Data luminave={['']}></Plugins.Data>
    {notes}

    <A>
      <Title><RainbowText time={30} text="DMX512"/></Title>
      <Subtitle><a href="https://en.wikipedia.org/wiki/DMX512">en.wikipedia.org/wiki/DMX512</a></Subtitle>
    </A>

  </Slide>
)
