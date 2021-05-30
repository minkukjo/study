(self.webpackChunkstudy=self.webpackChunkstudy||[]).push([[3851],{3905:function(e,t,l){"use strict";l.d(t,{Zo:function(){return k},kt:function(){return s}});var n=l(7294);function r(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function a(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}function p(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?a(Object(l),!0).forEach((function(t){r(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):a(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function i(e,t){if(null==e)return{};var l,n,r=function(e,t){if(null==e)return{};var l,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)l=a[n],t.indexOf(l)>=0||(r[l]=e[l]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)l=a[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(r[l]=e[l])}return r}var u=n.createContext({}),o=function(e){var t=n.useContext(u),l=t;return e&&(l="function"==typeof e?e(t):p(p({},t),e)),l},k=function(e){var t=o(e.components);return n.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var l=e.components,r=e.mdxType,a=e.originalType,u=e.parentName,k=i(e,["components","mdxType","originalType","parentName"]),m=o(l),s=r,c=m["".concat(u,".").concat(s)]||m[s]||d[s]||a;return l?n.createElement(c,p(p({ref:t},k),{},{components:l})):n.createElement(c,p({ref:t},k))}));function s(e,t){var l=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=l.length,p=new Array(a);p[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,p[1]=i;for(var o=2;o<a;o++)p[o]=l[o];return n.createElement.apply(null,p)}return n.createElement.apply(null,l)}m.displayName="MDXCreateElement"},8844:function(e,t,l){"use strict";l.r(t),l.d(t,{frontMatter:function(){return p},metadata:function(){return i},toc:function(){return u},default:function(){return k}});var n=l(2122),r=l(9756),a=(l(7294),l(3905)),p={id:"09-kubernetes-first-step",title:"09. \ucfe0\ubc84\ub124\ud2f0\uc2a4 \uccab \uac78\uc74c"},i={unversionedId:"kubernetes/15steps/09-kubernetes-first-step",id:"kubernetes/15steps/09-kubernetes-first-step",isDocsHomePage:!1,title:"09. \ucfe0\ubc84\ub124\ud2f0\uc2a4 \uccab \uac78\uc74c",description:"\ub85c\uceec \ud658\uacbd\uc758 \ucfe0\ubc84\ub124\ud2f0\uc2a4 \ud074\ub7ec\uc2a4\ud130\ub97c \uc0dd\uc131\ud558\uace0 \uc2e4\uc2b5",source:"@site/docs/kubernetes/15steps/09-kubernetes-first-step.md",sourceDirName:"kubernetes/15steps",slug:"/kubernetes/15steps/09-kubernetes-first-step",permalink:"/study/docs/kubernetes/15steps/09-kubernetes-first-step",editUrl:"https://github.com/minkukjo/study/edit/master/docs/kubernetes/15steps/09-kubernetes-first-step.md",version:"current",lastUpdatedAt:1622260374,formattedLastUpdatedAt:"5/29/2021",sidebarPosition:9,frontMatter:{id:"09-kubernetes-first-step",title:"09. \ucfe0\ubc84\ub124\ud2f0\uc2a4 \uccab \uac78\uc74c"},sidebar:"main",previous:{title:"08. \ucee8\ud14c\uc774\ub108 API",permalink:"/study/docs/kubernetes/15steps/08-container-api"},next:{title:"10. \ub9e4\ub2c8\ud398\uc2a4\ud2b8",permalink:"/study/docs/kubernetes/15steps/10-manifest"}},u=[{value:"\ucfe0\ubc84\ub124\ud2f0\uc2a4 \uccab\uac78\uc74c",id:"\ucfe0\ubc84\ub124\ud2f0\uc2a4-\uccab\uac78\uc74c",children:[]},{value:"\ud30c\ub4dc \uc2e4\ud589",id:"\ud30c\ub4dc-\uc2e4\ud589",children:[]},{value:"\ucee8\ud2b8\ub864\ub7ec\uc5d0 \uc758\ud55c \ud30c\ub4dc \uc2e4\ud589",id:"\ucee8\ud2b8\ub864\ub7ec\uc5d0-\uc758\ud55c-\ud30c\ub4dc-\uc2e4\ud589",children:[{value:"deployment.apps/hello-world",id:"deploymentappshello-world",children:[]},{value:"replicaset.apps/hello-world-66bff7794f",id:"replicasetappshello-world-66bff7794f",children:[]},{value:"pod/hello-world-66bff7794f-9vzpc",id:"podhello-world-66bff7794f-9vzpc",children:[]}]},{value:"\uc7a1\uc5d0 \uc758\ud55c \ud30c\ub4dc \uc2e4\ud589",id:"\uc7a1\uc5d0-\uc758\ud55c-\ud30c\ub4dc-\uc2e4\ud589",children:[{value:"\ud575\uc2ec \uc694\uc57d",id:"\ud575\uc2ec-\uc694\uc57d",children:[]}]},{value:"\ub2e4\uc591\ud55c POD \uad6c\uc131",id:"\ub2e4\uc591\ud55c-pod-\uad6c\uc131",children:[{value:"\ub2e8\ub3c5 \ud30c\ub4dc \uad6c\ub3d9",id:"\ub2e8\ub3c5-\ud30c\ub4dc-\uad6c\ub3d9",children:[]},{value:"\uc11c\ubc84 \ud0c0\uc785\uc758 \ud30c\ub4dc \uc81c\uc5b4",id:"\uc11c\ubc84-\ud0c0\uc785\uc758-\ud30c\ub4dc-\uc81c\uc5b4",children:[]},{value:"\ubc30\uce58 \ucc98\ub9ac \ud0c0\uc785 \ud30c\ub4dc \uc81c\uc5b4",id:"\ubc30\uce58-\ucc98\ub9ac-\ud0c0\uc785-\ud30c\ub4dc-\uc81c\uc5b4",children:[]}]},{value:"Reference",id:"reference",children:[]}],o={toc:u};function k(e){var t=e.components,l=(0,r.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},o,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\ub85c\uceec \ud658\uacbd\uc758 \ucfe0\ubc84\ub124\ud2f0\uc2a4 \ud074\ub7ec\uc2a4\ud130\ub97c \uc0dd\uc131\ud558\uace0 \uc2e4\uc2b5")),(0,a.kt)("h2",{id:"\ucfe0\ubc84\ub124\ud2f0\uc2a4-\uccab\uac78\uc74c"},"\ucfe0\ubc84\ub124\ud2f0\uc2a4 \uccab\uac78\uc74c"),(0,a.kt)("p",null,"hello-world \ucee8\ud14c\uc774\ub108\ub97c \ucfe0\ubc84\ub124\ud2f0\uc2a4\uc5d0\uc11c \ub3cc\ub824\ubcf4\uc790."),(0,a.kt)("p",null,"\ubcf8 \uc7a5\uc5d0\uc11c\ub294 ",(0,a.kt)("strong",{parentName:"p"},"minikube"),"\ub77c\uace0 \ud558\ub294 \ub85c\uceec \ucfe0\ubc84\ub124\ud2f0\uc2a4\ub97c \uc0ac\uc6a9\ud560 \uc608\uc815\uc774\ub2e4."),(0,a.kt)("p",null,"mac os\ub97c \uc0ac\uc6a9\ud558\uace0 \uc788\ub2e4\uba74 \uc544\ub798 \uba85\ub839\uc5b4\ub85c \uc544\uc8fc \uac04\ub2e8\ud558\uac8c \uc124\uce58\uac00 \uac00\ub2a5\ud558\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"brew install minikube\n")),(0,a.kt)("p",null,"\ub2e4\uc74c \uba85\ub839\uc5b4\ub85c \uc2e4\ud589\ud574\uc8fc\uc790."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"minikube start\n")),(0,a.kt)("p",null,"\ub2e4\uc74c \uba85\ub839\uc5b4\ub97c \uc785\ub825\ud558\uc5ec \ubbf8\ub2c8\ucfe0\ubca0\uc758 \ud074\ub7ec\uc2a4\ud130 \uc0c1\ud0dc\ub97c \ud655\uc778\ud574\ubcf4\uc790."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl cluster-info\n")),(0,a.kt)("p",null,"\ub2e4\uc74c \uba85\ub839\uc5b4\ub97c \uc785\ub825\ud558\uc5ec \ubbf8\ub2c8\ucfe0\ubca0\uc758 \ud074\ub7ec\uc2a4\ud130\uc758 \ub178\ub4dc \uad6c\uc131\uc744 \ud655\uc778\ud574\ubcf4\uc790."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get node\n")),(0,a.kt)("h2",{id:"\ud30c\ub4dc-\uc2e4\ud589"},"\ud30c\ub4dc \uc2e4\ud589"),(0,a.kt)("p",null,"\ubbf8\ub2c8\ucfe0\ubca0\uc5d0 hello-world \ucee8\ud14c\uc774\ub108\ub97c \uc2e4\ud589\ud574\ubcf4\uc790"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl run hello-world --image=hello-world -it --restart=Never\n")),(0,a.kt)("p",null,"\uc704\uc5d0\uc11c \uc0ac\uc6a9\ub41c \uc635\uc158\uc744 \ud558\ub098\uc529 \uc54c\uc544\ubcf4\uc790."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\uac12"),(0,a.kt)("th",{parentName:"tr",align:null},"\ud574\uc124"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"kubectl"),(0,a.kt)("td",{parentName:"tr",align:null},"k8s \ud074\ub7ec\uc2a4\ud130\ub97c \uc870\uc791\ud558\uae30 \uc704\ud55c \ucee4\ub9e8\ub4dc")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"run"),(0,a.kt)("td",{parentName:"tr",align:null},"\ucee8\ud14c\uc774\ub108 \uc2e4\ud589\uc744 \uba85\ub839\ud558\ub294 \uc11c\ube0c \ucee4\ub9e8\ub4dc")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"--image=hello-world"),(0,a.kt)("td",{parentName:"tr",align:null},"\ucee8\ud14c\uc774\ub108\uc758 \uc774\ubbf8\uc9c0, \ucfe0\ubc84\ub124\ud2f0\uc2a4\uc5d0\uc11c\ub294 \ud30c\ub4dc \ub2e8\uc704\ub85c \ucee8\ud14c\uc774\ub108\uac00 \uae30\ub3d9\ub418\uba70 \ub9ac\ud3ec\uc9c0\ud130\ub9ac\uba85\uc774 \uc0dd\ub7b5\ub41c \uacbd\uc6b0 ",(0,a.kt)("strong",{parentName:"td"},"\ub3c4\ucee4 \ud5c8\ube0c\ub97c default"),"\ub85c \uc0ac\uc6a9\ud55c\ub2e4.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"-it"),(0,a.kt)("td",{parentName:"tr",align:null},"\ub3c4\ucee4\uc5d0\uc11c\uc758 -it\uc640 \ub9c8\ucc2c\uac00\uc9c0\ub85c -i\ub294 \ud0a4\ubcf4\ub4dc\ub97c \ud45c\uc900 \uc785\ub825\uc5d0 \uc5f0\uacb0\ud558\uace0, -t\ub294 \uc720\uc0ac \ud130\ubbf8\ub110\uacfc \uc5f0\uacb0\ud558\uc5ec \ub300\ud654 \uc124\uc815. --restart=Never\uc778 \uacbd\uc6b0\uc5d0\ub9cc \uc720\ud6a8\ud558\uba70, \uadf8 \uc678\uc5d0\ub294 \ubc31\uadf8\ub77c\uc6b4\ub4dc\ub85c \uc2e4\ud589")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"--restart=Never"),(0,a.kt)("td",{parentName:"tr",align:null},"\uc774 \uc635\uc158\uc5d0 \ub530\ub77c \ud30c\ub4dc\uc758 \uae30\ub3d9 \ubc29\ubc95\uc744 \ubcc0\uacbd\ud560 \uc218 \uc788\ub2e4. Never\ub294 \uc9c1\uc811 \ud30c\ub4dc\uac00 \uae30\ub3d9\ub418\uba70 Always\ub098 OnFailure\ub294 \ucee8\ud2b8\ub864\ub7ec\ub97c \ud1b5\ud574 \ud30c\ub4dc\uac00 \uae30\ub3d9\ub41c\ub2e4.")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl delete pod hello-world\n")),(0,a.kt)("p",null,"\ub3c4\ucee4 \ucee8\ud14c\uc774\ub108\ub97c \uc9c0\uc6b0\ub4ef\uc774 \uc704 \uba85\ub839\uc5b4\ub85c \ud30c\ub4dc\ub97c \uc9c0\uc6b8 \uc218 \uc788\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"}," kubectl run hello-world --image=hello-world -it --restart=Never --rm\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--rm")," \uc635\uc158\uc740 \uc2e4\ud589 \ud6c4 \uc885\ub8cc\ub41c \ud31f\uc744 \uc790\ub3d9\uc73c\ub85c \uc81c\uac70\ud574\uc8fc\ub294 \uc635\uc158\uc774\ub2e4."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"kubectl run")," \uba85\ub839\uc5b4\ub97c \uc785\ub825\ud558\uace0 \uacb0\uacfc\uac00 \ud45c\uc2dc\ub420 \ub54c\uae4c\uc9c0\uc758 \ud750\ub984\uc740 \ub2e4\uc74c\uacfc \uac19\ub2e4."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"kubectl\uc774 \ucfe0\ubc84\ub124\ud2f0\uc2a4\uc5d0\uac8c \uba85\ub839\uc744 \uc804\ub2ec\ud55c\ub2e4.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\ub178\ub4dc\uc5d0 \uc774\ubbf8\uc9c0\uac00 \uc5c6\uc73c\uba74 \uc6d0\uaca9 \ub808\ud3ec\uc9c0\ud130\ub9ac(Docker Hub)\uc5d0\uc11c \ub2e4\uc6b4\ub85c\ub4dc\ud55c\ub2e4.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\ub178\ub4dc\uc758 containerd\uac00 \ucee8\ud14c\uc774\ub108\ub97c \uc2e4\ud589\ud55c\ub2e4.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"kubectl\uc774 \ud130\ubbf8\ub110\uc5d0 \uba54\uc2dc\uc9c0\ub97c \ud45c\uc2dc\ud55c\ub2e4."))),(0,a.kt)("p",null,"\uc704\uc758 \uacfc\uc815\uc73c\ub85c \uc2e4\ud589\ud55c ",(0,a.kt)("inlineCode",{parentName:"p"},"hello-world")," \ud31f\uc758 \uacbd\uc6b0 \uc2e4\ud589 \ud6c4 \ud31f\uc774 \uc5b4\ub5a4 \uc2e4\ud589 \uacb0\uacfc\ub97c \ubcf4\uc600\ub294\uc9c0 \uc54c \uc218 \uc5c6\ub2e4."),(0,a.kt)("p",null,"\uadf8\ub798\uc11c \uc6b0\ub9ac\ub294 \ub85c\uadf8\ub97c \ucd9c\ub825\uc2dc\ucf1c\uc11c \uacb0\uacfc\ub97c \ud655\uc778\ud574\ubcfc \uac83\uc774\ub2e4."),(0,a.kt)("p",null,"\ub2e4\uc74c\uc758 \uba85\ub839\uc5b4\ub85c \ud31f\uc758 \ub85c\uadf8\ub97c \ud655\uc778\ud558\uc790."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl run hello-world --image=hello-world -it --restart=Never\nkubectl logs hello-world\n")),(0,a.kt)("h2",{id:"\ucee8\ud2b8\ub864\ub7ec\uc5d0-\uc758\ud55c-\ud30c\ub4dc-\uc2e4\ud589"},"\ucee8\ud2b8\ub864\ub7ec\uc5d0 \uc758\ud55c \ud30c\ub4dc \uc2e4\ud589"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"kubectl run"),"\uc5d0 \uc635\uc158\uc744 \uc9c0\uc815\ud558\uba74 \ub514\ud50c\ub85c\uc774\uba3c\ud2b8 \ucee8\ud2b8\ub864\ub7ec\uc758 \uc81c\uc5b4\ud558\uc5d0 \uc2e4\ud589\ud558\ub294 \uac83\uc774 \uac00\ub2a5\ud558\ub2e4."),(0,a.kt)("p",null,"\uc774\ub54c \uc0ac\uc6a9\ud558\ub294 \uc635\uc158\uc774 \ubc14\ub85c ",(0,a.kt)("inlineCode",{parentName:"p"},"--restart=Always"),"\ub2e4."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"kubectl run"),"\uc5d0\uc11c ",(0,a.kt)("inlineCode",{parentName:"p"},"--restart=Always"),"\ub294 default \uc635\uc158\uc774\ubbc0\ub85c \uc704 \uba85\ub839\uc5b4\uc5d0\uc11c ",(0,a.kt)("inlineCode",{parentName:"p"},"--restart=Never"),"\ub97c \uc81c\uac70\ud558\uc790."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kubectl run hello-world --image=hello-world\n\n// \ucd9c\ub825\nkubectl run --generator=deployment/apps.v1 is DEPRECATED and will be removed in a future version. Use kubectl run --generator=run-pod/v1 or kubectl create instead.\ndeployment.apps/hello-world created\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"kubectl run")," \uc11c\ube0c\ucee4\ub9e8\ub4dc\uc758 \uae30\ub2a5\uc774 \uc9c0\ub098\uce58\uac8c \ubc29\ub300\ud574\uc9c0\ub294 \uac83\uc744 \ub9c9\uae30 \uc704\ud574 \ud30c\ub4dc \uc790\uccb4\ub97c \ub9cc\ub4e4 \ub54c\ub9cc run\uc744 \uc0ac\uc6a9\ud558\ub294 \uac83\uc744 \ucd94\ucc9c\ud558\uace0 \uc788\ub2e4."),(0,a.kt)("p",null,"\ub514\ud50c\ub85c\uc774\uba3c\ud2b8\ub97c \ub9cc\ub4e4 \ub54c\ub294 ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl create deployment --image hello-world hello-world"),"\ub97c \uc0ac\uc6a9\ud560 \uac83\uc744 \ucd94\ucc9c\ud558\uace0 \uc788\ub2e4."),(0,a.kt)("img",{width:"557",alt:"\u1109\u1173\u110f\u1173\u1105\u1175\u11ab\u1109\u1163\u11ba 2020-12-13 \u110b\u1169\u1112\u116e 10 02 34",src:"https://user-images.githubusercontent.com/43809168/102012640-e87ba600-3d8e-11eb-8eea-849969d0503e.png"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"kubectl get all")," \uba85\ub839\uc5b4\ub97c \uc0ac\uc6a9\ud574 \ub514\ud50c\ub85c\uc774\uba3c\ud2b8\uac00 \ub9cc\ub4e0 \ubaa8\ub4e0 \uc624\ube0c\uc81d\ud2b8\ub97c \ud655\uc778\ud560 \uc218 \uc788\ub2e4."),(0,a.kt)("p",null,"\ud558\ub098\uc529 \uc0b4\ud3b4\ubcf4\ub3c4\ub85d \ud558\uc790."),(0,a.kt)("h3",{id:"deploymentappshello-world"},"deployment.apps/hello-world"),(0,a.kt)("p",null,"\ub9cc\ub4dc\ub801\uc9c4 \ub514\ud50c\ub85c\uc774\uba3c\ud2b8 \uc624\ube0c\uc81d\ud2b8\uc758 \uc774\ub984\uc740 hello-world\uc774\ub2e4."),(0,a.kt)("p",null,"\uc774 \ucee8\ud2b8\ub864\ub7ec\ub294 \ub808\ud50c\ub9ac\uce74\uc14b \ucee8\ud2b8\ub864\ub7ec\uc640 \ud568\uaed8 \ud30c\ub4e4\ub974 \uad00\ub9ac\ud558\uc5ec \uc774\ubbf8\uc9c0\uc758 \ubc84\uc804, \ud30c\ub4dc\uc758 \uac1c\uc218 \ub4f1\uc774 \ubaa9\ud45c \uc0c1\ud0dc\uac00 \ub418\ub3c4\ub85d \uad00\ub9ac\ud574\uc900\ub2e4."),(0,a.kt)("h3",{id:"replicasetappshello-world-66bff7794f"},"replicaset.apps/hello-world-66bff7794f"),(0,a.kt)("p",null,"\ub514\ud50c\ub85c\uc774\uba3c\ud2b8\uc640 \ud568\uaed8 \ub9cc\ub4e4\uc5b4\uc9c4 \ub808\ud50c\ub9ac\uce74\uc14b \uc624\ube0c\uc81d\ud2b8\uc758 \uc774\ub984\uc740 ",(0,a.kt)("inlineCode",{parentName:"p"},"hello-world-66bff7794f"),"\uc774\ub2e4."),(0,a.kt)("p",null,"\ub808\ud50c\ub9ac\uce74\uc14b\uc740 \ub514\ud50c\ub85c\uc774\uba3c\ud2b8\uc640 \ud568\uaed8 \ud30c\ub4dc\uc758 \uc218\uac00 \uc9c0\uc815\ud55c \uac1c\uc218\uac00 \ub418\ub3c4\ub85d \uc81c\uc5b4\ud55c\ub2e4."),(0,a.kt)("p",null,"\uc720\uc800\uac00 \uc9c1\uc811 \ub808\ud50c\ub9ac\uce74\uc14b\uc744 \uc870\uc791\ud558\ub294 \uac83\uc740 \uad8c\uc7a5\ub418\uc9c0 \uc54a\ub294\ub2e4. (\ub514\ud50c\ub85c\uc774\uba3c\ud2b8\ub97c \ud1b5\ud574 \uc870\uc791\ud560 \uac83)"),(0,a.kt)("h3",{id:"podhello-world-66bff7794f-9vzpc"},"pod/hello-world-66bff7794f-9vzpc"),(0,a.kt)("p",null,"\ub514\ud50c\ub85c\uc774\uba3c\ud2b8\uac00 \uc0dd\uc131\ud55c ",(0,a.kt)("inlineCode",{parentName:"p"},"pod"),"\uc774\ub2e4. \uace0\uc720\ud55c \uc774\ub984\uc744 \uac16\uace0 \uc788\uc73c\uba70 \uc798 \ubcf4\uba74 \ub808\ud50c\ub9ac\uce74\uc14b \uc774\ub984 \ub4a4\uc5d0 \ud574\uc2dc \ubb38\uc790\uc5f4\uc774 \ucd94\uac00\ub418\uc5b4 \uc720\uc77c\ud55c \uc774\ub984\uc744 \ud615\uc131\ud558\uace0 \uc788\ub294 \uac83\uc744 \ud655\uc778\ud560 \uc218 \uc788\ub2e4."),(0,a.kt)("p",null,"\uc774\uc81c hello-world \ucee8\ud14c\uc774\ub108\uac00 \ub514\ud50c\ub85c\uc774\uba3c\ud2b8\uc5d0 \uc758\ud574 \uc5b4\ub5bb\uac8c \uc81c\uc5b4\ub418\ub294\uc9c0 \uc0b4\ud3b4\ubcf4\uc790."),(0,a.kt)("img",{width:"583",alt:"\u1109\u1173\u110f\u1173\u1105\u1175\u11ab\u1109\u1163\u11ba 2020-12-13 \u110b\u1169\u1112\u116e 10 09 18",src:"https://user-images.githubusercontent.com/43809168/102012827-d9e1be80-3d8f-11eb-88ff-477f362a6c98.png"}),(0,a.kt)("p",null,"\uc704\ub294 \ub514\ud50c\ub85c\uc774\uba3c\ud2b8\ub97c \uc2e4\ud589\ud558\uace0 \uc57d 8\ubd84\uc774 \uacbd\uacfc\ud588\uc744 \uc2dc\uc810\uc758 \uc0c1\ud0dc\uc774\ub2e4."),(0,a.kt)("p",null,"\uc704 \uc0c1\ud0dc\ub85c \uc6b0\ub9ac\ub294 \uc5ec\ub7ec \uc815\ubcf4\ub4e4\uc744 \uc5bb\uc744 \uc218 \uc788\ub294\ub370 \uadf8 \uc815\ubcf4\ub4e4\uc5d0 \ub300\ud574 \uc54c\uc544\ubcf4\uc790."),(0,a.kt)("p",null,"\uc6b0\uc120 ",(0,a.kt)("inlineCode",{parentName:"p"},"replica=\uc22b\uc790"),"\ub97c \uc0dd\ub7b5\ud588\uc73c\ubbc0\ub85c \uae30\ubcf8 \uac12\uc778 1\uc73c\ub85c \uc124\uc815\uc774\ub418\uc5b4\uc788\ub294 \uac83\uc744 \ud655\uc778\ud560 \uc218 \uc788\ub2e4."),(0,a.kt)("p",null,"\uadf8\ub9ac\uace0 ",(0,a.kt)("inlineCode",{parentName:"p"},"AVAILABLE")," \uceec\ub7fc\uc758 \uac12\uc740 0\uc73c\ub85c \ub098\uc624\ub294\ub370 \uc774\ub294 ",(0,a.kt)("strong",{parentName:"p"},"\ud30c\ub4dc\uac00 \uae30\ub3d9\uc5d0 \uc2e4\ud328"),"\ud588\uc74c\uc744 \uc758\ubbf8\ud55c\ub2e4."),(0,a.kt)("p",null,"\uc544\ub798\ub294 ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl get deployment")," \uac01 \ud56d\ubaa9\uc758 \uc758\ubbf8\uc774\ub2e4."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\ud56d\ubaa9\uba85"),(0,a.kt)("th",{parentName:"tr",align:null},"\uc124\uba85"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"NAME"),(0,a.kt)("td",{parentName:"tr",align:null},"\ub514\ud50c\ub85c\uc774\uba3c\ud2b8 \uc624\ube0c\uc81d\ud2b8 \uba85")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"READY"),(0,a.kt)("td",{parentName:"tr",align:null},"\ud30c\ub4dc\uc758 \uae30\ub3d9 \uc644\ub8cc\uc218. \ubd84\uc790\uc640 \ubd84\ubaa8\uc758 \ud615\ud0dc\ub85c \uc22b\uc790\uac00 \ud45c\uc2dc\ub41c\ub2e4. \ubd84\ubaa8\uc758 \uacbd\uc6b0 \ucd5c\uc885 \uc2e4\ud589 \ubaa9\ud45c \uac1c\uc218, \ubd84\uc790\uc758 \uacbd\uc6b0 \ud604\uc7ac \uc2e4\ud589 \uac1c\uc218\uc774\ub2e4.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"UP-TO-DATE"),(0,a.kt)("td",{parentName:"tr",align:null},"\ucd5c\uadfc \uc5c5\ub370\uc774\ud2b8\ub41c \ud30c\ub4dc\uc758 \uac1c\uc218. \uc989 \ucee8\ud2b8\ub864\ub7ec\uc5d0 \uc758\ud574 \uc870\uc815\ub41c \ud30c\ub4dc \uc218")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"AVAILABLE"),(0,a.kt)("td",{parentName:"tr",align:null},"\uc0ac\uc6a9 \uac00\ub2a5\ud55c \ud30c\ub4dc \uc218. \uc815\uc0c1\uc801\uc73c\ub85c \uae30\ub3d9\ub418\uc5b4 \uc11c\ube44\uc2a4 \uac00\ub2a5\ud55c \ud30c\ub4dc \uc218")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"AGE"),(0,a.kt)("td",{parentName:"tr",align:null},"\uc624\ube0c\uc81d\ud2b8\uac00 \ub9cc\ub4e4\uc5b4\uc9c4 \ud6c4 \uacbd\uacfc \uc2dc\uac04")))),(0,a.kt)("p",null,"\ud30c\ub4dc\uc5d0 \ub300\ud55c \ud56d\ubaa9\uc740 \uc544\ub798\uc640 \uac19\ub2e4."),(0,a.kt)("p",null,"\uc704 \uc2e4\ud589 \uacb0\uacfc\uc5d0\uc11c \ud30c\ub4dc\uc758 ",(0,a.kt)("inlineCode",{parentName:"p"},"STATUS"),"\uac00 ",(0,a.kt)("inlineCode",{parentName:"p"},"CrashLoopBackOff"),"\ub77c\ub294 \uc0c1\ud0dc\ub97c \ud45c\uc2dc\ud558\ub294\ub370 \uc774\ub294 hello-world \ud30c\ub4dc\uac00 \uc5b4\ub5a4 \ubb38\uc81c\ub85c \uc778\ud574 \uc7ac\uc2dc\uc791\uc744 \uacc4\uc18d\ud574\uc11c \ubc18\ubcf5\ud558\uace0 \uc788\ub294 \uc0c1\ud0dc\uc784\uc744 \uc758\ubbf8\ud55c\ub2e4."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"CrashLoopBackOff")," \uc0c1\ud0dc\uac00 \ub418\uba74 \ucee8\ud14c\uc774\ub108\ub97c \uc7ac\uae30\ub3d9\ud560 \ub54c CPU \ubd80\ud558\uac00 \ub9ce\uc774 \ubc1c\uc0dd\ud558\ubbc0\ub85c, CPU \uacfc\ubd80\ud558\ub97c \ub9c9\uae30 \uc704\ud574 \uc77c\uc815 \uac04\uaca9\uc744 \ub450\uace0 \uc7ac\uc2dc\uc791\uc744 \uc2e4\ud589\ud55c\ub2e4."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\ud56d\ubaa9\uba85"),(0,a.kt)("th",{parentName:"tr",align:null},"\uc124\uba85"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"NAME"),(0,a.kt)("td",{parentName:"tr",align:null},"\ub514\ud50c\ub85c\uc774\uba3c\ud2b8 \uc624\ube0c\uc81d\ud2b8 \uba85")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"READY"),(0,a.kt)("td",{parentName:"tr",align:null},"\uae30\ub3d9 \uc644\ub8cc\uc218. \ubd84\uc790\uc640 \ubd84\ubaa8\uc758 \ud615\ud0dc\ub85c \uc22b\uc790\uac00 \ud45c\uc2dc\ub41c\ub2e4.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"STATUS"),(0,a.kt)("td",{parentName:"tr",align:null},"\ud30c\ub4dc\uc758 \uc0c1\ud0dc.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"RESTARTS"),(0,a.kt)("td",{parentName:"tr",align:null},"\ud30c\ub4dc\uac00 \uc7ac\uc2dc\uc791\ud55c \ud69f\uc218")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"AGE"),(0,a.kt)("td",{parentName:"tr",align:null},"\uc624\ube0c\uc81d\ud2b8 \uc0dd\uc131 \ud6c4 \uacbd\uacfc \uc2dc\uac04")))),(0,a.kt)("p",null,"\ud30c\ub4dc\uac00 \uc608\uc678\uc5d0 \uc758\ud574 \uc7ac\uc2dc\uc791\uc744 \ubc18\ubcf5\ud55c\ub2e4\ub294 \uac83\uc740 \uc5b4\ub5a4 \uc758\ubbf8\ub97c \uac00\uc9c8\uae4c?"),(0,a.kt)("p",null,"\ub514\ud50c\ub85c\uc774\uba3c\ud2b8\uc5d0 \uc758\ud574 \uad00\ub9ac\ub418\ub294 \ud30c\ub4dc\ub294 \ubcf4\ud1b5 \uc6f9 \uc11c\ubc84\ucc98\ub7fc ",(0,a.kt)("strong",{parentName:"p"},"\uc0c1\uc2dc")," \uad6c\ub3d9\ub418\ub294 \uacbd\uc6b0\uac00 \ub9ce\ub2e4."),(0,a.kt)("p",null,"\uadf8\ub7ec\ub098 \uc704\uc758 ",(0,a.kt)("inlineCode",{parentName:"p"},"hello-world")," \ud30c\ub4dc\ub294 \uc2e4\ud589 \ud6c4 \uc885\ub8cc\ub418\ubbc0\ub85c \ub514\ud50c\ub85c\uc774\uba3c\ud2b8\uac00 \ud30c\ub4dc\ub97c \uacc4\uc18d\ud574\uc11c \uc7ac\uc2dc\uc791 \ud558\uace0 \uc788\uc73c\ubbc0\ub85c ",(0,a.kt)("inlineCode",{parentName:"p"},"CrashLoopBackOff")," \uc0c1\ud0dc\uac00 \ub41c \uac83\uc774\ub2e4."),(0,a.kt)("p",null,"\ub530\ub77c\uc11c \ucc98\uc74c\ubd80\ud130 ",(0,a.kt)("inlineCode",{parentName:"p"},"hello-world")," \ub514\ud50c\ub85c\uc774\uba3c\ud2b8\ub294 \ucee8\ud2b8\ub864\ub7ec\uc5d0 \ub9de\uc9c0 \uc54a\ub294 \uc6cc\ud06c\ub85c\ub4dc\ub97c \uac00\uc9c4\ub2e4\uace0 \ubcfc \uc218 \uc788\ub2e4."),(0,a.kt)("p",null,"\uadf8\ub7ec\ub2c8 \ub514\ud50c\ub85c\uc774\uba3c\ud2b8\uc5d0 \uc801\ud569\ud55c \uc6cc\ud06c\ub85c\ub4dc\ub97c \uac00\uc9c0\ub294 \ud30c\ub4dc\ub97c \uc0c8\ub86d\uac8c \uc0dd\uc131\ud558\uc790."),(0,a.kt)("p",null,"\ub514\ud50c\ub85c\uc774\uba3c\ud2b8 \uc0ad\uc81c\ub294 \uc544\ub798\uc758 \uba85\ub839\uc5b4\ub85c \uac00\ub2a5\ud558\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl delete deployment hello-world\n")),(0,a.kt)("p",null,"\uc774\ubc88\uc5d4 \uc6f9 \uc11c\ubc84\uc758 \ud30c\ub4dc 5\uac1c\ub97c \uae30\ub3d9\ud574\ubcf4\uc790."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kubectl run webserver --image=nginx --replicas=5\n")),(0,a.kt)("img",{width:"605",alt:"\u1109\u1173\u110f\u1173\u1105\u1175\u11ab\u1109\u1163\u11ba 2020-12-13 \u110b\u1169\u1112\u116e 10 23 04",src:"https://user-images.githubusercontent.com/43809168/102013162-c8011b00-3d91-11eb-8cf0-54edb506e83c.png"}),(0,a.kt)("p",null,"\uc774 \uc6f9\uc11c\ubc84\ub294 \ucd1d 5\ub300\uc758 \ud30c\ub4dc\ub85c \uad6c\ub3d9\ub418\uace0 \uc788\uc73c\uba70 \ud558\ub098\ub97c \uc9c0\uc6b0\ub354\ub77c\ub3c4 \ud30c\ub4dc\uac00 \uc790\ub3d9\uc73c\ub85c \uc7ac\uc2e4\ud589\ub41c\ub2e4."),(0,a.kt)("h2",{id:"\uc7a1\uc5d0-\uc758\ud55c-\ud30c\ub4dc-\uc2e4\ud589"},"\uc7a1\uc5d0 \uc758\ud55c \ud30c\ub4dc \uc2e4\ud589"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"kubectl run"),"\uc758 \uc635\uc158\uc73c\ub85c ",(0,a.kt)("inlineCode",{parentName:"p"},"--restart=OnFailure"),"\ub97c \uc9c0\uc815\ud558\uc5ec \uc7a1 \ucee8\ud2b8\ub864\ub7ec\uc758 \uc81c\uc5b4\ud558\uc5d0 \ud30c\ub4dc\ub97c \uae30\ub3d9\ud574\ubcf4\uc790."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kubectl run hello-world --image=hello-world --restart=OnFailure\n")),(0,a.kt)("img",{width:"536",alt:"\u1109\u1173\u110f\u1173\u1105\u1175\u11ab\u1109\u1163\u11ba 2020-12-13 \u110b\u1169\u1112\u116e 10 25 53",src:"https://user-images.githubusercontent.com/43809168/102013232-2a5a1b80-3d92-11eb-9798-a7699ecaee4f.png"}),(0,a.kt)("p",null,"\uc774\ubc88\uc5d0\ub294 \ub514\ud50c\ub85c\uc774\uba3c\ud2b8\uac00 \uc544\ub2cc ",(0,a.kt)("inlineCode",{parentName:"p"},"job")," \uc624\ube0c\uc81d\ud2b8\uac00 \uc0dd\uc131\ub41c \uac83\uc744 \ud655\uc778\ud560 \uc218 \uc788\ub2e4."),(0,a.kt)("p",null,"\uc7a1 \ucee8\ud2b8\ub864\ub7ec\uc758 \uc5ed\ud560\uc740 \ucee8\ud14c\uc774\ub108\uc758 \ud504\ub85c\uc138\uc2a4 \uc885\ub8cc \ucf54\ub4dc \uac12\uc73c\ub85c \uc131\uacf5\uacfc \uc2e4\ud328\ub97c \ud310\ubcc4\ud55c\ub2e4."),(0,a.kt)("p",null,"\uc7a1 \ucee8\ud2b8\ub864\ub7ec\ub294 \ucd94\ud6c4 \uc2a4\ud15d 10\uc5d0\uc11c \ub2e4\uc2dc \uc790\uc138\ud558\uac8c \ub2e4\ub8e8\ubbc0\ub85c \uc774\ud6c4\uc5d0 \ub354 \uc790\uc138\ud788 \ubc30\uc6b0\ub3c4\ub85d \ud558\uc790."),(0,a.kt)("h3",{id:"\ud575\uc2ec-\uc694\uc57d"},"\ud575\uc2ec \uc694\uc57d"),(0,a.kt)("h4",{id:"1-\ud30c\ub4dc\ub97c-\uad00\ub9ac\ud558\ub294-\uc5ec\ub7ec-\ucee8\ud2b8\ub864\ub7ec\uac00-\uc788\uc73c\uba70-\uc6cc\ud06c\ub85c\ub4dc\uc5d0-\ub9de\uac8c-\uc120\ud0dd\ud574\uc57c-\ud55c\ub2e4"},"1) \ud30c\ub4dc\ub97c \uad00\ub9ac\ud558\ub294 \uc5ec\ub7ec \ucee8\ud2b8\ub864\ub7ec\uac00 \uc788\uc73c\uba70 \uc6cc\ud06c\ub85c\ub4dc\uc5d0 \ub9de\uac8c \uc120\ud0dd\ud574\uc57c \ud55c\ub2e4"),(0,a.kt)("h4",{id:"2-\ub514\ud50c\ub85c\uc774\uba3c\ud2b8\ub294-\uc6f9-\uc11c\ubc84\ub098-api-\uc11c\ubc84\ucc98\ub7fc-\uc9c0\uc18d\uc801\uc73c\ub85c-\uc11c\ube44\uc2a4\ub97c-\uc81c\uacf5\ud574\uc57c-\ud558\ub294-\uc6cc\ud06c\ub85c\ub4dc\uc5d0-\uc801\ud569\ud55c-\ucee8\ud2b8\ub864\ub7ec\uc774\ub2e4"},"2) \ub514\ud50c\ub85c\uc774\uba3c\ud2b8\ub294 \uc6f9 \uc11c\ubc84\ub098 API \uc11c\ubc84\ucc98\ub7fc \uc9c0\uc18d\uc801\uc73c\ub85c \uc11c\ube44\uc2a4\ub97c \uc81c\uacf5\ud574\uc57c \ud558\ub294 \uc6cc\ud06c\ub85c\ub4dc\uc5d0 \uc801\ud569\ud55c \ucee8\ud2b8\ub864\ub7ec\uc774\ub2e4"),(0,a.kt)("h4",{id:"3-\uc7a1-\ucee8\ud2b8\ub864\ub7ec\ub294-\ubc30\uce58-\ucc98\ub9ac\uc640-\uac19\uc740-\uc6cc\ud06c\ub85c\ub4dc\uc5d0-\uc801\ud569\ud55c-\ucee8\ud2b8\ub864\ub7ec\ub2e4"},"3) \uc7a1 \ucee8\ud2b8\ub864\ub7ec\ub294 \ubc30\uce58 \ucc98\ub9ac\uc640 \uac19\uc740 \uc6cc\ud06c\ub85c\ub4dc\uc5d0 \uc801\ud569\ud55c \ucee8\ud2b8\ub864\ub7ec\ub2e4"),(0,a.kt)("h2",{id:"\ub2e4\uc591\ud55c-pod-\uad6c\uc131"},"\ub2e4\uc591\ud55c POD \uad6c\uc131"),(0,a.kt)("h3",{id:"\ub2e8\ub3c5-\ud30c\ub4dc-\uad6c\ub3d9"},"\ub2e8\ub3c5 \ud30c\ub4dc \uad6c\ub3d9"),(0,a.kt)("img",{width:"1317",alt:"\u1109\u1173\u110f\u1173\u1105\u1175\u11ab\u1109\u1163\u11ba 2020-12-13 \u110b\u1169\u1112\u116e 10 38 16",src:"https://user-images.githubusercontent.com/43809168/102013515-039ce480-3d94-11eb-97e3-39c447351861.png"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\ube44\uc815\uc0c1\uc801\uc73c\ub85c \uc885\ub8cc\ud574\ub3c4 \uc7ac\uae30\ub3d9\ud558\uc9c0 \uc54a\uc74c")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\ucee8\ud14c\uc774\ub108 \uc885\ub8cc \ud6c4 \uc0ad\uc81c \ud544\uc694")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\uc218\ud3c9 \uc2a4\ucf00\uc77c\uc774 \uc548 \ub428"))),(0,a.kt)("h3",{id:"\uc11c\ubc84-\ud0c0\uc785\uc758-\ud30c\ub4dc-\uc81c\uc5b4"},"\uc11c\ubc84 \ud0c0\uc785\uc758 \ud30c\ub4dc \uc81c\uc5b4"),(0,a.kt)("img",{width:"1350",alt:"\u1109\u1173\u110f\u1173\u1105\u1175\u11ab\u1109\u1163\u11ba 2020-12-13 \u110b\u1169\u1112\u116e 10 38 24",src:"https://user-images.githubusercontent.com/43809168/102013517-0697d500-3d94-11eb-998b-0405ab54c13d.png"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\uc694\uad6c\ub97c \uacc4\uc18d \ub300\uae30\ud558\uba74\uc11c \uc885\ub8cc\ud558\uc9c0 \uc54a\ub294 \ud0c0\uc785")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\uc218\ud3c9 \uc2a4\ucf00\uc77c")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\ube44\uc815\uc0c1 \uc885\ub8cc \uc2dc \uae30\ub3d9\ud568"))),(0,a.kt)("h3",{id:"\ubc30\uce58-\ucc98\ub9ac-\ud0c0\uc785-\ud30c\ub4dc-\uc81c\uc5b4"},"\ubc30\uce58 \ucc98\ub9ac \ud0c0\uc785 \ud30c\ub4dc \uc81c\uc5b4"),(0,a.kt)("img",{width:"1070",alt:"\u1109\u1173\u110f\u1173\u1105\u1175\u11ab\u1109\u1163\u11ba 2020-12-13 \u110b\u1169\u1112\u116e 10 38 55",src:"https://user-images.githubusercontent.com/43809168/102013520-08619880-3d94-11eb-881e-7988939ec027.png"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\ucc98\ub9ac\uac00 \uc815\uc0c1 \uc885\ub8cc \uc2dc \uc644\ub8cc\ud568")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\ucc98\ub9ac\uac00 \uc2e4\ud328\ud558\uba74 \uc7ac\uc2dc\ub3c4")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\ubcd1\ub82c \ucc98\ub9ac \uc218\ub97c \uc124\uc815\ud574\uc11c \uc2dc\uac04 \ub2e8\ucd95"))),(0,a.kt)("h2",{id:"reference"},"Reference"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/43809168/101032998-6684c380-35bd-11eb-8ba7-a784fd46b37a.png",alt:"k8s"})),(0,a.kt)("p",null,"15\ub2e8\uacc4\ub85c \ubc30\uc6b0\ub294 \ub3c4\ucee4\uc640 \ucfe0\ubc84\ub124\ud2f0\uc2a4 - \ud0c0\uce74\ub77c \ub9c8\ud638 \uc800\uc11c"))}k.isMDXComponent=!0}}]);