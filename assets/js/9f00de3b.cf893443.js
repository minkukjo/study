(self.webpackChunkstudy=self.webpackChunkstudy||[]).push([[9194],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return i},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},i=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,p=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),k=u(r),d=o,m=k["".concat(p,".").concat(d)]||k[d]||c[d]||s;return r?n.createElement(m,a(a({ref:t},i),{},{components:r})):n.createElement(m,a({ref:t},i))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,a=new Array(s);a[0]=k;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var u=2;u<s;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},9316:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return a},metadata:function(){return l},toc:function(){return p},default:function(){return i}});var n=r(2122),o=r(9756),s=(r(7294),r(3905)),a={id:"17-storage",title:"17. \uc2a4\ud1a0\ub9ac\uc9c0"},l={unversionedId:"kubernetes/15steps/17-storage",id:"kubernetes/15steps/17-storage",isDocsHomePage:!1,title:"17. \uc2a4\ud1a0\ub9ac\uc9c0",description:"\ucfe0\ubc84\ub124\ud2f0\uc2a4\uc758 \uc2a4\ud1a0\ub9ac\uc9c0\uc5d0 \ub300\ud558\uc5ec",source:"@site/docs/kubernetes/15steps/17-storage.md",sourceDirName:"kubernetes/15steps",slug:"/kubernetes/15steps/17-storage",permalink:"/study/docs/kubernetes/15steps/17-storage",editUrl:"https://github.com/minkukjo/study/edit/master/docs/kubernetes/15steps/17-storage.md",version:"current",lastUpdatedAt:1622260374,formattedLastUpdatedAt:"5/29/2021",sidebarPosition:17,frontMatter:{id:"17-storage",title:"17. \uc2a4\ud1a0\ub9ac\uc9c0"},sidebar:"mySidebar",previous:{title:"16. \uc778\uadf8\ub808\uc2a4 \uae30\ub2a5",permalink:"/study/docs/kubernetes/15steps/16-ingress-deeper"},next:{title:"18. Job\uacfc Cron Job",permalink:"/study/docs/kubernetes/15steps/18-job"}},p=[{value:"\uc2a4\ud1a0\ub9ac\uc9c0",id:"\uc2a4\ud1a0\ub9ac\uc9c0",children:[]},{value:"\uc2a4\ud1a0\ub9ac\uc9c0\uc758 \uc885\ub958\uc640 \ud074\ub7ec\uc2a4\ud130 \uad6c\uc131",id:"\uc2a4\ud1a0\ub9ac\uc9c0\uc758-\uc885\ub958\uc640-\ud074\ub7ec\uc2a4\ud130-\uad6c\uc131",children:[]},{value:"\uc2a4\ud1a0\ub9ac\uc9c0 \uc2dc\ud2b8\ud15c\uc758 \ubc29\uc2dd",id:"\uc2a4\ud1a0\ub9ac\uc9c0-\uc2dc\ud2b8\ud15c\uc758-\ubc29\uc2dd",children:[]},{value:"\uc2a4\ud1a0\ub9ac\uc9c0\uc758 \ucd94\uc0c1\ud654\uc640 \uc790\ub3d9\ud654",id:"\uc2a4\ud1a0\ub9ac\uc9c0\uc758-\ucd94\uc0c1\ud654\uc640-\uc790\ub3d9\ud654",children:[{value:"\ub3d9\uc801 \ud504\ub85c\ube44\uc800\ub2dd\uc744 \ud558\ub294 \uacbd\uc6b0",id:"\ub3d9\uc801-\ud504\ub85c\ube44\uc800\ub2dd\uc744-\ud558\ub294-\uacbd\uc6b0",children:[]},{value:"\uc218\ub3d9\uc73c\ub85c \uc2a4\ud1a0\ub9ac\uc9c0\ub97c \uc0dd\uc131\ud558\ub294 \uacbd\uc6b0",id:"\uc218\ub3d9\uc73c\ub85c-\uc2a4\ud1a0\ub9ac\uc9c0\ub97c-\uc0dd\uc131\ud558\ub294-\uacbd\uc6b0",children:[]}]},{value:"Reference",id:"reference",children:[]}],u={toc:p};function i(e){var t=e.components,r=(0,o.Z)(e,["components"]);return(0,s.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"\ucfe0\ubc84\ub124\ud2f0\uc2a4\uc758 \uc2a4\ud1a0\ub9ac\uc9c0\uc5d0 \ub300\ud558\uc5ec")),(0,s.kt)("h2",{id:"\uc2a4\ud1a0\ub9ac\uc9c0"},"\uc2a4\ud1a0\ub9ac\uc9c0"),(0,s.kt)("p",null,"k8s\uc5d0 \ubc30\ud3ec\ud55c \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc774 \ub370\uc774\ud130\ub97c \ubcf4\uc874\ud558\uae30 \uc704\ud574\uc11c\ub294 \ub0b4\ubd80 \ub610\ub294 \uc678\ubd80\uc758 \uc2a4\ud1a0\ub9ac\uc9c0 \uc2dc\uc2a4\ud15c\uacfc \uc5f0\uacb0\ud558\uc5ec \ud37c\uc2dc\ud2b8\ud134\ud2b8 \ubcfc\ub968\uc744 \uc0ac\uc6a9\ud574\uc57c\ud55c\ub2e4."),(0,s.kt)("p",null,"\ub370\uc774\ud130\uc758 \ubd84\uc2e4, \ud30c\uc190, \ubcc0\uacbd\ub4f1\uc744 \ub9c9\uae30 \uc704\ud574 \ub370\uc774\ud130\ub97c \ubcf4\uc874\ud558\uae30 \uc704\ud574 k8s\uc758 \uc2a4\ud1a0\ub9ac\uc9c0\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub2e4."),(0,s.kt)("p",null,"\ud37c\uc2dc\ud2b8\ud134\ud2b8 \ubcfc\ub968\uc5d0\uc11c ",(0,s.kt)("strong",{parentName:"p"},"\ud37c\uc2dc\uc2a4\ud134\ud2b8"),"\ub294 \ucee8\ud14c\uc774\ub108\ub098 \ud30c\ub4dc\uac00 \uc885\ub8cc\ub418\ub354\ub77c\ub3c4 \ub370\uc774\ud130\uac00 \uc720\uc2e4\ub418\uc9c0 \uc54a\ub294 \uac83\uc744 \uc758\ubbf8\ud558\uba70,"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"\ubcfc\ub968"),"\uc774\ub780 \uc678\ubd80 \uc2a4\ud1a0\ub9ac\uc9c0\uc758 \ub17c\ub9ac\uc801 \ubcfc\ub968\uc744 \ucee8\ud14c\uc774\ub108\uc5d0 \ub9c8\uc6b4\ud2b8\ud558\ub294 \uac83\uc744 \uc758\ubbf8\ud55c\ub2e4."),(0,s.kt)("h2",{id:"\uc2a4\ud1a0\ub9ac\uc9c0\uc758-\uc885\ub958\uc640-\ud074\ub7ec\uc2a4\ud130-\uad6c\uc131"},"\uc2a4\ud1a0\ub9ac\uc9c0\uc758 \uc885\ub958\uc640 \ud074\ub7ec\uc2a4\ud130 \uad6c\uc131"),(0,s.kt)("p",null,"\ucfe0\ubc84\ub124\ud2f0\uc2a4\u3147\uc5d0\uc11c\ub294 \ud074\ub7ec\uc2a4\ud130 \ub0b4\ubd80\uc5d0\uc11c \ube60\ub974\uac8c \uc77d\uace0 \uc4f8 \uc218 \uc788\ub294 ",(0,s.kt)("strong",{parentName:"p"},"\ub0b4\ubd80 \ubcfc\ub968"),"\uc774 \uc874\uc7ac\ud55c\ub2e4."),(0,s.kt)("p",null,"\ub178\ub4dc \ub0b4\ubd80\uc5d0\uc11c \uac04\ub2e8\ud558\uac8c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub294 \ubcfc\ub968\uc740 emptryDir\uacfc hostPath\uac00 \uc788\ub2e4."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"emptyDir"),"\uc740 \ub178\ub4dc\uc758 \ub514\uc2a4\ud06c\ub97c \ud30c\ub4dc\uac00 \uc77c\uc2dc\uc801\uc73c\ub85c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub294 \ubc29\ubc95\uc778\ub370, \ub2e8\uc810\uc740 \uac19\uc740 \ud30c\ub4dc\uc758 \ucee8\ud14c\uc774\ub108 \uac04\uc5d0\ub294 \ubcfc\ub968\uc744 \uacf5\uc720\ud560 \uc218 \uc788\uc73c\ub098 \ub2e4\ub978 \ud30c\ub4dc\uc5d0\uc11c\ub294 \uc811\uadfc\ud560 \uc218 \uc5c6\ub2e4\ub294 \ub2e8\uc810\uc774 \uc788\ub2e4."),(0,s.kt)("p",null,"\uadf8\ub9ac\uace0 \ud30c\ub4dc\uac00 \uc885\ub8cc\ud558\uba74 emptyDir\uc740 \uc0ad\uc81c\ub41c\ub2e4. \uc989 \uc774 \uc800\uc7a5\uacf5\uac04\uc740 \ud30c\ub4dc\uc640 \uc0dd\uba85\uc8fc\uae30\ub97c \ud568\uaed8\ud558\uba70, \uc77c\uc2dc\uc801\uc778 \ub370\uc774\ud130 \uc800\uc7a5 \uacf5\uac04\uc73c\ub85c\uc368\uc758 \uc6a9\ub3c4\ub97c \uac16\ub294\ub2e4."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"hostPath"),"\ub294 \ub3d9\uc77c\ud558\uac8c \ub178\ub4dc\uc758 \ub514\uc2a4\ud06c\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc9c0\ub9cc, \uac19\uc740 \ub178\ub4dc\uc5d0 \ubc30\ud3ec\ub41c \uc11c\ub85c \ub2e4\ub978 \ud30c\ub4dc\uc5d0\uc11c \ubcfc\ub968\uc744 \uacf5\uc720\ud574 \uc0ac\uc6a9\ud560 \uc218 \uc788\ub2e4."),(0,s.kt)("p",null,"\ub610\ud55c ",(0,s.kt)("strong",{parentName:"p"},"emptyDir"),"\uacfc\ub294 \ub2ec\ub9ac \ud30c\ub4dc\uc758 \uc0dd\uba85\uc8fc\uae30\ub97c \ud568\uaed8\ud558\uc9c0 \uc54a\ub294\ub2e4."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"hostPath"),"\ub294 \ub2e4\ub978 \ub178\ub4dc\uac04\uc758 \uacf5\uc720\uac00 \ub418\uc9c0\uc54a\uace0, \ub178\ub4dc\uac00 \uc815\uc9c0\ud558\uba74 \ub370\uc774\ud130\uc5d0 \uc811\uadfc\ud560 \uc218 \uc5c6\uc73c\ubbc0\ub85c, \uc678\ubd80 \uc2a4\ud1a0\ub9ac\uc9c0\uac00 \uad6c\ucd95\ub418\uae30 \uc804 \uac04\ub2e8\ud558\uac8c \uc0ac\uc6a9\ud558\ub294 \uc6a9\ub3c4\ub85c \uc0ac\uc6a9\ub41c\ub2e4."),(0,s.kt)("h2",{id:"\uc2a4\ud1a0\ub9ac\uc9c0-\uc2dc\ud2b8\ud15c\uc758-\ubc29\uc2dd"},"\uc2a4\ud1a0\ub9ac\uc9c0 \uc2dc\ud2b8\ud15c\uc758 \ubc29\uc2dd"),(0,s.kt)("p",null,"\ucfe0\ubc84\ub124\ud2f0\uc2a4\uc758 API\ub85c \uc9c0\uc815\ud560 \uc218 \uc788\ub294 \ub300\ud45c\uc801\uc778 \ud37c\uc2dc\uc2a4\ud134\ud2b8 \ubcfc\ub968\uc744 \uc0b4\ud3b4\ubcf4\uc790."),(0,s.kt)("p",null,"k8s \ub178\ub4dc\uc5d0\uc11c \uc0ac\uc6a9\ud558\ub294 \uc2a4\ud1a0\ub9ac\uc9c0\ub85c\ub294 hostPath\uc640 local(\ub178\ub4dc\uc758 \ub514\uc2a4\ud06c \ub9c8\uc6b4\ud2b8)\uac00 \uc788\ub2e4."),(0,s.kt)("p",null,"OSS(\uc624\ud508 \uc18c\uc2a4 \uc18c\ud504\ud2b8\uc6e8\uc5b4)\ub294 \ubcc4\ub3c4 \uc2dc\uc2a4\ud15c\uc744 \uad6c\uc131\ud574\uc57c\ud558\ub294\ub370, ISCSI(ISCSI \ub514\uc2a4\ud06c\ub97c \ub9c8\uc6b4\ud2b8)\uc640 NFS(NFS\uc758 \ud30c\uc77c \uc2dc\uc2a4\ud15c \ub9c8\uc6b4\ud2b8), GlusterFS(SDS \uc911 \ud558\ub098\uc778 GlusterFS\uc758 \ub17c\ub9ac \ubcfc\ub968\uc744 \ub9c8\uc6b4\ud2b8)\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub2e4."),(0,s.kt)("p",null,"\uadf8 \uc678\uc5d0 \ud074\ub77c\uc6b0\ub4dc \uc11c\ube44\uc2a4\uc5d0\uc11c \uc81c\uacf5\ud558\ub294 \uc2a4\ud1a0\ub9ac\uc9c0\ub4e4\uc774 \uc788\uc73c\uba70 GCP\uc758 \uacbd\uc6b0 gcpPersistentDisk\ub97c \uc0ac\uc6a9\ud558\ub294\ub370, GCE \ub514\uc2a4\ud06c\ub97c \ub9c8\uc6b4\ud2b8\ud558\ub294 \ubc29\uc2dd\uc774\ub2e4."),(0,s.kt)("h2",{id:"\uc2a4\ud1a0\ub9ac\uc9c0\uc758-\ucd94\uc0c1\ud654\uc640-\uc790\ub3d9\ud654"},"\uc2a4\ud1a0\ub9ac\uc9c0\uc758 \ucd94\uc0c1\ud654\uc640 \uc790\ub3d9\ud654"),(0,s.kt)("p",null,"\ud30c\ub4dc\uc0c1\uc758 \ucee8\ud14c\uc774\ub108\ub294 \uacf5\ud1b5\ub41c \uc815\uc758 \ubc29\ubc95\uc5d0 \ub530\ub77c \ud37c\uc2a4\ud134\ud2b8 \ubcfc\ub968\uc744 \ub9c8\uc6b4\ud2b8\ud560 \uc218 \uc788\ub2e4."),(0,s.kt)("p",null,"k8s\uc5d0\uc11c\ub294 \uc774\ub97c \uc704\ud55c \ucd94\uc0c1\ud654 \ub808\uc774\uc5b4\uc758 \uc624\ube0c\uc81d\ud2b8 PVC\ub97c \uc81c\uacf5\ud558\uba70 \uc774 PVC\ub355\ubd84\uc5d0 \uc6b0\ub9ac\ub294 \uc2a4\ud1a0\ub9ac\uc9c0 \uc2dc\uc2a4\ud15c\uc758 \uc0c1\uc138\ud55c \ud30c\ub77c\ubbf8\ud130\ub97c \uc124\uc815\ud558\uc9c0 \uc54a\ub354\ub77c\ub3c4, \ub9e4\ub2c8\ud398\uc2a4\ud2b8\uc758 \ud30c\ub4dc \ud15c\ud50c\ub9bf\uc5d0 \uac04\ub2e8\ud788 \uae30\uc220\ud558\ub294 \uac83 \ub9cc\uc73c\ub85c \ud37c\uc2dc\uc2a4\ud134\ud2b8 \ubcfc\ub968\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc788\ub2e4."),(0,s.kt)("p",null,"\uc774\ub97c \ud750\ub984\uc73c\ub85c \ub098\ud0c0\ub0b4\ubcf4\uba74 \ub2e4\uc74c\uacfc \uac19\ub2e4."),(0,s.kt)("h3",{id:"\ub3d9\uc801-\ud504\ub85c\ube44\uc800\ub2dd\uc744-\ud558\ub294-\uacbd\uc6b0"},"\ub3d9\uc801 \ud504\ub85c\ube44\uc800\ub2dd\uc744 \ud558\ub294 \uacbd\uc6b0"),(0,s.kt)("img",{width:"1886",alt:"\u1109\u1173\u110f\u1173\u1105\u1175\u11ab\u1109\u1163\u11ba 2021-01-27 \u110b\u1169\u1112\u116e 11 08 41",src:"https://user-images.githubusercontent.com/43809168/106002620-b29f4080-60f4-11eb-8213-de43c253fe9f.png"}),(0,s.kt)("h3",{id:"\uc218\ub3d9\uc73c\ub85c-\uc2a4\ud1a0\ub9ac\uc9c0\ub97c-\uc0dd\uc131\ud558\ub294-\uacbd\uc6b0"},"\uc218\ub3d9\uc73c\ub85c \uc2a4\ud1a0\ub9ac\uc9c0\ub97c \uc0dd\uc131\ud558\ub294 \uacbd\uc6b0"),(0,s.kt)("img",{width:"1888",alt:"\u1109\u1173\u110f\u1173\u1105\u1175\u11ab\u1109\u1163\u11ba 2021-01-27 \u110b\u1169\u1112\u116e 11 10 11",src:"https://user-images.githubusercontent.com/43809168/106002743-d2ceff80-60f4-11eb-97b2-08519f54e16b.png"}),(0,s.kt)("p",null,"\uc5ec\uae30\uc11c \ub3d9\uc801\uc774\ub4e0 \uc218\ub3d9\uc774\ub4e0 \uc911\uc694\ud55c \uac83\uc740 ",(0,s.kt)("strong",{parentName:"p"},"\ucd94\uc0c1\ud654\ub97c \uc704\ud55c k8s \uc624\ube0c\uc81d\ud2b8"),"\ub294 ",(0,s.kt)("strong",{parentName:"p"},"Persistent Volume Claim"),"\uacfc ",(0,s.kt)("strong",{parentName:"p"},"Persistent Volume"),"\uc774 \uc911\uc2ec\uc774\ub77c\ub294 \uac83\uc774\ub2e4."),(0,s.kt)("p",null,"PVC\ub97c \uc791\uc131\ud574\ub193\uace0 \ud30c\ub4dc\uc758 \ub9e4\ub2c8\ud398\uc2a4\ud2b8\uc5d0 PVC\uc758 \uc774\ub984\uc744 \uae30\uc220\ud558\uae30\ub9cc \ud558\uba74 \ucee8\ud14c\uc774\ub108\uac00 \ud37c\uc2dc\uc2a4\ud134\ud2b8 \ubcfc\ub968\uc744 \ub9c8\uc6b4\ud2b8\ud55c\ub2e4."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"\ub3d9\uc801 \ud504\ub85c\ube44\uc800\ub2dd"),"\uc758 \uacbd\uc6b0 \ucfe0\ubc84\ub124\ud2f0\uc2a4\uac00 \uc678\ubd80 \uc2a4\ud1a0\ub9ac\uc9c0 \uc2dc\uc2a4\ud15c\uc758 API\ub97c \uc0ac\uc6a9\ud558\uc5ec \ubcfc\ub968\uc744 \uc790\ub3d9\uc73c\ub85c \uc900\ube44\ud558\ub294 \ubc29\ubc95\uc5d0 \ud574\ub2f9\ud55c\ub2e4."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"\uc218\ub3d9 \uc2a4\ud1a0\ub9ac\uc9c0 \uc0dd\uc131"),"\uc740 \uc678\ubd80 \uc2a4\ud1a0\ub9ac\uc9c0 \uc2dc\uc2a4\ud15c\uc758 \uc124\uc815\uc744 \uc9c1\uc811 \uc9c4\ud589\ud558\ub294 \ubc29\ubc95\uc5d0 \ud574\ub2f9\ud55c\ub2e4."),(0,s.kt)("h2",{id:"reference"},"Reference"),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/43809168/101032998-6684c380-35bd-11eb-8ba7-a784fd46b37a.png",alt:"k8s"})),(0,s.kt)("p",null,"15\ub2e8\uacc4\ub85c \ubc30\uc6b0\ub294 \ub3c4\ucee4\uc640 \ucfe0\ubc84\ub124\ud2f0\uc2a4 - \ud0c0\uce74\ub77c \ub9c8\ud638 \uc800\uc11c"))}i.isMDXComponent=!0}}]);