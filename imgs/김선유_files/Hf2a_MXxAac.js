if (self.CavalryLogger) { CavalryLogger.start_js(["QFplx"]); }

__d("FeedBlacklistButton",["Arbiter","Event"],(function a(b,c,d,e,f,g){__p&&__p();var h={BLACKLIST:"feed_blacklist",UNBLACKLIST:"feed_unblacklist",init:function i(j,k,l,m){__p&&__p();c("Event").listen(k,"click",function(){var n={profile_id:m};c("Arbiter").inform(h.BLACKLIST,n);c("Arbiter").inform("UnfollowingUser",n)});c("Event").listen(l,"click",function(){var n={profile_id:m};c("Arbiter").inform(h.UNBLACKLIST,n);c("Arbiter").inform("FollowingUser",n)});c("Arbiter").subscribe(h.BLACKLIST,function(n,o){if(m==o.profile_id)j.swap()});c("Arbiter").subscribe(h.UNBLACKLIST,function(n,o){if(m==o.profile_id)j.unswap()})}};f.exports=b.FeedBlacklistButton||h}),null);
__d("FollowRequestResultEnum",[],(function a(b,c,d,e,f,g){f.exports=Object.freeze({REVERT:"revert"})}),null);
__d("MenuStaticItem",["cx","DOM","MenuItemBase","React","ReactDOM","emptyFunction"],(function a(b,c,d,e,f,g,h){__p&&__p();var i,j;i=babelHelpers.inherits(k,c("MenuItemBase"));j=i&&i.prototype;function k(l){"use strict";j.constructor.call(this);this._data=l}k.prototype._renderItemContent=function(){"use strict";var l=c("DOM").create("span",{className:"_54nc _54ah"});if(this._data.children)c("ReactDOM").render(c("React").createElement("span",{className:"_54nh"},this._data.children),l);else c("DOM").setContent(l,c("DOM").create("span",{className:"_54nh"},this._data.markup));return l};Object.assign(k.prototype,{handleClick:c("emptyFunction")});f.exports=k}),null);
__d("ProfileSubFollowStatus",[],(function a(b,c,d,e,f,g){f.exports=Object.freeze({REGULAR_FOLLOW:"follow",RECAP:"recap",SEE_FIRST:"see_first",SUBSCRIBE_ALL_LIVE_NOTIFICATIONS:"subscribe_all_live_notifications",SUBSCRIBE_SUGGESTED_LIVE_NOTIFICATIONS:"subscribe_suggested_live_notifications",SUBSCRIBE_NONE_LIVE_NOTIFICATIONS:"subscribe_none_live_notifications",UNFOLLOW:"unfollow"})}),null);
__d("SeeFirstNuxEvents",[],(function a(b,c,d,e,f,g){f.exports=Object.freeze({SWITCHER_NUX_IMP:"switcher_nux_imp",SEE_FIRST_SELECTED:"see_first_selected",XOUT:"xout",NOT_NOW:"not_now",IMP:"imp",ENTER_DIALOG:"enter_dialog",BATCH_SEE_FIRST_SELECTED:"batch_see_first_selected"})}),null);
__d("XFeedSeeFirstNuxController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("/feed/control/see_first/nux/",{})}),null);
__d("ProfileHoverButton",["csx","cx","Arbiter","AsyncRequest","CSS","DOM","Event","FeedBlacklistButton","FollowRequestResultEnum","MenuStaticItem","ProfileSubFollowStatus","Run","SeeFirstNuxEvents","SubscribeButton","SubscriptionsHandler","XFeedSeeFirstNuxController"],(function a(b,c,d,e,f,g,h,i){__p&&__p();var j=1,k="live_notifs",l={follow:0,see_first:0,subscribe_all_live_notifications:k,subscribe_suggested_live_notifications:k,subscribe_none_live_notifications:k};function m(n,o,p,q,r){"use strict";__p&&__p();this.$ProfileHoverButton1=o;this.$ProfileHoverButton2=p;this.$ProfileHoverButton3=r;this.$ProfileHoverButton4=q;this.$ProfileHoverButton5=n;this.$ProfileHoverButton6=null;this.$ProfileHoverButton7=new(c("SubscriptionsHandler"))();this.$ProfileHoverButton2.subscribe("itemclick",function(s,t){__p&&__p();if(t.item instanceof c("MenuStaticItem"))return;var u=t.item.getValue();if(u==="unfollow"){c("Arbiter").inform(c("SubscribeButton").UNSUBSCRIBED,{profile_id:this.$ProfileHoverButton3.id});c("Arbiter").inform(c("FeedBlacklistButton").BLACKLIST,{profile_id:this.$ProfileHoverButton3.id});if(this.$ProfileHoverButton4)this.$ProfileHoverButton4.hide();this.$ProfileHoverButton5.getPopover().hideLayer()}else{this.setSelected(u);if(u===c("ProfileSubFollowStatus").SEE_FIRST&&this.$ProfileHoverButton4){this.$ProfileHoverButton4.hide();this.logNux(c("SeeFirstNuxEvents").SEE_FIRST_SELECTED)}}}.bind(this));this.$ProfileHoverButton7.addSubscriptions(c("Arbiter").subscribe(c("SubscribeButton").SUBSCRIBED,this.setSelected.bind(this,c("ProfileSubFollowStatus").REGULAR_FOLLOW)));this.$ProfileHoverButton7.addSubscriptions(c("Arbiter").subscribe(c("FollowRequestResultEnum").REVERT,this.handleResponse.bind(this)));if(this.$ProfileHoverButton4){this.$ProfileHoverButton4.show();this.logNux(c("SeeFirstNuxEvents").IMP);this.$ProfileHoverButton7.addSubscriptions(c("Event").listen(c("DOM").find(this.$ProfileHoverButton4.getRoot(),"._50zy"),"click",this.logNux.bind(this,c("SeeFirstNuxEvents").XOUT)))}c("Run").onLeave(this.cleanUp.bind(this))}m.prototype.logNux=function(event){"use strict";var n=c("XFeedSeeFirstNuxController").getURIBuilder().getURI();new(c("AsyncRequest"))(n).setData({event:event,id:this.$ProfileHoverButton3.id}).send()};m.prototype.getButtons=function(){"use strict";return c("DOM").scry(this.$ProfileHoverButton1,"._3oz-")};m.prototype.getSelected=function(){"use strict";var n=this.getButtons(),o=null;n.forEach(function(p){var q=p.getAttribute("data-status");if(c("CSS").matchesSelector(p,"._52-0"))o=q});return o};m.prototype.setSelected=function(n){"use strict";__p&&__p();this.$ProfileHoverButton6=this.getSelected();var o=this.getButtons(),p=l[n];o.forEach(function(q){if(p===k)return;var r=q.getAttribute("data-status");if(r===n)c("CSS").addClass(q,"_52-0");else c("CSS").removeClass(q,"_52-0")});this.$ProfileHoverButton2.forEachItem(function(q){__p&&__p();if(!q.getValue)return;var r=q.getValue(),s=l[r];if(r==="unfollow")return;var t=q.getRoot();if(r===n)c("CSS").addClass(t,"_52-0");else if(s===p)c("CSS").removeClass(t,"_52-0")})};m.prototype.handleResponse=function(event,n){"use strict";if(n.id!==this.$ProfileHoverButton3.id||n.location!==j)return;if(event===c("FollowRequestResultEnum").REVERT)this.revert()};m.prototype.revert=function(){"use strict";if(this.$ProfileHoverButton6===null)return;this.setSelected(this.$ProfileHoverButton6)};m.prototype.cleanUp=function(){"use strict";this.$ProfileHoverButton7&&this.$ProfileHoverButton7.release();this.$ProfileHoverButton7=null;this.$ProfileHoverButton1=null;this.$ProfileHoverButton2=null;this.$ProfileHoverButton3=null};f.exports=m}),null);
__d("SeeFirstProfilePopoverMenu",["PopoverMenu"],(function a(b,c,d,e,f,g){var h,i;h=babelHelpers.inherits(j,c("PopoverMenu"));i=h&&h.prototype;j.prototype._onMenuDone=function(k){"use strict"};function j(){"use strict";h.apply(this,arguments)}f.exports=j}),null);
__d("DialogHideOnSuccess",["csx","cx","CSS"],(function a(b,c,d,e,f,g,h,i){__p&&__p();function j(k){"use strict";this._layer=k}j.prototype.enable=function(){"use strict";this._subscription=this._layer.subscribe("success",this._handle.bind(this))};j.prototype.disable=function(){"use strict";this._subscription.unsubscribe();this._subscription=null};j.prototype._handle=function(k,event){"use strict";if(c("CSS").matchesSelector(event.getTarget(),"._s"))this._layer.hide()};Object.assign(j.prototype,{_subscription:null});f.exports=j}),null);
__d("ContextualLayerHideOnScroll",["Event"],(function a(b,c,d,e,f,g){__p&&__p();function h(i){"use strict";this._layer=i}h.prototype.enable=function(){"use strict";this._subscriptions=[this._layer.subscribe("contextchange",this._handleContextChange.bind(this)),this._layer.subscribe("show",this.attach.bind(this)),this._layer.subscribe("hide",this.detach.bind(this))]};h.prototype.disable=function(){"use strict";while(this._subscriptions.length)this._subscriptions.pop().unsubscribe();this.detach()};h.prototype.attach=function(){"use strict";if(this._listener)return;var i=this._layer.getContextScrollParent();if(i===window)return;this._listener=c("Event").listen(i,"scroll",this._layer.hide.bind(this._layer))};h.prototype.detach=function(){"use strict";this._listener&&this._listener.remove();this._listener=null};h.prototype._handleContextChange=function(){"use strict";this.detach();if(this._layer.isShown())this.attach()};Object.assign(h.prototype,{_subscriptions:[]});f.exports=h}),null);
__d("Popover",["ContextualLayer","ContextualLayerHideOnScroll","DOM","ParameterizedPopover"],(function a(b,c,d,e,f,g){__p&&__p();var h,i;h=babelHelpers.inherits(j,c("ParameterizedPopover"));i=h&&h.prototype;j.prototype._init=function(){"use strict";__p&&__p();var k=new(c("ContextualLayer"))({context:this._triggerElem,position:"below",arrowDimensions:{offset:12,length:16},"data-testid":this._config["data-testid"]},c("DOM").create("div"));k.enableBehaviors([c("ContextualLayerHideOnScroll")]);this._config.layer=k;if(this._config.alignh)k.setAlignment(this._config.alignh);if(this._config.layer_content)k.setContent(this._config.layer_content);if(this._config.position)k.setPosition(this._config.position);if(this._config.arrowDimensions)k.setArrowDimensions(this._config.arrowDimensions);i._init.call(this)};function j(){"use strict";h.apply(this,arguments)}f.exports=j}),null);
__d("PopoverMenuShowOnHover",["DOM","Event"],(function a(b,c,d,e,f,g){__p&&__p();var h=250;function i(j){"use strict";this._handleOnSetMenu=function(){this._attachMouseListeners(this._popoverMenu.getPopover().getLayer().getRoot())}.bind(this);this._popoverMenu=j;this._listeners=[]}i.prototype.enable=function(){"use strict";this._attachMouseListeners(this._popoverMenu.getTriggerElem());this._setMenuSubscription=this._popoverMenu.subscribe("setMenu",this._handleOnSetMenu)};i.prototype.disable=function(){"use strict";this._lastHoverEventTime=null;while(this._listeners.length)this._listeners.pop().remove();if(this._setMenuSubscription){this._setMenuSubscription.unsubscribe();this._setMenuSubscription=null}};i.prototype._attachMouseListeners=function(j){"use strict";this._listeners.push(c("Event").listen(j,"mouseleave",function(k){if(c("DOM").contains(this._popoverMenu.getTriggerElem(),k.relatedTarget)||c("DOM").contains(this._popoverMenu.getMenu().getRoot(),k.relatedTarget))return;this._popoverMenu.getPopover().hideLayer(k)}.bind(this)),c("Event").listen(j,"mouseenter",function(k){this._lastHoverEventTime=Date.now();this._popoverMenu.getPopover().showLayer()}.bind(this)),c("Event").listen(j,"click",function(k){if(Date.now()<this._lastHoverEventTime+h)k.stop()}.bind(this)))};f.exports=i}),null);
__d("MenuSeparator",["cx","DOM","CSS","MenuItemInterface"],(function a(b,c,d,e,f,g,h){__p&&__p();var i,j;i=babelHelpers.inherits(k,c("MenuItemInterface"));j=i&&i.prototype;function k(l){"use strict";j.constructor.call(this,l);this._data=l;this.showFn=this._data.should_show_fn}k.prototype.updateShownState=function(l){"use strict";if(this.showFn){this._isHidden=!this.showFn(l);if(this._root)c("CSS").conditionShow(this._root,!this._isHidden)}};k.prototype.isShown=function(l){"use strict";var m=this.showFn?this.showFn(l):true;return m};k.prototype.render=function(){"use strict";var l="_54ak";if(this._data.className)l+=" "+this._data.className;var m=this._data.label||"",n=c("DOM").create("li",{className:l,role:"separator"},m);if(this._isHidden)c("CSS").hide(n);return n};f.exports=k}),null);
__d("ContextualLayerInlineTabOrder",["AccessibilityConfig","DOM","DOMTraverser","Event","Focus","Keys","Map","SubscriptionsHandler","TabbableElements","getOrCreateDOMID"],(function a(b,c,d,e,f,g){__p&&__p();function h(i){"use strict";__p&&__p();if(!c("AccessibilityConfig").a11yNUXDialog)return;this._layer=i;this._isSetup=false;this._ignoreFocus=false;this._layerFocused=true;this._layerRoot=this._layer.getContentRoot();this._layerID=c("getOrCreateDOMID")(this._layerRoot);this._mutedTabbables=new(c("Map"))([]);this._subscriptions=new(c("SubscriptionsHandler"))();this._tabbableLayerElements=[]}h.prototype.enable=function(){"use strict";if(!c("AccessibilityConfig").a11yNUXDialog)return;this._subscriptions.addSubscriptions(this._layer.subscribe("aftershow",this._onAfterShow.bind(this)),this._layer.subscribe("hide",this._onAfterHide.bind(this)));if(this._layer.isShown())this._onAfterShow()};h.prototype.disable=function(){"use strict";if(!c("AccessibilityConfig").a11yNUXDialog)return;this._subscriptions.release();this._isSetup=false};h.prototype._getContext=function(){"use strict";return this._layer.getCausalElement()};h.prototype._getContextOwns=function(){"use strict";var i=this._getContext();if(!i)return[];var j=(i.getAttribute("aria-owns")||"").trim();j=j?j.match(/[^ ]+/g):[];return j};h.prototype._identifyTabbableElements=function(){"use strict";this._tabbableLayerElements=c("TabbableElements").find(this._layerRoot);if(!this._tabbableLayerElements.length&&!this._mutedTabbables.size)this._layerRoot.setAttribute("tabindex","0");if(this._layerRoot.tabIndex>=0)this._tabbableLayerElements.unshift(this._layerRoot)};h.prototype._onAfterShow=function(){"use strict";this._setupTabBehavior();var i=this._getContext(),j=this._getContextOwns();if(i&&!j.includes(this._layerID)){j.push(this._layerID);i.setAttribute("aria-owns",j.join(" "))}};h.prototype._onAfterHide=function(){"use strict";var i=this._getContext();if(i){var j=this._getContextOwns(),k=j.indexOf(this._layerID);if(k>-1){j.splice(k,1);i.setAttribute("aria-owns",j.join(" "))}}};h.prototype._setupTabBehavior=function(){"use strict";if(!this._isSetup){var i=this._getContext();if(!this._layerRoot||!i)return;this._setupTabTriggers();this._setupTabToggle();this._isSetup=true}};h.prototype._setupTabTriggers=function(){"use strict";var i=this._getContext();if(!c("TabbableElements").isTabbable(i))i.setAttribute("tabindex","0");this._subscriptions.addSubscriptions(c("Event").listen(i,"keyup",this._checkNUXFocus.bind(this)),c("Event").listen(i,"keydown",this._checkNUXFocus.bind(this)),c("Event").listen(this._layerRoot,"keydown",this._checkContextFocus.bind(this)),c("Event").listen(this._layerRoot,"layerFocus",this._setNUXFocusStart.bind(this)),c("Event").listen(this._layerRoot,"layerFocusEnd",this._setNUXFocusEnd.bind(this)),c("Event").listen(this._layerRoot,"tempFocusIgnore",this._tempIgnoreFocus.bind(this)))};h.prototype._setupTabToggle=function(){"use strict";this._handleLayerBlur();this._subscriptions.addSubscriptions(c("Event").listen(document.documentElement,"click",this._checkForFocus.bind(this)),c("Event").listen(document.documentElement,"keydown",this._checkForFocus.bind(this)))};h.prototype._handleLayerBlur=function(){"use strict";__p&&__p();if(!this._layerFocused)return;this._identifyTabbableElements();this._tabbableLayerElements.forEach(function(i){if(!this._mutedTabbables.has(i)){var j=i.getAttribute("tabindex");i.setAttribute("tabindex","-1");this._mutedTabbables.set(i,j)}},this);this._layerFocused=false};h.prototype._handleLayerFocus=function(){"use strict";__p&&__p();if(this._layerFocused)return;for(var i=this._mutedTabbables,j=Array.isArray(i),k=0,i=j?i:i[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var l;if(j){if(k>=i.length)break;l=i[k++]}else{k=i.next();if(k.done)break;l=k.value}var m=l,n=m[0],o=m[1];if(o===null)n.removeAttribute("tabindex");else n.setAttribute("tabindex",o)}this._mutedTabbables.clear();this._layerFocused=true};h.prototype._checkNUXFocus=function(event){"use strict";__p&&__p();if(this._ignoreFocus){event.preventDefault();this._ignoreFocus=false;return}if(event.getTarget()!==this._getContext()||!this._layer.isShown())return;var i=c("Event").getKeyCode(event),j=this._getContextOwns();if(!j.length||i!==c("Keys").TAB)return;var k=event.getModifiers(),l=k.shift,m=j[0]===this._layerID,n=j[j.length-1]===this._layerID;if(event.type==="keydown"&&l&&n||event.type==="keyup"&&!l&&m){event.preventDefault();c("Event").fire(this._layerRoot,l?"layerFocusEnd":"layerFocus")}};h.prototype._setNUXFocusStart=function(){"use strict";this._handleLayerFocus();this._identifyTabbableElements();c("Focus").set(this._tabbableLayerElements[0])};h.prototype._setNUXFocusEnd=function(){"use strict";this._handleLayerFocus();this._identifyTabbableElements();c("Focus").set(this._tabbableLayerElements[this._tabbableLayerElements.length-1])};h.prototype._tempIgnoreFocus=function(){"use strict";this._ignoreFocus=true};h.prototype._checkContextFocus=function(event){"use strict";__p&&__p();var i=c("Event").getKeyCode(event),j=event.getModifiers(),k=j.shift;this._handleLayerFocus();this._identifyTabbableElements();if(!this._tabbableLayerElements.length||i!==c("Keys").TAB||!this._getContext())return;var l=this._tabbableLayerElements[0],m=this._tabbableLayerElements[this._tabbableLayerElements.length-1];if(event.getTarget()===m&&!k){if(this._setFocusAfterLayer())event.preventDefault()}else if(event.getTarget()===l&&k)if(this._setFocusBeforeLayer())event.preventDefault()};h.prototype._isTabbableNode=function(i){"use strict";return c("TabbableElements").isTabbable(i)&&!c("DOM").contains(this._layerRoot,i)};h.prototype._setFocusBeforeLayer=function(){"use strict";__p&&__p();var i=this._getContextOwns();if(!i||!i.length)return false;if(i[0]===this._layerID){var j=c("DOMTraverser").previousFilteredNode(document.body,this._getContext(),this._isTabbableNode.bind(this));c("Focus").set(j);return true}if(i.includes(this._layerID)){var k=i[i.indexOf(this._layerID)-1];return this._focusOnElement(k,true)}return false};h.prototype._setFocusAfterLayer=function(){"use strict";__p&&__p();var i=this._getContextOwns();if(!i||!i.length)return false;if(i[i.length-1]===this._layerID){this._refocusOnContext();return true}if(i.includes(this._layerID)){var j=i[i.indexOf(this._layerID)+1];return this._focusOnElement(j,false)}return false};h.prototype._focusOnElement=function(i,j){"use strict";var k=document.getElementById(i);if(!k)return false;c("Event").fire(k,j?"layerFocusEnd":"layerFocus");this._handleLayerBlur();return true};h.prototype._refocusOnContext=function(event){"use strict";__p&&__p();var i=this._getContext(),j=this._getContextOwns();c("Event").fire(document.getElementById(j[0]),"tempFocusIgnore");this._handleLayerBlur();if(i)if(i.tabIndex===-1){i.tabIndex=0;c("Focus").setWithoutOutline(i)}else c("Focus").set(i)};h.prototype._checkForFocus=function(event){"use strict";var i=event.getTarget(),j=this._layer.getContentRoot(),k=c("DOM").contains(j,i);if(!this._ignoreFocus&&!this._layerFocused&&k)this._handleLayerFocus();if(this._layerFocused&&!k)this._handleLayerBlur()};f.exports=h}),null);
__d("LayerDestroyOnHide",[],(function a(b,c,d,e,f,g){__p&&__p();function h(i){"use strict";this._layer=i}h.prototype.enable=function(){"use strict";var i=this._layer.destroy.bind(this._layer);this._subscription=this._layer.subscribe("hide",function(){setTimeout(i,0)})};h.prototype.disable=function(){"use strict";if(this._subscription){this._subscription.unsubscribe();this._subscription=null}};Object.assign(h.prototype,{_subscription:null});f.exports=h}),null);
__d("LayerRemoveOnHide",["DOM"],(function a(b,c,d,e,f,g){__p&&__p();function h(i){"use strict";this._layer=i}h.prototype.enable=function(){"use strict";this._subscription=this._layer.subscribe("hide",c("DOM").remove.bind(null,this._layer.getRoot()))};h.prototype.disable=function(){"use strict";if(this._subscription){this._subscription.unsubscribe();this._subscription=null}};Object.assign(h.prototype,{_subscription:null});f.exports=h}),null);
__d("XUIAmbientNUXTheme",["cx"],(function a(b,c,d,e,f,g,h){var i={wrapperClassName:"_2x6q",arrowDimensions:{offset:14,length:18}};f.exports=i}),null);