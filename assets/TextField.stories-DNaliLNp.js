import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as I}from"./index-2yJIXLcc.js";import{C as f}from"./file-zip-BXERkKO-.js";import{T as a}from"./TextField-CQtxNyO0.js";import{L as j}from"./List-CPa4ftU7.js";import{T as v}from"./Tappable-Bi9o3b7s.js";import"./classNames-BjxpnYM-.js";import"./dayjs.min-qj4fShTU.js";import"./usePlatform-CpmMXCo-.js";import"./FormInput-BXR-3vMc.js";import"./function-0hL7Y8C6.js";import"./react-B_12zFKA.js";import"./Typography-C9RDb2oI.js";import"./useTimeout-5tW5gS3k.js";const P={title:"Forms/TextField",component:a,parameters:{layout:"fullscreen"},decorators:[t=>e.jsx(j,{style:{width:400,maxWidth:"100%",margin:"auto",padding:10},children:e.jsx(t,{})})]},l={args:{header:"Input",placeholder:"Placeholder"}},s={render:()=>{const[t,r]=I.useState("");return e.jsxs(e.Fragment,{children:[e.jsx(a,{header:"Input",startAdornment:"a",placeholder:"I am usual input, just leave me alone"}),e.jsx(a,{status:"error",header:"Input",placeholder:"I am error input, don't make my mistakes..."}),e.jsx(a,{status:"focused",header:"Input",placeholder:"I am focused input, are u focused on me?"}),e.jsx(a,{disabled:!0,header:"Input",placeholder:"I am disabled input",value:"DDD"}),e.jsx(a,{header:"Input",helperText:"Helper Text"}),e.jsx(a,{type:"datetime-local",header:"Datetime"}),e.jsx(a,{status:"focused",header:"Input",placeholder:"Write and clean me",value:t,onChange:o=>r(o.target.value),endAdornment:t?e.jsx(v,{onClick:()=>r(""),Component:"div",style:{display:"flex",borderRadius:"50%",padding:4},children:e.jsx(f,{size:16})}):void 0})]})}},d={render:()=>{const[t,r]=I.useState("");return e.jsxs(e.Fragment,{children:[e.jsx(a,{multiline:!0,header:"Textarea",placeholder:"I am usual input, just leave me alone"}),e.jsx(a,{status:"error",multiline:!0,header:"Textarea",placeholder:"I am error input, don't make my mistakes..."}),e.jsx(a,{status:"focused",multiline:!0,header:"Textarea",placeholder:"I am focused input, are u focused on me?"}),e.jsx(a,{disabled:!0,multiline:!0,header:"Textarea",placeholder:"I am disabled placeholder"}),e.jsx(a,{disabled:!0,multiline:!0,header:"Textarea",value:"I am disabled value"}),e.jsx(a,{header:"Textarea",multiline:!0,helperText:"Helper Text"}),e.jsx(a,{status:"focused",multiline:!0,header:"Textarea",placeholder:"Write and clean me",value:t,onChange:o=>r(o.target.value),endAdornment:t?e.jsx(v,{onClick:()=>r(""),Component:"div",style:{display:"flex",borderRadius:"50%",padding:4},children:e.jsx(f,{size:16})}):void 0})]})}};var u,n,i;l.parameters={...l.parameters,docs:{...(u=l.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    header: "Input",
    placeholder: "Placeholder"
  }
} satisfies Story`,...(i=(n=l.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};var p,m,c;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState("");
    return <>
        <TextField header="Input" startAdornment="a" placeholder="I am usual input, just leave me alone" />
        <TextField status="error" header="Input" placeholder="I am error input, don't make my mistakes..." />
        <TextField status="focused" header="Input" placeholder="I am focused input, are u focused on me?" />
        <TextField disabled header="Input" placeholder="I am disabled input" value="DDD" />
        <TextField header="Input" helperText="Helper Text" />
        <TextField type="datetime-local" header="Datetime" />
        <TextField status="focused" header="Input" placeholder="Write and clean me" value={value} onChange={e => setValue(e.target.value)} endAdornment={value ? <Tappable onClick={() => setValue("")} Component="div" style={{
        display: "flex",
        borderRadius: "50%",
        padding: 4
      }}>
                <CloseIcon size={16} />
              </Tappable> : undefined} />
      </>;
  }
} satisfies Story`,...(c=(m=s.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var x,h,T;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState("");
    return <>
        <TextField multiline header="Textarea" placeholder="I am usual input, just leave me alone" />
        <TextField status="error" multiline header="Textarea" placeholder="I am error input, don't make my mistakes..." />
        <TextField status="focused" multiline header="Textarea" placeholder="I am focused input, are u focused on me?" />
        <TextField disabled multiline header="Textarea" placeholder="I am disabled placeholder" />
        <TextField disabled multiline header="Textarea" value="I am disabled value" />
        <TextField header="Textarea" multiline helperText="Helper Text" />
        <TextField status="focused" multiline header="Textarea" placeholder="Write and clean me" value={value} onChange={e => setValue(e.target.value)} endAdornment={value ? <Tappable onClick={() => setValue("")} Component="div" style={{
        display: "flex",
        borderRadius: "50%",
        padding: 4
      }}>
                <CloseIcon size={16} />
              </Tappable> : undefined} />
      </>;
  }
} satisfies Story`,...(T=(h=d.parameters)==null?void 0:h.docs)==null?void 0:T.source}}};const E=["Playground","Inputs","Textarea"];export{s as Inputs,l as Playground,d as Textarea,E as __namedExportsOrder,P as default};
