(self.webpackChunkstudy=self.webpackChunkstudy||[]).push([[6402],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return k}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),d=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,c=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=d(r),k=o,m=s["".concat(l,".").concat(k)]||s[k]||p[k]||c;return r?n.createElement(m,a(a({ref:t},u),{},{components:r})):n.createElement(m,a({ref:t},u))}));function k(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=r.length,a=new Array(c);a[0]=s;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var d=2;d<c;d++)a[d]=r[d];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},1513:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return d},default:function(){return p}});var n=r(2122),o=r(9756),c=(r(7294),r(3905)),a=["components"],i={id:"04-docker-command",title:"04. \ub3c4\ucee4 \uba85\ub839\uc5b4"},l={unversionedId:"kubernetes/15steps/04-docker-command",id:"kubernetes/15steps/04-docker-command",isDocsHomePage:!1,title:"04. \ub3c4\ucee4 \uba85\ub839\uc5b4",description:"\ub3c4\ucee4\ub97c \uc0ac\uc6a9\ud560 \ub54c \uc790\uc8fc \uc0ac\uc6a9\ud558\ub294 \uba85\ub839\uc5b4\ub4e4\uc744 \ud559\uc2b5",source:"@site/docs/kubernetes/15steps/04-docker-command.md",sourceDirName:"kubernetes/15steps",slug:"/kubernetes/15steps/04-docker-command",permalink:"/study/docs/kubernetes/15steps/04-docker-command",editUrl:"https://github.com/minkukjo/study/edit/master/docs/kubernetes/15steps/04-docker-command.md",version:"current",lastUpdatedAt:1622260374,formattedLastUpdatedAt:"5/29/2021",sidebarPosition:4,frontMatter:{id:"04-docker-command",title:"04. \ub3c4\ucee4 \uba85\ub839\uc5b4"},sidebar:"mySidebar",previous:{title:"03. \ucfe0\ubc84\ub124\ud2f0\uc2a4\uc758 \uae30\ubcf8",permalink:"/study/docs/kubernetes/15steps/03-kubernetes-architecture"},next:{title:"05. \ub3c4\ucee4 \uc774\ud574\ud558\uae30",permalink:"/study/docs/kubernetes/15steps/05-docker-deeper"}},d=[{value:"docker run : \ub3c4\ucee4\ub97c \uad6c\ub3d9\ud558\ub294 \uba85\ub839\uc5b4",id:"docker-run--\ub3c4\ucee4\ub97c-\uad6c\ub3d9\ud558\ub294-\uba85\ub839\uc5b4",children:[]},{value:"docker ps : \ucee8\ud14c\uc774\ub108 \uc0c1\ud0dc \ucd9c\ub825",id:"docker-ps--\ucee8\ud14c\uc774\ub108-\uc0c1\ud0dc-\ucd9c\ub825",children:[]},{value:"docker logs : \ucee8\ud14c\uc774\ub108 \ub85c\uadf8 \ucd9c\ub825",id:"docker-logs--\ucee8\ud14c\uc774\ub108-\ub85c\uadf8-\ucd9c\ub825",children:[]},{value:"docker stop, kill : \ucee8\ud14c\uc774\ub108 \uc911\uc9c0, \uc0ad\uc81c",id:"docker-stop-kill--\ucee8\ud14c\uc774\ub108-\uc911\uc9c0-\uc0ad\uc81c",children:[]},{value:"docker start : \ucee8\ud14c\uc774\ub108 \uc7ac\uac00\ub3d9",id:"docker-start--\ucee8\ud14c\uc774\ub108-\uc7ac\uac00\ub3d9",children:[]},{value:"docker commit : \ucee8\ud14c\uc774\ub108\uc758 \ubcc0\uacbd \uc0ac\ud56d\uc744 \ub808\ud3ec\uc9c0\ud1a0\ub9ac\uc5d0 \uc800\uc7a5",id:"docker-commit--\ucee8\ud14c\uc774\ub108\uc758-\ubcc0\uacbd-\uc0ac\ud56d\uc744-\ub808\ud3ec\uc9c0\ud1a0\ub9ac\uc5d0-\uc800\uc7a5",children:[]},{value:"docker push : \uc774\ubbf8\uc9c0\ub97c \uc6d0\uaca9 \ub808\ud3ec\uc9c0\ud1a0\ub9ac\uc5d0 \ubcf4\uad00",id:"docker-push--\uc774\ubbf8\uc9c0\ub97c-\uc6d0\uaca9-\ub808\ud3ec\uc9c0\ud1a0\ub9ac\uc5d0-\ubcf4\uad00",children:[]},{value:"Reference",id:"reference",children:[]}],u={toc:d};function p(e){var t=e.components,r=(0,o.Z)(e,a);return(0,c.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"\ub3c4\ucee4\ub97c \uc0ac\uc6a9\ud560 \ub54c \uc790\uc8fc \uc0ac\uc6a9\ud558\ub294 \uba85\ub839\uc5b4\ub4e4\uc744 \ud559\uc2b5")),(0,c.kt)("h3",{id:"docker-run--\ub3c4\ucee4\ub97c-\uad6c\ub3d9\ud558\ub294-\uba85\ub839\uc5b4"},"docker run : \ub3c4\ucee4\ub97c \uad6c\ub3d9\ud558\ub294 \uba85\ub839\uc5b4"),(0,c.kt)("p",null,"\ud568\uaed8 \uc0ac\uc6a9\ud560 \uc218 \uc788\ub294 \uc635\uc158\uc740 \ub2e4\uc74c\uacfc \uac19\ub2e4."),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("p",{parentName:"li"},"-i : \ud0a4\ubcf4\ub4dc \uc785\ub825\uc744 \ucee8\ud14c\uc774\ub108\uc758 \ud45c\uc900 \uc785\ub825\uc5d0 \uc5f0\uacb0\ud558\uc5ec \ud0a4\ubcf4\ub4dc \uc785\ub825\uc744 \ucee8\ud14c\uc774\ub108\uc5d0\uac8c \ubcf4\ub0b8\ub2e4.")),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("p",{parentName:"li"},"-t : \ud130\ubbf8\ub110\uc744 \ud1b5\ud574 \ub300\ud654\ud615 \uc870\uc791\uc774 \uac00\ub2a5\ud558\uac8c \ub9cc\ub4e0\ub2e4. (\uadf8\ub798\uc11c \ubcf4\ud1b5 -it\ub85c \ubd99\uc5ec\uc11c \ub9ce\uc774 \uc4f4\ub2e4.)")),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("p",{parentName:"li"},"-d : \ubc31\uadf8\ub77c\uc6b4\ub4dc\ub85c \ucee8\ud14c\uc774\ub108\ub97c \ub3cc\ub824 \ud130\ubbf8\ub110\uacfc \uc5f0\uacb0\ud558\uc9c0 \uc54a\uac8c \ud55c\ub2e4.")),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("p",{parentName:"li"},"--name : \ucee8\ud14c\uc774\ub108\uc758 \uc774\ub984\uc744 \uc124\uc815\ud55c\ub2e4.")),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("p",{parentName:"li"},"--rm : \ucee8\ud14c\uc774\ub108\uac00 \uc885\ub8cc\ud558\uba74 \uc790\ub3d9\uc73c\ub85c \ucee8\ud14c\uc774\ub108 \ud504\ub85c\uc138\uc2a4\ub97c \uc885\ub8cc\uc2dc\ud0a8\ub2e4."))),(0,c.kt)("h3",{id:"docker-ps--\ucee8\ud14c\uc774\ub108-\uc0c1\ud0dc-\ucd9c\ub825"},"docker ps : \ucee8\ud14c\uc774\ub108 \uc0c1\ud0dc \ucd9c\ub825"),(0,c.kt)("h3",{id:"docker-logs--\ucee8\ud14c\uc774\ub108-\ub85c\uadf8-\ucd9c\ub825"},"docker logs : \ucee8\ud14c\uc774\ub108 \ub85c\uadf8 \ucd9c\ub825"),(0,c.kt)("h3",{id:"docker-stop-kill--\ucee8\ud14c\uc774\ub108-\uc911\uc9c0-\uc0ad\uc81c"},"docker stop, kill : \ucee8\ud14c\uc774\ub108 \uc911\uc9c0, \uc0ad\uc81c"),(0,c.kt)("p",null,"\ub0b4\uac00 \uc790\uc8fc \uc4f0\ub294 \uba85\ub839\uc5b4\uc778\ub370 \uc5ec\ub7ec \ucee8\ud14c\uc774\ub108\ub97c \ubaa8\ub450 \ub2e4 \ud55c\ubc29\uc5d0 \uc8fd\uc77c \ub54c \uc8fc\ub85c \uc0ac\uc6a9\ud55c\ub2e4."),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"docker rm `docker ps -a -q`\n")),(0,c.kt)("h3",{id:"docker-start--\ucee8\ud14c\uc774\ub108-\uc7ac\uac00\ub3d9"},"docker start : \ucee8\ud14c\uc774\ub108 \uc7ac\uac00\ub3d9"),(0,c.kt)("p",null,"\uc815\uc9c0\uc0c1\ud0dc\uc778 \ucee8\ud14c\uc774\ub108 \uc7ac \uad6c\ub3d9 \uc2dc \uc0ac\uc6a9\ud558\ub294 \uba85\ub839\uc5b4\uc774\ub2e4."),(0,c.kt)("h3",{id:"docker-commit--\ucee8\ud14c\uc774\ub108\uc758-\ubcc0\uacbd-\uc0ac\ud56d\uc744-\ub808\ud3ec\uc9c0\ud1a0\ub9ac\uc5d0-\uc800\uc7a5"},"docker commit : \ucee8\ud14c\uc774\ub108\uc758 \ubcc0\uacbd \uc0ac\ud56d\uc744 \ub808\ud3ec\uc9c0\ud1a0\ub9ac\uc5d0 \uc800\uc7a5"),(0,c.kt)("p",null,(0,c.kt)("inlineCode",{parentName:"p"},"docker commit [\uc635\uc158] \ucee8\ud14c\uc774\ub108 ID | \ucee8\ud14c\uc774\ub108\uba85 \ub9ac\ud3ec\uc9c0\ud1a0\ub9ac\uba85:[:\ud0dc\uadf8]"),"\ub97c \uc2e4\ud589\ud558\uba74 \ud604\uc7ac \ucee8\ud14c\uc774\ub108\uc758 \uc0c1\ud0dc\ub97c \uc774\ubbf8\uc9c0\ub85c \ub9cc\ub4e4\uc5b4\ub454\ub2e4."),(0,c.kt)("p",null,"\uc774\ubbf8 \uae30\uc874\uc5d0 \uc874\uc7ac\ud558\ub294 \uc774\ubbf8\uc9c0\uac00 \uc788\ub2e4\uba74 \ud604\uc7ac \ub3c4\ucee4 \ucee8\ud14c\uc774\ub108\uc758 \uc0c1\ud0dc\ub85c \uc774\ubbf8\uc9c0\ub97c ",(0,c.kt)("strong",{parentName:"p"},"\uc5c5\ub370\uc774\ud2b8")," \ud55c\ub2e4."),(0,c.kt)("h3",{id:"docker-push--\uc774\ubbf8\uc9c0\ub97c-\uc6d0\uaca9-\ub808\ud3ec\uc9c0\ud1a0\ub9ac\uc5d0-\ubcf4\uad00"},"docker push : \uc774\ubbf8\uc9c0\ub97c \uc6d0\uaca9 \ub808\ud3ec\uc9c0\ud1a0\ub9ac\uc5d0 \ubcf4\uad00"),(0,c.kt)("h2",{id:"reference"},"Reference"),(0,c.kt)("p",null,(0,c.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/43809168/101032998-6684c380-35bd-11eb-8ba7-a784fd46b37a.png",alt:"k8s"})),(0,c.kt)("p",null,"15\ub2e8\uacc4\ub85c \ubc30\uc6b0\ub294 \ub3c4\ucee4\uc640 \ucfe0\ubc84\ub124\ud2f0\uc2a4 - \ud0c0\uce74\ub77c \ub9c8\ud638 \uc800\uc11c"))}p.isMDXComponent=!0}}]);