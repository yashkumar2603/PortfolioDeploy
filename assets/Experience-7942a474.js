import{V as n,a as c,S as r,j as e,m,t as o,s as i,e as d}from"./index-50aef1a3.js";var a={VerticalTimeline:n.default,VerticalTimelineElement:c.default};const x=({experience:t})=>e.jsxs(a.VerticalTimelineElement,{contentStyle:{background:"#1d1836",color:"#fff"},contemtArrowStyle:{borderRight:"7px solid #232631"},date:t.date,iconStyle:{background:t.iconBg},icon:e.jsx("div",{className:"flex justify-center items-center w-full h-full",children:e.jsx("img",{src:t.icon,alt:t.company_name,className:"w-[60%] h-[60%] object-contain"})}),children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-white text-[24px] font-bold",children:t.title}),e.jsx("p",{className:"text-secondary text-[16px] font-semibold",style:{margin:0},children:t.company_name})]}),e.jsx("ul",{className:"mt-g list-disc ml-5 space-y-2",children:t.points.map((s,l)=>e.jsx("li",{className:"text-white-100 text-[14px] pl-1 tracking-wider",children:s},`experience-point-${l}`))})]}),h=()=>e.jsxs(e.Fragment,{children:[e.jsxs(m.div,{variants:o(),children:[e.jsx("p",{className:i.sectionSubText,children:"Qualifications and Achievements "}),e.jsx("h2",{className:i.sectionHeadText,children:"Education."})]}),e.jsx("div",{className:"mt-20 flex flex-col",children:e.jsx(a.VerticalTimeline,{children:d.map((t,s)=>e.jsx(x,{experience:t},s))})})]}),p=r(h,"");export{p as default};
