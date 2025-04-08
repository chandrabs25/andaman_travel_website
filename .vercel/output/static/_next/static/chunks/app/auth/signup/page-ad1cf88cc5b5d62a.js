(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[271],{4313:function(e,s,r){Promise.resolve().then(r.bind(r,3669))},6337:function(e,s,r){"use strict";r.d(s,{Z:function(){return a}});let a=(0,r(9763).Z)("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]])},9345:function(e,s,r){"use strict";r.d(s,{Z:function(){return a}});let a=(0,r(9763).Z)("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]])},3669:function(e,s,r){"use strict";r.r(s),r.d(s,{default:function(){return d}});var a=r(7437),t=r(2265),l=r(7648),o=r(9345),n=r(6337);function d(){let[e,s]=(0,t.useState)({firstName:"",lastName:"",email:"",password:"",confirmPassword:"",phone:"",agreeTerms:!1}),[r,d]=(0,t.useState)({}),[i,m]=(0,t.useState)(!1),[c,u]=(0,t.useState)(""),x=e=>{let{name:a,value:t,type:l}=e.target,o="checkbox"===l,n=o?e.target.checked:void 0;s(e=>({...e,[a]:o?n:t})),r[a]&&d(e=>({...e,[a]:""}))},h=()=>{let s={};return e.firstName.trim()||(s.firstName="First name is required"),e.lastName.trim()||(s.lastName="Last name is required"),e.email.trim()?/\S+@\S+\.\S+/.test(e.email)||(s.email="Email is invalid"):s.email="Email is required",e.password?e.password.length<8&&(s.password="Password must be at least 8 characters"):s.password="Password is required",e.password!==e.confirmPassword&&(s.confirmPassword="Passwords do not match"),e.agreeTerms||(s.agreeTerms="You must agree to the terms and conditions"),s},p=async s=>{s.preventDefault();let r=h();if(Object.keys(r).length>0){d(r);return}m(!0),u("");try{console.log("Submitting registration:",e),await new Promise(e=>setTimeout(e,1e3)),console.log("Simulated registration successful."),window.location.href="/auth/signin?registered=true"}catch(e){console.error("Registration submission error:",e),u(e instanceof Error?e.message:"An error occurred during registration. Please try again.")}finally{m(!1)}};return(0,a.jsxs)("div",{className:"min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8",children:[(0,a.jsxs)("div",{className:"sm:mx-auto sm:w-full sm:max-w-md",children:[(0,a.jsx)(l.default,{href:"/",className:"flex justify-center",children:(0,a.jsx)("h1",{className:"text-3xl font-bold text-blue-600",children:"Andaman Explorer"})}),(0,a.jsx)("h2",{className:"mt-6 text-center text-3xl font-extrabold text-gray-900",children:" Create your account "}),(0,a.jsxs)("p",{className:"mt-2 text-center text-sm text-gray-600",children:[" Already have an account?"," "," ",(0,a.jsx)(l.default,{href:"/auth/signin",className:"font-medium text-blue-600 hover:text-blue-500",children:" Sign in "})," "]})]}),(0,a.jsx)("div",{className:"mt-8 sm:mx-auto sm:w-full sm:max-w-md",children:(0,a.jsxs)("div",{className:"bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10",children:[c&&(0,a.jsxs)("div",{className:"mb-4 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded relative",children:[" ",c," "]}),(0,a.jsxs)("form",{className:"space-y-6",onSubmit:p,children:[(0,a.jsxs)("div",{className:"grid grid-cols-1 gap-6 sm:grid-cols-2",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{htmlFor:"firstName",className:"block text-sm font-medium text-gray-700",children:" First name "}),(0,a.jsxs)("div",{className:"mt-1",children:[" ",(0,a.jsx)("input",{id:"firstName",name:"firstName",type:"text",autoComplete:"given-name",value:e.firstName,onChange:x,className:"appearance-none block w-full px-3 py-2 border ".concat(r.firstName?"border-red-300":"border-gray-300"," rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm")})," ",r.firstName&&(0,a.jsx)("p",{className:"mt-2 text-sm text-red-600",children:r.firstName})," "]})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{htmlFor:"lastName",className:"block text-sm font-medium text-gray-700",children:" Last name "}),(0,a.jsxs)("div",{className:"mt-1",children:[" ",(0,a.jsx)("input",{id:"lastName",name:"lastName",type:"text",autoComplete:"family-name",value:e.lastName,onChange:x,className:"appearance-none block w-full px-3 py-2 border ".concat(r.lastName?"border-red-300":"border-gray-300"," rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm")})," ",r.lastName&&(0,a.jsx)("p",{className:"mt-2 text-sm text-red-600",children:r.lastName})," "]})]})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{htmlFor:"email",className:"block text-sm font-medium text-gray-700",children:" Email address "}),(0,a.jsxs)("div",{className:"mt-1 relative rounded-md shadow-sm",children:[" ",(0,a.jsxs)("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:[" ",(0,a.jsx)(o.Z,{className:"h-5 w-5 text-gray-400"})," "]})," ",(0,a.jsx)("input",{id:"email",name:"email",type:"email",autoComplete:"email",value:e.email,onChange:x,className:"appearance-none block w-full pl-10 px-3 py-2 border ".concat(r.email?"border-red-300":"border-gray-300"," rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"),placeholder:"you@example.com"})," "]})," ",r.email&&(0,a.jsx)("p",{className:"mt-2 text-sm text-red-600",children:r.email})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{htmlFor:"phone",className:"block text-sm font-medium text-gray-700",children:" Phone number (optional) "}),(0,a.jsxs)("div",{className:"mt-1",children:[" ",(0,a.jsx)("input",{id:"phone",name:"phone",type:"tel",autoComplete:"tel",value:e.phone,onChange:x,className:"appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm",placeholder:"+91 9876543210"})," "]})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{htmlFor:"password",className:"block text-sm font-medium text-gray-700",children:" Password "}),(0,a.jsxs)("div",{className:"mt-1 relative rounded-md shadow-sm",children:[" ",(0,a.jsxs)("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:[" ",(0,a.jsx)(n.Z,{className:"h-5 w-5 text-gray-400"})," "]})," ",(0,a.jsx)("input",{id:"password",name:"password",type:"password",autoComplete:"new-password",value:e.password,onChange:x,className:"appearance-none block w-full pl-10 px-3 py-2 border ".concat(r.password?"border-red-300":"border-gray-300"," rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm")})," "]})," ",r.password&&(0,a.jsx)("p",{className:"mt-2 text-sm text-red-600",children:r.password})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{htmlFor:"confirmPassword",className:"block text-sm font-medium text-gray-700",children:" Confirm password "}),(0,a.jsxs)("div",{className:"mt-1",children:[" ",(0,a.jsx)("input",{id:"confirmPassword",name:"confirmPassword",type:"password",autoComplete:"new-password",value:e.confirmPassword,onChange:x,className:"appearance-none block w-full px-3 py-2 border ".concat(r.confirmPassword?"border-red-300":"border-gray-300"," rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm")})," ",r.confirmPassword&&(0,a.jsx)("p",{className:"mt-2 text-sm text-red-600",children:r.confirmPassword})," "]})]}),(0,a.jsxs)("div",{className:"flex items-center",children:[" ",(0,a.jsx)("input",{id:"agreeTerms",name:"agreeTerms",type:"checkbox",checked:e.agreeTerms,onChange:x,className:"h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded ".concat(r.agreeTerms?"border-red-300":"")})," ",(0,a.jsxs)("label",{htmlFor:"agreeTerms",className:"ml-2 block text-sm text-gray-900",children:[" I agree to the"," "," ",(0,a.jsx)("a",{href:"#",className:"text-blue-600 hover:text-blue-500",children:" Terms and Conditions "})," "," and"," "," ",(0,a.jsx)("a",{href:"#",className:"text-blue-600 hover:text-blue-500",children:" Privacy Policy "})," "]})," "]})," ",r.agreeTerms&&(0,a.jsx)("p",{className:"mt-2 text-sm text-red-600",children:r.agreeTerms}),(0,a.jsxs)("div",{children:[" ",(0,a.jsxs)("button",{type:"submit",disabled:i,className:"w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50",children:[" ",i?"Creating account...":"Create account"," "]})," "]})]}),(0,a.jsxs)("div",{className:"mt-6",children:[(0,a.jsxs)("div",{className:"relative",children:[" ",(0,a.jsxs)("div",{className:"absolute inset-0 flex items-center",children:[" ",(0,a.jsx)("div",{className:"w-full border-t border-gray-300"})," "]})," ",(0,a.jsxs)("div",{className:"relative flex justify-center text-sm",children:[" ",(0,a.jsx)("span",{className:"px-2 bg-white text-gray-500",children:"Or continue with"})," "]})," "]}),(0,a.jsxs)("div",{className:"mt-6 grid grid-cols-2 gap-3",children:[" "," ",(0,a.jsxs)("div",{children:[" ",(0,a.jsxs)("a",{href:"#",className:"w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50",children:[" ",(0,a.jsx)("span",{className:"sr-only",children:"Sign up with Google"})," "," ",(0,a.jsx)("svg",{className:"w-5 h-5",fill:"currentColor",viewBox:"0 0 24 24",children:(0,a.jsx)("path",{d:"M12.545 10.239v3.821h5.445c-0.712 2.315-2.647 3.972-5.445 3.972-3.332 0-6.033-2.701-6.033-6.032s2.701-6.032 6.033-6.032c1.498 0 2.866 0.549 3.921 1.453l2.814-2.814c-1.798-1.677-4.198-2.707-6.735-2.707-5.523 0-10 4.477-10 10s4.477 10 10 10c8.396 0 10-7.326 10-12 0-0.791-0.089-1.562-0.252-2.311h-9.748z"})})," "]})," "]})," ",(0,a.jsxs)("div",{children:[" ",(0,a.jsxs)("a",{href:"#",className:"w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50",children:[" ",(0,a.jsx)("span",{className:"sr-only",children:"Sign up with Facebook"})," "," ",(0,a.jsx)("svg",{className:"w-5 h-5",fill:"currentColor",viewBox:"0 0 24 24",children:(0,a.jsx)("path",{d:"M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385h-3.047v-3.47h3.047v-2.642c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686 0.235 2.686 0.235v2.953h-1.514c-1.491 0-1.956 0.925-1.956 1.874v2.25h3.328l-0.532 3.47h-2.796v8.385c5.737-0.9 10.125-5.864 10.125-11.854z"})})," "]})," "]})," "]})]})]})})]})}}},function(e){e.O(0,[451,971,30,744],function(){return e(e.s=4313)}),_N_E=e.O()}]);