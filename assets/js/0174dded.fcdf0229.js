(self.webpackChunkstudy=self.webpackChunkstudy||[]).push([[5443],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return o},kt:function(){return k}});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},o=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,i=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),m=u(n),k=l,d=m["".concat(i,".").concat(k)]||m[k]||c[k]||a;return n?r.createElement(d,s(s({ref:t},o),{},{components:n})):r.createElement(d,s({ref:t},o))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,s=new Array(a);s[0]=m;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:l,s[1]=p;for(var u=2;u<a;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5785:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return p},toc:function(){return i},default:function(){return o}});var r=n(2122),l=n(9756),a=(n(7294),n(3905)),s={id:"14-statefulset",title:"14. \uc2a4\ud14c\uc774\ud2b8\ud480\uc14b"},p={unversionedId:"kubernetes/15steps/14-statefulset",id:"kubernetes/15steps/14-statefulset",isDocsHomePage:!1,title:"14. \uc2a4\ud14c\uc774\ud2b8\ud480\uc14b",description:"\ucfe0\ubc84\ub124\ud2f0\uc2a4\uc758 \uc2a4\ud14c\uc774\ud2b8\ud480\uc14b\uc5d0 \ub300\ud558\uc5ec",source:"@site/docs/kubernetes/15steps/14-statefulset.md",sourceDirName:"kubernetes/15steps",slug:"/kubernetes/15steps/14-statefulset",permalink:"/study/docs/kubernetes/15steps/14-statefulset",editUrl:"https://github.com/minkukjo/study/edit/master/docs/kubernetes/15steps/14-statefulset.md",version:"current",lastUpdatedAt:1622260374,formattedLastUpdatedAt:"5/29/2021",sidebarPosition:14,frontMatter:{id:"14-statefulset",title:"14. \uc2a4\ud14c\uc774\ud2b8\ud480\uc14b"},sidebar:"mySidebar",previous:{title:"13. \ub514\ud50c\ub85c\uc774\uba3c\ud2b8",permalink:"/study/docs/kubernetes/15steps/13-deplyoment"},next:{title:"15. \uc624\ud1a0\uc2a4\ucf00\uc77c",permalink:"/study/docs/kubernetes/15steps/15-autoscale"}},i=[{value:"\uc2a4\ud14c\uc774\ud2b8\ud480\uc14b",id:"\uc2a4\ud14c\uc774\ud2b8\ud480\uc14b",children:[]},{value:"\ub514\ud50c\ub85c\uc774\uba3c\ud2b8\uc640\uc758 \ucc28\uc774",id:"\ub514\ud50c\ub85c\uc774\uba3c\ud2b8\uc640\uc758-\ucc28\uc774",children:[{value:"\ud30c\ub4dc\uc758 \uc774\ub984\uacfc \ud37c\uc2dc\uc2a4\ud134\ud2b8 \ubcfc\ub968\uc758 \uc774\ub984",id:"\ud30c\ub4dc\uc758-\uc774\ub984\uacfc-\ud37c\uc2dc\uc2a4\ud134\ud2b8-\ubcfc\ub968\uc758-\uc774\ub984",children:[]},{value:"\uc11c\ube44\uc2a4\uc758 \uc5f0\uacb0 \ubc0f \uc774\ub984 \ud574\uacb0",id:"\uc11c\ube44\uc2a4\uc758-\uc5f0\uacb0-\ubc0f-\uc774\ub984-\ud574\uacb0",children:[]},{value:"\ud30c\ub4dc \ubd84\uc2e4 \uc2dc \ub3d9\uc791",id:"\ud30c\ub4dc-\ubd84\uc2e4-\uc2dc-\ub3d9\uc791",children:[]},{value:"\ub178\ub4dc \uc815\uc9c0 \uc2dc\uc758 \ub3d9\uc791",id:"\ub178\ub4dc-\uc815\uc9c0-\uc2dc\uc758-\ub3d9\uc791",children:[]},{value:"\ud30c\ub4dc \uc21c\ubc88 \uc81c\uc5b4",id:"\ud30c\ub4dc-\uc21c\ubc88-\uc81c\uc5b4",children:[]},{value:"\ub9e4\ub2c8\ud398\uc2a4\ud2b8 \uc791\uc131\ubc95",id:"\ub9e4\ub2c8\ud398\uc2a4\ud2b8-\uc791\uc131\ubc95",children:[]}]},{value:"\ub178\ub4dc \uc7a5\uc560 \uc2dc\uc758 \ub3d9\uc791",id:"\ub178\ub4dc-\uc7a5\uc560-\uc2dc\uc758-\ub3d9\uc791",children:[{value:"\ud575\uc2ec \uc694\uc57d",id:"\ud575\uc2ec-\uc694\uc57d",children:[]}]},{value:"Reference",id:"reference",children:[]}],u={toc:i};function o(e){var t=e.components,n=(0,l.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\ucfe0\ubc84\ub124\ud2f0\uc2a4\uc758 \uc2a4\ud14c\uc774\ud2b8\ud480\uc14b\uc5d0 \ub300\ud558\uc5ec")),(0,a.kt)("h2",{id:"\uc2a4\ud14c\uc774\ud2b8\ud480\uc14b"},"\uc2a4\ud14c\uc774\ud2b8\ud480\uc14b"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Statefulset"),"\uc740 \ud37c\uc2dc\uc2a4\ud134\ud2b8 \ubcfc\ub968\uacfc \ud30c\ub4dc\ub97c \ud568\uaed8 \uc870\ud569\ud558\uc5ec \uc81c\uc5b4\ud558\uae30\uc5d0 \uc801\ud569\ud55c \ucee8\ud2b8\ub864\ub7ec\uc774\ub2e4."),(0,a.kt)("p",null,"\ucee8\ud14c\uc774\ub108\uc640 \ud30c\ub4dc\ub294 \ud0dc\uc0dd\uc801\uc73c\ub85c \ub370\uc774\ud130 \ubcf4\uad00\uc774 \uc5b4\ub835\uae30 \ub54c\ubb38\uc5d0 \ud30c\ub4dc\uc640 \ud37c\uc2dc\uc2a4\ud134\ud2b8 \ubcfc\ub968\uc744 \uc870\ud569\ud574\uc57c\ud55c\ub2e4."),(0,a.kt)("p",null,"\uc774 \ub54c k8s\uc5d0\uc11c\ub294 \uc774\ub97c \ud3b8\ub9ac\ud558\uac8c \uad00\ub9ac\ud574\uc904 \uc218 \uc788\ub294 ",(0,a.kt)("strong",{parentName:"p"},"Statefulset"),"\ub77c\ub294 \uc774\ub984\uc758 \ucee8\ud2b8\ub864\ub7ec\ub97c \uc81c\uacf5\ud55c\ub2e4."),(0,a.kt)("h2",{id:"\ub514\ud50c\ub85c\uc774\uba3c\ud2b8\uc640\uc758-\ucc28\uc774"},"\ub514\ud50c\ub85c\uc774\uba3c\ud2b8\uc640\uc758 \ucc28\uc774"),(0,a.kt)("p",null,"\uc2a4\ud14c\uc774\ud2b8\ud480\uc14b\uc758 \ud2b9\uc9d5\uc744 \ub514\ud50c\ub85c\uc774\uba3c\ud2b8\uc640 \ube44\uad50\ud558\uc790\uba74 \ub2e4\uc74c\uacfc \uac19\ub2e4."),(0,a.kt)("img",{width:"1533",alt:"\u1109\u1173\u110f\u1173\u1105\u1175\u11ab\u1109\u1163\u11ba 2021-01-13 \u110b\u1169\u110c\u1165\u11ab 12 55 31",src:"https://user-images.githubusercontent.com/43809168/104338621-0aa54700-553a-11eb-9455-0643ddb9721c.png"}),(0,a.kt)("h3",{id:"\ud30c\ub4dc\uc758-\uc774\ub984\uacfc-\ud37c\uc2dc\uc2a4\ud134\ud2b8-\ubcfc\ub968\uc758-\uc774\ub984"},"\ud30c\ub4dc\uc758 \uc774\ub984\uacfc \ud37c\uc2dc\uc2a4\ud134\ud2b8 \ubcfc\ub968\uc758 \uc774\ub984"),(0,a.kt)("p",null,"\uc2a4\ud14c\uc774\ud2b8\ud480\uc14b \ub610\ud55c \uc9c0\uc815\ud55c \ub808\ud50c\ub9ac\uce74 \uc218\uc5d0 \ud574\ub2f9\ud558\ub294 \ud30c\ub4dc\ub97c \ud30c\ub4dc \ud15c\ud50c\ub9bf\uc5d0 \uae30\uc220\ud558\uace0 \uadf8 \ub0b4\uc6a9\uc5d0 \ub530\ub77c \uae30\ub3d9\ud55c\ub2e4."),(0,a.kt)("p",null,"\ub514\ud50c\ub85c\uc774\uba3c\ud2b8\uc758 \uacbd\uc6b0 \ud574\uc2dc\uac12\uc774\uc9c0\ub9cc \uc2a4\ud14c\uc774\ud2b8\ud480\uc14b\uc758 \uc774\ub984 \ub4a4\uc5d0 \uc21c\uc11c\ub300\ub85c \ubc88\ud638\uac00 \ubd80\uc5ec\ub41c \uac83\uc744 \ubcfc \uc218 \uc788\ub2e4."),(0,a.kt)("p",null,"\uadf8\ub9ac\uace0 \uc2a4\ud14c\uc774\ud2b8\ud480\uc14b\uc758 \ud37c\uc2dc\uc2a4\ud134\ud2b8 \ubcfc\ub968\uc740 \ud558\ub098\uc758 \ub2e8\uc704\ub85c \ucde8\uae09\ud558\uc5ec \ub3d9\uc77c\ud55c \ubc88\ud638\ub85c \ubb36\uc778 \uac83\uc744 \ud655\uc778\ud560 \uc218 \uc788\ub2e4."),(0,a.kt)("h3",{id:"\uc11c\ube44\uc2a4\uc758-\uc5f0\uacb0-\ubc0f-\uc774\ub984-\ud574\uacb0"},"\uc11c\ube44\uc2a4\uc758 \uc5f0\uacb0 \ubc0f \uc774\ub984 \ud574\uacb0"),(0,a.kt)("p",null,"\uc2a4\ud14c\uc774\ud2b8\ud480\uc14b \uad00\ub9ac\ud558\uc758 \ud30c\ub4dc\uc5d0 \uc694\uccad\uc744 \uc804\uc1a1\ud558\uae30 \uc704\ud574\uc11c\ub294 \ub300\ud45cIP\ub97c \uac00\uc9c0\uc9c0 \uc54a\ub294 ClusterIP\uc758 ",(0,a.kt)("strong",{parentName:"p"},"\ud5e4\ub4dc\ub9ac\uc2a4 \ubaa8\ub4dc"),"\ub97c \uc0ac\uc6a9\ud574\uc57c\ud55c\ub2e4."),(0,a.kt)("p",null,"\uc2a4\ud14c\uc774\ud2b8\ud480\uc14b\uc758 \ub9e4\ub2c8\ud398\uc2a4\ud2b8\uc5d0 ",(0,a.kt)("inlineCode",{parentName:"p"},"spec.serviceName"),"\uc5d0 \uc11c\ube44\uc2a4 \uc774\ub984\uc744 \uc124\uc815\ud558\uba74 \uac01 \ud30c\ub4dc\uc758 \uc774\ub984\uc73c\ub85c \ud30c\ub4dc\uc758 IP \uc8fc\uc18c\ub97c \uc5bb\uc744 \uc218 \uc788\ub2e4."),(0,a.kt)("h3",{id:"\ud30c\ub4dc-\ubd84\uc2e4-\uc2dc-\ub3d9\uc791"},"\ud30c\ub4dc \ubd84\uc2e4 \uc2dc \ub3d9\uc791"),(0,a.kt)("p",null,"\uc2a4\ud14c\uc774\ud2b8\ud480\uc14b \uad00\ub9ac\ud558\uc758 \ud30c\ub4dc\uac00 \ub178\ub4dc \uc7a5\uc560 \ub4f1\uc73c\ub85c \uc5c6\uc5b4\uc9c0\uba74 \ub3d9\uc77c\ud55c \uc774\ub984\uc73c\ub85c \uc0c8\ub86d\uac8c \ud30c\ub4dc\uac00 \uae30\ub3d9\ub41c\ub2e4."),(0,a.kt)("p",null,"\uadf8\ub9ac\uace0 \uae30\uc874 \ud30c\ub4dc\uac00 \uc0ac\uc6a9\ud558\ub358 \ud37c\uc2dc\uc2a4\ud134\ud2b8 \ubcfc\ub968\uc744 \uadf8\ub300\ub85c \uc774\uc5b4\uc11c \uc0ac\uc6a9\ud55c\ub2e4."),(0,a.kt)("p",null,"\uc5ec\uae30\uc11c \uc8fc\uc758\ud560 \uc810\uc740 \ud30c\ub4dc\uc758 \uc774\ub984\uc774 \uac19\ub354\ub77c\ub3c4 IP\ub294 \ubd84\uba85\ud788 \ubc14\ub00c\uc5c8\ub2e4\ub294 \uc810\uc774\ub2e4."),(0,a.kt)("p",null,"\uc774\uac83\uc774 \ub514\ud50c\ub85c\uc774\uba3c\ud2b8\uc640 \uc2a4\ud14c\uc774\ud2b8\ud480\uc14b\uc758 \ub610 \ub2e4\ub978 \uc810\uc774\ub2e4."),(0,a.kt)("h3",{id:"\ub178\ub4dc-\uc815\uc9c0-\uc2dc\uc758-\ub3d9\uc791"},"\ub178\ub4dc \uc815\uc9c0 \uc2dc\uc758 \ub3d9\uc791"),(0,a.kt)("p",null,"\ud558\ub4dc\uc6e8\uc5b4 \uc7a5\uc560\ub098 \ub124\ud2b8\uc6cc\ud06c\ub85c \uc7a5\uc560\ub85c \ud2b9\uc815 \ub178\ub4dc\uac00 \ub9c8\uc2a4\ud130\uc640\uc758 \uc5f0\uacb0\uc774 \ub04a\uc5b4\uc84c\uc744 \ub54c, ",(0,a.kt)("strong",{parentName:"p"},"\uc2a4\ud14c\uc774\ud2b8\ud480\uc14b\uc740 \uc0c8\ub85c\uc6b4 \ud30c\ub4dc\ub97c \uae30\ub3d9\ud558\uc9c0 \uc54a\ub294\ub2e4"),"."),(0,a.kt)("p",null,"\uac00\ub839 kubelet\uacfc \ub9c8\uc2a4\ud130\uc640\uc758 \ud1b5\uc2e0\uc774 \uc77c\uc2dc\uc801\uc73c\ub85c \ub04a\uaca8\uc11c \ud30c\ub4dc\uac00 \uc815\uc0c1\uc801\uc73c\ub85c \ub3d9\uc791\ud558\uace0 \uc788\ub294\ub370, \ub9cc\uc57d \ub9c8\uc2a4\ud130\uac00 \ub300\uccb4 \ud30c\ub4dc\ub97c \uae30\ub3d9\ud558\uc5ec \ud37c\uc2dc\uc2a4\ud134\ud2b8 \ubcfc\ub968\uc744 \ub9c8\uc6b4\ud2b8\ud574\ubc84\ub9ac\uba74 \ub370\uc774\ud130\uac00 \ud30c\uc190\ub420 \uc704\ud5d8\uc774 \uc788\ub2e4."),(0,a.kt)("p",null,"\uadf8\ub798\uc11c \uc2a4\ud14c\uc774\ud2b8\ud480\uc14b\uc5d0\uc11c\ub294 \ub178\ub4dc\ub098 \ub124\ud2b8\uc6cc\ud06c\uc5d0 \uc7a5\uc560\uac00 \ubc1c\uc0dd\ud558\uc5ec \ub9c8\uc2a4\ud130\uc640\uc758 \uc5f0\uacb0\uc774 \ub04a\uaca8\ub3c4 \ud30c\ub4dc\ub97c \uc0c8\ub85c \uc0dd\uc131\ud574\uc8fc\uc9c0\uc54a\ub294\ub2e4."),(0,a.kt)("p",null,"\uadf8\ub7ec\ub098 \ub2e4\uc74c \uc911 \ud558\ub098\uc5d0 \ud574\ub2f9\ud558\ub294 \uacbd\uc6b0\uc5d0\ub9cc \uc2a4\ud14c\uc774\ud2b8\ud480\uc14b\uc774 \ubd84\uc2e4\ub41c \ud30c\ub4dc\ub97c \ub2e4\ub978 \ub178\ub4dc\uc5d0\uc11c \uae30\ub3d9\ud574\uc900\ub2e4."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\uc7a5\uc560 \ub178\ub4dc\ub97c k8s\uc758 \ud074\ub7ec\uc2a4\ud130 \uba64\ubc84\uc5d0\uc11c \uc81c\uc678\ud558\ub294 \uacbd\uc6b0")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\ubb38\uc81c\uac00 \uc788\ub294 \ud30c\ub4dc\ub97c \uac15\uc81c \uc885\ub8cc \ud558\ub294 \uacbd\uc6b0")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\uc7a5\uc560\ub85c \uc778\ud574 \uc815\uc9c0\ud55c \ub178\ub4dc\ub97c \uc7ac\uac00\ub3d9\ud558\ub294 \uacbd\uc6b0"))),(0,a.kt)("p",null,"\uc704\uc758 \uacbd\uc6b0\uc5d0\ub9cc \ud30c\ub4dc\ub97c \ub2e4\ub978 \ub178\ub4dc\uc5d0 \ub744\uc6cc\uc8fc\ub294 \uc774\uc720\ub294 \uc774\ubbf8 \uc815\uc0c1 \uad6c\ub3d9\ud558\ub294 \ud30c\ub4dc\uac00 \uc788\ub294\ub370 \uc0c8\ub85c\uc6b4 \ud30c\ub4dc\ub97c \ub744\uc6b0\uba74 \ub370\uc774\ud130 \uc190\uc2e4 \uc704\ud5d8\uc774 \uc788\uae30 \ub54c\ubb38\uc774\ub2e4."),(0,a.kt)("p",null,"\ub178\ub4dc\uc758 \uc7a5\uc560\uc0c1\ud669\uc5d0\uc11c \uc774\ub97c \uc27d\uac8c \ud574\uacb0\ud560 \uc218 \uc788\ub294 \ubc29\ubc95\uc740 ",(0,a.kt)("strong",{parentName:"p"},"\uc7a5\uc560 \ub178\ub4dc\ub97c k8s \ud074\ub7ec\uc2a4\ud130\uc5d0\uc11c \uc81c\uac70"),"\ud558\uba74 \ub41c\ub2e4."),(0,a.kt)("p",null,"\uadf8\ub7f0\ub370 \uc2a4\ud14c\uc774\ud2b8\ud480\uc14b\uc758 \uc5ed\ud560\uc740 \ud30c\ub4dc\ub97c \ucee8\ud2b8\ub864\ud558\ub294 \uac83\uc774\ubbc0\ub85c, \ub178\ub4dc\ub97c \uc7ac\uae30\ub3d9\ud558\uac70\ub098 \uc81c\uc678\ud558\ub294 \uac83\uc744 \ub2f4\ub2f9\ud558\uc9c0 \uc54a\ub294\ub2e4."),(0,a.kt)("p",null,"\uc774 \ub54c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub294 \uba85\ub839\uc5b4\uac00 ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl delte node [\uc7a5\uc560_\ubc1c\uc0dd_\ub178\ub4dc]"),"\uc774\ub2e4."),(0,a.kt)("h3",{id:"\ud30c\ub4dc-\uc21c\ubc88-\uc81c\uc5b4"},"\ud30c\ub4dc \uc21c\ubc88 \uc81c\uc5b4"),(0,a.kt)("p",null,"\uc2a4\ud14c\uc774\ud2b8\ud480\uc14b\uc758 \ud30c\ub4dc \uc774\ub984\uc5d0 \ubd99\ub294 \ubc88\ud638\ub294 \ud30c\ub4dc\uc758 \uae30\ub3d9\uacfc \uc815\uc9c0 \ubfd0\ub9cc \uc544\ub2c8\ub77c, \ub864\ub9c1 \uc5c5\ub370\uc774\ud2b8\uc758 \uc21c\uc11c\uc5d0\ub3c4 \uc0ac\uc6a9\ub41c\ub2e4."),(0,a.kt)("p",null,"\uc2a4\ud14c\uc774\ud2b8\ud480\uc14b\uc758 \ubc88\ud638\ub294 \ub2e4\uc74c\uacfc \uac19\uc740 \uaddc\uce59\uc744 \uac16\ub294\ub2e4."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\ub808\ud50c\ub9ac\uce74 \uc22b\uc790\uc5d0 \ub3c4\ub2ec\ud560 \ub54c \uae4c\uc9c0 \ud30c\ub4dc\uc640 \ud37c\uc2dc\uc2a4\ud134\ud2b8 \ubcfc\ub968\uc774 \uc9dd\uc744 \uc9c0\uc5b4 \ucc28\ub840\ub85c \uae30\ub3d9\ud558\uba70 \uc815\uc9c0\ud560 \ub54c\ub294 \ud30c\ub4dc\uc758 \uc774\ub984 \ub4a4\uc5d0 \ubc88\ud638\uac00 \ud070 \uc21c\uc11c\ub300\ub85c \uc815\uc9c0\ud55c\ub2e4.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\ub808\ud50c\ub9ac\uce74 \uac12\uc744 \ub298\ub9ac\uba74 \ud30c\ub4dc \uc774\ub984 \ub4a4\uc5d0 \ubd99\ub294 \uc21c\uc11c\uac00 \ub298\uc5b4\ub098\uba74\uc11c \ud30c\ub4dc\uac00 \uae30\ub3d9\ud55c\ub2e4. \ubc18\ub300\ub85c \ub808\ud50c\ub9ac\uce74 \uac12\uc744 \uc904\uc774\uba74 \ubc88\ud638\uac00 \ud070 \uac12\ubd80\ud130 \uc904\uc5b4\ub4e0\ub2e4.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\ub864\ub9c1 \uc5c5\ub370\uc774\ud2b8\ud560 \ub54c\uc5d0\ub3c4 \ud30c\ub4dc\uc758 \uc774\ub984\uc5d0 \ubd99\ub294 \ubc88\ud638\uc5d0 \ub530\ub77c \uac31\uc2e0\ub41c\ub2e4."))),(0,a.kt)("h3",{id:"\ub9e4\ub2c8\ud398\uc2a4\ud2b8-\uc791\uc131\ubc95"},"\ub9e4\ub2c8\ud398\uc2a4\ud2b8 \uc791\uc131\ubc95"),(0,a.kt)("p",null,"MySQL\uc744 \uc608\uc81c\ub85c \uc2a4\ud14c\uc774\ud2b8\ud480\uc14b \ub9e4\ub2c8\ud398\uc2a4\ud2b8\ub97c \uc5b4\ub5bb\uac8c \uc791\uc131\ud560 \uc218 \uc788\ub294\uc9c0 \uc9c1\uc811 \ub208\uc73c\ub85c \uc0b4\ud3b4\ubcf4\uc790."),(0,a.kt)("p",null,"\uc2a4\ud14c\uc774\ud2b8\ud480\uc14b\uc740 \ub9e4\ub2c8\ud398\uc2a4\ud2b8\uc758 \ud2b9\uc9d5 \ub124 \uac00\uc9c0\ub97c \uac16\ub294\ub2e4."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"clusterIP:None"),": \ud5e4\ub4dc\ub9ac\uc2a4 \uc11c\ube44\uc2a4 \uc124\uc815")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"servieName: \uc11c\ube44\uc2a4\uba85"),": \uc5f0\ub3d9\ud560 \uc11c\ube44\uc2a4\uc758 \uc774\ub984\uc744 \uc9c0\uc815")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"template"),": \ubcfc\ub968 \uc694\uad6c \ud15c\ud50c\ub9bf\uc758 \uc774\ub984\uc73c\ub85c \ub9c8\uc6b4\ud2b8 \ud3ec\uc778\ud2b8 \uc9c0\uc815")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"volumeClaimTemplates"),": \ub808\ud50c\ub9ac\uce74 \uc218\ub9cc\ud07c \ubcfc\ub968 \uc694\uad6c\ub97c \uc791\uc131"))),(0,a.kt)("p",null,"\ub2e4\uc74c\uc740 \uc704\uc758 \uac1c\ub150\uc744 \ud1a0\ub300\ub85c \uc791\uc131\ud55c \uc608\uc81c\uc774\ub2e4."),(0,a.kt)("p",null,"\uc5ec\uae30\uc11c\ub294 MySQL \uc11c\ubc84\ub97c \ud558\ub098\ub85c \uad6c\uc131\ud558\uc600\ub294\ub370 spec.replicas\ub97c 2 \uc774\uc0c1\uc73c\ub85c \uc124\uc815\ud558\uba74 \ubcf5\uc218\uc758 MySQL \uc11c\ubc84\ub85c \uc0e4\ub529\ud558\uc5ec \ubd80\ud558\ub97c \ubd84\uc0b0\ud558\ub294 \uac83\ub3c4 \uac00\ub2a5\ud558\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"# \uc11c\ube44\uc2a4\napiVersion: v1\nkind: Service\nmetadata:\n  name: mysql ## \uc774 \uc774\ub984\uc774 k8s\uc758 DNS\ub85c \ub4f1\ub85d\ub428\n  labels:\n    app: mysql-sts\nspec:\n  ports:\n  - port: 3306\n    name: mysql\n  clusterIP: None # \ud2b9\uc9d5 1. \ud5e4\ub4dc\ub9ac\uc2a4 \uc11c\ube44\uc2a4 \uc124\uc815\n  selector:\n    app: mysql-sts # \uc2a4\ud14c\uc774\ud2b8\ud480\uc14b\uacfc \uc5f0\uacb0\ud558\ub294 \ub77c\ubca8\n---\n# MySQL \uc2a4\ud14c\uc774\ud2b8\ud480\uc14b\napiVersion: apps/v1\nkind: StatefulSet\nmetadata:\n  name: mysql\nspec:\n  serviceName: mysql # \ud2b9\uc9d5 2. \uc5f0\uacc4\ud558\ub294 \uc11c\ube44\uc2a4\uba85 \uc124\uc815\n  replicas: 1\n  selector:\n    matchLabels:\n      app: mysql-sts\n  template:\n    metadata:\n      labels:\n        app: mysql-sts\n    spec:\n      containers:\n        - name: mysql\n          image: mysql:5.7\n          env:\n          - name: MYSQL_ROOT_PASSWORD\n            value: qwerty\n          ports:\n          - containerPort: 3306\n            name: mysql\n          volumeMounts: # \ud2b9\uc9d5 3. \ucee8\ud14c\uc774\ub108 \ub9c8\uc6b4\ud2b8 \uacbd\ub85c \uc124\uc815\n          - name: pvc\n            mountPath: /var/lib/mysql\n            subPath: data # \ucd08\uae30\ud654 \uc2dc\uc5d0 \ube48 \ub514\ub809\ud130\ub9ac\uac00 \ud544\uc694\n          livenessProbe: # Mysql \uac00\ub3d9 \uccb4\ud06c\n            exec:\n              command:\n                - mysqladmin\n                - -p $MYSQL_ROOT_PASSOWRD\n                - ping\n            initialDelaySeconds: 60\n            timeoutSeconds: 10\n  volumeClaimTemplates: # \ubcfc\ub968 \uc694\uad6c \ud15c\ud50c\ub9bf\n    - metadata:\n      name: pvc\n    spec:\n      accessModes:\n        - ReadWriteOnce\n      # storageClassName: ibmc-file-bronze # \uc6a9\ub7c9 20Gi IKS\n      # storageClassName: gluster-heketi # \uc6a9\ub7c9 12Gi GlusterFS\n      storageClassName: standard # \uc6a9\ub7c9 2Gi Minikube/GKE\n      resources:\n        request:\n          storage: 2Gi\n")),(0,a.kt)("h2",{id:"\ub178\ub4dc-\uc7a5\uc560-\uc2dc\uc758-\ub3d9\uc791"},"\ub178\ub4dc \uc7a5\uc560 \uc2dc\uc758 \ub3d9\uc791"),(0,a.kt)("p",null,"\uc2a4\ud14c\uc774\ud2b8\ud480\uc14b\uc740 \uac11\uc791\uc2a4\ub7ec\uc6b4 \ub178\ub4dc \uc815\uc9c0\uc5d0 \ub300\ud574\uc11c \ud568\ubd80\ub85c \ub2e4\ub978 \ub178\ub4dc\uc5d0 \ud30c\ub4dc\ub97c \uc62e\uae30\uc9c0 \uc54a\ub294\ub2e4."),(0,a.kt)("p",null,"\uadf8\ub9ac\uace0 \uc2a4\ud14c\uc774\ud2b8\ud480\uc14b\uc740 \ud30c\ub4dc\uc758 \ucee8\ud2b8\ub864\ub7ec\ub77c\ub294 \uc5ed\ud560\uc744 \ub118\uc5b4 \ub178\ub4dc\ub97c \uc0ad\uc81c\ud558\ub294 \ud589\ub3d9\uc744 \ud558\uc9c0 \uc54a\ub294\ub2e4."),(0,a.kt)("p",null,"\uadf8\ub7ec\ub098 \ud37c\ube14\ub9ad \ud074\ub77c\uc6b0\ub4dc\uc5d0\uc11c\uc758 \uc2a4\ud14c\uc774\ud2b8\ud480\uc14b\uc740 \ub178\ub4dc \uc7a5\uc560\uc2dc\uc758 \ub3d9\uc791\uc774 \ub2e4\ub97c \uc218 \uc788\ub2e4."),(0,a.kt)("p",null,"\ub2f9\uc7a5 GKE\uc758 \uacbd\uc6b0\ub9cc \ubcf4\ub354\ub77c\ub3c4 \ub178\ub4dc\uc758 \uac00\uc0c1\uc11c\ubc84\uac00 \uc9c0\uc6cc\uc9c0\uba74 \ub178\ub4dc \uc218\ub97c \uc720\uc9c0\ud560 \uc218 \uc788\ub3c4\ub85d \uc790\ub3d9\uc73c\ub85c \ub178\ub4dc\ub97c \ub9cc\ub4e4\uc5b4 \uae30\ub3d9\ud55c\ub2e4."),(0,a.kt)("p",null,"\uc628\ud504\ub808\ubbf8\uc2a4\ub77c\uba74 \uc774\ub97c k8s API\ub97c \uc0ac\uc6a9\ud558\uc5ec \uac1c\ubc1c\ud574\uc8fc\uc5b4\uc57c\ud560 \ud544\uc694\uac00 \uc788\uc744 \uc218 \uc788\ub2e4."),(0,a.kt)("h3",{id:"\ud575\uc2ec-\uc694\uc57d"},"\ud575\uc2ec \uc694\uc57d"),(0,a.kt)("h4",{id:"1-\uc2a4\ud14c\uc774\ud2b8\ud480\uc14b\uc740-\ub370\uc774\ud130\ub97c-\ubcf4\uad00\ud574\uc57c-\ud558\ub294-\uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0-\uc801\ud569\ud55c-\ucee8\ud2b8\ub864\ub7ec\ub2e4"},"1) \uc2a4\ud14c\uc774\ud2b8\ud480\uc14b\uc740 \ub370\uc774\ud130\ub97c \ubcf4\uad00\ud574\uc57c \ud558\ub294 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0 \uc801\ud569\ud55c \ucee8\ud2b8\ub864\ub7ec\ub2e4"),(0,a.kt)("h4",{id:"2-\uc2a4\ud14c\uc774\ud2b8\ud480\uc14b\uc744-\ub9cc\ub4e4-\ub54c-\ud37c\uc2dc\uc2a4\ud134\ud2b8-\ubcfc\ub968\ub3c4-\ud568\uaed8-\ub9cc\ub4e4\uc5b4\uc9c4\ub2e4-\ubc18\uba74-\uc2a4\ud14c\uc774\ud2b8\ud480\uc14b\uc774-\uc9c0\uc6cc\uc9c8-\ub54c-\ud37c\uc2dc\uc2a4\ud134\ud2b8-\ubcfc\ub968\uc740-\uc9c0\uc6cc\uc9c0\uc9c0-\uc54a\ub294\ub2e4"},"2) \uc2a4\ud14c\uc774\ud2b8\ud480\uc14b\uc744 \ub9cc\ub4e4 \ub54c \ud37c\uc2dc\uc2a4\ud134\ud2b8 \ubcfc\ub968\ub3c4 \ud568\uaed8 \ub9cc\ub4e4\uc5b4\uc9c4\ub2e4. \ubc18\uba74, \uc2a4\ud14c\uc774\ud2b8\ud480\uc14b\uc774 \uc9c0\uc6cc\uc9c8 \ub54c \ud37c\uc2dc\uc2a4\ud134\ud2b8 \ubcfc\ub968\uc740 \uc9c0\uc6cc\uc9c0\uc9c0 \uc54a\ub294\ub2e4"),(0,a.kt)("h4",{id:"3-\uc2a4\ud14c\uc774\ud2b8\ud480\uc14b\uc740-\ub370\uc774\ud130-\ubcf4\ud638\ub97c-\uc6b0\uc120\uc2dc-\ud558\uae30-\ub584\ubb38\uc5d0-\ub178\ub4dc\uc5d0-\uc7a5\uc560\uac00-\ubc1c\uc0dd\ud558\ub354\ub77c\ub3c4-\ud568\ubd80\ub85c-\ud30c\ub4dc\ub97c-\ub2e4\ub978-\ub178\ub4dc\ub85c-\uc62e\uae30\uc9c0-\uc54a\ub294\ub2e4-\ub610\ud55c-\ub178\ub4dc\ub97c-\uc9c0\uc6b0\ub294-\uc77c\ub3c4-\ud558\uc9c0-\uc54a\ub294\ub2e4-\ub54c\ubb38\uc5d0-\ub178\ub4dc-\uc7a5\uc560-\uc0c1\ud669\uc5d0\uc11c\ub294-\uc815\uc9c0\ud55c-\ub178\ub4dc\ub97c-\uc7ac\uac00\ub3d9\ud558\uac70\ub098-\uba64\ubc84\ub97c-\uc9c0\uc6cc\uc57c\ud558\ub294-\ud544\uc694\uac00-\uc788\uc744-\uc218-\uc788\ub2e4"},"3) \uc2a4\ud14c\uc774\ud2b8\ud480\uc14b\uc740 \ub370\uc774\ud130 \ubcf4\ud638\ub97c \uc6b0\uc120\uc2dc \ud558\uae30 \ub584\ubb38\uc5d0 \ub178\ub4dc\uc5d0 \uc7a5\uc560\uac00 \ubc1c\uc0dd\ud558\ub354\ub77c\ub3c4 \ud568\ubd80\ub85c \ud30c\ub4dc\ub97c \ub2e4\ub978 \ub178\ub4dc\ub85c \uc62e\uae30\uc9c0 \uc54a\ub294\ub2e4. \ub610\ud55c \ub178\ub4dc\ub97c \uc9c0\uc6b0\ub294 \uc77c\ub3c4 \ud558\uc9c0 \uc54a\ub294\ub2e4. \ub54c\ubb38\uc5d0 \ub178\ub4dc \uc7a5\uc560 \uc0c1\ud669\uc5d0\uc11c\ub294 \uc815\uc9c0\ud55c \ub178\ub4dc\ub97c \uc7ac\uac00\ub3d9\ud558\uac70\ub098 \uba64\ubc84\ub97c \uc9c0\uc6cc\uc57c\ud558\ub294 \ud544\uc694\uac00 \uc788\uc744 \uc218 \uc788\ub2e4"),(0,a.kt)("h4",{id:"4-\ub370\ubaac\uc14b\uc740-\ubaa8\ub4e0-\ub178\ub4dc\uc5d0\uc11c-\ud30c\ub4dc\ub97c-\ub3cc\ub9ac\uae30-\uc704\ud55c-\ucee8\ud2b8\ub864\ub7ec\ub2e4"},"4) \ub370\ubaac\uc14b\uc740 \ubaa8\ub4e0 \ub178\ub4dc\uc5d0\uc11c \ud30c\ub4dc\ub97c \ub3cc\ub9ac\uae30 \uc704\ud55c \ucee8\ud2b8\ub864\ub7ec\ub2e4"),(0,a.kt)("h2",{id:"reference"},"Reference"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/43809168/101032998-6684c380-35bd-11eb-8ba7-a784fd46b37a.png",alt:"k8s"})),(0,a.kt)("p",null,"15\ub2e8\uacc4\ub85c \ubc30\uc6b0\ub294 \ub3c4\ucee4\uc640 \ucfe0\ubc84\ub124\ud2f0\uc2a4 - \ud0c0\uce74\ub77c \ub9c8\ud638 \uc800\uc11c"))}o.isMDXComponent=!0}}]);