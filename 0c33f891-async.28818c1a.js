(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["0c33f891"],{"0c33f891":function(e,a,d){"use strict";d.d(a,"__esModule",{value:!0}),d.d(a,"default",{enumerable:!0,get:function(){return i;}});var l=d("f19d2b93");d("cb63a126");var t=d("a9d1a279");let n=[{title:"Name",dataIndex:"name"},{title:"Age",dataIndex:"age"},{title:"Address",dataIndex:"address"}],s=Array.from({length:200}).map((e,a)=>({key:a,name:"Sample Name",age:30+a%5,address:`Sample Address ${a}`}));var i=()=>(0,l.jsx)("div",{style:{width:300},children:(0,l.jsx)(t.Table,{columns:n,dataSource:s,size:"small",pagination:{defaultCurrent:13}})});}}]);