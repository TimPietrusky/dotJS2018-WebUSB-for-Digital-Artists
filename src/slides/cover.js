import Config from './config'
import React from 'react'
import uuid from 'uuid/v4'
import Fragment from '@dekk/fragment'
import {Text, Title, Subtitle, Uppercase, Bold, Center, Code} from '@dekk/text'
import {default as MaskedImage, FitImage} from '@dekk/image'
import Notes from '@dekk/speaker-notes'
import {Main} from '@dekk/master-slides'
import {Plugins} from '@dekk/deck'
import {RainbowText} from '../components'

const {Slide, A} = Main

const notes = (
  <Notes>
    <h3>WebUSB for Digital Artists</h3>
    <p></p>
  </Notes>
)

export default (
  <Slide key={uuid()} background="#fff" mixin="--slide-color: #000;">
    <Plugins.Data luminave={['']}></Plugins.Data>
    {notes}

    <A>
      <Title>
        WebUSB for
       </Title>
       <Title><RainbowText time={30} text="Digital Artists"/></Title>

       <Subtitle>&nbsp;</Subtitle>

      <Subtitle>
      <img src="media/dotjs-logo.png"
          alt="dotJS Logo"
          style={{ height: 15 + 'vh' }}
      />
      </Subtitle>
    </A>

  </Slide>
)
