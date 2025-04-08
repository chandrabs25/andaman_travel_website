(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[69],{6588:function(e,s,a){Promise.resolve().then(a.bind(a,1158))},9376:function(e,s,a){"use strict";var t=a(5475);a.o(t,"useParams")&&a.d(s,{useParams:function(){return t.useParams}}),a.o(t,"usePathname")&&a.d(s,{usePathname:function(){return t.usePathname}}),a.o(t,"useRouter")&&a.d(s,{useRouter:function(){return t.useRouter}}),a.o(t,"useSearchParams")&&a.d(s,{useSearchParams:function(){return t.useSearchParams}})},1158:function(e,s,a){"use strict";a.r(s),a.d(s,{default:function(){return d},runtime:function(){return m}});var t=a(7437),n=a(2265),r=a(9376);let m="edge";function d(e){let{params:s}=e,a=(0,r.useRouter)(),[m,d]=(0,n.useState)(!1),[i,l]=(0,n.useState)({id:s.id,packageName:"Havelock Island Adventure",startDate:"2025-05-15",endDate:"2025-05-20",guests:2,amount:25e3,customerName:"Rahul Sharma",customerEmail:"rahul.s@example.com",customerPhone:"9876543210",paymentId:"",paymentDate:new Date().toISOString(),vendorName:"Andaman Adventures",vendorEmail:"info@andamanadventures.com",vendorPhone:"9876543200"});return(0,n.useEffect)(()=>{let e=new URLSearchParams(window.location.search).get("paymentId")||"";l(s=>({...s,paymentId:e}))},[]),(0,t.jsx)("div",{className:"min-h-screen bg-gray-50 py-12",children:(0,t.jsx)("div",{className:"container mx-auto px-4",children:(0,t.jsxs)("div",{className:"max-w-3xl mx-auto",children:[(0,t.jsxs)("div",{className:"bg-white rounded-lg shadow-md overflow-hidden",children:[(0,t.jsxs)("div",{className:"px-6 py-8 border-b text-center",children:[(0,t.jsx)("div",{className:"w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4",children:(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-8 w-8 text-green-500",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,t.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})})}),(0,t.jsx)("h1",{className:"text-2xl font-bold text-gray-800 mb-2",children:"Booking Confirmed!"}),(0,t.jsx)("p",{className:"text-gray-600",children:"Your booking has been successfully confirmed and payment has been processed."})]}),(0,t.jsxs)("div",{className:"p-6",children:[(0,t.jsxs)("div",{className:"mb-8",children:[(0,t.jsx)("h2",{className:"text-lg font-semibold mb-4 pb-2 border-b",children:"Booking Details"}),(0,t.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{className:"text-sm text-gray-500 mb-1",children:"Booking ID"}),(0,t.jsx)("p",{className:"font-medium break-words",children:i.id})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{className:"text-sm text-gray-500 mb-1",children:"Package"}),(0,t.jsx)("p",{className:"font-medium",children:i.packageName})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{className:"text-sm text-gray-500 mb-1",children:"Travel Dates"}),(0,t.jsxs)("p",{className:"font-medium",children:[i.startDate," to ",i.endDate]})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{className:"text-sm text-gray-500 mb-1",children:"Number of Guests"}),(0,t.jsx)("p",{className:"font-medium",children:i.guests})]})]})]}),(0,t.jsxs)("div",{className:"mb-8",children:[(0,t.jsx)("h2",{className:"text-lg font-semibold mb-4 pb-2 border-b",children:"Payment Information"}),(0,t.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{className:"text-sm text-gray-500 mb-1",children:"Amount Paid"}),(0,t.jsxs)("p",{className:"font-medium",children:["₹",i.amount.toLocaleString("en-IN")]})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{className:"text-sm text-gray-500 mb-1",children:"Payment ID"}),(0,t.jsx)("p",{className:"font-medium break-words",children:i.paymentId||"N/A"})," "]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{className:"text-sm text-gray-500 mb-1",children:"Payment Date"}),(0,t.jsx)("p",{className:"font-medium",children:new Date(i.paymentDate).toLocaleDateString("en-IN",{year:"numeric",month:"long",day:"numeric"})})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{className:"text-sm text-gray-500 mb-1",children:"Payment Method"}),(0,t.jsx)("p",{className:"font-medium",children:"Razorpay"})," "]})]})]}),(0,t.jsxs)("div",{className:"mb-8",children:[(0,t.jsx)("h2",{className:"text-lg font-semibold mb-4 pb-2 border-b",children:"Contact Information"}),(0,t.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[(0,t.jsxs)("div",{children:[" ",(0,t.jsx)("p",{className:"text-sm text-gray-500 mb-1",children:"Customer Name"})," ",(0,t.jsx)("p",{className:"font-medium",children:i.customerName})," "]}),(0,t.jsxs)("div",{children:[" ",(0,t.jsx)("p",{className:"text-sm text-gray-500 mb-1",children:"Email"})," ",(0,t.jsx)("p",{className:"font-medium break-words",children:i.customerEmail})," "]}),(0,t.jsxs)("div",{children:[" ",(0,t.jsx)("p",{className:"text-sm text-gray-500 mb-1",children:"Phone"})," ",(0,t.jsx)("p",{className:"font-medium",children:i.customerPhone})," "]})]})]}),(0,t.jsxs)("div",{className:"mb-8",children:[(0,t.jsx)("h2",{className:"text-lg font-semibold mb-4 pb-2 border-b",children:"Vendor Information"}),(0,t.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[(0,t.jsxs)("div",{children:[" ",(0,t.jsx)("p",{className:"text-sm text-gray-500 mb-1",children:"Vendor Name"})," ",(0,t.jsx)("p",{className:"font-medium",children:i.vendorName})," "]}),(0,t.jsxs)("div",{children:[" ",(0,t.jsx)("p",{className:"text-sm text-gray-500 mb-1",children:"Email"})," ",(0,t.jsx)("p",{className:"font-medium break-words",children:i.vendorEmail})," "]}),(0,t.jsxs)("div",{children:[" ",(0,t.jsx)("p",{className:"text-sm text-gray-500 mb-1",children:"Phone"})," ",(0,t.jsx)("p",{className:"font-medium",children:i.vendorPhone})," "]})]})]}),(0,t.jsx)("div",{className:"bg-blue-50 p-4 rounded-md mb-8",children:(0,t.jsx)("p",{className:"text-sm text-blue-700",children:"A confirmation email has been sent to your email address with all the details of your booking. Please keep this information for your reference."})}),(0,t.jsxs)("div",{className:"flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4",children:[(0,t.jsx)("button",{onClick:()=>{alert("Receipt download functionality will be implemented in production")},className:"bg-white border border-blue-600 text-blue-600 hover:bg-blue-50 font-medium py-2 px-4 rounded-md flex-1",children:"Download Receipt"}),(0,t.jsx)("button",{onClick:()=>{let e=i.packageName.toLowerCase().replace(/\s+/g,"-");a.push("/packages/".concat(e))},className:"bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md flex-1",children:"View Itinerary"})]})]})]}),(0,t.jsx)("div",{className:"mt-8 text-center",children:(0,t.jsx)("button",{onClick:()=>a.push("/"),className:"text-blue-600 hover:text-blue-800 font-medium",children:"Return to Homepage"})})]})})})}}},function(e){e.O(0,[971,30,744],function(){return e(e.s=6588)}),_N_E=e.O()}]);