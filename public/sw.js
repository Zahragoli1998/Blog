const CACHE_NAME = "version-1"
const urlsToCache = ['./index.html','./offline.html','./src/App.css','./src/index.css','./src/Login/Login.js','./src/Login/PostRequest.js']

const that = this

that.addEventListener('install',function(e){
   e.waitUntil(
		 caches.open(CACHE_NAME)
		 .then(cache => {
			 console.log('Opened cache')
			 
			 return cache.addAll(urlsToCache)
			})
	 )
})

// that.addEventListener('fetch', (e) => {
//   // e.respondWith((async () => {
//   //   const res = await caches.match(e.request);
//   //   if (res) { return res; }
// 		e.respondWith(
// 			caches.match(e.request)
// 			.then((res)=>{
// 				if (res) {
// 					return res;
// 					}
// 					const response =  fetch(e.request);
// 					const cache = caches.open(CACHE_NAME);
// 					cache.put(e.request, response.Clone());
// 					return response;
// 				}));
// 			});
			
that.addEventListener('fetch', (e) => {
  // e.respondWith((async () => {
  //   const res = await caches.match(e.request);
  //   if (res) { return res; }
		e.respondWith(
			caches.match(e.request)
			.then((res)=>{
				return  res || fetch(e.request).then((fetchRes =>{
         return caches.open(CACHE_NAME).then(cache =>{
					 cache.put(e.request.url,fetchRes.clone())
					 return fetchRes
				 })
				}))
				})
				);
			});
			
			
			
// that.addEventListener('fetch',(e)=>{
// 	console.log(e.request.url);
// 		e.respondWith((
// 			caches.match(e.request)
// 			 .then((res)=>{
// 				if (res) {
// 					return res;
// 					}
// 					return fetch(e.request)
// 					.then(res => caches.open(CACHE_NAME))
// 					.then(cache => cache.put(e.request,res.clone()))
// 					// return fetch(e.request).then(res=>{ 
// 					// 	return caches.open(CACHE_NAME)}
// 					// 	.then(cache => cache.put((e.request),res.clone())	
// 			 })
// 		))
// 	})

that.addEventListener('activate',(e)=>{
	
	   const cacheWhitelist = []
		 console.log('cccc',cacheWhitelist);
	
		 cacheWhitelist.push(CACHE_NAME)
	
		 e.waitUntil(
			 caches.keys().then((cacheNames)=> Promise.all(
				 cacheNames.map((cacheName) =>{
					 if (!cacheWhitelist.includes(cacheName)) {
						 return caches.delete(cacheName)
					 } 
				 })
			 ))
		 )
	})