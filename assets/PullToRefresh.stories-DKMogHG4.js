import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{P as i}from"./PullToRefresh-DlthMogr.js";import{r as d}from"./index-2yJIXLcc.js";import"./dayjs.min-qj4fShTU.js";import"./useDeepEqualMemo-BTYFVHQ1.js";import"./file-zip-BXERkKO-.js";import"./Spinner-DKZ8EZnv.js";import"./classNames-BjxpnYM-.js";import"./usePlatform-CpmMXCo-.js";const y={title:"Misc/PullToRefresh",component:i,argTypes:{getScrollable:{description:"Function to get scrollable component",table:{defaultValue:{summary:"() => document.body"}}},refresh:{description:"Async callback for refresh"},threshold:{description:"Threshold to call refresh",type:"number",table:{defaultValue:{summary:"150"}}},onStateChange:{description:"Callback fires when state changed. PullToRefreshState in [pulling,aborting,reached,refreshing,restoring,null]"}}},r={args:{refresh:()=>new Promise(n=>{setTimeout(n,2e3)})},render:n=>{const t=d.useRef(null);return e.jsx("div",{ref:t,style:{height:300,border:"1px solid",overflowY:"auto"},children:e.jsxs(i,{...n,getScrollable:()=>t.current,children:[e.jsx("div",{style:{padding:100},children:"Content 1"}),e.jsx("div",{style:{padding:100},children:"Content 2"}),e.jsx("div",{style:{padding:100},children:"Content 3"}),e.jsx("div",{style:{padding:100},children:"Content 4"})]})})}};var o,s,l;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    refresh: () => {
      return new Promise(resolve => {
        // here to fetch the data and rerender the contents.
        setTimeout(resolve, 2000);
      });
    }
  },
  render: props => {
    const ref = useRef<HTMLDivElement | null>(null);
    return <div ref={ref} style={{
      height: 300,
      border: "1px solid",
      overflowY: "auto"
    }}>
        <PullToRefresh {...props} getScrollable={() => ref.current as HTMLDivElement}>
          <div style={{
          padding: 100
        }}>Content 1</div>
          <div style={{
          padding: 100
        }}>Content 2</div>
          <div style={{
          padding: 100
        }}>Content 3</div>
          <div style={{
          padding: 100
        }}>Content 4</div>
        </PullToRefresh>
      </div>;
  }
} satisfies Story`,...(l=(s=r.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};const b=["Playground"];export{r as Playground,b as __namedExportsOrder,y as default};
