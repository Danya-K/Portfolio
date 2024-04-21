// Event listener for when the service worker is being installed
self.addEventListener("install", (installing) => {
  console.log("Service Worker: I am being installed, hello world!");
});

// Event listener for when the service worker is activated
self.addEventListener("activate", (activating) => {	
  console.log("Service Worker: All systems online, ready to go!");
});

// Event listener for when the service worker is fetching a resource
self.addEventListener("fetch", (fetching) => {   
  console.log("Service Worker: User threw a ball, I need to fetch it!");
});

// Event listener for when the service worker receives a push notification
self.addEventListener("push", (pushing) => {
  console.log("Service Worker: I received some push data, but because I am still very simple I don't know what to do with it :(");
});
