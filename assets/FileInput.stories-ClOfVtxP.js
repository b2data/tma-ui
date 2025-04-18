import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{r as p}from"./index-2yJIXLcc.js";import{F as a}from"./FileInput-B7nmK6rl.js";import{L as c}from"./List-CPa4ftU7.js";import{S as d}from"./Section-CfdpsHoY.js";import{S as u}from"./SectionItem-DlfN-nxZ.js";import"./file-zip-BXERkKO-.js";import"./VisuallyHidden-DpPGOsnD.js";import"./classNames-BjxpnYM-.js";import"./dayjs.min-qj4fShTU.js";import"./usePlatform-CpmMXCo-.js";import"./react-B_12zFKA.js";import"./SectionHeader-DrZwBLtC.js";import"./Typography-C9RDb2oI.js";import"./Divider-By5508MM.js";import"./SectionFooter-CC5bVAZT.js";import"./Tappable-Bi9o3b7s.js";import"./useTimeout-5tW5gS3k.js";const P={title:"Forms/FileInput",component:a},o={render:r=>{const[n,m]=p.useState(null);return t.jsx(a,{multiple:!0,readOnly:!0,onChange:e=>m(e.target.files),...r,children:n&&Array.from(n).map(e=>t.jsx(u,{subtitle:`${e.size} bytes`,children:e.name},e.name))})},decorators:[r=>t.jsx(c,{children:t.jsx(d,{header:"Component includes only logic of input and label",footer:"Listen to the onChange event to get the selected files. You can pass children to display the selected files.",children:t.jsx(r,{})})})]};var s,i,l;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: args => {
    const [files, setFiles] = useState<FileList | null>(null);
    return <FileInput multiple readOnly onChange={event => setFiles(event.target.files)} {...args}>
        {files && Array.from(files).map(file => <SectionItem key={file.name} subtitle={\`\${file.size} bytes\`}>
              {file.name}
            </SectionItem>)}
      </FileInput>;
  },
  decorators: [DecoratorStory => <List>
        <Section header="Component includes only logic of input and label" footer="Listen to the onChange event to get the selected files. You can pass children to display the selected files.">
          <DecoratorStory />
        </Section>
      </List>]
} satisfies Story`,...(l=(i=o.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};const Y=["Playground"];export{o as Playground,Y as __namedExportsOrder,P as default};
