import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { FlexContainerHeightSpaceBetweenColumn } from '../components/div/Container'
import { MessageText, LogoText, SubtitleText } from '../components/text/Text'

class IndexApp extends Component {
  componentDidMount(){
    this.timeoutHandle = setTimeout(() => {
      this.props.history.push('/login')
    }, 3000)
  }
  componentWillUnmount(){
    clearTimeout(this.timeoutHandle);
  }
  render() {
    return (
      <FlexContainerHeightSpaceBetweenColumn height={(window.innerHeight-10)}>
        <div>
          <MessageText>
            版本信息
          </MessageText>
        </div>
        <div>
          <LogoText>温州鸿联建材</LogoText>
          <SubtitleText>HongLianJianCaiLianSuo</SubtitleText>
        </div>
      </FlexContainerHeightSpaceBetweenColumn>
    )
  }
}

export default withRouter(IndexApp)
