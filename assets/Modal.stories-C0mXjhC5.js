import{j as e}from"./jsx-runtime-DR9Q75dM.js";import{r as h}from"./index-DRjF_FHU.js";import{h as I}from"./control-BLWnEcik.js";import{M as i,a as T}from"./ModalHeader-CXIVgsMI.js";import{B as d}from"./Button-Du01PgZH.js";import{P as a}from"./Placeholder-DB9QYWFz.js";import"./classNames-BjxpnYM-.js";import"./index-rX-Bn4lm.js";import"./VisuallyHidden-DVDVm8UN.js";import"./dayjs.min-B-QGziwU.js";import"./usePlatform-CpmMXCo-.js";import"./Typography-C-8rOji7.js";import"./react-C2pAPbtc.js";import"./Spinner-R9NLJK8d.js";import"./Tappable-HVuun7D-.js";import"./useTimeout-BRhOMhk3.js";const U={title:"Overlays/Modal",component:i,argTypes:I("header","trigger","children","overlayComponent","snapPoints","fadeFromIndex")},c=r=>e.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:600,maxHeight:"96vh"},children:e.jsx(r,{})}),t={args:{header:e.jsx(T,{children:"Only iOS header"}),trigger:e.jsx(d,{children:"Open modal"}),children:e.jsx(a,{header:"Title",description:"Description",children:e.jsx("img",{alt:"Telegram sticker",src:"https://xelene.me/telegram.gif",style:{display:"block",width:"144px",height:"144px"}})})},decorators:[c]},v=r=>e.jsx(a,{header:"Title",description:"Description",action:e.jsx(i,{...r,nested:!0,children:e.jsx(v,{...r})})}),n={args:t.args,render:r=>e.jsx(i,{...r,children:e.jsx(v,{trigger:r.trigger,...r})}),decorators:[c]},s={args:{...t.args,snapPoints:[.33,.66,1],children:e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{height:"33vh",background:"blue"}}),e.jsx("div",{style:{height:"33vh",background:"green"}}),e.jsx("div",{style:{height:"33vh",background:"bisque"}})]})},decorators:[c]},o={args:{...t.args},render:r=>{const[C,l]=h.useState(r.open),[b,g]=h.useState(!1),M=()=>{g(!0),setTimeout(()=>{g(!1),l(!1)},1e3)};return e.jsx(a,{header:"This modal will be closed after 1000ms, click fetch",description:"Click fetch",action:e.jsx(d,{onClick:()=>l(!0),children:"Open again"}),children:e.jsx(i,{...r,trigger:void 0,open:C,onOpenChange:l,children:e.jsx(a,{action:e.jsx(d,{loading:b,onClick:M,children:"Fetch data and close"})})})})},decorators:[c]};var p,m,u;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    header: <ModalHeader>Only iOS header</ModalHeader>,
    trigger: <Button>Open modal</Button>,
    children: <Placeholder header="Title" description="Description">
        <img alt="Telegram sticker" src="https://xelene.me/telegram.gif" style={{
        display: "block",
        width: "144px",
        height: "144px"
      }} />
      </Placeholder>
  },
  decorators: [DecoratorFullScreen]
} satisfies Story`,...(u=(m=t.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var x,f,y;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: Playground.args,
  render: args => <Modal {...args}>
      <PlaceholderForNestedModal trigger={args.trigger} {...args} />
    </Modal>,
  decorators: [DecoratorFullScreen]
} satisfies Story`,...(y=(f=n.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var j,S,O;s.parameters={...s.parameters,docs:{...(j=s.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    ...Playground.args,
    snapPoints: [0.33, 0.66, 1],
    children: <>
        <div style={{
        height: "33vh",
        background: "blue"
      }} />
        <div style={{
        height: "33vh",
        background: "green"
      }} />
        <div style={{
        height: "33vh",
        background: "bisque"
      }} />
      </>
  },
  decorators: [DecoratorFullScreen]
} satisfies Story`,...(O=(S=s.parameters)==null?void 0:S.docs)==null?void 0:O.source}}};var P,k,F;o.parameters={...o.parameters,docs:{...(P=o.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    ...Playground.args
  },
  render: args => {
    const [isOpen, setIsOpen] = useState(args.open);
    const [isFetching, setIsFetching] = useState(false);
    const fetchAndClose = () => {
      setIsFetching(true);
      setTimeout(() => {
        setIsFetching(false);
        setIsOpen(false);
      }, 1000);
    };
    return <Placeholder header="This modal will be closed after 1000ms, click fetch" description="Click fetch" action={<Button onClick={() => setIsOpen(true)}>Open again</Button>}>
        <Modal {...args} trigger={undefined} open={isOpen} onOpenChange={setIsOpen}>
          <Placeholder action={<Button loading={isFetching} onClick={fetchAndClose}>
                Fetch data and close
              </Button>} />
        </Modal>
      </Placeholder>;
  },
  decorators: [DecoratorFullScreen]
} satisfies Story`,...(F=(k=o.parameters)==null?void 0:k.docs)==null?void 0:F.source}}};const V=["Playground","NestedModals","SnapPoints","Controlled"];export{o as Controlled,n as NestedModals,t as Playground,s as SnapPoints,V as __namedExportsOrder,U as default};