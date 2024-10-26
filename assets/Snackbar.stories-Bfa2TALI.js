import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{r as a}from"./index-CTjT7uj6.js";import{h,s as p}from"./control-BLWnEcik.js";import{S as t}from"./Snackbar-dkHUEB3_.js";import{H as k}from"./WarningIcon-WmplKgkK.js";import{B as i}from"./Button-Cf21KvYA.js";import{L as u}from"./Link-5ayeAWrJ.js";import"./classNames-BjxpnYM-.js";import"./react-BrYeE0c6.js";import"./dayjs.min-CDLQcmce.js";import"./usePlatform-CpmMXCo-.js";import"./Tappable-BlvX034W.js";import"./RootRenderer-CHk-kF8s.js";import"./index-BbmHap-z.js";import"./Typography-CVAv-OXT.js";import"./Spinner-uLugkrF7.js";const _={title:"Overlays/Snackbar",component:t,argTypes:{...h("startAdornment","endAdornment","onClose","link"),...p(["description","children"],"text")}},n={args:{startAdornment:e.jsx(k,{}),description:"Restore the message within 4 seconds",children:"Message deleted",onClose:()=>{}},render:s=>{const[m,r]=a.useState(!1),[S,o]=a.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(i,{onClick:()=>r(!0),children:"Show snackbar"}),m&&e.jsx(t,{...s,endAdornment:e.jsx(i,{variant:"text",size:"small",onClick:()=>o(!0),children:"Undo"}),onClose:()=>r(!1)}),S&&e.jsx(t,{...s,description:"Message returned to the list",link:e.jsx(u,{href:"https://telegram.org",target:"_blank",children:"Open"}),onClose:()=>o(!1),children:"Message restored"})]})}};var c,l,d;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    startAdornment: <HomeIcon />,
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
} satisfies Story`,...(d=(l=n.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};const v=["Playground"];export{n as Playground,v as __namedExportsOrder,_ as default};
