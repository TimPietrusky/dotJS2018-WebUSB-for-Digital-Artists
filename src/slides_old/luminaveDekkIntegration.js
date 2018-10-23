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
    <h3>luminave + Dekk</h3>
    <p>luminave is running on localhost:1337</p>
    <p>luminave is integrated as an iframe into Dekk</p>
    <p>iframe is hidden, but can be activated using the presenter</p>
    <p>Dekk is sending data back to luminave using a WebSocket connection, WebSocket server provided by luminave</p>
    <p>Giving Dekk the power to set the DMX512 fixtures</p>
  </Notes>
)

export default (
  <Slide key={uuid()}>
    <Plugins.Data luminave={['']}></Plugins.Data>

    {notes}

    <A>
      <Title>
        <RainbowText time={5} text="luminave"/>
        {' '}+ Dekk
      </Title>
      <Fragment order={1}><Subtitle>1. Inline iframe</Subtitle></Fragment>
      <Fragment order={2}><Subtitle>2. WebSocket</Subtitle></Fragment>
    </A>

  </Slide>
)
