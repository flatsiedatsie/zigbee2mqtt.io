"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[45208],{60617:(e,t,i)=>{i.r(t),i.d(t,{data:()=>o});const o={key:"v-557e5293",path:"/devices/CCT5015-0001.html",title:"Schneider Electric CCT5015-0001 control via MQTT",lang:"en-US",frontmatter:{title:"Schneider Electric CCT5015-0001 control via MQTT",description:"Integrate your Schneider Electric CCT5015-0001 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendors bridge or gateway.",addedAt:"2021-12-31T16:51:16.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Options",slug:"options",children:[]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Cover",slug:"cover",children:[]},{level:3,title:"Lift_duration (numeric)",slug:"lift-duration-numeric",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/CCT5015-0001.md",git:{updatedTime:1641408766e3}}},33566:(e,t,i)=>{i.r(t),i.d(t,{default:()=>s});var o=i(66252);const d=(0,o.uE)('<h1 id="schneider-electric-cct5015-0001" tabindex="-1"><a class="header-anchor" href="#schneider-electric-cct5015-0001" aria-hidden="true">#</a> Schneider Electric CCT5015-0001</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>CCT5015-0001</td></tr><tr><td>Vendor</td><td>Schneider Electric</td></tr><tr><td>Description</td><td>Roller shutter module</td></tr><tr><td>Exposes</td><td>cover (state, position), lift_duration, linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/CCT5015-0001.jpg" alt="Schneider Electric CCT5015-0001"></td></tr></tbody></table><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options" aria-hidden="true">#</a> Options</h2>',3),c=(0,o.Uk)("How to use device type specific configuration"),a=(0,o.uE)('<ul><li><code>invert_cover</code>: Inverts the cover position, false: open=100,close=0, true: open=0,close=100 (default false). The value must be <code>true</code> or <code>false</code></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="cover" tabindex="-1"><a class="header-anchor" href="#cover" aria-hidden="true">#</a> Cover</h3><p>The current state of this cover is in the published state under the <code>state</code> property (value is <code>OPEN</code> or <code>CLOSE</code>). To control this cover publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;OPEN&quot;}</code>, <code>{&quot;state&quot;: &quot;CLOSE&quot;}</code>, <code>{&quot;state&quot;: &quot;STOP&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value. To change the position publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;position&quot;: VALUE}</code> where <code>VALUE</code> is a number between <code>0</code> and <code>100</code>.</p><h3 id="lift-duration-numeric" tabindex="-1"><a class="header-anchor" href="#lift-duration-numeric" aria-hidden="true">#</a> Lift_duration (numeric)</h3><p>Duration of lift. Value can be found in the published state on the <code>lift_duration</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;lift_duration&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>300</code>. The unit of this value is <code>seconds</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',8),r={},s=(0,i(83744).Z)(r,[["render",function(e,t){const i=(0,o.up)("RouterLink");return(0,o.wg)(),(0,o.iD)(o.HY,null,[d,(0,o._)("p",null,[(0,o._)("em",null,[(0,o.Wm)(i,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,o.w5)((()=>[c])),_:1})])]),a],64)}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[i,o]of t)e[i]=o;return e}}}]);