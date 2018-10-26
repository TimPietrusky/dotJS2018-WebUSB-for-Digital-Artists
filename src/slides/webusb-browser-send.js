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
import {Half} from '../masters'


const {Slide, A, B} = Half

import {select} from '../utils'

const ranges = [
  [ select([2, 0], [3, 0])], // send data
]

const codeOptions = {
  lineNumbers: true,
  mode: 'javascript',
  theme: 'neo'
}

const code = `// Send data (ArrayBuffer) to the Arduino on Endpoint #4
device.transferOut(4, data)`

const notes = (
  <Notes>
    <h3>Send data to USB device</h3>
    <p>Sending an ArrayBuffer of data to the Arduino is done by calling transferOut on Endpoint 4</p>
  </Notes>
)

export default (
  <Slide key={uuid()}>
    <Plugins.Data luminave={['']}></Plugins.Data>
    {notes}

    <A>
      <Subtitle>Send data to Arduino</Subtitle>
    </A>

    <B>
      <Code2 ranges={ranges} options={codeOptions} order={-1}>
          {code}
      </Code2>
    </B>

  </Slide>
)
