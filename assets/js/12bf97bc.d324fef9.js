(self.webpackChunkstudy=self.webpackChunkstudy||[]).push([[568],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=c(n),d=l,k=m["".concat(p,".").concat(d)]||m[d]||s[d]||a;return n?r.createElement(k,o(o({ref:t},u),{},{components:n})):r.createElement(k,o({ref:t},u))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,o=new Array(a);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7942:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return i},toc:function(){return p},default:function(){return u}});var r=n(2122),l=n(9756),a=(n(7294),n(3905)),o={id:"18-job",title:"18. Job\uacfc Cron Job"},i={unversionedId:"kubernetes/15steps/18-job",id:"kubernetes/15steps/18-job",isDocsHomePage:!1,title:"18. Job\uacfc Cron Job",description:"\ucfe0\ubc84\ub124\ud2f0\uc2a4\uc758 Job\uacfc Cron Job\uc5d0 \ub300\ud558\uc5ec",source:"@site/docs/kubernetes/15steps/18-job.md",sourceDirName:"kubernetes/15steps",slug:"/kubernetes/15steps/18-job",permalink:"/study/docs/kubernetes/15steps/18-job",editUrl:"https://github.com/minkukjo/study/edit/master/docs/kubernetes/15steps/18-job.md",version:"current",lastUpdatedAt:1622280200,formattedLastUpdatedAt:"5/29/2021",sidebarPosition:18,frontMatter:{id:"18-job",title:"18. Job\uacfc Cron Job"},sidebar:"mySidebar",previous:{title:"17. \uc2a4\ud1a0\ub9ac\uc9c0",permalink:"/study/docs/kubernetes/15steps/17-storage"},next:{title:"\ud2b9\uc815 \ub178\ub4dc\uc5d0\ub9cc \ud30c\ub4dc \ubc30\ud3ec\ud558\uae30",permalink:"/study/docs/kubernetes/node-isolation"}},p=[{value:"\uc7a1\uacfc \ud06c\ub860\uc7a1",id:"\uc7a1\uacfc-\ud06c\ub860\uc7a1",children:[]},{value:"\uc7a1 \ucee8\ud2b8\ub864\ub7ec\uc758 \ub3d9\uc791",id:"\uc7a1-\ucee8\ud2b8\ub864\ub7ec\uc758-\ub3d9\uc791",children:[]},{value:"\uc7a1 \ucee8\ud2b8\ub864\ub7ec \uc0ac\uc6a9 \uc2dc \uc8fc\uc758\uc810",id:"\uc7a1-\ucee8\ud2b8\ub864\ub7ec-\uc0ac\uc6a9-\uc2dc-\uc8fc\uc758\uc810",children:[]},{value:"\uc2a4\ucf00\uc974\uc5d0 \ub530\ub77c \ud30c\ub4dc\ub97c \uc81c\uc5b4\ud558\ub294 \ud06c\ub860\uc7a1",id:"\uc2a4\ucf00\uc974\uc5d0-\ub530\ub77c-\ud30c\ub4dc\ub97c-\uc81c\uc5b4\ud558\ub294-\ud06c\ub860\uc7a1",children:[]},{value:"\uc7a1 \ud65c\uc6a9\uc758 \uc608\uc2dc - \ub3d9\uc2dc \uc2e4\ud589\uacfc \uc21c\ucc28 \uc2e4\ud589 -",id:"\uc7a1-\ud65c\uc6a9\uc758-\uc608\uc2dc---\ub3d9\uc2dc-\uc2e4\ud589\uacfc-\uc21c\ucc28-\uc2e4\ud589--",children:[]},{value:"\uc7a1 \ud65c\uc6a9\uc758 \uc608\uc2dc - \ud30c\ub4dc\ub97c \uc2e4\ud589\ud560 \ub178\ub4dc \uc120\ud0dd -",id:"\uc7a1-\ud65c\uc6a9\uc758-\uc608\uc2dc---\ud30c\ub4dc\ub97c-\uc2e4\ud589\ud560-\ub178\ub4dc-\uc120\ud0dd--",children:[]},{value:"\uc7a1 \ud65c\uc6a9\uc758 \uc608\uc2dc - \uc628\ub77c\uc778 \ubc30\uce58 \ucc98\ub9ac \uc694\uccad -",id:"\uc7a1-\ud65c\uc6a9\uc758-\uc608\uc2dc---\uc628\ub77c\uc778-\ubc30\uce58-\ucc98\ub9ac-\uc694\uccad--",children:[]},{value:"\uc7a1 \ud65c\uc6a9\uc758 \uc608\uc2dc - \uc815\uae30 \uc2e4\ud589 \ubc30\uce58 \ucc98\ub9ac -",id:"\uc7a1-\ud65c\uc6a9\uc758-\uc608\uc2dc---\uc815\uae30-\uc2e4\ud589-\ubc30\uce58-\ucc98\ub9ac--",children:[]},{value:"\uc7a1\uc758 \uc2e4\ud589\uc218\uc640 \ub3d9\uc2dc \uc2e4\ud589\uc218",id:"\uc7a1\uc758-\uc2e4\ud589\uc218\uc640-\ub3d9\uc2dc-\uc2e4\ud589\uc218",children:[]},{value:"\ud558\ub098\uc758 \ucee8\ud14c\uc774\ub108\ub85c \uad6c\uc131\ub41c \ud30c\ub4dc\uac00 \uc774\uc0c1 \uc885\ub8cc \ub418\ub294 \uacbd\uc6b0",id:"\ud558\ub098\uc758-\ucee8\ud14c\uc774\ub108\ub85c-\uad6c\uc131\ub41c-\ud30c\ub4dc\uac00-\uc774\uc0c1-\uc885\ub8cc-\ub418\ub294-\uacbd\uc6b0",children:[]},{value:"\uc5ec\ub7ec \ucee8\ud14c\uc774\ub108 \uc911 \uc77c\ubd80\uac00 \uc774\uc0c1 \uc885\ub8cc\ud560 \ub54c\uc758 \ub3d9\uc791",id:"\uc5ec\ub7ec-\ucee8\ud14c\uc774\ub108-\uc911-\uc77c\ubd80\uac00-\uc774\uc0c1-\uc885\ub8cc\ud560-\ub54c\uc758-\ub3d9\uc791",children:[]},{value:"\ud06c\ub860\uc7a1",id:"\ud06c\ub860\uc7a1",children:[{value:"\ud575\uc2ec \uc694\uc57d",id:"\ud575\uc2ec-\uc694\uc57d",children:[]}]},{value:"Reference",id:"reference",children:[]}],c={toc:p};function u(e){var t=e.components,n=(0,l.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\ucfe0\ubc84\ub124\ud2f0\uc2a4\uc758 Job\uacfc Cron Job\uc5d0 \ub300\ud558\uc5ec")),(0,a.kt)("h2",{id:"\uc7a1\uacfc-\ud06c\ub860\uc7a1"},"\uc7a1\uacfc \ud06c\ub860\uc7a1"),(0,a.kt)("p",null,"\uc7a1 \ucee8\ud2b8\ub864\ub7ec\ub294 \ud30c\ub4dc\uc5d0 \uc788\ub294 \ubaa8\ub4e0 \ucee8\ud14c\uc774\ub108\uac00 \uc815\uc0c1\uc801\uc73c\ub85c \uc885\ub8cc\ud560 \ub54c\uae4c\uc9c0 \uc7ac\uc2e4\ud589\ud55c\ub2e4\ub294 \ud2b9\uc9d5\uc774 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,"\ud06c\ub860\uc7a1\uc740 UNIX\uc758 \ud06c\ub860\uacfc \uac19\uc740 \ud3ec\ub9f7\uc73c\ub85c \uc2e4\ud589 \uc2a4\ucf00\uc904\uc744 \uc9c0\uc815\ud560 \uc218 \uc788\ub294 \ucee8\ud2b8\ub864\ub7ec\uc785\ub2c8\ub2e4."),(0,a.kt)("h2",{id:"\uc7a1-\ucee8\ud2b8\ub864\ub7ec\uc758-\ub3d9\uc791"},"\uc7a1 \ucee8\ud2b8\ub864\ub7ec\uc758 \ub3d9\uc791"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\uc7a1 \ucee8\ud2b8\ub864\ub7ec\uc5d0\uc11c\uc758 \uc7a1\uc740 \ubc30\uce58 \ucc98\ub9ac\ub77c\uace0 \ubd88\ub9ac\uba70 \ud558\ub098\uc758 \ubb36\uc74c \ud504\ub85c\uadf8\ub7a8\uc744 \uc2e4\ud589\ud558\ub294 \uae30\ub2a5")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\uc9c0\uc815\ud55c \uc2e4\ud589 \ud69f\uc218\uc640 \ubcd1\ud589 \uac1c\uc218\uc5d0 \ub530\ub77c \ud55c \uac1c \uc774\uc0c1\uc758 \ud30c\ub4dc \uc2e4\ud589")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\uc804\uccb4 \ucee8\ud14c\uc774\ub108 \uc911 \ud558\ub098\ub77c\ub3c4 \uc2e4\ud328\ud558\uba74 \ubaa8\ub450 \ube44\uc815\uc0c1 \uc885\ub8cc\ub85c \ucde8\uae09")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\uc7a1\uc5d0 \uae30\uc220\ud55c \ud30c\ub4dc\uc758 \uc2e4\ud589 \ud69f\uc218\ub97c \uc804\ubd80 \uc815\uc0c1 \uc885\ub8cc\ud558\uba74 \uc7a1\uc740 \uc885\ub8cc\ud55c\ub2e4. \ub9c8\ucc2c\uac00\uc9c0\ub85c \ube44\uc815\uc0c1 \uc885\ub8cc\uc5d0 \ub530\ub978 \uc7ac\uc2e4\ud589 \ud69f\uc218\uc758 \uc0c1\ud55c\uc5d0 \ub3c4\ub2ec\ud588\uc744 \ub54c\ub3c4 \uc7a1\uc744 \uc911\ub2e8")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\ub178\ub4dc \uc774\uc0c1\uc73c\ub85c \uc7a1\uc758 \ud30c\ub4dc\uac00 \uc81c\uac70\ub41c \uacbd\uc6b0 \ub2e4\ub978 \ub178\ub4dc\uc5d0\uc11c \ud30c\ub4dc\ub97c \uc7ac\uc2e4\ud589")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\uc7a1\uc5d0 \uc758\ud574 \uc2e4\ud589\ub41c \ud30c\ub4dc\ub294 \uc7a1\uc774 \uc0ad\uc81c\ub420 \ub54c\uae4c\uc9c0 \uc720\uc9c0"))),(0,a.kt)("h2",{id:"\uc7a1-\ucee8\ud2b8\ub864\ub7ec-\uc0ac\uc6a9-\uc2dc-\uc8fc\uc758\uc810"},"\uc7a1 \ucee8\ud2b8\ub864\ub7ec \uc0ac\uc6a9 \uc2dc \uc8fc\uc758\uc810"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\uc5ec\ub7ec \ud504\ub85c\uadf8\ub7a8\uc758 \uc2e4\ud589 \uc21c\uc11c\ub098 \ube44\uc815\uc0c1 \uc885\ub8cc\uc758 \ubd84\uae30\ucc98\ub9ac\ub294 \ucee8\ud14c\uc774\ub108 \ub0b4 \uc178\uc5d0\uc11c \uc81c\uc5b4")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\ud30c\ub4dc \ub0b4\uc5d0 \uc5ec\ub7ec \uac1c\uc758 \ucee8\ud14c\uc774\ub108\uac00 \uc874\uc7ac\ud560 \ub54c \uc7a1 \ucee8\ud2b8\ub864\ub7ec\ub294 \ud30c\ub4dc \ub0b4\uc758 \ubaa8\ub4e0 \ucee8\ud14c\uc774\ub108\uac00 \uc815\uc0c1 \uc885\ub8cc\ud560 \ub54c\uae4c\uc9c0 \uc7ac\uc2e4\ud589\uc744 \ubc18\ubcf5")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"kubectl get pod"),"\ub85c \uccb4\ud06c\ud588\uc744 \ub54c STATUS\uac00 completed\uc5ec\ub3c4 \ube44\uc815\uc0c1 \uc885\ub8cc\uc77c \uac00\ub2a5\uc131 \uc788\uc74c"))),(0,a.kt)("h2",{id:"\uc2a4\ucf00\uc974\uc5d0-\ub530\ub77c-\ud30c\ub4dc\ub97c-\uc81c\uc5b4\ud558\ub294-\ud06c\ub860\uc7a1"},"\uc2a4\ucf00\uc974\uc5d0 \ub530\ub77c \ud30c\ub4dc\ub97c \uc81c\uc5b4\ud558\ub294 \ud06c\ub860\uc7a1"),(0,a.kt)("img",{width:"1740",alt:"\u1109\u1173\u110f\u1173\u1105\u1175\u11ab\u1109\u1163\u11ba 2021-03-26 \u110b\u1169\u1112\u116e 3 59 37",src:"https://user-images.githubusercontent.com/43809168/112594456-4d45a280-8e4c-11eb-8adc-f434a8cf766c.png"}),(0,a.kt)("p",null,"\ud06c\ub860\uc7a1\uc740 \uc9c0\uc815 \uc2dc\uac01\uc5d0 \uc7a1\uc744 \ub9cc\ub4e4\uace0, \uc0dd\uc131\ub41c \ud30c\ub4dc\uc758 \uac1c\uc218\uac00 \uc815\ud574\uc9c4 \uc218\ub97c \ub118\uc5b4\uc11c\uba74 \uac00\ube44\uc9c0 \uc218\uc9d1 \ucee8\ud2b8\ub864\ub7ec\uac00 \uc885\ub8cc\ub41c \ud30c\ub4dc\ub97c \uc0ad\uc81c\ud569\ub2c8\ub2e4."),(0,a.kt)("p",null,"\uc774\ub7f0 \ud06c\ub860\uc7a1\uc740 \uc5b4\ub514\uc11c \uc368\uba39\uc744 \uc218 \uc788\uc744\uae4c\uc694?"),(0,a.kt)("h2",{id:"\uc7a1-\ud65c\uc6a9\uc758-\uc608\uc2dc---\ub3d9\uc2dc-\uc2e4\ud589\uacfc-\uc21c\ucc28-\uc2e4\ud589--"},"\uc7a1 \ud65c\uc6a9\uc758 \uc608\uc2dc - \ub3d9\uc2dc \uc2e4\ud589\uacfc \uc21c\ucc28 \uc2e4\ud589 -"),(0,a.kt)("p",null,"\ubcf5\uc218\uc758 \ucc98\ub9ac\ub4e4 \uac04\uc5d0 \uc21c\uc11c\uac00 \uc5c6\uc5b4 \uc0c1\ud638 \ub3c5\ub9bd\uc801\uc73c\ub85c \uc2e4\ud589\ud560 \uc218 \uc788\ub294 \ubc30\uce58 \ucc98\ub9ac\ub97c \uc0dd\uac01\ud574\ubcf4\uaca0\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,"\uc7a1 \ucee8\ud2b8\ub864\ub7ec\ub294 \ubcf5\uc218\uc758 \ub178\ub4dc \uc704\uc5d0\uc11c \uc5ec\ub7ec \uac1c\uc758 \ud30c\ub4dc\ub97c \ub3d9\uc2dc\uc5d0 \uc2e4\ud589\ud558\uc5ec \ubc30\uce58 \ucc98\ub9ac\ub97c \ube60\ub974\uac8c \uc644\ub8cc\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. ( IAM \ub9c8\uc774\uadf8\ub808\uc774\uc158\uc5d0\uc11c \uc368\ubcfc\ub9cc \ud588\uc744 \uac83 \uac19\uae30\ub3c4...? )"),(0,a.kt)("p",null,"\ub300\ud45c\uc801\uc778 \uc608\ub85c\ub294 \ub300\ub7c9 \uba54\uc77c \ubc1c\uc1a1, \uc774\ubbf8\uc9c0 \ub3d9\uc601\uc0c1\uacfc \uac19\uc740 \ud30c\uc77c\uc758 \ubcc0\ud658 \ucc98\ub9ac, \ub300\ub7c9 \ub370\uc774\ud130\ub97c \ud3ec\ud568\ud558\ub294 KVS\ud615 \ub370\uc774\ud130\ubca0\uc774\uc2a4 \uac80\uc0c9 \ub4f1\uc774 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("h2",{id:"\uc7a1-\ud65c\uc6a9\uc758-\uc608\uc2dc---\ud30c\ub4dc\ub97c-\uc2e4\ud589\ud560-\ub178\ub4dc-\uc120\ud0dd--"},"\uc7a1 \ud65c\uc6a9\uc758 \uc608\uc2dc - \ud30c\ub4dc\ub97c \uc2e4\ud589\ud560 \ub178\ub4dc \uc120\ud0dd -"),(0,a.kt)("p",null,"\ub2e4\uc591\ud55c \uc0ac\uc591\uc758 \ub178\ub4dc\ub85c \uad6c\uc131\ub41c \ud074\ub7ec\uc2a4\ud130\uc5d0\uc11c \ubc30\uce58 \ucc98\ub9ac\ub97c \uc2e4\ud589\ud574\uc57c\ud560 \ub54c, \uc131\ub2a5\uc774 \uc88b\uc740 \ub178\ub4dc\uc5d0\uc11c\ub294 \ube44\uc2fc \uc5f0\uc0b0 (GPU \uc791\uc5c5)\uc744 \uc218\ud589\ud558\uace0 \uc131\ub2a5\uc774 \ub0ae\uc740 \ub178\ub4dc\uc5d0\uc11c\ub294 \ub354 \uc801\uc740 \uc5f0\uc0b0\uc758 \uc7a1\uc744 \uc218\ud589\ud558\uac8c \ud558\ub294 \ubc30\uce58\ub97c \uc7a1 \ucee8\ud2b8\ub864\ub7ec\ub97c \ud65c\uc6a9\ud574\ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("h2",{id:"\uc7a1-\ud65c\uc6a9\uc758-\uc608\uc2dc---\uc628\ub77c\uc778-\ubc30\uce58-\ucc98\ub9ac-\uc694\uccad--"},"\uc7a1 \ud65c\uc6a9\uc758 \uc608\uc2dc - \uc628\ub77c\uc778 \ubc30\uce58 \ucc98\ub9ac \uc694\uccad -"),(0,a.kt)("p",null,"\uba54\uc2dc\uc9c0 \ud050\uc5d0 \uc788\ub294 \uba54\uc2dc\uc9c0\ub97c \uc77d\uc5b4\uc11c \uc2e4\ud589\ud558\ub294 \uc7a1(\ud30c\ub4dc)\ub97c \uc0dd\uc131\ud574\ubcfc \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,"\uc628\ub77c\uc778\uc5d0\uc11c \uc694\uccad\uc744 \ubc1b\uc544 \ucc98\ub9ac\ud558\ub294 \uc791\uc5c5\ub3c4 \uc7a1 \ud30c\ub4dc\ub97c \uc0ac\uc6a9\ud574\ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("h2",{id:"\uc7a1-\ud65c\uc6a9\uc758-\uc608\uc2dc---\uc815\uae30-\uc2e4\ud589-\ubc30\uce58-\ucc98\ub9ac--"},"\uc7a1 \ud65c\uc6a9\uc758 \uc608\uc2dc - \uc815\uae30 \uc2e4\ud589 \ubc30\uce58 \ucc98\ub9ac -"),(0,a.kt)("p",null,"\ud06c\ub860\uc7a1\uc740 \uc124\uc815\ud55c \uc2dc\uac04\uc5d0 \uc815\uae30\uc801\uc73c\ub85c \uc7a1\uc744 \uc2e4\ud589\ud569\ub2c8\ub2e4."),(0,a.kt)("p",null,"\ub530\ub77c\uc11c \ub370\uc774\ud130\uc758 \ubc31\uc5c5\uc774\ub098 \ub9e4\uc2dc\uac04\ub9c8\ub2e4 \uc2e4\ud589\ub418\ub294 \ubc30\uce58 \ucc98\ub9ac \ub4f1\uc5d0 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("h2",{id:"\uc7a1\uc758-\uc2e4\ud589\uc218\uc640-\ub3d9\uc2dc-\uc2e4\ud589\uc218"},"\uc7a1\uc758 \uc2e4\ud589\uc218\uc640 \ub3d9\uc2dc \uc2e4\ud589\uc218"),(0,a.kt)("p",null,"\uc7a1 \ucee8\ud2b8\ub864\ub7ec\uc758 \uae30\ubcf8 \uc124\uc815\uc774\ub77c\ud560 \uc218 \uc788\ub294 \uc2e4\ud589\uc218(Completions)\uc640 \ub3d9\uc2dc \uc2e4\ud589\uc218(Parallelism)\uc5d0 \ub300\ud574 \uc54c\uc544\ubd05\uc2dc\ub2e4."),(0,a.kt)("p",null,"\ub2e4\uc74c\uc740 \uac04\ub2e8\ud55c \uc7a1\uc744 \uc0dd\uc131\ud558\ub294 \ub9e4\ub2c8\ud398\uc2a4\ud2b8\uc785\ub2c8\ub2e4."),(0,a.kt)("p",null,"\ud30c\ub4dc\ub294 5\ucd08\uac04 \uc2ac\ub9bd\ud558\uace0 \uc815\uc0c1 \uc885\ub8cc\ud569\ub2c8\ub2e4."),(0,a.kt)("p",null,"\uc774\ub294 \uc2e4\ud589 \ud69f\uc218(Coletions)\ub9cc\ud07c \ubc18\ubcf5 \uc2e4\ud589\ud569\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: batch/v1\nkind: Job\nmetadata:\n  name: normal-end\nspec:\n  template:\n    spec:\n      containers:\n        - name: busybox\n          image: busybox:latest\n          command: ['sh', '-c', 'sleep 5; exit 0']\n      restartPolicy: Never\n  completions: 6\n  # parallelism: 2\n")),(0,a.kt)("p",null,"\uc704 \uc7a1 \ucee8\ud2b8\ub864\ub7ec\ub294 \ucd1d 6\ubc88\uc744 \uc218\ud589\ud558\ub294 \uc7a1\uc744 \ub9cc\ub4e4\uc5b4\ub0c8\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,"parallelism \uc8fc\uc11d\uc744 \ud574\uc81c\ud558\uba74, \ub9e4 \uc2e4\ud589\ub9c8\ub2e4 \ud30c\ub4dc\uac00 2\uac1c\uc529 \uc2e4\ud589\ub418\ub294 \uac83\uc744 \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("h2",{id:"\ud558\ub098\uc758-\ucee8\ud14c\uc774\ub108\ub85c-\uad6c\uc131\ub41c-\ud30c\ub4dc\uac00-\uc774\uc0c1-\uc885\ub8cc-\ub418\ub294-\uacbd\uc6b0"},"\ud558\ub098\uc758 \ucee8\ud14c\uc774\ub108\ub85c \uad6c\uc131\ub41c \ud30c\ub4dc\uac00 \uc774\uc0c1 \uc885\ub8cc \ub418\ub294 \uacbd\uc6b0"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: batch/v1\nkind: Job\nmetadata:\n  name: normal-end\nspec:\n  backoffLimit: 3\n  template:\n    spec:\n      containers:\n        - name: busybox\n          image: busybox:latest\n          command: ['sh', '-c', 'sleep 5; exit 0']\n      restartPolicy: Never\n  # completions: 1 // Default\ub294 1\uc774\ub2e4.\n  # parallelism: 1 // Default\ub294 1\uc774\ub2e4.\n")),(0,a.kt)("p",null,"backoffLimit\uc740 \ubc18\ubcf5 \uc0c1\ud55c\uc120\uc744 \uc815\uc758\ud569\ub2c8\ub2e4."),(0,a.kt)("p",null,"\uc989, \ud30c\ub4dc\uac00 \uc774\uc0c1\uc885\ub8cc\ud560 \uacbd\uc6b0 \uc7ac \uc2e4\ud589\uc744 \ucd5c\ub300 3\ubc88\uae4c\uc9c0 \ud574\uc8fc\uba70 \uadf8 \uc774\uc0c1 \ubc18\ubcf5\ud574\ub3c4 \uc815\uc0c1 \uc885\ub8cc\ub418\uc9c0 \uc54a\ub294\ub2e4\uba74 \uadf8\ub300\ub85c \ubaa8\ub4e0 \uc7a1\uc744 \uc911\uc9c0\ud569\ub2c8\ub2e4."),(0,a.kt)("h2",{id:"\uc5ec\ub7ec-\ucee8\ud14c\uc774\ub108-\uc911-\uc77c\ubd80\uac00-\uc774\uc0c1-\uc885\ub8cc\ud560-\ub54c\uc758-\ub3d9\uc791"},"\uc5ec\ub7ec \ucee8\ud14c\uc774\ub108 \uc911 \uc77c\ubd80\uac00 \uc774\uc0c1 \uc885\ub8cc\ud560 \ub54c\uc758 \ub3d9\uc791"),(0,a.kt)("p",null,"\uc7a1 \ucee8\ud2b8\ub864\ub7ec\uc5d0\uc11c \uc5ec\ub7ec \ucee8\ud14c\uc774\ub108 \uc911 \uc77c\ubd80\uac00 \uc885\ub8cc\ud558\uba74 \uc5b4\ub5a4 \uc77c\uc774 \uc77c\uc5b4\ub0a0\uae4c\uc694?"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: batch/v1\nkind: Job\nmetadata:\n  name: normal-end\nspec:\n  backoffLimit: 3\n  template:\n    spec:\n      containers:\n        - name: busybox\n          image: busybox:latest\n          command: ['sh', '-c', 'sleep 5; exit 0']\n      restartPolicy: Never\n        - name: busybox2\n          image: busybox:latest\n          command: ['sh', '-c', 'sleep 5; exit 0']\n      restartPolicy: Never\n  # completions: 1 // Default\ub294 1\uc774\ub2e4.\n  # parallelism: 1 // Default\ub294 1\uc774\ub2e4.\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"kubectl get pod")," \uba85\ub839\uc5b4\ub85c\ub294 ",(0,a.kt)("inlineCode",{parentName:"p"},"Completed")," \uc774\ubca4\ud2b8\uc778 \uac83\uc73c\ub85c \ub098\uc624\uc9c0\ub9cc, ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl describe job")," \uba85\ub839\uc5b4\ub97c \ud1b5\ud574 \ud655\uc778\ud574\ubcf4\uba74 \uc2e4\ud328\ud558\ub294 \ucee8\ud14c\uc774\ub108\uc758 \uacbd\uc6b0 \uc7ac\uc2e4\ud589\uc774 \ubc18\ubcf5\ub418\ub2e4\uac00 backoffLimit\uc5d0 \ub3c4\ub2ec\ud558\ub294 \uac83\uc744 \uc54c \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,"\uc774\ub85c \uc778\ud574 \uc7a1 \ucee8\ud2c0\ub85c\ub7ec\ub294 \ud30c\ub4dc\uc758 ",(0,a.kt)("inlineCode",{parentName:"p"},"STATUS"),"\ub97c \ubcf4\ub294\uac8c \uc544\ub2cc \ucee8\ud14c\uc774\ub108\uac00 ",(0,a.kt)("inlineCode",{parentName:"p"},"\uc815\uc0c1 \uc885\ub8cc \ud588\ub294\uc9c0"),"\uc758 \uc5ec\ubd80\ub85c \uc7ac\uc2e4\ud589\uc744 \ubc18\ubcf5\ud55c\ub2e4\ub294 \uac83\uc744 \uc54c \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("h2",{id:"\ud06c\ub860\uc7a1"},"\ud06c\ub860\uc7a1"),(0,a.kt)("p",null,"\ud06c\ub860\uc7a1\uc740 cron \ud615\uc2dd\uc73c\ub85c \uae30\uc220\ub41c \uc2a4\ucf00\uc974\uc5d0 \ub9de\ucdb0 \uc7a1\uc744 \uc2e4\ud589\ud558\ub294 \ucee8\ud2b8\ub864\ub7ec\uc785\ub2c8\ub2e4."),(0,a.kt)("p",null,"\uc774\ubbf8 \uc798 \uc54c\uace0 \uacc4\uc2dc\uaca0\uc9c0\ub9cc \uc720\ub2c9\uc2a4 \uacc4\uc5f4\uc758 \uc6b4\uc601\uccb4\uc81c\uc5d0\uc11c \uad6c\ud604\ub41c \ud0c0\uc784 \uae30\ubc18\uc758 \uc2a4\ucf00\uc904\uc785\ub2c8\ub2e4."),(0,a.kt)("p",null,"cron\uc774\ub77c\ub294 \uc774\ub984\uc758 \uc720\ub798\ub294 \uc2dc\uac04\uc758 \uc2e0\uc778 \ud06c\ub85c\ub178\uc2a4(Chronos)\uc5d0\uc11c \uc774\ub984\uc774 \uc720\ub798\ud588\ub2e4\ub294 \ubb38\uc11c\ub3c4 \uc788\ub2e4\uace0 \ud558\ub124\uc694."),(0,a.kt)("p",null,"\ud06c\ub860\uc7a1\uc744 \uc0ac\uc6a9\ud558\uba74 ",(0,a.kt)("inlineCode",{parentName:"p"},"\ub9e4\uc77c 0\uc2dc\uc5d0 \ub370\uc774\ud2b8\ubca0\uc774\uc2a4 \ubc31\uc5c5"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"8\uc2dc\ubd80\ud130 20\uc2dc\uae4c\uc9c0 \ub9e4 \uc2dc\uac01 \ub3d9\uae30\ud654 \uc2e4\uc2dc"),"\uc640 \uac19\uc740 \uc815\ud574\uc9c4 \uc2dc\uac04\uc5d0 \uc7a1 \ucee8\ud2b8\ub864\ub7ec\ud558\uc758 \ud30c\ub4dc\ub97c \uc2e4\ud589\uc2dc\ud0ac \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,"\ud06c\ub860\uc7a1 \ub9e4\ub2c8\ud398\uc2a4\ud2b8\ub294 \ub2e4\uc74c\uacfc \uac19\uc774 \uc791\uc131\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: batch/v1beta1\nkind: CronJob\nmetadata:\n  name: hello\nspec:\n  schedule: '*/1 * * * *'\n  jobTemplate:\n    spec:\n      template:\n        spec:\n          containers:\n            - name: hello\n              image: busybox\n              args:\n                - /bin/sh\n                - -c\n                - date; echo Hello from the k8s cluster\n          restartPolicy: OnFailure\n")),(0,a.kt)("h3",{id:"\ud575\uc2ec-\uc694\uc57d"},"\ud575\uc2ec \uc694\uc57d"),(0,a.kt)("h4",{id:"1-\uc7a1-\ucee8\ud2b8\ub864\ub7ec\ub294-\uc77c\uad04-\ucc98\ub9ac-\ud0c0\uc785\uc758-\uc6cc\ud06c\ub85c\ub4dc\uc5d0-\uc801\ud569\ud569\ub2c8\ub2e4"},"1) \uc7a1 \ucee8\ud2b8\ub864\ub7ec\ub294 \uc77c\uad04 \ucc98\ub9ac \ud0c0\uc785\uc758 \uc6cc\ud06c\ub85c\ub4dc\uc5d0 \uc801\ud569\ud569\ub2c8\ub2e4"),(0,a.kt)("h4",{id:"2-\uc7a1-\ucee8\ud2b8\ub864\ub7ec-\uad00\ub9ac\ud558\uc758-\ud30c\ub4dc-\uc704\uc5d0\uc11c-\ub3cc\uc544\uac00\ub294-\ucee8\ud14c\uc774\ub108\uac00-\ube44\uc815\uc0c1-\uc885\ub8cc-\ud558\uba74-\uc7ac\uc2e4\ud589-\ud69f\uc218\uc758-\uc0c1\ud55c\uce58\uc5d0-\ub3c4\ub2ec\ud558\uac70\ub098-\uc815\uc0c1-\uc885\ub8cc-\ud560-\ub54c\uae4c\uc9c0-\ubc18\ubcf5\ud574\uc11c-\ud30c\ub4dc\uac00-\uc2e4\ud589\ub429\ub2c8\ub2e4"},"2) \uc7a1 \ucee8\ud2b8\ub864\ub7ec \uad00\ub9ac\ud558\uc758 \ud30c\ub4dc \uc704\uc5d0\uc11c \ub3cc\uc544\uac00\ub294 \ucee8\ud14c\uc774\ub108\uac00 \ube44\uc815\uc0c1 \uc885\ub8cc \ud558\uba74 \uc7ac\uc2e4\ud589 \ud69f\uc218\uc758 \uc0c1\ud55c\uce58\uc5d0 \ub3c4\ub2ec\ud558\uac70\ub098, \uc815\uc0c1 \uc885\ub8cc \ud560 \ub54c\uae4c\uc9c0 \ubc18\ubcf5\ud574\uc11c \ud30c\ub4dc\uac00 \uc2e4\ud589\ub429\ub2c8\ub2e4"),(0,a.kt)("h4",{id:"3-\ud06c\ub860\uc7a1\uc740-\uc2dc\uac04\uc5d0-\ub9de\ucdb0-\uc815\uae30\uc801\uc73c\ub85c-\uc7a1\uc744-\uc2e4\ud589\ud558\ub294-\ucee8\ud2b8\ub864\ub7ec\uc785\ub2c8\ub2e4"},"3) \ud06c\ub860\uc7a1\uc740 \uc2dc\uac04\uc5d0 \ub9de\ucdb0 \uc815\uae30\uc801\uc73c\ub85c \uc7a1\uc744 \uc2e4\ud589\ud558\ub294 \ucee8\ud2b8\ub864\ub7ec\uc785\ub2c8\ub2e4"),(0,a.kt)("h2",{id:"reference"},"Reference"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/43809168/101032998-6684c380-35bd-11eb-8ba7-a784fd46b37a.png",alt:"k8s"})),(0,a.kt)("p",null,"15\ub2e8\uacc4\ub85c \ubc30\uc6b0\ub294 \ub3c4\ucee4\uc640 \ucfe0\ubc84\ub124\ud2f0\uc2a4 - \ud0c0\uce74\ub77c \ub9c8\ud638 \uc800\uc11c"))}u.isMDXComponent=!0}}]);