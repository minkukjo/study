(self.webpackChunkstudy=self.webpackChunkstudy||[]).push([[6842],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(r),f=o,m=d["".concat(u,".").concat(f)]||d[f]||l[f]||a;return r?n.createElement(m,c(c({ref:t},p),{},{components:r})):n.createElement(m,c({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var s=2;s<a;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8630:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return c},metadata:function(){return i},toc:function(){return u},default:function(){return p}});var n=r(2122),o=r(9756),a=(r(7294),r(3905)),c={id:"05-docker-deeper",title:"05. \ub3c4\ucee4 \uc774\ud574\ud558\uae30"},i={unversionedId:"kubernetes/15steps/05-docker-deeper",id:"kubernetes/15steps/05-docker-deeper",isDocsHomePage:!1,title:"05. \ub3c4\ucee4 \uc774\ud574\ud558\uae30",description:"\ub3c4\ucee4\ub97c \uc870\uae08 \ub354 \uae4a\uc774 \uc774\ud574",source:"@site/docs/kubernetes/15steps/05-docker-deeper.md",sourceDirName:"kubernetes/15steps",slug:"/kubernetes/15steps/05-docker-deeper",permalink:"/study/docs/kubernetes/15steps/05-docker-deeper",editUrl:"https://github.com/minkukjo/study/edit/master/docs/kubernetes/15steps/05-docker-deeper.md",version:"current",lastUpdatedAt:1622260374,formattedLastUpdatedAt:"5/29/2021",sidebarPosition:5,frontMatter:{id:"05-docker-deeper",title:"05. \ub3c4\ucee4 \uc774\ud574\ud558\uae30"},sidebar:"main",previous:{title:"04. \ub3c4\ucee4 \uba85\ub839\uc5b4",permalink:"/study/docs/kubernetes/15steps/04-docker-command"},next:{title:"06. \ucee8\ud14c\uc774\ub108 \uac1c\ubc1c",permalink:"/study/docs/kubernetes/15steps/06-dockerfile"}},u=[{value:"\uc5ec\ub7ec \ud130\ubbf8\ub110\uc5d0\uc11c \uc870\uc791\ud558\uae30",id:"\uc5ec\ub7ec-\ud130\ubbf8\ub110\uc5d0\uc11c-\uc870\uc791\ud558\uae30",children:[]},{value:"\ub85c\uadf8\uc778\uc744 \uad00\ub9ac\ud558\uc9c0 \uc54a\ub294 \ucee8\ud14c\uc774\ub108",id:"\ub85c\uadf8\uc778\uc744-\uad00\ub9ac\ud558\uc9c0-\uc54a\ub294-\ucee8\ud14c\uc774\ub108",children:[]},{value:"\ud638\uc2a4\ud2b8\uc640 \ucee8\ud14c\uc774\ub108\uc758 \uad00\uacc4",id:"\ud638\uc2a4\ud2b8\uc640-\ucee8\ud14c\uc774\ub108\uc758-\uad00\uacc4",children:[]},{value:"Reference",id:"reference",children:[]}],s={toc:u};function p(e){var t=e.components,r=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\ub3c4\ucee4\ub97c \uc870\uae08 \ub354 \uae4a\uc774 \uc774\ud574")),(0,a.kt)("h3",{id:"\uc5ec\ub7ec-\ud130\ubbf8\ub110\uc5d0\uc11c-\uc870\uc791\ud558\uae30"},"\uc5ec\ub7ec \ud130\ubbf8\ub110\uc5d0\uc11c \uc870\uc791\ud558\uae30"),(0,a.kt)("p",null,"2\uac1c \uc774\uc0c1\uc758 \ud130\ubbf8\ub110\uc5d0\uc11c \ud558\ub098\uc758 \ucee8\ud14c\uc774\ub108\uc5d0 \uc811\uc18d\ud558\uc5ec \uc791\uc5c5\uc744 \uc218\ud589\ud560 \uc218 \uc788\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -it --name test centos:7 /bin/bash\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"// \uc0c8\ub85c\uc6b4 \ud130\ubbf8\ub110 \ud504\ub85c\uc138\uc2a4 \uc0dd\uc131\ndocker exec --it test /bin/bash\n")),(0,a.kt)("h3",{id:"\ub85c\uadf8\uc778\uc744-\uad00\ub9ac\ud558\uc9c0-\uc54a\ub294-\ucee8\ud14c\uc774\ub108"},"\ub85c\uadf8\uc778\uc744 \uad00\ub9ac\ud558\uc9c0 \uc54a\ub294 \ucee8\ud14c\uc774\ub108"),(0,a.kt)("p",null,"\ub9ac\ub205\uc2a4 \uc11c\ubc84\uc5d0\ub294 w \uba85\ub839\uc5b4\ub85c \ub3d9\uc2dc\uc5d0 \ub85c\uadf8\uc778\ud55c \ub2e4\ub978 \uc720\uc800\uc758 \uc815\ubcf4\ub97c \uc5bb\uc744 \uc218 \uc788\ub2e4."),(0,a.kt)("p",null,"\uadf8\ub7ec\ub098 \ucee8\ud14c\uc774\ub108\ub294 \uae30\ubcf8\uc801\uc73c\ub85c \ub85c\uadf8\uc778\uc744 \ud1b5\ud55c \uc720\uc800 \uc778\uc99d \uae30\ub2a5\uc774 \uc5c6\uc73c\uba70, \uc720\uc800 \uc790\uccb4\ub97c \uad00\ub9ac\ud558\uc9c0 \uc54a\ub294\ub2e4."),(0,a.kt)("p",null,"\ub9ac\ub205\uc2a4\ub294 \uae30\ubcf8\uc801\uc73c\ub85c \uba40\ud2f0 \uc720\uc800\uc6a9\uc73c\ub85c \uac1c\ubc1c\ub418\uc5c8\uc9c0\ub9cc \ucee8\ud14c\uc774\ub108\ub294 \uc2f1\uae00 \uc720\uc800\uc6a9\uc73c\ub85c \ub9cc\ub4e4\uae30 \uc704\ud574 \ud574\ub2f9 \uae30\ub2a5\uc744 \uc81c\uac70\ud558\uc600\ub2e4."),(0,a.kt)("h3",{id:"\ud638\uc2a4\ud2b8\uc640-\ucee8\ud14c\uc774\ub108\uc758-\uad00\uacc4"},"\ud638\uc2a4\ud2b8\uc640 \ucee8\ud14c\uc774\ub108\uc758 \uad00\uacc4"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\ud3ec\ud2b8\ub97c \uc5f4\uc9c0 \uc54a\uc73c\uba74 \ud638\uc2a4\ud2b8\uc758 \uc678\ubd80\uc5d0\uc11c \ucee8\ud14c\uc774\ub108\uc5d0 \uc811\uc18d\ud560 \uc218 \uc5c6\ub2e4.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\ucee8\ud14c\uc774\ub108\ub294 \ud638\uc2a4\ud2b8\uc758 \ucee4\ub110\uc744 \uacf5\uc720\ud558\ub294 \ub9ac\ub205\uc2a4 \ud504\ub85c\uc138\uc2a4\ub2e4."))),(0,a.kt)("h2",{id:"reference"},"Reference"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/43809168/101032998-6684c380-35bd-11eb-8ba7-a784fd46b37a.png",alt:"k8s"})),(0,a.kt)("p",null,"15\ub2e8\uacc4\ub85c \ubc30\uc6b0\ub294 \ub3c4\ucee4\uc640 \ucfe0\ubc84\ub124\ud2f0\uc2a4 - \ud0c0\uce74\ub77c \ub9c8\ud638 \uc800\uc11c"))}p.isMDXComponent=!0}}]);