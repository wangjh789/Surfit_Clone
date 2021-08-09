import React from 'react'
import Body from '../components/common/Body'
import Content from '../components/common/Content'
import Navigation from '../components/common/Navigation'
import {Route} from 'react-router-dom';
import CtItem from '../components/homeFeed/CtItem';

const navData = [
  {
    title:"인기카테고리",
    link:'/',
    img:'https://www.surfit.io/assets/images/emoji/emoji-hot.png',
    sub:[
      {
        title:"웹 개발",
        link:'/explore/develop/web-dev'
      },
      {
        title:'React',
        link:'/explore/develop/react'
      },
      {
        title:'Python',
        link:'/explore/develop/python'
      },
      {
        title:'Android',
        link:'/explore/develop/android'
      },
      {
        title:'빅데이터',
        link:'/explore/develop/bigdata-ai-ml'
      },{
        title:'서비스 기획',
        link:'/explore/planning/service'
      },
      {
        title:'프로젝트 관리',
        link:'/explore/planning/project-management'
      },{
        title:'인스퍼레이션',
        link:'/explore/design/inspiration'
      },{
        title:'UX/UI',
        link:'/explore/design/ui-ux'
      },{
        title:'디자인 리소스',
        link:'/explore/design/design-resource'
      },{
        title:'퍼포먼스 마케팅',
        link:'/explore/marketing/performance'
      },{
        title:'콘텐츠 마케팅',
        link:'/explore/marketing/content'
      },{
        title:'비즈니스',
        link:'/explore/startup/business'
      },{
        title:'기업 문화',
        link:'/explore/startup/management'
      }
    ]
  },{
    title:"개발",
    link:'/explore/develop',
    img:'https://storage.surfit.io/env/speciality/icon/icon-8429114075fa393cbc0834.png',
    sub:[
      {
        title:"일반 개발",
        link:"/explore/develop/general-dev"
      },
      {
        title:"웹 개발",
        link:"/explore/develop/web-dev"
      },
      {
        title:"Javascript",
        link:"/explore/develop/javascript"
      },
      {
        title:"React",
        link:"/explore/develop/react"
      },
      {
        title:"Vue.js",
        link:"/explore/develop/vuejs"
      },
      {
        title:"Angular",
        link:"/explore/develop/angular"
      },
      {
        title:"Node.js",
        link:"/explore/develop/nodejs"
      },
      {
        title:"Java",
        link:"/explore/develop/java"
      },
      {
        title:"Python",
        link:"/explore/develop/python"
      },
      {
        title:"Php",
        link:"/explore/develop/php"
      },
      {
        title:"Infra-structure",
        link:"/explore/develop/infra-structure"
      },
      {
        title:"Database",
        link:"/explore/develop/database"
      },
      {
        title:"Android",
        link:"/explore/develop/android"
      },
      {
        title:"Ios",
        link:"/explore/develop/ios"
      },
      {
        title:"Git",
        link:"/explore/develop/git"
      },
      {
        title:"빅데이터&머신러닝",
        link:"/explore/develop/bigdata-ai-ml"
      },
    ]
  }

]
const recomendPostData = [{
  title:"redux-saga 가 해결하는 문제",
  desc:'redux-saga 를 충분히 이해하려면 redux-saga 가 등장하게 된 배경부터 차근차근 짚어 봐야할 것 같다. 그리고 react, redux, redux middleware, redux-thunk, ES6 generator 에 대한 기본적인 선행 지식이 필요한데 본 글에서 해당 내용들을 자세히 다루지는 않는다. redux-saga 를 사용하는 구체적',
  pImg:'https://content.surfit.io/thumbs/image/wWDNK/5e0dZ/50131217760ffb5c46bc11.png/cover-top-2x.webp',
  pLink:'https://surfit.io/link/5e0dZ',
  tags:[{
    name:'React',
    link:'/explore/develop/react',
  },{
    name:'Redux Saga',
    link:'/tag/Redux%20Saga'
  }],
  author:'min9nim',
  aImg:'https://api.surfit.io/v1/channel/logo/wWDNK',
  aLink:'/channel/LearnApplyShare'
},
{
  title:"UX·UI 분석하고 개선하기_지그재그의 콘텐츠 이미지",
  desc:'개인 맞춤화가 대세인 요즘, 여러 큐레이션 서비스가 존재하는데요. 어떻게 지그재그가 패션 분야에서 차별화된 추천 서비스를 제공할 수 있었을까요? 이유는 흥미롭게도 여성 패션에 남다른 지식이 없었기 때문이라고 해요.지그재그 경영진 3명 모두 남성이고, 팀원 절반 이상이 IT 개발자와 데이터 분석가로 이루어져 있다고 하는데요! 여성들이 쇼핑하는 패턴을 잘 파악',
  pImg:'https://content.surfit.io/thumbs/image/K2v6K/wkxla/1668899526610248879d94b.png/cover-center-2x.webp',
  pLink:'https://brunch.co.kr/@plusx/65',
  tags:[{
    name:'UI/UX',
    link:'/explore/design/ui-ux',
  },{
    name:'service',
    link:'/explore/planning/service',
  }],
  author:'플러스엑스',
  aImg:'https://api.surfit.io/v1/channel/logo/K2v6K',
  aLink:'/channel/%ED%94%8C%EB%9F%AC%EC%8A%A4%EC%97%91%EC%8A%A4'
},{
  title:"redux-saga 가 해결하는 문제",
  desc:'redux-saga 를 충분히 이해하려면 redux-saga 가 등장하게 된 배경부터 차근차근 짚어 봐야할 것 같다. 그리고 react, redux, redux middleware, redux-thunk, ES6 generator 에 대한 기본적인 선행 지식이 필요한데 본 글에서 해당 내용들을 자세히 다루지는 않는다. redux-saga 를 사용하는 구체적',
  pImg:'https://content.surfit.io/thumbs/image/wWDNK/5e0dZ/50131217760ffb5c46bc11.png/cover-top-2x.webp',
  pLink:'https://surfit.io/link/5e0dZ',
  tags:[{
    name:'React',
    link:'/explore/develop/react',
  },{
    name:'Redux Saga',
    link:'/tag/Redux%20Saga'
  }],
  author:'min9nim',
  aImg:'https://api.surfit.io/v1/channel/logo/wWDNK',
  aLink:'/channel/LearnApplyShare'
},
]
const newPostData = [{
  title:"redux-saga 가 해결하는 문제",
  desc:'redux-saga 를 충분히 이해하려면 redux-saga 가 등장하게 된 배경부터 차근차근 짚어 봐야할 것 같다. 그리고 react, redux, redux middleware, redux-thunk, ES6 generator 에 대한 기본적인 선행 지식이 필요한데 본 글에서 해당 내용들을 자세히 다루지는 않는다. redux-saga 를 사용하는 구체적',
  pImg:'https://content.surfit.io/thumbs/image/wWDNK/5e0dZ/50131217760ffb5c46bc11.png/cover-top-2x.webp',
  pLink:'https://surfit.io/link/5e0dZ',
  tags:[{
    name:'React',
    link:'/explore/develop/react',
  },{
    name:'Redux Saga',
    link:'/tag/Redux%20Saga'
  }],
  author:'min9nim',
  aImg:'https://api.surfit.io/v1/channel/logo/wWDNK',
  aLink:'/channel/LearnApplyShare'
},{
  title:"redux-saga 가 해결하는 문제",
  desc:'redux-saga 를 충분히 이해하려면 redux-saga 가 등장하게 된 배경부터 차근차근 짚어 봐야할 것 같다. 그리고 react, redux, redux middleware, redux-thunk, ES6 generator 에 대한 기본적인 선행 지식이 필요한데 본 글에서 해당 내용들을 자세히 다루지는 않는다. redux-saga 를 사용하는 구체적',
  pImg:'https://content.surfit.io/thumbs/image/wWDNK/5e0dZ/50131217760ffb5c46bc11.png/cover-top-2x.webp',
  pLink:'https://surfit.io/link/5e0dZ',
  tags:[{
    name:'React',
    link:'/explore/develop/react',
  },{
    name:'Redux Saga',
    link:'/tag/Redux%20Saga'
  }],
  author:'min9nim',
  aImg:'https://api.surfit.io/v1/channel/logo/wWDNK',
  aLink:'/channel/LearnApplyShare'
},{
  title:"redux-saga 가 해결하는 문제",
  desc:'redux-saga 를 충분히 이해하려면 redux-saga 가 등장하게 된 배경부터 차근차근 짚어 봐야할 것 같다. 그리고 react, redux, redux middleware, redux-thunk, ES6 generator 에 대한 기본적인 선행 지식이 필요한데 본 글에서 해당 내용들을 자세히 다루지는 않는다. redux-saga 를 사용하는 구체적',
  pImg:'https://content.surfit.io/thumbs/image/wWDNK/5e0dZ/50131217760ffb5c46bc11.png/cover-top-2x.webp',
  pLink:'https://surfit.io/link/5e0dZ',
  tags:[{
    name:'React',
    link:'/explore/develop/react',
  },{
    name:'Redux Saga',
    link:'/tag/Redux%20Saga'
  }],
  author:'min9nim',
  aImg:'https://api.surfit.io/v1/channel/logo/wWDNK',
  aLink:'/channel/LearnApplyShare'
},
{
  title:"UX·UI 분석하고 개선하기_지그재그의 콘텐츠 이미지",
  desc:'개인 맞춤화가 대세인 요즘, 여러 큐레이션 서비스가 존재하는데요. 어떻게 지그재그가 패션 분야에서 차별화된 추천 서비스를 제공할 수 있었을까요? 이유는 흥미롭게도 여성 패션에 남다른 지식이 없었기 때문이라고 해요.지그재그 경영진 3명 모두 남성이고, 팀원 절반 이상이 IT 개발자와 데이터 분석가로 이루어져 있다고 하는데요! 여성들이 쇼핑하는 패턴을 잘 파악',
  pImg:'https://content.surfit.io/thumbs/image/K2v6K/wkxla/1668899526610248879d94b.png/cover-center-2x.webp',
  pLink:'https://brunch.co.kr/@plusx/65',
  tags:[{
    name:'UI/UX',
    link:'/explore/design/ui-ux',
  },{
    name:'service',
    link:'/explore/planning/service',
  }],
  author:'플러스엑스',
  aImg:'https://api.surfit.io/v1/channel/logo/K2v6K',
  aLink:'/channel/%ED%94%8C%EB%9F%AC%EC%8A%A4%EC%97%91%EC%8A%A4'
},{
  title:"redux-saga 가 해결하는 문제",
  desc:'redux-saga 를 충분히 이해하려면 redux-saga 가 등장하게 된 배경부터 차근차근 짚어 봐야할 것 같다. 그리고 react, redux, redux middleware, redux-thunk, ES6 generator 에 대한 기본적인 선행 지식이 필요한데 본 글에서 해당 내용들을 자세히 다루지는 않는다. redux-saga 를 사용하는 구체적',
  pImg:'https://content.surfit.io/thumbs/image/wWDNK/5e0dZ/50131217760ffb5c46bc11.png/cover-top-2x.webp',
  pLink:'https://surfit.io/link/5e0dZ',
  tags:[{
    name:'React',
    link:'/explore/develop/react',
  },{
    name:'Redux Saga',
    link:'/tag/Redux%20Saga'
  }],
  author:'min9nim',
  aImg:'https://api.surfit.io/v1/channel/logo/wWDNK',
  aLink:'/channel/LearnApplyShare'
},{
  title:"UX·UI 분석하고 개선하기_지그재그의 콘텐츠 이미지",
  desc:'개인 맞춤화가 대세인 요즘, 여러 큐레이션 서비스가 존재하는데요. 어떻게 지그재그가 패션 분야에서 차별화된 추천 서비스를 제공할 수 있었을까요? 이유는 흥미롭게도 여성 패션에 남다른 지식이 없었기 때문이라고 해요.지그재그 경영진 3명 모두 남성이고, 팀원 절반 이상이 IT 개발자와 데이터 분석가로 이루어져 있다고 하는데요! 여성들이 쇼핑하는 패턴을 잘 파악',
  pImg:'https://content.surfit.io/thumbs/image/K2v6K/wkxla/1668899526610248879d94b.png/cover-center-2x.webp',
  pLink:'https://brunch.co.kr/@plusx/65',
  tags:[{
    name:'UI/UX',
    link:'/explore/design/ui-ux',
  },{
    name:'service',
    link:'/explore/planning/service',
  }],
  author:'플러스엑스',
  aImg:'https://api.surfit.io/v1/channel/logo/K2v6K',
  aLink:'/channel/%ED%94%8C%EB%9F%AC%EC%8A%A4%EC%97%91%EC%8A%A4'
},
]
const jobData=[{
  logo:"https://api.surfit.io/v1/jobs/image/1938067217/logo?t=1627804578&amp;a=main",
  title:"UI/UX 디자이너",
  company:'플루토',
  intro:'학술 시장을 혁신하는 AI 스타트업'
},{
  logo:"https://storage.surfit.io/job/logo/1509193191/180782846160f0f92f49f59.png",
  title:"프로덕트 디자이너 (UX/UI)",
  company:'모두싸인',
  intro:'유연근무 운영 / 주1회 원격근무 지원'
},{
  logo:"https://storage.surfit.io/job/logo/608299873/145665186560ec1130e3f96.png",
  title:"(경력, 원격가능) 프로덕트 디자이너",
  company:'MintClip',
  intro:'스톱옵션, 맥북+듀얼 모니터 제공'
},

]

const newCtItems = newPostData.map(post=><CtItem post={post}/>) ;
const recomendCtItems = recomendPostData.map(post=><CtItem post={post}/>);

const HomeFeedPage = ({match})=>{
  return (
    <>
      <Body>
        <Navigation navItems={navData}/>
        <Content newItems={newCtItems} recomendItems={recomendCtItems} jobs={jobData} params={match} page={"homeFeed"}/>
      </Body>
    </>
  )
}

export default HomeFeedPage;