import{j as t}from"./jsx-runtime-DR9Q75dM.js";import{r as h}from"./index-DRjF_FHU.js";import{h as g}from"./control-BLWnEcik.js";import{P as l}from"./Popper-51Nc-Hyy.js";import{P as u}from"./Placeholder-BHW2jTQB.js";import{T as f}from"./Touch-CgpiS6Hl.js";import"./classNames-BjxpnYM-.js";import"./file-zip-B9x0q0B1.js";import"./react-C2pAPbtc.js";import"./floating-ui.react-dom-DgSIcNDv.js";import"./floating-ui.utils.dom-DvNN8USF.js";import"./index-rX-Bn4lm.js";import"./RootRenderer-D2r2RKvs.js";import"./Typography-CrhEa1Is.js";import"./dayjs.min-B-QGziwU.js";import"./dom-BX_BfvPL.js";const H={title:"Overlays/Popper",component:l,argTypes:g("targetRef","Component")},e={args:{targetRef:""},render:a=>{const[s,c]=h.useState(()=>DOMRect.fromRect({x:-200,y:-200,width:10,height:10})),p=r=>{c(({width:m,height:d})=>DOMRect.fromRect({x:r.clientX,y:r.clientY,width:m,height:d}))};return t.jsxs(f,{style:{position:"relative",height:"40vh",display:"flex",alignItems:"center",justifyContent:"center"},onClickCapture:p,children:[t.jsx(u,{header:"Click anywhere in this window",description:"A low-level component for rendering a dropdown block. It's positioning itself correctly next to the target element."}),t.jsx(l,{...a,style:{padding:"10px 12px",background:"var(--tg-theme-button-color)",color:"#fff"},targetRef:{getBoundingClientRect(){return s}},children:"Hello"})]})}};var o,n,i;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(i=(n=e.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};const S=["Playground"];export{e as Playground,S as __namedExportsOrder,H as default};
