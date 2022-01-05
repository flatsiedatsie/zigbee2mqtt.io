"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[67125],{33173:(e,t,i)=>{i.r(t),i.d(t,{data:()=>a});const a={key:"v-3f90a672",path:"/devices/ICZB-IW11SW.html",title:"iCasa ICZB-IW11SW control via MQTT",lang:"en-US",frontmatter:{title:"iCasa ICZB-IW11SW control via MQTT",description:"Integrate your iCasa ICZB-IW11SW via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendors bridge or gateway.",addedAt:"2019-11-09T18:37:38.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Switch",slug:"switch",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/ICZB-IW11SW.md",git:{updatedTime:1641408766e3}}},66138:(e,t,i)=>{i.r(t),i.d(t,{default:()=>o});const a=(0,i(66252).uE)('<h1 id="icasa-iczb-iw11sw" tabindex="-1"><a class="header-anchor" href="#icasa-iczb-iw11sw" aria-hidden="true">#</a> iCasa ICZB-IW11SW</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>ICZB-IW11SW</td></tr><tr><td>Vendor</td><td>iCasa</td></tr><tr><td>Description</td><td>Zigbee 3.0 AC switch</td></tr><tr><td>Exposes</td><td>switch (state), linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/ICZB-IW11SW.jpg" alt="iCasa ICZB-IW11SW"></td></tr></tbody></table><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="switch" tabindex="-1"><a class="header-anchor" href="#switch" aria-hidden="true">#</a> Switch</h3><p>The current state of this switch is in the published state under the <code>state</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;ON&quot;}</code>, <code>{&quot;state&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state&quot;: &quot;&quot;}</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',7),d={},o=(0,i(83744).Z)(d,[["render",function(e,t){return a}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[i,a]of t)e[i]=a;return e}}}]);