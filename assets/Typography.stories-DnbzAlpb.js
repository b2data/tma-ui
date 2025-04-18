import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as b}from"./index-2yJIXLcc.js";import{h as tr}from"./control-BLWnEcik.js";import{T as n}from"./Typography-C9RDb2oI.js";import"./classNames-BjxpnYM-.js";import"./file-zip-BXERkKO-.js";import"./react-B_12zFKA.js";const hr={title:"Blocks/Typography",component:n,argTypes:tr("Component")},s={args:{children:"Text"}},t={args:{variant:"h1",plain:!1},render:a=>e.jsx(e.Fragment,{children:["light","regular","bold"].map(r=>e.jsxs(n,{weight:r,...a,children:["H1 - ",r]},r))})},o={args:{variant:"h2",plain:!1},render:a=>e.jsx(e.Fragment,{children:["light","regular","bold"].map(r=>e.jsxs(n,{weight:r,...a,children:["H2 - ",r]},r))})},i={args:{variant:"h3",plain:!1},render:a=>e.jsx(e.Fragment,{children:["light","regular","bold"].map(r=>e.jsxs(n,{weight:r,...a,children:["H3 - ",r]},r))})},p={args:{variant:"h4",plain:!1},render:a=>e.jsx(e.Fragment,{children:["light","regular","bold"].map(r=>e.jsxs(n,{weight:r,...a,children:["H4 - ",r]},r))})},l={args:{variant:"h5",plain:!1},render:a=>e.jsx(e.Fragment,{children:["light","regular","bold"].map(r=>e.jsxs(n,{weight:r,...a,children:["H4 - ",r]},r))})},g={args:{variant:"h6",plain:!1},render:a=>e.jsx(e.Fragment,{children:["light","regular","bold"].map(r=>e.jsxs(n,{weight:r,...a,children:["H4 - ",r]},r))})},d={args:{variant:"headline",plain:!1},render:a=>e.jsx(e.Fragment,{children:["light","regular","bold"].map(r=>e.jsxs(n,{weight:r,...a,children:["headline - ",r]},r))})},c={args:{variant:"subHeadline",plain:!1},render:a=>e.jsxs(e.Fragment,{children:[["light","regular","bold"].map(r=>e.jsxs(n,{weight:r,...a,children:["subHeadline - ",r]},r)),["light","regular","bold"].map(r=>e.jsxs(n,{weight:r,...a,small:!0,children:["subHeadline - ",r," + small"]},r))]})},h={args:{variant:"text",plain:!1},render:a=>e.jsx(e.Fragment,{children:["light","regular","bold"].map(r=>e.jsxs(b.Fragment,{children:[e.jsxs(n,{weight:r,...a,children:["text - ",r]}),e.jsx("br",{})]},r))})},m={args:{variant:"caption",plain:!1},render:a=>e.jsxs(e.Fragment,{children:[["light","regular","bold"].map(r=>e.jsxs(b.Fragment,{children:[e.jsxs(n,{weight:r,...a,children:["caption - ",r]}),e.jsx("br",{})]},r)),["light","regular","bold"].map(r=>e.jsxs(b.Fragment,{children:[e.jsxs(n,{weight:r,...a,small:!0,children:["caption - ",r," + small"]}),e.jsx("br",{})]},r))]})},y={args:{markdown:`## Markdown H1

**bold** *italic*

- list
- list

em _em_

* * *
\`code\`   
\`\`\`code2\`\`\``}},u={args:{editableProps:{enabled:!0,markdown:!0,placeholder:"Type here..."}},render:a=>{const[r,nr]=b.useState("");return e.jsx(n,{...a,onBlur:sr=>nr(sr.currentTarget.innerHTML),markdown:r})}};var w,x,T;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    children: "Text"
  }
} satisfies Story`,...(T=(x=s.parameters)==null?void 0:x.docs)==null?void 0:T.source}}};var f,H,j;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    variant: "h1",
    plain: false
  },
  render: props => <>
      {["light", "regular", "bold"].map(weight => <Typography key={weight} weight={weight as any} {...props}>
          H1 - {weight}
        </Typography>)}
    </>
} satisfies Story`,...(j=(H=t.parameters)==null?void 0:H.docs)==null?void 0:j.source}}};var S,k,v;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    variant: "h2",
    plain: false
  },
  render: props => <>
      {["light", "regular", "bold"].map(weight => <Typography key={weight} weight={weight as any} {...props}>
          H2 - {weight}
        </Typography>)}
    </>
} satisfies Story`,...(v=(k=o.parameters)==null?void 0:k.docs)==null?void 0:v.source}}};var F,M,_;i.parameters={...i.parameters,docs:{...(F=i.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    variant: "h3",
    plain: false
  },
  render: props => <>
      {["light", "regular", "bold"].map(weight => <Typography key={weight} weight={weight as any} {...props}>
          H3 - {weight}
        </Typography>)}
    </>
} satisfies Story`,...(_=(M=i.parameters)==null?void 0:M.docs)==null?void 0:_.source}}};var E,C,P;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    variant: "h4",
    plain: false
  },
  render: props => <>
      {["light", "regular", "bold"].map(weight => <Typography key={weight} weight={weight as any} {...props}>
          H4 - {weight}
        </Typography>)}
    </>
} satisfies Story`,...(P=(C=p.parameters)==null?void 0:C.docs)==null?void 0:P.source}}};var B,V,L;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    variant: "h5",
    plain: false
  },
  render: props => <>
      {["light", "regular", "bold"].map(weight => <Typography key={weight} weight={weight as any} {...props}>
          H4 - {weight}
        </Typography>)}
    </>
} satisfies Story`,...(L=(V=l.parameters)==null?void 0:V.docs)==null?void 0:L.source}}};var O,R,q;g.parameters={...g.parameters,docs:{...(O=g.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    variant: "h6",
    plain: false
  },
  render: props => <>
      {["light", "regular", "bold"].map(weight => <Typography key={weight} weight={weight as any} {...props}>
          H4 - {weight}
        </Typography>)}
    </>
} satisfies Story`,...(q=(R=g.parameters)==null?void 0:R.docs)==null?void 0:q.source}}};var z,A,D;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    variant: "headline",
    plain: false
  },
  render: props => <>
      {["light", "regular", "bold"].map(weight => <Typography key={weight} weight={weight as any} {...props}>
          headline - {weight}
        </Typography>)}
    </>
} satisfies Story`,...(D=(A=d.parameters)==null?void 0:A.docs)==null?void 0:D.source}}};var G,I,J;c.parameters={...c.parameters,docs:{...(G=c.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    variant: "subHeadline",
    plain: false
  },
  render: props => <>
      {["light", "regular", "bold"].map(weight => <Typography key={weight} weight={weight as any} {...props}>
          subHeadline - {weight}
        </Typography>)}
      {["light", "regular", "bold"].map(weight => <Typography key={weight} weight={weight as any} {...props} small>
          subHeadline - {weight} + small
        </Typography>)}
    </>
} satisfies Story`,...(J=(I=c.parameters)==null?void 0:I.docs)==null?void 0:J.source}}};var K,N,Q;h.parameters={...h.parameters,docs:{...(K=h.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    variant: "text",
    plain: false
  },
  render: props => <>
      {["light", "regular", "bold"].map(weight => <Fragment key={weight}>
          <Typography weight={weight as any} {...props}>
            text - {weight}
          </Typography>
          <br />
        </Fragment>)}
    </>
} satisfies Story`,...(Q=(N=h.parameters)==null?void 0:N.docs)==null?void 0:Q.source}}};var U,W,X;m.parameters={...m.parameters,docs:{...(U=m.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    variant: "caption",
    plain: false
  },
  render: props => <>
      {["light", "regular", "bold"].map(weight => <Fragment key={weight}>
          <Typography weight={weight as any} {...props}>
            caption - {weight}
          </Typography>
          <br />
        </Fragment>)}
      {["light", "regular", "bold"].map(weight => <Fragment key={weight}>
          <Typography weight={weight as any} {...props} small>
            caption - {weight} + small
          </Typography>
          <br />
        </Fragment>)}
    </>
} satisfies Story`,...(X=(W=m.parameters)==null?void 0:W.docs)==null?void 0:X.source}}};var Y,Z,$;y.parameters={...y.parameters,docs:{...(Y=y.parameters)==null?void 0:Y.docs,source:{originalSource:'{\n  args: {\n    markdown: "## Markdown H1\\n\\n**bold** *italic*\\n\\n- list\\n- list\\n\\nem _em_\\n\\n* * *\\n`code`   \\n```code2```"\n  }\n} satisfies Story',...($=(Z=y.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var rr,er,ar;u.parameters={...u.parameters,docs:{...(rr=u.parameters)==null?void 0:rr.docs,source:{originalSource:`{
  args: {
    editableProps: {
      enabled: true,
      markdown: true,
      placeholder: "Type here..."
    }
  },
  render: props => {
    const [value, setValue] = useState("");
    return <Typography {...props} onBlur={e => setValue(e.currentTarget.innerHTML)} markdown={value} />;
  }
} satisfies Story`,...(ar=(er=u.parameters)==null?void 0:er.docs)==null?void 0:ar.source}}};const mr=["Playground","H1","H2","H3","H4","H5","H6","Headline","SubHeadline","Text","Caption","Markdown","Editable"];export{m as Caption,u as Editable,t as H1,o as H2,i as H3,p as H4,l as H5,g as H6,d as Headline,y as Markdown,s as Playground,c as SubHeadline,h as Text,mr as __namedExportsOrder,hr as default};
