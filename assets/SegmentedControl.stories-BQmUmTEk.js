import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{r as p}from"./index-CTjT7uj6.js";import{h as u}from"./control-BLWnEcik.js";import{S as d}from"./SegmentedControl-DLsqbFvO.js";import{S}from"./SegmentedControlItem-DMfGlAjQ.js";import"./classNames-BjxpnYM-.js";import"./dayjs.min-CDLQcmce.js";import"./usePlatform-CpmMXCo-.js";import"./Tappable-BlvX034W.js";import"./Typography-CVAv-OXT.js";const E={title:"Navigation/SegmentedControl",component:d,argTypes:u("children")},l=[{label:"Label",value:"label"},{label:"Label 2",value:"label2"},{label:"Label 3",value:"label3"}],t={render:r=>{const[m,c]=p.useState(l[0].value);return e.jsx(d,{...r,children:l.map(({value:o,label:i})=>e.jsx(S,{selected:m===o,onClick:()=>c(o),children:i},o))})},decorators:[r=>e.jsx("div",{style:{width:500},children:e.jsx(r,{})})]};var n,a,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(s=(a=t.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};const I=["Playground"];export{t as Playground,I as __namedExportsOrder,E as default};
