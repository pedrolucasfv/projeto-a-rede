import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.section`
     background: linear-gradient(
      to top left,
      #e3e3e3,
      #dedede,
      #e5e5e5,
      #ececec,
      #f5f5f5
    );
    //color: white;
`

export const Content = styled.div`
    width: 50%;`

export const Menu = styled.div`
`

export const VideoWrapper = styled.div`
    ${media.lessThan("medium")`
    height: 35rem;
    `}
    height: 50rem;
    width: 100%;
    ${media.greaterThan("huge")`
    width: 70rem;
    `}
    position: relative;
`;

/*
background: linear-gradient(
    80deg,
    rgba(255, 179, 0, 1) 0%,
    rgba(248, 204, 43, 1) 31%,
    rgba(224, 184, 90, 1) 50%,
    rgba(248, 204, 43, 1) 71%,
    rgba(255, 179, 0, 1) 100%
  );
*/