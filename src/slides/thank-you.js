import Config from './config'
import React from 'react'
import uuid from 'uuid/v4'
import Fragment from '@dekk/fragment'
// Text, Title, Subtitle, Uppercase, Bold, Center, Code
import {Title, Subtitle, Text, Uppercase} from '@dekk/text'
// import {default as MaskedImage, FitImage} from '@dekk/image'
import Notes from '@dekk/speaker-notes'
// Cover, Chapter, Half, Collage, Grid, ImageGrid
import {Main} from '@dekk/master-slides'
import {Plugins} from '@dekk/deck'
import {RainbowText} from '../components'

// import * as wimbAnimation from '../animation'
// import * as dekkAnimation from '@dekk/animation'

const {Slide, A} = Main

const notes = (
  <Notes>
    <h3></h3>
    <p></p>
  </Notes>
)

export default (
  <Slide key={uuid()}>
    <Plugins.Data luminave={['0position 1', 'color rainbow', 'movement 2']}></Plugins.Data>
    {notes}

    <A>
      <Title><Uppercase><RainbowText time={3.5} text="Thank You!"/></Uppercase></Title>
    </A>


  </Slide>
)
