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
import {ViewportSize} from '../components'


const {Slide, A} = Main

const notes = (
  <Notes>
    <h3>Sketch Statistics</h3>
    <p>Interesting feature</p>
    <p>When compiling and uploading the code to the Arduino is done, you get a summary of how much memory you occupied with the code.</p>
    <p>This lets you optimize your code over and over again, because you want it to be a optimized as possible. Why? so that you can add more Code in the future if you can add more features. And it's easier to understand </p>
  </Notes>
)

export default (
  <Slide key={uuid()} background="#f8f8ff">
    <Plugins.Data luminave={['']}></Plugins.Data>
    {notes}

    <A>
      <Subtitle>Sketch Statistics</Subtitle>

      <Fragment order={0}>

        <ViewportSize>
          <Code language='none' style={colorSchemes.docco}>
{`Sketch uses 8258 bytes (28%) of program storage space.
Maximum is 28672 bytes.

Global variables use 888 bytes (34%) of dynamic memory,
leaving 1672 bytes for local variables.
Maximum is 2560 bytes.`}
          </Code>
        </ViewportSize>

      </Fragment>
    </A>

  </Slide>
)
