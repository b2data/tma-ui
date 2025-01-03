import{j as e}from"./jsx-runtime-DR9Q75dM.js";import{r as p}from"./index-DRjF_FHU.js";import{h as u}from"./control-BLWnEcik.js";import{S as m}from"./SegmentedControl-UypOxP34.js";import{S}from"./SegmentedControlItem-DElV1eXS.js";import"./classNames-BjxpnYM-.js";import"./dayjs.min-B-QGziwU.js";import"./usePlatform-CpmMXCo-.js";import"./Tappable-HVuun7D-.js";import"./useTimeout-BRhOMhk3.js";import"./Typography-C-8rOji7.js";import"./react-C2pAPbtc.js";const L={title:"Navigation/SegmentedControl",component:m,argTypes:u("children")},l=[{label:"Label",value:"label"},{label:"Label 2",value:"label2"},{label:"Label 3",value:"label3"}],t={render:r=>{const[d,c]=p.useState(l[0].value);return e.jsx(m,{...r,children:l.map(({value:o,label:i})=>e.jsx(S,{selected:d===o,onClick:()=>c(o),children:i},o))})},decorators:[r=>e.jsx("div",{style:{width:500},children:e.jsx(r,{})})]};var n,a,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(s=(a=t.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};const w=["Playground"];export{t as Playground,w as __namedExportsOrder,L as default};
