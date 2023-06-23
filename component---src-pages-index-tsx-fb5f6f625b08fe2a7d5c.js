"use strict";(self.webpackChunkmy_portfolio=self.webpackChunkmy_portfolio||[]).push([[691],{3204:function(e){const t=/[\p{Lu}]/u,a=/[\p{Ll}]/u,n=/^[\p{Lu}](?![\p{Lu}])/gu,r=/([\p{Alpha}\p{N}_]|$)/u,l=/[_.\- ]+/,i=new RegExp("^"+l.source),s=new RegExp(l.source+r.source,"gu"),o=new RegExp("\\d+"+r.source,"gu"),c=(e,r)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");if(r={pascalCase:!1,preserveConsecutiveUppercase:!1,...r},0===(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim()).length)return"";const l=!1===r.locale?e=>e.toLowerCase():e=>e.toLocaleLowerCase(r.locale),c=!1===r.locale?e=>e.toUpperCase():e=>e.toLocaleUpperCase(r.locale);if(1===e.length)return r.pascalCase?c(e):l(e);return e!==l(e)&&(e=((e,n,r)=>{let l=!1,i=!1,s=!1;for(let o=0;o<e.length;o++){const c=e[o];l&&t.test(c)?(e=e.slice(0,o)+"-"+e.slice(o),l=!1,s=i,i=!0,o++):i&&s&&a.test(c)?(e=e.slice(0,o-1)+"-"+e.slice(o-1),s=i,i=!1,l=!0):(l=n(c)===c&&r(c)!==c,s=i,i=r(c)===c&&n(c)!==c)}return e})(e,l,c)),e=e.replace(i,""),e=r.preserveConsecutiveUppercase?((e,t)=>(n.lastIndex=0,e.replace(n,(e=>t(e)))))(e,l):l(e),r.pascalCase&&(e=c(e.charAt(0))+e.slice(1)),((e,t)=>(s.lastIndex=0,o.lastIndex=0,e.replace(s,((e,a)=>t(a))).replace(o,(e=>t(e)))))(e,c)};e.exports=c,e.exports.default=c},8032:function(e,t,a){a.d(t,{L:function(){return g},M:function(){return k},P:function(){return v},S:function(){return z},_:function(){return s},a:function(){return i},b:function(){return m},g:function(){return u},h:function(){return o}});var n=a(7294),r=(a(3204),a(5697)),l=a.n(r);function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},i.apply(this,arguments)}function s(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t.indexOf(a=l[n])>=0||(r[a]=e[a]);return r}const o=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;function c(e,t,a){const n={};let r="gatsby-image-wrapper";return"fixed"===a?(n.width=e,n.height=t):"constrained"===a&&(r="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:r,"data-gatsby-image-wrapper":"",style:n}}function m(e,t,a,n,r){return void 0===r&&(r={}),i({},a,{loading:n,shouldLoad:e,"data-main-image":"",style:i({},r,{opacity:t?1:0})})}function u(e,t,a,n,r,l,s,o){const c={};l&&(c.backgroundColor=l,"fixed"===a?(c.width=n,c.height=r,c.backgroundColor=l,c.position="relative"):("constrained"===a||"fullWidth"===a)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),s&&(c.objectFit=s),o&&(c.objectPosition=o);const m=i({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:i({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return m}const d=["children"],p=function(e){let{layout:t,width:a,height:r}=e;return"fullWidth"===t?n.createElement("div",{"aria-hidden":!0,style:{paddingTop:r/a*100+"%"}}):"constrained"===t?n.createElement("div",{style:{maxWidth:a,display:"block"}},n.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg%20height='"+r+"'%20width='"+a+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},g=function(e){let{children:t}=e,a=s(e,d);return n.createElement(n.Fragment,null,n.createElement(p,i({},a)),t,null)},h=["src","srcSet","loading","alt","shouldLoad"],f=["fallback","sources","shouldLoad"],b=function(e){let{src:t,srcSet:a,loading:r,alt:l="",shouldLoad:o}=e,c=s(e,h);return n.createElement("img",i({},c,{decoding:"async",loading:r,src:o?t:void 0,"data-src":o?void 0:t,srcSet:o?a:void 0,"data-srcset":o?void 0:a,alt:l}))},w=function(e){let{fallback:t,sources:a=[],shouldLoad:r=!0}=e,l=s(e,f);const o=l.sizes||(null==t?void 0:t.sizes),c=n.createElement(b,i({},l,t,{sizes:o,shouldLoad:r}));return a.length?n.createElement("picture",null,a.map((e=>{let{media:t,srcSet:a,type:l}=e;return n.createElement("source",{key:t+"-"+l+"-"+a,type:l,media:t,srcSet:r?a:void 0,"data-srcset":r?void 0:a,sizes:o})})),c):c};var E;b.propTypes={src:r.string.isRequired,alt:r.string.isRequired,sizes:r.string,srcSet:r.string,shouldLoad:r.bool},w.displayName="Picture",w.propTypes={alt:r.string.isRequired,shouldLoad:r.bool,fallback:r.exact({src:r.string.isRequired,srcSet:r.string,sizes:r.string}),sources:r.arrayOf(r.oneOfType([r.exact({media:r.string.isRequired,type:r.string,sizes:r.string,srcSet:r.string.isRequired}),r.exact({media:r.string,type:r.string.isRequired,sizes:r.string,srcSet:r.string.isRequired})]))};const y=["fallback"],v=function(e){let{fallback:t}=e,a=s(e,y);return t?n.createElement(w,i({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):n.createElement("div",i({},a))};v.displayName="Placeholder",v.propTypes={fallback:r.string,sources:null==(E=w.propTypes)?void 0:E.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null}};const k=function(e){return n.createElement(n.Fragment,null,n.createElement(w,i({},e)),n.createElement("noscript",null,n.createElement(w,i({},e,{shouldLoad:!0}))))};k.displayName="MainImage",k.propTypes=w.propTypes;const N=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],A=["style","className"],I=e=>e.replace(/\n/g,""),T=function(e,t,a){for(var n=arguments.length,r=new Array(n>3?n-3:0),i=3;i<n;i++)r[i-3]=arguments[i];return e.alt||""===e.alt?l().string.apply(l(),[e,t,a].concat(r)):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},x={image:l().object.isRequired,alt:T},C=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],S=["style","className"],j=new Set;let M,L;const R=function(e){let{as:t="div",image:r,style:l,backgroundColor:m,className:u,class:d,onStartLoad:p,onLoad:g,onError:h}=e,f=s(e,C);const{width:b,height:w,layout:E}=r,y=c(b,w,E),{style:v,className:k}=y,N=s(y,S),A=(0,n.useRef)(),I=(0,n.useMemo)((()=>JSON.stringify(r.images)),[r.images]);d&&(u=d);const T=function(e,t,a){let n="";return"fullWidth"===e&&(n='<div aria-hidden="true" style="padding-top: '+a/t*100+'%;"></div>'),"constrained"===e&&(n='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height=\''+a+"'%20width='"+t+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),n}(E,b,w);return(0,n.useEffect)((()=>{M||(M=a.e(731).then(a.bind(a,6731)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:a}=e;return L=t,{renderImageToString:t,swapPlaceholderImage:a}})));const e=A.current.querySelector("[data-gatsby-image-ssr]");if(e&&o())return e.complete?(null==p||p({wasCached:!0}),null==g||g({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==p||p({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==g||g({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void j.add(I);if(L&&j.has(I))return;let t,n;return M.then((e=>{let{renderImageToString:a,swapPlaceholderImage:s}=e;A.current&&(A.current.innerHTML=a(i({isLoading:!0,isLoaded:j.has(I),image:r},f)),j.has(I)||(t=requestAnimationFrame((()=>{A.current&&(n=s(A.current,I,j,l,p,g,h))}))))})),()=>{t&&cancelAnimationFrame(t),n&&n()}}),[r]),(0,n.useLayoutEffect)((()=>{j.has(I)&&L&&(A.current.innerHTML=L(i({isLoading:j.has(I),isLoaded:j.has(I),image:r},f)),null==p||p({wasCached:!0}),null==g||g({wasCached:!0}))}),[r]),(0,n.createElement)(t,i({},N,{style:i({},v,l,{backgroundColor:m}),className:k+(u?" "+u:""),ref:A,dangerouslySetInnerHTML:{__html:T},suppressHydrationWarning:!0}))},D=(0,n.memo)((function(e){return e.image?(0,n.createElement)(R,e):null}));D.propTypes=x,D.displayName="GatsbyImage";const P=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function B(e){return function(t){let{src:a,__imageData:r,__error:l}=t,o=s(t,P);return l&&console.warn(l),r?n.createElement(e,i({image:r},o)):(console.warn("Image not loaded",a),null)}}const G=B((function(e){let{as:t="div",className:a,class:r,style:l,image:o,loading:d="lazy",imgClassName:p,imgStyle:h,backgroundColor:f,objectFit:b,objectPosition:w}=e,E=s(e,N);if(!o)return console.warn("[gatsby-plugin-image] Missing image prop"),null;r&&(a=r),h=i({objectFit:b,objectPosition:w,backgroundColor:f},h);const{width:y,height:T,layout:x,images:C,placeholder:S,backgroundColor:j}=o,M=c(y,T,x),{style:L,className:R}=M,D=s(M,A),P={fallback:void 0,sources:[]};return C.fallback&&(P.fallback=i({},C.fallback,{srcSet:C.fallback.srcSet?I(C.fallback.srcSet):void 0})),C.sources&&(P.sources=C.sources.map((e=>i({},e,{srcSet:I(e.srcSet)})))),n.createElement(t,i({},D,{style:i({},L,l,{backgroundColor:f}),className:R+(a?" "+a:"")}),n.createElement(g,{layout:x,width:y,height:T},n.createElement(v,i({},u(S,!1,x,y,T,j,b,w))),n.createElement(k,i({"data-gatsby-image-ssr":"",className:p},E,m("eager"===d,!1,P,d,h)))))})),J=function(e,t){for(var a=arguments.length,n=new Array(a>2?a-2:0),r=2;r<a;r++)n[r-2]=arguments[r];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?l().number.apply(l(),[e,t].concat(n)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},O=new Set(["fixed","fullWidth","constrained"]),F={src:l().string.isRequired,alt:T,width:J,height:J,sizes:l().string,layout:e=>{if(void 0!==e.layout&&!O.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}};G.displayName="StaticImage",G.propTypes=F;const z=B(D);z.displayName="StaticImage",z.propTypes=F},8446:function(e,t,a){a.r(t),a.d(t,{Head:function(){return k},default:function(){return v}});var n=a(7294);function r(e){let{scrollToProjects:t,scrollToSkills:a}=e;return n.createElement("header",{className:"header"},n.createElement("nav",{className:"top-navigation"},n.createElement("ul",null,n.createElement("li",null,n.createElement("button",{onClick:()=>{window.scrollTo({top:0,behavior:"smooth"})}},"Home")),n.createElement("li",{onClick:()=>t()},n.createElement("button",null,"My projects")),n.createElement("li",null,n.createElement("button",{onClick:()=>a()},"Skills")))))}var l=a(8032);function i(){const{0:e,1:t}=(0,n.useState)("Copy email");return n.createElement(n.Fragment,null,n.createElement("div",{className:"contact-line short-text"},n.createElement("div",null,"Email:"),n.createElement("div",null,"pavelmerka1995@gmail.com")),n.createElement("div",{className:"contact-line short-text"},n.createElement("button",{className:"email-icon",onClick:()=>(navigator.clipboard.writeText("pavelmerka1995@gmail.com"),t("Email copied"),void setTimeout((()=>{t("Copy email")}),5e3))},e),n.createElement("a",{href:"https://github.com/PMerka",target:"_blank"},n.createElement("div",{className:"email-icon"},"Github profile"))))}function s(e){let{refProp:t}=e;return n.createElement("section",{ref:t,className:"top-section"},n.createElement("div",{className:"top-section__main-text"},n.createElement("p",{className:"first-line"},"Hi, my name is"),n.createElement("h1",{className:"name"},"Pavel Měrka"),n.createElement("p",{className:"short-text"},"I m a javascript / typescript frontend developer. I focuse mostly on building webapps with React. I also have some experience with backend frameworks (Django) and mobile development with React Native."),n.createElement(i,null)),n.createElement("div",{className:"top-section__img"},n.createElement(l.S,{style:{width:"100%"},objectFit:"scale-down",placeholder:"none",loading:"eager",src:"./../../../static/fractal_snowflake.png",alt:"fractal snowflake",__imageData:a(2781)})))}function o(e){let{myRef:t,projectData:a,pageURL:r,repoUrl:l,children:i,descriptionClassNames:s,innerShadow:o=!1}=e;a.frontmatter.keywords;const c=a.frontmatter.title,m=a.html;return n.createElement("div",{ref:t,className:"project-item "+(o?"project-item-inner-shadow":null)},n.createElement("div",{className:"project-description "+s},n.createElement("h3",null,c),n.createElement("div",{style:{marginTop:10,marginBottom:10}}),n.createElement("div",{dangerouslySetInnerHTML:{__html:m},className:"short-text"}),n.createElement("div",{className:"projet-links-container"},n.createElement("a",{className:"project-link-button",href:r,target:"_blank"},"Try the app"),n.createElement("a",{className:"project-link-button",href:l,target:"_blank"},"Source code"))),i)}var c=function(e){let{isZoomed:t}=e;return n.createElement("div",{className:"project-img "+(t?"zoom-in-img":"zoom-out-img")+" "},n.createElement(l.S,{style:{width:"100%"},objectFit:"scale-down",placeholder:"none",loading:"eager",src:"./../../static/fractal_snowflake_2.png",alt:"fractal snowflake",__imageData:a(8653)}))};var m=function(e,t){let{threshold:a=.8,root:r=null,rootMargin:l="0%",freezeOnceVisible:i=!0}=t;const{0:s,1:o}=(0,n.useState)(),c=(null==s?void 0:s.isIntersecting)&&i,m=e=>{let[t]=e;o(t)};return(0,n.useEffect)((()=>{const t=null==e?void 0:e.current;if(!!!window.IntersectionObserver||c||!t)return;const n=new IntersectionObserver(m,{threshold:a,root:r,rootMargin:l});return n.observe(t),()=>n.disconnect()}),[null==e?void 0:e.current,JSON.stringify(a),r,l,c]),s},u=a(4160);var d=()=>(0,u.K2)("980617323"),p=a.p+"static/snowflake_growth_opt-4b264b775398707c67b15450932e68d3.mp4",g=a.p+"static/boids-26d72a83be4a574d9b3519419667f9cd.mp4";function h(e){let{refProp:t}=e;const a=d().allMarkdownRemark.nodes,r=(0,n.useRef)(null);(0,n.useEffect)((()=>{null!==r.current&&(r.current.playbackRate=10)}),[]);const l=(0,n.useRef)(null),i=m(l,{}),s=!(null==i||!i.isIntersecting);return n.createElement("section",{ref:t,className:"projects"},n.createElement("div",{className:"projects-intro"},n.createElement("h2",null,"Creative Projects"),n.createElement("p",{className:"zero-top-margin"},"I like to practice my JavaScript skills on projects combining computer graphics, art, math, and science - for example creating interactive visualizations of natural processes. My projects primarily revolve around snowflake growth, fractals, and complex systems, utilizing HTML canvas and React. Through these technologies, I bring these phenomena to life.")),n.createElement(o,{myRef:l,projectData:a[0],pageURL:"https://pmerka.github.io/snowflake/",repoUrl:"https://github.com/PMerka/snowflake",descriptionClassNames:"project-description-big-margin-top",innerShadow:!0},n.createElement(c,{isZoomed:s})),n.createElement(o,{projectData:a[1],pageURL:"https://pmerka.github.io/snowflake-growth-simulation/",repoUrl:"https://github.com/PMerka/snowflake-growth-simulation"},n.createElement("div",{className:"video-box snowflake-video"},n.createElement("video",{src:p,style:{width:"100%"},className:"rotateY",ref:r,autoPlay:!0,muted:!0}))),n.createElement(o,{projectData:a[2],pageURL:"https://pmerka.github.io/firefly-boids/",repoUrl:"https://github.com/PMerka/firefly-boids"},n.createElement("div",{className:"video-box boid-video"},n.createElement("video",{src:g,style:{width:"100%"},autoPlay:!0,muted:!0,loop:!0}))))}function f(e){let{refProp:t}=e;return n.createElement("section",{ref:t,className:"skills-section"},n.createElement("h2",null,"Few words about me"),n.createElement("div",{className:"skills"},n.createElement("div",{className:"about-me"},n.createElement("p",{className:"zero-top-margin"},"I started learning the basics of programming during my bachelor's degree in chemistry. I chose quantum chemistry computations as the topic of my thesis. After finishing my master's course, I focused more on programming in Python and later switched to JavaScript. I like learning new skills and technologies. I also have a strong foundation in math, physics.")),n.createElement("div",{className:"skill-list"},n.createElement("h4",{className:"about-me__h4"},"I work primarily with:"),n.createElement("ul",{className:"about-me__ul"},n.createElement("li",null,"JavaScript"),n.createElement("li",null,"TypeScript"),n.createElement("li",null,"React"),n.createElement("li",null,"React Native"),n.createElement("li",null,"CSS"),n.createElement("li",null,"HTML"),n.createElement("li",null,"Canvas animations"),n.createElement("li",null,"Git"),n.createElement("li",null,"Github")),n.createElement("h4",{className:"about-me__h4"},"I also use:"),n.createElement("ul",{className:"about-me__ul"},n.createElement("li",null,"Godot game engine"),n.createElement("li",null,"Gatsby"),n.createElement("li",null,"Django"),n.createElement("li",null,"Python"),n.createElement("li",null,"Linux terminal"),n.createElement("li",null,"Docker")))))}var b="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NDkxMSwgMjAxMy8xMC8yOS0xMTo0NzoxNiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MzlFQkFERkU4NkJCMTFFM0FBNTJFRTMzNTJEMUJDNDYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MzlFQkFERkQ4NkJCMTFFM0FBNTJFRTMzNTJEMUJDNDYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkU1MTc4QTJFOTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkU1MTc4QTJGOTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+Kk5lQwAABYxJREFUeNrkm29oVXUYx3+7bM3V1FnbqlltrtXWtYRa1nqxooY5E7EhKWGuaTDBagol9SIMDCKICASj+cISw/DPi16ZBakrUBnoC7nNoTMWy6I1c+LmVq6t78N9jpyu555znt855+536IHPi939/jzP95zznN+/kzc1NaUitirwJJgPasF94DZQDG7hMqNgBFwEZ5kU+AH0R+lcXgQCJMBT4EXwLKgM2N7P4FvwJegCk6YKUA5eB23grogu2C/gc7AN/GGKABTsZtAOZqjc2DjYAT5kUfSNBNCkAGwGo1PTZ6PsQ4FuHLp3QD3YDR5QZtgZsAac1ElYokcGbATHDApesS/kUwf7GEkOKAK7wAvKbNsPXgZjYQowG3wNnlDxsONgCbgchgAU/GHwiIqXUT5o8hLBKwfcDA7FMHgrUR/iGLQEoGTyBWhQ8bUGjiFPR4A3QIuKv7VwLKIcQMnue5Dv0fjT/IwtAM3g+RyMBmkU+BXf3qc5Rx3xqDPBE7LjfkaCheCcj1HYKYe6JeBt8GcEo75L3HaJQ7+nfNQ/x7H9p67TFX4L1Pi4EocdfhsGH4BPwVbwqu0xGwI/8vT2N/77Gv+vAJSCO3n6PJ//Vjz72w62cPtORnfAwx7+1nBsW93ugGow7vOKtPkYa9eDl0Clxji9kuvW+yjb5tPncY7xet3MhjoFt2RzgIlU2DQL/O6017W/Be4BawXJqMCgTH+ToOxajvWG1+AmYVBlBglQKrxwmzIFoB9XCzt91CABpL6sti62JcBiXtKS2GMGCSD1pZxjvi7AKmED9PraYJAAG2yvVL+2yi7AImHl90C3QQJ03/B+97ZF1lCYVlN6BBV/BffykNQkoyF4H5grqJOkO6BR2NF2A4O35gifCOs0JjTW9vYaPPPbJ11LJAFqBRVoDf68wQLQI3BBUL424XPiY1lvDOb/ZwRla0iAOYIKv8dAgEFB2VtJgJmCChMxEEAyHigmAQoFFWbFQIDZgrKF0p2hmTEQQOQjCTAmKD8vBgJUCcqOkQBXBBXosEORwcEXKdmBjCskwICgQr5h0+BMW6i8V7LtNkAC9As7WWqwAM8Jy/cnhBMhspVKvq2eC0uwbxLrSWhMa+dpdJQLW6mRpLtpOlyuMcL7CTwErhoSPG2ApjQEuD3BQ0fp0ZJqlT6pZYpt0wieYh60nuWDGp2+At4xIPgt7IvU0jHzBkFdgD27HWDGNGyGFHHfulaXuTN0IkBjZ8EykJeDwKmPFtAXwN8TTltjrVkKfwcawXJW3G3v8DTYCKoiCLwGvAl6QthpbnU6J5jP2f1uh1Wgxbbxwv0qvT/vtZRGA6wuzs50+Pkb8JdgQtPMq1VJld7bnxtSzhjgJD5hzwEW611OZK6xlSvzeYbAsl3Cx4PK7ozodOl6t93hfJByqbzOVnYh+MdHhxfBLI1bnuoMhRx8imPMKgDR5LG/nrSVfddHpx8HeO4/ClmApsw+snXsdk7gYMat+r5Hp0sDCLAkxOA7nfrI1nGxx2tmQUb5x8FuzgvD4Dw4wNm2MIAA1SEF38cx+RaAeBCMZGlwb44GOyUhBD/CsTj24TatpddXq3L+RIVmXnE4QzjJMaSylvBxFdqzKHsVrDD8Dmj36sOvIx0unewHDRENg4MI0BH2FyP0RcZOlzW3Ib7VLvPqDK0z1PEq7bDmLVwCLgnr0AhvnUp/0eJp0k9m6HO4fUp2nGZODgUY5PzUJVlHkxg1TEfnjxqY8I6yb12SSjqLm7T9/Ax4TaW/+JxuIx862KcL4toBk1QFT1omXZLRHQHaL3Npl/r8jH3QjiGsbJ3kGd/fDo6WBWi31KG9a9xXMgzfw35tVfCR9l52dk8Ibe7htnq57YowfY7i4+lYWUL9z+1fAQYACqstE4NCc18AAAAASUVORK5CYII=";function w(){return n.createElement("div",{className:"gh-section"},n.createElement("div",{className:"gh-icon"},n.createElement("a",{className:"gh-link",href:"https://github.com/PMerka/portfolio-page",target:"_blank"},n.createElement("img",{src:b,alt:"Github icon"}),n.createElement("br",null),"Source code")),n.createElement("div",null,"Created by ",n.createElement("br",null),"Pavel Měrka"))}function E(){return n.createElement("footer",null,n.createElement("div",{className:"footer-body"},n.createElement("div",{className:"thanking"},n.createElement("h4",null,"Thanks"),"I would like to thank all creators of free online programming courses on youtube, namely to The Net Ninja, The Coding Train, Tech With Tim, Web Dev Simplified, Traversy Media, ROB WEB s yablkom, and Franks laboratory. Thank you for making learning programming easy, fun and accessible for anyone."),n.createElement("div",{className:"footer-contact"},n.createElement(w,null))))}var y=()=>{const e=(0,n.useRef)(null);return[e,()=>{var t;null===(t=e.current)||void 0===t||t.scrollIntoView({behavior:"smooth"})}]};var v=()=>{const[e,t]=y(),[a,l]=y();return n.createElement("div",{className:"main-app"},n.createElement(r,{scrollToProjects:t,scrollToSkills:l}),n.createElement("main",null,n.createElement(s,null),n.createElement(f,{refProp:a}),n.createElement(h,{refProp:e})),n.createElement(E,null))};const k=()=>n.createElement(n.Fragment,null,n.createElement("title",null,"Pavel Měrka | WebDev"),n.createElement("link",{rel:"icon",href:"/logo.png"}))},8653:function(e){e.exports=JSON.parse('{"layout":"constrained","images":{"fallback":{"src":"/static/794717fc8fe8bcc8586bad56622b7f85/6dbcd/fractal_snowflake_2.png","srcSet":"/static/794717fc8fe8bcc8586bad56622b7f85/f21c0/fractal_snowflake_2.png 2000w,\\n/static/794717fc8fe8bcc8586bad56622b7f85/a5b34/fractal_snowflake_2.png 4000w,\\n/static/794717fc8fe8bcc8586bad56622b7f85/6dbcd/fractal_snowflake_2.png 8000w","sizes":"(min-width: 8000px) 8000px, 100vw"},"sources":[{"srcSet":"/static/794717fc8fe8bcc8586bad56622b7f85/62c39/fractal_snowflake_2.webp 2000w,\\n/static/794717fc8fe8bcc8586bad56622b7f85/a6ca8/fractal_snowflake_2.webp 4000w,\\n/static/794717fc8fe8bcc8586bad56622b7f85/30be9/fractal_snowflake_2.webp 8000w","type":"image/webp","sizes":"(min-width: 8000px) 8000px, 100vw"}]},"width":8000,"height":8000}')},2781:function(e){e.exports=JSON.parse('{"layout":"constrained","images":{"fallback":{"src":"/static/b89b589541a5cea4eb9dd17a2be66c06/f21c0/fractal_snowflake.png","srcSet":"/static/b89b589541a5cea4eb9dd17a2be66c06/82c11/fractal_snowflake.png 500w,\\n/static/b89b589541a5cea4eb9dd17a2be66c06/13677/fractal_snowflake.png 1000w,\\n/static/b89b589541a5cea4eb9dd17a2be66c06/f21c0/fractal_snowflake.png 2000w","sizes":"(min-width: 2000px) 2000px, 100vw"},"sources":[{"srcSet":"/static/b89b589541a5cea4eb9dd17a2be66c06/5f169/fractal_snowflake.webp 500w,\\n/static/b89b589541a5cea4eb9dd17a2be66c06/3cd29/fractal_snowflake.webp 1000w,\\n/static/b89b589541a5cea4eb9dd17a2be66c06/62c39/fractal_snowflake.webp 2000w","type":"image/webp","sizes":"(min-width: 2000px) 2000px, 100vw"}]},"width":2000,"height":2000}')}}]);
//# sourceMappingURL=component---src-pages-index-tsx-fb5f6f625b08fe2a7d5c.js.map