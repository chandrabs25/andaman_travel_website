(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[18],{8072:function(e,t,i){Promise.resolve().then(i.bind(i,5227))},5863:function(e,t,i){"use strict";i.d(t,{Z:function(){return s}});let s=(0,i(9763).Z)("Loader2",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]])},5227:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return o}});var s=i(7437),a=i(2265),r=i(7648),n=i(8703),l=i(5863);function o(){let[e,t]=(0,a.useState)([]),[i,o]=(0,a.useState)(!0),[c,d]=(0,a.useState)(null);(0,a.useEffect)(()=>{!async function(){o(!0),d(null);try{let e=await fetch("/api/activities");if(!e.ok){let t="HTTP error! status: ".concat(e.status," ").concat(e.statusText||"").trim();try{let i=await e.json();"object"==typeof i&&null!==i&&"message"in i&&"string"==typeof i.message&&(t=i.message||t)}catch(e){console.warn("Could not parse error response body as JSON:",e)}throw Error(t)}let i=await e.json();if(i.success)t(i.data||[]);else{let e=i.message||"Failed to fetch activities due to an API error.";console.error("API Error:",e),d(e),t(m)}}catch(e){console.error("Fetch Error:",e),d(e instanceof Error?e.message:"An unknown error occurred during fetch."),t(m)}finally{o(!1)}}()},[]);let m=[{id:1,name:"Scuba Diving",description:"Explore the vibrant underwater world of Andaman with professional diving instructors.",price:3500,duration:"3 hours",image_url:"/images/scuba.jpg",destination_name:"Havelock Island"},{id:2,name:"Sea Walking",description:"Walk on the ocean floor and experience the marine life up close without diving skills.",price:2500,duration:"2 hours",image_url:"/images/sea-walking.jpg",destination_name:"North Bay Island"},{id:3,name:"Jet Skiing",description:"Feel the adrenaline rush as you zoom across the crystal clear waters on a jet ski.",price:1500,duration:"30 minutes",image_url:"/images/jet-ski.jpg",destination_name:"Corbyn's Cove Beach"},{id:4,name:"Glass Bottom Boat Ride",description:"View the colorful coral reefs and marine life through a glass bottom boat without getting wet.",price:1200,duration:"1 hour",image_url:"/images/glass-boat.jpg",destination_name:"North Bay Island"},{id:5,name:"Trekking",description:"Trek through the lush forests of Andaman and discover hidden waterfalls and viewpoints.",price:1800,duration:"4 hours",image_url:"/images/trekking.jpg",destination_name:"Mount Harriet"},{id:6,name:"Snorkeling",description:"Explore the shallow coral reefs and colorful fish with basic snorkeling equipment.",price:1500,duration:"2 hours",image_url:"/images/snorkeling.jpg",destination_name:"Elephant Beach"}],h=c||0===e.length?m:e;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("div",{className:"relative bg-green-900 h-64 md:h-80",children:[(0,s.jsx)("div",{className:"absolute inset-0 bg-gradient-to-r from-green-900 to-green-700",children:(0,s.jsx)(n.default,{src:"/images/activities-hero.jpg",alt:"Andaman Activities",fill:!0,className:"object-cover mix-blend-overlay",priority:!0})}),(0,s.jsxs)("div",{className:"container mx-auto px-4 h-full flex flex-col justify-center items-center relative z-10",children:[(0,s.jsx)("h1",{className:"text-4xl md:text-5xl font-bold text-white text-center mb-4",children:"Exciting Andaman Activities"}),(0,s.jsx)("p",{className:"text-xl text-white text-center max-w-2xl",children:"Experience thrilling adventures and create unforgettable memories"})]})]}),(0,s.jsx)("div",{className:"container mx-auto px-4 py-12",children:i?(0,s.jsxs)("div",{className:"flex justify-center items-center py-20",children:[(0,s.jsx)(l.Z,{className:"h-8 w-8 animate-spin text-green-600"}),(0,s.jsx)("span",{className:"ml-2 text-lg",children:"Loading activities..."})]}):c?(0,s.jsxs)("div",{className:"text-center py-10 px-4 bg-red-50 border border-red-200 rounded-md",children:[(0,s.jsx)("p",{className:"text-red-700 font-medium",children:"Could not load activities."}),(0,s.jsx)("p",{className:"text-red-600 text-sm mt-1",children:c}),(0,s.jsx)("p",{className:"text-gray-600 text-sm mt-3",children:"Displaying sample activities instead."}),(0,s.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6",children:m.map(e=>(0,s.jsxs)("div",{className:"bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105",children:[(0,s.jsx)("div",{className:"h-56 bg-green-200 relative",children:(0,s.jsx)(n.default,{src:e.image_url||"/images/placeholder.jpg",alt:e.name,fill:!0,className:"object-cover"})}),(0,s.jsxs)("div",{className:"p-6",children:[(0,s.jsx)("h2",{className:"text-2xl font-semibold mb-2",children:e.name}),(0,s.jsxs)("p",{className:"text-gray-600 mb-4",children:["Location: ",e.destination_name]}),(0,s.jsx)("p",{className:"text-gray-700 mb-4",children:e.description}),(0,s.jsxs)("div",{className:"flex justify-between items-center mb-4",children:[(0,s.jsxs)("div",{className:"text-green-700 font-semibold",children:["₹",e.price," per person"]}),(0,s.jsx)("div",{className:"text-gray-600",children:e.duration})]}),(0,s.jsx)(r.default,{href:"/activities/".concat(e.id),className:"inline-block bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors",children:"Book Now"})]})]},e.id))})]}):h.length>0?(0,s.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:h.map(e=>(0,s.jsxs)("div",{className:"bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105",children:[(0,s.jsx)("div",{className:"h-56 bg-green-200 relative",children:(0,s.jsx)(n.default,{src:e.image_url||"/images/placeholder.jpg",alt:e.name,fill:!0,className:"object-cover"})}),(0,s.jsxs)("div",{className:"p-6",children:[(0,s.jsx)("h2",{className:"text-2xl font-semibold mb-2",children:e.name}),(0,s.jsxs)("p",{className:"text-gray-600 mb-4",children:["Location: ",e.destination_name]}),(0,s.jsx)("p",{className:"text-gray-700 mb-4",children:e.description}),(0,s.jsxs)("div",{className:"flex justify-between items-center mb-4",children:[(0,s.jsxs)("div",{className:"text-green-700 font-semibold",children:["₹",e.price," per person"]}),(0,s.jsx)("div",{className:"text-gray-600",children:e.duration})]}),(0,s.jsx)(r.default,{href:"/activities/".concat(e.id),className:"inline-block bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors",children:"Book Now"})]})]},e.id))}):(0,s.jsx)("div",{className:"text-center py-10",children:(0,s.jsx)("p",{className:"text-gray-500",children:"No activities found matching your criteria."})})})]})}}},function(e){e.O(0,[451,145,971,30,744],function(){return e(e.s=8072)}),_N_E=e.O()}]);