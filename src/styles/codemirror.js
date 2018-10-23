import {injectGlobal} from 'styled-components'


const monokai = `
.cm-s-monokai.CodeMirror {
  background: #272822;
  color: #f8f8f2;
}
.cm-s-monokai div.CodeMirror-selected {
  background: rgba(220, 0, 0, 0.8);
}
.cm-s-monokai .CodeMirror-line::selection,
.cm-s-monokai .CodeMirror-line > span::selection,
.cm-s-monokai .CodeMirror-line > span > span::selection {
  background: rgba(220, 0, 0, 0.6);
}
.cm-s-monokai .CodeMirror-gutters {
  background: #272822;
  border-right: 0px;
}
.cm-s-monokai .CodeMirror-guttermarker {
  color: white;
}
.cm-s-monokai .CodeMirror-guttermarker-subtle {
  color: #d0d0d0;
}
.cm-s-monokai .CodeMirror-linenumber {
  color: #d0d0d0;
}
.cm-s-monokai .CodeMirror-cursor {
  border-left: 1px solid #f8f8f0;
}

.cm-s-monokai span.cm-comment {
  color: #75715e;
}
.cm-s-monokai span.cm-atom {
  color: #ae81ff;
}
.cm-s-monokai span.cm-number {
  color: #ae81ff;
}

.cm-s-monokai span.cm-property,
.cm-s-monokai span.cm-attribute {
  color: #a6e22e;
}
.cm-s-monokai span.cm-keyword {
  color: #f92672;
}
.cm-s-monokai span.cm-builtin {
  color: #66d9ef;
}
.cm-s-monokai span.cm-string {
  color: #e6db74;
}

.cm-s-monokai span.cm-variable {
  color: #f8f8f2;
}
.cm-s-monokai span.cm-variable-2 {
  color: #9effff;
}
.cm-s-monokai span.cm-variable-3,
.cm-s-monokai span.cm-type {
  color: #66d9ef;
}
.cm-s-monokai span.cm-def {
  color: #fd971f;
}
.cm-s-monokai span.cm-bracket {
  color: #f8f8f2;
}
.cm-s-monokai span.cm-tag {
  color: #f92672;
}
.cm-s-monokai span.cm-header {
  color: #ae81ff;
}
.cm-s-monokai span.cm-link {
  color: #ae81ff;
}
.cm-s-monokai span.cm-error {
  background: #f92672;
  color: #f8f8f0;
}

.cm-s-monokai .CodeMirror-activeline-background {
  background: #373831;
}
.cm-s-monokai .CodeMirror-matchingbracket {
  text-decoration: underline;
  color: white !important;
}
`

const neo = `

.cm-s-neo div.CodeMirror-selected {
  background: rgba(125, 0, 0, 0.3);
  filter: invert(100%);
}
.cm-s-neo.CodeMirror {
  background-color: #ffffff;
  color: #2e383c;
  line-height: 1.4375;
}
.cm-s-neo .cm-comment {
  color: #75787b;
}
.cm-s-neo .cm-keyword,
.cm-s-neo .cm-property {
  color: #1d75b3;
}
.cm-s-neo .cm-atom,
.cm-s-neo .cm-number {
  color: #75438a;
}
.cm-s-neo .cm-node,
.cm-s-neo .cm-tag {
  color: #9c3328;
}
.cm-s-neo .cm-string {
  color: #b35e14;
}
.cm-s-neo .cm-variable,
.cm-s-neo .cm-qualifier {
  color: #047d65;
}

/* Editor styling */

.cm-s-neo pre {
  padding: 0;
}

.cm-s-neo .CodeMirror-gutters {
  border: none;
  border-right: 10px solid transparent;
  background-color: transparent;
}

.cm-s-neo .CodeMirror-linenumber {
  padding: 0;
  color: #e0e2e5;
}

.cm-s-neo .CodeMirror-guttermarker {
  color: #1d75b3;
}
.cm-s-neo .CodeMirror-guttermarker-subtle {
  color: #e0e2e5;
}

.cm-s-neo .CodeMirror-cursor {
  width: auto;
  border: 0;
  background: rgba(155, 157, 162, 0.37);
  z-index: 1;
}
`

injectGlobal`${neo}`
