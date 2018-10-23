import Config from './config'
import React from 'react'
import uuid from 'uuid/v4'
import Fragment from '@dekk/fragment'
import {Text, Title, Subtitle, Uppercase, Bold, Center, Code, colorSchemes} from '@dekk/text'
import {default as MaskedImage, FitImage} from '@dekk/image'
import Notes from '@dekk/speaker-notes'
import {Main} from '@dekk/master-slides'
import {Plugins} from '@dekk/deck'
// import * as wimbAnimation from '../animation'
// import * as dekkAnimation from '@dekk/animation'
import {ViewportSize, Code2} from '../components'


const {Slide, A} = Main
import {select} from '../utils'

const ranges = [
  [ // setup
    select([0, 0], [2, 0])
  ],
  [ // memset incoming
    select([3, 0], [5, 0])
  ],
  [ // Wait until Serial ready
    select([6, 0], [10, 0])
  ],
  [ // Start DMXMaster
    select([11, 0], [13, 0])
  ]
]

const codeOptions = {
  lineNumbers: true,
  mode: 'clike',
  theme: 'neo'
}

const code = `// Run once on startup
void setup() {

  // Initialize incoming with 0
  memset(incoming, 0, sizeof(incoming));

  // Wait until WebUSB connection is established
  while (!Serial) {
    ;
  }

  // Start DMXMaster & transmission to DMXShield
  dmx_master.enable();
}`

const notes = (
  <Notes>
    <p>Usually you have a setup() method to initialize stuff when the Arduino is started</p>
    <p>In our case we initialize the incoming bytes</p>
    <p>And whait until the WebUSB connection is established to start the DMXMaster</p>
    <p>Once this is done we can receive data over WebUSB and send it to the DMX shield</p>
  </Notes>
)

export default (
  <Slide key={uuid()}>
    <Plugins.Data luminave={['']}></Plugins.Data>
    {notes}

    <A>
      <Subtitle>Arduino Sketch</Subtitle>

        <Code2 ranges={ranges} options={codeOptions} order={-1}>
            {code}
        </Code2>
    </A>

  </Slide>
)
