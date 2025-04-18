import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as a}from"./index-2yJIXLcc.js";import{s as p,h}from"./control-BLWnEcik.js";import{S as t}from"./Snackbar-C6VD_Dy3.js";import{A as k}from"./file-zip-BXERkKO-.js";import{B as i}from"./Button-9jESIUtj.js";import{L as u}from"./Link-DPjla0V8.js";import"./classNames-BjxpnYM-.js";import"./react-B_12zFKA.js";import"./dayjs.min-qj4fShTU.js";import"./useTimeout-5tW5gS3k.js";import"./usePlatform-CpmMXCo-.js";import"./RootRenderer-vJxaFXdl.js";import"./index-D-es_Zdh.js";import"./index-Bn05qqr6.js";import"./Typography-C9RDb2oI.js";import"./Spinner-DKZ8EZnv.js";import"./Tappable-Bi9o3b7s.js";const E={title:"Overlays/Snackbar",component:t,argTypes:{...h("startAdornment","endAdornment","onClose","link"),...p(["description","children"],"text")}},n={args:{startAdornment:e.jsx(k,{}),description:"Restore the message within 4 seconds",children:"Message deleted",onClose:()=>{}},render:s=>{const[m,r]=a.useState(!1),[S,o]=a.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(i,{onClick:()=>r(!0),children:"Show snackbar"}),m&&e.jsx(t,{...s,endAdornment:e.jsx(i,{variant:"text",size:"small",onClick:()=>o(!0),children:"Undo"}),onClose:()=>r(!1)}),S&&e.jsx(t,{...s,description:"Message returned to the list",link:e.jsx(u,{href:"https://telegram.org",target:"_blank",children:"Open"}),onClose:()=>o(!1),children:"Message restored"})]})}};var c,l,d;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
} satisfies Story`,...(d=(l=n.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};const R=["Playground"];export{n as Playground,R as __namedExportsOrder,E as default};
