import styled from 'styled-components'

export const FlexContainerCenterColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const FlexContainerHeightSpaceBetweenColumn = styled.div.attrs({
  height: props => props.height + 'px'
})`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: ${props => props.height};
`
export const FlexContainerHeightCenterColumn = styled.div.attrs({
  height: props => props.height + 'px'
})`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: ${props => props.height};
`
