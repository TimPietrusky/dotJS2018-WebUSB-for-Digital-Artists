import React, {Component} from 'react'
import styled from 'styled-components'
import {Sequence} from '@dekk/fragment'
import {search} from '@dekk/url'
import ReactPlayer from 'react-player'


const {present, live} = search.parse(window.location.href)

export class Video extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    debugger
    if (this.props.quiet) return true

    if (this.props.isPlaying) {
      this.props.playVideo()
    } else {
      this.props.pauseVideo()
    }
  }

  componentDidUpdate(oldProps) {
    debugger
    if (this.props.quiet) return true

    if (oldProps.isPlaying !== this.props.isPlaying) {
      if (this.props.quiet) return

      if (this.props.isPlaying) {
        this.props.playVideo()
      } else {
        this.props.pauseVideo()
      }
    }
  }

  shouldComponentUpdate(nextProps) {
    debugger
    if (this.props.quiet) return true

    if (nextProps.getPlayerState() > -1) {
      return true
    }
    return false
  }

  render() {
    return this.props.children
  }
}

const StyledVideo = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex: 1;

  iframe {
    width: 100%;
    height: 100%;
  }
`

export class SuperVideo extends Component {
  constructor(props) {
    super(props)


  }

  componentDidUpdate(oldProps) {
    const video = document.getElementById('video')

    if (this.props.isPlaying) {
      video.play()
    } else {
      video.pause()
    }
  }

  render() {

    return present ?

      this.props.children({
        ...this.props,
        quiet: true,
        children: [
          <div>YouTube</div>
        ]
      }) : (
        <video 
          controls={false}
          id="video"
          src={this.props.src}
        />
    )
  }
}



/*
export class SuperVideo extends Component {
  constructor(props) {
    super(props)
  }

  render() {

    console.log(this.props)

    return present ?

      this.props.children({
        ...this.props,
        quiet: true,
        children: [
          <div>YouTube</div>
        ]
      }) : (
        <React.Fragment>
                  <ReactPlayer 
          url='media/big-buck-bunny_trailer.webm' 
          playing={false}
          />
                <StyledVideo>{props.iframe}</StyledVideo>
                {this.props.children({
                  ...this.props,
                  ...props,
                  children: [],
                  iframe: null
                })}
              </React.Fragment>


    )
  }
}
*/

/*
      <video 
        controls
        muted
        src="media/big-buck-bunny_trailer.webm"
      />
*/

/**
 * 
 * <YouTube
        videoId={this.props.videoId}
        controls={0}
        disablekb={1}
        rel={0}
        start={this.props.start}
        modestbranding={0}
        showinfo={0}
        origin={window.location.origin}
        render={props => {
          return (
            <React.Fragment>
              <StyledVideo>{props.iframe}</StyledVideo>
              {this.props.children({
                ...this.props,
                ...props,
                children: [],
                iframe: null
              })}
            </React.Fragment>
          )
        }}
      />
 */

//<YT videoId="NhJPEAR4fbI">
//{props => {
//  return (
//    <React.Fragment>
//      <Sequence order={0} steps={3}>
//        {(index, time, timeline) => {
//          return <Video {...props} isPlaying={index === 1} />
//        }}
//      </Sequence>
//    </React.Fragment>
//  )
//}}
//</YT>
