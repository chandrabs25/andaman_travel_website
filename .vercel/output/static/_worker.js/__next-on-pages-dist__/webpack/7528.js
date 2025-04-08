var m={},y=(f,v,w)=>(m.__chunk_7528=(k,_,g)=>{"use strict";g.d(_,{db:()=>h});let p=null,n={users:[{id:1,email:"user@example.com",password_hash:"hashed_password",first_name:"John",last_name:"Doe",phone:"9876543210",role_id:1},{id:2,email:"vendor@example.com",password_hash:"hashed_password",first_name:"Jane",last_name:"Smith",phone:"8765432109",role_id:2}],islands:[{id:1,name:"Havelock Island",description:"Home to Radhanagar Beach, one of Asia's best beaches",image_url:"/images/havelock.jpg",location:"Andaman Islands"},{id:2,name:"Neil Island",description:"Known for its pristine beaches and natural bridge",image_url:"/images/neil.jpg",location:"Andaman Islands"},{id:3,name:"Port Blair",description:"The capital city with historical Cellular Jail",image_url:"/images/port-blair.jpg",location:"Andaman Islands"},{id:4,name:"Baratang Island",description:"Famous for limestone caves and mud volcanoes",image_url:"/images/baratang.jpg",location:"Andaman Islands"}],services:[{id:1,name:"Scuba Diving",description:"Explore vibrant coral reefs and marine life",image_url:"/images/scuba.jpg",price:4500,duration:"3 hours",island_id:1,provider_id:1},{id:2,name:"Glass Bottom Boat Tour",description:"View the underwater world without getting wet",image_url:"/images/boat.jpg",price:1800,duration:"2 hours",island_id:1,provider_id:1},{id:3,name:"Sea Walking",description:"Walk on the ocean floor with specialized equipment",image_url:"/images/sea-walking.jpg",price:3500,duration:"2 hours",island_id:2,provider_id:2},{id:4,name:"Kayaking",description:"Paddle through mangroves and bioluminescent waters",image_url:"/images/kayaking.jpg",price:2e3,duration:"3 hours",island_id:3,provider_id:2}],packages:[{id:1,name:"Andaman Island Explorer",description:"7-day comprehensive tour of the major Andaman Islands",image_url:"/images/package1.jpg",price:35e3,duration:"7 days / 6 nights",is_active:1},{id:2,name:"Havelock Beach Retreat",description:"Relaxing 4-day beach vacation on Havelock Island",image_url:"/images/package2.jpg",price:22e3,duration:"4 days / 3 nights",is_active:1},{id:3,name:"Adventure Package",description:"Action-packed 5-day adventure with scuba, trekking and more",image_url:"/images/package3.jpg",price:28e3,duration:"5 days / 4 nights",is_active:1}],bookings:[{id:1,user_id:1,package_id:1,total_people:"2",start_date:"2025-05-10",end_date:"2025-05-17",total_amount:7e4},{id:2,user_id:1,package_id:2,total_people:"4",start_date:"2025-06-15",end_date:"2025-06-19",total_amount:88e3}],reviews:[{id:1,user_id:1,service_id:1,rating:5,comment:"Amazing experience! The coral reefs were beautiful.",first_name:"John",last_name:"Doe"},{id:2,user_id:1,service_id:2,rating:4,comment:"Great way to see marine life without getting wet.",first_name:"John",last_name:"Doe"}],ferry_schedules:[{id:1,ferry_id:1,origin_id:3,destination_id:1,departure_time:"2025-04-15 08:00:00",arrival_time:"2025-04-15 10:30:00",price:1200,ferry_name:"Makruzz",capacity:200},{id:2,ferry_id:1,origin_id:1,destination_id:3,departure_time:"2025-04-15 14:00:00",arrival_time:"2025-04-15 16:30:00",price:1200,ferry_name:"Makruzz",capacity:200},{id:3,ferry_id:2,origin_id:3,destination_id:2,departure_time:"2025-04-15 09:30:00",arrival_time:"2025-04-15 11:30:00",price:1e3,ferry_name:"Green Ocean",capacity:150}],service_providers:[{id:1,user_id:2,business_name:"Andaman Adventures",description:"Premier adventure sports provider in Andaman",address:"Beach No. 5, Havelock Island",verified:1}]};console.log("Initializing Mock Database...");let h=p={prepare:t=>{console.log("Mock DB Prepare:",t);let r=t.toLowerCase(),a="",u=r.match(/from\s+([\w]+)/),o=r.match(/insert into\s+([\w]+)/),l=r.match(/update\s+([\w]+)/),c=r.match(/delete from\s+([\w]+)/);return console.log("Mock DB Table:",a=u?u[1]:o?o[1]:l?l[1]:c?c[1]:"unknown"),{bind:(...i)=>(console.log("Mock DB Bind Args:",i),{first:async()=>{if(console.log("Mock DB First - Table:",a,"Args:",i),a==="users"){if(r.includes("where email = ?")&&i[0])return n.users.find(e=>e.email===i[0])||null;if(r.includes("where id = ?")&&i[0])return n.users.find(e=>e.id===i[0])||null}else{if(a==="islands"&&r.includes("where id = ?")&&i[0])return n.islands.find(e=>e.id===i[0])||null;if(a==="services"&&r.includes("where id = ?")&&i[0])return n.services.find(e=>e.id===i[0])||null;if(a==="packages"&&r.includes("where id = ?")&&i[0])return n.packages.find(e=>e.id===i[0])||null;if(a==="service_providers"&&r.includes("where user_id = ?")&&i[0])return n.service_providers.find(e=>e.user_id===i[0])||null}return console.log("Mock DB First - No Match - Returning null"),null},all:async()=>{if(console.log("Mock DB All - Table:",a,"Args:",i),a==="islands")return{results:n.islands};if(a==="services")return r.includes("where island_id = ?")&&i[0]?{results:n.services.filter(e=>e.island_id===i[0])}:r.includes("where provider_id = ?")&&i[0]?{results:n.services.filter(e=>e.provider_id===i[0])}:{results:n.services};if(a==="packages"){let e=n.packages;return r.includes("where is_active = ?")&&i.includes(1)&&(e=e.filter(s=>s.is_active===1)),{results:e}}if(a==="bookings"&&r.includes("where user_id = ?")&&i[0])return{results:n.bookings.filter(e=>e.user_id===i[0])};if(a==="reviews"&&r.includes("where service_id = ?")&&i[0])return{results:n.reviews.filter(e=>e.service_id===i[0]).map(e=>{let s=n.users.find(d=>d.id===e.user_id);return{...e,user_name:s?`${s.first_name} ${s.last_name}`:"Unknown User"}})};if(a==="ferry_schedules"){let e=n.ferry_schedules;return i.length>=3&&r.includes("where fs.origin_id = ?")&&r.includes("fs.destination_id = ?")&&r.includes("date(fs.departure_time) = ?")&&(e=e.filter(s=>s.origin_id===i[0]&&s.destination_id===i[1]&&s.departure_time.startsWith(i[2]))),{results:e.map(s=>({...s,ferry_name:s.ferry_name||"Unknown Ferry"}))}}if(a==="destinations"){let e=n.islands;if(r.includes("where name like ?")){let s=i[0].replace(/%/g,"").toLowerCase();e=e.filter(d=>d.name.toLowerCase().includes(s)||d.description&&d.description.toLowerCase().includes(s)||d.location&&d.location.toLowerCase().includes(s))}return{results:e}}else if(a==="service_providers"&&r.includes("where verified = ?")){let e=n.service_providers;return i.includes(1)&&(e=e.filter(s=>s.verified===1)),{results:e}}return console.log("Mock DB All - No Match - Returning empty array"),{results:[]}},run:async()=>(console.log("Mock DB Run - Table:",a,"Args:",i),o||l||c?(console.log("Mock DB Run - Success (Simulated)"),{success:!0,meta:{changes:1,last_row_id:Math.floor(1e3*Math.random())+1}}):(console.log("Mock DB Run - Failed (Not Insert/Update/Delete)"),{success:!1,meta:{changes:0}}))})}},exec:async t=>(console.log("Mock DB Exec:",t),{count:0,duration:1}),batch:async t=>{console.log("Mock DB Batch - Statements:",t.length);let r=[];for(let a of t)r.push(await a.run());return r},dump:async()=>(console.log("Mock DB Dump - Returning empty buffer"),new ArrayBuffer(0))}},m);export{y as __getNamedExports};
