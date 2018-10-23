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
// import {SuperTimer} from '../components'

const {Slide, A} = Main

const notes = (
  <Notes>
    <h3>Dekk</h3>
    <p>Presentation tool written in React.js</p>
    <p>This is what we are using right now</p>
    <p>We planned everything, even the color of the room</p>
    <p>Combine software with reality, going into the 3rd dimension</p>
  </Notes>
)

export default (
  <Slide key={uuid()}>
    <Plugins.Data luminave={[]}></Plugins.Data>
    {notes}

    <A>
      <Title>Dekk</Title>
      <a href="https://github.com/sinnerschrader/dekk">
        <Subtitle>github.com/sinnerschrader/dekk</Subtitle>
      </a>
    </A>

  </Slide>
)
