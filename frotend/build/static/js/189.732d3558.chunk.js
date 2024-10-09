"use strict";(self.webpackChunkfrotend=self.webpackChunkfrotend||[]).push([[189],{6627:(e,r,t)=>{t.d(r,{Z:()=>c});t(2791);var n=t(8596),a=t(6513),i=t(8008),o=t(7025),s=t(1523),d=t(184);const l=(0,n.Z)((e=>({navbar:{display:"flex",alignItems:"center",justifyContent:"space-between",zIndex:999,background:"#ffffff",width:"100%",padding:"1.5rem 1rem 1rem 1rem",boxShadow:"1px 1px 2px rgba(0, 0, 0, 0.1), 2px 2px 4px rgba(0, 0, 0, 0.2), 4px 4px 8px rgba(0, 0, 0, 0.3)",[e.breakpoints.between("999")]:{flexDirection:"row",alignItems:"center",padding:"1rem"}},menuIcon:{display:"none",[e.breakpoints.down("999")]:{display:"block",fontSize:"2rem","& svg":{fontSize:"2rem","&:hover":{color:"#ed1c24"}},"&:hover":{transform:"scale(1.1)"}}},dashboardHead:{fontSize:"2rem",fontWeight:900,color:"black",textShadow:"2px 2px 4px rgba(0, 0, 0, 0.1)",[e.breakpoints.down("sm")]:{fontSize:"1.5rem",marginBottom:"0.5rem"},[e.breakpoints.down("999")]:{fontSize:"1.8rem",marginBottom:0},[e.breakpoints.down("xs")]:{marginRight:"1.5rem",fontSize:"1.8rem"}},contactButton:{padding:"10px 30px",borderRadius:"20px",boxShadow:"0px 2px 8px 0px #0000000a",cursor:"pointer",fontWeight:600,fontSize:"16px",color:"#fff",letterSpacing:"1px",background:"#414141",transition:"background-color 0.3s",marginRight:"2rem",[e.breakpoints.down("sm")]:{fontSize:"14px",padding:"8px 14px"},[e.breakpoints.between("sm","md")]:{fontSize:"14px",padding:"7px 15px"},[e.breakpoints.down("xs")]:{display:"none"},"&:hover":{background:"#ed1c24"}},headerBottom__logo_main:{height:"3.5rem",alignSelf:"center",paddingLeft:"25px","& img":{height:"100%",width:"auto"}}}))),c=e=>{let{toggleHandler:r}=e;const n=l();return(0,d.jsxs)("nav",{className:n.navbar,children:[(0,d.jsx)(o.Z,{className:n.menuIcon,onClick:r,children:(0,d.jsx)(i.Z,{fontSize:"2rem"})}),(0,d.jsx)("div",{className:n.dashboardHead,children:(0,d.jsx)(s.rU,{to:"/admin/dashboard",style:{textDecoration:"none",color:"none",width:"100%",height:"100%"},children:(0,d.jsx)("img",{src:t(5756),alt:"logo",className:n.headerBottom__logo_main})})}),(0,d.jsx)(s.rU,{to:"/contact",style:{textDecoration:"none",color:"none"},children:(0,d.jsx)(a.Z,{className:n.contactButton,children:"Contact Us"})})]})}},1189:(e,r,t)=>{t.r(r),t.d(r,{default:()=>b});var n=t(2791),a=(t(661),t(5151)),i=t(9434),o=t(7487),s=t(4880),d=t(1523),l=t(6534),c=t(1079),m=t(7407),x=t(6549),h=t(9307),p=t(7736),g=t(6627),u=t(8021),f=t(184);const b=function(){const e=(0,i.I0)(),r=(0,l.VY)(),t=(0,s.k6)(),[b,j]=(0,n.useState)(!1),{error:N,products:v,loading:w}=(0,i.v9)((e=>e.products)),{error:S,isDeleted:k}=(0,i.v9)((e=>e.deleteUpdateProduct));(0,n.useEffect)((()=>{N&&(r.error(N),e((0,o.b9)())),S&&(r.error(S),e((0,o.b9)())),k&&(r.success("Product Deleted Successfully"),e({type:u.w$})),e((0,o.Oq)())}),[e,N,r,S,t,k]);const y=[{field:"id",headerName:"Product ID",minWidth:230,flex:.5,headerClassName:"column-header"},{field:"name",headerName:"Name",minWidth:150,flex:.5,magin:"0 auto",headerClassName:"column-header hide-on-mobile"},{field:"stock",headerName:"Stock",type:"number",minWidth:100,flex:.5,headerClassName:"column-header hide-on-mobile"},{field:"price",headerName:"Price",type:"number",minWidth:200,flex:.5,headerClassName:"column-header hide-on-mobile"},{field:"actions",headerName:"Actions",flex:1,sortable:!1,minWidth:230,headerClassName:"column-header1",renderCell:r=>(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(d.rU,{to:"/admin/product/".concat(r.getValue(r.id,"id")),style:{marginLeft:"1rem"},children:(0,f.jsx)(c.Z,{className:"icon-"})}),(0,f.jsx)("div",{onClick:()=>{return t=r.getValue(r.id,"id"),void e((0,o.Ir)(t));var t},children:(0,f.jsx)(m.Z,{className:"iconbtn"})})]})}],z=[];return v&&v.forEach((e=>{z.push({id:e._id,stock:e.Stock,price:e.price,name:e.name})})),(0,n.useEffect)((()=>{const e=()=>{window.innerWidth>999&&b&&j(!1)};return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}}),[b]),(0,f.jsx)(f.Fragment,{children:w?(0,f.jsx)(h.Z,{}):(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(x.Z,{title:"ALL PRODUCTS - Admin"}),(0,f.jsxs)("div",{className:"product-list",style:{marginTop:0},children:[(0,f.jsx)("div",{className:b?"toggleBox":"listSidebar",children:(0,f.jsx)(p.Z,{})}),(0,f.jsxs)("div",{className:"list-table",children:[(0,f.jsx)(g.Z,{toggleHandler:()=>{j(!b)}}),(0,f.jsxs)("div",{className:"productListContainer",children:[(0,f.jsx)("h4",{id:"productListHeading",children:"ALL PRODUCTS"}),(0,f.jsx)(a._$r,{rows:z,columns:y,pageSize:10,disableSelectionOnClick:!0,className:"productListTable",autoHeight:!0})]})]})]})]})})}},7736:(e,r,t)=>{t.d(r,{Z:()=>N});t(2791);var n=t(4880),a=t(1523),i=t(220),o=t(4567),s=t(5849),d=t(7235),l=t(2338),c=t(9140),m=t(2419),x=t(1992),h=t(5776),p=t(4865),g=t(7541),u=t(8535),f=t(9434),b=t(184);const j=(0,d.Z)((e=>({sidebar:{backgroundColor:"#fff",padding:"2rem 0",boxShadow:"2px 10px 6px rgba(0, 0, 0, 0.4)",borderRadius:"5px",margin:"0 auto",width:"100%"},avatar11:{width:"80px",height:"80px",border:"5px solid #414141",margin:"0 auto",marginBottom:"1rem",display:"flex",justifyContent:"center",alignItems:"center"},name:{fontWeight:"500",textAlign:"center",fontSize:"1rem"},email:{color:"#414141",marginBottom:"1.5rem",textAlign:"center",fontSize:"0.9rem"},divider:{height:"2px",width:"75%",backgroundColor:"#414141",margin:"2rem"},button:{marginLeft:"2rem !important",boxShadow:"0 0 10px rgba(0, 0, 0, 0.1)",backgroundColor:"#292929 !important",color:"white   !important",width:"70%     !important",padding:"0.8rem 2rem   !important",borderRadius:"4px !important","&:hover":{backgroundColor:"#ed1c24 !important",color:"white !important"}},sideBarMenu:{listStyleType:"none",padding:0,margin:"3rem  10px",width:"100%"},sideBarMenuItem:{display:"flex",alignItems:"center",padding:"0.9rem 1rem",borderRadius:"2px",marginTop:"1.3rem",width:"75%",boxShadow:" 4px 4px 8px rgba(0, 0, 0, 0.3)","&:hover":{backgroundColor:"#ed1c24",boxShadow:"2px 2px 6px rgba(0, 0, 0, 0.4)","& svg":{color:"white"},"& span":{color:"white !important"}},"& svg":{color:"#414141",fontSize:"26px",margin:"0 20px  0 "},"& span":{color:"#414141",fontSize:"1rem",fontWeight:"500",marginLeft:"1rem",textDecoration:"none",textDecorationLine:"none",transition:"color 0.3s ease"}}})));const N=function(){const e=j(),{user:r,loading:t}=(0,f.v9)((e=>e.userData)),d=(0,n.k6)();return(0,b.jsx)(b.Fragment,{children:!t&&(0,b.jsx)(b.Fragment,{children:(0,b.jsxs)("div",{className:e.sidebar,children:[(0,b.jsx)(i.Z,{src:r&&r.avatar.url,alt:"User Avatar",className:e.avatar11}),(0,b.jsx)(o.Z,{variant:"subtitle1",className:e.name,children:r&&r.name}),(0,b.jsx)(o.Z,{variant:"subtitle2",className:e.email,children:r&&r.email}),(0,b.jsx)("div",{className:e.divider}),(0,b.jsxs)("ul",{className:e.sideBarMenu,children:[(0,b.jsx)(a.rU,{to:"/admin/dashboard",style:{color:"inherit",textDecoration:"none"},children:(0,b.jsxs)("li",{className:e.sideBarMenuItem,children:[(0,b.jsx)(l.Z,{fontSize:"large"}),(0,b.jsxs)("span",{className:e.sideBarMenuItem_text,children:[" ","Dashboard"]})]})}),(0,b.jsx)(a.rU,{to:"/",style:{color:"inherit",textDecoration:"none"},children:(0,b.jsxs)("li",{className:e.sideBarMenuItem,children:[(0,b.jsx)(g.Z,{fontSize:"large"}),(0,b.jsx)("span",{className:e.sideBarMenuItem_text,children:"Home"})]})}),(0,b.jsx)(a.rU,{to:"/admin/products",style:{color:"inherit",textDecoration:"none"},children:(0,b.jsxs)("li",{className:e.sideBarMenuItem,children:[(0,b.jsx)(c.Z,{fontSize:"large"}),(0,b.jsxs)("span",{className:e.sideBarMenuItem_text,children:[" ","Products"]})]})}),(0,b.jsx)(a.rU,{to:"/admin/new/product",style:{color:"inherit",textDecoration:"none"},children:(0,b.jsxs)("li",{className:e.sideBarMenuItem,children:[(0,b.jsx)(m.Z,{fontSize:"large"}),(0,b.jsx)("span",{className:e.sideBarMenuItem_text,children:"Add Product"})]})}),(0,b.jsx)(a.rU,{to:"/admin/orders",style:{color:"inherit",textDecoration:"none"},children:(0,b.jsxs)("li",{className:e.sideBarMenuItem,children:[(0,b.jsx)(x.Z,{fontSize:"large"}),(0,b.jsx)("span",{className:e.sideBarMenuItem_text,children:"Orders"})]})}),(0,b.jsx)(a.rU,{to:"/admin/reviews",style:{color:"inherit",textDecoration:"none"},children:(0,b.jsxs)("li",{className:e.sideBarMenuItem,children:[(0,b.jsx)(h.Z,{fontSize:"large"}),(0,b.jsx)("span",{className:e.sideBarMenuItem_text,children:"Reviews"})]})}),(0,b.jsx)(a.rU,{to:"/contact",style:{color:"inherit",textDecoration:"none"},children:(0,b.jsxs)("li",{className:e.sideBarMenuItem,children:[(0,b.jsx)(u.Z,{fontSize:"large"}),(0,b.jsx)("span",{className:e.sideBarMenuItem_text,children:"Contact"})]})})]}),(0,b.jsx)("div",{className:e.divider}),(0,b.jsxs)(s.Z,{className:e.button,onClick:function(){d.push("/account")},variant:"contained",children:[(0,b.jsx)(p.Z,{fontSize:"large",style:{marginRight:"10px"}}),"Account"]})]})})})}},661:()=>{}}]);
//# sourceMappingURL=189.732d3558.chunk.js.map