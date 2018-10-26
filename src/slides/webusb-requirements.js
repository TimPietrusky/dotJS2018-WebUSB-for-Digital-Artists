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
import {ImportantLink}  from '../components/links'
import {Half} from '../masters'
import {SmallImage, LargeImage} from '../components/images'
import {css} from 'styled-components'

const {Slide, A, B} = Half

const notes = (
  <Notes>
    <h3>WebUSB</h3>
    <p>Google Chrome, because it's the only browser supporting WebUSB yet</p>
    <p>And an Arduino, because it can be used as a custom device that get's recogniced by your computer as a WebUSB device</p>
    <p>The code needed to transform your Arduino into a WebUSB compatible device can be found in this repo by one of the creators of the WebUSB spec</p>
  </Notes>
)

export default (
  <Slide key={uuid()}>
    <Plugins.Data luminave={['']}></Plugins.Data>
    {notes}

    <A>
      <LargeImage 
        src="media/google_chrome_logo.svg"
        alt="Google Chrome Logo"
      />
    </A>

    <B>
      <Fragment order={1} mixin={css`display: contents !important`}>
        <Title><RainbowText time={30} text="Arduino"/></Title>
        <SmallImage
            src="media/arduino_leonardo_.png"
            alt="Arduino Leonardo"
        />
        <br />
        <Fragment order={2}><Subtitle><ImportantLink href="https://wicg.github.io/webusb">wicg.github.io/webusb</ImportantLink></Subtitle></Fragment>
      </Fragment>
    </B>

  </Slide>
)
