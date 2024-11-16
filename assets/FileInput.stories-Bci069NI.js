import{j as t}from"./jsx-runtime-DR9Q75dM.js";import{r as p}from"./index-DRjF_FHU.js";import{F as a}from"./FileInput-4MYjAiq5.js";import{L as c}from"./List-BVxYyspE.js";import{S as d}from"./Section-BoRpuEpk.js";import{S as u}from"./SectionItem-DaSia-lo.js";import"./WarningIcon-C7j4JNMz.js";import"./VisuallyHidden-DVDVm8UN.js";import"./classNames-BjxpnYM-.js";import"./dayjs.min-B-QGziwU.js";import"./usePlatform-CpmMXCo-.js";import"./react-C2pAPbtc.js";import"./SectionHeader-CsVZYXXU.js";import"./Typography-tCI8f8sN.js";import"./Divider-D1dDgo39.js";import"./SectionFooter-CWFWA3TC.js";import"./Tappable-HVuun7D-.js";import"./useTimeout-BRhOMhk3.js";const Y={title:"Forms/FileInput",component:a},o={render:r=>{const[n,m]=p.useState(null);return t.jsx(a,{multiple:!0,onChange:e=>m(e.target.files),...r,children:n&&Array.from(n).map(e=>t.jsx(u,{subtitle:`${e.size} bytes`,children:e.name},e.name))})},decorators:[r=>t.jsx(c,{children:t.jsx(d,{header:"Component includes only logic of input and label",footer:"Listen to the onChange event to get the selected files. You can pass children to display the selected files.",children:t.jsx(r,{})})})]};var s,i,l;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: args => {
    const [files, setFiles] = useState<FileList | null>(null);
    return <FileInput multiple onChange={event => setFiles(event.target.files)} {...args}>
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
} satisfies Story`,...(l=(i=o.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};const _=["Playground"];export{o as Playground,_ as __namedExportsOrder,Y as default};
