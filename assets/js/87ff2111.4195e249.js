(self.webpackChunkstudy=self.webpackChunkstudy||[]).push([[6709],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=c(n),d=a,f=s["".concat(u,".").concat(d)]||s[d]||k[d]||l;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=s;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},4978:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return i},toc:function(){return u},default:function(){return p}});var r=n(2122),a=n(9756),l=(n(7294),n(3905)),o={id:"03-consumer",title:"03. \uce74\ud504\uce74 \ucee8\uc288\uba38"},i={unversionedId:"kafka/kafka-core-guide/03-consumer",id:"kafka/kafka-core-guide/03-consumer",isDocsHomePage:!1,title:"03. \uce74\ud504\uce74 \ucee8\uc288\uba38",description:"\uce74\ud504\uce74 \ucee8\uc288\uba38\ub97c \uc774\ud574\ud558\uae30 \uc704\ud574\uc11c\ub294 \uce74\ud504\uce74 \ucee8\uc288\uba38\uc640 \ucee8\uc288\uba38 \uadf8\ub8f9\uc744 \uc54c\uc544\uc57c\ud55c\ub2e4.",source:"@site/docs/kafka/kafka-core-guide/03-consumer.md",sourceDirName:"kafka/kafka-core-guide",slug:"/kafka/kafka-core-guide/03-consumer",permalink:"/study/docs/kafka/kafka-core-guide/03-consumer",editUrl:"https://github.com/minkukjo/study/edit/master/docs/kafka/kafka-core-guide/03-consumer.md",version:"current",lastUpdatedAt:1622896523,formattedLastUpdatedAt:"6/5/2021",sidebarPosition:3,frontMatter:{id:"03-consumer",title:"03. \uce74\ud504\uce74 \ucee8\uc288\uba38"},sidebar:"mySidebar",previous:{title:"07. \ub78c\ub2e4\uc640 \uc2a4\ud2b8\ub9bc",permalink:"/study/docs/java/effective-java/07-lambda-stream"},next:{title:"05. \uce74\ud504\uce74\uc758 \ub0b4\ubd80 \uba54\ucee4\ub2c8\uc998",permalink:"/study/docs/kafka/kafka-core-guide/05-internal"}},u=[{value:"\uce74\ud504\uce74\uc640 \ucee8\uc288\uba38 \uadf8\ub8f9",id:"\uce74\ud504\uce74\uc640-\ucee8\uc288\uba38-\uadf8\ub8f9",children:[]},{value:"\ucee8\uc288\uba38 \uadf8\ub8f9\uacfc \ub9ac\ubc38\ub7f0\uc2f1",id:"\ucee8\uc288\uba38-\uadf8\ub8f9\uacfc-\ub9ac\ubc38\ub7f0\uc2f1",children:[]},{value:"\uce74\ud504\uce74 \ucee8\uc288\uba38 \uc0dd\uc131 \ubc0f \ud1a0\ud53d \uad6c\ub3c5\ud558\ub294 \ub9ac\uc2a4\ud130 \ub9cc\ub4e4\uae30",id:"\uce74\ud504\uce74-\ucee8\uc288\uba38-\uc0dd\uc131-\ubc0f-\ud1a0\ud53d-\uad6c\ub3c5\ud558\ub294-\ub9ac\uc2a4\ud130-\ub9cc\ub4e4\uae30",children:[]},{value:"\ucee4\ubc0b\uacfc \uc624\ud504\uc14b",id:"\ucee4\ubc0b\uacfc-\uc624\ud504\uc14b",children:[]},{value:"\uc790\ub3d9 \ucee4\ubc0b",id:"\uc790\ub3d9-\ucee4\ubc0b",children:[]},{value:"\ud604\uc7ac\uc758 \uc624\ud504\uc14b \ucee4\ubc0b\ud558\uae30",id:"\ud604\uc7ac\uc758-\uc624\ud504\uc14b-\ucee4\ubc0b\ud558\uae30",children:[]},{value:"\ube44\ub3d9\uae30 \ucee4\ubc0b",id:"\ube44\ub3d9\uae30-\ucee4\ubc0b",children:[]},{value:"Reference",id:"reference",children:[]}],c={toc:u};function p(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\uce74\ud504\uce74 \ucee8\uc288\uba38\ub97c \uc774\ud574\ud558\uae30 \uc704\ud574\uc11c\ub294 \uce74\ud504\uce74 \ucee8\uc288\uba38\uc640 \ucee8\uc288\uba38 \uadf8\ub8f9\uc744 \uc54c\uc544\uc57c\ud55c\ub2e4.")),(0,l.kt)("h2",{id:"\uce74\ud504\uce74\uc640-\ucee8\uc288\uba38-\uadf8\ub8f9"},"\uce74\ud504\uce74\uc640 \ucee8\uc288\uba38 \uadf8\ub8f9"),(0,l.kt)("p",null,"\uce74\ud504\uce74\ub294 \uba54\uc2dc\uc9c0\ub97c \ubc1c\ud589\ud558\ub294 \ud504\ub85c\ub4c0\uc11c\uac00 \uc5ec\ub7ec \uac1c\uac00 \ub420 \uc218 \uc788\ub4ef\uc774, \ucee8\uc288\uba38 \ub610\ud55c \uc5ec\ub7ec \ucee8\uc288\uba38\ub4e4\uc774 \uc874\uc7ac\ud560 \uc218 \uc788\ub530."),(0,l.kt)("p",null,"\uc774\ub7ec\ud55c \ucee8\uc288\uba38\ub4e4\uc740 \ucee8\uc288\uba38 \uadf8\ub8f9\uc5d0 \uc18d\ud55c\ub2e4."),(0,l.kt)("p",null,"\uac00\ub839 \ud558\ub098\uc758 \uadf8\ub8f9\uc740 \ud2b9\uc815 \ud1a0\ud53d \uc548\uc5d0 \uc788\ub294 N\uac1c\uc758 \ud30c\ud2f0\uc158\uc744 \uc77d\uc5b4\uac08 \uc218 \uc788\ub2e4."),(0,l.kt)("p",null,"\uc911\uc694\ud55c \uac83\uc740 \ud55c \ud1a0\ud53d \ub0b4\uc758 \ud30c\ud2f0\uc158 \uc218 \ubcf4\ub2e4 \ub354 \ub9ce\uc740 \ucee8\uc288\uba38\ub97c \ucd94\uac00\ud558\ub294 \uac83\uc740 \uc758\ubbf8\uac00 \uc5c6\ub2e4. ( \uc774\ub807\uac8c \ub418\uba74 \uc77c\ubd80 \ucee8\uc288\uba38\uac00 \uc26c\uac8c \ub41c\ub2e4. )"),(0,l.kt)("p",null,"\uac19\uc740 \ud1a0\ud53d\uc758 \uba54\uc2dc\uc9c0\ub97c \ub2e4\uc218\uc758 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc774 \uc77d\uc5b4\uc57c\ud558\ub294 \uacbd\uc6b0\ub77c\uba74 \uce74\ud504\uce74 \uadf8\ub8f9\uc744 \uc0ac\uc6a9\ud558\uc790."),(0,l.kt)("p",null,"(\uac01 \ucee8\uc288\uba38\ub294 \uc2a4\ub808\ub4dc\ub85c \uad6c\ud604\ub418\uba70 \ubcd1\ud589\uc73c\ub85c \uc2e4\ud589\ub41c\ub2e4.)"),(0,l.kt)("h2",{id:"\ucee8\uc288\uba38-\uadf8\ub8f9\uacfc-\ub9ac\ubc38\ub7f0\uc2f1"},"\ucee8\uc288\uba38 \uadf8\ub8f9\uacfc \ub9ac\ubc38\ub7f0\uc2f1"),(0,l.kt)("p",null,"\ucee8\uc288\uba38 \uadf8\ub8f9\uc758 \ucee8\uc288\uba38\ub4e4\uc740 \uc790\uc2e0\uc774 \uc77d\ub294 \ud1a0\ud53d\uc758 \uc18c\uc720\uad8c\uc744 \uacf5\uc720\ud55c\ub2e4."),(0,l.kt)("p",null,"\uadf8\ub9ac\uace0 \uc0c8\ub85c\uc6b4 \ucee8\uc288\uba38\ub97c \uadf8\ub8f9\uc5d0 \ucd94\uac00\ud558\uba74 \uc774\uc804\uc5d0 \ub2e4\ub978 \ucee4\uc288\uba38\uac00 \uc77d\ub358 \ud30c\ud2f0\uc158\uc758 \uba54\uc2dc\uc9c0\ub4e4\uc744 \uc77d\ub294\ub2e4."),(0,l.kt)("p",null,"\ub9cc\uc57d \ucee8\uc288\uba38\uac00 \uc911\ub2e8\ud55c\ub2e4\uba74 \uadf8 \ucee8\uc288\uba38\uac00 \uc77d\ub358 \ud30c\ud2f0\uc158\uc740 \ub0a8\uc740 \ucee8\uc288\uba38 \uc911 \ud558\ub098\uac00 \uc7ac\ud560\ub2f9\ubc1b\uc544 \uc77d\ub294\ub2e4."),(0,l.kt)("p",null,"\ud574\ub2f9 \ucee8\uc288\uba38 \uadf8\ub8f9\ub4e4\uc774 \uc77d\ub294 \ud1a0\ud53d\uc5d0 \ubcc0\uacbd \uc0ac\ud56d\uc774 \uc0dd\uae30\ub294 \uacbd\uc6b0(\uad00\ub9ac\uc790\uac00 \uc0c8\ub85c\uc6b4 \ud30c\ud2f0\uc158\uc744 \ucd94\uac00\ud558\ub294 \uacbd\uc6b0) \ud30c\ud2f0\uc158\uc758 \uc7ac\ud560\ub2f9\uc774 \uc0dd\uae38 \uc218 \uc788\ub2e4."),(0,l.kt)("p",null,"\ud55c \ucee8\uc288\uba38\uac00 \ub2e4\ub978 \ucee8\uc288\uba38\ub85c \ud30c\ud2f0\uc158 \uc18c\uc720\uad8c \uc774\uc804\ud558\ub294 \uac83\uc744 ",(0,l.kt)("inlineCode",{parentName:"p"},"\ub9ac\ubc38\ub7f0\uc2f1(rebalancing)"),"\uc774\ub77c \ubd80\ub978\ub2e4."),(0,l.kt)("p",null,"\ub9ac\ubc38\ub7f0\uc2dc\uc740 \ucee8\uc288\uba38 \uadf8\ub8f9\uc758 \uac15\uc694\uc131\uacfc \ud655\uc7a5\uc131\uc744 \ub192\uc5ec\uc8fc\ub294 \uc911\uc694\ud55c \uac1c\ub150\uc774\ub2e4."),(0,l.kt)("p",null,"\uadf8\ub7ec\ub098 \ub9ac\ubc38\ub7f0\uc2f1 \ub418\ub294 \ub3d9\uc548 \ucee8\uc288\uba38\ub4e4\uc774 \uba54\uc2dc\uc9c0\ub97c \uc77d\uc744 \uc218 \uc5c6\uc73c\ubbc0\ub85c \ud574\ub2f9 \ucee8\uc288\uba38 \uadf8\ub8f9 \uc804\uccb4\uac00 \uc7a0\uc2dc \uc0ac\uc6a9 \ubd88\uac00 \uc0c1\ud0dc\uac00 \ub41c\ub2e4."),(0,l.kt)("p",null,"\uadf8\ub8f9 \uc870\uc815\uc790(group coordinator)\ub85c \uc9c0\uc815\ub41c \uce74\ud504\uce74 \ube0c\ub85c\ucee4\uc5d0\uac8c \ucee8\uc288\uba38\uac00 \ud558\ud2b8\ube44\ud2b8\ub97c \uc804\uc1a1\ud558\uba74 \uc790\uc2e0\uc758 \uc18d\ud55c \ucee8\uc288\uba38 \uadf8\ub8f9\uc758 \uba64\ubc84\uc2ed\uacfc \uc790\uc2e0\uc5d0\uac8c \ud560\ub2f9\ub41c \ud30c\ud2f0\uc158 \uc18c\uc720\uad8c\uc744 \uc720\uc9c0\ud560 \uc218 \uc788\ub2e4."),(0,l.kt)("p",null,"\ud558\ud2b8\ube44\ud2b8\ub294 \ucee8\uc288\uba38\uac00 \ud3f4\ub9c1\uc744 \ud560 \ub54c \ub610\ub294 \uc77d\uc740 \uba54\uc2dc\uc9c0\ub97c \ucee4\ubc0b\ud560 \ub54c \uc790\ub3d9 \uc804\uc1a1\ub41c\ub2e4."),(0,l.kt)("p",null,"\ub9cc\uc57d \ucee8\uc288\uba38\uac00 \uc138\uc158 \ud0c0\uc784\uc544\uc6c3 \uc2dc\uac04\uc774 \uacbd\uacfc\ub420 \ub54c\uae4c\uc9c0 \ud558\ud2b8\ube44\ud2b8 \uc804\uc1a1\uc744 \uc911\ub2e8\ud558\uba74 GroupCoordinator\uac00 \ud574\ub2f9 \ucee8\uc288\uba38\ub97c \uc911\ub2e8\ub41c \uac83\uc73c\ub85c \uac04\uc8fc\ud558\uace0 \ub9ac\ubc38\ub7f0\uc2f1\uc744 \uc2dc\uc791\ud55c\ub2e4."),(0,l.kt)("h2",{id:"\uce74\ud504\uce74-\ucee8\uc288\uba38-\uc0dd\uc131-\ubc0f-\ud1a0\ud53d-\uad6c\ub3c5\ud558\ub294-\ub9ac\uc2a4\ud130-\ub9cc\ub4e4\uae30"},"\uce74\ud504\uce74 \ucee8\uc288\uba38 \uc0dd\uc131 \ubc0f \ud1a0\ud53d \uad6c\ub3c5\ud558\ub294 \ub9ac\uc2a4\ud130 \ub9cc\ub4e4\uae30"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'@Service\npublic class MessageListener {\n\n    @KafkaListener(topics = "topic", groupId = "groupId", containerFactory = KafkaConsumerConfig.ConsumerContainer)\n    public void listen(MessageDto dto) throws ResponseException {\n        System.out.println("recv : " + dto);\n    }\n}\n')),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"spring-kafka"),"\uc5d0\uc11c\ub294 \uce74\ud504\uce74 \ub9ac\uc2a4\ub108\ub97c \uc560\ub178\ud14c\uc774\uc158\uc73c\ub85c \uac04\ub2e8\ud558\uac8c \uc0dd\uc131\ud558\uace0 \uad6c\ub3c5\uc2dc\ud0ac \uc218 \uc788\ub2e4."),(0,l.kt)("p",null,"\uce74\ud504\uce74\uc758 \ud575\uc2ec \ub85c\uc9c1\uc740 ",(0,l.kt)("inlineCode",{parentName:"p"},"\ud3f4\ub9c1"),"\uc774\ub2e4."),(0,l.kt)("p",null,"\ub9ac\uc2a4\ub108\ubcc4 \uac1c\ubcc4 \uc2a4\ub808\ub4dc\ub97c \ub9cc\ub4e4\uace0 \ubb34\ud55c\ub8e8\ud504\ub97c \ub3cc\uba74\uc11c \uce74\ud504\uce74\uc5d0\uac8c \ud3f4\ub9c1\uc744 \ud55c\ub2e4."),(0,l.kt)("h2",{id:"\ucee4\ubc0b\uacfc-\uc624\ud504\uc14b"},"\ucee4\ubc0b\uacfc \uc624\ud504\uc14b"),(0,l.kt)("p",null,"\uce74\ud504\uce74\ub294 \ub2e4\ub978 Java Message Service \uc2dc\uc2a4\ud15c\uacfc\ub294 \ub2e4\ub974\uac8c \ucee8\uc288\uba38\ub4e4\uc774 \uc77d\ub294 \ub808\ucf54\ub4dc\ub97c \ucd94\uc801 \uad00\ub9ac\ud55c\ub2e4."),(0,l.kt)("p",null,"\uce74\ud504\uce74\uc758 \uac01 \ucee8\uc288\uba38\ub294 \ud30c\ud2f0\uc158\ubcc4\ub85c \uc790\uc2e0\uc774 \uc77d\ub294 \ub808\ucf54\ub4dc\uc758 \ud604\uc7ac \uc704\uce58\ub97c \ucd94\uc801 \uad00\ub9ac\ud560 \uc218 \uc788\ub2e4."),(0,l.kt)("p",null,"\ud30c\ud2f0\uc158 \ub0b4\ubd80\uc758 \ud604\uc7ac \uc704\uce58\ub97c \ubcc0\uacbd\ud558\ub294 \uac83\uc744 ",(0,l.kt)("inlineCode",{parentName:"p"},"\ucee4\ubc0b(commit)"),"\uc774\ub77c\uace0 \ubd80\ub978\ub2e4."),(0,l.kt)("p",null,"\ucee8\uc288\uba38\ub294 \uc624\ud504\uc14b\uc744 \ucee4\ubc0b\ud558\uba74 \ub0b4\ubd80\uc801\uc73c\ub85c ",(0,l.kt)("inlineCode",{parentName:"p"},"consumer_offsets"),"\ub77c\ub294 \ud2b9\ubcc4\ud55c \ud1a0\ud53d\uc5d0 \uba54\uc2dc\uc9c0\ub97c \uc4f4\ub2e4."),(0,l.kt)("p",null,"\uc774 \ud1a0\ud53d\uc740 \ubaa8\ub4e0 \ucee8\uc288\uba38\uc758 \uc624\ud504\uc14b\uc744 \uac16\ub294\ub2e4."),(0,l.kt)("p",null,"\uadf8\ub9ac\uace0 \ubaa8\ub4e0 \ucee8\uc288\uba38\ub4e4\uc774 \uc815\uc0c1\uc801\uc73c\ub85c \uc2e4\ud589 \uc911\uc77c \ub54c\ub294 \uc624\ud504\uc14b\uc744 \ucee4\ubc0b\ud574\ub3c4 \uc544\ubb34\ub7f0 \uc601\ud5a5\uc744 \uc8fc\uc9c0 \uc54a\ub294\ub2e4."),(0,l.kt)("p",null,"\uadf8\ub7ec\ub098 \uae30\uc874 \ucee8\uc288\uba38\uac00 \ube44\uc815\uc0c1\uc801\uc73c\ub85c \uc885\ub8cc\ub418\uc5c8\uac70\ub098, \uc0c8\ub85c\uc6b4 \ucee8\uc288\uba38\uac00 \ucee8\uc288\uba38 \uadf8\ub8f9\uc5d0 \ucd94\uac00\ub418\uba74 \uc624\ud504\uc14b \ucee4\ubc0b\uc740 \ub9ac\ubc38\ub7f0\uc2f1\uc744 \uc720\ubc1c\ud55c\ub2e4."),(0,l.kt)("p",null,"\ub9ac\ubc38\ub7f0\uc2f1\uc774 \ub05d\ub098\uba74 \uac01 \ucee8\uc288\uba38\ub294 \uc885\uc804\uacfc \ub2e4\ub978 \ud30c\ud2f0\uc158\ub4e4\uc744 \ud560\ub2f9\ubc1b\uac8c \ub420 \uc218 \uc788\ub2e4."),(0,l.kt)("p",null,"\ub530\ub77c\uc11c \uc5b4\ub290 \uc704\uce58\ubd80\ud130 \uba54\uc2dc\uc9c0\ub97c \uc77d\uc5b4\uc57c\ud558\ub294\uc9c0\uc5d0 \ub300\ud574 \uc54c\uae30 \uc704\ud574 \ucee8\uc288\uba38\ub294 \uac01 \ud30c\ud2f0\uc158\uc758 \ub9c8\uc9c0\ub9c9 \ucee4\ubc0b \uc624\ud504\uc14b\uc744 \uc54c\uc544\ub0b8 \ud6c4 \uac70\uae30\uc11c\ubd80\ud130 \uacc4\uc18d \uc77d\uc5b4\uc57c\ud55c\ub2e4."),(0,l.kt)("h2",{id:"\uc790\ub3d9-\ucee4\ubc0b"},"\uc790\ub3d9 \ucee4\ubc0b"),(0,l.kt)("p",null,"\uc790\ub3d9 \ucee4\ubc0b\uc740 \uac00\uc7a5 \uc26c\uc6b4 \uc624\ud504\uc14b \ucee4\ubc0b \ubc29\ubc95\uc774\uba70, \uce74\ud504\uce74 \ucee8\uc288\uba38 \uac1d\uccb4\uac00 \uc790\ub3d9\uc73c\ub85c \uc624\ud504\uc14b\uc744 \ucee4\ubc0b\ud574\uc900\ub2e4."),(0,l.kt)("p",null,"\uadf8\ub7ec\ub098 \uc911\ubcf5\uc774 \ubc1c\uc0dd\ud560 \uc218 \uc788\ub2e4\ub294 \uc7a0\uc7ac\uc801\uc778 \ubb38\uc81c\ub97c \uc548\uace0 \uc788\ub2e4."),(0,l.kt)("h2",{id:"\ud604\uc7ac\uc758-\uc624\ud504\uc14b-\ucee4\ubc0b\ud558\uae30"},"\ud604\uc7ac\uc758 \uc624\ud504\uc14b \ucee4\ubc0b\ud558\uae30"),(0,l.kt)("p",null,"enable.auto.commit\uc744 false\ub85c \ubc14\uafb8\uace0 ",(0,l.kt)("inlineCode",{parentName:"p"},"commitSync()"),"\ub97c \uc0ac\uc6a9\ud558\uc5ec \uac1c\ubc1c\uc790\uac00 \uba85\uc2dc\uc801\uc73c\ub85c \ubc18\ud658\ub41c \uc624\ud504\uc14b\uc744 \ubc1b\uc544\ubcfc \uc218 \uc788\ub2e4."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"commitSync()"),"\ub294 ",(0,l.kt)("inlineCode",{parentName:"p"},"poll()"),"\uc5d0\uc11c \ubc18\ud658\ub41c \uac00\uc7a5 \ucd5c\uadfc\uc758 \uc624\ud504\uc14b\uc744 \ucee4\ubc0b\ud55c\ub2e4."),(0,l.kt)("h2",{id:"\ube44\ub3d9\uae30-\ucee4\ubc0b"},"\ube44\ub3d9\uae30 \ucee4\ubc0b"),(0,l.kt)("p",null,"\ube0c\ub85c\ucee4\uac00 \ucee4\ubc0b \uc694\uccad\uc5d0 \uc751\ub2f5\ud560 \ub54c \uae4c\uc9c0 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc774 \uc77c\uc2dc \uc911\ub2e8\ub41c\ub2e4\ub294 \uac83\uc774 \uc218\ub3d9 \ucee4\ubc0b\uc758 \ub2e8\uc810\uc774\ub2e4."),(0,l.kt)("p",null,"\uc774\ub97c \uc704\ud574 \ube44\ub3d9\uae30 \ucee4\ubc0b\uc744 \ud574\ubcfc \uc218 \uc788\ub2e4."),(0,l.kt)("p",null,"\ube0c\ub85c\ucee4\uc758 \ucee4\ubc0b \uc751\ub2f5\uc744 \uae30\ub2e4\ub9ac\ub294 \ub300\uc2e0 \ucee4\ubc0b \uc694\uccad\uc744 \uc804\uc1a1\ud558\uace0 \ucc98\ub9ac\ub97c \uacc4\uc18d\ud560 \uc218 \uc788\ub2e4."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"commitAsync()")," \uc7ac\uc2dc\ub3c4\ud558\uc9c0 \uc54a\ub294\ub2e4\ub294 \uac83\uc774 \ub2e8\uc810\uc774\ub2e4."),(0,l.kt)("p",null,"\uc65c\ub0d0\ud558\uba74 \uc11c\ubc84\uc758 \uc751\ub2f5\uc744 \ubc1b\ub294 \uc0ac\uc774\uc5d0 \uc774\ud6c4\uc758 \ub2e4\ub978 \ucee4\ubc0b\uc774 \uba3c\uc800 \uc131\uacf5\ud560 \uc218 \uc788\uae30 \ub54c\ubb38\uc774\ub2e4."),(0,l.kt)("p",null,"\uadf8\ub798\uc11c \uc774\ub7f0 \uacbd\uc6b0\uc5d0\ub294 \uc608\uc678\uac00 \ubc1c\uc0dd\ud588\uc744 \ub54c \ub85c\uae45\uc744 \ub0a8\uaca8 \ucd94\uc801\uc744 \ud560 \uc218 \uc788\ub2e4."),(0,l.kt)("h2",{id:"reference"},"Reference"),(0,l.kt)("img",{width:"458",alt:"\u1109\u1173\u110f\u1173\u1105\u1175\u11ab\u1109\u1163\u11ba 2021-04-28 \u110b\u1169\u1112\u116e 7 39 45",src:"https://user-images.githubusercontent.com/43809168/116390936-86ad6b80-a859-11eb-91e8-fcfc31a896fe.png"}),(0,l.kt)("p",null,"\uce74\ud504\uce74 \ud575\uc2ec \uac00\uc774\ub4dc"))}p.isMDXComponent=!0}}]);