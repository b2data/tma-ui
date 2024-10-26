import{j as a}from"./jsx-runtime-Cw0GR0a5.js";import{r as c}from"./index-CTjT7uj6.js";import{h as J}from"./control-BLWnEcik.js";import{T as n}from"./Typography-CVAv-OXT.js";import"./classNames-BjxpnYM-.js";const U={title:"Blocks/Typography",component:n,argTypes:J("Component")},s={args:{children:"Text"}},t={args:{variant:"h1",plain:!1},render:e=>a.jsx(a.Fragment,{children:["light","regular","bold"].map(r=>a.jsxs(n,{weight:r,...e,children:["H1 - ",r]},r))})},i={args:{variant:"h2",plain:!1},render:e=>a.jsx(a.Fragment,{children:["light","regular","bold"].map(r=>a.jsxs(n,{weight:r,...e,children:["H2 - ",r]},r))})},o={args:{variant:"h3",plain:!1},render:e=>a.jsx(a.Fragment,{children:["light","regular","bold"].map(r=>a.jsxs(n,{weight:r,...e,children:["H3 - ",r]},r))})},p={args:{variant:"h4",plain:!1},render:e=>a.jsx(a.Fragment,{children:["light","regular","bold"].map(r=>a.jsxs(n,{weight:r,...e,children:["H4 - ",r]},r))})},l={args:{variant:"headline",plain:!1},render:e=>a.jsx(a.Fragment,{children:["light","regular","bold"].map(r=>a.jsxs(n,{weight:r,...e,children:["headline - ",r]},r))})},g={args:{variant:"subHeadline",plain:!1},render:e=>a.jsxs(a.Fragment,{children:[["light","regular","bold"].map(r=>a.jsxs(n,{weight:r,...e,children:["subHeadline - ",r]},r)),["light","regular","bold"].map(r=>a.jsxs(n,{weight:r,...e,small:!0,children:["subHeadline - ",r," + small"]},r))]})},h={args:{variant:"text",plain:!1},render:e=>a.jsx(a.Fragment,{children:["light","regular","bold"].map(r=>a.jsxs(c.Fragment,{children:[a.jsxs(n,{weight:r,...e,children:["text - ",r]}),a.jsx("br",{})]},r))})},d={args:{variant:"caption",plain:!1},render:e=>a.jsxs(a.Fragment,{children:[["light","regular","bold"].map(r=>a.jsxs(c.Fragment,{children:[a.jsxs(n,{weight:r,...e,children:["caption - ",r]}),a.jsx("br",{})]},r)),["light","regular","bold"].map(r=>a.jsxs(c.Fragment,{children:[a.jsxs(n,{weight:r,...e,small:!0,children:["caption - ",r," + small"]}),a.jsx("br",{})]},r))]})};var m,y,u;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    children: "Text"
  }
} satisfies Story`,...(u=(y=s.parameters)==null?void 0:y.docs)==null?void 0:u.source}}};var x,b,f;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    variant: "h1",
    plain: false
  },
  render: props => <>
      {["light", "regular", "bold"].map(weight => <Typography key={weight} weight={weight as any} {...props}>
          H1 - {weight}
        </Typography>)}
    </>
} satisfies Story`,...(f=(b=t.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var w,T,j;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    variant: "h2",
    plain: false
  },
  render: props => <>
      {["light", "regular", "bold"].map(weight => <Typography key={weight} weight={weight as any} {...props}>
          H2 - {weight}
        </Typography>)}
    </>
} satisfies Story`,...(j=(T=i.parameters)==null?void 0:T.docs)==null?void 0:j.source}}};var H,S,F;o.parameters={...o.parameters,docs:{...(H=o.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    variant: "h3",
    plain: false
  },
  render: props => <>
      {["light", "regular", "bold"].map(weight => <Typography key={weight} weight={weight as any} {...props}>
          H3 - {weight}
        </Typography>)}
    </>
} satisfies Story`,...(F=(S=o.parameters)==null?void 0:S.docs)==null?void 0:F.source}}};var v,k,C;p.parameters={...p.parameters,docs:{...(v=p.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    variant: "h4",
    plain: false
  },
  render: props => <>
      {["light", "regular", "bold"].map(weight => <Typography key={weight} weight={weight as any} {...props}>
          H4 - {weight}
        </Typography>)}
    </>
} satisfies Story`,...(C=(k=p.parameters)==null?void 0:k.docs)==null?void 0:C.source}}};var E,P,_;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    variant: "headline",
    plain: false
  },
  render: props => <>
      {["light", "regular", "bold"].map(weight => <Typography key={weight} weight={weight as any} {...props}>
          headline - {weight}
        </Typography>)}
    </>
} satisfies Story`,...(_=(P=l.parameters)==null?void 0:P.docs)==null?void 0:_.source}}};var B,O,R;g.parameters={...g.parameters,docs:{...(B=g.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
} satisfies Story`,...(R=(O=g.parameters)==null?void 0:O.docs)==null?void 0:R.source}}};var q,z,A;h.parameters={...h.parameters,docs:{...(q=h.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
} satisfies Story`,...(A=(z=h.parameters)==null?void 0:z.docs)==null?void 0:A.source}}};var D,G,I;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
} satisfies Story`,...(I=(G=d.parameters)==null?void 0:G.docs)==null?void 0:I.source}}};const V=["Playground","H1","H2","H3","H4","Headline","SubHeadline","Text","Caption"];export{d as Caption,t as H1,i as H2,o as H3,p as H4,l as Headline,s as Playground,g as SubHeadline,h as Text,V as __namedExportsOrder,U as default};
