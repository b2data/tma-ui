import{j as t}from"./jsx-runtime-DR9Q75dM.js";import{r as i}from"./index-DRjF_FHU.js";import{c as m}from"./classNames-BjxpnYM-.js";import"./dayjs.min-B-QGziwU.js";import{u as h}from"./usePlatform-CpmMXCo-.js";const _="_wrapper_nc96v_1",g="_body_nc96v_16",u="_slider_nc96v_29",e={wrapper:_,body:g,slider:u,"wrapper--ios":"_wrapper--ios_nc96v_39"},l=({className:r,children:n,...d})=>{const c=h(),o=i.Children.toArray(n),s=o.findIndex(a=>i.isValidElement(a)&&a.props.selected),p=`translateX(${100*s}%)`;return t.jsx("div",{role:"tablist",className:m(e.wrapper,c==="ios"&&e["wrapper--ios"],r),...d,children:t.jsxs("div",{className:e.body,children:[s>-1&&t.jsx("div",{"aria-hidden":!0,className:e.slider,style:{width:`${100/o.length}%`,transform:p}}),n]})})};try{l.displayName="SegmentedControl",l.__docgenInfo={description:`The SegmentedControl component renders a set of options as a segmented control, commonly used for toggling between views or filtering content.
It is designed to adapt its appearance based on the platform, offering a native look and feel.
This component supports interactivity through selection, visually indicating the currently active option.`,displayName:"SegmentedControl",props:{children:{defaultValue:null,description:"Children should be SegmentedControlItem components to render within the control.",name:"children",required:!0,type:{name:"ReactElement<SegmentedControlItemProps, string | JSXElementConstructor<any>>[]"}}}}}catch{}export{l as S};