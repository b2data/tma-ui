import{j as e}from"./jsx-runtime-DR9Q75dM.js";import{r as I}from"./index-DRjF_FHU.js";import{C as T}from"./WarningIcon-C7j4JNMz.js";import{T as a}from"./TextField-B1Ocwfv6.js";import{L as n}from"./List-BVxYyspE.js";import{T as b}from"./Tappable-HVuun7D-.js";import"./classNames-BjxpnYM-.js";import"./dayjs.min-B-QGziwU.js";import"./usePlatform-CpmMXCo-.js";import"./FormInput-_gBweqY6.js";import"./function-0hL7Y8C6.js";import"./react-C2pAPbtc.js";import"./Typography-tCI8f8sN.js";import"./useTimeout-BRhOMhk3.js";const z={title:"Forms/TextField",component:a,parameters:{layout:"fullscreen"}},s={args:{header:"Input",placeholder:"Placeholder"},decorators:[t=>e.jsx(n,{style:{background:"var(--tg-theme-secondary-bg-color)",padding:10},children:e.jsx(t,{})})]},d={render:()=>{const[t,r]=I.useState("");return e.jsxs(n,{style:{width:400,maxWidth:"100%",margin:"auto",background:"var(--tg-theme-section-bg-color)",padding:10},children:[e.jsx(a,{header:"Input",startAdornment:"a",placeholder:"I am usual input, just leave me alone"}),e.jsx(a,{status:"error",header:"Input",placeholder:"I am error input, don't make my mistakes..."}),e.jsx(a,{status:"focused",header:"Input",placeholder:"I am focused input, are u focused on me?"}),e.jsx(a,{disabled:!0,header:"Input",placeholder:"I am disabled input",value:"DDD"}),e.jsx(a,{status:"focused",header:"Input",placeholder:"Write and clean me",value:t,onChange:l=>r(l.target.value),endAdornment:t?e.jsx(b,{onClick:()=>r(""),Component:"div",style:{display:"flex",borderRadius:"50%",padding:4},children:e.jsx(T,{size:16})}):void 0})]})}},o={render:()=>{const[t,r]=I.useState("");return e.jsxs(n,{style:{width:400,maxWidth:"100%",margin:"auto",background:"var(--tg-theme-section-bg-color)"},children:[e.jsx(a,{multiline:!0,header:"Textarea",placeholder:"I am usual input, just leave me alone"}),e.jsx(a,{status:"error",multiline:!0,header:"Textarea",placeholder:"I am error input, don't make my mistakes..."}),e.jsx(a,{status:"focused",multiline:!0,header:"Textarea",placeholder:"I am focused input, are u focused on me?"}),e.jsx(a,{disabled:!0,multiline:!0,header:"Textarea",placeholder:"I am disabled placeholder"}),e.jsx(a,{disabled:!0,multiline:!0,header:"Textarea",value:"I am disabled value"}),e.jsx(a,{status:"focused",multiline:!0,header:"Textarea",placeholder:"Write and clean me",value:t,onChange:l=>r(l.target.value),endAdornment:t?e.jsx(b,{onClick:()=>r(""),Component:"div",style:{display:"flex",borderRadius:"50%",padding:4},children:e.jsx(T,{size:16})}):void 0})]})}};var u,i,m;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    header: "Input",
    placeholder: "Placeholder"
  },
  decorators: [DecoratorStory => <List style={{
    background: "var(--tg-theme-secondary-bg-color)",
    padding: 10
  }}>
        <DecoratorStory />
      </List>]
} satisfies Story`,...(m=(i=s.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var c,p,h;d.parameters={...d.parameters,docs:{...(c=d.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState("");
    return <List style={{
      width: 400,
      maxWidth: "100%",
      margin: "auto",
      background: "var(--tg-theme-section-bg-color)",
      padding: 10
    }}>
        <TextField header="Input" startAdornment="a" placeholder="I am usual input, just leave me alone" />
        <TextField status="error" header="Input" placeholder="I am error input, don't make my mistakes..." />
        <TextField status="focused" header="Input" placeholder="I am focused input, are u focused on me?" />
        <TextField disabled header="Input" placeholder="I am disabled input" value="DDD" />
        <TextField status="focused" header="Input" placeholder="Write and clean me" value={value} onChange={e => setValue(e.target.value)} endAdornment={value ? <Tappable onClick={() => setValue("")} Component="div" style={{
        display: "flex",
        borderRadius: "50%",
        padding: 4
      }}>
                <CloseIcon size={16} />
              </Tappable> : undefined} />
      </List>;
  }
} satisfies Story`,...(h=(p=d.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};var x,g,v;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState("");
    return <List style={{
      width: 400,
      maxWidth: "100%",
      margin: "auto",
      background: "var(--tg-theme-section-bg-color)"
    }}>
        <TextField multiline header="Textarea" placeholder="I am usual input, just leave me alone" />
        <TextField status="error" multiline header="Textarea" placeholder="I am error input, don't make my mistakes..." />
        <TextField status="focused" multiline header="Textarea" placeholder="I am focused input, are u focused on me?" />
        <TextField disabled multiline header="Textarea" placeholder="I am disabled placeholder" />
        <TextField disabled multiline header="Textarea" value="I am disabled value" />
        <TextField status="focused" multiline header="Textarea" placeholder="Write and clean me" value={value} onChange={e => setValue(e.target.value)} endAdornment={value ? <Tappable onClick={() => setValue("")} Component="div" style={{
        display: "flex",
        borderRadius: "50%",
        padding: 4
      }}>
                <CloseIcon size={16} />
              </Tappable> : undefined} />
      </List>;
  }
} satisfies Story`,...(v=(g=o.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};const P=["Playground","Inputs","Textarea"];export{d as Inputs,s as Playground,o as Textarea,P as __namedExportsOrder,z as default};
