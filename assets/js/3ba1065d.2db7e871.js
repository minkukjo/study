(self.webpackChunkstudy=self.webpackChunkstudy||[]).push([[7551],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=l(r),d=a,m=s["".concat(u,".").concat(d)]||s[d]||f[d]||i;return r?n.createElement(m,o(o({ref:t},p),{},{components:r})):n.createElement(m,o({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=s;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},4410:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return o},metadata:function(){return c},toc:function(){return u},default:function(){return p}});var n=r(2122),a=r(9756),i=(r(7294),r(3905)),o={id:"01-intro",title:"01. \uc18c\uac1c"},c={unversionedId:"java/effective-java/01-intro",id:"java/effective-java/01-intro",isDocsHomePage:!1,title:"01. \uc18c\uac1c",description:"\uc774 \ucc45\uc744 \ud1b5\ud574 \ubc30\uc6b8 \uc218 \uc788\ub294 \uac83\ub4e4",source:"@site/docs/java/effective-java/01-intro.md",sourceDirName:"java/effective-java",slug:"/java/effective-java/01-intro",permalink:"/study/docs/java/effective-java/01-intro",editUrl:"https://github.com/minkukjo/study/edit/master/docs/java/effective-java/01-intro.md",version:"current",lastUpdatedAt:1622280200,formattedLastUpdatedAt:"5/29/2021",sidebarPosition:1,frontMatter:{id:"01-intro",title:"01. \uc18c\uac1c"},sidebar:"mySidebar",previous:{title:"\ud2b9\uc815 \ub178\ub4dc\uc5d0\ub9cc \ud30c\ub4dc \ubc30\ud3ec\ud558\uae30",permalink:"/study/docs/kubernetes/node-isolation"},next:{title:"02. \uac1d\uccb4 \uc0dd\uc131 \ud30c\uad34",permalink:"/study/docs/java/effective-java/02-object-create-destroy"}},u=[{value:"\uc774 \ucc45\uc744 \ud1b5\ud574 \ubc30\uc6b8 \uc218 \uc788\ub294 \uac83\ub4e4",id:"\uc774-\ucc45\uc744-\ud1b5\ud574-\ubc30\uc6b8-\uc218-\uc788\ub294-\uac83\ub4e4",children:[]},{value:"Reference",id:"reference",children:[]}],l={toc:u};function p(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\uc774-\ucc45\uc744-\ud1b5\ud574-\ubc30\uc6b8-\uc218-\uc788\ub294-\uac83\ub4e4"},"\uc774 \ucc45\uc744 \ud1b5\ud574 \ubc30\uc6b8 \uc218 \uc788\ub294 \uac83\ub4e4"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\uc774 \ucc45\uc740 \uc790\ubc14\uc640 \uadf8 \ub77c\uc774\ube0c\ub7ec\ub9ac\ub4e4 (java.util.","*",")\uc744 \ud6a8\uacfc\uc801\uc73c\ub85c \uc0ac\uc6a9\ud558\ub294 \uac83\uc744 \ub3c4\uc640\uc8fc\uae30 \uc704\ud55c \ucc45\uc774\ub2e4.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\ucf54\ub4dc \uc608\uc2dc\uac00 \ub9ce\uc73c\uba70 \uc548\ud2f0\ud328\ud134\ub3c4 \ubcf4\uc5ec\uc900\ub2e4.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\uc774 \ucc45\uc740 \uc790\ubc14 \ucd08\uae09\uc790\ub97c \uc704\ud55c \ucc45\uc774 \uc544\ub2cc ",(0,i.kt)("strong",{parentName:"p"},"\uc790\ubc14 \uace0\uae09\uc11c"),"\uc774\ub2e4.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\uc790\ubc14 9\uc5d0\uc11c\ub294 \ubaa8\ub4c8 \uc2dc\uc2a4\ud15c\uc774\ub77c\ub294 \uac1c\ub150\uc774 \uc0dd\uacbc\ub2e4. \uc790\ubc14 \ub77c\uc774\ube0c\ub7ec\ub9ac\uc5d0 \uc774 \ubaa8\ub4c8 \uac1c\ub150\uc744 \uc801\uc6a9\ud558\uba74 \uacf5\uac1c\ud560 \ud328\ud0a4\uc9c0\ub97c \uc120\ud0dd\ud574\uc11c \uc120\ud0dd\uc801\uc73c\ub85c \uacf5\uac1c\ud560 \uc218 \uc788\ub2e4."))),(0,i.kt)("h2",{id:"reference"},"Reference"),(0,i.kt)("img",{width:"360",alt:"\u1109\u1173\u110f\u1173\u1105\u1175\u11ab\u1109\u1163\u11ba 2021-04-16 \u110b\u1169\u1112\u116e 4 24 23",src:"https://user-images.githubusercontent.com/43809168/114987533-3e449400-9ed0-11eb-9b5f-a24f73b6f138.png"}),(0,i.kt)("p",null,"\uc774\ud399\ud2f0\ube0c \uc790\ubc14 Effective Java 3/E"),(0,i.kt)("p",null,"\uc800\uc790 : \uc870\uc288\uc544 \ube14\ub85c\ud06c"))}p.isMDXComponent=!0}}]);