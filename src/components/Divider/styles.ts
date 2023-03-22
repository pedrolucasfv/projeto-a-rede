import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10rem;
`

export const Title = styled.h2`
  max-width: 65rem;
  text-align: center;
  font-size: 12rem;
  font-weight: 800;
  text-transform: uppercase;

  
  margin-bottom: 8rem;
  ${media.lessThan('medium')`
  margin-left: 5rem;
  font-size: 4rem;
  `}
`