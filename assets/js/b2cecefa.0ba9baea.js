(self.webpackChunkstudy=self.webpackChunkstudy||[]).push([[101],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=r.createContext({}),k=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=k(e.components);return r.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},o=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,u=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),o=k(n),d=l,N=o["".concat(u,".").concat(d)]||o[d]||m[d]||a;return n?r.createElement(N,i(i({ref:t},c),{},{components:n})):r.createElement(N,i({ref:t},c))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,i=new Array(a);i[0]=o;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p.mdxType="string"==typeof e?e:l,i[1]=p;for(var k=2;k<a;k++)i[k]=n[k];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}o.displayName="MDXCreateElement"},3778:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return p},metadata:function(){return u},toc:function(){return k},default:function(){return m}});var r=n(2122),l=n(9756),a=(n(7294),n(3905)),i=["components"],p={id:"02-principle",title:"02. \ub9ac\ud329\ud1a0\ub9c1 \uc6d0\uce59"},u={unversionedId:"code/refactoring/02-principle",id:"code/refactoring/02-principle",isDocsHomePage:!1,title:"02. \ub9ac\ud329\ud1a0\ub9c1 \uc6d0\uce59",description:"\ub9ac\ud329\ud1a0\ub9c1\uc758 \uc815\uc758",source:"@site/docs/code/refactoring/02-principle.md",sourceDirName:"code/refactoring",slug:"/code/refactoring/02-principle",permalink:"/study/docs/code/refactoring/02-principle",editUrl:"https://github.com/minkukjo/study/edit/master/docs/code/refactoring/02-principle.md",version:"current",lastUpdatedAt:1631507847,formattedLastUpdatedAt:"9/13/2021",sidebarPosition:2,frontMatter:{id:"02-principle",title:"02. \ub9ac\ud329\ud1a0\ub9c1 \uc6d0\uce59"},sidebar:"mySidebar",previous:{title:"01. \uccab \ubc88\uc9f8 \uc608\uc2dc",permalink:"/study/docs/code/refactoring/01-first"},next:{title:"00. \uc2a4\ud130\ub514 \uc2dc\uc791\uc758 \uacc4\uae30",permalink:"/study/docs/kubernetes/15steps/00-intro"}},k=[{value:"\ub9ac\ud329\ud1a0\ub9c1\uc758 \uc815\uc758",id:"\ub9ac\ud329\ud1a0\ub9c1\uc758-\uc815\uc758",children:[]},{value:"\ub450 \uac1c\uc758 \ubaa8\uc790",id:"\ub450-\uac1c\uc758-\ubaa8\uc790",children:[]},{value:"\ub9ac\ud329\ud1a0\ub9c1\uc758 \uc774\uc720",id:"\ub9ac\ud329\ud1a0\ub9c1\uc758-\uc774\uc720",children:[]},{value:"\ub9ac\ud329\ud1a0\ub9c1\ud558\uba74 \ubc84\uadf8\ub97c \uc27d\uac8c \ucc3e\uc744 \uc218 \uc788\ub2e4",id:"\ub9ac\ud329\ud1a0\ub9c1\ud558\uba74-\ubc84\uadf8\ub97c-\uc27d\uac8c-\ucc3e\uc744-\uc218-\uc788\ub2e4",children:[]},{value:"\ub9ac\ud329\ud1a0\ub9c1\ud558\uba74 \ud504\ub85c\uadf8\ub798\ubc0d \uc18d\ub3c4\ub97c \ub192\uc77c \uc218 \uc788\ub2e4",id:"\ub9ac\ud329\ud1a0\ub9c1\ud558\uba74-\ud504\ub85c\uadf8\ub798\ubc0d-\uc18d\ub3c4\ub97c-\ub192\uc77c-\uc218-\uc788\ub2e4",children:[]},{value:"\ub9ac\ud329\ud1a0\ub9c1\uc758 \ud0c0\uc774\ubc0d",id:"\ub9ac\ud329\ud1a0\ub9c1\uc758-\ud0c0\uc774\ubc0d",children:[{value:"\ub9ac\ud329\ud1a0\ub9c1\uc758 \uc2dc\uc810",id:"\ub9ac\ud329\ud1a0\ub9c1\uc758-\uc2dc\uc810",children:[]},{value:"\uae30\ub2a5\uc744 \uc27d\uac8c \ucd94\uac00\ud560 \uc218 \uc788\uac8c \ub9cc\ub4e4\uae30",id:"\uae30\ub2a5\uc744-\uc27d\uac8c-\ucd94\uac00\ud560-\uc218-\uc788\uac8c-\ub9cc\ub4e4\uae30",children:[]},{value:"\uc774\ud574\ud558\uae30 \uc26c\uc6b4 \ucf54\ub4dc\ub97c \uc704\ud55c \ub9ac\ud329\ud1a0\ub9c1",id:"\uc774\ud574\ud558\uae30-\uc26c\uc6b4-\ucf54\ub4dc\ub97c-\uc704\ud55c-\ub9ac\ud329\ud1a0\ub9c1",children:[]},{value:"\uc218\uc2dc\ub85c \ud558\ub294 \ub9ac\ud329\ud1a0\ub9c1",id:"\uc218\uc2dc\ub85c-\ud558\ub294-\ub9ac\ud329\ud1a0\ub9c1",children:[]},{value:"\uc624\ub798 \uac78\ub9ac\ub294 \ub9ac\ud329\ud1a0\ub9c1",id:"\uc624\ub798-\uac78\ub9ac\ub294-\ub9ac\ud329\ud1a0\ub9c1",children:[]},{value:"\ucf54\ub4dc \ub9ac\ubdf0\uc5d0 \ub9ac\ud329\ud1a0\ub9c1 \ud65c\uc6a9\ud558\uae30",id:"\ucf54\ub4dc-\ub9ac\ubdf0\uc5d0-\ub9ac\ud329\ud1a0\ub9c1-\ud65c\uc6a9\ud558\uae30",children:[]},{value:"\uad00\ub9ac\uc790\uc5d0\uac90 \ubb50\ub77c\uace0 \ud558\uc9c0?",id:"\uad00\ub9ac\uc790\uc5d0\uac90-\ubb50\ub77c\uace0-\ud558\uc9c0",children:[]},{value:"\ub9ac\ud329\ud1a0\ub9c1\uc744 \ud558\uc9c0 \ub9d0\uc544\uc57c\ud560 \ub54c",id:"\ub9ac\ud329\ud1a0\ub9c1\uc744-\ud558\uc9c0-\ub9d0\uc544\uc57c\ud560-\ub54c",children:[]}]},{value:"\ub9ac\ud329\ud1a0\ub9c1 \uc2dc \uace0\ub824\ud560 \ubb38\uc81c\ub4e4",id:"\ub9ac\ud329\ud1a0\ub9c1-\uc2dc-\uace0\ub824\ud560-\ubb38\uc81c\ub4e4",children:[{value:"\uc0c8 \uae30\ub2a5 \uac1c\ubc1c \uc18d\ub3c4 \uc800\ud558",id:"\uc0c8-\uae30\ub2a5-\uac1c\ubc1c-\uc18d\ub3c4-\uc800\ud558",children:[]},{value:"\ucf54\ub4dc \uc18c\uc720\uad8c",id:"\ucf54\ub4dc-\uc18c\uc720\uad8c",children:[]},{value:"\ube0c\ub79c\uce58",id:"\ube0c\ub79c\uce58",children:[]},{value:"\ud14c\uc2a4\ud305",id:"\ud14c\uc2a4\ud305",children:[]},{value:"\ub808\uac70\uc2dc \ucf54\ub4dc",id:"\ub808\uac70\uc2dc-\ucf54\ub4dc",children:[]},{value:"\ub370\uc774\ud130\ubca0\uc774\uc2a4",id:"\ub370\uc774\ud130\ubca0\uc774\uc2a4",children:[]}]},{value:"\ub9ac\ud329\ud1a0\ub9c1 \uc544\ud0a4\ud14d\ucc98",id:"\ub9ac\ud329\ud1a0\ub9c1-\uc544\ud0a4\ud14d\ucc98",children:[]},{value:"Reference",id:"reference",children:[]}],c={toc:k};function m(e){var t=e.components,n=(0,l.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\ub9ac\ud329\ud1a0\ub9c1\uc758-\uc815\uc758"},"\ub9ac\ud329\ud1a0\ub9c1\uc758 \uc815\uc758"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},'"\ub9ac\ud329\ud1a0\ub9c1\ud558\ub2e4\uac00 \ucf54\ub4dc\uac00 \uae68\uc838\uc11c \uba70\uce60\uc774\ub098 \uace0\uc0dd\ud588\ub2e4"'),"\ub294 \ub9d0\uc740 \ub9ac\ud329\ud1a0\ub9c1\uc774 \uc544\ub2c8\ub2e4.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\ub9ac\ud329\ud1a0\ub9c1\uc740 \uc5b8\uc81c\ub4e0 \ucf54\ub4dc\uac00 \uc815\uc0c1 \ub3d9\uc791 \ud574\uc57c\ud558\uba70, \uc804\uccb4 \uc791\uc5c5\uc774 \ub05d\ub098\uc9c0 \uc54a\ub354\ub77c\ub3c4 \uc5b8\uc81c\ub4e0 \uba48\ucd9c \uc218 \uc788\ub2e4.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\ub9ac\ud329\ud1a0\ub9c1 \uacfc\uc815\uc5d0\uc11c \ubc1c\uacb0\ub41c \ubc84\uadf8\ub294 \ub9ac\ud329\ud1a0\ub9c1 \ud6c4\uc5d0\ub3c4 \uadf8\ub300\ub85c \ub0a8\uc544\uc788\uc5b4\uc57c \ud55c\ub2e4. (\ub2e8 \uc544\ubb34\ub3c4 \ubc1c\uacac\ud558\uc9c0 \ubabb\ud55c \uc228\uc740 \ubc84\uadf8\ub294 \uc218\uc815\ud574\ub3c4 \ub41c\ub2e4 \u314b\u314b)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\ub9ac\ud329\ud1a0\ub9c1\uc740 \uc0ac\uc6a9\uc790 \uc785\uc7a5\uc5d0\uc11c \ubd24\uc744 \ub54c \ub9ac\ud329\ud1a0\ub9c1 \uc804,\ud6c4\uac00 \uac19\uc544\uc57c\ud55c\ub2e4."))),(0,a.kt)("h2",{id:"\ub450-\uac1c\uc758-\ubaa8\uc790"},"\ub450 \uac1c\uc758 \ubaa8\uc790"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\uae30\ub2a5\uc744 \ucd94\uac00\ud560 \ub54c\ub294 \uae30\ub2a5 \ucd94\uac00\uc758 \ubaa8\uc790\ub97c \uc368\uc57c\ud55c\ub2e4.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\ub9ac\ud329\ud1a0\ub9c1\uc744 \ud560 \ub54c\ub294 \ub9ac\ud329\ud1a0\ub9c1\uc758 \ubaa8\uc790\ub97c \uc368\uc57c\ud55c\ub2e4. ( \uae30\ub2a5 \ucd94\uac00\ub294 \uc808\ub300 \ud558\uc9c0 \uc54a\uc744 \uac83\uc774\uba70, \ucf54\ub4dc \uc7ac\uad6c\uc131\uc5d0\ub9cc \uc804\ub150\ud55c\ub2e4. )"))),(0,a.kt)("h2",{id:"\ub9ac\ud329\ud1a0\ub9c1\uc758-\uc774\uc720"},"\ub9ac\ud329\ud1a0\ub9c1\uc758 \uc774\uc720"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\uc8fc\uae30\uc801\uc778 \ub9ac\ud329\ud1a0\ub9c1\uc740 \uc18c\ud504\ud2b8\uc6e8\uc5b4\uc758 \uc124\uacc4\ub97c \ud5a5\uc0c1 \uc2dc\ud0a8\ub2e4.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\uacb0\uad6d\uc740 \ucf54\ub4dc\ub294 \uc778\uac04\uc774 \uc77d\uae30 \ub54c\ubb38\uc5d0 \uc778\uac04\uc774 \uc77d\uae30 \uc27d\uace0 \ubcc0\uacbd\uc5d0 \uc6a9\uc774\ud55c \uad6c\uc870\ub85c \ub9ac\ud329\ud1a0\ub9c1 \ud574\uc57c\ud55c\ub2e4.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\ub9c8\ud2f4 \ud30c\uc6b8\ub7ec\ub294 \uac8c\uc73c\ub978 \uac1c\ubc1c\uc790\ub2e4. \uadf8\ub798\uc11c \uc790\uc2e0\uc774 \uc791\uc131\ud55c \ucf54\ub4dc\ub97c \uba38\ub9ac\uc5d0 \ub123\uc5b4\ub450\uc9c0 \uc54a\ub294\ub2e4. \ub2e8 \uae30\uc5b5\ud560 \ud544\uc694\uac00 \uc788\ub294 \uac83\ub4e4\uc740 \ucd5c\ub300\ud55c \ucf54\ub4dc\uc5d0 \ub0a8\uaca8\ub454\ub2e4."))),(0,a.kt)("h2",{id:"\ub9ac\ud329\ud1a0\ub9c1\ud558\uba74-\ubc84\uadf8\ub97c-\uc27d\uac8c-\ucc3e\uc744-\uc218-\uc788\ub2e4"},"\ub9ac\ud329\ud1a0\ub9c1\ud558\uba74 \ubc84\uadf8\ub97c \uc27d\uac8c \ucc3e\uc744 \uc218 \uc788\ub2e4"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\ucf54\ub4dc\ub97c \uc774\ud574\ud558\uae30 \uc27d\ub2e4\ub294 \ub9d0\uc740 \ubc84\uadf8\ub97c \ucc3e\uae30 \uc27d\ub2e4\ub294 \ub9d0\uacfc \uc77c\ub9e5\uc0c1\ud1b5\ud55c\ub2e4.")),(0,a.kt)("h2",{id:"\ub9ac\ud329\ud1a0\ub9c1\ud558\uba74-\ud504\ub85c\uadf8\ub798\ubc0d-\uc18d\ub3c4\ub97c-\ub192\uc77c-\uc218-\uc788\ub2e4"},"\ub9ac\ud329\ud1a0\ub9c1\ud558\uba74 \ud504\ub85c\uadf8\ub798\ubc0d \uc18d\ub3c4\ub97c \ub192\uc77c \uc218 \uc788\ub2e4"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\ub9ac\ud329\ud1a0\ub9c1\uc740 \ucf54\ub4dc \uac1c\ubc1c \uc18d\ub3c4\ub97c \ub192\uc5ec\uc900\ub2e4.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\uc0c8\ub85c\uc6b4 \uae30\ub2a5\uc744 \ucd94\uac00\ud558\ub294\ub370 \ub354 \ub9ce\uc740 \uc2dc\uac04\uc774 \uac78\ub9b0\ub2e4\uba74 \ub9ac\ud329\ud1a0\ub9c1\uc774 \ud544\uc694\ud55c \uc2dc\uc810\uc774\ub2e4."))),(0,a.kt)("h2",{id:"\ub9ac\ud329\ud1a0\ub9c1\uc758-\ud0c0\uc774\ubc0d"},"\ub9ac\ud329\ud1a0\ub9c1\uc758 \ud0c0\uc774\ubc0d"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\uadf8\ub7ec\uba74 \uc5b8\uc81c \ub9ac\ud329\ud1a0\ub9c1\uc744 \ud558\ub294 \uac83\uc774 \ubca0\uc2a4\ud2b8 \ud0c0\uc774\ubc0d\uc77c\uae4c?")),(0,a.kt)("h3",{id:"\ub9ac\ud329\ud1a0\ub9c1\uc758-\uc2dc\uc810"},"\ub9ac\ud329\ud1a0\ub9c1\uc758 \uc2dc\uc810"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\ub9c8\ud2f4\ud30c\uc6b8\ub7ec\uc758 ",(0,a.kt)("strong",{parentName:"li"},"3\uc758 \ubc95\uce59"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"1. \ucc98\uc74c\uc5d0\ub294 \ubb34\uc9c0\uc131\uc73c\ub85c \uadf8\ub0e5 \ud55c\ub2e4.\n\n2. \ube44\uc2b7\ud55c \uc77c\uc744 \ub450 \ubc88\uc9f8\ub85c \ud558\uac8c \ub418\uba74(\uc911\ubcf5\uc774 \uc0dd\uacbc\ub2e4\ub294 \uc0ac\uc2e4 \ubc1c\uacac), \uc77c\ub2e8 \uacc4\uc18d \uc9c4\ud589\ud55c\ub2e4.\n\n3. \ube44\uc2b7\ud55c \uc77c\uc744 \uc138 \ubc88\uc9f8 \ud558\uac8c \ub418\uba74 \ub9ac\ud329\ud1a0\ub9c1 \ud55c\ub2e4.\n")),(0,a.kt)("h3",{id:"\uae30\ub2a5\uc744-\uc27d\uac8c-\ucd94\uac00\ud560-\uc218-\uc788\uac8c-\ub9cc\ub4e4\uae30"},"\uae30\ub2a5\uc744 \uc27d\uac8c \ucd94\uac00\ud560 \uc218 \uc788\uac8c \ub9cc\ub4e4\uae30"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\ud568\uc218 \ub9e4\uac1c\ubcc0\uc218\ud654\ud558\uae30\ub85c \uc911\ubcf5 \uc904\uc774\uae30")),(0,a.kt)("h3",{id:"\uc774\ud574\ud558\uae30-\uc26c\uc6b4-\ucf54\ub4dc\ub97c-\uc704\ud55c-\ub9ac\ud329\ud1a0\ub9c1"},"\uc774\ud574\ud558\uae30 \uc26c\uc6b4 \ucf54\ub4dc\ub97c \uc704\ud55c \ub9ac\ud329\ud1a0\ub9c1"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\ubcc0\uc218 \uc774\ub984 \uc218\uc815, \ud568\uc218 \uc774\ub984 \uc218\uc815")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\uae34 \ud568\uc218\ub294 \uc798\uac8c \ucabc\uac1c\ubcf4\uae30"))),(0,a.kt)("h3",{id:"\uc218\uc2dc\ub85c-\ud558\ub294-\ub9ac\ud329\ud1a0\ub9c1"},"\uc218\uc2dc\ub85c \ud558\ub294 \ub9ac\ud329\ud1a0\ub9c1"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\uc9c0\ub098\uac00\ub2e4\uac00 \uc4f0\ub808\uae30\ub97c \uc90d\ub4ef\uc774 \ub9ac\ud329\ud1a0\ub9c1\uc744 \ud55c\ub2e4.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\uc624\ub798 \uac78\ub9ac\ub294 \ub9ac\ud329\ud1a0\ub9c1\uc740 \uccb4\ud06c\ud574\ub450\uc5c8\ub2e4\uac00 \ub098\uc911\uc5d0 \ud55c\ub2e4."))),(0,a.kt)("h3",{id:"\uc624\ub798-\uac78\ub9ac\ub294-\ub9ac\ud329\ud1a0\ub9c1"},"\uc624\ub798 \uac78\ub9ac\ub294 \ub9ac\ud329\ud1a0\ub9c1"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\ub300\uaddc\ubaa8 \ub9ac\ud329\ud1a0\ub9c1\uc740 \uc77c\ubd80\ub97c \uc870\uae08\uc529 \uac1c\uc120\ud558\uc790.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\uac01 \uc7a1\uace0 \uc804\uccb4 \uac1c\ubc1c\uc790\ub4e4\uc774 \ub2ec\ub824\ub4e4\uc5b4\uc11c \ub9ac\ud329\ud1a0\ub9c1\uc744 \ud558\ub294 \uc9d3\uc740 \uc88b\uc9c0\uc54a\ub2e4."))),(0,a.kt)("h3",{id:"\ucf54\ub4dc-\ub9ac\ubdf0\uc5d0-\ub9ac\ud329\ud1a0\ub9c1-\ud65c\uc6a9\ud558\uae30"},"\ucf54\ub4dc \ub9ac\ubdf0\uc5d0 \ub9ac\ud329\ud1a0\ub9c1 \ud65c\uc6a9\ud558\uae30"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\ucf54\ub4dc \ub9ac\ubdf0\ub97c \uc815\uae30\uc801\uc73c\ub85c \uc218\ud589\ud574\uc11c \uae54\ub054\ud55c \ucf54\ub4dc \ud004\ub9ac\ud2f0\ub97c \uc720\uc9c0\ud558\uac8c \ud55c\ub2e4.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Pull Request \uae30\ubc18\uc758 \ucf54\ub4dc\ub9ac\ubdf0 \ubcf4\ub2e4\ub294, \ucf54\ub4dc \uc791\uc131\uc790\ub97c \uc606\uc5d0 \uc549\ud600\ub193\uace0 \ucf54\ub4dc\ub97c \ubcf4\uba70 \uc774\uc57c\uae30 \ud558\uba74\uc11c \ub9ac\ud329\ud1a0\ub9c1\ud558\ub294 \uc9dd \ud504\ub85c\uadf8\ub798\ubc0d\uc774 \ub354 \uc88b\ub2e4."))),(0,a.kt)("h3",{id:"\uad00\ub9ac\uc790\uc5d0\uac90-\ubb50\ub77c\uace0-\ud558\uc9c0"},"\uad00\ub9ac\uc790\uc5d0\uac90 \ubb50\ub77c\uace0 \ud558\uc9c0?"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\ud504\ub85c \uc18c\ud504\ud2b8\uc6e8\uc5b4 \uac1c\ubc1c\uc790\ub294 \ud6a8\uacfc\uc801\uc778 \uc18c\ud504\ud2b8\uc6e8\uc5b4\ub97c \ucd5c\ub300\ud55c \ube68\ub9ac \ub9cc\ub4dc\ub294 \uac83\uc774\ub2e4.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\ub9ac\ud329\ud1a0\ub9c1\uc740 \uc18c\ud504\ud2b8\uc6e8\uc5b4\ub97c \ube60\ub974\uac8c \ub9cc\ub4dc\ub294\ub370 \uc544\uc8fc \ud6a8\uacfc\uc801\uc774\ub2e4.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\ud504\ub85c \uac1c\ubc1c\uc790\uc5d0\uac8c \uc8fc\uc5b4\uc9c4 \uc784\ubb34\ub294 \uc0c8\ub85c\uc6b4 \uae30\ub2a5\uc744 \ube60\ub974\uac8c \uad6c\ud604\ud558\ub294 \uac83\uc774\uace0, \uac00\uc7a5 \ube60\ub978 \ubc29\ubc95\uc740 \ub9ac\ud329\ud1a0\ub9c1\uc774\ub2e4."))),(0,a.kt)("h3",{id:"\ub9ac\ud329\ud1a0\ub9c1\uc744-\ud558\uc9c0-\ub9d0\uc544\uc57c\ud560-\ub54c"},"\ub9ac\ud329\ud1a0\ub9c1\uc744 \ud558\uc9c0 \ub9d0\uc544\uc57c\ud560 \ub54c"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\ud638\ucd9c\ud574\uc11c \uc4f0\ub294 \ucf54\ub4dc\ub77c\uba74 \ub108\uc800\ubd84\ud558\ub354\ub77c\ub3c4 \uad73\uc774 \ub9ac\ud329\ud1a0\ub9c1 \ud558\uc9c0 \uc54a\ub294\ub2e4.")),(0,a.kt)("h2",{id:"\ub9ac\ud329\ud1a0\ub9c1-\uc2dc-\uace0\ub824\ud560-\ubb38\uc81c\ub4e4"},"\ub9ac\ud329\ud1a0\ub9c1 \uc2dc \uace0\ub824\ud560 \ubb38\uc81c\ub4e4"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\ub9ac\ud329\ud1a0\ub9c1\uc740 \ub9cc\ubcd1\ud1b5\uce58\uc57d\uc774 \uc544\ub2c8\ub2e4. \ub9ac\ud329\ud1a0\ub9c1\uc5d0 \ub538\ub824\uc624\ub294 \ubb38\uc81c\ub4e4\ub3c4 \uc788\ub2e4.")),(0,a.kt)("h3",{id:"\uc0c8-\uae30\ub2a5-\uac1c\ubc1c-\uc18d\ub3c4-\uc800\ud558"},"\uc0c8 \uae30\ub2a5 \uac1c\ubc1c \uc18d\ub3c4 \uc800\ud558"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\ub9ac\ud329\ud1a0\ub9c1\uc758 \uad81\uadf9\uc801\uc778 \ubaa9\uc801\uc740 \uac1c\ubc1c \uc18d\ub3c4\ub97c \ub192\uc5ec\uc11c \ub354 \uc801\uc740 \ub178\ub825\uc73c\ub85c \ub9ce\uc740 \uac00\uce58\ub97c \ucc3d\ucd9c\ud558\ub294 \uac83\uc774\ub2e4.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\uadf8\ub7ec\ubbc0\ub85c \ub354 \uc790\uc8fc \ub9ac\ud329\ud1a0\ub9c1\uc744 \ud558\uc790."))),(0,a.kt)("h3",{id:"\ucf54\ub4dc-\uc18c\uc720\uad8c"},"\ucf54\ub4dc \uc18c\uc720\uad8c"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\ucf54\ub4dc \uc18c\uc720\uad8c\uc774 \ub098\ub204\uc5b4\uc838\uc788\uc73c\uba74 \ub9ac\ud329\ud1a0\ub9c1\uc5d0 \ubc29\ud574\uac00 \ub41c\ub2e4.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\ud074\ub77c\uc774\uc5b8\ud2b8\uc5d0 \uc601\ud5a5\uc744 \uc8fc\uc9c0 \uc54a\ub294 \uc120\uc5d0\uc11c \uac1c\ubc1c\ud574\uc57c\ud558\ub294\ub370 \uc774\uac8c \uc27d\uc9c0 \uc54a\ub2e4.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\uc774\ub97c \ud574\uacb0\ud558\uae30 \uc704\ud55c \uc6d0\ud65c\ud55c \ubc29\ubc95\uc740 ",(0,a.kt)("strong",{parentName:"p"},"\ud300"),"\uc5d0\uac8c \ucf54\ub4dc \uad8c\ud55c\uc744 \uc8fc\ub294 \uac83\uc774\ub2e4.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\uc5b4\ub5a4 \ud300\uc740 \ub2e4\ub978 \ud300 \uc0ac\ub78c\uc774 \uc790\uae30 \ud300 \ucf54\ub4dc\uc758 \ube0c\ub79c\uce58\ub97c \ub530\uc11c \uc218\uc815\ud558\uace0 \ucee4\ubc0b\uc744 \uc694\uccad\ud558\ub294, \ud761\uc0ac \uc624\ud508\uc18c\uc2a4 \uac1c\ubc1c \ubaa8\ub378\uc744 \uad8c\uc7a5\ud558\uae30\ub3c4 \ud55c\ub2e4. ( \ud070 \uc2dc\uc2a4\ud15c\uc744 \uac1c\ubc1c\ud560 \ub54c \uc774 \ubaa8\ub378 \uc88b\uc544\ubcf4\uc778\ub2e4. )"))),(0,a.kt)("h3",{id:"\ube0c\ub79c\uce58"},"\ube0c\ub79c\uce58"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\uc5ec\uae30\uc11c\ub294 \ube48\ubc88\ud55c \ub9c8\uc2a4\ud130 \ube0c\ub79c\uce58\uc758 \ud1b5\ud569\uc744 \ud1b5\ud574 \ub9c8\uc2a4\ud130\uc640 \ube0c\ub79c\uce58\uac04\uc758 \uc591\ubc29\ud5a5 \ud1b5\ud569\uc744 \ucd5c\uc18c\ud654\ud558\ub294 \ubc29\ud5a5\uc744 \uc124\uba85\ud55c\ub2e4.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\ub300\ud45c\uc801\uc73c\ub85c ",(0,a.kt)("inlineCode",{parentName:"p"},"Github-flow"),"\uac00 \uc5ec\uae30\uc5d0 \ud574\ub2f9\ud560 \ub4ef \ud558\ub2e4.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\uae30\ub2a5\ubcc4 \ube0c\ub79c\uce58\uac00 \ub098\uc05c \uac83\uc740 \uc544\ub2c8\uc9c0\ub9cc \uc624\ub798 \ub450\uba74 \ub9c8\uc2a4\ud130\uc640 \uac04\uaca9\uc774 \ubc8c\uc5b4\uc9c0\uace0, \ud574\ub2f9 \uae30\ub2a5\uc758 \ubc30\ud3ec\uac00 \ub2a6\uc5b4\uc9c4\ub2e4.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\uace0\ub85c \uac00\uae09\uc801\uc774\uba74 ",(0,a.kt)("strong",{parentName:"p"},"\ub9e4\uc77c")," \ub9c8\uc2a4\ud130\uc5d0 \uba38\uc9c0\ud560 \uc218 \uc788\ub294 \ubc29\ud5a5\uc73c\ub85c \uac1c\ubc1c\ud558\ub294 \ud3b8\uc774 \uc88b\ub2e4\uace0 \ud55c\ub2e4."))),(0,a.kt)("h3",{id:"\ud14c\uc2a4\ud305"},"\ud14c\uc2a4\ud305"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\ub9ac\ud329\ud1a0\ub9c1\uc758 \ud575\uc2ec")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\ub9ac\ud329\ud1a0\ub9c1\uc740 \uc804,\ud6c4\uc5d0 \ud504\ub85c\uadf8\ub7a8\uc758 \uac89\ubcf4\uae30 \ub3d9\uc791\uc774 \uac19\uc544\uc57c\ud55c\ub2e4.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\uc774\ub97c \uac80\uc99d\ud558\uae30 \uc704\ud55c \ub3c4\uad6c\uac00 \ubc14\ub85c ",(0,a.kt)("strong",{parentName:"p"},"\ud14c\uc2a4\ud2b8"),"\ub2e4.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\uc694\uc998\uc740 CI\uc2dc\uc5d0 \ud1b5\ud569 \ud14c\uc2a4\ud2b8\ub97c \ub123\uc5b4\uc11c \ubc30\ud3ec \uc804\uc5d0 \uc548\uc804\ud55c\uc9c0\ub97c \uac80\uc99d\ud558\uac8c \ud55c\ub2e4."))),(0,a.kt)("h3",{id:"\ub808\uac70\uc2dc-\ucf54\ub4dc"},"\ub808\uac70\uc2dc \ucf54\ub4dc"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\ub808\uac70\uc2dc \ucf54\ub4dc\ub97c \uac1c\uc120\ud560 \ub54c \ub9ac\ud329\ud1a0\ub9c1 + \ud14c\uc2a4\ud2b8\uac00 \ud070 \ud798\uc744 \ubc1c\ud718\ud55c\ub2e4.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\ucf54\ub4dc\ub294 \uc5ed\uc2dc \ucea0\ud551 \uaddc\uce59\uc5d0 \ub530\ub77c \ucc98\uc74c \uc654\uc744 \ub54c \ubcf4\ub2e4 \uae68\ub057\ud574\uc57c\ud55c\ub2e4.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\ub808\uac70\uc2dc \uc2dc\uc2a4\ud15c\uc758 \uaddc\ubaa8\uac00 \ud074 \uc218\ub85d \ub9ac\ud329\ud1a0\ub9c1\uc740 \ucf54\ub4dc\ub97c \uc774\ud574\ud558\uace0 \uac1c\uc120\ud558\ub294\ub370 \ud070 \ub3c4\uc6c0\uc774 \ub41c\ub2e4."))),(0,a.kt)("h3",{id:"\ub370\uc774\ud130\ubca0\uc774\uc2a4"},"\ub370\uc774\ud130\ubca0\uc774\uc2a4"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\uacfc\uac70\uc5d0\ub294 JDBC\ub97c \uc0ac\uc6a9\ud574 ",(0,a.kt)("strong",{parentName:"li"},"Native SQL")," Query\ub85c DB\ub97c \uc870\uc791\ud558\uc600\uc9c0\ub9cc, \uc694\uc998\uc740 ORM\uc774 \ub300\uc138\uc774\ubbc0\ub85c \ud574\ub2f9 \ub0b4\uc6a9\uc740 \uc870\uae08\uc740 \uad6c\uc2dd\uc778 \ub0b4\uc6a9\uc774\ub2e4.")),(0,a.kt)("h2",{id:"\ub9ac\ud329\ud1a0\ub9c1-\uc544\ud0a4\ud14d\ucc98"},"\ub9ac\ud329\ud1a0\ub9c1 \uc544\ud0a4\ud14d\ucc98"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"})),(0,a.kt)("h2",{id:"reference"},"Reference"),(0,a.kt)("img",{width:"620",alt:"\u1109\u1173\u110f\u1173\u1105\u1175\u11ab\u1109\u1163\u11ba 2021-08-31 \u110b\u1169\u1112\u116e 10 29 39",src:"https://user-images.githubusercontent.com/43809168/131528140-3f6f8492-1dee-4f94-b5b6-929136cd2686.jpeg"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Refactoring 2\ud310 ( \uc800\uc790 : \ub9c8\ud2f4 \ud30c\uc6b8\ub7ec )")))}m.isMDXComponent=!0}}]);