(self.webpackChunkstudy=self.webpackChunkstudy||[]).push([[2129],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return s},kt:function(){return k}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),c=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=c(t),k=a,m=d["".concat(u,".").concat(k)]||d[k]||p[k]||l;return t?r.createElement(m,o(o({ref:n},s),{},{components:t})):r.createElement(m,o({ref:n},s))}));function k(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=d;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},2766:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return i},metadata:function(){return u},toc:function(){return c},default:function(){return p}});var r=t(2122),a=t(9756),l=(t(7294),t(3905)),o=["components"],i={id:"kotlin-language-guide",title:"\ucf54\ud2c0\ub9b0 \uc5b8\uc5b4 \uac00\uc774\ub4dc"},u={unversionedId:"kotlin/kotlin-language-guide",id:"kotlin/kotlin-language-guide",isDocsHomePage:!1,title:"\ucf54\ud2c0\ub9b0 \uc5b8\uc5b4 \uac00\uc774\ub4dc",description:"\ubcf8 \uae00\uc740 Java \ucf54\ub529 \uc2a4\ud0c0\uc77c \uac00\uc774\ub4dc \ub0b4\uc6a9\uc744 \ud3ec\ud568\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4.",source:"@site/docs/kotlin/kotlin-language-guide.md",sourceDirName:"kotlin",slug:"/kotlin/kotlin-language-guide",permalink:"/study/docs/kotlin/kotlin-language-guide",editUrl:"https://github.com/minkukjo/study/edit/master/docs/kotlin/kotlin-language-guide.md",version:"current",lastUpdatedAt:1625582455,formattedLastUpdatedAt:"7/6/2021",frontMatter:{id:"kotlin-language-guide",title:"\ucf54\ud2c0\ub9b0 \uc5b8\uc5b4 \uac00\uc774\ub4dc"},sidebar:"mySidebar",previous:{title:"\uc790\ubc14 \uc5b8\uc5b4 \uac00\uc774\ub4dc",permalink:"/study/docs/java/java-language-guide"},next:{title:"03. \uce74\ud504\uce74 \ucee8\uc288\uba38",permalink:"/study/docs/kafka/kafka-core-guide/03-consumer"}},c=[{value:"Convention",id:"convention",children:[]},{value:"var \ubcf4\ub2e4\ub294 val\ub97c \uc0ac\uc6a9\ud569\ub2c8\ub2e4",id:"var-\ubcf4\ub2e4\ub294-val\ub97c-\uc0ac\uc6a9\ud569\ub2c8\ub2e4",children:[]},{value:"CamelCase",id:"camelcase",children:[]},{value:"\ud074\ub798\uc2a4 \uad6c\uc870",id:"\ud074\ub798\uc2a4-\uad6c\uc870",children:[]},{value:"\uc778\ud130\ud398\uc774\uc2a4 \uad6c\ud604\uccb4",id:"\uc778\ud130\ud398\uc774\uc2a4-\uad6c\ud604\uccb4",children:[]},{value:"\ubd88\ubcc0 \uc18d\uc131, const \uc0c1\uc218, Top Level \uc0c1\uc218",id:"\ubd88\ubcc0-\uc18d\uc131-const-\uc0c1\uc218-top-level-\uc0c1\uc218",children:[]},{value:"\uceec\ub809\uc158 \ubcc0\uc218\uc5d0 \uceec\ub809\uc158 \uba85\uc744 \ubd99\uc774\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4",id:"\uceec\ub809\uc158-\ubcc0\uc218\uc5d0-\uceec\ub809\uc158-\uba85\uc744-\ubd99\uc774\uc9c0-\uc54a\uc2b5\ub2c8\ub2e4",children:[]},{value:"!!\uc740 \ucd5c\uc18c\ud55c\uc73c\ub85c \uc0ac\uc6a9\ud569\ub2c8\ub2e4.",id:"\uc740-\ucd5c\uc18c\ud55c\uc73c\ub85c-\uc0ac\uc6a9\ud569\ub2c8\ub2e4",children:[]}],s={toc:c};function p(e){var n=e.components,t=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\ubcf8 \uae00\uc740 Java \ucf54\ub529 \uc2a4\ud0c0\uc77c \uac00\uc774\ub4dc \ub0b4\uc6a9\uc744 \ud3ec\ud568\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4.")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\uc218\uc815\ud560 \ub0b4\uc6a9\uc774 \uc788\ub2e4\uba74 \uc5b8\uc81c\ub4e0 \uc54c\ub824\uc8fc\uc138\uc694.")),(0,l.kt)("h2",{id:"convention"},"Convention"),(0,l.kt)("p",null,"\ubcf8 \uae00\uc740 \ucf54\ud2c0\ub9b0 \uc5b8\uc5b4\uc758 \ucf54\ub529 \uc2a4\ud0c0\uc77c \uac00\uc774\ub4dc\uc785\ub2c8\ub2e4."),(0,l.kt)("p",null,"\uc2a4\ud0c0\uc77c \uac00\uc774\ub4dc\ub294 \uac1c\uc778\uc758 \uae30\ud638\uc5d0 \ub530\ub77c \ub2e4\ub974\ubbc0\ub85c \uc5b8\uc81c\ub4e0 \uc774 \ubb38\uc11c\uc5d0 \uae30\uc5ec\ud558\uc5ec \ubc1c\uc804\uc2dc\ucf1c\uc8fc\uc138\uc694."),(0,l.kt)("h2",{id:"var-\ubcf4\ub2e4\ub294-val\ub97c-\uc0ac\uc6a9\ud569\ub2c8\ub2e4"},"var \ubcf4\ub2e4\ub294 val\ub97c \uc0ac\uc6a9\ud569\ub2c8\ub2e4"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\ucf54\ud2c0\ub9b0\uc758 var\ub294 \ucf54\ud2c0\ub9b0\uc758 \uadfc\uac04\uc778 \ud568\uc218\ud615 \ud504\ub85c\uadf8\ub798\ubc0d\uc758 \ubd88\ubcc0\uc131\uc744\x1d \uc704\ubc30\ud569\ub2c8\ub2e4. \uac00\uae09\uc801 val\ub97c \uc0ac\uc6a9\ud558\ub3c4\ub85d \ud569\uc2dc\ub2e4.")),(0,l.kt)("h2",{id:"camelcase"},"CamelCase"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\uc790\ubc14\uc640 \ub9c8\ucc2c\uac00\uc9c0\ub85c \ucf54\ud2c0\ub9b0 \uc5ed\uc2dc \uc774\ub984\uc5d0\ub294 \uce74\uba5c \ucf00\uc774\uc2a4\ub97c \uc0ac\uc6a9\ud558\ub3c4\ub85d \ud569\ub2c8\ub2e4.")),(0,l.kt)("h2",{id:"\ud074\ub798\uc2a4-\uad6c\uc870"},"\ud074\ub798\uc2a4 \uad6c\uc870"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\ucf54\ud2c0\ub9b0\uc758 \ud074\ub798\uc2a4 \ub0b4\ubd80\uc5d0\ub294 \ub2e4\uc74c\uacfc \uac19\uc740 \uc21c\uc11c\ub85c \ud3ec\ud568\uc2dc\ud0a4\ub3c4\ub85d \ud569\ub2c8\ub2e4.")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\uc18d\uc131 \uc120\uc5b8\ub4e4\uacfc \ucd08\uae30\ud654 \ube14\ub85d"),(0,l.kt)("li",{parentName:"ol"},"\ubd80\uc0dd\uc131\uc790\ub4e4(secondary constructors)"),(0,l.kt)("li",{parentName:"ol"},"\uba54\uc18c\ub4dc\ub4e4"),(0,l.kt)("li",{parentName:"ol"},"\ucef4\ud328\ub2c8\uc5b8 \uac1d\uccb4")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"class User {\n    // \uc18d\uc131\n    private var age: Int? = null\n\n    // \ucd08\uae30\ud654 \ube14\ub85d\n    init {\n        age = 24\n    }\n\n    // \ubd80 \uc0dd\uc131\uc790\n    constructor(age: Int) {\n        this.age = age\n    }\n\n    // \uba54\uc18c\ub4dc\n    fun printAge() = println(age)\n\n\n    fun useNested() {\n        NestedForInternal()\n        // ...\n    }\n\n    class NestedForInternal {\n\n    }\n\n    // \ucef4\ud328\ub2c8\uc5b8 \uac1d\uccb4\n    companion object {\n        const val DURATION = 300\n    }\n\n    class NestedForExternalClient {\n\n    }\n}\n")),(0,l.kt)("h2",{id:"\uc778\ud130\ud398\uc774\uc2a4-\uad6c\ud604\uccb4"},"\uc778\ud130\ud398\uc774\uc2a4 \uad6c\ud604\uccb4"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'interface User {\n    var age: Int\n    var name: String\n}\n\nclass GameUser : User {\n    override var age = 17\n    override var name = "Harry"\n}\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\uc778\ud130\ud398\uc774\uc2a4\uc5d0 \uc120\uc5b8\ub41c \uc21c\uc11c\ub300\ub85c \ud074\ub798\uc2a4\uc5d0\uc11c\ub3c4 \uad6c\ud604\ud569\uc2dc\ub2e4.")),(0,l.kt)("h2",{id:"\ubd88\ubcc0-\uc18d\uc131-const-\uc0c1\uc218-top-level-\uc0c1\uc218"},"\ubd88\ubcc0 \uc18d\uc131, const \uc0c1\uc218, Top Level \uc0c1\uc218"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'const val MAX_COUNT = 8\nval USER_NAME_FIELD = "UserName"\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\ub300\ubb38\uc790\uc640 \uc5b8\ub354\uc2a4\ucf54\uc5b4\ub97c \uc0ac\uc6a9\ud574 \ud45c\ud604\ud569\ub2c8\ub2e4. (\uc790\ubc14\uc640 \ub3d9\uc77c)")),(0,l.kt)("h2",{id:"\uceec\ub809\uc158-\ubcc0\uc218\uc5d0-\uceec\ub809\uc158-\uba85\uc744-\ubd99\uc774\uc9c0-\uc54a\uc2b5\ub2c8\ub2e4"},"\uceec\ub809\uc158 \ubcc0\uc218\uc5d0 \uceec\ub809\uc158 \uba85\uc744 \ubd99\uc774\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"val userList = listOf(1,2,3,4) // BAD!!!\n\nval users = listOf(1,2,3,4) // GOOD!!!\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\ubcf5\uc218\uba85\uc758 \ubcc0\uc218\uba85\uc740 s\ub85c \uc0ac\uc6a9\ud569\ub2c8\ub2e4.")),(0,l.kt)("h2",{id:"\uc740-\ucd5c\uc18c\ud55c\uc73c\ub85c-\uc0ac\uc6a9\ud569\ub2c8\ub2e4"},"!!\uc740 \ucd5c\uc18c\ud55c\uc73c\ub85c \uc0ac\uc6a9\ud569\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"val user : User? = User()\nuser!!.name // BAD!!\nuser!!.age // BAD!!\n")))}p.isMDXComponent=!0}}]);