"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[4030],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(t),m=o,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return t?r.createElement(f,l(l({ref:n},c),{},{components:t})):r.createElement(f,l({ref:n},c))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=d;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=t[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3401:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return a},metadata:function(){return i},toc:function(){return p}});var r=t(3117),o=(t(7294),t(3905));const a={sidebar_label:"CosmWasm Dependencies"},l="CosmWasm Dependency Installations",i={unversionedId:"developers/cosmwasm-dependency",id:"developers/cosmwasm-dependency",title:"CosmWasm Dependency Installations",description:"Environment Setup",source:"@site/docs/developers/cosmwasm-dependency.md",sourceDirName:"developers",slug:"/developers/cosmwasm-dependency",permalink:"/pr-preview/pr-361/fr/developers/cosmwasm-dependency",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/developers/cosmwasm-dependency.md",tags:[],version:"current",frontMatter:{sidebar_label:"CosmWasm Dependencies"},sidebar:"developers",previous:{title:"CosmWasm Overview",permalink:"/pr-preview/pr-361/fr/developers/cosmwasm"},next:{title:"Setup Network Environment",permalink:"/pr-preview/pr-361/fr/developers/cosmwasm-environment"}},s={},p=[{value:"Environment Setup",id:"environment-setup",level:2},{value:"Golang Dependency",id:"golang-dependency",level:2},{value:"Rust Installation",id:"rust-installation",level:2},{value:"Rustup",id:"rustup",level:3},{value:"Docker Installation",id:"docker-installation",level:2},{value:"wasmd Installation",id:"wasmd-installation",level:2},{value:"Celestia Node",id:"celestia-node",level:2}],c={toc:p};function u(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"cosmwasm-dependency-installations"},"CosmWasm Dependency Installations"),(0,o.kt)("h2",{id:"environment-setup"},"Environment Setup"),(0,o.kt)("p",null,"For this tutorial, we will be using ",(0,o.kt)("inlineCode",{parentName:"p"},"curl")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"jq")," as helpful\ntools. You can follow the guide on installing them\n",(0,o.kt)("a",{parentName:"p",href:"/pr-preview/pr-361/fr/nodes/environment#setting-up-dependencies"},"here"),"."),(0,o.kt)("h2",{id:"golang-dependency"},"Golang Dependency"),(0,o.kt)("p",null,"The Golang version used for this tutorial is v1.18+"),(0,o.kt)("p",null,"You can install Golang\nby following our tutorial ",(0,o.kt)("a",{parentName:"p",href:"/pr-preview/pr-361/fr/nodes/environment#install-golang"},"here"),"."),(0,o.kt)("h2",{id:"rust-installation"},"Rust Installation"),(0,o.kt)("h3",{id:"rustup"},"Rustup"),(0,o.kt)("p",null,"First, before installing Rust, you would need to install ",(0,o.kt)("inlineCode",{parentName:"p"},"rustup"),"."),(0,o.kt)("p",null,"On Mac and Linux systems, here are the commands for installing it:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh\n")),(0,o.kt)("p",null,"After installation, follow the commands here to setup Rust."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"rustup default stable\ncargo version\n\nrustup target list --installed\nrustup target add wasm32-unknown-unknown\n")),(0,o.kt)("p",null,"Your output should look similar to below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"info: using existing install for 'stable-aarch64-apple-darwin'\ninfo: default toolchain set to 'stable-aarch64-apple-darwin'\n\n  stable-aarch64-apple-darwin unchanged - rustc 1.65.0 (897e37553 2022-11-02)\n  \ncargo 1.65.0 (4bc8f24d3 2022-10-20)\naarch64-apple-darwin\ninfo: downloading component 'rust-std' for 'wasm32-unknown-unknown'\ninfo: installing component 'rust-std' for 'wasm32-unknown-unknown'\n")),(0,o.kt)("h2",{id:"docker-installation"},"Docker Installation"),(0,o.kt)("p",null,"We will be using Docker later in this tutorial for compiling a smart contract\nto use a small footprint. We recommend installing Docker on your machine."),(0,o.kt)("p",null,"Examples on how to install it on Linux are found ",(0,o.kt)("a",{parentName:"p",href:"https://docs.docker.com/engine/install/ubuntu/"},"here"),".\nFind the right instructions specific for\n",(0,o.kt)("a",{parentName:"p",href:"https://docs.docker.com/engine/install/"},"your OS here"),"."),(0,o.kt)("h2",{id:"wasmd-installation"},"wasmd Installation"),(0,o.kt)("p",null,"Here, we are going to pull down the ",(0,o.kt)("inlineCode",{parentName:"p"},"wasmd")," repository and replace Tendermint\nwith Rollmint. Rollmint is a drop-in replacement for Tendermint that allows\nCosmos-SDK applications to connect to Celestia's Data Availability network."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"git clone https://github.com/CosmWasm/wasmd.git\ncd wasmd\ngit fetch --tags\ngit checkout v0.27.0\ngo mod edit -replace github.com/cosmos/cosmos-sdk=github.com/celestiaorg/cosmos-sdk-rollmint@v0.45.10-rollmint-v0.4.0\ngo mod tidy -compat=1.17\ngo mod download\nmake install\n")),(0,o.kt)("h2",{id:"celestia-node"},"Celestia Node"),(0,o.kt)("p",null,"You will need a light node running with test tokens on Arabica Devnet in order\nto complete this tutorial. Please complete the tutorial\n",(0,o.kt)("a",{parentName:"p",href:"/pr-preview/pr-361/fr/developers/node-tutorial"},"here"),", or start up your node."))}u.isMDXComponent=!0}}]);