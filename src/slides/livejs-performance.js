import Config from './config'
import React from 'react'
import uuid from 'uuid/v4'
import Fragment, {Sequence} from '@dekk/fragment'
import {Text, Title, Subtitle, Uppercase, Bold, Center, Code} from '@dekk/text'
import {default as MaskedImage, FitImage} from '@dekk/image'
import Notes from '@dekk/speaker-notes'
import {Main} from '@dekk/master-slides'
import {Plugins, Live} from '@dekk/dekk'
import {SuperVideo, Video} from '../components/video'

const {Slide, A} = Main

const notes = (
  <Notes>
    <h3>Demo: LiveJS Performance for JSConf EU 2018</h3>
    <p>The WebUSB DMX512 Controller used in luminave combined with visuals from modV</p>
  </Notes>
)

export default (
  <Slide key={uuid()}>
    <Plugins.Data luminave={['']}></Plugins.Data>
    {notes}

    <A>
      <Sequence order={1} steps={2}>
        {(index, time, timeline) => {
          return <Live>
              <SuperVideo 
                //src="media/IMG_0659.m4v#t=93,170"
                // src="media/JSConfEU_18_Replay_Opener.mp4#t=623"
                src="media/JSConfEU_LiveJS_Performance_2018.mp4#t=50"
                isPlaying={index===0} 
              />
            </Live>
        }}
      </Sequence>
    </A>

  </Slide>
)
