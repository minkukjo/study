(self.webpackChunkstudy=self.webpackChunkstudy||[]).push([[8574],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),k=p(n),d=o,m=k["".concat(l,".").concat(d)]||k[d]||s[d]||a;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=k;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},7286:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return c},toc:function(){return l},default:function(){return u}});var r=n(2122),o=n(9756),a=(n(7294),n(3905)),i={id:"07-container-network",title:"07. \ucee8\ud14c\uc774\ub108 \ub124\ud2b8\uc6cc\ud06c"},c={unversionedId:"kubernetes/15steps/07-container-network",id:"kubernetes/15steps/07-container-network",isDocsHomePage:!1,title:"07. \ucee8\ud14c\uc774\ub108 \ub124\ud2b8\uc6cc\ud06c",description:"\ucee8\ud14c\uc774\ub108 \ub124\ud2b8\uc6cc\ud06c\uc5d0 \ub300\ud558\uc5ec",source:"@site/docs/kubernetes/15steps/07-container-network.md",sourceDirName:"kubernetes/15steps",slug:"/kubernetes/15steps/07-container-network",permalink:"/study/docs/kubernetes/15steps/07-container-network",editUrl:"https://github.com/minkukjo/study/edit/master/docs/kubernetes/15steps/07-container-network.md",version:"current",lastUpdatedAt:1622260374,formattedLastUpdatedAt:"5/29/2021",sidebarPosition:7,frontMatter:{id:"07-container-network",title:"07. \ucee8\ud14c\uc774\ub108 \ub124\ud2b8\uc6cc\ud06c"},sidebar:"main",previous:{title:"06. \ucee8\ud14c\uc774\ub108 \uac1c\ubc1c",permalink:"/study/docs/kubernetes/15steps/06-dockerfile"},next:{title:"08. \ucee8\ud14c\uc774\ub108 API",permalink:"/study/docs/kubernetes/15steps/08-container-api"}},l=[{value:"\ucee8\ud14c\uc774\ub108 \ub124\ud2b8\uc6cc\ud06c\uc640 \ud3ec\ud2b8 \uacf5\uac1c \ubc29\ubc95",id:"\ucee8\ud14c\uc774\ub108-\ub124\ud2b8\uc6cc\ud06c\uc640-\ud3ec\ud2b8-\uacf5\uac1c-\ubc29\ubc95",children:[]},{value:"\ucee8\ud14c\uc774\ub108 \ub124\ud2b8\uc6cc\ud06c",id:"\ucee8\ud14c\uc774\ub108-\ub124\ud2b8\uc6cc\ud06c",children:[]},{value:"\uc678\ubd80\uc5d0 \ud3ec\ud2b8 \uacf5\uac1c\ud558\uae30",id:"\uc678\ubd80\uc5d0-\ud3ec\ud2b8-\uacf5\uac1c\ud558\uae30",children:[]},{value:"Reference",id:"reference",children:[]}],p={toc:l};function u(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\ucee8\ud14c\uc774\ub108 \ub124\ud2b8\uc6cc\ud06c\uc5d0 \ub300\ud558\uc5ec")),(0,a.kt)("h3",{id:"\ucee8\ud14c\uc774\ub108-\ub124\ud2b8\uc6cc\ud06c\uc640-\ud3ec\ud2b8-\uacf5\uac1c-\ubc29\ubc95"},"\ucee8\ud14c\uc774\ub108 \ub124\ud2b8\uc6cc\ud06c\uc640 \ud3ec\ud2b8 \uacf5\uac1c \ubc29\ubc95"),(0,a.kt)("p",null,"\uc2e4\ud589 \uc911\uc778 \ucee8\ud14c\uc774\ub108\ub294 IP \uc8fc\uc18c\ub97c \ud560\ub2f9 \ubc1b\uc544 \ucee8\ud14c\uc774\ub108 \uac04 \ud1b5\uc2e0\uc774 \uac00\ub2a5\ud558\ub2e4."),(0,a.kt)("img",{width:"1514",alt:"\u1109\u1173\u110f\u1173\u1105\u1175\u11ab\u1109\u1163\u11ba 2020-12-09 \u110b\u1169\u1112\u116e 11 17 17",src:"https://user-images.githubusercontent.com/43809168/101641122-b60f3780-3a74-11eb-9278-3ca9c628d2d0.png"}),(0,a.kt)("p",null,"\uc67c\ucabd \uadf8\ub9bc\ucc98\ub7fc \ud638\uc2a4\ud2b8 \ub0b4\uc758 WAS\uc640 DB\ub97c \uc5f0\uacb0\ud558\ub294 \uac83\ub3c4 \uac00\ub2a5\ud558\uba70,"),(0,a.kt)("p",null,"\ucee8\ud14c\uc774\ub108\ub97c \ud638\uc2a4\ud2b8\uc758 \uc678\ubd80 \ub124\ud2b8\uc6cc\ud06c\uc5d0 \uacf5\uac1c\ud558\ub294 \uac83\ub3c4 \uac00\ub2a5\ud558\ub2e4."),(0,a.kt)("h3",{id:"\ucee8\ud14c\uc774\ub108-\ub124\ud2b8\uc6cc\ud06c"},"\ucee8\ud14c\uc774\ub108 \ub124\ud2b8\uc6cc\ud06c"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"docker network")," \uba85\ub839\uc5b4\ub294 \ucee8\ud14c\uc774\ub108 \ub124\ud2b8\uc6cc\ud06c\ub97c \ub9cc\ub4e4\uac70\ub098 \uc9c0\uc6b8 \uc218\uc788\ub2e4."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"docker network ls : \ucee8\ud14c\uc774\ub108 \ub124\ud2b8\uc6cc\ud06c\ub97c \ub9ac\uc2a4\ud2b8\ub85c \ud45c\uc2dc")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"docker network inspect : \ub124\ud2b8\uc6cc\ud06c\uba85\uc744 \uc9c0\uc815\ud574\uc11c \uc790\uc138\ud55c \ub0b4\uc6a9\uc744 \ud45c\uc2dc")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"docker network create : \ucee8\ud14c\uc774\ub108 \ub124\ud2b8\uc6cc\ud06c\ub97c \uc0dd\uc131")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"docker network rm : \ucee8\ud14c\uc774\ub108 \ub124\ud2b8\uc6cc\ud06c\ub97c \uc0ad\uc81c")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"docker network connect : \ucee8\ud14c\uc774\ub108\ub97c \ucee8\ud14c\uc774\ub108 \ub124\ud2b8\uc6cc\ud06c\uc5d0 \uc811\uc18d")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"docker network disconnect : \ucee8\ud14c\uc774\ub108\ub97c \ucee8\ud14c\uc774\ub108 \ub124\ud2b8\uc6cc\ud06c\uc5d0\uc11c \ubd84\ub9ac"))),(0,a.kt)("h3",{id:"\uc678\ubd80\uc5d0-\ud3ec\ud2b8-\uacf5\uac1c\ud558\uae30"},"\uc678\ubd80\uc5d0 \ud3ec\ud2b8 \uacf5\uac1c\ud558\uae30"),(0,a.kt)("p",null,"\ucee8\ud14c\uc774\ub108 \ud3ec\ud2b8\ub97c \uc678\ubd80\uc5d0 \uacf5\uac1c\ud558\uae30 \uc704\ud574\uc11c\ub294 ",(0,a.kt)("inlineCode",{parentName:"p"},"-p")," \uc635\uc158\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc788\ub2e4."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"\uacf5\uac1c_\ud3ec\ud2b8\ubc88\ud638:\ucee8\ud14c\uc774\ub108_\ub0b4_\ud3ec\ud2b8\ubc88\ud638"),"\ub85c \ucee8\ud14c\uc774\ub108 \ub0b4 \ud3ec\ud2b8\ub97c \ud638\uc2a4\ud2b8\uc758 IP \uc8fc\uc18c\uc0c1\uc758 \ud3ec\ud2b8\ubc88\ud638\ub85c \ub9e4\ud551\ud560 \uc218 \uc788\ub2e4."),(0,a.kt)("h2",{id:"reference"},"Reference"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/43809168/101032998-6684c380-35bd-11eb-8ba7-a784fd46b37a.png",alt:"k8s"})),(0,a.kt)("p",null,"15\ub2e8\uacc4\ub85c \ubc30\uc6b0\ub294 \ub3c4\ucee4\uc640 \ucfe0\ubc84\ub124\ud2f0\uc2a4 - \ud0c0\uce74\ub77c \ub9c8\ud638 \uc800\uc11c"))}u.isMDXComponent=!0}}]);