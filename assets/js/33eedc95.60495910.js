(self.webpackChunkstudy=self.webpackChunkstudy||[]).push([[2735],{3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return o},kt:function(){return m}});var l=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,l)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,l,a=function(t,e){if(null==t)return{};var n,l,a={},r=Object.keys(t);for(l=0;l<r.length;l++)n=r[l],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(l=0;l<r.length;l++)n=r[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var u=l.createContext({}),k=function(t){var e=l.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):p(p({},e),t)),n},o=function(t){var e=k(t.components);return l.createElement(u.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},d=l.forwardRef((function(t,e){var n=t.components,a=t.mdxType,r=t.originalType,u=t.parentName,o=i(t,["components","mdxType","originalType","parentName"]),d=k(n),m=a,s=d["".concat(u,".").concat(m)]||d[m]||c[m]||r;return n?l.createElement(s,p(p({ref:e},o),{},{components:n})):l.createElement(s,p({ref:e},o))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var r=n.length,p=new Array(r);p[0]=d;var i={};for(var u in e)hasOwnProperty.call(e,u)&&(i[u]=e[u]);i.originalType=t,i.mdxType="string"==typeof t?t:a,p[1]=i;for(var k=2;k<r;k++)p[k]=n[k];return l.createElement.apply(null,p)}return l.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1313:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return i},metadata:function(){return u},toc:function(){return k},default:function(){return c}});var l=n(2122),a=n(9756),r=(n(7294),n(3905)),p=["components"],i={id:"07-data-pipeline",title:"07. \ub370\uc774\ud130 \ud30c\uc774\ud504\ub77c\uc778 \uad6c\ucd95\ud558\uae30"},u={unversionedId:"kafka/kafka-core-guide/07-data-pipeline",id:"kafka/kafka-core-guide/07-data-pipeline",isDocsHomePage:!1,title:"07. \ub370\uc774\ud130 \ud30c\uc774\ud504\ub77c\uc778 \uad6c\ucd95\ud558\uae30",description:"\uce74\ud504\uce74\ub85c \ub370\uc774\ud130 \ud30c\uc774\ud504\ub77c\uc778\uc744 \uad6c\ucd95\ud558\ub294 \ubc29\ubc95\uc5d0 \ub300\ud574 \uc54c\uc544\ubcf4\uaca0\uc2b5\ub2c8\ub2e4.",source:"@site/docs/kafka/kafka-core-guide/07-data-pipeline.md",sourceDirName:"kafka/kafka-core-guide",slug:"/kafka/kafka-core-guide/07-data-pipeline",permalink:"/study/docs/kafka/kafka-core-guide/07-data-pipeline",editUrl:"https://github.com/minkukjo/study/edit/master/docs/kafka/kafka-core-guide/07-data-pipeline.md",version:"current",lastUpdatedAt:1626933696,formattedLastUpdatedAt:"7/22/2021",sidebarPosition:7,frontMatter:{id:"07-data-pipeline",title:"07. \ub370\uc774\ud130 \ud30c\uc774\ud504\ub77c\uc778 \uad6c\ucd95\ud558\uae30"},sidebar:"mySidebar",previous:{title:"05. \uce74\ud504\uce74\uc758 \ub0b4\ubd80 \uba54\ucee4\ub2c8\uc998",permalink:"/study/docs/kafka/kafka-core-guide/05-internal"},next:{title:"11. \uc2a4\ud2b8\ub9bc \ud504\ub85c\uc138\uc2f1",permalink:"/study/docs/kafka/kafka-core-guide/11-streams"}},k=[{value:"\ub370\uc774\ud130 \ud30c\uc774\ud504\ub77c\uc778\uc774\ub780",id:"\ub370\uc774\ud130-\ud30c\uc774\ud504\ub77c\uc778\uc774\ub780",children:[]},{value:"\ub370\uc774\ud130 \ud30c\uc774\ud504\ub77c\uc778 \uad6c\ucd95 \uc2dc \uace0\ub824\uc0ac\ud56d",id:"\ub370\uc774\ud130-\ud30c\uc774\ud504\ub77c\uc778-\uad6c\ucd95-\uc2dc-\uace0\ub824\uc0ac\ud56d",children:[{value:"\uc801\uc2dc\uc131",id:"\uc801\uc2dc\uc131",children:[]},{value:"\uc2e0\ub8b0\uc131",id:"\uc2e0\ub8b0\uc131",children:[]},{value:"\ub192\uc73c\uba74\uc11c\ub3c4 \uc870\uc815 \uac00\ub2a5\ud55c \ucc98\ub9ac\ub7c9",id:"\ub192\uc73c\uba74\uc11c\ub3c4-\uc870\uc815-\uac00\ub2a5\ud55c-\ucc98\ub9ac\ub7c9",children:[]},{value:"\ub370\uc774\ud130 \ud615\uc2dd",id:"\ub370\uc774\ud130-\ud615\uc2dd",children:[]},{value:"\ubcc0\ud658",id:"\ubcc0\ud658",children:[]},{value:"\ubcf4\uc548",id:"\ubcf4\uc548",children:[]},{value:"\uc7a5\uc560 \ucc98\ub9ac",id:"\uc7a5\uc560-\ucc98\ub9ac",children:[]},{value:"\uacb0\ud569\uacfc \ubbfc\ucca9\uc131",id:"\uacb0\ud569\uacfc-\ubbfc\ucca9\uc131",children:[]}]},{value:"\uce74\ud504\uce74 \ucee4\ub125\ud2b8 VS \ud504\ub85c\ub4c0\uc11c/\ucee8\uc288\uba38",id:"\uce74\ud504\uce74-\ucee4\ub125\ud2b8-vs-\ud504\ub85c\ub4c0\uc11c\ucee8\uc288\uba38",children:[]},{value:"\uce74\ud504\uce74 \ucee4\ub125\ud2b8",id:"\uce74\ud504\uce74-\ucee4\ub125\ud2b8",children:[]},{value:"\ucee4\ub125\ud2b8\uc758 \ub0b4\ubd80\uad6c\uc870",id:"\ucee4\ub125\ud2b8\uc758-\ub0b4\ubd80\uad6c\uc870",children:[{value:"\ucee4\ub125\ud130",id:"\ucee4\ub125\ud130",children:[]},{value:"\ud0dc\uc2a4\ud06c",id:"\ud0dc\uc2a4\ud06c",children:[]},{value:"\uc6cc\ucee4 \ud504\ub85c\uc138\uc2a4",id:"\uc6cc\ucee4-\ud504\ub85c\uc138\uc2a4",children:[]}]},{value:"\ucee4\ub125\ud130\ub97c \uace0\ub824\ud560 \ub54c \uc8fc\uc758\ud560 \uc810",id:"\ucee4\ub125\ud130\ub97c-\uace0\ub824\ud560-\ub54c-\uc8fc\uc758\ud560-\uc810",children:[]},{value:"\uce74\ud504\uce74 \ucee4\ub125\ud2b8\uc758 \ub300\uc548",id:"\uce74\ud504\uce74-\ucee4\ub125\ud2b8\uc758-\ub300\uc548",children:[{value:"\ub2e4\ub978 \ub370\uc774\ud130\uc2a4\ud1a0\uc5b4\uc758 \ud504\ub808\uc784\uc6cc\ud06c",id:"\ub2e4\ub978-\ub370\uc774\ud130\uc2a4\ud1a0\uc5b4\uc758-\ud504\ub808\uc784\uc6cc\ud06c",children:[]}]},{value:"\uc2a4\ud2b8\ub9bc \ud504\ub85c\uc138\uc2f1 \ud504\ub808\uc784\uc6cc\ud06c",id:"\uc2a4\ud2b8\ub9bc-\ud504\ub85c\uc138\uc2f1-\ud504\ub808\uc784\uc6cc\ud06c",children:[]},{value:"\uacb0\ub860",id:"\uacb0\ub860",children:[]},{value:"Reference",id:"reference",children:[]}],o={toc:k};function c(t){var e=t.components,n=(0,a.Z)(t,p);return(0,r.kt)("wrapper",(0,l.Z)({},o,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\uce74\ud504\uce74\ub85c \ub370\uc774\ud130 \ud30c\uc774\ud504\ub77c\uc778\uc744 \uad6c\ucd95\ud558\ub294 \ubc29\ubc95\uc5d0 \ub300\ud574 \uc54c\uc544\ubcf4\uaca0\uc2b5\ub2c8\ub2e4.")),(0,r.kt)("h2",{id:"\ub370\uc774\ud130-\ud30c\uc774\ud504\ub77c\uc778\uc774\ub780"},"\ub370\uc774\ud130 \ud30c\uc774\ud504\ub77c\uc778\uc774\ub780"),(0,r.kt)("p",null,"\uc544\ud30c\uce58 \uce74\ud504\uce74\ub97c \uc0ac\uc6a9\ud558\uc5ec \ub370\uc774\ud130 \ud30c\uc774\ud504\ub77c\uc778\uc744 \uad6c\ucd95\ud560 \ub54c \uc0ac\uc6a9\ud558\ub294 \ub450 \uac00\uc9c0 \ucf00\uc774\uc2a4\uac00 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\uccab \ubc88\uc9f8"),"\ub294 \uc544\ud30c\uce58 \uce74\ud504\uce74\uac00 \ub450 \uac1c\uc758 \uc5d4\ub4dc \ud3ec\uc778\ud2b8 \uc911 \ud558\ub098\uac00 \ub418\ub294 \ub370\uc774\ud130 \ud30c\uc774\ud504\ub77c\uc778 \uad6c\ucd95\ud558\ub294 \uacbd\uc6b0\uc785\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc774 \uacbd\uc6b0 \uce74\ud504\uce74\ub294 \uc77c\uc885\uc758 \uc5d4\ub4dc\ud3ec\uc778\ud2b8\uac00 \ub418\uba70, \uc774 \ub54c \uac1c\ubc1c\uc790\ub294 ",(0,r.kt)("strong",{parentName:"p"},"\uce74\ud504\uce74\uc758 \ub370\uc774\ud130\ub97c \uc5b4\ub5bb\uac8c \uc5d8\ub77c\uc2a4\ud2f1\uc11c\uce58\ub85c \uac00\uc838\uc62c\uae4c"),"?\uc5d0 \ub300\ud55c \ud574\ub2f5\uc744 ",(0,r.kt)("strong",{parentName:"p"},"\uce74\ud504\uce74\ub97c \uc5d4\ub4dc\ud3ec\uc778\ud2b8\ub85c \uc0ac\uc6a9\ud558\uc790"),"!\ub85c \ub0b4\ub9ac\uac8c \ub429\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uadf8\ub7ec\ub098 \uc774\ub294 \uc798\ubabb\ub41c \uc124\uacc4\uc77c \uc218 \uc788\ub2e4\uace0 \uc800\uc790\ub294 \uc9c0\uc801\ud558\uace0 \uc788\ub294\ub370\uc694."),(0,r.kt)("p",null,"\uc800\uc790\ub294 \ub370\uc774\ud130 \ud1b5\ud569\uc744 \uc704\ud574\uc11c \uce74\ud504\uce74\ub97c \uc911\uc2ec\uc73c\ub85c \ud574\uc11c \ub450 \uac1c \uc774\uc0c1\uc758 \uc2dc\uc2a4\ud15c\uc744 \uc5d4\ub4dc \ud3ec\uc778\ud2b8\ub85c \uac16\uac8c \ud558\ub294 \ud3b8\uc774 \uc88b\ub2e4\uace0 \ub9d0\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"\ub370\uc774\ud130 \ud1b5\ud569 \ubb38\uc81c\uc5d0\uc11c \ub2f9\uc7a5 \ud544\uc694\ud55c \uc5d4\ub4dc\ud3ec\uc778\ud2b8 \ubcf4\ub2e4\ub294 \ub354 \ud070 \uad00\uc810\uc744 \uace0\ub824\ud560 \uac83\uc744 \uad8c\uc7a5\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\ub450 \ubc88\uc9f8")," \ucf00\uc774\uc2a4\ub294 \uc77c\ubc18\uc801\uc73c\ub85c \uc11c\ub85c \ub2e4\ub978 \uc2dc\uc2a4\ud15c \uc911\uac04\uc5d0\uc11c \uce74\ud504\uce74\ub97c \uc911\uac1c \uc5ed\ud560\ub85c \uc0ac\uc6a9\ud558\ub294 \ud30c\uc774\ud504\ub77c\uc778 \uad6c\ucd95\uc785\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uac00\uc7a5 \uc77c\ubc18\uc801\uc778 \uce74\ud504\uce74\uc758 \uc0ac\uc6a9 \ubc29\ubc95\uc774\uae30\ub3c4 \ud558\uace0 \ub9ce\uc740 \uae30\uc5c5\ub4e4\uc774 \uc774\ub7ec\ud55c \uad6c\uc870\ub97c \uac16\uace0 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/43809168/120889305-65e5ec00-c637-11eb-98ed-487cf8398115.png",alt:"kafka_02"})),(0,r.kt)("p",null,"\uc774\ubc88 \uc2dc\uac04\uc5d0\ub294 \uce74\ud504\uce74\uc5d0\uc11c \uc81c\uacf5\ud558\ub294 \uce74\ud504\uce74 \ucee4\ub125\ud2b8 API\uac00 \uc77c\ubc18\uc801\uc778 \ud504\ub85c\ub4c0\uc11c, \ucee8\uc288\uba38 \ud074\ub77c\uc774\uc5b8\ud2b8\uc640 \uc5b4\ub5bb\uac8c \ub2e4\ub978\uc9c0 \uce74\ud504\uce74 \ucee4\ub125\ud2b8\uc5d0 \ub300\ud574 \uc870\uae08 \ub354 \uc790\uc138\ud558\uac8c \uc0b4\ud3b4\ubcf4\uaca0\uc2b5\ub2c8\ub2e4."),(0,r.kt)("h2",{id:"\ub370\uc774\ud130-\ud30c\uc774\ud504\ub77c\uc778-\uad6c\ucd95-\uc2dc-\uace0\ub824\uc0ac\ud56d"},"\ub370\uc774\ud130 \ud30c\uc774\ud504\ub77c\uc778 \uad6c\ucd95 \uc2dc \uace0\ub824\uc0ac\ud56d"),(0,r.kt)("p",null,"\ub370\uc774\ud130 \ud30c\uc774\ud504\ub77c\uc778\uc744 \uad6c\ucd95\ud560 \ub54c \uba87 \uac00\uc9c0 \uace0\ub824\ud574\uc57c\ud560 \uac83\ub4e4\uc774 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("h3",{id:"\uc801\uc2dc\uc131"},"\uc801\uc2dc\uc131"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\ud558\ub8e8\uc5d0 \ud55c \ubc88 \ub300\ub7c9\uc758 \ub370\uc774\ud130\ub97c \ubc1b\ub294 \uc2dc\uc2a4\ud15c\uc774 \uc788\ub294 \ubc18\uba74, \ub370\uc774\ud130 \uc0dd\uc131 \uc989\uc2dc \uc218 \ubc00\ub9ac\ucd08 \uc548\uc5d0 \ubc1b\uc544\uc57c\ud558\ub294 \uc2e4\uc2dc\uac04 \ucc98\ub9ac \uc2dc\uc2a4\ud15c \ub450 \uac00\uc9c0\uac00 \uc788\uc744 \ub54c \uce74\ud504\uce74\ub294 \uadf8 \uc911\uac04\uc815\ub3c4\uc758 \ud3ec\uc9c0\uc158\uc744 \uac16\uace0 \uc788\uc74c")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\uce74\ud504\uce74\ub294 \uc2dc\uac04 \ub2e8\uc704\uc758 \ubc30\uce58 \ub4e0 \uc2e4\uc2dc\uac04 \ucc98\ub9ac\ub4e0 \ub370\uc774\ud130\ub97c \uc801\uc2dc\uc5d0 \uc804\uc1a1\ud558\uace0 \ubc1b\uc744 \uc218 \uc788\ub294 \uad6c\uc870\uc5ec\uc57c\ud568")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\uc774\uac8c \uac00\ub2a5\ud55c \uc774\uc720\ub294 \ub370\uc774\ud130\uc758 \uc4f0\uae30\uc640 \uc77d\uae30\uac00 \ubd84\ub9ac\ub418\uc5b4 \uc788\uae30 \ub54c\ubb38"))),(0,r.kt)("h3",{id:"\uc2e0\ub8b0\uc131"},"\uc2e0\ub8b0\uc131"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\ub2e8\uc77c \uc7a5\uc560\uc810\uc744 \ud53c\ud558\uace0 \ubaa8\ub4e0 \uc885\ub958\uc758 \uc7a5\uc560 \ubc1c\uc0dd\uc5d0 \uc2e0\uc18d\ud558\uace0 \uc790\ub3d9\ud654\ub41c \ubcf5\uad6c\ub97c \ud560 \uc218 \uc788\uc5b4\uc57c\ud568")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\uce74\ud504\uce74\ub294 \uac00\uc6a9\uc131\uacfc \uc2e0\ub8b0\uc131\uc744 6\uc7a5\uc5d0\uc11c \ubcf4\uc7a5\ud558\uc600\uc73c\uba70, \uc790\uccb4\uc801\uc73c\ub85c ",(0,r.kt)("strong",{parentName:"p"},"\ucd5c\uc18c \ud55c \ubc88")," \ub370\uc774\ud130 \uc804\ub2ec\uc744 \uc81c\uacf5\ud55c\ub2e4.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\uce74\ud504\uce74 \ucee4\ub125\ud2b8\ub294 \uc678\ubd80 \uc2dc\uc2a4\ud15c\uacfc\uc758 \ub370\uc774\ud130 \ud1b5\ud569\uc5d0 \ud544\uc694\ud55c API\ub97c \uc81c\uacf5\ud558\ubbc0\ub85c ",(0,r.kt)("strong",{parentName:"p"},"\uc815\ud655\ud788 \ud55c \ubc88")," \ub370\uc774\ud130 \uc804\ub2ec \ud30c\uc774\ud504\ub77c\uc778\uc744 \ub354 \uc27d\uac8c \uad6c\ucd95\ud560 \uc218 \uc788\uc74c"))),(0,r.kt)("h3",{id:"\ub192\uc73c\uba74\uc11c\ub3c4-\uc870\uc815-\uac00\ub2a5\ud55c-\ucc98\ub9ac\ub7c9"},"\ub192\uc73c\uba74\uc11c\ub3c4 \uc870\uc815 \uac00\ub2a5\ud55c \ucc98\ub9ac\ub7c9"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\uce74\ud504\uce74\ub294 \ub9e4\uc6b0 \ub192\uc740 ",(0,r.kt)("strong",{parentName:"p"},"Throughput"),"\uc744 \uac16\ub3c4\ub85d \ud655\uc7a5\ud560 \uc218 \uc788\uc5b4\uc57c \ud558\uba70 \ubd88\uc2dc\uc5d0 \ucc98\ub9ac\ub7c9\uc774 \uc99d\uac00\ud558\ub354\ub77c\ub3c4 \uc870\uc815\ud560 \uc218 \uc788\uc5b4\uc57c \ud55c\ub2e4.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\uce74\ud504\uce74\ub294 \ud3c9\ubc94\ud55c \ud074\ub7ec\uc2a4\ud130\uc5d0\uc11c\ub3c4 \ucd08\ub2f9 ",(0,r.kt)("strong",{parentName:"p"},"\uc218\ubc31 \uba54\uac00 \ubc14\uc774\ud2b8"),"\ub97c \ucc98\ub9ac\ud560 \uc218 \uc788\ub294 \uace0\uc131\ub2a5 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc774\ub2e4.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\uc989 \uce74\ud504\uce74\uac00 \uc694\uad6c\uc0ac\ud56d\uc5d0 \ub9de\uac8c \ud655\uc7a5\ub418\uc9c0 \ubabb\ud560 \uac83\uc774\ub77c\ub294 \uac71\uc815\uc740 \ud544\uc694 \uc5c6\ub2e4."))),(0,r.kt)("h3",{id:"\ub370\uc774\ud130-\ud615\uc2dd"},"\ub370\uc774\ud130 \ud615\uc2dd"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\uce74\ud504\uce74\uc640 \uce74\ud504\uce74 \ucee4\ub125\ud2b8 API\ub294 \ub370\uc774\ud130 \ud615\uc2dd\uc5d0 \uad6c\uc560\ubc1b\uc9c0 \uc54a\ub294\ub2e4. (\ubcc0\ud658\uae30\ub97c \uc0ac\uc6a9\ud558\uba74 \uc5b4\ub5a4 \ud615\uc2dd\uc73c\ub85c\ub3c4 \ub370\uc774\ud130 \uc800\uc7a5 \uac00\ub2a5)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"ES\ub294 JSON, \ud558\ub461\uc740 Parquet(\ud30c\ucf00\uc774), \uc544\ub9c8\uc874 S3\ub294 CSV \ud615\uc2dd\uc744 \ubc1b\ub294\ub370 \uce74\ud504\uce74 \ucee4\ub125\ud2b8 API\ub294 \uc774 \ubaa8\ub450\ub97c \uc9c0\uc6d0\ud55c\ub2e4."))),(0,r.kt)("h3",{id:"\ubcc0\ud658"},"\ubcc0\ud658"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\uce74\ud504\uce74\ub294 ETL\uacfc ELT\ub97c \ubaa8\ub450 \uc9c0\uc6d0\ud55c\ub2e4.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"ETL\uc740 \ub4e4\uc5b4\ubcf8\uc801 \uc788\ub294\ub370, ELT\uc758 \uacbd\uc6b0 \ub300\uc0c1 \uc2dc\uc2a4\ud15c\uc5d0 \uc804\ub2ec\ub418\ub294 \ub370\uc774\ud130\uac00 \uc6d0\ubcf8 \ub370\uc774\ud130\uc640 \ucd5c\ub300\ud55c \uc720\uc0ac\ud558\uac8c \uc804\ub2ec\ud558\uae30 \uc704\ud568\uc774\ub77c\uace0 \ud55c\ub2e4.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\uadf8\ub798\uc11c \ub300\uc6a9\ub7c9 \ub370\uc774\ud130\ub97c ELT\ub85c \ucc98\ub9ac\ud558\uba74 \ub300\uc0c1 \uc2dc\uc2a4\ud15c\uc758 \ubd80\ud558\uac00 \uc788\uc744 \uc218 \uc788\ub2e4\uace0 \ud55c\ub2e4.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"ETL\uacfc ELT\uc758 \ucc28\uc774\ub294 ",(0,r.kt)("strong",{parentName:"p"},"\ub204\uac00 \ub370\uc774\ud130 \ubcc0\ud658\uc758 \ucc45\uc784\uc744 \uac00\uc9c0\ub0d0"),"\uac00 \ud575\uc2ec\uc778 \uac83 \uac19\ub2e4"))),(0,r.kt)("h3",{id:"\ubcf4\uc548"},"\ubcf4\uc548"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\ud30c\uc774\ud504\ub77c\uc778\uc744 \uac70\uccd0 \uac00\ub294 \ub370\uc774\ud130\uac00 \uc554\ud638\ud654\ub41c\ub2e4\uace0 \ud655\uc2e0, \ubcf4\uc7a5\ud560 \uc218 \uc788\ub294\uac00?")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\ud30c\uc774\ud504\ub77c\uc778\uc744 \uc218\uc815\ud560 \uc218 \uc788\ub3c4\ub85d \ud5c8\uc6a9\ub41c \uc0ac\ub78c\uc740 \ub204\uad6c\uc778\uac00?")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\uc811\uadfc\uc774 \uc81c\uc5b4\ub41c \uc2dc\uc2a4\ud15c\uc5d0\uc11c \ub370\uc774\ud130\ub97c \ud30c\uc774\ud504\ub77c\uc778\uc73c\ub85c \uc77d\uac70\ub098 \uc4f8 \ub54c, \uc778\uc99d \uae30\ub2a5\uc744 \uc62c\ubc14\ub974\uac8c \uc0ac\uc6a9\ud558\uace0 \uc788\ub294\uac00?")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\uce74\ud504\uce74\ub294 \ub370\uc774\ud130 \uc804\uc1a1\uc2dc \uc554\ud638\ud654\ub41c \ub370\uc774\ud130\uc758 \ub124\ud2b8\uc6cc\ud06c \uc804\uc1a1\uc744 \ud5c8\uc6a9\ud558\uace0, SASL(Simple Authentication and Security Layer) \uc778\uc99d\uc744 \uc9c0\uc6d0\ud55c\ub2e4."))),(0,r.kt)("h3",{id:"\uc7a5\uc560-\ucc98\ub9ac"},"\uc7a5\uc560 \ucc98\ub9ac"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uce74\ud504\uce74\ub294 \ubaa8\ub4e0 \ub370\uc774\ud130\ub97c \uae34 \uc2dc\uac04\ub3d9\uc548 \uc800\uc7a5\ud558\ubbc0\ub85c \uc7a5\uc560\uac00 \ubc1c\uc0dd\ud558\uba74 \ud574\ub2f9 \uc2dc\uc810\uc5d0 \ub9de\uac8c \uc774\uc804\uc73c\ub85c \ub3cc\uc544\uac00\uc11c \uc5d0\ub7ec\ub97c \ubcf5\uad6c\ud560 \uc218 \uc788\ub2e4.")),(0,r.kt)("h3",{id:"\uacb0\ud569\uacfc-\ubbfc\ucca9\uc131"},"\uacb0\ud569\uacfc \ubbfc\ucca9\uc131"),(0,r.kt)("h4",{id:"\uc784\uae30\uc751\ubcc0\uc2dd-\ud30c\uc774\ud504\ub77c\uc778"},"\uc784\uae30\uc751\ubcc0\uc2dd \ud30c\uc774\ud504\ub77c\uc778"),(0,r.kt)("p",null,"ES\uc640 Logstash\ub294 ELK \uc2a4\ud0dd\uc774\ub77c\uace0\ub3c4 \ubd88\ub9ac\uba70 \ud658\uc0c1\uc758 \uc9dd\uafcd\uc73c\ub85c \ubd88\ub9ac\uc9c0\ub9cc, \ub85c\uadf8\uc2a4\ud0dc\uc2dc\ub77c\ub294 \ub370\uc774\ud130 \ud30c\uc774\ud504\ub77c\uc778\uc744 \uad6c\uc131\ud558\uac8c \ub418\uba74 \ucee4\uc2a4\ud140 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\ub4e4\uc774 \uc774\ub7f0 \uc5d4\ub4dc\ud3ec\uc778\ud2b8\uc640 \uac15\ud558\uac8c \uacb0\ud569\ub418\uc5b4\uc11c \uc774\ud6c4 \uc720\uc9c0\ubcf4\uc218\uac00 \uc5b4\ub835\uac8c \ub420 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("h4",{id:"\uba54\ud0c0\ub370\uc774\ud130-\uc720\uc2e4"},"\uba54\ud0c0\ub370\uc774\ud130 \uc720\uc2e4"),(0,r.kt)("p",null,"\ub370\uc774\ud130 \ud30c\uc774\ud504\ub77c\uc778\uc774 \uc2a4\ud0a4\ub9c8 \uba54\ud0c0\ub370\uc774\ud130\ub97c \ubcf4\uc874\ud558\uc9c0\uc54a\uace0 \uc2a4\ud0a4\ub9c8\uc758 \uc9c4\ud654\ub97c \ud5c8\uc6a9\ud558\uc9c0 \uc54a\uc73c\uba74, \ub370\uc774\ud130\ub97c \uc0dd\uc131\ud558\ub294 \ucabd\uacfc \uc18c\ube44\ud558\ub294 \ucabd \uac04\uc758 \uac15\uacb0\ud569\uc774 \ubc1c\uc0dd\ud558\uac8c \ub429\ub2c8\ub2e4."),(0,r.kt)("p",null,"\ud30c\uc774\ud504\ub77c\uc778\uc774 \uc2a4\ud0a4\ub9c8 \ub370\uc774\ud130\ub97c \uac16\uace0 \uc788\uc9c8 \uc54a\uc73c\uba74 \ub2e4\ub978 \ub450 \uc2dc\uc2a4\ud15c\uc774 \uc2a4\ud0a4\ub9c8\uc5d0 \ub300\ud55c \uc815\ubcf4\ub97c \uac01\uc790 \uac16\uace0 \uc788\uc744 \uc218 \ubc16\uc5d0 \uc5c6\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"\ub9cc\uc57d \uc624\ub77c\ud074 DB\ub85c \ubd80\ud130 HDFS\ub85c \ub370\uc774\ud130\uac00 \uc774\ub3d9\ud558\ub294 \uad6c\uc870\uc5d0\uc11c \uc624\ub77c\ud074 DB\uc5d0 \uceec\ub7fc\uc774 \ucd94\uac00\ub418\uba74 HDFS\ub85c\ubd80\ud130 \ub370\uc774\ud130\ub97c \uc77d\ub294 \ubaa8\ub4e0 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc774 \uc911\ub2e8\ub420 \uac83\uc785\ub2c8\ub2e4."),(0,r.kt)("p",null,"\ubc18\ub300\ub85c \ud30c\uc774\ud504\ub77c\uc778\uc5d0\uc11c \uc2a4\ud0a4\ub9c8 \uc9c4\ud654\ub97c \uc9c0\uc6d0\ud55c\ub2e4\uba74 \uac01 \uc2dc\uc2a4\ud15c\ub4e4\uc740 \uc720\uc5f0\ud558\uac8c \ubcc0\uacbd\ud560 \uc218 \uc788\uc744 \uac83\uc785\ub2c8\ub2e4."),(0,r.kt)("h4",{id:"\uacfc\ub3c4\ud55c-\ucc98\ub9ac"},"\uacfc\ub3c4\ud55c \ucc98\ub9ac"),(0,r.kt)("p",null,"\ud30c\uc774\ud504\ub77c\uc778\uc5d0\uc11c \ub108\ubb34 \ub9ce\uc740 \ucc98\ub9ac\ub97c \ud574\ubc84\ub9ac\uba74 \ud6c4\uc18d \uc2dc\uc2a4\ud15c\ub4e4\uc774 \ud30c\uc774\ud504\ub77c\uc778\uc5d0 \uc885\uc18d\uc801\uc774\uac8c \ub429\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uac00\ub839 \uc5b4\ub5a4 \ud544\ub4dc\ub97c \ubcf4\uc874\ud558\uace0, \ub370\uc774\ud130 \uc9d1\uacc4\ub97c \uc5b4\ub5bb\uac8c \ud560 \uc9c0\uc5d0 \ub300\ud55c \uc694\uad6c\uc0ac\ud56d\uc774 \uc788\uc744 \ub54c \ud30c\uc774\ud504\ub77c\uc778\uc758 \ucc98\ub9ac \ub85c\uc9c1\uc744 \ubcc0\uacbd\ud574\uc57c\ud558\uae30 \ub54c\ubb38\uc5d0 \uc2e0\uc18d\uc131, \ud6a8\uc728\uc131, \uc548\uc804\uc131\uc774 \ub5a8\uc5b4\uc9c0\uac8c \ub429\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uadf8\ub7ec\ub2c8 \uac00\ub2a5\ud55c \uc6d0\uc2dc \ub370\uc774\ud130\uc758 \ud615\ud0dc\ub85c \ubcf4\uc874\ud558\ub294 \ud3b8\uc774 \uc88b\uace0, \ud6c4\uc18d \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0\uc11c \uc2a4\uc2a4\ub85c \uacb0\uc815\ud558\uc5ec \ub370\uc774\ud130 \ucc98\ub9ac\ub97c \ud558\ub294 \ud3b8\uc774 \ub354 \ub098\uc740 \ubc29\ubc95\uc785\ub2c8\ub2e4."),(0,r.kt)("h2",{id:"\uce74\ud504\uce74-\ucee4\ub125\ud2b8-vs-\ud504\ub85c\ub4c0\uc11c\ucee8\uc288\uba38"},"\uce74\ud504\uce74 \ucee4\ub125\ud2b8 VS \ud504\ub85c\ub4c0\uc11c/\ucee8\uc288\uba38"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\ub458 \uc911 \uc5b8\uc81c \uc5b4\ub290 \uac83\uc744 \uc0ac\uc6a9\ud558\ub294 \ud3b8\uc774 \uc88b\uc744\uae4c?")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\ucf54\ub4dc\ub97c \uc791\uc131\ud560 \uc218 \uc5c6\uace0 \ubcc0\uacbd\ub3c4 \ubd88\uac00\ub2a5\ud55c \uc2dc\uc2a4\ud15c\ub4e4 ( DB, Storage Service, Amazon S3, \ud558\ub461 HDFS, ES )\uc5d0 \uce74\ud504\uce74\ub97c \uc5f0\uacb0\ud560 \ub54c ",(0,r.kt)("strong",{parentName:"p"},"\uce74\ud504\uce74 \ucee4\ub125\ud2b8"),"\ub97c \uc0ac\uc6a9\ud55c\ub2e4.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\uce74\ud504\uce74\uc758 \ub370\uc774\ud130\ub97c \uc77c\uac70\uc5c7 \uc678\ubd80 \uc2dc\uc2a4\ud15c\uc5d0 \uc4f0\ub294\ub370 \uc0ac\uc6a9\ud558\ub294 \ucef4\ud3ec\ub10c\ud2b8 \ud074\ub798\uc2a4\uac00 ",(0,r.kt)("strong",{parentName:"p"},"\ucee4\ub125\ud130")))),(0,r.kt)("img",{width:"652",alt:"\u1109\u1173\u110f\u1173\u1105\u1175\u11ab\u1109\u1163\u11ba 2021-06-05 \u110b\u1169\u1112\u116e 9 19 46",src:"https://user-images.githubusercontent.com/43809168/120891464-c3803580-c643-11eb-9770-d48bea81d4e9.png"}),(0,r.kt)("h2",{id:"\uce74\ud504\uce74-\ucee4\ub125\ud2b8"},"\uce74\ud504\uce74 \ucee4\ub125\ud2b8"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uce74\ud504\uce74 \ucee4\ub125\ud2b8\ub294 \uc544\ud30c\uce58 \uce74\ud504\uce74\uc758 \uc77c\ubd80\ub85c \ud3ec\ud568\ub418\uba70 \uce74\ud504\uce74\uc640 \ub2e4\ub978 \ub370\uc774\ud130 \uc800\uc7a5\uc18c\uac04\uc758 \ub370\uc774\ud130 \uc774\ub3d9\uc744 \uc704\ud574 \ud655\uc7a5\uc131\uacfc \uc2e0\ub8b0\uc131 \uc788\ub294 \ubc29\ubc95\uc744 \uc81c\uacf5\ud55c\ub2e4.")),(0,r.kt)("img",{width:"888",alt:"\u1109\u1173\u110f\u1173\u1105\u1175\u11ab\u1109\u1163\u11ba 2021-06-05 \u110b\u1169\u1112\u116e 8 24 39",src:"https://user-images.githubusercontent.com/43809168/120890202-0e964a80-c63c-11eb-9362-48db79845ca6.png"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\uce74\ud504\uce74 \ucee4\ub125\ud130\ub294 ",(0,r.kt)("strong",{parentName:"p"},"Source")," \ucee4\ub125\ud130\uc640 ",(0,r.kt)("strong",{parentName:"p"},"Sink")," \ucee4\ub125\ud130 \ub450 \uc885\ub958\ub85c \ub098\ub220\uc9c4\ub2e4.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\uc18c\uc2a4 \ucee4\ub125\ud130 : \uc678\ubd80 \uc2dc\uc2a4\ud15c -> \ucee4\ub125\ud2b8 -> \uce74\ud504\uce74")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\uc2f1\ud06c \ucee4\ub125\ud130 : \uce74\ud504\uce74 -> \ucee4\ub125\ud2b8 -> \uc678\ubd80 \uc2dc\uc2a4\ud15c"))),(0,r.kt)("h2",{id:"\ucee4\ub125\ud2b8\uc758-\ub0b4\ubd80\uad6c\uc870"},"\ucee4\ub125\ud2b8\uc758 \ub0b4\ubd80\uad6c\uc870"),(0,r.kt)("img",{width:"813",alt:"\u1109\u1173\u110f\u1173\u1105\u1175\u11ab\u1109\u1163\u11ba 2021-06-05 \u110b\u1169\u1112\u116e 8 31 00",src:"https://user-images.githubusercontent.com/43809168/120890329-f1ae4700-c63c-11eb-9e9f-da549304ef28.png"}),(0,r.kt)("p",null,"\ucee4\ub125\ud2b8\ub294 \ubbf8\ub9ac \ud15c\ud50c\ub9bf\uc774 \uad6c\ud604\ub418\uc5b4\uc788\uace0 \uadf8 \ud15c\ud50c\ub9bf\uc758 \uc124\uc815\uac12\uc744 \uae30\uc900\uc73c\ub85c \uc778\uc2a4\ud134\uc2a4\ub97c \uc0dd\uc131\ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,"\ucee4\ub125\ud2b8\uc5d0\uc11c\ub294 \uadf8 \ud15c\ud50c\ub9bf\uc744 ",(0,r.kt)("strong",{parentName:"p"},"Plugin"),"\uc774\ub77c \ubd80\ub985\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc774\uc81c\ubd80\ud130 \ud558\ub098\uc529 \uc790\uc138\ud788 \uadf8 \uc5ed\ud560\uc744 \ub4e4\uc5ec\ub2e4\ubcf4\ub3c4\ub85d \ud558\uaca0\uc2b5\ub2c8\ub2e4."),(0,r.kt)("h3",{id:"\ucee4\ub125\ud130"},"\ucee4\ub125\ud130"),(0,r.kt)("p",null,"\ucee4\ub125\ud130\ub294 \ud30c\uc774\ud504\ub77c\uc778\uc758 Task\ub4e4\uc744 \uad00\ub9ac\ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc608\ub97c \ub4e4\uc5b4, JDBC \uc18c\uc2a4 \ucee4\ub125\ud130\ub294 DB\uc5d0 \uc5f0\uacb0\ud558\uace0 \ubcf5\uc0ac\ud560 \uae30\uc874 \ud14c\uc774\ube14\ub4e4\uc744 \ucc3e\uc740 \ud6c4 \uadf8 \uacb0\uacfc\uc5d0 \uae30\ubc18\ud574 \uba87 \uac1c\uc758 \ud14c\uc2a4\ud06c\uac00 \ud544\uc694\ud55c\uc9c0\ub97c \uacb0\uc815\ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,"REST API\ub97c \uc0ac\uc6a9\ud574\uc11c \ucee4\ub125\ud130\ub97c \uc2e4\ud589\ud560 \ub54c\ub294 \uc5b4\ub5a4 \ub178\ub4dc\uc5d0\uc11c\ub3c4 \uc2dc\uc791\uc2dc\ud0ac \uc218 \uc788\uace0, \uc774\ud6c4 \uc2e4\ud589\ub418\ub294 \ud14c\uc2a4\ud06c\ub4e4\ub3c4 \ub9c8\ucc2c\uac00\uc9c0\ub85c REST API\ub85c \uc2e4\ud589\uc2dc\ud0ac \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("h3",{id:"\ud0dc\uc2a4\ud06c"},"\ud0dc\uc2a4\ud06c"),(0,r.kt)("p",null,"\ud0dc\uc2a4\ud06c\ub294 \uce74\ud504\uce74\uc758 \ub370\uc774\ud130\ub97c \uc2e4\uc81c\ub85c \uc785\ucd9c\ub825\ud558\ub294 \ucc45\uc784\uc744 \uac16\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"\ubaa8\ub4e0 \ud0dc\uc2a4\ud06c\ub294 \uad00\ub828 \uc6cc\ucee4 \ud504\ub85c\uc138\uc2a4\ub85c\ubd80\ud130 ",(0,r.kt)("strong",{parentName:"p"},"\ucee8\ud14d\uc2a4\ud2b8"),"\ub97c \ubc1b\uc544 \ucd08\uae30\ud654\ub429\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc608\ub97c \ub4e4\uc5b4, \uc18c\uc2a4 \ucee8\ud14d\uc2a4\ud2b8\ub294 \ud558\ub098\uc758 \uac1d\uccb4\ub97c \ud3ec\ud568\ud558\uba70 \uc774 \uac1d\uccb4\ub294 \uc18c\uc2a4 \ud0dc\uc2a4\ud06c\uac00 \uc18c\uc2a4 \ub808\ucf54\ub4dc\uc758 \uc624\ud504\uc14b\uc744 \uc800\uc7a5\ud560 \uc218 \uc788\uac8c \ud574\uc90d\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc989 \ud0dc\uc2a4\ud06c\ub294 \uce74\ud504\uce74\uc640\uc758 \uba54\uc2dc\uc9c0 \ubcf5\uc81c\uc5d0 \ub300\ud55c \uad6c\ud604\uccb4\uc774\uace0 \uc2e4\uc81c \ud30c\uc774\ud504\ub77c\uc778\uc758 \ub3d9\uc791 \uc694\uc18c\ub4e4\uc785\ub2c8\ub2e4."),(0,r.kt)("h3",{id:"\uc6cc\ucee4-\ud504\ub85c\uc138\uc2a4"},"\uc6cc\ucee4 \ud504\ub85c\uc138\uc2a4"),(0,r.kt)("p",null,"\uce74\ud504\uce74 \ucee4\ub125\ud2b8\uc758 \uc6cc\ucee4 \ud504\ub85c\uc138\uc2a4\ub294 \ucee4\ub125\ud130\uc640 \ud0dc\uc2a4\ud06c\ub97c \uc2e4\ud589\ud558\ub294 ",(0,r.kt)("strong",{parentName:"p"},"\ucee8\ud14c\uc774\ub108")," \ud504\ub85c\uc138\uc2a4\uc785\ub2c8\ub2e4."),(0,r.kt)("p",null,"\ucee4\ub125\ud130\uc640 \ucee4\ub125\ud130\uc758 \uad6c\uc131\uc744 \uc815\uc758\ud558\ub294 HTTP \uc694\uccad\uc744 \ucc98\ub9ac\ud558\ub294 \ucc45\uc784\uc744 \uac16\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc6cc\ucee4 \ud504\ub85c\uc138\uc2a4\ub294 \ucee4\ub125\ud2b8\uc758 \uad6c\uc131\uc744 \uc800\uc7a5\ud558\uace0 \ucee4\ub125\ud130\uc640 \ud574\ub2f9 \ucee4\ub125\ud130\uc758 \ud0dc\uc2a4\ud06c\ub97c \uc2e4\ud589\uc2dc\ud0b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"\ub9cc\uc57d \ud2b9\uc815 \uc6cc\ucee4 \ud504\ub85c\uc138\uc2a4\uac00 \uc911\uc9c0\ub418\uba74 \ucee4\ub125\ud2b8 \ud074\ub7ec\uc2a4\ud130\uc758 \ub2e4\ub978 \uc6cc\ucee4 \ud504\ub85c\uc138\uc2a4\ub4e4\uc774 \uc774\ub97c \uc54c\uac8c \ub418\uace0, \uc911\ub2e8\ub41c \uc6cc\ucee4 \ud504\ub85c\uc138\uc2a4\uc5d0\uc11c \uc2e4\ud589\ub418\ub358 \ucee4\ub125\ud130\uc640 \ud0dc\uc2a4\ud06c\ub4e4\uc774 \ub098\uba38\uc9c0 \uc6cc\ucee4 \ud504\ub85c\uc138\uc2a4\ub4e4\uc5d0\uac8c \uc7ac\ud560\ub2f9\ub429\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc0c8\ub85c\uc6b4 \uc6cc\ucee4 \ud504\ub85c\uc138\uc2a4\uac00 \ucee4\ub125\ud2b8 \ud074\ub7ec\uc2a4\ud130\uc5d0 \ud569\ub958\ud558\uba74, \ub2e4\ub978 \uc6cc\ucee4 \ud504\ub85c\uc138\uc2a4\ub4e4\uc774 \uc774\ub97c \uc54c\uac8c \ub418\uace0, \ubaa8\ub4e0 \uc6cc\ucee4 \ud504\ub85c\uc138\uc2a4\uc758 \uc6cc\ucee4\ub7c9\uc774 \uade0\ub4f1\ud558\uac8c \uc870\uc815\ub418\ub3c4\ub85d \uc0c8\ub85c \ud569\ub958\ud55c \uc6cc\ucee4 \ud504\ub85c\uc138\uc2a4\uc5d0\uac8c \ucee4\ub125\ud130\uc640 \ud0dc\uc2a4\ud06c\uac00 \ud560\ub2f9\ub429\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc6cc\ucee4 \ud504\ub85c\uc138\uc2a4\ub294 \uc18c\uc2a4\uc640 \uc2f1\ud06c \ucee4\ub125\ud130 \ubaa8\ub450\uc758 \uc624\ud504\uc14b\uc744 \uc790\ub3d9\uc73c\ub85c \ucee4\ubc0b\ud558\uace0 \uc5d0\ub7ec\uac00 \uc0dd\uae38 \ub54c \uc7ac\uc2dc\ub3c4\ub97c \uc218\ud589\ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,"\ucee4\ub125\ud130\uc640 \ud0dc\uc2a4\ud06c\ub294 \ub370\uc774\ud130 \ud1b5\ud569\uc5d0\uc11c ",(0,r.kt)("strong",{parentName:"p"},"\uc774\ub3d9\ub418\ub294 \ub370\uc774\ud130"),"\ub9cc\uc744 \ucc98\ub9ac\ud55c\ub2e4\uba74,"),(0,r.kt)("p",null,"\uc6cc\ucee4 \ud504\ub85c\uc138\uc2a4\ub294 REST API, \uad6c\uc131 \uad00\ub9ac, \uc2e0\ub8b0\uc131, \uace0\uac00\uc6a9\uc131, \ud655\uc7a5\uc131, \ubd80\ud558 \ubd84\uc0b0 \ub4f1\uc758 \ubaa8\ub4e0 \uc791\uc5c5\uc744 \ucc98\ub9ac\ud558\ub294 \ucc45\uc784\uc744 \uac16\uc2b5\ub2c8\ub2e4."),(0,r.kt)("h2",{id:"\ucee4\ub125\ud130\ub97c-\uace0\ub824\ud560-\ub54c-\uc8fc\uc758\ud560-\uc810"},"\ucee4\ub125\ud130\ub97c \uace0\ub824\ud560 \ub54c \uc8fc\uc758\ud560 \uc810"),(0,r.kt)("p",null,"\ucee4\ub125\ud130\ub97c \uad6c\uc131\ud560 \ub54c \uba87 \uac00\uc9c0 \uc8fc\uc758\ud574\uc57c\ud560 \uc810\uc774 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\uc678\ubd80 \uc2dc\uc2a4\ud15c\uc744 \uc9c0\uc6d0\ud558\ub294 \ud50c\ub7ec\uadf8\uc778\uc758 \uc874\uc7ac \uc720\ubb34")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\ud574\ub2f9 \ud50c\ub7ec\uadf8\uc778\uc758 \ub77c\uc774\uc13c\uc2a4 \uc815\ubcf4"))),(0,r.kt)("p",null,"\ud50c\ub7ec\uadf8\uc778\uc758 \uacbd\uc6b0 \uc81c\uacf5\ud558\ub294 \uc5c5\uccb4\ub098 \ucee4\ubba4\ub2c8\ud2f0\uac00 \uac01\uac01 \ub2e4\ub985\ub2c8\ub2e4. (\uc2ec\uc9c0\uc5b4 \uc2f1\ud06c\uc640 \uc18c\uc2a4\ub3c4 \ub530\ub85c \uc81c\uacf5\ub418\ub294 \uacbd\uc6b0\ub3c4 \ub9ce\ub2e4\uace0 \ud569\ub2c8\ub2e4)"),(0,r.kt)("p",null,"\uadf8\ub807\uae30 \ub54c\ubb38\uc5d0 \ucee4\ub125\ud130\ub97c \uace0\ub824\ud560 \ub54c\ub294 \ub77c\uc774\uc13c\uc2a4\ub3c4 \uac19\uc774 \ud655\uc778\uc744 \ud574\ubd10\uc57c\ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,"JDBC Connector\uc758 \uacbd\uc6b0 Source\uc640 Sink\ub97c \ubaa8\ub450 \uc9c0\uc6d0\ud558\uace0 \ubb34\ub8cc\uc785\ub2c8\ub2e4."),(0,r.kt)("h2",{id:"\uce74\ud504\uce74-\ucee4\ub125\ud2b8\uc758-\ub300\uc548"},"\uce74\ud504\uce74 \ucee4\ub125\ud2b8\uc758 \ub300\uc548"),(0,r.kt)("p",null,"\uc9c0\uae08\uae4c\uc9c0 \uce74\ud504\uce74 \ucee4\ub125\ud2b8 API\uc5d0 \uad00\ud574 \uae4a\uac8c \uacf5\ubd80\ud574\ubcf4\uc558\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uce74\ud504\uce74 \ucee4\ub125\ud2b8 API\ub294 \uc5bc\ud54f \uc88b\uc544\ubcf4\uc774\uc9c0\ub9cc, \ub77c\uc774\uc13c\uc2a4 \uc774\uc288\ub85c \uc778\ud574 \uc0ac\uc6a9\ud558\uc9c0 \ubabb\ud560 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc774\ub7f0 \uacbd\uc6b0 \ub300\uc548\uc740 \uc5b4\ub5a4 \uac83\ub4e4\uc774 \uc788\uc744\uae4c\uc694?"),(0,r.kt)("h3",{id:"\ub2e4\ub978-\ub370\uc774\ud130\uc2a4\ud1a0\uc5b4\uc758-\ud504\ub808\uc784\uc6cc\ud06c"},"\ub2e4\ub978 \ub370\uc774\ud130\uc2a4\ud1a0\uc5b4\uc758 \ud504\ub808\uc784\uc6cc\ud06c"),(0,r.kt)("p",null,"\uce74\ud504\uce74\uac00 \uc6b0\uc8fc\uc758 \uc911\uc2ec\uc774\ub77c\uace0 \uc0dd\uac01\ud558\ub294 \uc0ac\ub78c\ub3c4 \uc788\uc9c0\ub9cc, \uc774\uc5d0 \ub3d9\uc758\ud558\uc9c0 \uc54a\ub294 \uc0ac\ub78c\ub4e4\ub3c4 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"\ud558\ub461\uc774\ub098 ES\ub85c \ub300\ubd80\ubd84\uc758 \ub370\uc774\ud130 \uc544\ud0a4\ud14d\ucc98\ub97c \uad6c\ucd95\ud558\ub294 \uc0ac\ub78c\ub4e4\ub3c4 \uc788\uae30 \ub54c\ubb38\uc774\uc9c0\uc694."),(0,r.kt)("p",null,"\uc774\ub7ec\ud55c \uc2dc\uc2a4\ud15c\ub4e4\uc740 \ub300\uccb4\ub85c \ub370\uc774\ud130 \ucc98\ub9ac\uc5d0 \ud544\uc694\ud55c \uc218\uc9d1, \ud1b5\ud569, \uc804\ub2ec \ub3c4\uad6c\ub97c \uac16\uace0 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uac00\ub839 \ud558\ub461\uc758 \uacbd\uc6b0 Flume, ES\ub294 \ub85c\uadf8\uc2a4\ud0dc\uc2dc\uc640 \ud50c\ub8e8\uc5b8\ud2b8\ub514\uac00 \uc788\uc8e0."),(0,r.kt)("p",null,"\uce74\ud504\uce74\uac00 \uc544\ud0a4\ud14d\ucc98\uc758 \ud575\uc2ec \ubd80\ubd84\uc774\uace0 \ub300\ub7c9\uc758 \uc18c\uc2a4\uc640 \uc2f1\ud06c\ub97c \uc5f0\uacb0\ud558\ub294 \uac83\uc774 \uadf8 \ubaa9\uc801\uc774\ub77c\uba74 \uce74\ud504\uce74 \ucee4\ub125\ud2b8 API\ub294 \ud544\uc218\uc801\uc778 \uc120\ud0dd\uc785\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uadf8\ub7ec\ub098 \ud558\ub461\uc774\ub098 ES\uac00 \uc911\uc2ec\uc758 \uc2dc\uc2a4\ud15c\uc774\ub77c\uba74 \uce74\ud504\uce74\ub294 \uadf8 \uc2dc\uc2a4\ud15c\uc758 \uc785\ub825 \uc2dc\uc2a4\ud15c \uc911 \ud558\ub098\ub85c \uace0\ub824\ud558\uace0, \ud50c\ub8f9\uc774\ub098 \ub85c\uadf8\uc2a4\ud0dc\uc2dc \ud50c\ub8e8\uc5b8\ud2b8\ub514\ub97c \uc0ac\uc6a9\ud569\uc2dc\ub2e4."),(0,r.kt)("h2",{id:"\uc2a4\ud2b8\ub9bc-\ud504\ub85c\uc138\uc2f1-\ud504\ub808\uc784\uc6cc\ud06c"},"\uc2a4\ud2b8\ub9bc \ud504\ub85c\uc138\uc2f1 \ud504\ub808\uc784\uc6cc\ud06c"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\uc774 \ubd80\ubd84\uc740 \uac1c\uc778\uc801\uc73c\ub85c \uc774\ud574\uac00 \uc798 \uc548\uac14\uc2b5\ub2c8\ub2e4. \uc2a4\ud2b8\ub9bc \ud504\ub85c\uc138\uc2f1 \ud504\ub808\uc784\uc6cc\ud06c\uac00 \ubb34\uc5c7\uc774\uace0, \ub370\uc774\ud130 \ud1b5\ud569\uc744 \uac19\uc740 \ud504\ub808\uc784\uc6cc\ud06c\ub85c \ud55c\ub2e4\ub294\uac8c \ubb34\uc2a8 \uc758\ubbf8\uc77c\uae4c\uc694")),(0,r.kt)("p",null,"\ub300\ubd80\ubd84\uc758 \uc2a4\ud2b8\ub9bc \ud504\ub85c\uc138\uc2f1 \ud504\ub808\uc784\uc6cc\ud06c\uc5d0\uc11c\ub294 \uce74\ud504\uce74\ub85c\ubd80\ud130 \ub370\uc774\ud130\ub97c \uc77d\uc5b4 \ub2e4\ub978 \ub300\uc0c1 \uc2dc\uc2a4\ud15c\uc5d0 \uc4f8 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"\ub300\uc0c1 \uc2dc\uc2a4\ud15c\uc774 \uce74\ud504\uce74\ub97c \uc9c0\uc6d0\ud558\uace0, \uce74\ud504\uce74\uc758 \ub370\uc774\ud130 \ucc98\ub9ac\ub97c \uc704\ud574 \uc2a4\ud2b8\ub9bc \ud504\ub85c\uc138\uc2f1 \ud504\ub808\uc784\uc6cc\ud06c\ub97c \uc0ac\uc6a9\ud560 \uc758\ud5a5\uc774 \uc788\ub2e4\uba74, \ub370\uc774\ud130 \ud1b5\ud569\ub3c4 \uac19\uc740 \ud504\ub808\uc784\uc6cc\ud06c\ub97c \uc0ac\uc6a9\ud558\ub294 \ud3b8\uc774 \ubc14\ub78c\uc9c1\ud560 \uac83 \uac19\uc2b5\ub2c8\ub2e4."),(0,r.kt)("h2",{id:"\uacb0\ub860"},"\uacb0\ub860"),(0,r.kt)("p",null,"\uce74\ud504\uce74 \ucee4\ub125\ud130 API\uc774 \uc65c \ub370\uc774\ud130 \ud1b5\ud569\uc5d0 \uc801\ud569\ud55c\uc9c0\uc5d0 \ub300\ud558\uc5ec \uc54c\uc544\ubcf4\uc558\uc2b5\ub2c8\ub2e4. (\ub0b4\ubd80 \ub3d9\uc791\ub3c4)"),(0,r.kt)("p",null,"\ucd5c\uc885\uc801\uc73c\ub85c \uc5b4\ub5a4 \ub370\uc774\ud130 \ud1b5\ud569 \uc194\ub8e8\uc158\uc744 \uc0ac\uc6a9\ud558\ub4e0, \ubaa8\ub4e0 \uc7a5\uc560 \uc0c1\ud669\uc5d0\uc11c \ubaa8\ub4e0 \ub370\uc774\ud130\ub97c \uc804\ub2ec\ud560 \uc218 \uc788\ub294 \ub2a5\ub825\uc774 \uac00\uc7a5 \uc911\uc694\ud560 \ub4ef \ud55c\ub370\uc694."),(0,r.kt)("p",null,"\uadf8\ub7f0 \uba74\uc5d0\uc11c \uc800\uc790\ub294 \uce74\ud504\uce74 \ucee4\ub125\ud2b8\uac00 \ub9e4\uc6b0 \uc2e0\ub8b0\uc131\uc774 \ub192\ub2e4\uace0 \ubbff\uace0 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uadf8\ub7ec\ub098 \uad81\uadf9\uc801\uc73c\ub85c \ub370\uc774\ud130 \ud1b5\ud569 \uc2dc\uc2a4\ud15c\uc758 \ubaa9\uc801\uc740 \ub370\uc774\ud130\ub97c \uc804\ub2ec\ud558\ub294 \uac83\uc774\ubbc0\ub85c \uce74\ud504\uce74 \ucee4\ub125\ud2b8\ub97c \uc0ac\uc6a9\ud558\uc9c0 \uc54a\ub354\ub77c\ub3c4 \ucda9\ubd84\ud55c \ud14c\uc2a4\ud2b8\ub97c \ud1b5\ud574 \ub370\uc774\ud130 \uc804\uc1a1 \uc2e0\ub8b0\uc131\uc744 \ud655\ubcf4\ud55c\ub2e4\uba74 \ub2e4\ub978 \ub300\uc548\uc744 \uc0ac\uc6a9\ud558\ub294 \uac83\ub3c4 \uc88b\ub2e4\uace0 \ub9d0\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uacb0\uad6d \uc2dc\uc2a4\ud15c \uc694\uad6c\uc0ac\ud56d\uc5d0 \ub9de\uac8c \uc801\uc808\ud558\uac8c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub3c4\ub85d \ud558\ub294 \uac83\uc774 \uac00\uc7a5 \uc911\uc694\ud560 \ub4ef \uc2f6\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"\ub9c8\uc9c0\ub9c9\uc73c\ub85c \uac1d\uccb4\uc9c0\ud5a5\uc758 \ubc14\uc774\ube14\uc774\ub77c \ubd88\ub9ac\ub294 \uc870\uc601\ud638\ub2d8\uc758 \ucc45 ",(0,r.kt)("inlineCode",{parentName:"p"},"Object"),"\uc758 \ub9c8\uc9c0\ub9c9 \uad6c\uc808\ub85c \ub9c8\ubb34\ub9ac\ud558\ub3c4\ub85d \ud558\uaca0\uc2b5\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\uc18c\ud504\ud2b8\uc6e8\uc5b4 \uac1c\ubc1c\uc5d0\uc11c \ubaa8\ub4e0 \uc124\uacc4\ub294 Trade-Off\uc758 \uc0b0\ubb3c\uc774\ub2e4.\n\nBy \uc870\uc601\ud638\n")),(0,r.kt)("h2",{id:"reference"},"Reference"),(0,r.kt)("img",{width:"458",alt:"\u1109\u1173\u110f\u1173\u1105\u1175\u11ab\u1109\u1163\u11ba 2021-04-28 \u110b\u1169\u1112\u116e 7 39 45",src:"https://user-images.githubusercontent.com/43809168/116390936-86ad6b80-a859-11eb-91e8-fcfc31a896fe.png"}),(0,r.kt)("p",null,"\uce74\ud504\uce74 \ud575\uc2ec \uac00\uc774\ub4dc"))}c.isMDXComponent=!0}}]);