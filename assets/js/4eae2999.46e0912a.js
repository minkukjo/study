(self.webpackChunkstudy=self.webpackChunkstudy||[]).push([[2541],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return o},kt:function(){return d}});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var a=r.createContext({}),s=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},o=function(e){var t=s(e.components);return r.createElement(a.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,a=e.parentName,o=u(e,["components","mdxType","originalType","parentName"]),c=s(n),d=l,m=c["".concat(a,".").concat(d)]||c[d]||k[d]||i;return n?r.createElement(m,p(p({ref:t},o),{},{components:n})):r.createElement(m,p({ref:t},o))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,p=new Array(i);p[0]=c;var u={};for(var a in t)hasOwnProperty.call(t,a)&&(u[a]=t[a]);u.originalType=e,u.mdxType="string"==typeof e?e:l,p[1]=u;for(var s=2;s<i;s++)p[s]=n[s];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},3061:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return p},metadata:function(){return u},toc:function(){return a},default:function(){return o}});var r=n(2122),l=n(9756),i=(n(7294),n(3905)),p={id:"12-ingress",title:"12. \uc778\uadf8\ub808\uc2a4"},u={unversionedId:"kubernetes/15steps/12-ingress",id:"kubernetes/15steps/12-ingress",isDocsHomePage:!1,title:"12. \uc778\uadf8\ub808\uc2a4",description:"\ucfe0\ubc84\ub124\ud2f0\uc2a4\uc758 \uc778\uadf8\ub808\uc2a4\uc5d0 \ub300\ud558\uc5ec",source:"@site/docs/kubernetes/15steps/12-ingress.md",sourceDirName:"kubernetes/15steps",slug:"/kubernetes/15steps/12-ingress",permalink:"/study/docs/kubernetes/15steps/12-ingress",editUrl:"https://github.com/minkukjo/study/edit/master/docs/kubernetes/15steps/12-ingress.md",version:"current",lastUpdatedAt:1622260374,formattedLastUpdatedAt:"5/29/2021",sidebarPosition:12,frontMatter:{id:"12-ingress",title:"12. \uc778\uadf8\ub808\uc2a4"},sidebar:"main",previous:{title:"11. \uc11c\ube44\uc2a4",permalink:"/study/docs/kubernetes/15steps/11-service"},next:{title:"13. \ub514\ud50c\ub85c\uc774\uba3c\ud2b8",permalink:"/study/docs/kubernetes/15steps/13-deplyoment"}},a=[{value:"\uc778\uadf8\ub808\uc2a4",id:"\uc778\uadf8\ub808\uc2a4",children:[]},{value:"\uc778\uadf8\ub808\uc2a4 \uae30\ub2a5\uacfc \uac1c\uc694",id:"\uc778\uadf8\ub808\uc2a4-\uae30\ub2a5\uacfc-\uac1c\uc694",children:[]},{value:"\uacf5\uac1c URL\uacfc \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc758 \ub9e4\ud551",id:"\uacf5\uac1c-url\uacfc-\uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc758-\ub9e4\ud551",children:[]},{value:"\uc778\uadf8\ub808\uc2a4 SSL/TLS \uc554\ud638\ud654",id:"\uc778\uadf8\ub808\uc2a4-ssltls-\uc554\ud638\ud654",children:[]},{value:"\ubaa8\ub354\ub2c8\uc81c\uc774\uc158 \uacfc\uc81c",id:"\ubaa8\ub354\ub2c8\uc81c\uc774\uc158-\uacfc\uc81c",children:[]},{value:"kube-keepalived-vip\uc5d0 \ub300\ud55c VIP \ud68d\ub4dd\uacfc HA \uad6c\uc131",id:"kube-keepalived-vip\uc5d0-\ub300\ud55c-vip-\ud68d\ub4dd\uacfc-ha-\uad6c\uc131",children:[{value:"\ud575\uc2ec \uc694\uc57d",id:"\ud575\uc2ec-\uc694\uc57d",children:[]}]},{value:"Reference",id:"reference",children:[]}],s={toc:a};function o(e){var t=e.components,n=(0,l.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\ucfe0\ubc84\ub124\ud2f0\uc2a4\uc758 \uc778\uadf8\ub808\uc2a4\uc5d0 \ub300\ud558\uc5ec")),(0,i.kt)("h2",{id:"\uc778\uadf8\ub808\uc2a4"},"\uc778\uadf8\ub808\uc2a4"),(0,i.kt)("p",null,"\uc778\uadf8\ub808\uc2a4\ub294 k8s \ud074\ub7ec\uc2a4\ud130 \uc678\ubd80\uc5d0\uc11c\uc758 \uc694\uccad\uc744 k8s \ud074\ub7ec\uc2a4\ud130 \ub0b4\ubd80\uc758 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0 \uc5f0\uacb0\ud558\uae30 \uc704\ud55c API \uc624\ube0c\uc81d\ud2b8\uc774\ub2e4."),(0,i.kt)("p",null,"\uc678\ubd80 \uacf5\uac1c\uc6a9 URL\uacfc \ub9e4\ud551\ud558\uc5ec \uc778\ud130\ub137\uc5d0 \uacf5\uac1c\ud558\ub294\ub370 \uc0ac\uc6a9\ub418\uba70 SSL/TSL \uc554\ud638\ud654\ub098 \uc138\uc158 \uc5b4\ud53c\ub2c8\ud2f0 \ub4f1\uc758 \uae30\ub2a5\uc744 \uac16\ucd94\uace0 \uc788\uc5b4 \uae30\uc874 \uc6f9 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \ucfe0\ubc84\ub124\ud2f0\uc2a4\ud654\ud558\ub294 \ub370 \uc720\uc6a9\ud55c \uc624\ube0c\uc81d\ud2b8\ub2e4."),(0,i.kt)("h2",{id:"\uc778\uadf8\ub808\uc2a4-\uae30\ub2a5\uacfc-\uac1c\uc694"},"\uc778\uadf8\ub808\uc2a4 \uae30\ub2a5\uacfc \uac1c\uc694"),(0,i.kt)("p",null,"\uc778\uadf8\ub808\uc2a4\uc758 \ub300\ud45c\uc801\uc778 \uae30\ub2a5\uc73c\ub85c\ub294 \ub2e4\uc74c\uacfc \uac19\ub2e4."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\uacf5\uac1c URL\uacfc \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \ub9e4\ud551"),(0,i.kt)("li",{parentName:"ul"},"\ubcf5\uc218\uc758 \ub3c4\uba54\uc778 \uc774\ub984\uc744 \uac00\uc9c0\ub294 \uac00\uc0c1 \ud638\uc2a4\ud2b8 \uae30\ub2a5"),(0,i.kt)("li",{parentName:"ul"},"\ud074\ub77c\uc774\uc5b8\ud2b8\uc758 \uc694\uccad\uc744 \uc5ec\ub7ec \ud30c\ub4dc\uc5d0 \ubd84\uc0b0"),(0,i.kt)("li",{parentName:"ul"},"SSL/TLS \uc554\ud638\ud654 \ud1b5\uc2e0 HTTPS"),(0,i.kt)("li",{parentName:"ul"},"\uc138\uc158 \uc5b4\ud53c\ub2c8\ud2f0")),(0,i.kt)("p",null,"\uc778\uadf8\ub808\uc2a4\ub97c \uc774\uc6a9\ud558\uba74 \uae30\uc874\uc758 \ub85c\ub4dc\ubc38\ub7f0\uc11c\ub098 \ub9ac\ubc84\uc2a4 \ud504\ub85d\uc2dc\ub97c \ub300\uccb4\ud560 \uc218 \uc788\ub2e4."),(0,i.kt)("p",null,"\uc778\uadf8\ub808\uc2a4 \ucee8\ud2b8\ub864\ub7ec\ub294 \ub2e4\ub978 \ucee8\ud2b8\ub864\ub7ec\uc640 \ub2ec\ub9ac \ub9c8\uc2a4\ud130\uc0c1\uc758 kube-controller-manager\uc758 \uc77c\ubd80\ub85c \uc2e4\ud589\ub418\uc9c0 \uc54a\ub294\ub2e4."),(0,i.kt)("p",null,"\ub2e4\uc591\ud55c \uc778\uadf8\ub808\uc2a4 \ucee8\ud2b8\ub864\ub7ec\uac00 \uc788\uc9c0\ub9cc \uadf8\uc911\uc5d0\uc11c NGINX \uc778\uadf8\ub808\uc2a4 \ucee8\ud2b8\ub864\ub7ec\uac00 \ub300\ud45c\uc801\uc774\ub2e4."),(0,i.kt)("p",null,"\ud37c\ube14\ub9ad \ud074\ub77c\uc6b0\ub4dc\uc758 k8s \uc11c\ube44\uc2a4\ub294 \ud074\ub77c\uc6b0\ub4dc\uc758 \uae30\ub2a5\uacfc \uc778\uadf8\ub808\uc2a4\ub97c \uc5f0\ub3d9\ud558\uc5ec \uacf5\uc778 IP \uc8fc\uc18c\ub97c \uc5f0\uacb0\ud55c\ub2e4."),(0,i.kt)("p",null,"\ubc18\uba74\uc5d0 \uc628\ud504\ub808\ubbf8\uc2a4\uc5d0\uc11c k8s \ud074\ub7ec\uc2a4\ud130\ub97c \uad6c\ucd95\ud558\ub294 \uacbd\uc6b0\uc5d0\ub294 \uacf5\uc778 IP \uc8fc\uc18c (\uc774\ud558 VIP)\ub97c \ub178\ub4dc \uac04\uc5d0 \uacf5\uc720\ud558\ub294 \uae30\ub2a5\uc744 \ucd94\uac00\ud574\uc57c\ud55c\ub2e4."),(0,i.kt)("p",null,"\uc774\ub97c \uc704\ud574 ",(0,i.kt)("inlineCode",{parentName:"p"},"kube-keepalived-vip"),"\uac00 \uae43\ud5c8\ube0c\uc5d0 \uacf5\uac1c\ub418\uc5b4\uc788\ub2e4."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"kube-keepalived-vip"),"\ub294 \ucfe0\ubc84\ub124\ud2f0\uc2a4\uc758 \uc18c\uc2a4 \ucf54\ub4dc\uc5d0\ub294 \ud3ec\ud568\ub418\uc9c0 \uc54a\uc9c0\ub9cc CNCF \ucfe0\ubc84\ub124\ud2f0\uc2a4\uc758 \ud504\ub85c\uc81d\ud2b8\uc758 \uae43\ud5d9\uc5d0 \ub4f1\ub85d\ub418\uc5b4\uc788\ub2e4."),(0,i.kt)("h2",{id:"\uacf5\uac1c-url\uacfc-\uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc758-\ub9e4\ud551"},"\uacf5\uac1c URL\uacfc \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc758 \ub9e4\ud551"),(0,i.kt)("p",null,"\uc778\uadf8\ub808\uc2a4\ub97c \uc0ac\uc6a9\ud558\uba74 \uacf5\uac1c URL\uc758 \uacbd\ub85c\uc5d0 \ubcf5\uc218\uc758 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \ub9e4\ud551\ud560 \uc218 \uc788\ub2e4."),(0,i.kt)("p",null,"\uac00\ub839 ",(0,i.kt)("inlineCode",{parentName:"p"},"http://test.com"),"\uc774\ub77c\ub294 \ub3c4\uba54\uc778\uc5d0 ",(0,i.kt)("inlineCode",{parentName:"p"},"/reservation"),"\uacfc ",(0,i.kt)("inlineCode",{parentName:"p"},"/order"),"\ub77c\ub294 \uacbd\ub85c\uc5d0 \uac01\uac01 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \ub9e4\ud551\ud558\ub294 \uac83\uc774 \uac00\ub2a5\ud558\ub2e4."),(0,i.kt)("p",null,"\uadf8\ub7ec\uba74 \uc0ac\uc6a9\uc790\ub294 \ud558\ub098\uc758 URL\uc774\uc9c0\ub9cc \ub0b4\ubd80\uc801\uc73c\ub85c\ub294 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc774 \uc801\uc808\ud788 \ubd84\ub9ac\ub418\uc5b4\uc788\uc5b4 \ub290\uc2a8\ud558\uac8c \uacb0\ud569\ub41c \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc758 \uc9d1\ud569\uccb4\ub85c \uad6c\ud604\ud560 \uc218 \uc788\ub2e4."),(0,i.kt)("p",null,"\uc774\ub7ec\ud55c \ub290\uc2a8\ud55c \uc5f0\uacb0\uc740 MSA\ucc98\ub7fc \uac01 \ubaa8\ub4c8\uc758 \ubcc0\uacbd\uc0ac\ud56d\uc744 \ucd5c\uc18c\ud654 \ud560 \uc218 \uc788\uace0 \uc0dd\uc0b0\uc131\ub3c4 \ub192\uc77c \uc218 \uc788\ub2e4."),(0,i.kt)("p",null,"\uc778\uadf8\ub808\uc2a4\uc758 \ub610 \ub2e4\ub978 \uae30\ub2a5\uc740 ",(0,i.kt)("strong",{parentName:"p"},"\uac00\uc0c1 \ud638\uc2a4\ud2b8"),"\ub77c\ub294 \uae30\ub2a5\uc774 \uc874\uc7ac\ud55c\ub2e4."),(0,i.kt)("p",null,"\uc774\ub294 \ud558\ub098\uc758 \uacf5\uc778 IP \uc8fc\uc18c\ub97c \uacf5\uc720\ud558\uc5ec \ub3c4\uba54\uc778 \uc774\ub984\ubcc4\ub85c \uc804\uc1a1\ub418\ub294 \uacf3\uc744 \uc124\uc815\ud560 \uc218 \uc788\ub2e4."),(0,i.kt)("p",null,"\uac00\ub839 \uae30\uc874 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc774 ",(0,i.kt)("inlineCode",{parentName:"p"},"http://test.com"),"\uc778\ub370 \ud2b9\uc815 \uc774\ubca4\ud2b8 \uae30\uac04\uc5d0\ub9cc \uc811\uc18d\uc774 \uac00\ub2a5\ud55c ",(0,i.kt)("inlineCode",{parentName:"p"},"http://event.com"),"\uc774\ub77c\ub294 \ub3c4\uba54\uc778\uc73c\ub85c \uc811\uc18d\ud558\ub294 \uacbd\uc6b0 \uc778\uadf8\ub808\uc2a4\uac00 \uc694\uccad\uc744 \ubc1b\uc544 \uc801\uc808\ud55c \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0 \ubfcc\ub824\uc8fc\ub294 \uac83\uc774 \uac00\ub2a5\ud558\ub2e4."),(0,i.kt)("h2",{id:"\uc778\uadf8\ub808\uc2a4-ssltls-\uc554\ud638\ud654"},"\uc778\uadf8\ub808\uc2a4 SSL/TLS \uc554\ud638\ud654"),(0,i.kt)("p",null,"\uc778\uadf8\ub808\uc2a4\uc5d0 SSL/TLS \uc554\ud638\ud654\ub97c \uc124\uc815\ud558\uba74 \ube0c\ub77c\uc6b0\uc800\ub85c\ubd80\ud130 HTTPS\ub97c \uc0ac\uc6a9\ud558\uc5ec \uc811\uc18d\ud560 \uc218 \uc788\ub2e4."),(0,i.kt)("p",null,"\uc774 \ubc29\ubc95\uc740 \uc778\uadf8\ub808\uc2a4 \ucee8\ud2b8\ub864\ub7ec\uc5d0 \ubd80\ud558\uac00 \uc9d1\uc911\ub418\uae30 \ub54c\ubb38\uc5d0 \uc815\uc2dd \uc6b4\uc601 \uc11c\ube44\uc2a4\uc5d0 \uc801\uc6a9\ud560 \ub54c\ub294 \uc131\ub2a5\uc758 \ubcd1\ubaa9 \ud604\uc0c1\uc774 \ubc1c\uc0dd\ud558\uc9c0 \uc54a\ub3c4\ub85d \uc8fc\uc758\ud574\uc57c\ud560 \uac83\uc774\ub2e4."),(0,i.kt)("h2",{id:"\ubaa8\ub354\ub2c8\uc81c\uc774\uc158-\uacfc\uc81c"},"\ubaa8\ub354\ub2c8\uc81c\uc774\uc158 \uacfc\uc81c"),(0,i.kt)("p",null,"\uae30\uc874 \uc6f9 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0\uc11c\ub294 \ub85c\ub4dc\ubc38\ub7f0\uc11c\uc758 \uc138\uc158 \uc5b4\ud53c\ub2c8\ud2f0(Session Affinity)\ub97c \uc0ac\uc6a9\ud558\ub294 \uac83\uc774 \uc77c\ubc18\uc801\uc774\uc5c8\ub2e4."),(0,i.kt)("p",null,"\uc774 \uc138\uc158\uc744 \ud1b5\ud574 \uc720\uc800\uc758 \ub85c\uadf8\uc778 \uc815\ubcf4\uc640 \uc7a5\ubc14\uad6c\ub2c8\uc758 \uc544\uc774\ud15c\ub4e4\uc744 \uae30\uc5b5\ud574\ub458 \uc218 \uc788\uc5c8\ub2e4."),(0,i.kt)("p",null,"\uadf8\ub7ec\ub098 HTTP\ub294 \uae30\ubcf8\uc801\uc73c\ub85c Stateless\ud55c \ud504\ub85c\ud1a0\ucf5c\uc774\uae30 \ub54c\ubb38\uc5d0 \uc11c\ubc84\uc640 \ud074\ub77c\uc774\uc5b8\ud2b8\uac04\uc758 \ud1b5\uc2e0\uc744 \uc720\uc9c0\ud560 \uc218 \uc5c6\ub2e4."),(0,i.kt)("p",null,"\ub530\ub77c\uc11c \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc740 \ube0c\ub77c\uc6b0\uc800\ub97c \uc2dd\ubcc4\ud558\uae30 \uc704\ud55c \ucfe0\ud0a4\ub97c HTTP \ud504\ub85c\ud1a0\ucf5c\uc758 \ud5e4\ub354\uc5d0 \ud3ec\ud568\uc2dc\ucf1c \uc804\uc1a1\ud55c\ub2e4."),(0,i.kt)("p",null,"\uadf8\ub7f0\ub370 \ub610 \ub2e4\ub978 \ubb38\uc81c\uac00 \uc788\ub2e4."),(0,i.kt)("p",null,"\ub9cc\uc57d \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc758 \uc11c\ubc84\ub97c 2\ub300 \uc774\uc0c1\uc744 \uc6b4\uc6a9\ud55c\ub2e4\uba74 \uadf8 \uc55e\uc5d0 \ub85c\ub4dc\ubc38\ub7f0\uc11c\ub97c \ub450\ub294 \uac83\uc774 \uc77c\ubc18\uc801\uc778 \ud615\ud0dc\uc774\ub2e4."),(0,i.kt)("p",null,"\uadf8\ub7f0\ub370 \ub85c\ub4dc\ubc38\ub7f0\uc11c\uac00 \uc138\uc158 \uc815\ubcf4\ub97c \uac16\uc9c0 \uc54a\uc740 \uc11c\ubc84\uc5d0 \uc694\uccad\uc744 \ubcf4\ub0b4\uba74 \uc62c\ubc14\ub978 \ucc98\ub9ac\ub97c \uc218\ud589\ud560 \uc218 \uc5c6\uac8c \ub41c\ub2e4."),(0,i.kt)("p",null,"\uadf8\ub7ec\uba74 \ub85c\uadf8\uc778\uc744 \ud588\ub294\ub370 \ub2e4\uc2dc \ub85c\uadf8\uc778\uc744 \ud574\uc57c\ud558\uace0, \uc7a5\ubc14\uad6c\ub2c8\uac00 \ub2e4 \ube44\uc6cc\uc9c0\uac8c \ub41c\ub2e4."),(0,i.kt)("p",null,"\uc774 \ubb38\uc81c\ub97c \ud574\uacb0\ud558\uae30 \uc704\ud574 \ub85c\ub4dc\ubc38\ub7f0\uc11c\uc5d0\ub294 \uc138\uc158 \uc5b4\ud53c\ub2c8\ud2f0\uac00 \uc874\uc7ac\ud55c\ub2e4."),(0,i.kt)("p",null,"\uc774 \uae30\ub2a5\uc740 \uac19\uc740 \ube0c\ub77c\uc6b0\uc800\uc5d0\uc11c\uc758 \uc694\uccad\uc740 \ud56d\uc0c1 \uac19\uc740 \uc11c\ubc84\uc758 \ud504\ub85c\uc138\uc2a4\uc5d0 \uc804\ub2ec\ud574\uc8fc\ub294 \uae30\ub2a5\uc774\ub2e4."),(0,i.kt)("p",null,"\uc778\uadf8\ub808\uc2a4 \uc5ed\uc2dc \uc774\ub7ec\ud55c \uc138\uc158 \uc5b4\ud53c\ub2c8\ud2f0 \uae30\ub2a5\uc744 \uc9c0\uc9c0\uc6d0\ud55c\ub2e4."),(0,i.kt)("p",null,"\uc774\ub97c \uc0ac\uc6a9\ud574 k8s\uc5d0\uc11c\ub294 \uac19\uc740 \ube0c\ub77c\uc6b0\uc800\uc758 \uc694\uccad\uc774\uba74 \uac19\uc740 pod\uc73c\ub85c \uc694\uccad\uc744 \uc804\ub2ec\ud574\uc8fc\ub294 \uac83\uc774 \uac00\ub2a5\ud558\ub2e4."),(0,i.kt)("h2",{id:"kube-keepalived-vip\uc5d0-\ub300\ud55c-vip-\ud68d\ub4dd\uacfc-ha-\uad6c\uc131"},"kube-keepalived-vip\uc5d0 \ub300\ud55c VIP \ud68d\ub4dd\uacfc HA \uad6c\uc131"),(0,i.kt)("p",null,"NGINX \uc778\uadf8\ub808\uc2a4 \ucee8\ud2b8\ub864\ub7ec\ub294 Virtual IP(VIP)\ub97c \ub178\ub4dc \uac04 \uacf5\uc720\ud558\ub294 \uae30\ub2a5\uc744 \uac16\uace0 \uc788\uc9c0 \uc54a\ub2e4."),(0,i.kt)("p",null,"\ub54c\ubb38\uc5d0 \ubcf5\uc218\uc758 \ub178\ub4dc\ub85c \uad6c\uc131\ub41c k8s\uc5d0\uc11c\ub294 keepalived \uc124\uc815\uc744 \uc0ac\uc6a9\ud574\uc57c\ud55c\ub2e4."),(0,i.kt)("p",null,"\ud37c\ube14\ub9ad \ud074\ub77c\uc6b0\ub4dc\uc758 \uacbd\uc6b0 \uc778\uadf8\ub808\uc2a4\uc640 VIP\ub97c \uc5f0\uacb0\ud558\ub294 \uae30\ub2a5\uc774 \uc788\uc9c0\ub9cc, \uc628\ud504\ub808\ubbf8\uc2a4 \ud658\uacbd\uc5d0\uc11c\ub294 \uc778\uadf8\ub808\uc2a4\uc5d0 VIP\ub97c \uc5f0\uacb0\ud558\uae30 \uc704\ud55c \ucd94\uac00\uc801\uc778 \uc791\uc5c5\uc774 \ud544\uc694\ud558\ub2e4."),(0,i.kt)("h3",{id:"\ud575\uc2ec-\uc694\uc57d"},"\ud575\uc2ec \uc694\uc57d"),(0,i.kt)("h4",{id:"1-\uc778\uadf8\ub808\uc2a4\ub97c-\uc0ac\uc6a9\ud558\uae30-\uc704\ud574\uc11c\ub294-k8s-\ud074\ub7ec\uc2a4\ud130-\uc0c1\uc5d0-\uc778\uadf8\ub808\uc2a4-\ucee8\ud2b8\ub864\ub7ec\uac00-\ub3d9\uc791\ud558\uace0-\uc788\uc5b4\uc57c-\ud55c\ub2e4"},"1) \uc778\uadf8\ub808\uc2a4\ub97c \uc0ac\uc6a9\ud558\uae30 \uc704\ud574\uc11c\ub294 k8s \ud074\ub7ec\uc2a4\ud130 \uc0c1\uc5d0 \uc778\uadf8\ub808\uc2a4 \ucee8\ud2b8\ub864\ub7ec\uac00 \ub3d9\uc791\ud558\uace0 \uc788\uc5b4\uc57c \ud55c\ub2e4"),(0,i.kt)("h4",{id:"2-\uc778\uadf8\ub808\uc2a4\ub294-url\uc758-\uacbd\ub85c\uc640-\uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744-\ub9e4\ud551\ud574\uc8fc\ub294-\ub9ac\ubc84\uc2a4-\ud504\ub85d\uc2dc\ub2e4"},"2) \uc778\uadf8\ub808\uc2a4\ub294 URL\uc758 \uacbd\ub85c\uc640 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \ub9e4\ud551\ud574\uc8fc\ub294 \ub9ac\ubc84\uc2a4 \ud504\ub85d\uc2dc\ub2e4"),(0,i.kt)("h4",{id:"3-\ud558\ub098\uc758-ip-\uc8fc\uc18c\uc5d0-\uc5ec\ub7ec-\uac1c\uc758-\ub3c4\uba54\uc778-\uc774\ub984\uc744-\ub4f1\ub85d\ud558\uc5ec-\ub3c4\uba54\uc778-\uc774\ub984\uc5d0-\ub300\uc751\ud558\ub294-\uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744-\uc815\uc758\ud560-\uc218-\uc788\ub2e4"},"3) \ud558\ub098\uc758 IP \uc8fc\uc18c\uc5d0 \uc5ec\ub7ec \uac1c\uc758 \ub3c4\uba54\uc778 \uc774\ub984\uc744 \ub4f1\ub85d\ud558\uc5ec \ub3c4\uba54\uc778 \uc774\ub984\uc5d0 \ub300\uc751\ud558\ub294 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \uc815\uc758\ud560 \uc218 \uc788\ub2e4"),(0,i.kt)("h4",{id:"4-\uc778\uadf8\ub808\uc2a4\uc758-\uc138\uc158-\uc5b4\ud53c\ub2c8\ud2f0-\uae30\ub2a5\uc740-\ub85c\ub4dc\ubc38\ub7f0\uc11c\uc5d0-\uc758\uc874\ud558\ub294-\ub808\uac70\uc2dc-\uc6f9-\uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744-\ucfe0\ubc84\ub124\ud2f0\uc2a4\uc5d0\uc11c-\ub3cc\ub9b4-\ub584-\uc720\uc6a9\ud558\uac8c-\uc0ac\uc6a9\ud560-\uc218-\uc788\ub2e4"},"4) \uc778\uadf8\ub808\uc2a4\uc758 \uc138\uc158 \uc5b4\ud53c\ub2c8\ud2f0 \uae30\ub2a5\uc740 \ub85c\ub4dc\ubc38\ub7f0\uc11c\uc5d0 \uc758\uc874\ud558\ub294 \ub808\uac70\uc2dc \uc6f9 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \ucfe0\ubc84\ub124\ud2f0\uc2a4\uc5d0\uc11c \ub3cc\ub9b4 \ub584 \uc720\uc6a9\ud558\uac8c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub2e4"),(0,i.kt)("h4",{id:"5-nginx-\ucee8\ud2b8\ub864\ub7ec\uc640-kube-keepalived-vip\ub97c-\uc0ac\uc6a9\ud558\uba74-vip\ub97c-\uacf5\uc720\ud558\ub294-\ub178\ub4dc\ub85c-ha-\uad6c\uc131\uc774-\uac00\ub2a5\ud558\ub2e4"},"5) NGINX \ucee8\ud2b8\ub864\ub7ec\uc640 kube-keepalived-vip\ub97c \uc0ac\uc6a9\ud558\uba74 VIP\ub97c \uacf5\uc720\ud558\ub294 \ub178\ub4dc\ub85c HA \uad6c\uc131\uc774 \uac00\ub2a5\ud558\ub2e4"),(0,i.kt)("h2",{id:"reference"},"Reference"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/43809168/101032998-6684c380-35bd-11eb-8ba7-a784fd46b37a.png",alt:"k8s"})),(0,i.kt)("p",null,"15\ub2e8\uacc4\ub85c \ubc30\uc6b0\ub294 \ub3c4\ucee4\uc640 \ucfe0\ubc84\ub124\ud2f0\uc2a4 - \ud0c0\uce74\ub77c \ub9c8\ud638 \uc800\uc11c"))}o.isMDXComponent=!0}}]);