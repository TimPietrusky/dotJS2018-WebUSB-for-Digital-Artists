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
  [ // loop
    select([0, 0], [2, 0])
  ],
  [ // WebUsb available
    select([2, 0], [4, 0])
  ],
  [ // Read 512 bytes from WebUSB
    select([5, 0], [7, 0])
  ],
  [ // terate over 512 channels
    select([8, 0], [13, 0])
  ],
  [ // Set channel
    select([10, 0], [12, 0])
  ]
]

const codeOptions = {
  lineNumbers: true,
  mode: 'clike',
  theme: 'neo'
}

const code = `// Run over and over again
void loop() {
  // WebUSB is available
  if (Serial.available() > 0) {

    // Read 512 bytes from WebUSB
    Serial.readBytes(incoming, channels);

    // Iterate over 512 channels
    for (int i = 0; i < channels; i++) {
      // Set the value for each channel
      dmx_master.setChannelValue(i + 1, incoming[i]);
    }
  }
}
`

const notes = (
  <Notes>
    <p>The second important part of an Arduino sketch is the loop method</p>
    <p>Once setup is done this is executed over and over again</p>
    <p>In this case we also wait until WebUSB is available</p>
    <p>Then we read the incoming bytes from WebUSB</p>
    <p>And iterate over every of the 512 channel values, to set them on the DMXMaster</p>
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
