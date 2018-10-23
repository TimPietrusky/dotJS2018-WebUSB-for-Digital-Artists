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
import {LargeImage} from '../components'

const {Slide, A} = Main

const notes = (
  <Notes>
    <h3>How to control the DMX512 network?</h3>
    <p>In the past you had to use a DMX512 controller that was attachted over USB</p>
    <p>Create a server that can talk over USB with the controller</p>
    <p>And create a connection to the server from the Browser to exchange data</p>
  </Notes>
)

export default (
  <Slide key={uuid()}>
    <Plugins.Data luminave={['']}></Plugins.Data>
    {notes}

    <A>
      <img src="media/dmx512_controller_communication_websocketserver.svg"
                  alt="Communication with DMX Controller over USB and local WebSocket Server"
                  style={{width: 90 + "vw"}}/>
    </A>

  </Slide>
)
