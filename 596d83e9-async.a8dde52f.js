(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["596d83e9"],{"596d83e9":function(e,l,n){"use strict";n.d(l,"__esModule",{value:!0}),n.d(l,"default",{enumerable:!0,get:function(){return s;}});var t=n("f19d2b93");n("4eb44662");var i=n("5b220c3d"),o=n("e22febe0"),a=n("a9d1a279");let d=[{label:"Navigation One",key:"mail",icon:(0,t.jsx)(o.MailOutlined,{})},{label:"Navigation Two",key:"app",icon:(0,t.jsx)(o.AppstoreOutlined,{}),disabled:!0},{label:"Navigation Three - Submenu",key:"SubMenu",icon:(0,t.jsx)(o.SettingOutlined,{}),children:[{type:"group",label:"Item 1",children:[{label:"Option 1",key:"setting:1"},{label:"Option 2",key:"setting:2"}]},{type:"group",label:"Item 2",children:[{label:"Option 3",key:"setting:3"},{label:"Option 4",key:"setting:4"}]}]},{key:"alipay",label:(0,t.jsx)("a",{href:"https://ant.design",target:"_blank",rel:"noopener noreferrer",children:"Navigation Four - Link"})}],r=[{key:"1",icon:(0,t.jsx)(o.PieChartOutlined,{}),label:"Option 1"},{key:"2",icon:(0,t.jsx)(o.DesktopOutlined,{}),label:"Option 2"},{key:"3",icon:(0,t.jsx)(o.ContainerOutlined,{}),label:"Option 3"},{key:"sub1",label:"Navigation One",icon:(0,t.jsx)(o.MailOutlined,{}),children:[{key:"5",label:"Option 5"},{key:"6",label:"Option 6"},{key:"7",label:"Option 7"},{key:"8",label:"Option 8"}]},{key:"sub2",label:"Navigation Two",icon:(0,t.jsx)(o.AppstoreOutlined,{}),children:[{key:"9",label:"Option 9"},{key:"10",label:"Option 10"},{key:"sub3",label:"Submenu",children:[{key:"11",label:"Option 11"},{key:"12",label:"Option 12"}]}]}];var s=()=>{let[e,l]=(0,i.useState)("mail"),n=e=>{console.log("click ",e),l(e.key);};return(0,t.jsxs)(a.Space,{direction:"vertical",children:[(0,t.jsxs)(a.ConfigProvider,{theme:{algorithm:[a.theme.darkAlgorithm],components:{Menu:{popupBg:"yellow",darkPopupBg:"red"}}},children:[(0,t.jsx)(a.Menu,{onClick:n,selectedKeys:[e],mode:"horizontal",items:d}),(0,t.jsx)(a.Menu,{defaultSelectedKeys:["1"],defaultOpenKeys:["sub1"],mode:"inline",theme:"dark",inlineCollapsed:!0,items:r,style:{width:56}})]}),(0,t.jsx)(a.ConfigProvider,{theme:{components:{Menu:{horizontalItemBorderRadius:6,popupBg:"red",horizontalItemHoverBg:"#f5f5f5"}}},children:(0,t.jsx)(a.Menu,{onClick:n,selectedKeys:[e],mode:"horizontal",items:d})}),(0,t.jsx)(a.ConfigProvider,{theme:{components:{Menu:{darkItemColor:"#91daff",darkItemBg:"#d48806",darkSubMenuItemBg:"#faad14",darkItemSelectedColor:"#ffccc7",darkItemSelectedBg:"#52c41a"}}},children:(0,t.jsx)(a.Menu,{defaultSelectedKeys:["1"],defaultOpenKeys:["sub1"],mode:"inline",theme:"dark",items:r,style:{width:256}})})]});};}}]);