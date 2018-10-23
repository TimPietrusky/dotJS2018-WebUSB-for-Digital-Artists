import Config from './config'
import React from 'react'
import uuid from 'uuid/v4'
import Fragment from '@dekk/fragment'
import {Title, Subtitle} from '@dekk/text'
import Notes from '@dekk/speaker-notes'
import {Main} from '@dekk/master-slides'
import {Plugins} from '@dekk/deck'

const {Slide, A} = Main

const notes = (
  <Notes>
    <p>We can predict the Future</p>
  </Notes>
)

export default (
  <Slide key={uuid()}>
     <Plugins.Data luminave={['']}></Plugins.Data>
    {notes}

    <A>
      <Title>Predict the Future 👀</Title>
    </A>
  </Slide>
)
