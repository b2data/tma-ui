import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{r as I}from"./index-CTjT7uj6.js";import{C as v}from"./WarningIcon-WmplKgkK.js";import{T as a}from"./TextField-2zztQZvf.js";import{L as n}from"./List-BbC8tYAN.js";import{T}from"./Tappable-BlvX034W.js";import"./classNames-BjxpnYM-.js";import"./dayjs.min-CDLQcmce.js";import"./usePlatform-CpmMXCo-.js";import"./FormInput-BeAMhBmZ.js";import"./function-0hL7Y8C6.js";import"./react-BrYeE0c6.js";import"./Typography-CVAv-OXT.js";const z={title:"Forms/TextField",component:a,parameters:{layout:"fullscreen"}},s={args:{header:"Input",placeholder:"Placeholder"},decorators:[t=>e.jsx(n,{style:{background:"var(--tg-theme-bg-color)",padding:10},children:e.jsx(t,{})})]},o={render:()=>{const[t,r]=I.useState("");return e.jsxs(n,{style:{width:400,maxWidth:"100%",margin:"auto",background:"var(--tg-theme-bg-color)",padding:10},children:[e.jsx(a,{header:"Input",placeholder:"I am usual input, just leave me alone"}),e.jsx(a,{status:"error",header:"Input",placeholder:"I am error input, don't make my mistakes..."}),e.jsx(a,{status:"focused",header:"Input",placeholder:"I am focused input, are u focused on me?"}),e.jsx(a,{disabled:!0,header:"Input",placeholder:"I am disabled input",value:"DDD"}),e.jsx(a,{status:"focused",header:"Input",placeholder:"Write and clean me",value:t,onChange:l=>r(l.target.value),endAdornment:t?e.jsx(T,{onClick:()=>r(""),Component:"div",style:{display:"flex",borderRadius:"50%",padding:4},children:e.jsx(v,{size:16})}):void 0})]})}},d={render:()=>{const[t,r]=I.useState("");return e.jsxs(n,{style:{width:400,maxWidth:"100%",margin:"auto",background:"var(--tg-theme-bg-color)"},children:[e.jsx(a,{multiline:!0,header:"Textarea",placeholder:"I am usual input, just leave me alone"}),e.jsx(a,{status:"error",multiline:!0,header:"Textarea",placeholder:"I am error input, don't make my mistakes..."}),e.jsx(a,{status:"focused",multiline:!0,header:"Textarea",placeholder:"I am focused input, are u focused on me?"}),e.jsx(a,{disabled:!0,multiline:!0,header:"Textarea",placeholder:"I am disabled input"}),e.jsx(a,{status:"focused",multiline:!0,header:"Textarea",placeholder:"Write and clean me",value:t,onChange:l=>r(l.target.value),endAdornment:t?e.jsx(T,{onClick:()=>r(""),Component:"div",style:{display:"flex",borderRadius:"50%",padding:4},children:e.jsx(v,{size:16})}):void 0})]})}};var u,i,m;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    header: "Input",
    placeholder: "Placeholder"
  },
  decorators: [DecoratorStory => <List style={{
    background: "var(--tg-theme-bg-color)",
    padding: 10
  }}>
        <DecoratorStory />
      </List>]
} satisfies Story`,...(m=(i=s.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var p,c,h;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState("");
    return <List style={{
      width: 400,
      maxWidth: "100%",
      margin: "auto",
      background: "var(--tg-theme-bg-color)",
      padding: 10
    }}>
        <TextField header="Input" placeholder="I am usual input, just leave me alone" />
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
} satisfies Story`,...(h=(c=o.parameters)==null?void 0:c.docs)==null?void 0:h.source}}};var x,g,f;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState("");
    return <List style={{
      width: 400,
      maxWidth: "100%",
      margin: "auto",
      background: "var(--tg-theme-bg-color)"
    }}>
        <TextField multiline header="Textarea" placeholder="I am usual input, just leave me alone" />
        <TextField status="error" multiline header="Textarea" placeholder="I am error input, don't make my mistakes..." />
        <TextField status="focused" multiline header="Textarea" placeholder="I am focused input, are u focused on me?" />
        <TextField disabled multiline header="Textarea" placeholder="I am disabled input" />
        <TextField status="focused" multiline header="Textarea" placeholder="Write and clean me" value={value} onChange={e => setValue(e.target.value)} endAdornment={value ? <Tappable onClick={() => setValue("")} Component="div" style={{
        display: "flex",
        borderRadius: "50%",
        padding: 4
      }}>
                <CloseIcon size={16} />
              </Tappable> : undefined} />
      </List>;
  }
} satisfies Story`,...(f=(g=d.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};const A=["Playground","Inputs","Textarea"];export{o as Inputs,s as Playground,d as Textarea,A as __namedExportsOrder,z as default};
