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
  [ //  get user element
    select([0, 0], [2, 0])
  ],
  [ // listen for click
    select([3, 0], [5, 0])
  ],
  [ // send
    select([5, 0], [6, 0])
  ],
]

const codeOptions = {
  lineNumbers: true,
  mode: 'javascript',
  theme: 'neo'
}

const code = `// DOM element to interact with the user
const connectButton = document.getElementById('connect')

// Listen for click
connectButton.addEventListener('click', e => {
  enable()
})
`

const notes = (
  <Notes>
    <h3>Putting everything together</h3>
    <p>Then enable() function must be called by a user action, you can't trigger enable from your code</p>
    <p>Get access to a DOM element, let's say a button</p>
    <p>Listen for the click event on the button to enable the WebUSB connection</p>
    <p>When the connection was established you can use "send" to send data to the USB device or disconnect to close the connection.</p>

  </Notes>
)

export default (
  <Slide key={uuid()}>
    <Plugins.Data luminave={['']}></Plugins.Data>
    {notes}

    <A>
      <Subtitle>WebUsbConnection.js</Subtitle>
      <Code2 ranges={ranges} options={codeOptions} order={0}>
          {code}
      </Code2>
    </A>

  </Slide>
)
