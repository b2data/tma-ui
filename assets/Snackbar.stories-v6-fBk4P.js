import{j as e}from"./jsx-runtime-DR9Q75dM.js";import{r as a}from"./index-DRjF_FHU.js";import{h as p,s as h}from"./control-BLWnEcik.js";import{S as t}from"./Snackbar-DGfD3DwT.js";import{A as k}from"./WarningIcon-C7j4JNMz.js";import{B as i}from"./Button-BHkAevSL.js";import{L as u}from"./Link-CSVnsF1H.js";import"./classNames-BjxpnYM-.js";import"./react-C2pAPbtc.js";import"./dayjs.min-B-QGziwU.js";import"./useTimeout-BRhOMhk3.js";import"./usePlatform-CpmMXCo-.js";import"./RootRenderer-D2r2RKvs.js";import"./index-rX-Bn4lm.js";import"./Typography-tCI8f8sN.js";import"./Spinner-CSk3H20J.js";import"./Tappable-HVuun7D-.js";const v={title:"Overlays/Snackbar",component:t,argTypes:{...p("startAdornment","endAdornment","onClose","link"),...h(["description","children"],"text")}},n={args:{startAdornment:e.jsx(k,{}),description:"Restore the message within 4 seconds",children:"Message deleted",onClose:()=>{}},render:s=>{const[m,r]=a.useState(!1),[S,o]=a.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(i,{onClick:()=>r(!0),children:"Show snackbar"}),m&&e.jsx(t,{...s,endAdornment:e.jsx(i,{variant:"text",size:"small",onClick:()=>o(!0),children:"Undo"}),onClose:()=>r(!1)}),S&&e.jsx(t,{...s,description:"Message returned to the list",link:e.jsx(u,{href:"https://telegram.org",target:"_blank",children:"Open"}),onClose:()=>o(!1),children:"Message restored"})]})}};var c,l,d;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    startAdornment: <AddIcon />,
    description: "Restore the message within 4 seconds",
    children: "Message deleted",
    onClose: () => {}
  },
  render: args => {
    const [isDeleteSnackbarShown, setIsDeleteSnackbarShown] = useState(false);
    const [isUndoSnackbarShown, setIsUndoSnackbarShown] = useState(false);
    return <>
        <Button onClick={() => setIsDeleteSnackbarShown(true)}>
          Show snackbar
        </Button>
        {isDeleteSnackbarShown && <Snackbar {...args} endAdornment={<Button variant="text" size="small" onClick={() => setIsUndoSnackbarShown(true)}>
                Undo
              </Button>} onClose={() => setIsDeleteSnackbarShown(false)} />}
        {isUndoSnackbarShown && <Snackbar {...args} description="Message returned to the list" link={<Link href="https://telegram.org" target="_blank">
                Open
              </Link>} onClose={() => setIsUndoSnackbarShown(false)}>
            Message restored
          </Snackbar>}
      </>;
  }
} satisfies Story`,...(d=(l=n.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};const E=["Playground"];export{n as Playground,E as __namedExportsOrder,v as default};
