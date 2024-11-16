import{j as r}from"./jsx-runtime-DR9Q75dM.js";import{r as p}from"./index-DRjF_FHU.js";import{h as d}from"./control-BLWnEcik.js";import{C as m}from"./CompactPagination-Z3ooH02u.js";import{C as l}from"./CompactPaginationItem-CsPiAhrO.js";import"./classNames-BjxpnYM-.js";import"./react-C2pAPbtc.js";import"./VisuallyHidden-DVDVm8UN.js";const I={title:"Navigation/CompactPagination",component:m,argTypes:d("children")},g=Array.from({length:8},(o,a)=>a+1),e={render:o=>{const[a,c]=p.useState(1);return r.jsx(m,{...o,children:g.map(t=>r.jsx(l,{onClick:()=>c(t),selected:t===a,children:t},t))})}};var n,s,i;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: args => {
    const [selected, setSelected] = useState(1);
    return <CompactPagination {...args}>
        {paginationItems.map(item => <CompactPaginationItem key={item} onClick={() => setSelected(item)} selected={item === selected}>
            {item}
          </CompactPaginationItem>)}
      </CompactPagination>;
  }
}`,...(i=(s=e.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};const j=["Playground"];export{e as Playground,j as __namedExportsOrder,I as default};
