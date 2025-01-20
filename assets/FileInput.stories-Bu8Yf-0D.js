import{j as t}from"./jsx-runtime-DR9Q75dM.js";import{r as p}from"./index-DRjF_FHU.js";import{F as a}from"./FileInput-BPuR28sz.js";import{L as c}from"./List-QmkSd9S4.js";import{S as d}from"./Section-CJQk1qCv.js";import{S as u}from"./SectionItem-SVUuVvpu.js";import"./file-zip-B9x0q0B1.js";import"./VisuallyHidden-CLouwpBC.js";import"./classNames-BjxpnYM-.js";import"./dayjs.min-B-QGziwU.js";import"./usePlatform-CpmMXCo-.js";import"./react-C2pAPbtc.js";import"./SectionHeader-Do5elWfy.js";import"./Typography-CrhEa1Is.js";import"./Divider-DM0Fmy-m.js";import"./SectionFooter-ByBZRHt-.js";import"./Tappable-CAJESwKs.js";import"./useTimeout-BRhOMhk3.js";const Y={title:"Forms/FileInput",component:a},o={render:r=>{const[n,m]=p.useState(null);return t.jsx(a,{multiple:!0,onChange:e=>m(e.target.files),...r,children:n&&Array.from(n).map(e=>t.jsx(u,{subtitle:`${e.size} bytes`,children:e.name},e.name))})},decorators:[r=>t.jsx(c,{children:t.jsx(d,{header:"Component includes only logic of input and label",footer:"Listen to the onChange event to get the selected files. You can pass children to display the selected files.",children:t.jsx(r,{})})})]};var s,i,l;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
