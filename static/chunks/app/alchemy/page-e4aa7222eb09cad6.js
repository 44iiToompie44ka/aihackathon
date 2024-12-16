(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[151],{8837:function(e,t,l){Promise.resolve().then(l.bind(l,6458))},6458:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return T}});var a,s,r=l(3827),i=l(4090),n=l(503),d=l(8670),c=l(1450),o=l(3505),m=l(706);(a=s||(s={}))[a.Time=0]="Time",a[a.Name=1]="Name",a[a.Emoji=2]="Emoji";let u=e=>{let{sort:t,onClick:l}=e;return 0===t?(0,r.jsxs)("button",{onClick:l,className:"flex flex-1 border gap-2 justify-center items-center",children:[(0,r.jsx)(c.Z,{})," Sort by Time"]}):1===t?(0,r.jsxs)("button",{onClick:l,className:"flex flex-1 border gap-2 justify-center items-center",children:[(0,r.jsx)(o.Z,{})," Sort by Name"]}):2===t?(0,r.jsxs)("button",{onClick:l,className:"flex flex-1 border gap-2 justify-center items-center",children:[(0,r.jsx)(m.Z,{})," Sort by Emoji"]}):void 0};var x=l(7135),f=l(5083),h=l(1216);let j=e=>{let{element:t}=e;return(0,r.jsxs)("div",{className:"flex gap-2 px-2 border rounded-xl h-fit w-fit",children:[(0,r.jsx)("div",{children:t.emoji}),(0,r.jsx)("div",{children:t.text})]})},p=e=>{let{element:t,isLoading:l}=e,{attributes:a,listeners:s,setNodeRef:i,transform:n}=(0,x.O1)({id:t.text,data:{element:t,type:"element"},disabled:l}),d={transform:h.ux.Translate.toString(n)};return(0,r.jsx)("div",{ref:i,style:d,className:"w-fit h-fit",...s,...a,children:(0,r.jsx)(j,{element:t})})},g=e=>{let{element:t,isLoading:l}=e,{attributes:a,listeners:s,setNodeRef:n,transform:d}=(0,x.O1)({id:t.id,data:{element:t,type:"placed-element"},disabled:l}),{isOver:c,setNodeRef:o}=(0,x.Zj)({id:t.id,data:{element:t,type:"placed-element"},disabled:l}),m=(0,i.useMemo)(()=>({transform:h.ux.Translate.toString(d),top:t.y,left:t.x,border:c?"2px solid green":"none"}),[t.x,t.y,c,d]);return(0,r.jsx)("div",{ref:n,className:"absolute w-fit h-fit",style:m,...s,...a,children:(0,r.jsxs)("div",{ref:o,children:[t.isLoading&&(0,r.jsxs)("div",{className:"flex gap-2 px-2 border rounded-xl h-fit w-fit",children:[(0,r.jsx)("div",{children:(0,r.jsx)(f.Z,{className:"animate-spin inline-block"})}),(0,r.jsx)("div",{children:"combining"})]}),!t.isLoading&&(0,r.jsx)(j,{element:t})]})})},b=e=>{let{elements:t,isLoading:l}=e,[a,c]=(0,i.useState)(s.Time),[o,m]=(0,i.useState)(!1),[f,h]=(0,i.useState)(""),j=(0,i.useMemo)(()=>{let e=[...t];switch(a){case s.Time:return e;case s.Name:return e.sort((e,t)=>e.text.localeCompare(t.text));case s.Emoji:return e.sort((e,t)=>e.emoji.localeCompare(t.emoji))}},[t,a]),{setNodeRef:g}=(0,x.Zj)({id:"sidebar-area",data:{type:"sidebar"},disabled:l});return(0,r.jsxs)("div",{className:"col-span-3 border-l h-screen flex flex-col",ref:g,children:[(0,r.jsx)("div",{className:"flex flex-1 justify-start items-start overflow-y-scroll overflow-x-hidden",children:(0,r.jsx)("div",{className:"flex flex-wrap gap-2 p-2",children:j.filter(e=>!o||o&&e.discovered).filter(e=>!f||e.text.includes(f)||e.emoji.includes(f)).map(e=>(0,r.jsx)(p,{element:e,isLoading:l},e.text))})}),(0,r.jsxs)("div",{className:"h-22 border-t flex-shrink-0 flex-col",children:[(0,r.jsxs)("div",{className:"flex h-10",children:[!o&&(0,r.jsxs)("button",{className:"flex flex-1 border gap-2 justify-center items-center",onClick:()=>m(!0),children:[(0,r.jsx)(n.Z,{})," Discoveries"]}),o&&(0,r.jsxs)("button",{className:"flex flex-1 border gap-2 justify-center items-center bg-gray-500",onClick:()=>m(!1),children:[(0,r.jsx)(n.Z,{})," Discoveries"]}),(0,r.jsx)(u,{sort:a,onClick:()=>{switch(a){case s.Time:c(s.Name);break;case s.Name:c(s.Emoji);break;case s.Emoji:c(s.Time)}}})]}),(0,r.jsxs)("div",{className:"flex items-center gap-2 p-2",children:[(0,r.jsx)(d.Z,{})," ",(0,r.jsx)("input",{value:f,onChange:e=>h(e.target.value),className:"flex px-2 rounded-md w-full text-gray-600",placeholder:"Search..."})]})]})]})},v=[{text:"Огонь",emoji:"\uD83D\uDD25",discovered:!1},{text:"Вода",emoji:"\uD83D\uDCA7",discovered:!1},{text:"Воздух",emoji:"\uD83D\uDCA8",discovered:!1},{text:"Земля",emoji:"\uD83C\uDF0D",discovered:!1}];var y=l(6806),N=l(3348),k=l(1774),w=l(2891),S=l(1047);function D(){let{theme:e,setTheme:t}=(0,k.F)();return(0,r.jsxs)("div",{className:"cursor-pointer",onClick:()=>{t("dark"===e?"light":"dark")},children:[(0,r.jsx)(w.Z,{className:"block dark:hidden"}),(0,r.jsx)(S.Z,{className:"hidden dark:block"})]})}var E=l(703);let C=e=>{let{placedElements:t,setPlacedElements:l,setElements:a,isLoading:s}=e,i=()=>{l([])},{setNodeRef:n}=(0,x.Zj)({id:"playground-area",data:{type:"playground"},disabled:s});return(0,r.jsxs)("div",{className:"col-span-9 h-full w-full relative",ref:n,children:[t.map((e,t)=>(0,r.jsx)(g,{element:e,isLoading:s},t)),(0,r.jsx)("div",{className:"absolute top-0 right-0 p-4 cursor-pointer hover:text-red-400",onClick:i,children:(0,r.jsx)(y.Z,{})}),(0,r.jsx)("div",{className:"absolute bottom-0 left-0 p-4 cursor-pointer hover:text-red-400",onClick:()=>{window.confirm("Are you sure you want clear all the progress? ***You won't be able to recover them again***")&&(i(),a(v))},children:(0,r.jsx)(N.Z,{})}),(0,r.jsx)("div",{className:"absolute top-0 left-0 p-4 cursor-pointer",children:(0,r.jsx)(D,{})}),(0,r.jsx)("a",{href:"https://github.com/dekdao/infinite-craft-nextjs",target:"_blank",children:(0,r.jsxs)("div",{className:"absolute flex items-center bottom-0 right-0 p-4 gap-2",children:[(0,r.jsx)(E.default,{src:"github-mark.svg",className:"block dark:hidden",alt:"github logo",width:25,height:25,loading:"lazy"}),(0,r.jsx)(E.default,{src:"github-mark-white.svg",className:"hidden dark:block ",alt:"github logo",width:25,height:25,loading:"lazy"}),(0,r.jsx)("p",{children:"Infinite Craft Next.JS by DEKDAO team"})]})})]})};var Z=l(1231),L=l(7908);function T(){let[e,t]=(0,i.useState)([]),[l,a]=(0,i.useState)([]),[s,n]=(0,i.useState)(null),[d,c]=(0,i.useState)(null),[o,m]=(0,i.useState)({x:0,y:0});(0,i.useEffect)(()=>{let e=e=>{m({x:e.clientX,y:e.clientY})};return window.addEventListener("mousemove",e),()=>{window.removeEventListener("mousemove",e)}},[]),(0,i.useEffect)(()=>{let e=localStorage.getItem("elements");if(!e){t(v);return}let l=JSON.parse(e);if(0===l.length){t(v);return}t(l)},[]),(0,i.useEffect)(()=>{0!==e.length&&localStorage.setItem("elements",JSON.stringify(e))},[e]);let u=(l,s)=>{"id"in s?a(e=>e.filter(e=>e.id!==s.id).map(e=>e.id===l.id?{...e,isLoading:!0}:e)):a(e=>e.map(e=>e.id===l.id?{...e,isLoading:!0}:e)),L.Z.get("/api/combine",{params:{word1:l.text,word2:s.text}}).then(s=>{let{data:r}=s;a(e=>e.map(e=>e.id===l.id?{...r.element,id:(0,Z.Z)(),x:e.x,y:e.y,isLoading:!1}:e)),e.every(e=>e.text!==r.element.text)&&t(e=>[...e,r.element])}).catch(e=>{window.alert("Something when wrong! Failed to combine elements"+e.toString()),a(e=>e.map(e=>e.id===l.id?{...e,isLoading:!1}:e))})},f=(0,i.useMemo)(()=>l.some(e=>e.isLoading),[l]);return(0,r.jsxs)(x.LB,{onDragStart:e=>{let{active:t}=e;"element"===t.data.current.type?n(e.active.data.current.element):"placed-element"===t.data.current.type&&c(e.active.data.current.element)},onDragEnd:e=>{let{active:t,over:s}=e;if(console.log("active",t),console.log("over",s),"placed-element"===t.data.current.type&&s&&"sidebar"===s.data.current.type){let e=t.data.current.element;a(l.filter(t=>t.id!==e.id))}else if("placed-element"===t.data.current.type&&s&&"placed-element"===s.data.current.type)u(s.data.current.element,t.data.current.element);else if("placed-element"===t.data.current.type){let s=t.data.current.element;a(l.map(t=>t.id===s.id?{...s,x:s.x+e.delta.x,y:s.y+e.delta.y}:t))}if("element"===t.data.current.type&&s&&"playground"===s.data.current.type){let e={...t.data.current.element,id:(0,Z.Z)(),x:o.x,y:o.y};a(t=>[...t,e])}else"element"===t.data.current.type&&s&&"placed-element"===s.data.current.type&&u(s.data.current.element,t.data.current.element);n(null),c(null)},children:[(0,r.jsx)("main",{className:"flex h-screen flex-col",children:(0,r.jsxs)("div",{className:"grid grid-cols-12 h-full",children:[(0,r.jsx)(C,{setElements:t,setPlacedElements:a,placedElements:l,isLoading:f}),(0,r.jsx)(b,{elements:e,isLoading:f})]})}),(0,r.jsxs)(x.y9,{dropAnimation:null,children:[s&&(0,r.jsx)(j,{element:s}),d&&(0,r.jsx)(j,{element:d})]})]})}}},function(e){e.O(0,[497,971,69,744],function(){return e(e.s=8837)}),_N_E=e.O()}]);