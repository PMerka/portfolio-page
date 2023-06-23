"use strict";(self.webpackChunkmy_portfolio=self.webpackChunkmy_portfolio||[]).push([[691],{3204:function(e){const t=/[\p{Lu}]/u,a=/[\p{Ll}]/u,r=/^[\p{Lu}](?![\p{Lu}])/gu,n=/([\p{Alpha}\p{N}_]|$)/u,l=/[_.\- ]+/,o=new RegExp("^"+l.source),i=new RegExp(l.source+n.source,"gu"),s=new RegExp("\\d+"+n.source,"gu"),c=(e,n)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");if(n={pascalCase:!1,preserveConsecutiveUppercase:!1,...n},0===(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim()).length)return"";const l=!1===n.locale?e=>e.toLowerCase():e=>e.toLocaleLowerCase(n.locale),c=!1===n.locale?e=>e.toUpperCase():e=>e.toLocaleUpperCase(n.locale);if(1===e.length)return n.pascalCase?c(e):l(e);return e!==l(e)&&(e=((e,r,n)=>{let l=!1,o=!1,i=!1;for(let s=0;s<e.length;s++){const c=e[s];l&&t.test(c)?(e=e.slice(0,s)+"-"+e.slice(s),l=!1,i=o,o=!0,s++):o&&i&&a.test(c)?(e=e.slice(0,s-1)+"-"+e.slice(s-1),i=o,o=!1,l=!0):(l=r(c)===c&&n(c)!==c,i=o,o=n(c)===c&&r(c)!==c)}return e})(e,l,c)),e=e.replace(o,""),e=n.preserveConsecutiveUppercase?((e,t)=>(r.lastIndex=0,e.replace(r,(e=>t(e)))))(e,l):l(e),n.pascalCase&&(e=c(e.charAt(0))+e.slice(1)),((e,t)=>(i.lastIndex=0,s.lastIndex=0,e.replace(i,((e,a)=>t(a))).replace(s,(e=>t(e)))))(e,c)};e.exports=c,e.exports.default=c},8032:function(e,t,a){a.d(t,{L:function(){return g},M:function(){return k},P:function(){return v},S:function(){return A},_:function(){return i},a:function(){return o},b:function(){return m},g:function(){return u},h:function(){return s}});var r=a(7294),n=(a(3204),a(5697)),l=a.n(n);function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},o.apply(this,arguments)}function i(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)t.indexOf(a=l[r])>=0||(n[a]=e[a]);return n}const s=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;function c(e,t,a){const r={};let n="gatsby-image-wrapper";return"fixed"===a?(r.width=e,r.height=t):"constrained"===a&&(n="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:n,"data-gatsby-image-wrapper":"",style:r}}function m(e,t,a,r,n){return void 0===n&&(n={}),o({},a,{loading:r,shouldLoad:e,"data-main-image":"",style:o({},n,{opacity:t?1:0})})}function u(e,t,a,r,n,l,i,s){const c={};l&&(c.backgroundColor=l,"fixed"===a?(c.width=r,c.height=n,c.backgroundColor=l,c.position="relative"):("constrained"===a||"fullWidth"===a)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),i&&(c.objectFit=i),s&&(c.objectPosition=s);const m=o({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:o({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return m}const d=["children"],p=function(e){let{layout:t,width:a,height:n}=e;return"fullWidth"===t?r.createElement("div",{"aria-hidden":!0,style:{paddingTop:n/a*100+"%"}}):"constrained"===t?r.createElement("div",{style:{maxWidth:a,display:"block"}},r.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg%20height='"+n+"'%20width='"+a+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},g=function(e){let{children:t}=e,a=i(e,d);return r.createElement(r.Fragment,null,r.createElement(p,o({},a)),t,null)},f=["src","srcSet","loading","alt","shouldLoad"],h=["fallback","sources","shouldLoad"],b=function(e){let{src:t,srcSet:a,loading:n,alt:l="",shouldLoad:s}=e,c=i(e,f);return r.createElement("img",o({},c,{decoding:"async",loading:n,src:s?t:void 0,"data-src":s?void 0:t,srcSet:s?a:void 0,"data-srcset":s?void 0:a,alt:l}))},y=function(e){let{fallback:t,sources:a=[],shouldLoad:n=!0}=e,l=i(e,h);const s=l.sizes||(null==t?void 0:t.sizes),c=r.createElement(b,o({},l,t,{sizes:s,shouldLoad:n}));return a.length?r.createElement("picture",null,a.map((e=>{let{media:t,srcSet:a,type:l}=e;return r.createElement("source",{key:t+"-"+l+"-"+a,type:l,media:t,srcSet:n?a:void 0,"data-srcset":n?void 0:a,sizes:s})})),c):c};var w;b.propTypes={src:n.string.isRequired,alt:n.string.isRequired,sizes:n.string,srcSet:n.string,shouldLoad:n.bool},y.displayName="Picture",y.propTypes={alt:n.string.isRequired,shouldLoad:n.bool,fallback:n.exact({src:n.string.isRequired,srcSet:n.string,sizes:n.string}),sources:n.arrayOf(n.oneOfType([n.exact({media:n.string.isRequired,type:n.string,sizes:n.string,srcSet:n.string.isRequired}),n.exact({media:n.string,type:n.string.isRequired,sizes:n.string,srcSet:n.string.isRequired})]))};const E=["fallback"],v=function(e){let{fallback:t}=e,a=i(e,E);return t?r.createElement(y,o({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):r.createElement("div",o({},a))};v.displayName="Placeholder",v.propTypes={fallback:n.string,sources:null==(w=y.propTypes)?void 0:w.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null}};const k=function(e){return r.createElement(r.Fragment,null,r.createElement(y,o({},e)),r.createElement("noscript",null,r.createElement(y,o({},e,{shouldLoad:!0}))))};k.displayName="MainImage",k.propTypes=y.propTypes;const N=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],_=["style","className"],S=e=>e.replace(/\n/g,""),x=function(e,t,a){for(var r=arguments.length,n=new Array(r>3?r-3:0),o=3;o<r;o++)n[o-3]=arguments[o];return e.alt||""===e.alt?l().string.apply(l(),[e,t,a].concat(n)):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},C={image:l().object.isRequired,alt:x},T=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],L=["style","className"],j=new Set;let I,P;const R=function(e){let{as:t="div",image:n,style:l,backgroundColor:m,className:u,class:d,onStartLoad:p,onLoad:g,onError:f}=e,h=i(e,T);const{width:b,height:y,layout:w}=n,E=c(b,y,w),{style:v,className:k}=E,N=i(E,L),_=(0,r.useRef)(),S=(0,r.useMemo)((()=>JSON.stringify(n.images)),[n.images]);d&&(u=d);const x=function(e,t,a){let r="";return"fullWidth"===e&&(r='<div aria-hidden="true" style="padding-top: '+a/t*100+'%;"></div>'),"constrained"===e&&(r='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height=\''+a+"'%20width='"+t+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),r}(w,b,y);return(0,r.useEffect)((()=>{I||(I=a.e(731).then(a.bind(a,6731)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:a}=e;return P=t,{renderImageToString:t,swapPlaceholderImage:a}})));const e=_.current.querySelector("[data-gatsby-image-ssr]");if(e&&s())return e.complete?(null==p||p({wasCached:!0}),null==g||g({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==p||p({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==g||g({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void j.add(S);if(P&&j.has(S))return;let t,r;return I.then((e=>{let{renderImageToString:a,swapPlaceholderImage:i}=e;_.current&&(_.current.innerHTML=a(o({isLoading:!0,isLoaded:j.has(S),image:n},h)),j.has(S)||(t=requestAnimationFrame((()=>{_.current&&(r=i(_.current,S,j,l,p,g,f))}))))})),()=>{t&&cancelAnimationFrame(t),r&&r()}}),[n]),(0,r.useLayoutEffect)((()=>{j.has(S)&&P&&(_.current.innerHTML=P(o({isLoading:j.has(S),isLoaded:j.has(S),image:n},h)),null==p||p({wasCached:!0}),null==g||g({wasCached:!0}))}),[n]),(0,r.createElement)(t,o({},N,{style:o({},v,l,{backgroundColor:m}),className:k+(u?" "+u:""),ref:_,dangerouslySetInnerHTML:{__html:x},suppressHydrationWarning:!0}))},M=(0,r.memo)((function(e){return e.image?(0,r.createElement)(R,e):null}));M.propTypes=C,M.displayName="GatsbyImage";const O=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function z(e){return function(t){let{src:a,__imageData:n,__error:l}=t,s=i(t,O);return l&&console.warn(l),n?r.createElement(e,o({image:n},s)):(console.warn("Image not loaded",a),null)}}const q=z((function(e){let{as:t="div",className:a,class:n,style:l,image:s,loading:d="lazy",imgClassName:p,imgStyle:f,backgroundColor:h,objectFit:b,objectPosition:y}=e,w=i(e,N);if(!s)return console.warn("[gatsby-plugin-image] Missing image prop"),null;n&&(a=n),f=o({objectFit:b,objectPosition:y,backgroundColor:h},f);const{width:E,height:x,layout:C,images:T,placeholder:L,backgroundColor:j}=s,I=c(E,x,C),{style:P,className:R}=I,M=i(I,_),O={fallback:void 0,sources:[]};return T.fallback&&(O.fallback=o({},T.fallback,{srcSet:T.fallback.srcSet?S(T.fallback.srcSet):void 0})),T.sources&&(O.sources=T.sources.map((e=>o({},e,{srcSet:S(e.srcSet)})))),r.createElement(t,o({},M,{style:o({},P,l,{backgroundColor:h}),className:R+(a?" "+a:"")}),r.createElement(g,{layout:C,width:E,height:x},r.createElement(v,o({},u(L,!1,C,E,x,j,b,y))),r.createElement(k,o({"data-gatsby-image-ssr":"",className:p},w,m("eager"===d,!1,O,d,f)))))})),D=function(e,t){for(var a=arguments.length,r=new Array(a>2?a-2:0),n=2;n<a;n++)r[n-2]=arguments[n];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?l().number.apply(l(),[e,t].concat(r)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},F=new Set(["fixed","fullWidth","constrained"]),W={src:l().string.isRequired,alt:x,width:D,height:D,sizes:l().string,layout:e=>{if(void 0!==e.layout&&!F.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}};q.displayName="StaticImage",q.propTypes=W;const A=z(M);A.displayName="StaticImage",A.propTypes=W},9907:function(e,t,a){a.r(t),a.d(t,{Head:function(){return v},default:function(){return E}});var r=a(7294);function n(e){let{scrollToProjects:t,scrollToSkills:a}=e;return r.createElement("header",{className:"header"},r.createElement("nav",{className:"top-navigation"},r.createElement("ul",null,r.createElement("li",null,r.createElement("button",{onClick:()=>{window.scrollTo({top:0,behavior:"smooth"})}},"Home")),r.createElement("li",{onClick:()=>t()},r.createElement("button",null,"My projects")),r.createElement("li",null,r.createElement("button",{onClick:()=>a()},"Skills")))))}var l=a(8032);function o(){const{0:e,1:t}=(0,r.useState)("Copy email");return r.createElement(r.Fragment,null,r.createElement("div",{className:"contact-line short-text"},r.createElement("div",null,"Email:"),r.createElement("div",null,"pavelmerka1995@gmail.com")),r.createElement("div",{className:"contact-line short-text"},r.createElement("button",{className:"email-icon",onClick:()=>(navigator.clipboard.writeText("pavelmerka1995@gmail.com"),t("Email copied"),void setTimeout((()=>{t("Copy email")}),5e3))},e),r.createElement("a",{href:"https://github.com/PMerka",target:"_blank"},r.createElement("div",{className:"email-icon"},"Github profile"))))}function i(e){let{refProp:t}=e;return r.createElement("section",{ref:t,className:"top-section"},r.createElement("div",{className:"top-section__main-text"},r.createElement("p",{className:"first-line"},"Hi, my name is"),r.createElement("h1",{className:"name"},"Pavel Měrka"),r.createElement("p",{className:"short-text"},"I m a javascript / typescript frontend developer. I focuse mostly on building webapps with React. I also have some experience with backend frameworks (Django) and mobile development with React Native."),r.createElement(o,null)),r.createElement(l.S,{objectFit:"scale-down",placeholder:"none",loading:"eager",className:"top-section__img",src:"./../../../static/fractal_snowflake.png",alt:"fractal snowflake",__imageData:a(2781)}))}function s(e){let{myRef:t,projectData:a,pageURL:n,repoUrl:l,children:o,descriptionClassNames:i,innerShadow:s=!1}=e;a.frontmatter.keywords;const c=a.frontmatter.title,m=a.html;return r.createElement("div",{ref:t,className:"project-item "+(s?"project-item-inner-shadow":null)},r.createElement("div",{className:"project-description "+i},r.createElement("h3",null,c),r.createElement("div",{style:{marginTop:10,marginBottom:10}}),r.createElement("div",{dangerouslySetInnerHTML:{__html:m},className:"short-text"}),r.createElement("div",{className:"projet-links-container"},r.createElement("a",{className:"project-link-button",href:n,target:"_blank"},"Try the app"),r.createElement("a",{className:"project-link-button",href:l,target:"_blank"},"Source code"))),o)}var c=function(e){let{isZoomed:t}=e;return r.createElement("div",{className:"project-img "+(t?"zoom-in-img":"zoom-out-img")+" "},r.createElement(l.S,{style:{width:"100%"},objectFit:"scale-down",placeholder:"none",loading:"eager",src:"./../../static/fractal_snowflake_2.png",alt:"fractal snowflake",__imageData:a(8653)}))};var m=function(e,t){let{threshold:a=.8,root:n=null,rootMargin:l="0%",freezeOnceVisible:o=!0}=t;const{0:i,1:s}=(0,r.useState)(),c=(null==i?void 0:i.isIntersecting)&&o,m=e=>{let[t]=e;s(t)};return(0,r.useEffect)((()=>{const t=null==e?void 0:e.current;if(!!!window.IntersectionObserver||c||!t)return;const r=new IntersectionObserver(m,{threshold:a,root:n,rootMargin:l});return r.observe(t),()=>r.disconnect()}),[null==e?void 0:e.current,JSON.stringify(a),n,l,c]),i},u=a(4160);var d=()=>(0,u.K2)("980617323"),p=a.p+"static/snowflake_growth_opt-4b264b775398707c67b15450932e68d3.mp4",g=a.p+"static/boids-26d72a83be4a574d9b3519419667f9cd.mp4";function f(e){let{refProp:t}=e;const a=d().allMarkdownRemark.nodes,n=(0,r.useRef)(null);(0,r.useEffect)((()=>{null!==n.current&&(n.current.playbackRate=10)}),[]);const l=(0,r.useRef)(null),o=m(l,{}),i=!(null==o||!o.isIntersecting);return r.createElement("section",{ref:t,className:"projects"},r.createElement("div",{className:"projects-intro"},r.createElement("h2",null,"Creative Projects"),r.createElement("p",{className:"zero-top-margin"},"I like to practice my JavaScript skills on projects combining computer graphics, art, math, and science - for example creating interactive visualizations of natural processes. My projects primarily revolve around snowflake growth, fractals, and complex systems, utilizing HTML canvas and React. Through these technologies, I bring these phenomena to life.")),r.createElement(s,{myRef:l,projectData:a[0],pageURL:"https://pmerka.github.io/snowflake/",repoUrl:"https://github.com/PMerka/snowflake",descriptionClassNames:"project-description-big-margin-top",innerShadow:!0},r.createElement(c,{isZoomed:i})),r.createElement(s,{projectData:a[1],pageURL:"https://pmerka.github.io/snowflake-growth-simulation/",repoUrl:"https://github.com/PMerka/snowflake-growth-simulation"},r.createElement("div",{className:"video-box snowflake-video"},r.createElement("video",{src:p,style:{width:"100%"},className:"rotateY",ref:n,autoPlay:!0,muted:!0}))),r.createElement(s,{projectData:a[2],pageURL:"https://pmerka.github.io/firefly-boids/",repoUrl:"https://github.com/PMerka/firefly-boids"},r.createElement("div",{className:"video-box boid-video"},r.createElement("video",{src:g,style:{width:"100%"},autoPlay:!0,muted:!0,loop:!0}))))}function h(e){let{refProp:t}=e;return r.createElement("section",{ref:t,className:"skills-section"},r.createElement("h2",null,"Few words about me"),r.createElement("div",{className:"skills"},r.createElement("div",{className:"about-me"},r.createElement("p",{className:"zero-top-margin"},"I started learning the basics of programming during my bachelor's degree in chemistry. I chose quantum chemistry computations as the topic of my thesis. After finishing my master's course, I focused more on programming in Python and later switched to JavaScript. I like learning new skills and technologies. I also have a strong foundation in math, physics.")),r.createElement("div",{className:"skill-list"},r.createElement("h4",{className:"about-me__h4"},"I work primarily with:"),r.createElement("ul",{className:"about-me__ul"},r.createElement("li",null,"JavaScript"),r.createElement("li",null,"TypeScript"),r.createElement("li",null,"React"),r.createElement("li",null,"React Native"),r.createElement("li",null,"CSS"),r.createElement("li",null,"HTML"),r.createElement("li",null,"Canvas animations"),r.createElement("li",null,"Git"),r.createElement("li",null,"Github")),r.createElement("h4",{className:"about-me__h4"},"I also use:"),r.createElement("ul",{className:"about-me__ul"},r.createElement("li",null,"Godot game engine"),r.createElement("li",null,"Gatsby"),r.createElement("li",null,"Django"),r.createElement("li",null,"Python"),r.createElement("li",null,"Linux terminal"),r.createElement("li",null,"Docker")))))}function b(){return r.createElement("div",{className:"gh-section"},r.createElement("div",{className:"gh-icon"},r.createElement("a",{className:"gh-link",href:"https://github.com/PMerka/portfolio-page",target:"_blank"},r.createElement("img",{src:"/github_logo.png",alt:"Github icon"}),r.createElement("br",null),"Source code")),r.createElement("div",null,"Created by ",r.createElement("br",null),"Pavel Měrka"))}function y(){return r.createElement("footer",null,r.createElement("div",{className:"footer-body"},r.createElement("div",{className:"thanking"},r.createElement("h4",null,"Thanks"),"I would like to thank all creators of free online programming courses on youtube, namely to The Net Ninja, The Coding Train, Tech With Tim, Web Dev Simplified, Traversy Media, ROB WEB s yablkom, and Franks laboratory. Thank you for making learning programming easy, fun and accessible for anyone."),r.createElement("div",{className:"footer-contact"},r.createElement(b,null))))}var w=()=>{const e=(0,r.useRef)(null);return[e,()=>{var t;null===(t=e.current)||void 0===t||t.scrollIntoView({behavior:"smooth"})}]};var E=()=>{const[e,t]=w(),[a,l]=w();return r.createElement("div",{className:"main-app"},r.createElement(n,{scrollToProjects:t,scrollToSkills:l}),r.createElement("main",null,r.createElement(i,null),r.createElement(h,{refProp:a}),r.createElement(f,{refProp:e})),r.createElement(y,null))};const v=()=>r.createElement(r.Fragment,null,r.createElement("title",null,"Pavel Měrka | WebDev"),r.createElement("link",{rel:"icon",href:"/logo.png"}))},8653:function(e){e.exports=JSON.parse('{"layout":"constrained","images":{"fallback":{"src":"/portfolio-page/static/794717fc8fe8bcc8586bad56622b7f85/6dbcd/fractal_snowflake_2.png","srcSet":"/portfolio-page/static/794717fc8fe8bcc8586bad56622b7f85/f21c0/fractal_snowflake_2.png 2000w,\\n/portfolio-page/static/794717fc8fe8bcc8586bad56622b7f85/a5b34/fractal_snowflake_2.png 4000w,\\n/portfolio-page/static/794717fc8fe8bcc8586bad56622b7f85/6dbcd/fractal_snowflake_2.png 8000w","sizes":"(min-width: 8000px) 8000px, 100vw"},"sources":[{"srcSet":"/portfolio-page/static/794717fc8fe8bcc8586bad56622b7f85/62c39/fractal_snowflake_2.webp 2000w,\\n/portfolio-page/static/794717fc8fe8bcc8586bad56622b7f85/a6ca8/fractal_snowflake_2.webp 4000w,\\n/portfolio-page/static/794717fc8fe8bcc8586bad56622b7f85/30be9/fractal_snowflake_2.webp 8000w","type":"image/webp","sizes":"(min-width: 8000px) 8000px, 100vw"}]},"width":8000,"height":8000}')},2781:function(e){e.exports=JSON.parse('{"layout":"constrained","images":{"fallback":{"src":"/portfolio-page/static/b89b589541a5cea4eb9dd17a2be66c06/f21c0/fractal_snowflake.png","srcSet":"/portfolio-page/static/b89b589541a5cea4eb9dd17a2be66c06/82c11/fractal_snowflake.png 500w,\\n/portfolio-page/static/b89b589541a5cea4eb9dd17a2be66c06/13677/fractal_snowflake.png 1000w,\\n/portfolio-page/static/b89b589541a5cea4eb9dd17a2be66c06/f21c0/fractal_snowflake.png 2000w","sizes":"(min-width: 2000px) 2000px, 100vw"},"sources":[{"srcSet":"/portfolio-page/static/b89b589541a5cea4eb9dd17a2be66c06/5f169/fractal_snowflake.webp 500w,\\n/portfolio-page/static/b89b589541a5cea4eb9dd17a2be66c06/3cd29/fractal_snowflake.webp 1000w,\\n/portfolio-page/static/b89b589541a5cea4eb9dd17a2be66c06/62c39/fractal_snowflake.webp 2000w","type":"image/webp","sizes":"(min-width: 2000px) 2000px, 100vw"}]},"width":2000,"height":2000}')}}]);
//# sourceMappingURL=component---src-pages-index-tsx-b16a87b8127a765e15ea.js.map