import React from 'react'
import styled from 'styled-components'

const Layout = styled.div`
text-align: center;
z-index: 1;
`;
const ContentComp = styled.div`
display: flex;
justify-content: center;
padding: 0 20px;
position: relative;

@media screen and (max-width: 768px) {
  padding: 20px 0 0;
  }
`;
const ContentInner = styled.div`
display: grid;
grid-template-columns: 260px auto;
position: relative;
text-align: left;

@media screen and (max-width: 1024px) {
  grid-template-columns: unset;
}
@media screen and (max-width: 768px) {
  width:100%;
}
`;

const Body = ({children})=>{
  return (
    <Layout>
      <ContentComp>
        <ContentInner>
          {children[0]}
          {children[1]}
        </ContentInner>
      </ContentComp>
    </Layout>
  );
}

export default Body;