if (self.CavalryLogger) { CavalryLogger.start_js(["VHCkC"]); }

__d("MessengerGroupCreateDialogReact.bs",["bs_js_boolean","ReasonReact.bs","MessengerGroupCreateDialog.react"],(function a(b,c,d,e,f,g){"use strict";function h(i,j,k,l){return c("ReasonReact.bs").wrapJsForReason(c("MessengerGroupCreateDialog.react"),{entryPoint:i,isShown:c("bs_js_boolean").to_js_boolean(j),onClose:k},l)}g.make=h}),null);
__d("ChatSidebarGroupCreateButtonReact.bs",["cx","fbt","bs_block","bs_curry","React","LinkReact.bs","ReasonReact.bs","joinClasses","bs_js_primitive","MessengerGroupCreateDialogReact.bs","MessengerGroupCreationEntryPoint"],(function a(b,c,d,e,f,g,h,i){"use strict";__p&&__p();var j=c("ReasonReact.bs").reducerComponent("ChatSidebarGroupCreateButtonReact"),k=c("MessengerGroupCreationEntryPoint").GCF_CHAT_SIDEBAR;function l(o){var p=o[2];if(p!==0)return c("ReasonReact.bs").element(0,0,c("MessengerGroupCreateDialogReact.bs").make(k,1,function(){return c("bs_curry")._1(o[4],1)},[]));else return null}function m(o,p){__p&&__p();var q=j.slice();q[9]=function(r){var s=i._("\uc0c8 \uadf8\ub8f9 \ub9cc\ub4e4\uae30"),t="_1-4-",u=o?c("joinClasses")(t,o[0]):t;return c("React").createElement("div",{className:"_46fv"},l(r),c("ReasonReact.bs").element(0,0,c("LinkReact.bs").make([s],[u],["tooltip"],[s],0,["below"],0,0,[function(){return c("bs_curry")._1(r[4],0)}],0,0,0,0,0,0,0,[])))};q[10]=function(){return 0};q[12]=function(r,p){if(r!==0)return c("bs_block").__(0,[0]);else return c("bs_block").__(0,[1])};return q}var n=c("ReasonReact.bs").wrapReasonForJs(j,function(o){return m(c("bs_js_primitive").null_undefined_to_opt(o.className),[])});g.component=j;g.entryPoint=k;g.renderDialog=l;g.make=m;g.jsComponent=n}),null);
__d("ChatSidebarGroupCreateButtonReactComponent",["ChatSidebarGroupCreateButtonReact.bs"],(function a(b,c,d,e,f,g){"use strict";var h=c("ChatSidebarGroupCreateButtonReact.bs").jsComponent;f.exports=h}),null);