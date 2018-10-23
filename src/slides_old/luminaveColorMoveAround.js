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
import {AnimatedTitle, StrobeTitle} from '../components'

const {Slide, A} = Main

const notes = (
  <Notes>
    <h3>luminave</h3>
    <p>change the color to green</p>
    <p>Movement: Lights are moving around</p>
  </Notes>
)

export default (
  <Slide key={uuid()} background="#35C964" mixin="--slide-color: white">
    <Plugins.Data luminave={['0position 1', 'color green', 'movement 1']}></Plugins.Data>
    {notes}

    <A>
      <Title><Uppercase>Green</Uppercase></Title>
      <Title>+ <Uppercase><AnimatedTitle>Movement</AnimatedTitle></Uppercase></Title>
    </A>

  </Slide>
)
