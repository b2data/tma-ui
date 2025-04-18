import{j as y}from"./jsx-runtime-D_zvdyIk.js";import{r as a}from"./index-2yJIXLcc.js";import{c as ve}from"./classNames-BjxpnYM-.js";import{c as De,C as Fe,b as Le}from"./file-zip-BXERkKO-.js";import{c as Q}from"./function-0hL7Y8C6.js";import"./dayjs.min-qj4fShTU.js";import{a as Pe,i as We}from"./floating-ui.utils.dom-C54ba6qF.js";import{F as He}from"./FormInput-BXR-3vMc.js";import{S as Y}from"./SectionItem-DlfN-nxZ.js";import{P as je}from"./Popper-DgbLztRZ.js";import{i as Be}from"./equal-CbjX1LbP.js";import{s as ze,g as Ue}from"./react-B_12zFKA.js";import{a as Ke}from"./useEnsureControl-BaChbUNd.js";import{g as Ge,a as $e}from"./dom-Dk7p2m-W.js";import{T as Xe}from"./Typography-C9RDb2oI.js";import{T as Je}from"./Tappable-Bi9o3b7s.js";import{C as Qe}from"./Chip-BpyGmnBW.js";const h={ENTER:"Enter",TAB:"Tab",ESCAPE:"Escape",BACKSPACE:"Backspace",ARROW_LEFT:"ArrowLeft",ARROW_RIGHT:"ArrowRight",ARROW_UP:"ArrowUp",ARROW_DOWN:"ArrowDown"},Ye=e=>{switch(e){case h.ARROW_UP:case h.ARROW_LEFT:return"left";case h.ARROW_DOWN:case h.ARROW_RIGHT:return"right";default:return}};function Ze(...e){const o=a.useRef(null);return a.useMemo(()=>({get current(){return o.current},set current(t){o.current=t,e.forEach(s=>{s&&ze(t,s)})}}),e)}const et=(e,...o)=>{a.useEffect(()=>{const t=o.some(r=>r&&r.current!==null);if(!document||!t)return()=>{};const s=r=>{const c=r.target;Pe(c)&&o.some(l=>l&&l.current&&l.current.contains(c))||e(r)};return document.addEventListener("click",s,{passive:!0,capture:!0}),()=>document.removeEventListener("click",s,!0)},[document,e,...o])},tt="_wrapper_13rmb_1",nt="_chevron_13rmb_9",pe={wrapper:tt,chevron:nt},ot="_wrapper_1381s_1",at="_empty_1381s_15",lt="_option_1381s_19",rt="_selectedIcon_1381s_24",U={wrapper:ot,empty:at,option:lt,selectedIcon:rt},it="highlight",st="Nothing found",fe="next",me="prev",be=e=>e&&"actionText"in e,we=e=>e&&"placeholder"in e,Z=e=>be(e)||we(e),ee=e=>y.jsx(Y,{...e,endAdornment:e.selected?y.jsx(De,{size:20,className:U.selectedIcon}):void 0});try{ee.displayName="renderOptionDefault",ee.__docgenInfo={description:"",displayName:"renderOptionDefault",props:{subhead:{defaultValue:null,description:"Content displayed above the main content as a subheading",name:"subhead",required:!1,type:{name:"ReactNode"}},children:{defaultValue:null,description:"Main content displayed as a header",name:"children",required:!1,type:{name:"ReactNode"}},hint:{defaultValue:null,description:"Content displayed alongside the header as a hint",name:"hint",required:!1,type:{name:"ReactNode"}},titleBadge:{defaultValue:null,description:"A badge component to be displayed next to the header",name:"titleBadge",required:!1,type:{name:"ReactElement<BadgeProps, string | JSXElementConstructor<any>>"}},subtitle:{defaultValue:null,description:"Content displayed below the header as a subtitle",name:"subtitle",required:!1,type:{name:"ReactNode"}},description:{defaultValue:null,description:"Additional description displayed below the subtitle",name:"description",required:!1,type:{name:"ReactNode"}},startAdornment:{defaultValue:null,description:"Content or elements to be displayed on the left side",name:"startAdornment",required:!1,type:{name:"ReactNode"}},endAdornment:{defaultValue:null,description:"Content or elements to be displayed on the right side",name:"endAdornment",required:!1,type:{name:"ReactNode"}},Component:{defaultValue:null,description:"Custom component or HTML tag to be used as the root element, div by default",name:"Component",required:!1,type:{name:"ElementType"}},hovered:{defaultValue:null,description:"Controls the hover state of the component externally, useful for keyboard navigation",name:"hovered",required:!1,type:{name:"boolean"}},multiline:{defaultValue:null,description:"Allows for multiline content without truncation",name:"multiline",required:!1,type:{name:"boolean"}},dense:{defaultValue:null,description:"Reduce padding in the item",name:"dense",required:!1,type:{name:"boolean"}},interactiveAnimation:{defaultValue:null,description:"Animation that will be shown when component will be tapped.",name:"interactiveAnimation",required:!1,type:{name:"enum",value:[{value:'"opacity"'},{value:'"background"'}]}}}}}catch{}const te=a.forwardRef(({dropdownAriaId:e,options:o,onMouseLeave:t,targetRef:s,addOptionFromInput:r,setFocusedOptionIndex:c,renderOption:v=ee,focusedOption:l,value:p,setOptionNode:m,setOpened:g,closeDropdownAfterSelect:b,addOption:w,focusedOptionIndex:O,clearInput:_},I)=>y.jsx(je,{id:e,ref:I,targetRef:s,onMouseLeave:t,autoUpdateOnTargetResize:!0,role:"listbox",placement:"bottom",sameWidth:!0,className:U.wrapper,children:o.map((d,i)=>we(d)?y.jsx(Y,{readOnly:!0,className:U.empty,children:d.placeholder},"empty"):be(d)?y.jsx(Y,{onMouseDown:r,onMouseEnter:()=>c(i),hovered:O===i,children:d.actionText},"new-options"):y.jsx(a.Fragment,{children:v({className:U.option,children:d.label,description:d.description,startAdornment:d.startAdornment,multiline:d.multiline??!0,hovered:l?d.value===l.value:!1,disabled:d.disabled,selected:p.findIndex(n=>n.value===d.value)!==-1,ref:n=>m(i,n),onMouseDown:n=>{n.defaultPrevented||d.disabled||(b&&g(!1),w(d),_())},onMouseEnter:()=>c(i)})},`${d.value}-${d.label}`))}));try{te.displayName="MultiSelectDropdown",te.__docgenInfo={description:"Renders the dropdown menu for the multiselect input, including all options and managing interactions such as selection, focus, and mouse events.\nUtilizes the `Popper` component for positioning relative to the input field.",displayName:"MultiSelectDropdown",props:{value:{defaultValue:null,description:"Array of selected options.",name:"value",required:!0,type:{name:"MultiSelectOption[]"}},targetRef:{defaultValue:null,description:"Reference to the target element the dropdown is associated with.",name:"targetRef",required:!0,type:{name:"RefObject<HTMLElement | null>"}},dropdownAriaId:{defaultValue:null,description:"Accessibility ID for the dropdown.",name:"dropdownAriaId",required:!0,type:{name:"string"}},focusedOption:{defaultValue:null,description:"Currently focused option within the dropdown.",name:"focusedOption",required:!0,type:{name:"MultiSelectOption | null"}},setOptionNode:{defaultValue:null,description:"Function to register a DOM node with an option index.",name:"setOptionNode",required:!0,type:{name:"(index: number, node: HTMLElement) => void"}},setOpened:{defaultValue:null,description:"Function to control the open state of the dropdown.",name:"setOpened",required:!0,type:{name:"(opened: boolean) => void"}},focusedOptionIndex:{defaultValue:null,description:"Index of the currently focused option.",name:"focusedOptionIndex",required:!0,type:{name:"number | null"}},setFocusedOptionIndex:{defaultValue:null,description:"Function to update the index of the focused option.",name:"setFocusedOptionIndex",required:!0,type:{name:"(index: number) => void"}},addOptionFromInput:{defaultValue:null,description:"Function to add an option derived from the input value.",name:"addOptionFromInput",required:!0,type:{name:"() => void"}},onMouseLeave:{defaultValue:null,description:"Mouse leave event handler for the dropdown.",name:"onMouseLeave",required:!0,type:{name:"(event: MouseEvent<HTMLDivElement, MouseEvent>) => void"}},addOption:{defaultValue:null,description:"Function to add a selected option.",name:"addOption",required:!0,type:{name:"(option: MultiSelectOption) => void"}},clearInput:{defaultValue:null,description:"Function to clear the input value.",name:"clearInput",required:!0,type:{name:"() => void"}},renderOption:{defaultValue:{value:`(props: SectionItemProps) => {
  return (
    <SectionItem
      {...props}
      endAdornment={
        props.selected ? (
          <CheckedIcon size={20} className={styles.selectedIcon} />
        ) : undefined
      }
    />
  );
}`},description:"Custom render function for each option. Defaults to a basic implementation.",name:"renderOption",required:!1,type:{name:"ForwardRefExoticComponent<SectionItemProps & RefAttributes<unknown>>"}},closeDropdownAfterSelect:{defaultValue:null,description:"Whether to close the dropdown after selecting an option.",name:"closeDropdownAfterSelect",required:!1,type:{name:"boolean"}},options:{defaultValue:null,description:"Array of options available for selection.",name:"options",required:!1,type:{name:"MultiSelectOption[]"}}}}}catch{}function ut(...e){const[o="",t]=e;if((t==null?void 0:t.label)===void 0)return!1;const s=o.trim().toLocaleLowerCase(),r=Ue(t.label).toLocaleLowerCase();if(r.startsWith(s))return!0;const v=((l="",p="")=>{const m=[];let g=l.indexOf(p);for(;g!==-1;)m.push(g),g=l.indexOf(p,g+1);return m})(r,s);return v.length===0?!1:v.some(l=>l===0||!new RegExp("\\p{L}","u").test(r[l-1]))}const K=(e,o)=>({value:e,label:o}),dt=e=>typeof e=="object"&&"value"in e,ct=(e,o="")=>{try{const t=e,s=t.value;t.value=o;const r=t._valueTracker;r==null||r.setValue(s);const c=new Event("input",{bubbles:!0});e.dispatchEvent(c)}catch{}},he=({value:e,inputValue:o="",emptyText:t,creatable:s,filterFn:r,options:c,selectedBehavior:v})=>{const l=r?c.filter(p=>r(o,p)):c;if(l.length===0)return o!==""&&typeof s=="function"?[{...K("",""),actionText:s(o)}]:[{...K("",""),placeholder:t}];if(v==="hide"){const p=e.map(m=>m.value);return l.filter(m=>Z(m)?!1:!p.includes(m.value))}return l},pt=({disabled:e,value:o,onChange:t,defaultValue:s=[],inputValue:r="",onInputChange:c})=>{const[v,l]=Ke({value:o,disabled:e,defaultValue:s,onChange:t}),p=a.useRef(null),[m,g]=a.useState(r),b=a.useCallback((i,n)=>{let f=o;l(R=>{const k=dt(i),q=k?K(i.value,i.label):K(i,typeof i=="string"?i:""),E=R.filter(T=>q.value!==T.value);return n&&E.push(k?{...i,...q}:q),f=E,E}),f&&(t==null||t(f))},[l]),w=a.useCallback(()=>{ct(p.current,"")},[p]),O=a.useCallback(i=>b(i,!0),[b]),_=a.useCallback(i=>{b(i,!1)},[b]),I=a.useCallback(i=>{const n=i.trim();n&&(O(n),w())},[O,w]),d=a.useCallback(i=>{g(i.currentTarget.value),c==null||c(i)},[c]);return{value:v,addOption:O,addOptionFromInput:I,removeOption:_,inputRef:p,inputValue:m,onInputChange:d,clearInput:w}},ft=({disabled:e,onOpen:o,onClose:t,value:s,defaultValue:r,onChange:c,inputValue:v="",onInputChange:l,creatable:p,emptyText:m=st,filterFn:g=ut,selectedBehavior:b=it,options:w=[]})=>{const{value:O,inputValue:_,onInputChange:I,...d}=pt({value:s,defaultValue:r,onChange:c,inputValue:v,onInputChange:l,disabled:e}),[i,n]=a.useState(!1),[f,R]=a.useState(!1),[k,q]=a.useState(()=>f?he({value:O,inputValue:_,emptyText:m,creatable:p,filterFn:g,options:w,selectedBehavior:b}):[]),[E,T]=a.useState(0),[P,x]=a.useState(null),N=V=>{R(V),V&&o&&o(),!V&&t&&t()},F=a.useCallback(V=>{I(V),f&&(N(!0),T(0))},[I,f]);return a.useEffect(()=>{f&&q(V=>{const H=he({value:O,inputValue:_,emptyText:m,creatable:p,filterFn:g,options:w,selectedBehavior:b});return Be(V,H)?V:H})},[f,O,_,w,p,b,g]),{...d,value:O,inputValue:_,onInputChange:F,options:k,focused:i,setFocused:n,opened:f,setOpened:N,focusedOption:P,focusedOptionIndex:E,setFocusedOption:x,setFocusedOptionIndex:T}},mt="_wrapper_qm04n_1",ht="_chip_qm04n_14",yt="_input_qm04n_19",vt="_closeIcon_qm04n_48",z={wrapper:mt,chip:ht,input:yt,"wrapper--withPlaceholder":"_wrapper--withPlaceholder_qm04n_43",closeIcon:vt},ne=e=>{const{...o}=e;return y.jsx(Qe,{mode:"mono",...o})},bt=(e,o)=>{const t=o.getAttribute("value");return e.find(s=>s.value===t)};try{ne.displayName="renderChipDefault",ne.__docgenInfo={description:"",displayName:"renderChipDefault",props:{mode:{defaultValue:null,description:"Defines the visual style of the chip, affecting its background, border, and shadow.",name:"mode",required:!1,type:{name:"enum",value:[{value:'"elevated"'},{value:'"mono"'},{value:'"outline"'}]}},size:{defaultValue:null,description:"Defines the visual size of the chip.",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'}]}},startAdornment:{defaultValue:null,description:"Content or component to be placed before the main text, typically an icon or avatar.",name:"startAdornment",required:!1,type:{name:"ReactNode"}},endAdornment:{defaultValue:null,description:"Content or component to be placed after the main text, such as an icon indicating an action.",name:"endAdornment",required:!1,type:{name:"ReactNode"}},children:{defaultValue:null,description:"The main text content of the chip.",name:"children",required:!1,type:{name:"ReactNode"}},Component:{defaultValue:null,description:"The component type to render, allowing for semantic HTML use. Defaults to 'div'.",name:"Component",required:!1,type:{name:"ElementType"}},interactiveAnimation:{defaultValue:null,description:"Animation that will be shown when component will be tapped.",name:"interactiveAnimation",required:!1,type:{name:"enum",value:[{value:'"opacity"'},{value:'"background"'}]}}}}}catch{}const oe=a.forwardRef(({inputRef:e,className:o,chipsValue:t,onAddChipOption:s,onRemoveChipOption:r,renderChip:c=ne,placeholder:v,disabled:l,readOnly:p,...m},g)=>{const b=Ze(g),w=t.length,O=w===0,_=l||p,I=n=>{var P;const f=n.target,R=e.current;if(n.defaultPrevented||!R||!We(f))return;const k=w-1,q=R.value,E=f===R,T=q==="";switch(n.key){case h.ENTER:{E&&!T&&(n.preventDefault(),s(q));break}case h.BACKSPACE:{if(w){const x=E&&T?t[k]:bt(t,f);if(!x)return;n.preventDefault(),(P=e.current)==null||P.focus(),r(x)}break}case h.ARROW_UP:case h.ARROW_LEFT:case h.ARROW_DOWN:case h.ARROW_RIGHT:{if(!w||!b.current)break;const x=R.selectionStart===0;if(!T&&!x)break;n.preventDefault();let N=null;const F=Ye(n.key);E&&(n.key===h.ARROW_UP||n.key===h.ARROW_LEFT)?N=Ge(b.current.children,k):F&&(N=$e(f,F)),N&&N.focus();break}}},d=(n,f)=>{n.preventDefault(),n.stopPropagation(),r(f)},i=()=>{!(document.activeElement===e.current)&&e.current&&e.current.focus()};return y.jsxs("div",{ref:b,className:ve(z.wrapper,O&&z["wrapper--withPlaceholder"],o),onClick:_?void 0:i,role:"listbox","aria-orientation":"horizontal","aria-disabled":l,"aria-readonly":p,onKeyDown:_?void 0:I,children:[t.map((n,f)=>y.jsx(a.Fragment,{children:c({children:n.label,className:z.chip,value:n.value,tabIndex:-1,startAdornment:n.startAdornment,endAdornment:y.jsx(Je,{Component:"div",interactiveAnimation:"opacity",onClick:R=>d(R,n),className:z.closeIcon,children:y.jsx(Fe,{size:16})}),role:"option","aria-selected":!0,"aria-posinset":f+1,"aria-setsize":w})},`${typeof n.value}-${n.label}`)),y.jsx(Xe,{variant:"subHeadline",ref:e,"aria-autocomplete":"list",autoCapitalize:"none",autoComplete:"off",autoCorrect:"off",spellCheck:!1,...m,Component:"input",type:"text",className:z.input,disabled:l,readOnly:p,placeholder:O?v:void 0})]})});try{oe.displayName="MultiSelectBase",oe.__docgenInfo={description:"Renders the base layout of the multiselect including the chips (selected options) and the input field.",displayName:"MultiSelectBase",props:{renderChip:{defaultValue:{value:`(props: ChipProps) => {
  const { ...rest } = props;
  return <Chip mode="mono" {...rest} />;
}`},description:"Custom function to render Chip component.",name:"renderChip",required:!1,type:{name:"((props: ChipProps) => ReactElement<unknown, string | JSXElementConstructor<any>>)"}},inputRef:{defaultValue:null,description:"Ref to the input element within the multiselect base.",name:"inputRef",required:!0,type:{name:"RefObject<HTMLInputElement | null>"}},chipsValue:{defaultValue:null,description:"Array of selected options (chips).",name:"chipsValue",required:!0,type:{name:"MultiSelectOption[]"}},onAddChipOption:{defaultValue:null,description:"Callback function to add an option based on text input.",name:"onAddChipOption",required:!0,type:{name:"(optionText: string) => void"}},onRemoveChipOption:{defaultValue:null,description:"Callback function to remove a selected chip.",name:"onRemoveChipOption",required:!0,type:{name:"(option: MultiSelectOption) => void"}}}}}catch{}const ye=a.forwardRef(({header:e,startAdornment:o,endAdornment:t,status:s,wrapperProps:r,className:c,disabled:v,readOnly:l,onOpen:p,onClose:m,options:g,closeDropdownAfterSelect:b=!1,selectedBehavior:w,emptyText:O,creatable:_,filterFn:I,value:d=[],defaultValue:i,inputValue:n,renderChip:f,renderOption:R,onInputChange:k,onChange:q,onFocus:E,onBlur:T,onKeyDown:P,...x},N)=>{const{value:F,addOptionFromInput:V,addOption:H,removeOption:ge,inputRef:Ce,inputValue:ae,clearInput:le,onInputChange:Oe,focused:_e,setFocused:re,options:j,opened:S,setOpened:M,focusedOption:Re,focusedOptionIndex:D,setFocusedOption:G,setFocusedOptionIndex:L}=ft({value:d,defaultValue:i,onChange:q,inputValue:n,onInputChange:k,options:g,emptyText:O,creatable:_,filterFn:I,selectedBehavior:w,disabled:v,onOpen:p,onClose:m}),ie=a.useRef(null),se=a.useRef(null),ue=a.useId(),$=a.useRef(null),Ae=()=>{re(!0),l||(M(!0),L(null))},Ee=u=>{re(!1),!u.defaultPrevented&&!_&&u.preventDefault()},de=a.useRef([]).current,Ve=(u,A=!1)=>{const C=$.current,W=de[u];if(!W||!C)return;const X=C.offsetHeight,{scrollTop:ce}=C,B=W.offsetTop,J=W.offsetHeight;A?C.scrollTop=B-X/2+J/2:B+J>X+ce?C.scrollTop=B-X+J:B<ce&&(C.scrollTop=B)},Ie=(u,A)=>{let C=u;const{length:W}=j;u<0?C=W-1:u>=W&&(C=0),C!==A&&(Ve(C),L(C))},qe=(u,A)=>{let C=u===null?-1:u;A===fe&&(C+=1),A===me&&(C-=1),Ie(C,D)},Te=u=>{if(!(u.defaultPrevented||l))switch(u.key){case h.ARROW_UP:case h.ARROW_DOWN:if(u.preventDefault(),S){qe(D,u.key===h.ARROW_UP?me:fe);return}M(!0),L(0);break;case h.ENTER:{if(!S||(_||u.preventDefault(),D===null))break;const A=j[D];if(!A||Z(A))break;u.preventDefault(),H(A),L(null),le(),b&&M(!1);break}case h.ESCAPE:case h.TAB:S&&M(!1);break}};a.useEffect(()=>{if(D===null){G(null);return}const u=j[D];u&&!Z(u)&&G(u)},[j,D,G]);const xe=a.useCallback(()=>{L(null)},[L]),Se=()=>{l||M(!S)},ke=a.useCallback(()=>{M(!1)},[M]),Ne=(u,A)=>{de[u]=A};et(ke,S?se:null,S?$:null);const Me=s||(S||_e?"focused":"default");return y.jsxs(He,{ref:N,labelRef:ie,header:e,startAdornment:o,endAdornment:y.jsxs(y.Fragment,{children:[t,y.jsx(Le,{"aria-hidden":!0,onClick:Se,className:pe.chevron,style:{transform:S?"rotate(180deg)":"rotate(0)"}})]}),status:Me,disabled:v,wrapperProps:r,required:x.required,helperText:x.helperText,className:ve(pe.wrapper,c),children:[y.jsx(oe,{...x,ref:se,onAddChipOption:V,onRemoveChipOption:ge,renderChip:f,chipsValue:F,value:ae,inputRef:Ce,onChange:Oe,onFocus:Q(Ae,E),onBlur:Q(Ee,T),onKeyDown:Q(Te,P),role:"combobox","aria-expanded":S,"aria-controls":ue,"aria-haspopup":"listbox",readOnly:l,disabled:v}),S&&y.jsx(te,{ref:$,dropdownAriaId:ue,options:j,onMouseLeave:xe,targetRef:ie,addOptionFromInput:()=>V(ae),setFocusedOptionIndex:L,renderOption:R,focusedOption:Re,value:F,setOptionNode:Ne,setOpened:M,closeDropdownAfterSelect:b,addOption:H,clearInput:le,focusedOptionIndex:D})]})});try{ye.displayName="MultiSelect",ye.__docgenInfo={description:`A comprehensive component for rendering a multiselect input field with customizable options, dropdown behaviors, and chip display.
It integrates functionality for selecting multiple options, searching, and even creating new options based on user input.`,displayName:"MultiSelect",props:{options:{defaultValue:null,description:"The `options` property defines the available options within the multiselect dropdown.\nEach option is represented as an object conforming to the `MultiSelectOption` structure,\nwhich typically includes properties like `value` (the option's value) and `label` (the human-readable text associated with the option).",name:"options",required:!0,type:{name:"MultiSelectOption[]"}},status:{defaultValue:null,description:"Defines the visual state of the form input (e.g., error, focused).",name:"status",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"error"'},{value:'"focused"'}]}},header:{defaultValue:null,description:"Optional header content, displayed above the form input on `base` platform.",name:"header",required:!1,type:{name:"ReactNode"}},startAdornment:{defaultValue:null,description:"Content to be displayed before the form input, such as icons or labels.",name:"startAdornment",required:!1,type:{name:"ReactNode"}},endAdornment:{defaultValue:null,description:"Content to be displayed after the form input, often used for action icons or additional information.",name:"endAdornment",required:!1,type:{name:"ReactNode"}},wrapperProps:{defaultValue:null,description:"Additional class name for the root element.",name:"wrapperProps",required:!1,type:{name:"HTMLAttributes<HTMLDivElement>"}},helperText:{defaultValue:null,description:"Helper text",name:"helperText",required:!1,type:{name:"ReactNode"}},closeDropdownAfterSelect:{defaultValue:{value:"false"},description:"Whether to close the dropdown after selecting an option.",name:"closeDropdownAfterSelect",required:!1,type:{name:"boolean"}},renderOption:{defaultValue:null,description:"Custom render function for each option. Defaults to a basic implementation.",name:"renderOption",required:!1,type:{name:"ForwardRefExoticComponent<SectionItemProps & RefAttributes<unknown>>"}},defaultValue:{defaultValue:null,description:"The default value(s) for the multiselect if `value` is uncontrolled.",name:"defaultValue",required:!1,type:{name:"MultiSelectOption[]"}},onChange:{defaultValue:null,description:"Callback fired when the selected options change.",name:"onChange",required:!1,type:{name:"((options: MultiSelectOption[]) => void)"}},value:{defaultValue:null,description:"The currently selected options.",name:"value",required:!1,type:{name:"MultiSelectOption[]"}},filterFn:{defaultValue:null,description:"Custom function to filter options based on the input value.",name:"filterFn",required:!1,type:{name:"false | FilterFn"}},onInputChange:{defaultValue:null,description:"Callback fired when the input value changes.",name:"onInputChange",required:!1,type:{name:"((event: ChangeEvent<HTMLInputElement>) => void)"}},inputValue:{defaultValue:null,description:"The current value of the input field, for controlling component behavior.",name:"inputValue",required:!1,type:{name:"string"}},selectedBehavior:{defaultValue:null,description:"Determines how selected options are treated: either hidden from the list or highlighted within it.",name:"selectedBehavior",required:!1,type:{name:"enum",value:[{value:'"hide"'},{value:'"highlight"'}]}},emptyText:{defaultValue:null,description:"Text displayed when no options are available or match the filter criteria.",name:"emptyText",required:!1,type:{name:"string"}},creatable:{defaultValue:null,description:"Enables the creation of new options that are not in the initial list.",name:"creatable",required:!1,type:{name:"((inputValue: string) => void)"}},onOpen:{defaultValue:null,description:"Callback fired when the dropdown is opened.",name:"onOpen",required:!1,type:{name:"(() => void)"}},onClose:{defaultValue:null,description:"Callback fired when the dropdown is closed.",name:"onClose",required:!1,type:{name:"(() => void)"}},renderChip:{defaultValue:null,description:"Custom function to render Chip component.",name:"renderChip",required:!1,type:{name:"((props: ChipProps) => ReactElement<unknown, string | JSXElementConstructor<any>>)"}}}}}catch{}export{ye as M};
