import Config from './config'
import React from 'react'
import uuid from 'uuid/v4'
import Fragment from '@dekk/fragment'
import {Text, Title, Subtitle, Uppercase, Bold, Center, colorSchemes} from '@dekk/text'
import {default as MaskedImage, FitImage} from '@dekk/image'
import Notes from '@dekk/speaker-notes'
import {Main} from '@dekk/master-slides'
import 'codemirror/mode/javascript/javascript'
import {Plugins} from '@dekk/deck'
// import * as wimbAnimation from '../animation'
// import * as dekkAnimation from '@dekk/animation'
// import {} from '../components'

const {Slide, A} = Main

const notes = (
  <Notes>
    <h3>WebMIDI: Demo</h3>
    <p>So when I hit a button on my MidiController, we see which note it has</p>
    <p></p>
  </Notes>
)

export default (
  <Slide key={uuid()}>
    <Plugins.Data luminave={['']}></Plugins.Data>
    {notes}

    <A>
      <br />
      <Subtitle>WebMIDI Console</Subtitle>
      <br />
      <iframe src="http://localhost:8080/demos/webmidi/"
              allow="midi"
              sandbox="allow-same-origin allow-scripts allow-forms"
              style={{width: 90 + "vw", height: 90 + "vh"}}
              frameBorder="0" />
    </A>

  </Slide>
)
