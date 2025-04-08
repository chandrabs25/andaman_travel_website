(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[990],{2042:function(e,t,r){Promise.resolve().then(r.bind(r,6924))},9763:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var a=r(2265),n={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let s=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),o=(e,t)=>{let r=(0,a.forwardRef)((r,o)=>{let{color:i="currentColor",size:c=24,strokeWidth:l=2,absoluteStrokeWidth:d,className:u="",children:m,...g}=r;return(0,a.createElement)("svg",{ref:o,...n,width:c,height:c,stroke:i,strokeWidth:d?24*Number(l)/Number(c):l,className:["lucide","lucide-".concat(s(e)),u].join(" "),...g},[...t.map(e=>{let[t,r]=e;return(0,a.createElement)(t,r)}),...Array.isArray(m)?m:[m]])});return r.displayName="".concat(e),r}},5863:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}});let a=(0,r(9763).Z)("Loader2",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]])},9376:function(e,t,r){"use strict";var a=r(5475);r.o(a,"useParams")&&r.d(t,{useParams:function(){return a.useParams}}),r.o(a,"usePathname")&&r.d(t,{usePathname:function(){return a.usePathname}}),r.o(a,"useRouter")&&r.d(t,{useRouter:function(){return a.useRouter}}),r.o(a,"useSearchParams")&&r.d(t,{useSearchParams:function(){return a.useSearchParams}})},6924:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return i}});var a=r(7437),n=r(2265),s=r(9376),o=r(5863);function i(){let e=(0,s.useRouter)(),[t,r]=(0,n.useState)([]),[i,c]=(0,n.useState)(!0),[l,d]=(0,n.useState)(null),[u,m]=(0,n.useState)("upcoming");(0,n.useEffect)(()=>{g()},[]);let g=async()=>{d(null),c(!0);try{let e;let t=await fetch("/api/bookings?userId=".concat("user_123"));try{e=await t.json()}catch(e){if(console.error("Failed to parse API response JSON:",e),t.ok)throw Error("Received invalid data format from server.");throw Error("Failed to fetch bookings. Status: ".concat(t.status))}if(!t.ok){let r=e,a="string"==typeof(null==r?void 0:r.message)&&r.message?r.message:"Failed to fetch bookings. Status: ".concat(t.status);throw Error(a)}let a=e;if(!a||!Array.isArray(a.bookings))throw Error("Invalid data structure received from bookings API.");let n=a.bookings.map(e=>{var t,r;let a=["confirmed","pending","completed","cancelled"].includes(e.status)?e.status:"pending",n=["completed","pending","failed"].includes(e.paymentStatus)?e.paymentStatus:"pending";return{id:String(null!==(t=e.id)&&void 0!==t?t:"unknown-".concat(Math.random())),packageId:String(null!==(r=e.packageId)&&void 0!==r?r:""),packageName:String(e.packageName||"Unknown Package"),startDate:String(e.startDate||""),endDate:String(e.endDate||""),guests:Number(e.guests)||0,amount:Number(e.amount)||0,status:a,paymentStatus:n,createdAt:String(e.createdAt||new Date().toISOString())}});r(n)}catch(e){console.error("Error fetching bookings:",e),d(e instanceof Error?e.message:"Failed to load bookings. Please try again later.")}finally{c(!1)}},h=t=>{e.push("/user/bookings/".concat(t))},p=async e=>{if(window.confirm("Are you sure you want to cancel this booking? This action cannot be undone.")){d(null);try{await new Promise(e=>setTimeout(e,500)),r(t=>t.map(t=>t.id===e?{...t,status:"cancelled"}:t)),alert("Booking cancelled successfully")}catch(t){let e=t instanceof Error?t.message:"Failed to cancel booking. Please try again.";console.error("Error cancelling booking:",t),d(e),alert(e)}}},x=e=>(0,a.jsxs)("span",{className:"px-2 py-1 text-xs font-medium rounded-full whitespace-nowrap ".concat({confirmed:"bg-green-100 text-green-800",pending:"bg-yellow-100 text-yellow-800",completed:"bg-blue-100 text-blue-800",cancelled:"bg-red-100 text-red-800"}[e]||"bg-gray-100 text-gray-800"),children:[" ",e.charAt(0).toUpperCase()+e.slice(1)," "]}),f=e=>{if(!e)return"N/A";try{return new Date(e).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"})}catch(e){return"Invalid Date"}},b=(e=>{let r=new Date;return r.setHours(0,0,0,0),t.filter(t=>{try{let a=new Date(t.endDate);if(a.setHours(0,0,0,0),"upcoming"===e)return a>=r&&"cancelled"!==t.status&&"completed"!==t.status;if("past"===e)return a<r||"completed"===t.status;if("cancelled"===e)return"cancelled"===t.status;return!1}catch(e){return!1}})})(u);return(0,a.jsxs)("div",{className:"container mx-auto px-4 py-8",children:[(0,a.jsx)("h1",{className:"text-2xl font-bold mb-6",children:"My Bookings"}),(0,a.jsx)("div",{className:"mb-6",children:(0,a.jsx)("div",{className:"border-b border-gray-200",children:(0,a.jsx)("nav",{className:"-mb-px flex space-x-8","aria-label":"Tabs",children:["upcoming","past","cancelled"].map(e=>(0,a.jsx)("button",{onClick:()=>m(e),className:"whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ".concat(u===e?"border-blue-500 text-blue-600":"border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"),"aria-current":u===e?"page":void 0,children:e.charAt(0).toUpperCase()+e.slice(1)},e))})})}),i?(0,a.jsxs)("div",{className:"text-center py-10",children:[" ",(0,a.jsx)(o.Z,{className:"h-8 w-8 animate-spin text-blue-600 mx-auto"})," ",(0,a.jsx)("p",{className:"mt-2 text-gray-600",children:"Loading..."})," "]}):l?(0,a.jsxs)("div",{className:"bg-red-50 border-l-4 border-red-400 p-4",children:[" ",(0,a.jsx)("p",{className:"text-sm text-red-700",children:l})," "]}):(0,a.jsxs)("div",{children:[" ",0===b.length?(0,a.jsxs)("div",{className:"text-center py-10 bg-gray-50 rounded-lg",children:[" ",(0,a.jsxs)("p",{children:["No ",u," bookings."]})," "]}):(0,a.jsxs)("div",{className:"bg-white shadow overflow-hidden sm:rounded-md",children:[" ",(0,a.jsxs)("ul",{role:"list",className:"divide-y divide-gray-200",children:[" ",b.map(e=>(0,a.jsxs)("li",{children:[" ",(0,a.jsxs)("div",{className:"block hover:bg-gray-50",children:[" ",(0,a.jsxs)("div",{className:"px-4 py-4 sm:px-6",children:[" ",(0,a.jsxs)("div",{className:"flex items-center justify-between",children:[" ",(0,a.jsx)("p",{children:e.packageName})," ",x(e.status)," "]})," ",(0,a.jsxs)("div",{className:"mt-2 sm:flex sm:justify-between",children:[" ",(0,a.jsxs)("p",{children:[f(e.startDate)," - ",f(e.endDate)]})," ",(0,a.jsxs)("p",{children:["₹",e.amount.toLocaleString()]})," "]})," ",(0,a.jsxs)("div",{className:"mt-4 flex justify-end space-x-3",children:[" ",(0,a.jsx)("button",{onClick:()=>h(e.id),children:"View"})," ",("confirmed"===e.status||"pending"===e.status)&&"upcoming"===u&&(0,a.jsx)("button",{onClick:()=>p(e.id),children:"Cancel"})," "]})," "]})," "]})," "]},e.id))," "]})," "]})," "]})]})}}},function(e){e.O(0,[971,30,744],function(){return e(e.s=2042)}),_N_E=e.O()}]);