import{j as e}from"./jsx-runtime-DR9Q75dM.js";import{C as d}from"./WarningIcon-nkyPbtWt.js";import{h as j,s as A}from"./control-BLWnEcik.js";import{C as n}from"./Chip-04QWRQtR.js";import{L as l}from"./List-BVxYyspE.js";import{A as a}from"./Avatar-MezpE3Ps.js";import"./index-DRjF_FHU.js";import"./classNames-BjxpnYM-.js";import"./react-C2pAPbtc.js";import"./dayjs.min-B-QGziwU.js";import"./usePlatform-CpmMXCo-.js";import"./Typography-C-8rOji7.js";import"./Tappable-HVuun7D-.js";import"./useTimeout-BRhOMhk3.js";import"./Image-DL7nKGa0.js";import"./Badge-Be3-ueUq.js";import"./Spinner-R9NLJK8d.js";const q={title:"Forms/Chip",component:n,parameters:{layout:"centered"},argTypes:{...j("startAdornment","endAdornment"),...A(["children"],"text")}},p=["Chip","'n'","Dale"],r={render:i=>e.jsxs(l,{style:{padding:20,background:"var(--tg-theme-section-bg-color)"},children:[e.jsx("div",{style:{display:"flex",gap:16},children:p.map(t=>e.jsx(n,{...i,children:t},t))}),e.jsx("div",{style:{display:"flex",gap:16},children:p.map(t=>e.jsx(n,{mode:"mono",...i,children:t},t))}),e.jsx("div",{style:{display:"flex",gap:16},children:p.map(t=>e.jsx(n,{mode:"outline",...i,children:t},t))})]})},o={render:()=>e.jsx(l,{style:{padding:20},children:e.jsxs("div",{style:{display:"flex",gap:8},children:[e.jsx(n,{mode:"elevated",endAdornment:e.jsx(d,{}),children:"Elevated"}),e.jsx(n,{mode:"mono",endAdornment:e.jsx(d,{}),children:"Mono"}),e.jsx(n,{mode:"outline",endAdornment:e.jsx(d,{}),children:"Outline"})]})})},s={render:()=>e.jsx(l,{style:{padding:20},children:e.jsxs("div",{style:{display:"flex",gap:8},children:[e.jsx(n,{mode:"elevated",startAdornment:e.jsx(a,{size:20}),children:"Elevated"}),e.jsx(n,{mode:"mono",startAdornment:e.jsx(a,{size:20}),children:"Mono"}),e.jsx(n,{mode:"outline",startAdornment:e.jsx(a,{size:20}),children:"Outline"})]})})};var m,c,h;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => <List style={{
    padding: 20,
    background: "var(--tg-theme-section-bg-color)"
  }}>
      <div style={{
      display: "flex",
      gap: 16
    }}>
        {chips.map(text => <Chip key={text} {...args}>
            {text}
          </Chip>)}
      </div>
      <div style={{
      display: "flex",
      gap: 16
    }}>
        {chips.map(text => <Chip mode="mono" key={text} {...args}>
            {text}
          </Chip>)}
      </div>
      <div style={{
      display: "flex",
      gap: 16
    }}>
        {chips.map(text => <Chip mode="outline" key={text} {...args}>
            {text}
          </Chip>)}
      </div>
    </List>
} satisfies Story`,...(h=(c=r.parameters)==null?void 0:c.docs)==null?void 0:h.source}}};var x,y,g;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <List style={{
    padding: 20
  }}>
      <div style={{
      display: "flex",
      gap: 8
    }}>
        <Chip mode="elevated" endAdornment={<CloseIcon />}>
          Elevated
        </Chip>
        <Chip mode="mono" endAdornment={<CloseIcon />}>
          Mono
        </Chip>
        <Chip mode="outline" endAdornment={<CloseIcon />}>
          Outline
        </Chip>
      </div>
    </List>
}`,...(g=(y=o.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var v,C,u;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <List style={{
    padding: 20
  }}>
      <div style={{
      display: "flex",
      gap: 8
    }}>
        <Chip mode="elevated" startAdornment={<Avatar size={20} />}>
          Elevated
        </Chip>
        <Chip mode="mono" startAdornment={<Avatar size={20} />}>
          Mono
        </Chip>
        <Chip mode="outline" startAdornment={<Avatar size={20} />}>
          Outline
        </Chip>
      </div>
    </List>
}`,...(u=(C=s.parameters)==null?void 0:C.docs)==null?void 0:u.source}}};const w=["Playground","WithEndAdornment","WithStartAdornment"];export{r as Playground,o as WithEndAdornment,s as WithStartAdornment,w as __namedExportsOrder,q as default};