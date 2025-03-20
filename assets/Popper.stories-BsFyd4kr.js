import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{r as h}from"./index-2yJIXLcc.js";import{h as g}from"./control-BLWnEcik.js";import{P as l}from"./Popper-DgbLztRZ.js";import{P as u}from"./Placeholder-2eVNY_TB.js";import{T as f}from"./Touch-Cy9rcpHf.js";import"./classNames-BjxpnYM-.js";import"./file-zip-BXERkKO-.js";import"./react-B_12zFKA.js";import"./floating-ui.react-dom-CmOQJs4M.js";import"./floating-ui.utils.dom-C54ba6qF.js";import"./index-D-es_Zdh.js";import"./index-Bn05qqr6.js";import"./RootRenderer-vJxaFXdl.js";import"./Typography-C9RDb2oI.js";import"./dayjs.min-qj4fShTU.js";import"./dom-Dk7p2m-W.js";const S={title:"Overlays/Popper",component:l,argTypes:g("targetRef","Component")},e={args:{targetRef:""},render:a=>{const[s,c]=h.useState(()=>DOMRect.fromRect({x:-200,y:-200,width:10,height:10})),p=r=>{c(({width:m,height:d})=>DOMRect.fromRect({x:r.clientX,y:r.clientY,width:m,height:d}))};return t.jsxs(f,{style:{position:"relative",height:"40vh",display:"flex",alignItems:"center",justifyContent:"center"},onClickCapture:p,children:[t.jsx(u,{header:"Click anywhere in this window",description:"A low-level component for rendering a dropdown block. It's positioning itself correctly next to the target element."}),t.jsx(l,{...a,style:{padding:"10px 12px",background:"var(--tg-theme-button-color)",color:"#fff"},targetRef:{getBoundingClientRect(){return s}},children:"Hello"})]})}};var o,n,i;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(i=(n=e.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};const V=["Playground"];export{e as Playground,V as __namedExportsOrder,S as default};
