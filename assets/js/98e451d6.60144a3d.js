(self.webpackChunkstudy=self.webpackChunkstudy||[]).push([[4935],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return m},kt:function(){return c}});var l=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,l,n=function(e,t){if(null==e)return{};var a,l,n={},r=Object.keys(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var k=l.createContext({}),u=function(e){var t=l.useContext(k),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},m=function(e){var t=u(e.components);return l.createElement(k.Provider,{value:t},e.children)},o={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},N=l.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,k=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),N=u(a),c=n,d=N["".concat(k,".").concat(c)]||N[c]||o[c]||r;return a?l.createElement(d,p(p({ref:t},m),{},{components:a})):l.createElement(d,p({ref:t},m))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,p=new Array(r);p[0]=N;var i={};for(var k in t)hasOwnProperty.call(t,k)&&(i[k]=t[k]);i.originalType=e,i.mdxType="string"==typeof e?e:n,p[1]=i;for(var u=2;u<r;u++)p[u]=a[u];return l.createElement.apply(null,p)}return l.createElement.apply(null,a)}N.displayName="MDXCreateElement"},1907:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return i},metadata:function(){return k},toc:function(){return u},default:function(){return o}});var l=a(2122),n=a(9756),r=(a(7294),a(3905)),p=["components"],i={id:"09-programming-rule",title:"09. \uc77c\ubc18\uc801\uc778 \ud504\ub85c\uadf8\ub798\ubc0d \uc6d0\uce59"},k={unversionedId:"java/effective-java/09-programming-rule",id:"java/effective-java/09-programming-rule",isDocsHomePage:!1,title:"09. \uc77c\ubc18\uc801\uc778 \ud504\ub85c\uadf8\ub798\ubc0d \uc6d0\uce59",description:"\uc9c0\uc5ed\ubcc0\uc218, \uc81c\uc5b4\uad6c\uc870, \ub77c\uc774\ube0c\ub7ec\ub9ac, \ub370\uc774\ud130 \ud0c0\uc785, \ub9ac\ud50c\ub809\uc158, \ub124\uc774\ud2f0\ube0c \uba54\uc11c\ub4dc\uacfc \uac19\uc740 \uc790\ubc14\uc758 \uae30\ubcf8\uc744 \ub2e4\ub8e8\ub294 \ucc55\ud130",source:"@site/docs/java/effective-java/09-programming-rule.md",sourceDirName:"java/effective-java",slug:"/java/effective-java/09-programming-rule",permalink:"/study/docs/java/effective-java/09-programming-rule",editUrl:"https://github.com/minkukjo/study/edit/master/docs/java/effective-java/09-programming-rule.md",version:"current",lastUpdatedAt:1623854008,formattedLastUpdatedAt:"6/16/2021",sidebarPosition:9,frontMatter:{id:"09-programming-rule",title:"09. \uc77c\ubc18\uc801\uc778 \ud504\ub85c\uadf8\ub798\ubc0d \uc6d0\uce59"},sidebar:"mySidebar",previous:{title:"08. \uba54\uc18c\ub4dc",permalink:"/study/docs/java/effective-java/08-method"},next:{title:"03. \uce74\ud504\uce74 \ucee8\uc288\uba38",permalink:"/study/docs/kafka/kafka-core-guide/03-consumer"}},u=[{value:"\uc9c0\uc5ed\ubcc0\uc218 \ubc94\uc704\ub97c \ucd5c\uc18c\ud654\ud558\ub77c",id:"\uc9c0\uc5ed\ubcc0\uc218-\ubc94\uc704\ub97c-\ucd5c\uc18c\ud654\ud558\ub77c",children:[]},{value:"\uc804\ud1b5\uc801\uc778 for \ubb38\ubcf4\ub2e4\ub294 for-each\ub97c \uc0ac\uc6a9\ud558\ub77c",id:"\uc804\ud1b5\uc801\uc778-for-\ubb38\ubcf4\ub2e4\ub294-for-each\ub97c-\uc0ac\uc6a9\ud558\ub77c",children:[{value:"for-each\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc5c6\ub294 \uc138\uac00\uc9c0 \uacbd\uc6b0",id:"for-each\ub97c-\uc0ac\uc6a9\ud560-\uc218-\uc5c6\ub294-\uc138\uac00\uc9c0-\uacbd\uc6b0",children:[]},{value:"\uacb0\ub860",id:"\uacb0\ub860",children:[]}]},{value:"\ub77c\uc774\ube0c\ub7ec\ub9ac\ub97c \uc775\ud788\uace0 \uc0ac\uc6a9\ud558\ub77c",id:"\ub77c\uc774\ube0c\ub7ec\ub9ac\ub97c-\uc775\ud788\uace0-\uc0ac\uc6a9\ud558\ub77c",children:[{value:"\uc694\uc57d",id:"\uc694\uc57d",children:[]}]},{value:"\uc815\ud655\ud55c \ub2f5\uc774 \ud544\uc694\ud558\ub2e4\uba74 float\uc640 double\uc740 \ud53c\ud558\ub77c",id:"\uc815\ud655\ud55c-\ub2f5\uc774-\ud544\uc694\ud558\ub2e4\uba74-float\uc640-double\uc740-\ud53c\ud558\ub77c",children:[]},{value:"\ubc15\uc2f1\ub41c \uae30\ubcf8\ud0c0\uc785\ubcf4\ub2e4\ub294 \uae30\ubcf8 \ud0c0\uc785\uc744 \uc0ac\uc6a9\ud558\ub77c",id:"\ubc15\uc2f1\ub41c-\uae30\ubcf8\ud0c0\uc785\ubcf4\ub2e4\ub294-\uae30\ubcf8-\ud0c0\uc785\uc744-\uc0ac\uc6a9\ud558\ub77c",children:[]},{value:"\ub2e4\ub978 \ud0c0\uc785\uc774 \uc801\uc808\ud558\ub2e4\uba74 \ubb38\uc790\uc5f4 \uc0ac\uc6a9\uc744 \ud53c\ud558\ub77c",id:"\ub2e4\ub978-\ud0c0\uc785\uc774-\uc801\uc808\ud558\ub2e4\uba74-\ubb38\uc790\uc5f4-\uc0ac\uc6a9\uc744-\ud53c\ud558\ub77c",children:[]},{value:"\ubb38\uc790\uc5f4 \uc5f0\uacb0\uc740 \ub290\ub9ac\ub2c8 \uc8fc\uc758\ud558\ub77c",id:"\ubb38\uc790\uc5f4-\uc5f0\uacb0\uc740-\ub290\ub9ac\ub2c8-\uc8fc\uc758\ud558\ub77c",children:[]},{value:"\uac1d\uccb4\ub294 \uc778\ud130\ud398\uc774\uc2a4\ub97c \uc0ac\uc6a9\ud574 \ucc38\uc870\ud558\ub77c",id:"\uac1d\uccb4\ub294-\uc778\ud130\ud398\uc774\uc2a4\ub97c-\uc0ac\uc6a9\ud574-\ucc38\uc870\ud558\ub77c",children:[]},{value:"\ub9ac\ud50c\ub809\uc158\ubcf4\ub2e4\ub294 \uc778\ud130\ud398\uc774\uc2a4\ub97c \uc0ac\uc6a9\ud558\ub77c",id:"\ub9ac\ud50c\ub809\uc158\ubcf4\ub2e4\ub294-\uc778\ud130\ud398\uc774\uc2a4\ub97c-\uc0ac\uc6a9\ud558\ub77c",children:[{value:"\ub9ac\ud50c\ub809\uc158\uc758 \ub2e8\uc810",id:"\ub9ac\ud50c\ub809\uc158\uc758-\ub2e8\uc810",children:[]},{value:"\ub9ac\ud50c\ub809\uc158\uc744 \uc4f0\ub294 \uacbd\uc6b0",id:"\ub9ac\ud50c\ub809\uc158\uc744-\uc4f0\ub294-\uacbd\uc6b0",children:[]}]},{value:"\ub124\uc774\ud2f0\ube0c \uba54\uc11c\ub4dc\ub294 \uc2e0\uc911\ud788 \uc0ac\uc6a9\ud558\ub77c",id:"\ub124\uc774\ud2f0\ube0c-\uba54\uc11c\ub4dc\ub294-\uc2e0\uc911\ud788-\uc0ac\uc6a9\ud558\ub77c",children:[{value:"\ub124\uc774\ud2f0\ube0c \uba54\uc11c\ub4dc\ub97c \uc4f0\ub294 \ubaa9\uc801",id:"\ub124\uc774\ud2f0\ube0c-\uba54\uc11c\ub4dc\ub97c-\uc4f0\ub294-\ubaa9\uc801",children:[]},{value:"\ub124\uc774\ud2f0\ube0c \uba54\uc11c\ub4dc\uc758 \uc7a5\ub2e8\uc810",id:"\ub124\uc774\ud2f0\ube0c-\uba54\uc11c\ub4dc\uc758-\uc7a5\ub2e8\uc810",children:[]}]},{value:"\ucd5c\uc801\ud654\ub294 \uc2e0\uc911\ud788 \ud558\ub77c",id:"\ucd5c\uc801\ud654\ub294-\uc2e0\uc911\ud788-\ud558\ub77c",children:[{value:"\uc124\uacc4 \ub2e8\uacc4\uc5d0\uc11c\uc758 \uace0\ub824\ud560 \ubd80\ubd84\ub4e4",id:"\uc124\uacc4-\ub2e8\uacc4\uc5d0\uc11c\uc758-\uace0\ub824\ud560-\ubd80\ubd84\ub4e4",children:[]},{value:"\ucd5c\uc801\ud654\uc5d0 \uad00\ud574\uc11c",id:"\ucd5c\uc801\ud654\uc5d0-\uad00\ud574\uc11c",children:[]},{value:"\uc694\uc57d",id:"\uc694\uc57d-1",children:[]}]},{value:"\uc77c\ubc18\uc801\uc73c\ub85c \ud1b5\uc6a9\ub418\ub294 \uba85\uba85 \uaddc\uce59\uc744 \ub530\ub974\ub77c",id:"\uc77c\ubc18\uc801\uc73c\ub85c-\ud1b5\uc6a9\ub418\ub294-\uba85\uba85-\uaddc\uce59\uc744-\ub530\ub974\ub77c",children:[]},{value:"Reference",id:"reference",children:[]}],m={toc:u};function o(e){var t=e.components,a=(0,n.Z)(e,p);return(0,r.kt)("wrapper",(0,l.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\uc9c0\uc5ed\ubcc0\uc218, \uc81c\uc5b4\uad6c\uc870, \ub77c\uc774\ube0c\ub7ec\ub9ac, \ub370\uc774\ud130 \ud0c0\uc785, \ub9ac\ud50c\ub809\uc158, \ub124\uc774\ud2f0\ube0c \uba54\uc11c\ub4dc\uacfc \uac19\uc740 \uc790\ubc14\uc758 \uae30\ubcf8\uc744 \ub2e4\ub8e8\ub294 \ucc55\ud130")),(0,r.kt)("h2",{id:"\uc9c0\uc5ed\ubcc0\uc218-\ubc94\uc704\ub97c-\ucd5c\uc18c\ud654\ud558\ub77c"},"\uc9c0\uc5ed\ubcc0\uc218 \ubc94\uc704\ub97c \ucd5c\uc18c\ud654\ud558\ub77c"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"item 57")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"item 15"),"\uc640 \ub9c8\ucc2c\uac00\uc9c0\ub85c ",(0,r.kt)("strong",{parentName:"p"},"\ud074\ub798\uc2a4\uc640 \uba64\ubc84\uc758 \uc811\uadfc \uad8c\ud55c\uc744 \ucd5c\uc18c\ud654\ud558\ub77c"),"\ub294 \ucde8\uc9c0\uc640 \ube44\uc2b7\ud558\ub2e4.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\uc9c0\uc5ed \ubcc0\uc218\ub294 ",(0,r.kt)("strong",{parentName:"p"},"\uac00\uc7a5 \ucc98\uc74c \uc4f0\uc77c \ub54c \uc120\uc5b8"),"\ud558\uc790")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\uc0ac\uc6a9\ud558\ub824\uba74 \uba40\uc5c8\ub294\ub370 \ubbf8\ub9ac \uc120\uc5b8\ubd80\ud130 \ud574\ubc84\ub9ac\uba74 \ucf54\ub4dc \uc790\uccb4\uac00 \uc5b4\uc218\uc120\ud574\uc9c4\ub2e4.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\ubaa8\ub4e0 \uc9c0\uc5ed\ubcc0\uc218\ub294 \uc120\uc5b8\uacfc \ub3d9\uc2dc\uc5d0 \ucd08\uae30\ud654\ud558\uc790")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"while"),"\ubb38 \ubcf4\ub2e4\ub294 \uac00\uae09\uc801 ",(0,r.kt)("strong",{parentName:"p"},"for"),"\ubb38\uc744 \uc0ac\uc6a9\ud558\uc790")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\uc9c0\uc5ed\ubcc0\uc218 \ubc94\uc704\ub97c \ucd5c\uc18c\ud654\ud558\uae30 \uc704\ud574 \uba54\uc11c\ub4dc\ub97c \uc791\uac8c \uc720\uc9c0\ud558\uace0 \ud55c \uac00\uc9c0 \uae30\ub2a5\uc5d0 \uc9d1\uc911\uc2dc\ud0a4\uc790"))),(0,r.kt)("h2",{id:"\uc804\ud1b5\uc801\uc778-for-\ubb38\ubcf4\ub2e4\ub294-for-each\ub97c-\uc0ac\uc6a9\ud558\ub77c"},"\uc804\ud1b5\uc801\uc778 for \ubb38\ubcf4\ub2e4\ub294 for-each\ub97c \uc0ac\uc6a9\ud558\ub77c"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"item 58")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"for-each"),"\ubb38\uc758 \uc815\uc2dd \uc774\ub984\uc740 ",(0,r.kt)("strong",{parentName:"p"},"\ud5a5\uc0c1\ub41c for \ubb38"),"(enhanced for statement)\uc774\ub2e4.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\ubc18\ubcf5\uc790\uc640 \uc778\ub371\uc2a4\ub97c \uc0ac\uc6a9\ud558\uc9c0 \uc54a\uc73c\ub2c8 \ucf54\ub4dc\ub3c4 \uae54\ub054\ud558\uace0 \uc624\ub958\ub3c4 \uc5c6\ub2e4")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\uc544\ub984\ub2e4\uc6b4 ",(0,r.kt)("strong",{parentName:"p"},"for-each"),"\uc774\uc9c0\ub9cc \ub2e4\uc74c \uc138 \uac00\uc9c0 \uacbd\uc6b0\uc5d0\ub294 \uc0ac\uc6a9 \ud560 \uc218 \uc5c6\ub2e4."))),(0,r.kt)("h3",{id:"for-each\ub97c-\uc0ac\uc6a9\ud560-\uc218-\uc5c6\ub294-\uc138\uac00\uc9c0-\uacbd\uc6b0"},"for-each\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc5c6\ub294 \uc138\uac00\uc9c0 \uacbd\uc6b0"),(0,r.kt)("h4",{id:"\ud30c\uad34\uc801\uc778-\ud544\ud130\ub9c1-destructive-filtering"},"\ud30c\uad34\uc801\uc778 \ud544\ud130\ub9c1 (destructive filtering)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uceec\ub809\uc158\uc744 \uc21c\ud68c\ud558\uba70 \uc120\ud0dd\ub41c \uc6d0\uc18c\ub97c \uc81c\uac70\ud558\ub294 \uacbd\uc6b0")),(0,r.kt)("h4",{id:"\ubcc0\ud615-transforming"},"\ubcc0\ud615 (transforming)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ub9ac\uc2a4\ud2b8\ub098 \ubc30\uc5f4\uc744 \uc21c\ud68c\ud558\uba74\uc11c \uc6d0\uc18c\uc758 \uac12 \uc77c\ubd80 \ub610\ub294 \uc804\uccb4\ub97c \ubcc0\uacbd\ud574\uc57c\ud558\ub294 \uacbd\uc6b0")),(0,r.kt)("h4",{id:"\ubcd1\ub82c-\ubc18\ubcf5-parallel-iteration"},"\ubcd1\ub82c \ubc18\ubcf5 (parallel Iteration)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uc5ec\ub7ec \uceec\ub809\uc158\uc744 \ubcd1\ub82c\ub85c \uc21c\ud68c\ud574\uc57c\ud55c\ub2e4\uba74 \uc774 \uc5ed\uc2dc\ub3c4 ",(0,r.kt)("strong",{parentName:"li"},"for-each")," \uc0ac\uc6a9\uc5d0 \uc801\ud569\ud558\uc9c0 \uc54a\ub2e4.")),(0,r.kt)("h3",{id:"\uacb0\ub860"},"\uacb0\ub860"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"for-each"),"\ub294 \uc804\ud1b5 for\ubb38\uacfc \ube44\uad50\ud574\ub3c4 \uc131\ub2a5 \uc800\ud558\ub3c4 \uc5c6\ub294\ub370\ub2e4\uac00 \uc720\uc5f0\ud558\uace0 \ubc84\uadf8\ub3c4 \uc608\ubc29\ud574\uc900\ub2e4. (\uc9f1\uc9f1\ub9e8)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\uac00\ub2a5\ud558\uba74 \ubaa8\ub4e0 \uacf3\uc5d0\uc11c ",(0,r.kt)("strong",{parentName:"p"},"for-each"),"\ub97c \uc0ac\uc6a9\ud558\ub3c4\ub85d \ud558\uc790"))),(0,r.kt)("h2",{id:"\ub77c\uc774\ube0c\ub7ec\ub9ac\ub97c-\uc775\ud788\uace0-\uc0ac\uc6a9\ud558\ub77c"},"\ub77c\uc774\ube0c\ub7ec\ub9ac\ub97c \uc775\ud788\uace0 \uc0ac\uc6a9\ud558\ub77c"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"item 59")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\uc774\ubc88 \uc7a5\uc740 \uc81c\ubaa9\ub9cc \ubd10\ub3c4 \uc880 \ub760\uc6a9\ud558\ub2e4. \ub2f9\uc5f0\ud55c \ub9d0\uc500\uc744..")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\ud45c\uc900 \ub77c\uc774\ube0c\ub7ec\ub9ac\ub97c \uc0ac\uc6a9\ud558\uba74 \uac80\uc99d\ub41c \uae30\ub2a5\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc788\ub2e4. \uc774\ubbf8 \uc6b0\ub9ac\uac00 \ud588\uc5b4\uc57c\ud560 \uc218 \ub9ce\uc740 \ud14c\uc2a4\ud2b8\uc640 \uac80\uc99d\uc744 \uac70\uccd0 \uac1c\ubc1c\ub41c \uac83\uc774\ubbc0\ub85c \ubbff\uace0 \uc0ac\uc6a9\ud560 \uc218 \uc788\ub2e4.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\uc790\ubc14\uc5d0\uc11c \uc81c\uacf5\ud558\ub294 \ud45c\uc900 \ub77c\uc774\ube0c\ub7ec\ub9ac\ub4e4\uc5d0 \ub300\ud574\uc11c \uc798 \uc774\ud574\ud558\uace0 \uc0ac\uc6a9\ud558\ub3c4\ub85d \ud558\uc790"))),(0,r.kt)("h3",{id:"\uc694\uc57d"},"\uc694\uc57d"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\ubc14\ud034\uc758 \uc7ac\ubc1c\uba85\uc740 \uae08\uc9c0")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\uc575\uac04\ud55c\uac74 \ub2e4 \ub77c\uc774\ube0c\ub7ec\ub9ac\ub85c \uac1c\ubc1c\ub418\uc5b4\uc788\uc73c\ub2c8\uae4c \uae43\ud5c8\ube0c\ub97c \uc798 \ub4a4\uc838\ubcf4\uc790")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\uc624\ud508\uc18c\uc2a4 \ub77c\uc774\ube0c\ub7ec\ub9ac\uc758 \ucf54\ub4dc \ud004\ub9ac\ud2f0\ub294 \uc6b0\ub9ac\uac00 \uc791\uc131\ud55c \uac83 \ubcf4\ub2e4 \ud6e8\uc52c \ub354 \uc88b\uc744 \uc218 \uc788\ub2e4. \uc218 \ub9ce\uc740 \uac1c\ubc1c\uc790\ub4e4\uc758 \uc190\uc744 \uac70\uccd0\uac14\uae30 \ub54c\ubb38\uc774\ub2e4."))),(0,r.kt)("h2",{id:"\uc815\ud655\ud55c-\ub2f5\uc774-\ud544\uc694\ud558\ub2e4\uba74-float\uc640-double\uc740-\ud53c\ud558\ub77c"},"\uc815\ud655\ud55c \ub2f5\uc774 \ud544\uc694\ud558\ub2e4\uba74 float\uc640 double\uc740 \ud53c\ud558\ub77c"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"item 60")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\ub2f9\uc5f0\ud55c \uc774\uc57c\uae30\uc774\ub2e4. ",(0,r.kt)("strong",{parentName:"p"},"float"),"\uc640 ",(0,r.kt)("strong",{parentName:"p"},"double"),"\uc740 OS\uc758 CPU \uc131\ub2a5\uc5d0 \ub2ec\ub824\uc788\ub2e4. \uadf8\ub7ec\ubbc0\ub85c \uc815\ud655\ud558\uc9c0 \uc54a\uc744 \uc218 \uc788\ub2e4.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\uc18c\uc218\uc810\uc774 \ud06c\uac8c \uc911\uc694\ud558\uc9c0\uc54a\ub2e4\uba74 ",(0,r.kt)("strong",{parentName:"p"},"int"),"\ub098 ",(0,r.kt)("strong",{parentName:"p"},"long")," \uc790\ub8cc\uad6c\uc870\ub97c \uc0ac\uc6a9\ud558\uace0 \uaf2d \ud544\uc694\ud558\ub2e4\uba74 ",(0,r.kt)("strong",{parentName:"p"},"BigDecimal"),"\uc744 \uace0\ub824\ud574\ubcf4\uc790"))),(0,r.kt)("h2",{id:"\ubc15\uc2f1\ub41c-\uae30\ubcf8\ud0c0\uc785\ubcf4\ub2e4\ub294-\uae30\ubcf8-\ud0c0\uc785\uc744-\uc0ac\uc6a9\ud558\ub77c"},"\ubc15\uc2f1\ub41c \uae30\ubcf8\ud0c0\uc785\ubcf4\ub2e4\ub294 \uae30\ubcf8 \ud0c0\uc785\uc744 \uc0ac\uc6a9\ud558\ub77c"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"item 61")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\ubc15\uc2f1\ub41c \uae30\ubcf8 \ud0c0\uc785\uc740 ",(0,r.kt)("strong",{parentName:"p"},"Integer"),", ",(0,r.kt)("strong",{parentName:"p"},"Double"),", ",(0,r.kt)("strong",{parentName:"p"},"Boolean"),"\uc744 \uc758\ubbf8\ud55c\ub2e4")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\ubc15\uc2f1\ub41c \uae30\ubcf8 \ud0c0\uc785\uc740 ",(0,r.kt)("inlineCode",{parentName:"p"},"==")," \uc5f0\uc0b0\uc790\ub97c \uc0ac\uc6a9\ud558\uba74 \uc624\ub958\uac00 \ub09c\ub2e4")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\ubc15\uc2f1\ub41c \uae30\ubcf8 \ud0c0\uc785\uacfc \uc77c\ubc18 \ud0c0\uc785\uc744 \ud63c\uc6a9\ud55c \uc5f0\uc0b0\uc5d0\uc11c \ubc15\uc2f1\ub41c \uae30\ubcf8 \ud0c0\uc785\uc758 \ubc15\uc2f1\uc774 \uc790\ub3d9\uc73c\ub85c \ud480\ub9b0\ub2e4")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\uc989, null \ucc38\uc870\ub97c \uc5b8\ubc15\uc2f1\ud558\uba74 ",(0,r.kt)("strong",{parentName:"p"},"NullPointerException"),"\uac00 \ubc1c\uc0dd\ud55c\ub2e4\ub294 \ub73b\uc774\ub2e4")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\ubc15\uc2f1\ub41c \uae30\ubcf8 \ud0c0\uc785\uc774 \uc0ac\uc6a9\ub418\ub294 \uacbd\uc6b0\ub294 \uceec\ub809\uc158\uc758 \ud0c0\uc785\uc73c\ub85c \uc0ac\uc6a9\ud558\ub294 \uacbd\uc6b0\uc774\uace0 \uadf8 \uc678\uc5d0\ub294 \uac00\uae09\uc801 \uae30\ubcf8 \ud0c0\uc785\uc744 \uc0ac\uc6a9\ud558\uc790"))),(0,r.kt)("h2",{id:"\ub2e4\ub978-\ud0c0\uc785\uc774-\uc801\uc808\ud558\ub2e4\uba74-\ubb38\uc790\uc5f4-\uc0ac\uc6a9\uc744-\ud53c\ud558\ub77c"},"\ub2e4\ub978 \ud0c0\uc785\uc774 \uc801\uc808\ud558\ub2e4\uba74 \ubb38\uc790\uc5f4 \uc0ac\uc6a9\uc744 \ud53c\ud558\ub77c"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"item 62")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\ubb38\uc790\uc5f4\uc740 \ub2e4\ub978 \uac12 \ud0c0\uc785\uc744 \ub300\uc2e0\ud558\uae30\uc5d0 \uc801\ud569\ud558\uc9c0 \uc54a\ub2e4")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\ubb38\uc790\uc5f4\uc740 \uc5f4\uac70 \ud0c0\uc785\uc744 \ub300\uc2e0\ud560 \uc218 \uc5c6\uace0, \ubb38\uc790\uc5f4\uc740 \ud63c\ud569 \ud0c0\uc785\uc744 \ud45c\ud604\ud558\uae30\uc5d0 \uc801\ud569\ud558\uc9c0 \uc54a\ub2e4"))),(0,r.kt)("h2",{id:"\ubb38\uc790\uc5f4-\uc5f0\uacb0\uc740-\ub290\ub9ac\ub2c8-\uc8fc\uc758\ud558\ub77c"},"\ubb38\uc790\uc5f4 \uc5f0\uacb0\uc740 \ub290\ub9ac\ub2c8 \uc8fc\uc758\ud558\ub77c"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"item 63")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\ubb38\uc790\uc5f4 \uc5f0\uacb0 \uc5f0\uc0b0\uc790\ub85c \ubb38\uc790\uc5f4 n\uac1c\ub97c \uc787\ub294 \uc2dc\uac04\uc740 n^2\uc5d0 \ube44\ub840\ud55c\ub2e4")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\ubb38\uc790\uc5f4 \uc5f0\uacb0\uc774 \ud544\uc694\ud55c \uacbd\uc6b0\ub77c\uba74 ",(0,r.kt)("inlineCode",{parentName:"p"},"StringBuilder"),"\ub97c \uc0ac\uc6a9\ud558\uc790"))),(0,r.kt)("h2",{id:"\uac1d\uccb4\ub294-\uc778\ud130\ud398\uc774\uc2a4\ub97c-\uc0ac\uc6a9\ud574-\ucc38\uc870\ud558\ub77c"},"\uac1d\uccb4\ub294 \uc778\ud130\ud398\uc774\uc2a4\ub97c \uc0ac\uc6a9\ud574 \ucc38\uc870\ud558\ub77c"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"item 64")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\uac1d\uccb4\uc9c0\ud5a5\uacfc\ub3c4 \ub9de\ubb3c\ub9ac\ub294 \uc774\uc57c\uae30\uc774\ub2e4")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\uc801\ud569\ud55c \uc778\ud130\ud398\uc774\uc2a4\ub9cc \uc788\ub2e4\uba74 \ub9e4\uac1c\ubcc0\uc218\ubfd0 \uc544\ub2c8\ub77c, \ubc18\ud658\uac12, \ubcc0\uc218, \ud544\ub4dc\ub97c \uc804\ubd80 \uc778\ud130\ud398\uc774\uc2a4 \ud0c0\uc785\uc73c\ub85c \uc120\uc5b8\ud558\uc790")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\uc778\ud130\ud398\uc774\uc2a4 \ud0c0\uc785\uc744 \uc0ac\uc6a9\ud558\ub294 \uc2b5\uad00\uc744 \uae38\ub7ec\ub450\uba74 \ud504\ub85c\uadf8\ub7a8\uc774 \ud6e8\uc52c \uc720\uc5f0\ud574\uc9c8 \uc218 \uc788\ub2e4")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\uc801\ud569\ud55c \uc778\ud130\ud398\uc774\uc2a4\uac00 \uc5c6\ub2e4\uba74 \ud074\ub798\uc2a4\uc758 \uacc4\uce35\uad6c\uc870 \uc911 \ud544\uc694\ud55c \uae30\ub2a5\uc744 \ub9cc\uc871\ud558\ub294 \uac00\uc7a5 \ub35c \uad6c\uccb4\uc801\uc778 \ud074\ub798\uc2a4\ub97c \ud0c0\uc785\uc73c\ub85c \uc4f0\uc790"))),(0,r.kt)("h2",{id:"\ub9ac\ud50c\ub809\uc158\ubcf4\ub2e4\ub294-\uc778\ud130\ud398\uc774\uc2a4\ub97c-\uc0ac\uc6a9\ud558\ub77c"},"\ub9ac\ud50c\ub809\uc158\ubcf4\ub2e4\ub294 \uc778\ud130\ud398\uc774\uc2a4\ub97c \uc0ac\uc6a9\ud558\ub77c"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"item 65")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\ub9ac\ud50c\ub809\uc158\uc744 \uc774\uc6a9\ud558\uba74 \ucef4\ud30c\uc77c \ud0c0\uc784\uc5d0 \uc874\uc7ac\ud558\uc9c0 \uc54a\ub294 \ud074\ub798\uc2a4\ub3c4 \uc0ac\uc6a9\uc774 \uac00\ub2a5\ud558\ub2e4")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\uadf8\ub7ec\ub098 \ub9ac\ud50c\ub809\uc158\uc740 \ub2e4\uc74c\uacfc \uac19\uc740 \ub2e8\uc810\uc744 \uac16\ub294\ub2e4"))),(0,r.kt)("h3",{id:"\ub9ac\ud50c\ub809\uc158\uc758-\ub2e8\uc810"},"\ub9ac\ud50c\ub809\uc158\uc758 \ub2e8\uc810"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\ucef4\ud30c\uc77c\ud0c0\uc784 \ud0c0\uc785 \uac80\uc0ac\uac00 \uc8fc\ub294 \uc774\uc810\uc744 \ub204\ub9b4 \uc218 \uc5c6\ub2e4")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\ub9ac\ud50c\ub809\uc158\uc744 \uc774\uc6a9\ud558\uba74 \ucf54\ub4dc\uac00 \uc9c0\uc800\ubd84\ud558\uace0 \uc7a5\ud669\ud574\uc9c4\ub2e4")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\uc131\ub2a5\uc774 \ub5a8\uc5b4\uc9c4\ub2e4"))),(0,r.kt)("h3",{id:"\ub9ac\ud50c\ub809\uc158\uc744-\uc4f0\ub294-\uacbd\uc6b0"},"\ub9ac\ud50c\ub809\uc158\uc744 \uc4f0\ub294 \uacbd\uc6b0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\uc544\uc8fc \uc81c\ud55c\uc801\uc778 \ud615\ud0dc\ub85c\ub9cc \uc0ac\uc6a9\ud574\uc57c\ud55c\ub2e4, \uac00\ub839 \uc2a4\ud504\ub9c1\uacfc \uac19\uc740 \ud504\ub808\uc784\uc6cc\ud06c\uc5d0\uc11c \uba54\ubaa8\ub9ac\uc5d0 \uc62c\ub77c\uc624\uc9c0 \uc54a\uc740 \uac1d\uccb4\ub4e4\uc744 \uad00\ub9ac\ud560 \ub54c \uc0ac\uc6a9\ud574\ubcfc \uc218 \uc788\ub2e4")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\ud504\ub808\uc784\uc6cc\ud06c\ub098 \ub77c\uc774\ube0c\ub7ec\ub9ac\uac00 \uc544\ub2cc \uc6b0\ub9ac\uac00 \ucf54\ub4dc\ub808\ubca8\uc5d0\uc11c \ub9ac\ud50c\ub809\uc158\uc744 \uc0ac\uc6a9\ud558\ub294 \uacbd\uc6b0\ub294 \uac00\uae09\uc801 \uc5c6\uc5b4\uc57c \ud55c\ub2e4"))),(0,r.kt)("h2",{id:"\ub124\uc774\ud2f0\ube0c-\uba54\uc11c\ub4dc\ub294-\uc2e0\uc911\ud788-\uc0ac\uc6a9\ud558\ub77c"},"\ub124\uc774\ud2f0\ube0c \uba54\uc11c\ub4dc\ub294 \uc2e0\uc911\ud788 \uc0ac\uc6a9\ud558\ub77c"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"item 66")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\uc790\ubc14 \ub124\uc774\ud2f0\ube0c \uc778\ud14a\uc5d0\u3163\uc2a4\ub294 \uc790\ubc14 \ud504\ub85c\uadf8\ub7a8\uc774 \ub124\uc774\ud2f0\ube0c \uba54\uc11c\ub4dc\ub97c \ud638\ucd9c\ud558\ub294 \uae30\uc220\uc774\ub2e4")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\uc5ec\uae30\uc11c \ub124\uc774\ud2f0\ube0c \uba54\uc11c\ub4dc\ub780 C\ub098 C++\uacfc \uac19\uc774 \ub124\uc774\ud2f0\ube0c \ud504\ub85c\uadf8\ub798\ubc0d \uc5b8\uc5b4\ub85c \uc81c\uc791\ub41c \uba54\uc11c\ub4dc\ub4e4\uc744 \uc758\ubbf8\ud55c\ub2e4"))),(0,r.kt)("h3",{id:"\ub124\uc774\ud2f0\ube0c-\uba54\uc11c\ub4dc\ub97c-\uc4f0\ub294-\ubaa9\uc801"},"\ub124\uc774\ud2f0\ube0c \uba54\uc11c\ub4dc\ub97c \uc4f0\ub294 \ubaa9\uc801"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\ub808\uc9c0\uc2a4\ud2b8\ub9ac \uac19\uc740 \ud50c\ub7ab\ud3fc \ud2b9\ud654 \uae30\ub2a5\uc744 \uc0ac\uc6a9\ud558\ub294 \uacbd\uc6b0")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\ub124\uc774\ud2f0\ube0c \ucf54\ub4dc\ub85c \uc791\uc131\ub41c \uae30\uc874 \ub77c\uc774\ube0c\ub7ec\ub9ac\ub97c \uc0ac\uc6a9\ud558\ub294 \uacbd\uc6b0")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\uc131\ub2a5 \uac1c\uc120\uc744 \ubaa9\uc801\uc73c\ub85c \uc131\ub2a5\uc5d0 \uacb0\uc815\uc801\uc778 \uc601\ud5a5\uc744 \uc8fc\ub294 \uc601\uc5ed\ub9cc \ub530\ub85c \ub124\uc774\ud2f0\ube0c \uc5b8\uc5b4\ub85c \uac1c\ubc1c\ud558\ub294 \uacbd\uc6b0"))),(0,r.kt)("h3",{id:"\ub124\uc774\ud2f0\ube0c-\uba54\uc11c\ub4dc\uc758-\uc7a5\ub2e8\uc810"},"\ub124\uc774\ud2f0\ube0c \uba54\uc11c\ub4dc\uc758 \uc7a5\ub2e8\uc810"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\uc131\ub2a5\uc744 \uac1c\uc120\ud560 \ubaa9\uc801\uc73c\ub85c\ub77c\uba74 \uc808\ub300 \uc4f0\uba74 \uc548\ub41c\ub2e4")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"JVM\uc774 \ub9ce\uc740 \ubc1c\uc804\uc744 \uc774\ub904\uc11c \uc774\uc81c\ub294 \ub124\uc774\ud2f0\ube0c \uba54\uc11c\ub4dc\ubcf4\ub2e4 \uc21c\uc218 \uc790\ubc14\ub85c \ub2e4\uc2dc \uc791\uc131\ud55c \ucf54\ub4dc\uc758 \uc131\ub2a5\uc774 \ub354 \uc88b\uc740 \uacbd\uc6b0\uac00 \uc0dd\uaca8\ub098\uace0 \uc788\ub2e4")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\ub124\uc774\ud2f0\ube0c \ub77c\uc774\ube0c\ub7ec\ub9ac \ucabd\uc740 \ub2e4\uc911 \uc815\ubc00 \uc5f0\uc0b0\uc744 \ud544\ub450\ub85c \uc131\ub2a5\uc774 \uac1c\uc120\ub418\uace0 \uc788\uace0, \ub2e4\uc911 \uc815\ubc00 \uc5f0\uc0b0\uc774 \ud544\uc694\ud55c \uc790\ubc14 \ud504\ub85c\uadf8\ub798\uba38\ub77c\uba74 \ub124\uc774\ud2f0\ube0c \uba54\uc11c\ub4dc\ub97c \uc0ac\uc6a9\ud558\ub294 \uac83\ub3c4 \uace0\ub824\ud574\ubcfc\ub9cc\uc740 \ud558\ub2e4")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\uadf8\ub7ec\ub098 \uc5ec\uc804\ud788 \uc2ec\uac01\ud55c \ubb38\uc81c\ub4e4\uc774 \uc788\ub294\ub370, \uac00\ub839 \ub124\uc774\ud2f0\ube0c \uba54\ubaa8\ub9ac\ub294 \uc790\ub3d9 \ud68c\uc218 \ub418\uc9c0 \ubabb\ud574\uc11c GC\uc758 \ud0c0\uac9f\uc774 \ub420 \uc218 \uc5c6\ub2e4")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\uc790\ubc14 \ucf54\ub4dc\uc640 \ub124\uc774\ud2f0\ube0c \ucf54\ub4dc\uc758 \uacbd\uacc4\ub97c \ub118\ub098\ub4e4 \ub54c \ub9c8\ub2e4 \ube44\uc6a9\uc774 \ubc1c\uc0dd\ud558\ub294\ub370")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\uadf8 \ub458\uc744 \uc774\uc5b4\ubd99\uc774\uae30 \uc704\ud55c \uc811\ucc29 \ucf54\ub4dc\ub97c \ubcc4\ub3c4\ub85c \uc791\uc131\ud574\uc57c\ud55c\ub2e4")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\uc774\ub294 \uadc0\ucc2e\uc740 \uc791\uc5c5\uc778\ub370\ub2e4\uac00 \ucf54\ub4dc \uac00\ub3c5\uc131\ub3c4 \ub5a8\uc5b4\uc9c4\ub2e4")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\uac00\uae09\uc801\uc774\uba74 \uc4f0\uc9c0\ub9d0\uc790"))),(0,r.kt)("h2",{id:"\ucd5c\uc801\ud654\ub294-\uc2e0\uc911\ud788-\ud558\ub77c"},"\ucd5c\uc801\ud654\ub294 \uc2e0\uc911\ud788 \ud558\ub77c"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"item 67")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ubaa8\ub4e0 \uc0ac\ub78c\uc774 \ub9c8\uc74c \uae4a\uc774 \uc0c8\uaca8\uc57c \ud560 \ucd5c\uc801\ud654 \uaca9\uc5b8 \uc138 \uac1c\uac00 \uc788\ub2e4.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"(\ub9f9\ubaa9\uc801\uc778 \uc5b4\ub9ac\uc11d\uc74c\uc744 \ud3ec\ud568\ud574) \uadf8 \uc5b4\ub5a4 \ud551\uacc4\ubcf4\ub2e4 \ud6a8\uc728\uc11c\uc774\ub77c\ub294 \uc774\ub984 \uc544\ub798 \ud589\ud574\uc9c4 \ucef4\ud4e8\ud305 \uc8c4\uc545\uc774 \ub354 \ub9ce\ub2e4 (\uc2ec\uc9c0\uc5b4 \ud6a8\uc728\uc744 \ub192\uc774\uc9c0\ub3c4 \ubabb\ud558\uba74\uc11c)\n\n- \uc70c\ub9ac\uc5c4 \uc6b8\ud504\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"(\uc804\uccb4\uc758 97% \uc815\ub3c4\uc778) \uc790\uadf8\ub9c8\ud55c \ud6a8\uc728\uc131\uc740 \ubaa8\ub450 \uc78a\uc790. \uc123\ubd80\ub978 \ucd5c\uc801\ud654\uac00 \ub9cc\uc545\uc758 \uadfc\uc6d0\uc774\ub2e4.\n\n- \ub3c4\ub110\ub4dc \ud06c\ub8e8\uc2a4\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\ucd5c\uc801\ud654\ub97c \ud560 \ub54c\ub294 \ub2e4\uc74c \ub450 \uaddc\uce59\uc744 \ub530\ub974\ub77c\n\n\uccab \ubc88\uc9f8, \ud558\uc9c0\ub9c8\ub77c\n\n\ub450 \ubc88\uc9f8, (\uc804\ubb38\uac00 \ud55c\uc815) \uc544\uc9c1 \ud558\uc9c0 \ub9c8\ub77c. \ub2e4\uc2dc \ub9d0\ud574 \uc644\uc804\ud788 \uba85\ubc31\ud558\uace0 \ucd5c\uc801\ud654\ub418\uc9c0 \uc54a\uc740 \ud574\ubc95\uc744 \ucc3e\uc744 \ub54c \uae4c\uc9c0\ub294 \ud558\uc9c0\ub9c8\ub77c.\n\n- M.A \uc7ad\uc2a8\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\uc774 \uaca9\uc5b8\ub4e4\uc740 \uc790\ubc14\uac00 \ud0c4\uc0dd\ud558\uae30 20\ub144 \uc804\uc5d0 \ub098\uc654\uace0, \ucd5c\uc801\ud654\uc758 \uc5b4\ub450\uc6b4 \uc9c4\uc2e0\uc744 \uc774\uc57c\uae30\ud574\uc900\ub2e4")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\uc131\ub2a5 \ub54c\ubb38\uc5d0 \uacac\uace0\ud55c \uad6c\uc870\ub97c \ud76c\uc0dd\ud558\uc9c0 \ub9d0\uc790")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\ube60\ub978 \ud504\ub85c\uadf8\ub7a8\ubcf4\ub2e4\ub294 \uc88b\uc740 \ud504\ub85c\uadf8\ub7a8\uc744 \uc791\uc131\ud558\uc790"))),(0,r.kt)("h3",{id:"\uc124\uacc4-\ub2e8\uacc4\uc5d0\uc11c\uc758-\uace0\ub824\ud560-\ubd80\ubd84\ub4e4"},"\uc124\uacc4 \ub2e8\uacc4\uc5d0\uc11c\uc758 \uace0\ub824\ud560 \ubd80\ubd84\ub4e4"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\uc131\ub2a5\uc744 \uc81c\ud55c\ud558\ub294 \uc124\uacc4\ub97c \ud53c\ud558\uc790")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"API\ub97c \uc124\uacc4\ud560 \ub54c \uc131\ub2a5\uc5d0 \uc8fc\ub294 \uc601\ud5a5\uc744 \uace0\ub824\ud558\ub77c")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\uc131\ub2a5\uc744 \uc704\ud574 API\ub97c \uc65c\uace1\ud558\uc9c0\ub294 \ub9d0\uc790"))),(0,r.kt)("h3",{id:"\ucd5c\uc801\ud654\uc5d0-\uad00\ud574\uc11c"},"\ucd5c\uc801\ud654\uc5d0 \uad00\ud574\uc11c"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ucd5c\uc801\ud654\ub97c \ud560\uac70\uba74 \uc2dc\ub3c4 \uc804\ud6c4\ub85c \uc131\ub2a5\uc744 \uce21\uc815\ud558\uc790")),(0,r.kt)("h3",{id:"\uc694\uc57d-1"},"\uc694\uc57d"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\ube60\ub978 \ud504\ub85c\uadf8\ub7a8\uc744 \uc791\uc131\ud558\uae30 \ubcf4\ub2e4\ub294 \uc88b\uc740 \ud504\ub85c\uadf8\ub7a8\uc744 \uc791\uc131\ud558\ub824\uace0 \ub178\ub825\ud558\uc790")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\uc2dc\uc2a4\ud15c \uad6c\ud604\uc744 \uc644\ub8cc\ud588\ub2e4\uba74 \uc131\ub2a5\uc744 \uce21\uc815\ud574\ubcf4\uc790 \ucda9\ubd84\ud788 \ube60\ub974\ub2e4\uba74 \uadf8\uac78\ub85c \ub05d\uc774\ub2e4")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\uadf8\ub807\uc9c0 \uc54a\ub2e4\uba74 \ud504\ub85c\ud30c\uc77c\ub7ec\ub97c \uc0ac\uc6a9\ud574 \ubcd1\ubaa9\uc774 \ubc1c\uc0dd\ud558\ub294 \uc9c0\uc810\uc744 \ucc3e\uc544 \ucd5c\uc801\ud654\ub97c \uc9c4\ud589\ud558\uc790"))),(0,r.kt)("h2",{id:"\uc77c\ubc18\uc801\uc73c\ub85c-\ud1b5\uc6a9\ub418\ub294-\uba85\uba85-\uaddc\uce59\uc744-\ub530\ub974\ub77c"},"\uc77c\ubc18\uc801\uc73c\ub85c \ud1b5\uc6a9\ub418\ub294 \uba85\uba85 \uaddc\uce59\uc744 \ub530\ub974\ub77c"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"item 68")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\ud074\ub798\uc2a4\ub294 ",(0,r.kt)("inlineCode",{parentName:"p"},"Camel Case"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\uba54\uc11c\ub4dc\uc640 \ud544\ub4dc \uc774\ub984 \uccab \uae00\uc790\ub294 \uc18c\ubb38\uc790")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\uc0c1\uc218 \ud544\ub4dc\uc758 \uacbd\uc6b0 \ub300\ubb38\uc790\ub85c \uc4f0\uba70 \ub2e8\uc5b4 \uc0ac\uc774\ub294 \ubc11\uc904\ub85c \uad6c\ubd84")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\uc9c0\uc5ed\ubcc0\uc218\uc5d0 \uc57d\uc5b4\ub97c \uc4f0\ub294 \uac83\uc740 \uc88b\ub2e4\uace0 \ud55c\ub2e4")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\uadf8\ub7ec\ub098 \uba54\uc11c\ub4dc \ub9e4\uac1c\ubcc0\uc218\uc758 \uc774\ub984\uc740 \ubb38\uc11c\uc5d0\ub3c4 \ub4f1\uc7a5\ud558\ubbc0\ub85c \uc2e0\uc911\ud788 \uc791\uc131\ud558\ub3c4\ub85d \ud558\uc790")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\ud0c0\uc785 \ub9e4\uac1c\ubcc0\uc218 \uc774\ub984\uc740 \ubcf4\ud1b5 \ud55c \ubb38\uc790\ub85c \ud45c\ud604\ud55c\ub2e4"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\uc784\uc758\uc758 \ud0c0\uc785\uc740 T, \uceec\ub809\uc158 \uc6d0\uc18c \ud0c0\uc785\uc740 E, \ub9f5\uc758 \ud0a4\uc640 \uac12\uc5d0\ub294 K\uc640 V\ub97c, \uc608\uc678\uc5d0\ub294 X\ub97c, \uba54\uc11c\ub4dc\uc758 \ubc18\ud658 \ud0c0\uc785\uc5d0\ub294 R\uc744 \uc0ac\uc6a9\ud55c\ub2e4"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\uac1d\uccb4 \ud0c0\uc785\uc744 \ubc14\uafd4\uc11c \ub2e4\ub978 \ud0c0\uc785\uc758 \ub610 \ub2e4\ub978 \uac1d\uccb4\ub97c \ubc18\ud658\ud558\ub294 \uc778\uc2a4\ud134\uc2a4 \uba54\uc11c\ub4dc\uc758 \uc774\ub984\uc740 \ubcf4\ud1b5 ",(0,r.kt)("inlineCode",{parentName:"p"},"toType")," \ud615\ud0dc\ub85c \uc9d3\ub294\ub2e4. (toString, toArray \ub4f1)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\uc815\uc801 \ud329\ud130\ub9ac \uc774\ub984\uc740 from, of, valueOf, instance, getInstance, newInstance, getType, newType\uc744 \ud754\ud788 \uc4f4\ub2e4"))),(0,r.kt)("h2",{id:"reference"},"Reference"),(0,r.kt)("img",{width:"360",alt:"\u1109\u1173\u110f\u1173\u1105\u1175\u11ab\u1109\u1163\u11ba 2021-04-16 \u110b\u1169\u1112\u116e 4 24 23",src:"https://user-images.githubusercontent.com/43809168/114987533-3e449400-9ed0-11eb-9b5f-a24f73b6f138.png"}),(0,r.kt)("p",null,"\uc774\ud399\ud2f0\ube0c \uc790\ubc14 Effective Java 3/E"),(0,r.kt)("p",null,"\uc800\uc790 : \uc870\uc288\uc544 \ube14\ub85c\ud06c"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"")))}o.isMDXComponent=!0}}]);