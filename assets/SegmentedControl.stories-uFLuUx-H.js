import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as p}from"./index-2yJIXLcc.js";import{h as u}from"./control-BLWnEcik.js";import{S as m}from"./SegmentedControl-ypebyi-m.js";import{S}from"./SegmentedControlItem-2rEr5iZ9.js";import"./classNames-BjxpnYM-.js";import"./file-zip-BXERkKO-.js";import"./dayjs.min-qj4fShTU.js";import"./usePlatform-CpmMXCo-.js";import"./Tappable-Bi9o3b7s.js";import"./useTimeout-5tW5gS3k.js";import"./Typography-C9RDb2oI.js";import"./react-B_12zFKA.js";const w={title:"Navigation/SegmentedControl",component:m,argTypes:u("children")},l=[{label:"Label",value:"label"},{label:"Label 2",value:"label2"},{label:"Label 3",value:"label3"}],t={render:r=>{const[d,i]=p.useState(l[0].value);return e.jsx(m,{...r,children:l.map(({value:o,label:c})=>e.jsx(S,{selected:d===o,onClick:()=>i(o),children:c},o))})},decorators:[r=>e.jsx("div",{style:{width:500},children:e.jsx(r,{})})]};var n,a,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: args => {
    const [selected, setSelected] = useState(labels[0].value);
    return <SegmentedControl {...args}>
        {labels.map(({
        value,
        label
      }) => <SegmentedControlItem key={value} selected={selected === value} onClick={() => setSelected(value)}>
            {label}
          </SegmentedControlItem>)}
      </SegmentedControl>;
  },
  decorators: [Component => <div style={{
    width: 500
  }}>
        <Component />
      </div>]
}`,...(s=(a=t.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};const P=["Playground"];export{t as Playground,P as __namedExportsOrder,w as default};
