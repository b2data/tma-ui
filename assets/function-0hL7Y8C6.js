const c=(...t)=>(...o)=>t.filter(n=>typeof n=="function").forEach(n=>n(...o));function i(t){return typeof t=="function"}export{c,i};
