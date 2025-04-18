import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as a}from"./index-2yJIXLcc.js";import{c as _}from"./classNames-BjxpnYM-.js";import"./file-zip-BXERkKO-.js";import{i as p}from"./react-B_12zFKA.js";import"./dayjs.min-qj4fShTU.js";import{u as b}from"./usePlatform-CpmMXCo-.js";import{S}from"./SectionHeader-DrZwBLtC.js";import{D as g}from"./Divider-By5508MM.js";import{S as x}from"./SectionFooter-CC5bVAZT.js";const w="_bodyWithHeader_19py1_5",N="_body_19py1_5",t={"wrapper--base":"_wrapper--base_19py1_1",bodyWithHeader:w,"wrapper--ios":"_wrapper--ios_19py1_10",body:N},c=({Component:s="section",header:o,footer:r,className:l,children:i,...m})=>{const h=b(),f=p(o)?e.jsx(S,{header:o}):o,u=p(r)?e.jsx(x,{children:r}):r,n=a.useMemo(()=>a.Children.toArray(i).filter(Boolean),[i]);return e.jsxs(s,{className:_(t.wrapper,h==="ios"?t["wrapper--ios"]:t["wrapper--base"],l),...m,children:[e.jsxs("div",{className:t.bodyWithHeader,children:[f,e.jsx("div",{className:t.body,children:n.map((y,d)=>e.jsxs(a.Fragment,{children:[y,d<n.length-1&&e.jsx(g,{className:t.divider})]},d))})]}),u]})};try{c.displayName="Section",c.__docgenInfo={description:`Organizes content into distinct sections with optional headers and footers. It automatically wraps
primitive header and footer content in the appropriate sub-components, and inserts dividers between
children when rendering multiple elements.`,displayName:"Section",props:{Component:{defaultValue:{value:"section"},description:"Custom component or HTML tag to be used as the root element, `section` by default",name:"Component",required:!1,type:{name:"ElementType"}},header:{defaultValue:null,description:"The content for the section header. If a string is passed, `SectionHeader` is automatically used.\nFor more control or a large title, use `<SectionHeader large header={headerText}>Right BTN</SectionHeader>`.",name:"header",required:!1,type:{name:"ReactNode"}},footer:{defaultValue:null,description:"The content for the section footer. If a string is passed, `SectionFooter` is automatically used.\nFor a centered footer, use `<SectionFooter centered>{footerText}</SectionFooter>`.",name:"footer",required:!1,type:{name:"ReactNode"}}}}}catch{}export{c as S};
