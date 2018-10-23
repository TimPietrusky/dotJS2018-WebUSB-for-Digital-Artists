import Config from './config'
import React from 'react'
import uuid from 'uuid/v4'
import Fragment from '@dekk/fragment'
import {Text, Title, Subtitle, Uppercase, Bold, Center, colorSchemes} from '@dekk/text'
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
  [ // Include WebUSB
    select([0, 10], [0, 16])
  ],
  [ // Conceptinetics
    select([1, 10], [1, 24])
  ],
  [ // localhost:1337
    select([3, 24], [3, 38])
  ],
  [ // channels
    select([6, 0], [8, 0])
  ],
  [ // Initialize dmx_master with channels
    select([9, 0], [11, 0])
  ],
  [ // incoming bytes
    select([12, 0], [14, 0])
  ],
]

const codeOptions = {
  lineNumbers: true,
  mode: 'clike',
  theme: 'neo'
}

const code = `#include <WebUSB.h>
#include <Conceptinetics.h>

WebUSB WebUSBSerial(1, "localhost:1337");
#define Serial WebUSBSerial

// Amount of DMX channels
#define channels 512

// Configure DMX shield (2 = Arduino I/O pin)
DMX_Master dmx_master(channels, 2);

// Amount of incoming bytes via WebUSB
byte incoming[channels];`

const notes = (
  <Notes>
    <p>Define the allowed website, in my case it's localhost on port 1337</p>
    <p>A universe has 512 channels, the Arduino will handle one universe</p>
    <p>DMX_master is the module to control the DMX shield</p>
  </Notes>
)

export default (
  <Slide key={uuid()}>
    <Plugins.Data luminave={['']}></Plugins.Data>
    {notes}

    <A>
      <Subtitle>Arduino Sketch</Subtitle>
      
      <Fragment order={0}>
        <Code2 ranges={ranges} options={codeOptions}>
            {code}
        </Code2>
      </Fragment>
    </A>

  </Slide>
)
