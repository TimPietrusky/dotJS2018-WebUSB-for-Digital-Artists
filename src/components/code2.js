import React from 'react'
import Code from '@dekk/code'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/clike/clike'


const Code2 = props => {
  return (
    <div style={{width: 80 + "vw"}}>
      <Code {...props} />
    </div>
  )
}

export default Code2
