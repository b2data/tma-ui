import{j as t}from"./jsx-runtime-DR9Q75dM.js";import{r as h}from"./index-DRjF_FHU.js";import{h as g}from"./control-BLWnEcik.js";import{P as l}from"./Popper--syOveVc.js";import{P as u}from"./Placeholder-BEKt0QMe.js";import{T as f}from"./Touch-oQU64Pjx.js";import"./classNames-BjxpnYM-.js";import"./react-C2pAPbtc.js";import"./dom-vh0E4EzA.js";import"./index-rX-Bn4lm.js";import"./RootRenderer-D2r2RKvs.js";import"./Typography-tCI8f8sN.js";import"./dayjs.min-B-QGziwU.js";const T={title:"Overlays/Popper",component:l,argTypes:g("targetRef","Component")},e={args:{targetRef:""},render:a=>{const[s,c]=h.useState(()=>DOMRect.fromRect({x:-200,y:-200,width:10,height:10})),p=r=>{c(({width:m,height:d})=>DOMRect.fromRect({x:r.clientX,y:r.clientY,width:m,height:d}))};return t.jsxs(f,{style:{position:"relative",height:"40vh",display:"flex",alignItems:"center",justifyContent:"center"},onClickCapture:p,children:[t.jsx(u,{header:"Click anywhere in this window",description:"A low-level component for rendering a dropdown block. It's positioning itself correctly next to the target element."}),t.jsx(l,{...a,style:{padding:"10px 12px",background:"var(--tg-theme-button-color)",color:"#fff"},targetRef:{getBoundingClientRect(){return s}},children:"Hello"})]})}};var o,n,i;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    targetRef: "" as any
  },
  render: args => {
    const [virtualElement, setVirtualElement] = useState(() => DOMRect.fromRect({
      x: -200,
      y: -200,
      width: 10,
      height: 10
    }));
    const handleClick = (event: MouseEvent<HTMLDivElement>) => {
      setVirtualElement(({
        width,
        height
      }) => DOMRect.fromRect({
        x: event.clientX,
        y: event.clientY,
        width,
        height
      }));
    };
    return <Touch style={{
      position: "relative",
      height: "40vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }} onClickCapture={handleClick}>
        <Placeholder header="Click anywhere in this window" description="A low-level component for rendering a dropdown block. It's positioning itself correctly next to the target element." />
        <Popper {...args} style={{
        padding: "10px 12px",
        background: "var(--tg-theme-button-color)",
        color: "#fff"
      }} targetRef={{
        getBoundingClientRect() {
          return virtualElement;
        }
      }}>
          Hello
        </Popper>
      </Touch>;
  }
}`,...(i=(n=e.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};const D=["Playground"];export{e as Playground,D as __namedExportsOrder,T as default};
