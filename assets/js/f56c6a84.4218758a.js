(self.webpackChunkstudy=self.webpackChunkstudy||[]).push([[7913],{3905:function(e,t,l){"use strict";l.d(t,{Zo:function(){return c},kt:function(){return o}});var r=l(7294);function n(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function a(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,r)}return l}function i(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?a(Object(l),!0).forEach((function(t){n(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):a(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function u(e,t){if(null==e)return{};var l,r,n=function(e,t){if(null==e)return{};var l,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)l=a[r],t.indexOf(l)>=0||(n[l]=e[l]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)l=a[r],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(n[l]=e[l])}return n}var p=r.createContext({}),k=function(e){var t=r.useContext(p),l=t;return e&&(l="function"==typeof e?e(t):i(i({},t),e)),l},c=function(e){var t=k(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var l=e.components,n=e.mdxType,a=e.originalType,p=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=k(l),o=n,N=d["".concat(p,".").concat(o)]||d[o]||m[o]||a;return l?r.createElement(N,i(i({ref:t},c),{},{components:l})):r.createElement(N,i({ref:t},c))}));function o(e,t){var l=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=l.length,i=new Array(a);i[0]=d;var u={};for(var p in t)hasOwnProperty.call(t,p)&&(u[p]=t[p]);u.originalType=e,u.mdxType="string"==typeof e?e:n,i[1]=u;for(var k=2;k<a;k++)i[k]=l[k];return r.createElement.apply(null,i)}return r.createElement.apply(null,l)}d.displayName="MDXCreateElement"},4558:function(e,t,l){"use strict";l.r(t),l.d(t,{frontMatter:function(){return u},metadata:function(){return p},toc:function(){return k},default:function(){return m}});var r=l(2122),n=l(9756),a=(l(7294),l(3905)),i=["components"],u={id:"03-smell",title:"03. \ucf54\ub4dc\uc5d0\uc11c \ub098\ub294 \uc545\ucde8"},p={unversionedId:"code/refactoring/03-smell",id:"code/refactoring/03-smell",isDocsHomePage:!1,title:"03. \ucf54\ub4dc\uc5d0\uc11c \ub098\ub294 \uc545\ucde8",description:"\ub0c4\uc0c8\ub098\uba74 \ub2f9\uc7a5 \uac77\uc5b4\ub77c",source:"@site/docs/code/refactoring/03-smell.md",sourceDirName:"code/refactoring",slug:"/code/refactoring/03-smell",permalink:"/study/docs/code/refactoring/03-smell",editUrl:"https://github.com/minkukjo/study/edit/master/docs/code/refactoring/03-smell.md",version:"current",lastUpdatedAt:1632824965,formattedLastUpdatedAt:"9/28/2021",sidebarPosition:3,frontMatter:{id:"03-smell",title:"03. \ucf54\ub4dc\uc5d0\uc11c \ub098\ub294 \uc545\ucde8"},sidebar:"mySidebar",previous:{title:"02. \ub9ac\ud329\ud1a0\ub9c1 \uc6d0\uce59",permalink:"/study/docs/code/refactoring/02-principle"},next:{title:"04. \ud14c\uc2a4\ud2b8 \uad6c\ucd95\ud558\uae30",permalink:"/study/docs/code/refactoring/04-test"}},k=[{value:"\ub0c4\uc0c8\ub098\uba74 \ub2f9\uc7a5 \uac77\uc5b4\ub77c",id:"\ub0c4\uc0c8\ub098\uba74-\ub2f9\uc7a5-\uac77\uc5b4\ub77c",children:[]},{value:"\uae30\uc774\ud55c \uc774\ub984",id:"\uae30\uc774\ud55c-\uc774\ub984",children:[]},{value:"\uc911\ubcf5 \ucf54\ub4dc",id:"\uc911\ubcf5-\ucf54\ub4dc",children:[]},{value:"\uae34 \ud568\uc218",id:"\uae34-\ud568\uc218",children:[]},{value:"\uae34 \ub9e4\uac1c\ubcc0\uc218 \ubaa9\ub85d",id:"\uae34-\ub9e4\uac1c\ubcc0\uc218-\ubaa9\ub85d",children:[]},{value:"\uc804\uc5ed \ub370\uc774\ud130",id:"\uc804\uc5ed-\ub370\uc774\ud130",children:[]},{value:"\uac00\ubcc0 \ub370\uc774\ud130",id:"\uac00\ubcc0-\ub370\uc774\ud130",children:[]},{value:"\ub4a4\uc5c9\ud0a8 \ubcc0\uacbd",id:"\ub4a4\uc5c9\ud0a8-\ubcc0\uacbd",children:[]},{value:"\uc0b0\ud0c4\ucd1d \uc218\uc220",id:"\uc0b0\ud0c4\ucd1d-\uc218\uc220",children:[]},{value:"\uae30\ub2a5 \ud3b8\uc560",id:"\uae30\ub2a5-\ud3b8\uc560",children:[]},{value:"\ub370\uc774\ud130 \ubb49\uce58",id:"\ub370\uc774\ud130-\ubb49\uce58",children:[]},{value:"\uae30\ubcf8\ud615 \uc9d1\ucc29",id:"\uae30\ubcf8\ud615-\uc9d1\ucc29",children:[]},{value:"\ubc18\ubcf5\ub418\ub294 switch\ubb38",id:"\ubc18\ubcf5\ub418\ub294-switch\ubb38",children:[]},{value:"\ubc18\ubcf5\ubb38",id:"\ubc18\ubcf5\ubb38",children:[]},{value:"\uc131\uc758 \uc5c6\ub294 \uc694\uc18c",id:"\uc131\uc758-\uc5c6\ub294-\uc694\uc18c",children:[]},{value:"\ucd94\uce21\uc131 \uc77c\ubc18\ud654",id:"\ucd94\uce21\uc131-\uc77c\ubc18\ud654",children:[]},{value:"\uc784\uc2dc \ud544\ub4dc",id:"\uc784\uc2dc-\ud544\ub4dc",children:[]},{value:"\uba54\uc2dc\uc9c0 \uccb4\uc778",id:"\uba54\uc2dc\uc9c0-\uccb4\uc778",children:[]},{value:"\uc911\uac1c\uc790",id:"\uc911\uac1c\uc790",children:[]},{value:"\ub0b4\ubd80\uc790 \uac70\ub798",id:"\ub0b4\ubd80\uc790-\uac70\ub798",children:[]},{value:"\uac70\ub300\ud55c \ud074\ub798\uc2a4",id:"\uac70\ub300\ud55c-\ud074\ub798\uc2a4",children:[]},{value:"\uc11c\ub85c \ub2e4\ub978 \uc778\ud130\ud398\uc774\uc2a4\uc758 \ub300\uc548 \ud074\ub798\uc2a4\ub4e4",id:"\uc11c\ub85c-\ub2e4\ub978-\uc778\ud130\ud398\uc774\uc2a4\uc758-\ub300\uc548-\ud074\ub798\uc2a4\ub4e4",children:[]},{value:"\ub370\uc774\ud130 \ud074\ub798\uc2a4",id:"\ub370\uc774\ud130-\ud074\ub798\uc2a4",children:[]},{value:"\uc0c1\uc18d \ud3ec\uae30",id:"\uc0c1\uc18d-\ud3ec\uae30",children:[]},{value:"\uc8fc\uc11d",id:"\uc8fc\uc11d",children:[]},{value:"Reference",id:"reference",children:[]}],c={toc:k};function m(e){var t=e.components,l=(0,n.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\ub0c4\uc0c8\ub098\uba74-\ub2f9\uc7a5-\uac77\uc5b4\ub77c"},"\ub0c4\uc0c8\ub098\uba74 \ub2f9\uc7a5 \uac77\uc5b4\ub77c"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\ucf04\ud2b8 \ubc31 \ud560\uba38\ub2c8\uc758 \uc721\uc544 \uc6d0\uce59\uc774\ub2e4.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\ub9ac\ud329\ud1a0\ub9c1\uc744 \ud558\ub294 \uac00\uc7a5 \uc801\uc808\ud55c \uc2dc\uae30\ub294 ",(0,a.kt)("strong",{parentName:"p"},"\ubb54\uac00 \uc774\uc0c1\ud55c\ub370"),"? \ub77c\ub294 \uc0dd\uac01\uc774 \ub4e0 \uc2dc\uc810\uc774 \ubc14\ub85c \ub9ac\ud329\ud1a0\ub9c1\uc758 \uc2dc\uc810\uc774\ub2e4!")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\uadf8\ub7fc \ub3c4\ub2f9\uccb4 \ubb58 \uae30\uc900\uc73c\ub85c ",(0,a.kt)("strong",{parentName:"p"},"\uc774\uc0c1\ud55c\ub370"),"?\ub97c \ud310\ubcc4\ud560 \uc218 \uc788\ub2e8 \ub9d0\uc778\uac00?")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\uc5ec\uae30\uc5d0 \uba87 \uac00\uc9c0 \uc801\uc808\ud55c \uc608\uc2dc\uac00 \uc874\uc7ac\ud55c\ub2e4."))),(0,a.kt)("h2",{id:"\uae30\uc774\ud55c-\uc774\ub984"},"\uae30\uc774\ud55c \uc774\ub984"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\uc774\ub984 \uc9d3\uae30\ub294 \ud504\ub85c\uadf8\ub798\ubc0d\uc5d0\uc11c \uac00\uc7a5 \uc5b4\ub835\uc9c0\ub9cc \uc911\uc694\ud558\ub2e4.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\uadf8\ub807\uae30\uc5d0 \uc774\uc0c1\ud55c \uc774\ub984\uc744 \ubcf8\ub2e4\uba74 \ub9ac\ud329\ud1a0\ub9c1\uc744 \ud558\ub3c4\ub85d \ud558\uc790."))),(0,a.kt)("h2",{id:"\uc911\ubcf5-\ucf54\ub4dc"},"\uc911\ubcf5 \ucf54\ub4dc"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\ub611\uac19\uc740 \ucf54\ub4dc\uac00 \ubc18\ubcf5\ub418\ub294 \uacbd\uc6b0\uc5d0\ub3c4 \ub9ac\ud329\ud1a0\ub9c1\uc774 \uac00\ub2a5\ud558\ub2e4.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\uc774 \uacbd\uc6b0 \uc77c\ubc18\uc801\uc73c\ub85c IDE\uc5d0\uc11c \uc54c\ub824\uc8fc\ubbc0\ub85c \uc774\uac83\uc73c\ub85c \uc608\uce21\uc774 \uac00\ub2a5\ud558\ub2e4."))),(0,a.kt)("h2",{id:"\uae34-\ud568\uc218"},"\uae34 \ud568\uc218"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\uae34 \ud568\uc218\ub294 \ucd5c\ub300\ud55c \uc9e7\uac8c \ub9cc\ub4e4\ub3c4\ub85d \ud558\uc790.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\ud568\uc218 \ucd94\ucd9c\ud558\uae30\ub97c \ud1b5\ud574 \uc9e7\uac8c \ub9cc\ub4e4\uc5b4\ubcfc \uc218 \uc788\ub2e4.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"switch \ubb38\uc774 \uc5ec\ub7ec \uac1c\ub77c\uba74 \uc870\uac74\ubb38\uc744 \ub2e4\ud615\uc131\uc73c\ub85c \ubc14\uafb8\uae30\ub97c \uc801\uc6a9\ud574\ubcfc \uc218 \uc788\ub2e4."))),(0,a.kt)("h2",{id:"\uae34-\ub9e4\uac1c\ubcc0\uc218-\ubaa9\ub85d"},"\uae34 \ub9e4\uac1c\ubcc0\uc218 \ubaa9\ub85d"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\ub9e4\uac1c\ubcc0\uc218\uac00 \ub9ce\ub2e4\uba74 \uac1d\uccb4 \ud1b5\uc9f8\ub85c \ub118\uae30\uae30\ub97c \uc0ac\uc6a9\ud558\ub3c4\ub85d \ud558\uc790.")),(0,a.kt)("h2",{id:"\uc804\uc5ed-\ub370\uc774\ud130"},"\uc804\uc5ed \ub370\uc774\ud130"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\uc804\uc5ed \ub370\uc774\ud130 \ubcf4\ub2e4\ub294 \ucea1\uc290\ud654\ub97c \ud1b5\ud574 \uc720\uc9c0\ud558\ub3c4\ub85d \ud558\uc790.")),(0,a.kt)("h2",{id:"\uac00\ubcc0-\ub370\uc774\ud130"},"\uac00\ubcc0 \ub370\uc774\ud130"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\uac00\ubcc0 \ub370\uc774\ud130\ub294 \ucd5c\ub300\ud55c \ubcc0\uc218\ub97c \ucea1\uc290\ud654\ud558\uc5ec \ud568\uc218\ub97c \uac70\uccd0\uc57c\ub9cc \ubcc0\uacbd\ub418\ub3c4\ub85d \ud558\ub294 \ud3b8\uc774 \uc88b\ub2e4.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\uad6c\uc870\uccb4\uc640 \uac19\uc774 \ub0b4\ubd80 \ud544\ub4dc\ub97c \uac16\ub294 \uacbd\uc6b0\uc5d0 \ub0b4\ubd80 \ud544\ub4dc\ub97c \ubc14\uafb8\uac8c \ub420 \uacbd\uc6b0 \ub0b4\ubd80 \ud544\ub4dc\ub97c \uc9c1\uc811 \uc218\uc815\ud558\uc9c0 \ub9d0\uace0 \uad6c\uc870\uccb4 \ud1b5\uc9f8\ub85c \uad50\uccb4\ud558\ub294 \ud3b8\uc774 \ub354 \ub0ab\ub2e4."))),(0,a.kt)("h2",{id:"\ub4a4\uc5c9\ud0a8-\ubcc0\uacbd"},"\ub4a4\uc5c9\ud0a8 \ubcc0\uacbd"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\ub4a4\uc5c9\ud0a8 \ubcc0\uacbd\uc774\ub780 \ub2e8\uc77c \ucc45\uc784 \uc6d0\uce59(SRP)\ub97c \uc704\ubc30\ud560 \ub54c \ub098\ud0c0\ub09c\ub2e4.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\uac00\ub839 DB\uac00 \ucd94\uac00\ub420 \ub54c \ub9c8\ub2e4 \ud568\uc218 \uc138 \uac1c\ub97c \ubc14\uafb8\uac70\ub098, \uae08\uc735 \uc0c1\ud488\uc774 \ucd94\uac00\ub418\uba74 \ud568\uc218 \ub124 \uac1c\ub97c \ubc14\uafd4\uc57c\ud558\ub294 \uac83 \ucc98\ub7fc \ud558\ub098\uc758 \ubcc0\uacbd\uc774 \uc5ec\ub7ec \uacf3\uc73c\ub85c \uc804\ud30c\ub418\ub294 \ud604\uc0c1\uc744 \ub9d0\ud55c\ub2e4."))),(0,a.kt)("h2",{id:"\uc0b0\ud0c4\ucd1d-\uc218\uc220"},"\uc0b0\ud0c4\ucd1d \uc218\uc220"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\uc0b0\ud0c4\ucd1d \uc218\uc220\uc774\ub780 \ub0c4\uc0c8\ub098\ub294 \ucf54\ub4dc\ub97c \ubcc0\uacbd\ud560 \ub54c \ub9c8\ub2e4 \uc5ec\ub7ec \uc601\uc5ed\uc5d0 \uac78\uccd0\uc11c \uc218\uc815\ud574\uc57c\ud558\ub294 \ud074\ub798\uc2a4\uac00 \ub9ce\uc744 \ub54c \ubc1c\uc0dd\ud55c\ub2e4.")),(0,a.kt)("h2",{id:"\uae30\ub2a5-\ud3b8\uc560"},"\uae30\ub2a5 \ud3b8\uc560"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\uae30\ub2a5 \ud3b8\uc560\ub294 \uc5b4\ub5a4 \ud568\uc218\uac00 \uc790\uae30\uac00 \uc18d\ud55c \ud568\uc218\ub098 \ub370\uc774\ud130\ubcf4\ub2e4 \ub2e4\ub978 \ubaa8\ub4c8\uc758 \ud568\uc218\ub098 \ub370\uc774\ud130\uc640 \uc0c1\ud638 \uc791\uc6a9\uc774 \ub9ce\uc744 \ub54c \ubc1c\uc0dd\ud55c\ub2e4.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\uc774 \ud568\uc218\uac00 \ub370\uc774\ud130\uc640 \uac00\uae4c\uc774 \uc788\uace0 \uc2f6\uc5b4 \ud558\ub294 \ub370\uc774\ud130 \uadfc\ucc98\ub85c \uc62e\uaca8\uc8fc\uae30\ub9cc \ud558\uba74 \ub41c\ub2e4."))),(0,a.kt)("h2",{id:"\ub370\uc774\ud130-\ubb49\uce58"},"\ub370\uc774\ud130 \ubb49\uce58"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\ud544\ub4dc \ud615\ud0dc\uc758 \ub370\uc774\ud130 \ubb49\uce58\uac00 \ub3cc\uc544\ub2e4\ub2cc\ub2e4\uba74 \ud558\ub098\ub85c \ubb36\uc5b4\uc11c \ud074\ub798\uc2a4\ub85c \ucd94\ucd9c\ud574\uc8fc\uc790.")),(0,a.kt)("h2",{id:"\uae30\ubcf8\ud615-\uc9d1\ucc29"},"\uae30\ubcf8\ud615 \uc9d1\ucc29"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\uc804\ud654\ubc88\ud638\uc640 \uac19\uc740 \ub370\uc774\ud130 \ud0c0\uc785\uc744 \uae30\ubcf8\ud615\uc73c\ub85c \uc0ac\uc6a9\ud558\uae30 \ubcf4\ub2e4\ub294 \uac1d\uccb4\ub85c \ubc14\uafb8\ub3c4\ub85d \ud558\uc790.")),(0,a.kt)("h2",{id:"\ubc18\ubcf5\ub418\ub294-switch\ubb38"},"\ubc18\ubcf5\ub418\ub294 switch\ubb38"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\uc21c\uc218 \uac1d\uccb4 \uc9c0\ud5a5\uc758 \uc2e0\ubd09\uc790\ub4e4\uc740 switch \ubb38\uc744 \uc2eb\uc5b4\ud55c\ub2e4.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"switch \uc870\uac74\ubd80 \ub85c\uc9c1\uc744 \ub2e4\ud615\uc131\uc73c\ub85c \ubcc0\uacbd\ud558\ub294 \ubc29\ud5a5\uc73c\ub85c \ud558\uc790."))),(0,a.kt)("h2",{id:"\ubc18\ubcf5\ubb38"},"\ubc18\ubcf5\ubb38"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\uc77c\ubc18\uc801\uc778 \ubc18\ubcf5\ubb38\uc744 \uc790\ubc14\uc758 \ud30c\uc774\ud504\ub77c\uc778\uc73c\ub85c \ubc14\uafb8\ub3c4\ub85d \ud558\uc790.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"map, filter\uc640 \uac19\uc740 \ud30c\uc774\ud504\ub77c\uc778 \uc5f0\uc0b0\uc740 \ub300\ubd80\ubd84\uc758 \uc5b8\uc5b4\uc5d0\uc11c \uc9c0\uc6d0\ud558\ub294 \uae30\ub2a5\uc774\ub2e4."))),(0,a.kt)("h2",{id:"\uc131\uc758-\uc5c6\ub294-\uc694\uc18c"},"\uc131\uc758 \uc5c6\ub294 \uc694\uc18c"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\uba54\uc11c\ub4dc\uac00 \ud558\ub098\ubfd0\uc778 \ud074\ub798\uc2a4\uc640 \uac19\uc774 \ube44\uc7a5\ud558\uac8c \uc124\uacc4\ud558\uc600\uc73c\ub098 \uc798 \uc4f0\uc9c0 \uc54a\ub294 \ud074\ub798\uc2a4\ub294 \uc8fd\uc774\ub3c4\ub85d \ud558\uc790.")),(0,a.kt)("h2",{id:"\ucd94\uce21\uc131-\uc77c\ubc18\ud654"},"\ucd94\uce21\uc131 \uc77c\ubc18\ud654"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"\ub098\uc911\uc5d0 \ud544\uc694\ud560\uac70\uc57c"),"\ub77c\ub294 \uc2dd\uc758 \ucf54\ub4dc\ub294 \ud544\uc694\uc5c6\ub294 \uacbd\uc6b0\uac00 \ub354 \ub9ce\ub2e4.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\uacfc\uac10\ud558\uac8c \uacc4\uce35 \ud569\uce58\uae30, \ud568\uc218 \uc778\ub77c\uc778\ud558\uae30, \ud074\ub798\uc2a4 \uc778\ub77c\uc778\ud558\uae30 \ub4f1\uc73c\ub85c \uc5c6\uc560\ubc84\ub9ac\uc790."))),(0,a.kt)("h2",{id:"\uc784\uc2dc-\ud544\ub4dc"},"\uc784\uc2dc \ud544\ub4dc"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\ud2b9\uc815 \uc0c1\ud669\uc5d0\uc11c\ub9cc \uac12\uc774 \uc124\uc815\ub418\ub294 \ud544\ub4dc\ub97c \uac00\uc9c4 \ud074\ub798\uc2a4\ub77c\uba74, \uacfc\uac10\ud558\uac8c \uc9c0\uc6b0\ub3c4\ub85d \ud558\uc790.")),(0,a.kt)("h2",{id:"\uba54\uc2dc\uc9c0-\uccb4\uc778"},"\uba54\uc2dc\uc9c0 \uccb4\uc778"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\ud55c \uac1d\uccb4\ub97c \ud1b5\ud574 \ub2e4\ub978 \uac1d\uccb4\ub97c \uc5bb\uc740 \ub4a4 \ubc29\uae08 \uc5bb\uc740 \uac1d\uccb4\uc5d0 \ub610 \ub2e4\ub978 \uac1d\uccb4\ub97c \uc694\uccad\ud558\ub294 \uc2dd\uc758 \ucf54\ub4dc\ub294 \uc88b\uc9c0\uc54a\ub2e4.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\uac8c\ud130\uac00 \uaf2c\ub9ac\ub97c \ubb3c\uace0 \uc774\uc5b4\uc838 \uc784\uc2dc \ubcc0\uc218\ub4e4\uc774 \uc904\uc904\uc774 \ub098\uc5f4\ub41c\ub2e4\uba74 \ub9ac\ud329\ud1a0\ub9c1\uc758 \uc88b\uc740 \uc2e0\ud638\ub2e4."))),(0,a.kt)("h2",{id:"\uc911\uac1c\uc790"},"\uc911\uac1c\uc790"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\uac1d\uccb4\uc758 \ub300\ud45c\uc801\uc778 \uae30\ub2a5 \uc911 \ud558\ub098\ub85c \uc678\ubd80\ub85c\ubd80\ud130 \uc138\ubd80\uc0ac\ud56d\uc744 \uc228\uaca8\uc8fc\ub294 \ucea1\uc290\ud654\uac00 \uc788\ub2e4.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\ucea1\uc290\ud654 \uacfc\uc815\uc5d0\uc11c \uc704\uc784\uc744 \uc8fc\ub85c \uc0ac\uc6a9\ud558\ub294\ub370, \uc774\uac8c \ub108\ubb34 \uc9c0\ub098\uce58\uba74 \ubb38\uc81c\uac00 \ub41c\ub2e4.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\uc911\uac1c\uc790 \uc81c\uac70\ub97c \ud558\uc5ec \uc2e4\uc81c\ub85c \uc77c\uc744 \ud558\ub294 \uac1d\uccb4\uc640 \uc9c1\uc811 \uc18c\ud1b5\ud558\uac8c \ub9cc\ub4e4\ub3c4\ub85d \ud558\uc790."))),(0,a.kt)("h2",{id:"\ub0b4\ubd80\uc790-\uac70\ub798"},"\ub0b4\ubd80\uc790 \uac70\ub798"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\uc5ec\ub7ec \ubaa8\ub4c8\uc774 \uac19\uc740 \uad00\uc2ec\uc0ac\ub97c \uacf5\uc720\ud55c\ub2e4\uba74 \uacf5\ud1b5 \ubd80\ubd84\uc744 \uc815\uc2dd\uc73c\ub85c \ucc98\ub9ac\ud558\ub294 \uc81c 3\uc758 \ubaa8\ub4c8\uc744 \uc0c8\ub85c \ub9cc\ub4e4\uac70\ub098 \uc704\uc784 \uc228\uae30\uae30\ub97c \uc774\uc6a9\ud574 \ub2e4\ub978 \ubaa8\ub4c8\uc774 \uc904\uac04\uc790 \uc5ed\ud560\uc744 \ud558\uac8c \ub9cc\ub4e0\ub2e4.")),(0,a.kt)("h2",{id:"\uac70\ub300\ud55c-\ud074\ub798\uc2a4"},"\uac70\ub300\ud55c \ud074\ub798\uc2a4"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\ud55c \ud074\ub798\uc2a4\uac00 \ub108\ubb34 \ub9ce\uc740 \uc77c\uc744 \ud558\ub2e4\ubcf4\uba74 \ud544\ub4dc \uc218\uac00 \ub298\uc5b4\ub09c\ub2e4.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\uac70\ub300\ud55c \ud074\ub798\uc2a4\ub77c\uba74 \uc5ed\ud560 \ubcc4\ub85c \ucabc\uac1c\ub3c4\ub85d \ud558\uace0, \uc288\ud37c \ud074\ub798\uc2a4\ub85c \ucd94\ucd9c\ud558\uac70\ub098, \ud0c0\uc785 \ucf54\ub4dc\ub97c \uc11c\ube0c \ud074\ub798\uc2a4\ub85c \ubc14\uafb8\uc790."))),(0,a.kt)("h2",{id:"\uc11c\ub85c-\ub2e4\ub978-\uc778\ud130\ud398\uc774\uc2a4\uc758-\ub300\uc548-\ud074\ub798\uc2a4\ub4e4"},"\uc11c\ub85c \ub2e4\ub978 \uc778\ud130\ud398\uc774\uc2a4\uc758 \ub300\uc548 \ud074\ub798\uc2a4\ub4e4"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\ud074\ub798\uc2a4, \uc989 \uac1d\uccb4 \uc9c0\ud5a5\uc758 \ud070 \uc7a5\uc810\uc740 \uc5b8\uc81c\ub4e0 \ub2e4\ub978 \ud074\ub798\uc2a4\ub85c \uad50\uccb4\ud560 \uc218 \uc788\ub2e4\ub294 \uac83\uc774\ub2e4.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\ub2e8 \uc774\ub97c \uc704\ud574\uc11c\ub294 \uc778\ud130\ud398\uc774\uc2a4\uac00 \uac19\uc544\uc57c\ud55c\ub2e4."))),(0,a.kt)("h2",{id:"\ub370\uc774\ud130-\ud074\ub798\uc2a4"},"\ub370\uc774\ud130 \ud074\ub798\uc2a4"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Getter/Setter\ub85c\ub9cc \uc774\ub8e8\uc5b4\uc9c4 \ud074\ub798\uc2a4\ub97c \ub370\uc774\ud130 \ud074\ub798\uc2a4\ub77c\uace0 \ubd80\ub978\ub2e4.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\ubcc0\uacbd\ud558\uba74 \uc548\ub418\ub294 \uc601\uc5ed\uc740 Setter\ub97c \uc81c\uac70\ud558\uace0, \ub808\ucf54\ub4dc\ub97c \ucea1\uc290\ud654\ud558\uc790."))),(0,a.kt)("h2",{id:"\uc0c1\uc18d-\ud3ec\uae30"},"\uc0c1\uc18d \ud3ec\uae30"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\uc0c1\uc18d\uc740 \uc595\uc740 \uae4a\uc774\ub77c\uba74 \uc77c\ubd80 \ub3d9\uc791\uc744 \uc7ac\ud65c\uc6a9\ud560 \uc218 \uc788\uc5b4\uc11c \uc720\uc6a9\ud558\uc9c0\ub9cc, \ub108\ubb34 \uae4a\uc774\uc788\uac8c \uac00\uba74 \ubb38\uc81c\uac00 \uc0dd\uae34\ub2e4.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\uc0c1\uc18d\uc744 \ud3ec\uae30\ud560 \uc2dc \ubb38\uc81c\uac00 \uc0dd\uae34\ub2e4\uba74 \uc608\uc804 \ubc29\uc2dd\uc744 \uc0ac\uc6a9\ud558\ub418, \uc0c1\uc18d\uc744 \ud3ec\uae30\ud568\uc73c\ub85c\uc368 \uc5bb\ub294 \uc774\ub4dd\ub3c4 \ubd84\uba85\ud788 \uc788\uc73c\ubbc0\ub85c \uc774\ub294 \uc801\uc808\ud788 \ud310\ub2e8\ud558\uc790."))),(0,a.kt)("h2",{id:"\uc8fc\uc11d"},"\uc8fc\uc11d"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\ub9c8\ud2f4 \ud30c\uc6b8\ub7ec\ub294 \uc8fc\uc11d\uc774 \uaf2d \ub098\uc05c \uac83\uc740 \uc544\ub2c8\ub77c\uace0 \ub9d0\ud55c\ub2e4. (\uc774\ub294 \ub85c\ubc84\ud2b8.C.\ub9c8\ud2f4\uc758 \ud074\ub9b0\ucf54\ub4dc\uc640 \uc644\ubcbd\ud788 \ubc18\ub300\ub41c\ub2e4!)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\uc801\uc808\ud55c \uc8fc\uc11d\uc740 \uc624\ud788\ub824 \uc57d\uc774 \ub418\uc9c0\ub9cc \uc9c0\ub098\uce5c \uc8fc\uc11d\uc740 \ub3c5\uc774\ub41c\ub2e4."))),(0,a.kt)("h2",{id:"reference"},"Reference"),(0,a.kt)("img",{width:"620",alt:"\u1109\u1173\u110f\u1173\u1105\u1175\u11ab\u1109\u1163\u11ba 2021-08-31 \u110b\u1169\u1112\u116e 10 29 39",src:"https://user-images.githubusercontent.com/43809168/131528140-3f6f8492-1dee-4f94-b5b6-929136cd2686.jpeg"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Refactoring 2\ud310 ( \uc800\uc790 : \ub9c8\ud2f4 \ud30c\uc6b8\ub7ec )")))}m.isMDXComponent=!0}}]);