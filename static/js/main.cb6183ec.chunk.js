(this["webpackJsonpfull-stack-portfolio"]=this["webpackJsonpfull-stack-portfolio"]||[]).push([[0],{43:function(e,t,c){},55:function(e,t,c){},56:function(e,t,c){},57:function(e,t,c){},59:function(e,t,c){},60:function(e,t,c){},61:function(e,t,c){},62:function(e,t,c){},63:function(e,t,c){},64:function(e,t,c){},65:function(e,t,c){},66:function(e,t,c){"use strict";c.r(t);var n=c(1),i=c.n(n),s=c(12),a=c.n(s),l=(c(43),c(4)),r=c(13),o=c(69),j=c(68);var b=c(19),d=c(15),h=(c(55),c(56),c(57),c(0));function u(e){return Object(h.jsx)("div",{className:e.flex?"wrapper-md margin-auto flex ".concat(e.spaceBetween?"space-between":""," ").concat(e.contentCenter?"content-center":""," ").concat(e.column?"column":""," ").concat(e.itemsCenter?"items-center":""):"wrapper-md margin-auto",children:e.children})}var x=c(13).Link;function m(){return Object(h.jsx)("header",{className:"flex",children:Object(h.jsxs)(u,{flex:!0,spaceBetween:!0,itemsCenter:!0,children:[Object(h.jsx)("div",{className:"logo",children:Object(h.jsx)(x,{to:"/",children:Object(h.jsx)("img",{src:"./images/logo.png",alt:"",className:"img",height:"45",width:"47"})})}),Object(h.jsxs)("ul",{className:"nav flex",children:[Object(h.jsx)("li",{children:Object(h.jsx)(x,{to:"/about",children:"About"})}),Object(h.jsx)("li",{children:Object(h.jsx)(x,{target:"__blank",to:"/resume.pdf",children:"Resume"})}),Object(h.jsx)("li",{children:Object(h.jsx)(x,{to:"/#projects",children:"Projects"})}),Object(h.jsx)("li",{children:Object(h.jsx)(x,{to:"/contact",children:"Contact"})})]})]})})}c(59);function O(e){return Object(h.jsx)(h.Fragment,{children:e.homepage?Object(h.jsx)("div",{className:e.flex?"hero-section homepage-banner flex ".concat(e.alignItemsCenter?"items-center":null):"hero-section",style:{backgroundImage:'url("images/code-computer.png")'},children:e.children}):Object(h.jsx)("div",{className:e.flex?"hero-section flex ".concat(e.alignItemsCenter?"items-center":null):"hero-section",children:e.children})})}c(60);var p=c(5),f=c.n(p),g=c(6),y=c(13).Link;function v(){return Object(h.jsx)("footer",{children:Object(h.jsxs)(u,{flex:!0,spaceBetween:!0,itemsCenter:!0,children:[Object(h.jsxs)("p",{className:"copyright flex items-center",children:["\xa9 Portfolio ",(new Date).getFullYear()]}),Object(h.jsxs)("ul",{className:"links flex items-center",children:[Object(h.jsx)("li",{children:Object(h.jsx)(y,{to:"/about",children:"About"})}),Object(h.jsx)("li",{children:Object(h.jsx)(y,{target:"__blank",to:"/resume.pdf",children:"Resume"})}),Object(h.jsx)("li",{children:Object(h.jsx)(y,{to:"/projects",children:"Projects"})})]}),Object(h.jsxs)("ul",{className:"socials flex items-center",children:[Object(h.jsx)("li",{children:Object(h.jsx)(y,{target:"__blank",to:{pathname:"http://www.github.com/bigegu24"},children:Object(h.jsx)(f.a,{path:g.f,size:.9,color:"white"})})}),Object(h.jsx)("li",{children:Object(h.jsx)(y,{target:"__blank",to:{pathname:"http://www.github.com/bigegu24"},children:Object(h.jsx)(f.a,{path:g.d,size:.9,color:"white"})})}),Object(h.jsx)("li",{children:Object(h.jsx)(y,{target:"__blank",to:{pathname:"http://www.github.com/bigegu24"},children:Object(h.jsx)(f.a,{path:g.e,size:.9,color:"white"})})})]})]})})}var N=c(8);c(61);function w(e){var t;return t=e.xl?"xl":"",Object(h.jsx)("div",{className:e.className?"section flex items-center ".concat(e.className," ").concat(t):"section flex items-center ".concat(t),children:e.children})}var k=c(14),C=(c(62),i.a.createContext());function L(){return Object(n.useContext)(C)}function _(e){var t=e.children,c=Object(n.useState)({type:""}),i=Object(k.a)(c,2),s=i[0],a=i[1],l=Object(n.useState)({img:"",type:"",title:"",description:"",slugs:"",github:"",siteURL:""}),r=Object(k.a)(l,2),o=r[0],j=r[1];return Object(h.jsx)(C.Provider,{value:{functions:{setModal:a,setProject:j},values:{modal:s,project:o}},children:t})}function R(e){var t=e.img,c=e.type,i=e.title,s=e.description,a=e.slugs,l=e.github,r=e.siteURL,o=Object(n.useState)(!1),j=Object(k.a)(o,2),b=j[0],u=j[1],x=L(),m=x.functions,O=x.values.project,p=m.setModal,y=m.setProject;return Object(h.jsx)("div",{className:"project flex pointer",onMouseEnter:function(){return u(!b)},onMouseLeave:function(){return u(!b)},style:{backgroundImage:b?'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("images/'.concat(t,'")'):'url("images/'.concat(t,'")')},onClick:function(){return y(Object(d.a)(Object(d.a)({},O),{},{img:t,type:c,title:i,description:s,slugs:a,github:l,siteURL:r})),void p("project")},children:Object(h.jsx)(f.a,{path:g.g,size:1.7,color:"#fff",className:"icon"})})}var z={type:"ECOMMERCE",img:"shop.png",title:"Cross-Platform Ecommerce Application",description:"There are many variations of passages of Lorem Ipsum available, but the majority \n    have suffered alteration in some form, by injected humour, or randomised words \n    which don't look even slightly believable. ",slugs:["React","React Native","Sass","Node","MySQL"],github:"https://github.com/BigEgu24/cross-platform-ecommerce",siteURL:""},F=c(37),I=c.n(F),M=function(e){var t=e.children,c=e.once,i=e.offset,s=e.partialVisibility,a=Object(n.useState)(!1),l=Object(k.a)(a,2),r=l[0],o=l[1];return Object(h.jsx)(I.a,{active:!c||!r,partialVisibility:s,offset:i,onChange:function(e){r&&c||o(e)},children:t({isVisible:r})})};M.defaultProps={once:!1};var P=M;c(63);function S(e){var t=e.children,c=e.onClick,n=e.type;return Object(h.jsx)("button",{className:n?"btn ".concat(n," flex pointer"):"btn flex pointer",onClick:c,children:t})}var V=c(13).Link;function E(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(m,{}),Object(h.jsx)(O,{flex:!0,alignItemsCenter:!0,homepage:!0,children:Object(h.jsx)(u,{flex:!0,spaceBetween:!0,children:Object(h.jsx)(N.a,{from:{opacity:0,marginLeft:-300},to:{opacity:1,marginLeft:0},children:function(e){return Object(h.jsxs)("div",{className:"content flex align-left",style:e,children:[Object(h.jsx)("h1",{className:"name",children:"EDUARDO GUTIERREZ"}),Object(h.jsx)("p",{className:"role",children:"Full Stack Developer"}),Object(h.jsxs)("ul",{className:"links flex",children:[Object(h.jsx)("li",{children:Object(h.jsx)(b.Link,{to:"projects",spy:!0,smooth:!0,offset:0,duration:300,className:"pointer",children:"View Projects"})}),Object(h.jsx)("li",{children:Object(h.jsx)(V,{target:"__blank",to:"/resume.pdf",children:"Go to Resume"})})]}),Object(h.jsxs)("ul",{className:"socials flex",children:[Object(h.jsx)("li",{children:Object(h.jsx)(V,{target:"__blank",to:{pathname:"http://www.github.com/bigegu24"},children:Object(h.jsx)(f.a,{path:g.f,size:.9,color:"white"})})}),Object(h.jsx)("li",{children:Object(h.jsx)(V,{target:"__blank",to:{pathname:"http://www.github.com/bigegu24"},children:Object(h.jsx)(f.a,{path:g.d,size:.9,color:"white"})})}),Object(h.jsx)("li",{children:Object(h.jsx)(V,{target:"__blank",to:{pathname:"http://www.github.com/bigegu24"},children:Object(h.jsx)(f.a,{path:g.e,size:.9,color:"white"})})})]})]})}})})}),Object(h.jsx)(w,{className:"about-me",children:Object(h.jsx)(u,{flex:!0,spaceBetween:!0,children:Object(h.jsx)(P,{once:!0,offset:{top:100},partialVisibility:!0,children:function(e){var t=e.isVisible;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(N.a,{to:{opacity:t?1:0},children:function(e){var t=e.opacity;return Object(h.jsx)("div",{className:"image",style:{backgroundImage:'url("images/man.png")',opacity:t}})}}),Object(h.jsx)(N.a,{to:{opacity:t?1:0},children:function(e){var t=e.opacity;return Object(h.jsxs)("div",{className:"content flex",style:{opacity:t},children:[Object(h.jsx)("h1",{children:"About Me"}),Object(h.jsx)("p",{children:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."})]})}})]})}})})}),Object(h.jsx)(w,{className:"my-skills",children:Object(h.jsx)(u,{flex:!0,contentCenter:!0,itemsCenter:!0,column:!0,children:Object(h.jsx)(P,{once:!0,children:function(e){var t=e.isVisible;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(N.a,{delay:100,to:{opacity:t?1:0},children:function(e){var t=e.opacity;return Object(h.jsx)("h1",{style:{opacity:t},children:"My Skills"})}}),Object(h.jsxs)("ul",{className:"badges flex",children:[Object(h.jsx)(N.a,{delay:200,to:{opacity:t?1:0},children:function(e){var t=e.opacity;return Object(h.jsxs)("li",{className:"align-center relative",style:{opacity:t},children:[Object(h.jsx)(f.a,{path:g.c,size:1.5,color:"#f34f29"}),Object(h.jsx)("p",{children:"Git"})]})}}),Object(h.jsx)(N.a,{delay:325,to:{opacity:t?1:0},children:function(e){var t=e.opacity;return Object(h.jsxs)("li",{className:"align-center relative",style:{opacity:t},children:[Object(h.jsx)(f.a,{path:g.i,size:1.5,color:"#61dafb"}),Object(h.jsx)("p",{children:"React"})]})}}),Object(h.jsx)(N.a,{delay:450,to:{opacity:t?1:0},children:function(e){var t=e.opacity;return Object(h.jsxs)("li",{className:"align-center relative",style:{opacity:t},children:[Object(h.jsx)(f.a,{path:g.i,size:1.5,color:"#fff"}),Object(h.jsx)("p",{children:"React Native"})]})}}),Object(h.jsx)(N.a,{delay:575,to:{opacity:t?1:0},children:function(e){var t=e.opacity;return Object(h.jsxs)("li",{className:"align-center relative",style:{opacity:t},children:[Object(h.jsx)(f.a,{path:g.j,size:1.5,color:"#c69"}),Object(h.jsx)("p",{children:"Sass"})]})}}),Object(h.jsx)(N.a,{delay:700,to:{opacity:t?1:0},children:function(e){var t=e.opacity;return Object(h.jsxs)("li",{className:"align-center relative",style:{opacity:t},children:[Object(h.jsx)(f.a,{path:g.a,size:1.5,color:"#fff"}),Object(h.jsx)("p",{children:"Babel"})]})}}),Object(h.jsx)(N.a,{delay:825,to:{opacity:t?1:0},children:function(e){var t=e.opacity;return Object(h.jsxs)("li",{className:"align-center relative",style:{opacity:t},children:[Object(h.jsx)(f.a,{path:g.h,size:1.5,color:"#68a063"}),Object(h.jsx)("p",{children:"Node"})]})}}),Object(h.jsx)(N.a,{delay:950,to:{opacity:t?1:0},children:function(e){var t=e.opacity;return Object(h.jsxs)("li",{className:"align-center relative",style:{opacity:t},children:[Object(h.jsx)(f.a,{path:g.b,size:1.5,color:"#f29111"}),Object(h.jsx)("p",{children:"MySQL"})]})}})]})]})}})})}),Object(h.jsx)(w,{className:"projects",id:"projects",children:Object(h.jsxs)(u,{flex:!0,contentCenter:!0,itemsCenter:!0,column:!0,children:[Object(h.jsx)(P,{once:!0,children:function(e){var t=e.isVisible;return Object(h.jsx)(N.a,{delay:200,to:{opacity:t?1:0},children:function(e){var t=e.opacity;return Object(h.jsx)("h1",{className:"section-title",style:{opacity:t},children:"Projects"})}})}}),Object(h.jsx)(P,{once:!0,offset:{top:-200},partialVisibility:!0,children:function(e){var t=e.isVisible;return Object(h.jsxs)("div",{className:"flex",children:[Object(h.jsx)(N.a,{delay:150,from:{opacity:t?1:0,marginLeft:-500},to:{opacity:t?1:0,marginLeft:0},children:function(e){var t=e.opacity;return Object(h.jsx)("span",{style:{opacity:t},children:Object(h.jsx)(R,Object(d.a)({},z))})}}),Object(h.jsx)(N.a,{delay:350,from:{opacity:t?1:0,marginLeft:-500},to:{opacity:t?1:0,marginLeft:0},children:function(e){var t=e.opacity;return Object(h.jsx)("span",{style:{opacity:t},children:Object(h.jsx)(R,Object(d.a)({},z))})}}),Object(h.jsx)(N.a,{delay:550,from:{opacity:t?1:0,marginLeft:-500},to:{opacity:t?1:0,marginLeft:0},children:function(e){var t=e.opacity;return Object(h.jsx)("span",{style:{opacity:t},children:Object(h.jsx)(R,Object(d.a)({},z))})}})]})}})]})}),Object(h.jsx)(w,{className:"last-contact",children:Object(h.jsx)(u,{flex:!0,contentCenter:!0,itemsCenter:!0,column:!0,children:Object(h.jsxs)("div",{className:"content flex items-center",children:[Object(h.jsx)("h1",{className:"title",children:"Get in touch"}),Object(h.jsx)("p",{className:"description",children:"Let's connect."}),Object(h.jsx)(V,{to:"/contact",children:Object(h.jsx)(S,{type:"blue",children:"Contact Me"})})]})})}),Object(h.jsx)(v,{})]})}c(64);function B(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(m,{}),Object(h.jsx)(w,{className:"",xl:!0,children:Object(h.jsx)(u,{flex:!0,contentCenter:!0,itemsCenter:!0,column:!0})}),Object(h.jsx)(v,{})]})}c(65);var U=c(13).Link;function T(){var e=L(),t=e.values,c=e.functions.setModal,n=t.modal,i=t.project;return Object(h.jsxs)("div",{className:"project"===n?"modal active project-modal relative":"modal project-modal relative",children:[Object(h.jsx)("div",{className:"background full-width full-height absolute",onClick:function(){return c("")}}),Object(h.jsxs)("div",{className:"modal-content margin-auto",children:[Object(h.jsx)("div",{className:"modal-header",children:Object(h.jsx)("span",{className:"close",onClick:function(){return c("")},children:"\xd7"})}),Object(h.jsxs)("div",{className:"modal-body flex",children:[Object(h.jsx)("div",{className:"image",style:{backgroundImage:'url("images/'.concat(i.img,'")')},children:"Replace With a gif"}),Object(h.jsxs)("div",{className:"content relative",children:[Object(h.jsx)("h1",{className:"type",children:i.type}),Object(h.jsx)("h1",{className:"title",children:i.title}),Object(h.jsx)("p",{className:"description",children:i.description}),Object(h.jsx)("ul",{className:"slugs flex",children:i.slugs.map((function(e,t){return Object(h.jsx)("li",{className:"flex items-center",children:e},t)}))}),Object(h.jsxs)("ul",{className:"links flex absolute",children:[Object(h.jsx)("li",{children:Object(h.jsxs)(U,{to:{pathname:i.github},target:"__blank",title:"View the Code",className:"flex items-center",children:[Object(h.jsx)(f.a,{path:g.d,size:.9,color:"#000"}),Object(h.jsx)("p",{children:"View the Code"})]})}),Object(h.jsx)("li",{children:Object(h.jsxs)(U,{to:{pathname:i.siteURL},target:"__blank",title:"Go to the Website",className:"flex items-center",children:[Object(h.jsx)(f.a,{path:g.k,size:.9,color:"#000"}),Object(h.jsx)("p",{children:"Lauch Site"})]})})]})]})]})]})]})}function A(){var e=L().values.modal;return""===e.type?window.document.body.style.overflowY="scroll":window.document.body.style.overflowY="hidden",Object(h.jsx)(h.Fragment,{children:"project"===e?Object(h.jsx)(T,{}):""})}function D(e){var t=e.location;return function(){var e=Object(l.l)();Object(n.useEffect)((function(){console.log(e.hash),e.hash&&console.log(e.hash.slice(1)),b.scroller.scrollTo(e.hash.slice(1),{duration:800,delay:0,smooth:"easeInOutQuart"})}),[e])}(),Object(h.jsxs)(l.g,{location:t,children:[Object(h.jsx)(l.d,{exact:!0,path:"/",render:function(e){return Object(h.jsx)(E,{})}}),Object(h.jsx)(l.d,{exact:!0,path:"/contact",render:function(e){return Object(h.jsx)(B,{})}})]})}var G=function(){return Object(h.jsx)(r.BrowserRouter,{basename:"/",children:Object(h.jsx)(l.d,{render:function(e){var t=e.location;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(A,{}),Object(h.jsx)(o.a,{children:Object(h.jsx)(j.a,{timeout:300,classNames:"fade",children:Object(h.jsx)(D,{location:t})},t.key)})]})}})})},Q=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,70)).then((function(t){var c=t.getCLS,n=t.getFID,i=t.getFCP,s=t.getLCP,a=t.getTTFB;c(e),n(e),i(e),s(e),a(e)}))};a.a.render(Object(h.jsx)(_,{children:Object(h.jsx)(G,{})}),document.getElementById("root")),Q()}},[[66,1,2]]]);
//# sourceMappingURL=main.cb6183ec.chunk.js.map