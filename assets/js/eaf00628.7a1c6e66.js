(self.webpackChunkstudy=self.webpackChunkstudy||[]).push([[2951],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return m},kt:function(){return s}});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var u=n.createContext({}),k=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=k(e.components);return n.createElement(u.Provider,{value:t},e.children)},o={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,u=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),c=k(a),s=l,d=c["".concat(u,".").concat(s)]||c[s]||o[s]||r;return a?n.createElement(d,i(i({ref:t},m),{},{components:a})):n.createElement(d,i({ref:t},m))}));function s(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=c;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p.mdxType="string"==typeof e?e:l,i[1]=p;for(var k=2;k<r;k++)i[k]=a[k];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},1766:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return p},metadata:function(){return u},toc:function(){return k},default:function(){return o}});var n=a(2122),l=a(9756),r=(a(7294),a(3905)),i=["components"],p={id:"12-serialize",title:"12. \uc9c1\ub82c\ud654"},u={unversionedId:"java/effective-java/12-serialize",id:"java/effective-java/12-serialize",isDocsHomePage:!1,title:"12. \uc9c1\ub82c\ud654",description:"\uac1d\uccb4 \uc9c1\ub82c\ud654\ub294 \uc790\ubc14\uac00 \uac1d\uccb4\ub97c \ubc14\uc774\ud2b8 \uc2a4\ud2b8\ub9bc\uc73c\ub85c \uc778\ucf54\ub529(\uc9c1\ub82c\ud654)\ud558\uace0 \ubc14\uc774\ud2b8 \uc2a4\ud2b8\ub9bc\uc73c\ub85c\ubd80\ud130 \ub2e4\uc2dc \uac1d\uccb4\ub97c \uc7ac\uad6c\uc131\ud558\ub294(\uc5ed\uc9c1\ub82c\ud654) \uba54\ucee4\ub2c8\uc998\uc774\ub2e4.",source:"@site/docs/java/effective-java/12-serialize.md",sourceDirName:"java/effective-java",slug:"/java/effective-java/12-serialize",permalink:"/study/docs/java/effective-java/12-serialize",editUrl:"https://github.com/minkukjo/study/edit/master/docs/java/effective-java/12-serialize.md",version:"current",lastUpdatedAt:1626094260,formattedLastUpdatedAt:"7/12/2021",sidebarPosition:12,frontMatter:{id:"12-serialize",title:"12. \uc9c1\ub82c\ud654"},sidebar:"mySidebar",previous:{title:"11. \ub3d9\uc2dc\uc131",permalink:"/study/docs/java/effective-java/11-concurrency"},next:{title:"\uc790\ubc14 \uc5b8\uc5b4 \uac00\uc774\ub4dc",permalink:"/study/docs/java/java-language-guide"}},k=[{value:"\uc790\ubc14 \uc9c1\ub82c\ud654\uc758 \ub300\uc548\uc744 \ucc3e\uc73c\ub77c",id:"\uc790\ubc14-\uc9c1\ub82c\ud654\uc758-\ub300\uc548\uc744-\ucc3e\uc73c\ub77c",children:[]},{value:"Serializable\uc744 \uad6c\ud604\ud560\uc9c0\uc5d0 \ub300\ud574\uc11c\ub294 \uc2e0\uc911\ud788 \uacb0\uc815\ud558\ub77c",id:"serializable\uc744-\uad6c\ud604\ud560\uc9c0\uc5d0-\ub300\ud574\uc11c\ub294-\uc2e0\uc911\ud788-\uacb0\uc815\ud558\ub77c",children:[{value:"serialVersionUID \uac12 \ubb38\uc81c",id:"serialversionuid-\uac12-\ubb38\uc81c",children:[]},{value:"\ubc84\uadf8\uc640 \ubcf4\uc548\uc758 \uad6c\uba4d",id:"\ubc84\uadf8\uc640-\ubcf4\uc548\uc758-\uad6c\uba4d",children:[]},{value:"\ub9b4\ub9ac\uc988 \uc2dc \ud14c\uc2a4\ud2b8\uac00 \ub298\uc5b4\ub0a8",id:"\ub9b4\ub9ac\uc988-\uc2dc-\ud14c\uc2a4\ud2b8\uac00-\ub298\uc5b4\ub0a8",children:[]}]},{value:"Serializable \uad6c\ud604 \uc5ec\ubd80\ub294 \uac00\ubccd\uac8c \uacb0\uc815\ud560 \uc0ac\uc548\uc774 \uc544\ub2c8\ub2e4",id:"serializable-\uad6c\ud604-\uc5ec\ubd80\ub294-\uac00\ubccd\uac8c-\uacb0\uc815\ud560-\uc0ac\uc548\uc774-\uc544\ub2c8\ub2e4",children:[]},{value:"\ud575\uc2ec \uc815\ub9ac",id:"\ud575\uc2ec-\uc815\ub9ac",children:[]},{value:"\ucee4\uc2a4\ud140 \uc9c1\ub82c\ud654 \ud615\ud0dc\ub97c \uace0\ub824\ud574\ubcf4\ub77c",id:"\ucee4\uc2a4\ud140-\uc9c1\ub82c\ud654-\ud615\ud0dc\ub97c-\uace0\ub824\ud574\ubcf4\ub77c",children:[{value:"\uae30\ubcf8 \uc9c1\ub82c\ud654 \ubc29\ubc95\uc758 \ubb38\uc81c\uc810",id:"\uae30\ubcf8-\uc9c1\ub82c\ud654-\ubc29\ubc95\uc758-\ubb38\uc81c\uc810",children:[]},{value:"\ucee4\uc2a4\ud140 \uc9c1\ub82c\ud654\uc758 \uc0ac\uc6a9",id:"\ucee4\uc2a4\ud140-\uc9c1\ub82c\ud654\uc758-\uc0ac\uc6a9",children:[]},{value:"\uac1d\uccb4\uc758 \ubd88\ubcc0\uc2dd\uc774 \uae68\uc9c0\ub294 \uacbd\uc6b0",id:"\uac1d\uccb4\uc758-\ubd88\ubcc0\uc2dd\uc774-\uae68\uc9c0\ub294-\uacbd\uc6b0",children:[]},{value:"Transient \ud0a4\uc6cc\ub4dc\uc758 \uc0ac\uc6a9",id:"transient-\ud0a4\uc6cc\ub4dc\uc758-\uc0ac\uc6a9",children:[]},{value:"\uc9c1\ub82c\ud654\uc5d0\uc11c\uc758 \ub3d9\uae30\ud654 \ub9e4\ucee4\ub2c8\uc998",id:"\uc9c1\ub82c\ud654\uc5d0\uc11c\uc758-\ub3d9\uae30\ud654-\ub9e4\ucee4\ub2c8\uc998",children:[]},{value:"\uc9c1\ub82c \ubc84\uc804 UID\ub97c \uba85\uc2dc\uc801\uc73c\ub85c \ubd99\uc774\uc790",id:"\uc9c1\ub82c-\ubc84\uc804-uid\ub97c-\uba85\uc2dc\uc801\uc73c\ub85c-\ubd99\uc774\uc790",children:[]},{value:"\uc8fc\uc758\uc810",id:"\uc8fc\uc758\uc810",children:[]},{value:"\uc694\uc57d",id:"\uc694\uc57d",children:[]}]},{value:"readObject \uba54\uc11c\ub4dc\ub294 \ubc29\uc5b4\uc801\uc73c\ub85c \uc791\uc131\ud558\ub77c",id:"readobject-\uba54\uc11c\ub4dc\ub294-\ubc29\uc5b4\uc801\uc73c\ub85c-\uc791\uc131\ud558\ub77c",children:[{value:"\uc694\uc57d",id:"\uc694\uc57d-1",children:[]}]},{value:"\uc778\uc2a4\ud134\uc2a4 \uc218\ub97c \ud1b5\uc81c\ud574\uc57c \ud55c\ub2e4\uba74 readResolve \ubcf4\ub2e4\ub294 \uc5f4\uac70 \ud0c0\uc785\uc744 \uc0ac\uc6a9\ud558\ub77c",id:"\uc778\uc2a4\ud134\uc2a4-\uc218\ub97c-\ud1b5\uc81c\ud574\uc57c-\ud55c\ub2e4\uba74-readresolve-\ubcf4\ub2e4\ub294-\uc5f4\uac70-\ud0c0\uc785\uc744-\uc0ac\uc6a9\ud558\ub77c",children:[{value:"Enum\uc758 \ud65c\uc6a9",id:"enum\uc758-\ud65c\uc6a9",children:[]},{value:"\uc694\uc57d",id:"\uc694\uc57d-2",children:[]}]},{value:"\uc9c1\ub82c\ud654\ub41c \uc778\uc2a4\ud134\uc2a4 \ub300\uc2e0 \uc9c1\ub82c\ud654 \ud504\ub85d\uc2dc \uc0ac\uc6a9\uc744 \uac80\ud1a0\ud558\ub77c",id:"\uc9c1\ub82c\ud654\ub41c-\uc778\uc2a4\ud134\uc2a4-\ub300\uc2e0-\uc9c1\ub82c\ud654-\ud504\ub85d\uc2dc-\uc0ac\uc6a9\uc744-\uac80\ud1a0\ud558\ub77c",children:[{value:"\uc694\uc57d",id:"\uc694\uc57d-3",children:[]}]},{value:"Reference",id:"reference",children:[]}],m={toc:k};function o(e){var t=e.components,a=(0,l.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\uac1d\uccb4 \uc9c1\ub82c\ud654\ub294 \uc790\ubc14\uac00 \uac1d\uccb4\ub97c \ubc14\uc774\ud2b8 \uc2a4\ud2b8\ub9bc\uc73c\ub85c \uc778\ucf54\ub529(\uc9c1\ub82c\ud654)\ud558\uace0 \ubc14\uc774\ud2b8 \uc2a4\ud2b8\ub9bc\uc73c\ub85c\ubd80\ud130 \ub2e4\uc2dc \uac1d\uccb4\ub97c \uc7ac\uad6c\uc131\ud558\ub294(\uc5ed\uc9c1\ub82c\ud654) \uba54\ucee4\ub2c8\uc998\uc774\ub2e4.")),(0,r.kt)("h2",{id:"\uc790\ubc14-\uc9c1\ub82c\ud654\uc758-\ub300\uc548\uc744-\ucc3e\uc73c\ub77c"},"\uc790\ubc14 \uc9c1\ub82c\ud654\uc758 \ub300\uc548\uc744 \ucc3e\uc73c\ub77c"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"item 85")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\uc790\ubc14 \uc9c1\ub82c\ud654\ub294 \ubcf4\uc548\uc801\uc778 \uc704\ud5d8\uacfc \uc131\ub2a5\uc801\uc778 \uc704\ud5d8 \ub458 \ub2e4 \uac16\uace0 \uc788\ub2e4.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\uac00\uae09\uc801\uc774\uba74 \uc9c1\ub82c\ud654 \uc704\ud5d8\uc744 \ud68c\ud53c\ud558\uae30 \uc704\ud574 \uc9c1\ub82c\ud654\ub97c \uc4f0\uc9c0 \ub9d0\uc790.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\uc774 \uc9c1\ub82c\ud654\ub97c ",(0,r.kt)("strong",{parentName:"p"},"\uc9c1\uc811")," \ub2e4\ub8e8\uae30 \ubcf4\ub2e4\ub294 \uc9c1\ub82c\ud654 \ub77c\uc774\ube0c\ub7ec\ub9ac ( like Jackson )\ub97c \uc0ac\uc6a9\ud558\ub3c4\ub85d \ud558\uc790."))),(0,r.kt)("h2",{id:"serializable\uc744-\uad6c\ud604\ud560\uc9c0\uc5d0-\ub300\ud574\uc11c\ub294-\uc2e0\uc911\ud788-\uacb0\uc815\ud558\ub77c"},"Serializable\uc744 \uad6c\ud604\ud560\uc9c0\uc5d0 \ub300\ud574\uc11c\ub294 \uc2e0\uc911\ud788 \uacb0\uc815\ud558\ub77c"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"item 86")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Serializable"),"\ub97c \uad6c\ud604\ud55c \uac1d\uccb4\ub294 \uc77c\ub2e8 \ubc30\ud3ec\ud558\uba74 \uc218\uc815\ud558\uae30\uac00 \uc5b4\ub835\ub2e4.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Serializable"),"\ub97c \uad6c\ud604\ud55c \uac1d\uccb4\ub97c \uc65c \uc2e0\uc911\ud788 \uace0\ub824\ud574\uc57c\ud558\ub294\uc9c0 \uc54c\uc544\ubcf4\uc790."))),(0,r.kt)("h3",{id:"serialversionuid-\uac12-\ubb38\uc81c"},"serialVersionUID \uac12 \ubb38\uc81c"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\uc9c1\ub82c\ud654\ub294 \uae30\ubcf8\uc801\uc73c\ub85c \uc2a4\ud2b8\ub9bc \uace0\uc720 \uc2dd\ubcc4\uc790, \uc9c1\ub82c \ubc84\uc804 UID\ub97c \uac16\ub294\ub2e4.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"serialVersionUID"),"\ub77c\ub294 \uc774\ub984\uc758 \ud544\ub4dc\ub85c, \uc774 \ubc88\ud638\ub97c \uba85\uc2dc\ud558\uc9c0 \uc54a\uc73c\uba74 \uc2dc\uc2a4\ud15c\uc774 \ub7f0\ud0c0\uc784\uc5d0 \uc554\ud638 \ud574\uc2dc \ud568\uc218\ub97c \uc801\uc6a9\ud574 \uc790\ub3d9\uc73c\ub85c \ud074\ub798\uc2a4 \uc548\uc5d0 \ub123\ub294\ub2e4.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"serialVersionUID")," \uac12\uc744 \uc790\ub3d9 \uc0dd\uc131\ud558\ub294\ub370 \ud3ec\ud568\ub418\ub294 \uac12\uc740 \ud074\ub798\uc2a4\uc758 \uc774\ub984, \uad6c\ud604\ud55c \uc778\ud130\ud398\uc774\uc2a4\ub4e4, \ud074\ub808\uc2a4\uc758 \uba64\ubc84\ub4e4\uc774 \ud3ec\ud568\ub41c\ub2e4.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\uadf8\ub807\ub2e4\ubcf4\ub2c8 \ub9cc\uc57d \ud074\ub798\uc2a4\uac00 \uc218\uc815\ub418\uba74 \uc9c1\ub82c \ubc84\uc804 UID \uac12\ub3c4 \ub2ec\ub77c\uc9c0\uace0 \uc774\ub294 \ub7f0\ud0c0\uc784 \uc5d0\ub7ec\uac00 \ubc1c\uc0dd\ud558\uac8c \ub41c\ub2e4."))),(0,r.kt)("h3",{id:"\ubc84\uadf8\uc640-\ubcf4\uc548\uc758-\uad6c\uba4d"},"\ubc84\uadf8\uc640 \ubcf4\uc548\uc758 \uad6c\uba4d"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Serializable"),"\uc758 \ub450 \ubc88\uc9f8 \ubb38\uc81c\ub294 \ubc84\uadf8\uc640 \ubcf4\uc548 \uad6c\uba4d\uc774 \uc0dd\uae34\ub2e4\ub294 \uac83\uc774\ub2e4.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\uac1d\uccb4\ub294 \uc77c\ubc18\uc801\uc73c\ub85c \uc0dd\uc131\uc790\ub97c \uc0ac\uc6a9\ud558\ub294\uac8c \uc77c\ubc18\uc801\uc774\ub2e4.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\uc9c1\ub82c\ud654\ub294 \uadf8\ub7ec\ud55c \uba54\ucee4\ub2c8\uc998\uc744 \uc704\ubc18\ud558\ub294, \uc77c\uc885\uc758 ",(0,r.kt)("strong",{parentName:"p"},"\uc228\uc740 \uc0dd\uc131\uc790"),"\uc774\ub2e4.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\uae30\ubcf8 \uc5ed\uc9c1\ub82c\ud654\uc2dc\uc5d0\ub294 \ubd88\ubcc0\uc2dd\uc774 \uae68\uc9c0\uace0 \ud5c8\uac00\ub418\uc9c0 \uc54a\uc740 \uc811\uadfc\uc5d0 \uc27d\uac8c \ub178\ucd9c\ub418\uac8c \ub41c\ub2e4."))),(0,r.kt)("h3",{id:"\ub9b4\ub9ac\uc988-\uc2dc-\ud14c\uc2a4\ud2b8\uac00-\ub298\uc5b4\ub0a8"},"\ub9b4\ub9ac\uc988 \uc2dc \ud14c\uc2a4\ud2b8\uac00 \ub298\uc5b4\ub0a8"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Serializable"),"\uc758 \uc138 \ubc88\uc9f8 \ubb38\uc81c\ub294 \ud574\ub2f9 \ud074\ub798\uc2a4\uc758 \uc2e0\ubc84\uc804\uc744 \ub9b4\ub9ac\uc2a4\ud560 \ub54c \ud14c\uc2a4\ud2b8\ud560 \uac83\uc774 \ub298\uc5b4\ub09c\ub2e4\ub294 \uac83\uc774\ub2e4.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\uc9c1\ub82c\ud654 \uac00\ub2a5 \ud074\ub798\uc2a4\uac00 \uc218\uc815\ub418\uba74, \uc2e0\ubc84\uc804\uc774 \uc778\uc2a4\ud134\uc2a4\ub97c \uc9c1\ub82c\ud654-\uc5ed\uc9c1\ub82c\ud654\uc5d0 \uc774\uc0c1\uc774 \uc5c6\ub294\uc9c0\ub97c \uba74\ubc00\ud788 \uac80\uc0ac\ud574\uc57c\ud55c\ub2e4.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\uc774\ub7f0 \uacfc\uc815\uc774 \ucd94\uac00\ub85c \ub4e4\uc5b4\uac00\uae30 \ub54c\ubb38\uc5d0 ",(0,r.kt)("strong",{parentName:"p"},"Serializable"),"\uc758 \ub3c4\uc785\uc740 \uc2e0\uc911\ud574\uc57c\ud55c\ub2e4."))),(0,r.kt)("h2",{id:"serializable-\uad6c\ud604-\uc5ec\ubd80\ub294-\uac00\ubccd\uac8c-\uacb0\uc815\ud560-\uc0ac\uc548\uc774-\uc544\ub2c8\ub2e4"},"Serializable \uad6c\ud604 \uc5ec\ubd80\ub294 \uac00\ubccd\uac8c \uacb0\uc815\ud560 \uc0ac\uc548\uc774 \uc544\ub2c8\ub2e4"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\uc0c1\uc18d\uc6a9\uc73c\ub85c \uc124\uacc4\ub41c \ud074\ub798\uc2a4\ub294 \ub300\ubd80\ubd84 ",(0,r.kt)("strong",{parentName:"p"},"Serializable"),"\uc744 \uad6c\ud604\ud558\uba74 \uc548\ub418\uace0, \uc778\ud130\ud398\uc774\uc2a4\ub3c4 \ub300\ubd80\ubd84 ",(0,r.kt)("strong",{parentName:"p"},"Serializable"),"\ub97c \ud655\uc7a5\ud574\uc11c\ub294 \uc548\ub41c\ub2e4.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\uc0c1\uc18d\uc6a9 \ud074\ub798\uc2a4\uc778\ub370 \uc9c1\ub82c\ud654\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc73c\uba74 \uadf8 \ud558\uc704 \ud074\ub798\uc2a4\uc5d0\uc11c \uc9c1\ub82c\ud654\ub97c \uc9c0\uc6d0\ud560 \ub54c \ubd80\ub2f4\uc774 \ub298\uc5b4\ub09c\ub2e4.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\uc0c1\uc704 \ud074\ub798\uc2a4\ub294 \ub9e4\uac1c\ubcc0\uc218\uac00 \uc5c6\ub294 \uc0dd\uc131\uc790\ub97c \uc81c\uacf5\ud574\uc57c\ud558\ub294\ub370, \uc774\ub7f0 \uc0dd\uc131\uc790\ub97c \uc81c\uacf5\ud558\uc9c0\uc54a\uc73c\uba74 \uc9c1\ub82c\ud654 \ud504\ub85d\uc2dc \ud328\ud134\uc774\ub780 \uac78 \uc0ac\uc6a9\ud574\uc57c\ud55c\ub2e4.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\ub0b4\ubd80 \ud074\ub798\uc2a4\uc5d0\ub294 \uac00\uae09\uc801 \uc9c1\ub82c\ud654\ub97c \uad6c\ud604\ud558\uc9c0 \ub9d0\uc544\uc57c\ud55c\ub2e4."))),(0,r.kt)("h2",{id:"\ud575\uc2ec-\uc815\ub9ac"},"\ud575\uc2ec \uc815\ub9ac"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Serializable"),"\ub294 \uad6c\ud604\ud558\uae30\ub294 \uc27d\uc9c0\ub9cc \uc27d\uc9c0\uc54a\ub2e4.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\ud55c \ud074\ub798\uc2a4\uc5d0 \uc5ec\ub7ec \ubc84\uc804\uc774 \uc0c1\ud638\uc791\uc6a9\ud560 \uc77c\uc774 \uc5c6\uace0 \uc11c\ubc84\uac00 \uc2e0\ub8b0\ud560 \uc218 \uc5c6\ub294 \ub370\uc774\ud130\uc5d0 \ub178\ucd9c\ub420 \uac00\ub2a5\uc131\uc774 \uc5c6\ub2e4\uba74 ",(0,r.kt)("strong",{parentName:"p"},"Serializable"),"\uc758 \uad6c\ud604\uc740 \uc2e0\uc911\ud574\ub77c."))),(0,r.kt)("h2",{id:"\ucee4\uc2a4\ud140-\uc9c1\ub82c\ud654-\ud615\ud0dc\ub97c-\uace0\ub824\ud574\ubcf4\ub77c"},"\ucee4\uc2a4\ud140 \uc9c1\ub82c\ud654 \ud615\ud0dc\ub97c \uace0\ub824\ud574\ubcf4\ub77c"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"item 87")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\uba3c\uc800 \uace0\ubbfc\ud574\ubcf4\uace0 \uad1c\ucc2e\ub2e4\uace0 \ud310\ub2e8\ub418\ub294 \uacbd\uc6b0\uc5d0\ub9cc \uae30\ubcf8 \uc9c1\ub82c\ud654 \ud615\ud0dc\ub97c \uc0ac\uc6a9\ud558\uc790")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\uac1d\uccb4\uc758 \ubb3c\ub9ac\uc801 \ud45c\ud604\uacfc \ub17c\ub9ac\uc801 \ub0b4\uc6a9\uc774 \uac19\ub2e4\uba74 \uae30\ubcf8 \uc9c1\ub82c\ud654 \ud615\ud0dc\ub77c\ub3c4 \ubb34\ubc29\ud558\ub2e4"))),(0,r.kt)("h3",{id:"\uae30\ubcf8-\uc9c1\ub82c\ud654-\ubc29\ubc95\uc758-\ubb38\uc81c\uc810"},"\uae30\ubcf8 \uc9c1\ub82c\ud654 \ubc29\ubc95\uc758 \ubb38\uc81c\uc810"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public final class StringList implements Serializable {\n    private int size = 0;\n    private Entry head = null;\n\n    private static class Entry implements Serializable {\n        String data;\n        Entry next;\n        Entry previous;\n    }\n    // ... \uc0dd\ub7b5\n}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\uc774 \ud074\ub798\uc2a4\ub294 \uc77c\ub828\uc758 \ubb38\uc790\uc5f4\uc744 \ud45c\ud604\ud55c \ud074\ub798\uc2a4\uc774\ub2e4.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\ubb3c\ub9ac\uc801\uc73c\ub85c \ubb38\uc790\uc5f4\ub4e4\uc744 \uc774\uc911 \uc5f0\uacb0\ub9ac\uc2a4\ud2b8\ub85c \uc5f0\uacb0\ud588\ub2e4.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\uc774 \ud074\ub798\uc2a4\uc5d0 \uae30\ubcf8 \uc9c1\ub82c\ud654 \ud615\ud0dc\ub97c \uc0ac\uc6a9\ud558\uba74 \ub178\ub4dc\uc758 \uc591\ubc29\ud5a5 \uc815\ubcf4\ub97c \ud3ec\ud568\ud574 \ubaa8\ub4e0 \uc5d4\ud2b8\ub9ac\ub97c \uae30\ub85d\ud55c\ub2e4.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\uac1d\uccb4\uc758 \ubb3c\ub9ac\uc801 \ud45c\ud604\uacfc \ub17c\ub9ac\uc801 \ud45c\ud604\uc758 \ucc28\uc774\uac00 \ud074 \uacbd\uc6b0 \uae30\ubcf8 \uc9c1\ub82c\ud654 \ud615\ud0dc\ub97c \uc0ac\uc6a9\ud558\uba74 \ub2e4\uc74c\uacfc \uac19\uc740 \ub124 \uac00\uc9c0 \ubb38\uc81c\uac00 \uc0dd\uae34\ub2e4.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\uccab \uc9f8, \uacf5\uac1c API\uac00 \ud604\uc7ac \ub0b4\ubd80 \ud45c\ud604 \ubc29\uc2dd\uc5d0 \uc601\uad6c\ud788 \ubb36\uc778\ub2e4.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\ub458 \uc9f8, \ub108\ubb34 \ub9ce\uc740 \uacf5\uac04\uc744 \ucc28\uc9c0\ud558\uac8c \ub41c\ub2e4.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\uc138 \ubc88\uc9f8, \uc2dc\uac04\uc774 \ub108\ubb34 \ub9ce\uc774 \uac78\ub9b0\ub2e4.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\ub124 \ubc88\uc9f8, \uc2a4\ud0dd\uc624\ubc84\ud50c\ub85c\uc6b0\ub97c \ubc1c\uc0dd\uc2dc\ud0ac \uc218 \uc788\ub2e4."))),(0,r.kt)("h3",{id:"\ucee4\uc2a4\ud140-\uc9c1\ub82c\ud654\uc758-\uc0ac\uc6a9"},"\ucee4\uc2a4\ud140 \uc9c1\ub82c\ud654\uc758 \uc0ac\uc6a9"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public final class StringList implements Serializable {\n\n    private transient int size   = 0;\n    private transient Entry head = null;\n\n    // \uc774\uc81c\ub294 \uc9c1\ub82c\ud654\ub418\uc9c0 \uc54a\ub294\ub2e4.\n    private static class Entry {\n        String data;\n        Entry  next;\n        Entry  previous;\n    }\n\n    // \uc9c0\uc815\ud55c \ubb38\uc790\uc5f4\uc744 \uc774 \ub9ac\uc2a4\ud2b8\uc5d0 \ucd94\uac00\ud55c\ub2e4.\n    public final void add(String s) { ... }\n\n    /**\n     * \uc774 {@code StringList} \uc778\uc2a4\ud134\uc2a4\ub97c \uc9c1\ub82c\ud654\ud55c\ub2e4.\n     *\n     * @serialData \uc774 \ub9ac\uc2a4\ud2b8\uc758 \ud06c\uae30(\ud3ec\ud568\ub41c \ubb38\uc790\uc5f4\uc758 \uac1c\uc218)\ub97c \uae30\ub85d\ud55c \ud6c4\n     * ({@code int}), \uc774\uc5b4\uc11c \ubaa8\ub4e0 \uc6d0\uc18c\ub97c(\uac01\uac01\uc740 {@code String})\n     * \uc21c\uc11c\ub300\ub85c \uae30\ub85d\ud55c\ub2e4.\n     */\n    private void writeObject(ObjectOutputStream s) throws IOException {\n        s.defaultWriteObject();\n        s.writeInt(size);\n\n        // \ubaa8\ub4e0 \uc6d0\uc18c\ub97c \uc62c\ubc14\ub978 \uc21c\uc11c\ub85c \uae30\ub85d\ud55c\ub2e4.\n        for (Entry e = head; e != null; e = e.next)\n            s.writeObject(e.data);\n    }\n\n    private void readObject(ObjectInputStream s) throws IOException, ClassNotFoundException {\n        s.defaultReadObject();\n        int numElements = s.readInt();\n\n        // \ubaa8\ub4e0 \uc6d0\uc18c\ub97c \uc77d\uc5b4 \uc774 \ub9ac\uc2a4\ud2b8\uc5d0 \uc0bd\uc785\ud55c\ub2e4.\n        for (int i = 0; i < numElements; i++)\n            add((String) s.readObject());\n    }\n}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"StringList\uc758 \ubb3c\ub9ac\uc801\uc778 \uc0c1\uc138 \ud45c\ud604\uc744 \ubc30\uc81c\ud55c \ucc44, \ub17c\ub9ac\uc801\uc778 \uad6c\uc131\ub9cc \ub2f4\uc544\ub0b8\ub2e4.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"transient \ud0a4\uc6cc\ub4dc\ub294 \uc9c1\ub82c\ud654 \ub300\uc0c1\uc5d0\uc11c \uc81c\uc678\ud560 \ud0a4\uc6cc\ub4dc\ub97c \uba85\uc2dc\ud55c\ub2e4.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"private \uba54\uc11c\ub4dc \ub610\ud55c \uc9c1\ub82c\ud654\ub85c \uc778\ud574 \uacf5\uac1c API\uac00 \ub418\ubbc0\ub85c \ubb38\uc11c\ud654\ud558\ub3c4\ub85d \ud558\uc790."))),(0,r.kt)("h3",{id:"\uac1d\uccb4\uc758-\ubd88\ubcc0\uc2dd\uc774-\uae68\uc9c0\ub294-\uacbd\uc6b0"},"\uac1d\uccb4\uc758 \ubd88\ubcc0\uc2dd\uc774 \uae68\uc9c0\ub294 \uacbd\uc6b0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\ud574\uc2dc\ud14c\uc774\ube14\uc744 \uc608\ub85c \ub4e4\uc5b4, key-value\ub97c \uc5d4\ud2b8\ub9ac\ub85c \uac16\uc9c0\ub9cc \uc5b4\ub5a4 \uc5d4\ud2b8\ub9ac\ub97c \uc5b4\ub5a4 \ubc84\ud0b7\uc5d0 \ub2f4\uc744\uc9c0\ub294 key\uc5d0 \ub300\ud55c hashcode\uac00 \uacb0\uc815\ud55c\ub2e4.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\ubb38\uc81c\ub294 \uc774 hashcode\ub97c \uad6c\ud558\ub294 \uacc4\uc0b0\uc2dd\uc774 \uad6c\ud604\uc5d0 \ub530\ub77c \ub2ec\ub77c\uc9c8 \uc218 \uc788\ub2e4\ub294 \uc810\uc774\ub2e4.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\ub530\ub77c\uc11c \ud574\uc2dc\ud14c\uc774\ube14\uc740 \uc9c1\ub82c\ud654\ud55c \ud6c4 \uc5ed\uc9c1\ub82c\ud654\ud558\uba74 \ubd88\ubcc0\uc2dd\uc774 \uc2ec\uac01\ud558\uac8c \ud6fc\uc190\ub41c \uac1d\uccb4\ub4e4\uc774 \ubc1c\uc0dd\ud560 \uc218 \uc788\ub2e4."))),(0,r.kt)("h3",{id:"transient-\ud0a4\uc6cc\ub4dc\uc758-\uc0ac\uc6a9"},"Transient \ud0a4\uc6cc\ub4dc\uc758 \uc0ac\uc6a9"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"defaultWriteObject \uba54\uc18c\ub4dc\ub294 transient\ub85c \uc120\uc5b8\ud558\uc9c0\uc54a\uc740 \ubaa8\ub4e0 \uc778\uc2a4\ud134\uc2a4 \ud544\ub4dc\uac00 \uc9c1\ub82c\ud654\ub41c\ub2e4.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\uae30\ubcf8\uc801\uc73c\ub860 \ubaa8\ub450 transient\ub85c \ub450\uace0, \uc815\ub9d0\ub85c \uac1d\uccb4\uc758 \ub17c\ub9ac\uc801 \uc0c1\ud0dc\uc640 \ubb34\uad00\ud55c \ud544\ub4dc\ub9cc transient\ub97c \uc0dd\ub7b5\ud558\uc790"))),(0,r.kt)("h3",{id:"\uc9c1\ub82c\ud654\uc5d0\uc11c\uc758-\ub3d9\uae30\ud654-\ub9e4\ucee4\ub2c8\uc998"},"\uc9c1\ub82c\ud654\uc5d0\uc11c\uc758 \ub3d9\uae30\ud654 \ub9e4\ucee4\ub2c8\uc998"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"private synchronized void writeObject(ObjectOutputStream s) throws IOException {\n    s.defaultWriteObject();\n}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uc9c1\ub82c\ud654 \uc5ed\uc2dc, \uc774\uc804 \uc2dc\uac04\uc5d0 \ubc30\uc6b4 \uac83 \ucc98\ub7fc \ub3d9\uae30\ud654\ub97c \ud574\uc57c\ud558\ub294 \uacbd\uc6b0 ",(0,r.kt)("inlineCode",{parentName:"li"},"synchronized")," \ud0a4\uc6cc\ub4dc\ub97c \ubd99\uc774\ub3c4\ub85d \ud558\uc790")),(0,r.kt)("h3",{id:"\uc9c1\ub82c-\ubc84\uc804-uid\ub97c-\uba85\uc2dc\uc801\uc73c\ub85c-\ubd99\uc774\uc790"},"\uc9c1\ub82c \ubc84\uc804 UID\ub97c \uba85\uc2dc\uc801\uc73c\ub85c \ubd99\uc774\uc790"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"private static final long serialVersionUID = 1L;\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\uc9c1\ub82c \ubc84\uc804 UID\ub294 \ub2e4\uc74c\uacfc \uac19\uc774 \uc120\uc5b8\ud560 \uc218 \uc788\ub2e4.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"UID\ub97c \uba85\uc2dc\ud574\uc90c\uc73c\ub85c\uc368 \uc790\ub3d9\uc73c\ub85c UID\uac00 \uc0dd\uc131\ub418\uc9c0 \uc54a\ub3c4\ub85d \ud558\uc790"))),(0,r.kt)("h3",{id:"\uc8fc\uc758\uc810"},"\uc8fc\uc758\uc810"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\uc9c1\ub82c \ubc84\uc804 UID\ub294 \ud074\ub798\uc2a4\uc758 \uba85\uc138\uac00 \ubcc0\uacbd\ub418\uba74 \uc790\ub3d9 \uc0dd\uc131\ub41c \uac12\uc774 \ubc14\ub00c\ubbc0\ub85c \uc8fc\uc758\ud574\uc57c\ud55c\ub2e4.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\uad6c\ubc84\uc804\uacfc \ud638\ud658\ub418\uc9c0 \uc54a\uc544 \uc5ed\uc9c1\ub82c\ud654\uac00 \ub418\uc9c0 \uc54a\uc73c\uba70 \uae30\uc874 \ubc84\uc804\uc758 \uc9c1\ub82c\ud654\ub41c \uc778\uc2a4\ud134\uc2a4\ub97c \uc5ed\uc9c1\ub82c\ud654\ud560 \ub54c ",(0,r.kt)("strong",{parentName:"p"},"InvalidClassException"),"\uac00 \ubc1c\uc0dd\ud560 \uc218 \uc788\ub2e4."))),(0,r.kt)("h3",{id:"\uc694\uc57d"},"\uc694\uc57d"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\ud074\ub798\uc2a4\ub97c \uc9c1\ub82c\ud654\ud558\uae30\ub85c \ud588\ub2e4\uba74 \uc5b4\ub5a4 \uc9c1\ub82c\ud654 \ud615\ud0dc\ub97c \uc0ac\uc6a9\ud560\uc9c0 \uc2ec\uc0ac\uc219\uace0 \ud558\uc790")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\uc790\ubc14\uc758 \uae30\ubcf8 \uc9c1\ub82c\ud654 \ud615\ud0dc\ub294 \uac1d\uccb4\uc758 \uc9c1\ub82c\ud654\ud55c \uacb0\uacfc\uac00 \ub17c\ub9ac\uc801 \ud45c\ud604\uc5d0 \ubd80\ud569\ud560 \ub54c\ub9cc \uc0ac\uc6a9\ud558\uace0 \uadf8\ub807\uc9c0 \uc54a\uc73c\uba74 \ucee4\uc2a4\ud140 \uc9c1\ub82c\ud654\ub97c \uc0ac\uc6a9\ud558\uc790")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\ud55c \ubc88 \uacf5\uac1c\ub41c \uba54\uc11c\ub4dc\ub294 \ud5a5\ud6c4 \ub9b4\ub9ac\uc988\uc5d0\uc11c \uc81c\uac70\ud560 \uc218 \uc5c6\ub4ef\uc774, \uc9c1\ub82c\ud654 \ud615\ud0dc\uc5d0 \ud3ec\ud568\ub41c \ud544\ub4dc\ub3c4 \ub9c8\uc74c\ub300\ub85c \uc81c\uac70\ud560 \uc218 \uc5c6\ub2e4")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\uc9c1\ub82c\ud654 \ud638\ud658\uc131\uc744 \uc720\uc9c0\ud558\uae30 \uc704\ud574 \uc601\uc6d0\ud788 \uc9c0\uc6d0\ud574\uc57c\ud55c\ub2e4.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\uc798\ubabb\ub41c \uc9c1\ub82c\ud654 \ud615\ud0dc\ub97c \uc0ac\uc6a9\ud558\uba74 \ud074\ub798\uc2a4\uc758 \ubcf5\uc7a1\uc131\uacfc \uc131\ub2a5\uc5d0 \uc601\uad6c\ud788 \ubd80\uc815\uc801\uc778 \uc601\ud5a5\uc744 \ub0a8\uae34\ub2e4."))),(0,r.kt)("h2",{id:"readobject-\uba54\uc11c\ub4dc\ub294-\ubc29\uc5b4\uc801\uc73c\ub85c-\uc791\uc131\ud558\ub77c"},"readObject \uba54\uc11c\ub4dc\ub294 \ubc29\uc5b4\uc801\uc73c\ub85c \uc791\uc131\ud558\ub77c"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"item 88")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"readObject \uba54\uc11c\ub4dc\ub294 \uc2e4\uc9c8\uc801\uc778 \ub610 \ub2e4\ub978 public \uc0dd\uc131\uc790\uc774\ubbc0\ub85c \ub611\uac19\uc740 \uc218\uc900\uc73c\ub85c \uc8fc\uc758\ub97c \uae30\uc6b8\uc5b4\uc57c\ud55c\ub2e4.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'private void readObject(ObjectInputStream s) throws IOException, ClassNotFoundException {\n    s.defaultReadObject();\n\n    // \ubd88\ubcc0\uc2dd\uc744 \ub9cc\uc871\ud558\ub294\uc9c0 \uac80\uc0ac\ud55c\ub2e4.\n    if(start.compareTo(end) > 0) {\n       throw new InvalidObjectException(start + "\uac00 " + end + "\ubcf4\ub2e4 \ub2a6\ub2e4.");\n    }\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"readObject \uba54\uc11c\ub4dc\uc5d0\uc11c ",(0,r.kt)("strong",{parentName:"li"},"defaultReadObject")," \uba54\uc11c\ub4dc\ub97c \ud638\ucd9c\ud574\uc11c \ubd88\ubcc0\uc2dd\uc744 \ub9cc\uc871\ud558\uc9c0\ub294\uc9c0\ub97c \ud655\uc778\ud558\uc790")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'private void readObject(ObjectInputStream s) throws IOException, ClassNotFoundException {\n    s.defaultReadObject();\n\n    // \uac00\ubcc0 \uc694\uc18c\ub4e4\uc744 \ubc29\uc5b4\uc801\uc73c\ub85c \ubcf5\uc0ac\ud55c\ub2e4.\n    start = new Date(start.getTime());\n    end = new Date(end.getTime());\n\n    // \ubd88\ubcc0\uc2dd\uc744 \ub9cc\uc871\ud558\ub294\uc9c0 \uac80\uc0ac\ud55c\ub2e4.\n    if(start.compareTo(end) > 0) {\n       throw new InvalidObjectException(start + "\uac00 " + end + "\ubcf4\ub2e4 \ub2a6\ub2e4.");\n    }\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"readObject \uba54\uc11c\ub4dc\uc5d0\uc11c \ubc29\uc5b4\uc801 \ubcf5\uc0ac\ub97c \ucda9\ubd84\ud788 \ud558\uc9c0 \uc54a\uc73c\uba74 \ubcf4\uc548\uc801\uc778 \ubb38\uc81c\uac00 \uc0dd\uae38 \uc218 \uc788\uc73c\ub2c8 \ubc18\ub4dc\uc2dc \uc811\uadfc \uac00\ub2a5\ud55c \ud544\ub4dc\ub97c \ubcf5\uc0ac\ubcf8\uc73c\ub85c \uc0dd\uc131\ud558\ub3c4\ub85d \ud558\uc790")),(0,r.kt)("h3",{id:"\uc694\uc57d-1"},"\uc694\uc57d"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"readObject"),"\uc758 \uc791\uc131\uc740 public \uc0dd\uc131\uc790\ub97c \uc791\uc131\ud558\ub294 \ub9c8\uc74c\uac00\uc9d0\uc73c\ub85c \uc784\ud574\uc57c\ud55c\ub2e4.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"readObject"),"\ub294 \uc5b4\ub5a4 \ubc14\uc774\ud2b8 \uc2a4\ud2b8\ub9bc\uc774 \ub118\uc5b4\uc624\ub354\ub77c\ub3c4 \uc720\ud6a8\ud55c \uc778\uc2a4\ud134\uc2a4\ub97c \ub9cc\ub4e4\uc5b4\ub0b4\uc57c\ud55c\ub2e4.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\ubb3c\ub860 \uadf8 \ubc14\uc774\ud2b8 \uc2a4\ud2b8\ub9bc\uc774 \uc9c4\uc9dc \uc9c1\ub82c\ud654\ub41c \uc778\uc2a4\ud134\uc2a4\ub77c\uace0 \uac00\uc815\ud558\uae30 \ubcf4\ub2e4\ub294, \ubcc0\uc870\uc758 \uac00\ub2a5\uc131\uc744 \ub450\uace0 \ucd5c\ub300\ud55c \ubc29\uc5b4\uc801\uc73c\ub85c \uc791\uc131\ud558\ub3c4\ub85d \ud558\uc790."))),(0,r.kt)("h2",{id:"\uc778\uc2a4\ud134\uc2a4-\uc218\ub97c-\ud1b5\uc81c\ud574\uc57c-\ud55c\ub2e4\uba74-readresolve-\ubcf4\ub2e4\ub294-\uc5f4\uac70-\ud0c0\uc785\uc744-\uc0ac\uc6a9\ud558\ub77c"},"\uc778\uc2a4\ud134\uc2a4 \uc218\ub97c \ud1b5\uc81c\ud574\uc57c \ud55c\ub2e4\uba74 readResolve \ubcf4\ub2e4\ub294 \uc5f4\uac70 \ud0c0\uc785\uc744 \uc0ac\uc6a9\ud558\ub77c"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\uc2f1\uae00\ud134\uc73c\ub85c \uac1c\ubc1c\ub41c \ud074\ub798\uc2a4 \uc5ed\uc2dc \uc9c1\ub82c\ud654\uc5d0 \uc758\ud574 \ub450 \uac1c\uc758 \uc778\uc2a4\ud134\uc2a4\uac00 \uacf5\uc874\ud560 \uc218 \uc788\ub2e4.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\uc774\ub97c \ubc29\uc5b4\ud558\uae30 \uc704\ud574 ",(0,r.kt)("strong",{parentName:"p"},"readResolve"),"\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub294\ub370, \uc774 \uba54\uc18c\ub4dc\ub294 readObject\uac00 \ub9cc\ub4e4\uc5b4\ub0b8 \uc778\uc2a4\ud134\uc2a4\ub97c \ub2e4\ub978 \uac83\uc73c\ub85c \ub300\uccb4\ud560 \uc218 \uc788\ub294 \uba54\uc18c\ub4dc\uc774\ub2e4."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"private Object readResolove() {\n    return INSTANCE;\n}\n")),(0,r.kt)("h3",{id:"enum\uc758-\ud65c\uc6a9"},"Enum\uc758 \ud65c\uc6a9"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uc0ac\uc2e4 \uc774\ub7f0 \uacbd\uc6b0 \uc6d0\uc18c\uac00 \ud558\ub098\uc778 Enum\uc744 \uc0ac\uc6a9\ud558\ub294 \ud3b8\uc774 \ud6e8\uc52c \uae54\ub054\ud558\ub2e4.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'public enum Elvis {\n    INSTANCE;\n    private String[] favoriteSongs = { "\ubcf4\uace0\uc2f6\ub2e4", "\ub098\ub97c \uc0ac\ub791\ud588\ub358 \uc0ac\ub78c\uc544" };\n    public void printFavorites() {\n        System.out.printlnArrays.toString(favoritSongs);\n    }\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\uc778\uc2a4\ud134\uc2a4 \ud1b5\uc81c\ub97c \uc704\ud574 readResolve\ub97c \uc0ac\uc6a9\ud558\ub294 \ubc29\uc2dd\uc774 \uc544\uc8fc \uc4f8\ubaa8\uc5c6\ub294 \uac83\uc740 \uc544\ub2c8\ub2e4.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\uc9c1\ub82c\ud654 \uac00\ub2a5 \uc778\uc2a4\ud134\uc2a4 \ud1b5\uc81c \ud074\ub798\uc2a4\ub97c \uc791\uc131\ud574\uc57c\ud560 \ub54c \ucef4\ud30c\uc77c \ud0c0\uc784\uc5d0\ub294 \uc5b4\ub5a4 \uc778\uc2a4\ud134\uc2a4\ub4e4\uc774 \uc788\ub294\uc9c0 \uc54c \uc218 \uc5c6\ub294 \uc0c1\ud669\uc5d0\uc11c\ub294 \uc5f4\uac70 \ud0c0\uc785 \ud45c\ud604\uc774 \ubd88\uac00\ub2a5\ud558\uae30 \ub54c\ubb38\uc774\ub2e4.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"readResolve\ub294 \uc811\uadfc\uc131\uc774 \ub9e4\uc6b0 \uc911\uc694\ud55c\ub370, final \ud074\ub798\uc2a4\ub77c\uba74 private\uc774\uc5b4\uc57c\ud558\uace0, protected\ub098 public\uc774\uba74 \ud558\uc704 \ud074\ub798\uc2a4\uc5d0\uc11c \uc7ac\uc815\uc758\ud558\uc9c0 \uc54a\uc744 \uacbd\uc6b0 ",(0,r.kt)("strong",{parentName:"p"},"ClassCastException"),"\uc774 \ubc1c\uc0dd\ud560 \uc218 \uc788\uc73c\ubbc0\ub85c \uc8fc\uc758\ud574\uc57c\ud55c\ub2e4."))),(0,r.kt)("h3",{id:"\uc694\uc57d-2"},"\uc694\uc57d"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\ubd88\ubcc0\uc2dd\uc744 \uc9c0\ud0a4\uae30 \uc704\ud574 \uc778\uc2a4\ud134\uc2a4\ub97c \ud1b5\uc81c\ud574\uc57c\ud55c\ub2e4\uba74 (\uc2f1\uae00\ud134 \ud328\ud134), \uac00\ub2a5\ud55c \ud55c \uc5f4\uac70 \ud0c0\uc785\uc744 \uc0c1\uc694\ud558\ub3c4\ub85d \ud558\uc790.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\uc774\ub118 \ud0c0\uc785\uc758 \uc120\uc5b8\uc774 \uc5ec\uc758\uce58\uc54a\ub2e4\uba74 readResolve \uba54\uc11c\ub4dc\ub97c \uc0ac\uc6a9\ud558\uace0, \uadf8 \ud074\ub798\uc2a4\uc758 \ubaa8\ub4e0 \ucc38\uc870 \ud0c0\uc785 \uc778\uc2a4\ud134\uc2a4 \ud544\ub4dc\ub97c transient\ub85c \uc120\uc5b8\ud558\uc790."))),(0,r.kt)("h2",{id:"\uc9c1\ub82c\ud654\ub41c-\uc778\uc2a4\ud134\uc2a4-\ub300\uc2e0-\uc9c1\ub82c\ud654-\ud504\ub85d\uc2dc-\uc0ac\uc6a9\uc744-\uac80\ud1a0\ud558\ub77c"},"\uc9c1\ub82c\ud654\ub41c \uc778\uc2a4\ud134\uc2a4 \ub300\uc2e0 \uc9c1\ub82c\ud654 \ud504\ub85d\uc2dc \uc0ac\uc6a9\uc744 \uac80\ud1a0\ud558\ub77c"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"item 90")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\uc774\ubc88 \uc7a5 \ub0b4\ub0b4 \uc774\uc57c\uae30\ud588\ub4ef\uc774, ",(0,r.kt)("strong",{parentName:"p"},"Serializable"),"\uc744 \uad6c\ud604\ud558\ub294 \uc21c\uac04 \uc5b8\uc5b4\uc758 \uc815\uc0c1 \uba54\ucee4\ub2c8\uc998\uc778 \uc0dd\uc131\uc790 \uc774\uc678\uc758 \ubc29\ubc95\uc73c\ub85c \uc778\uc2a4\ud134\uc2a4\ub97c \uc0dd\uc131\ud560 \uc218 \uc788\uac8c \ub41c\ub2e4.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\ubc84\uadf8\uc640 \ubcf4\uc548 \ubb38\uc81c\uac00 \ubc1c\uc0dd\ud560 \uac00\ub2a5\uc131\uc774 \ucee4\uc9c4\ub2e4\ub294 \ub73b\uc778\ub370, \uc774\ub97c \ubcf4\uc644\ud560 \ubc29\ubc95\uc73c\ub85c \uc9c1\ub82c\ud654 \ud504\ub85d\uc2dc \ud328\ud134\uc774\ub77c\ub294 \uac83\uc774 \uc874\uc7ac\ud55c\ub2e4.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\uc9c1\ub82c\ud654 \ud504\ub85d\uc2dc\uc6a9 \ud074\ub798\uc2a4\ub294 \ubc14\uae65 \ud074\ub798\uc2a4\ub97c \uc778\uc790\ub85c \ubc1b\uc544 \uc790\uc2e0\uc758 \ud544\ub4dc\ub85c \ubcf5\uc0ac\ud55c\ub2e4. ( \uc774 \ub54c \uc77c\uad00\uc131 \uac80\uc0ac\ub098 \ubc29\uc5b4\uc801 \ubcf5\uc0ac\ub294 \ud544\uc694\uc5c6\ub2e4. \uc9c1\ub82c\ud654 \ud504\ub85d\uc2dc\uc758 \uae30\ubcf8 \uc9c1\ub82c\ud654 \ud615\ud0dc\ub294 \ubc14\uae65 \ud074\ub798\uc2a4\ub85c \uc9c1\ub82c\ud654 \ud558\uae30\uc5d0 \uc774\uc0c1\uc801\uc774\uae30 \ub584\ubb38\uc774\ub2e4. )")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"writeReplace")," \uba54\uc11c\ub4dc\ub294 \uc774\ub7f0 \uc791\uc5c5\uc744 \ud558\uae30 \uc704\ud574 \ucd5c\uc801\ud654\ub41c \uba54\uc11c\ub4dc\uc774\ub2e4.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\uc774 \uba54\uc11c\ub4dc\ub294 \uc790\ubc14\uc758 \uc9c1\ub82c\ud654 \uc2dc\uc2a4\ud15c\uc774 \ubc14\uae65 \ud074\ub798\uc2a4\uc758 \uc778\uc2a4\ud134\uc2a4 \ub300\uc2e0 \uc9c1\ub82c\ud654 \ud504\ub85d\uc2dc\uc758 \uc778\uc2a4\ud134\uc2a4\ub97c \ubc18\ud658\ud558\uac8c \ud574\uc8fc\uae30 \ub54c\ubb38\uc774\ub2e4.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\uc774\ub7ec\ud55c \uc9c1\ub82c\ud654 \ud504\ub85d\uc2dc \ud328\ud134\uc740 JPA\uc758 \uad6c\ud604\uccb4\uc778 \ud558\uc774\ubc84\ub124\uc774\ud2b8\uc5d0\uc11c\ub3c4 \uc0ac\uc6a9\ud558\ub294 \uae30\ubc95\uc774\ub2e4. ( \uae30\ubcf8\uc801\uc73c\ub85c JPA\uc5d0\uc11c \ubaa8\ub4e0 \uc5d4\ud130\ud2f0\ub294 Serializable\uc744 \uad6c\ud604\ud558\ub294 \uac83\uc774 \uad6d\ub8f0\uc774\ub2e4. )"))),(0,r.kt)("h3",{id:"\uc694\uc57d-3"},"\uc694\uc57d"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\uc81c 3\uc790\uac00 \ud655\uc7a5\ud560 \uc218 \uc5c6\ub294 \ud074\ub798\uc2a4\ub77c\uba74 \uac00\ub2a5\ud55c \ud55c \uc9c1\ub82c\ud654 \ud504\ub85d\uc2dc \ud328\ud134\uc744 \uc0ac\uc6a9\ud558\uc790.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\uc774 \ud328\ud134\uc774 \ubd88\ubcc0\uc2dd\uc744 \uac00\uc7a5 \uc548\uc815\uc801\uc73c\ub85c \uc9c1\ub82c\ud654\ud574\uc8fc\ub294 \uac00\uc7a5 \uc26c\uc6b4 \ubc29\ubc95\uc77c \uac83\uc774\ub2e4."))),(0,r.kt)("p",null,"\uc774\ud399\ud2f0\ube0c \uc790\ubc14 \uc2a4\ud130\ub514 \ub05d!"),(0,r.kt)("h2",{id:"reference"},"Reference"),(0,r.kt)("img",{width:"360",alt:"\u1109\u1173\u110f\u1173\u1105\u1175\u11ab\u1109\u1163\u11ba 2021-04-16 \u110b\u1169\u1112\u116e 4 24 23",src:"https://user-images.githubusercontent.com/43809168/114987533-3e449400-9ed0-11eb-9b5f-a24f73b6f138.png"}),(0,r.kt)("p",null,"\uc774\ud399\ud2f0\ube0c \uc790\ubc14 Effective Java 3/E"),(0,r.kt)("p",null,"\uc800\uc790 : \uc870\uc288\uc544 \ube14\ub85c\ud06c"))}o.isMDXComponent=!0}}]);