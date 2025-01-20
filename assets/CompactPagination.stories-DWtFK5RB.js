import{j as r}from"./jsx-runtime-DR9Q75dM.js";import{r as p}from"./index-DRjF_FHU.js";import{h as d}from"./control-BLWnEcik.js";import{C as m}from"./CompactPagination-BLn2wGi_.js";import{C as l}from"./CompactPaginationItem-zkhEpk_i.js";import"./classNames-BjxpnYM-.js";import"./file-zip-B9x0q0B1.js";import"./react-C2pAPbtc.js";import"./VisuallyHidden-CLouwpBC.js";const j={title:"Navigation/CompactPagination",component:m,argTypes:d("children")},g=Array.from({length:8},(a,o)=>o+1),e={render:a=>{const[o,c]=p.useState(1);return r.jsx(m,{...a,children:g.map(t=>r.jsx(l,{onClick:()=>c(t),selected:t===o,children:t},t))})}};var n,s,i;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: args => {
    const [selected, setSelected] = useState(1);
    return <CompactPagination {...args}>
        {paginationItems.map(item => <CompactPaginationItem key={item} onClick={() => setSelected(item)} selected={item === selected}>
            {item}
          </CompactPaginationItem>)}
      </CompactPagination>;
  }
}`,...(i=(s=e.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};const k=["Playground"];export{e as Playground,k as __namedExportsOrder,j as default};
