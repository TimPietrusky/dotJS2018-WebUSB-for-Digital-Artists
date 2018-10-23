import Config from './config'
import React from 'react'
import uuid from 'uuid/v4'
import Fragment from '@dekk/fragment'
import {Text, Title, Subtitle, Uppercase, Bold, Center, colorSchemes, Quote} from '@dekk/text'
import {default as MaskedImage, FitImage} from '@dekk/image'
import Notes from '@dekk/speaker-notes'
import {Main} from '@dekk/master-slides'
import 'codemirror/mode/javascript/javascript'
import {Plugins} from '@dekk/deck'
// import * as wimbAnimation from '../animation'
// import * as dekkAnimation from '@dekk/animation'
import {Code2} from '../components'

const {Slide, A} = Main

const notes = (
  <Notes>
    <h3>Don't reinvent the wheel</h3>
    <p>Use what the Web already has to offer</p>
    <p>Support open source software</p>
    <p>Report problems and tell them why you love to use their software</p>
  </Notes>
)

export default (
  <Slide key={uuid()}>
    <Plugins.Data luminave={['']}></Plugins.Data>
    {notes}

    <A>
      <Title><Quote>Don't reinvent the wheel</Quote></Title>
    </A>

  </Slide>
)
