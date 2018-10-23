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
    <h3>Not as easy as you think</h3>
    <p>First of all: https only</p>
    <p>URL whitelisting, which means that the device itself has to allow which pages it is allowed to be used with</p>
    <p>So I can't add just any USB device and talk with it? Nope, but what do we do now?</p>
  </Notes>
)

export default (
  <Slide key={uuid()}>
    <Plugins.Data luminave={['']}></Plugins.Data>
    {notes}

    <A>
      <Title>https only</Title>

      <Fragment order={1}>
        <Title>URL whitelisting</Title>
      </Fragment>
    </A>

  </Slide>
)
