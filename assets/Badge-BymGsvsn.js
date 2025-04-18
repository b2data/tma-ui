import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{c as d}from"./classNames-BjxpnYM-.js";import"./file-zip-BXERkKO-.js";import{h as m}from"./react-B_12zFKA.js";import{T as o}from"./Typography-C9RDb2oI.js";const e={"wrapper--text":"_wrapper--text_ks4hq_1","wrapper--large":"_wrapper--large_ks4hq_18","wrapper--dot":"_wrapper--dot_ks4hq_23","wrapper--primary":"_wrapper--primary_ks4hq_33","wrapper--critical":"_wrapper--critical_ks4hq_38","wrapper--secondary":"_wrapper--secondary_ks4hq_43","wrapper--gray":"_wrapper--gray_ks4hq_48","wrapper--white":"_wrapper--white_ks4hq_53"},y={text:e["wrapper--text"],dot:e["wrapper--dot"]},u={primary:e["wrapper--primary"],critical:e["wrapper--critical"],secondary:e["wrapper--secondary"],gray:e["wrapper--gray"],white:e["wrapper--white"]},i=({type:a="text",mode:l="primary",large:t,className:n,children:p,...c})=>{const s=a==="dot";return r.jsx("span",{className:d(e.wrapper,y[a],u[l],!s&&t&&e["wrapper--large"],n),...c,children:m(p)&&!s&&r.jsxs(r.Fragment,{children:[t&&r.jsx(o,{variant:"subHeadline",small:!0,Component:"span",children:p}),!t&&r.jsx(o,{variant:"caption",small:!0,children:p})]})})};try{i.displayName="Badge",i.__docgenInfo={description:"The `Badge` component renders a small numeric or dot indicator, typically used for notifications, statuses, or counts.\nIt supports several visual modes for different contexts (e.g., critical, primary) and can be sized normally or enlarged.",displayName:"Badge",props:{type:{defaultValue:{value:"text"},description:"The visual style of the badge: 'text' displays the content, 'dot' shows a simple dot.",name:"type",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"dot"'}]}},mode:{defaultValue:{value:"primary"},description:"The color scheme of the badge, affecting its background and text color.",name:"mode",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"critical"'},{value:'"secondary"'},{value:'"gray"'},{value:'"white"'}]}},large:{defaultValue:null,description:"Increases the size of the badge. Applicable only when `type` is 'number'.",name:"large",required:!1,type:{name:"boolean"}}}}}catch{}export{i as B};
