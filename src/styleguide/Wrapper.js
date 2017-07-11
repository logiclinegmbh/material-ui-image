import React, { Component } from 'react'
import lightBaseTheme from '@logicline/material-ui/styles/baseThemes/lightBaseTheme'
import MuiThemeProvider from '@logicline/material-ui/styles/MuiThemeProvider'
import getMuiTheme from '@logicline/material-ui/styles/getMuiTheme'
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()

export default class Wrapper extends Component {
  render () {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
        <div style={{fontFamily: 'Roboto, sans-serif'}}>
          {this.props.children}
        </div>
      </MuiThemeProvider>
    )
  }
}
