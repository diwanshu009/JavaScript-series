/* Node.js is a cross-platform, open-source JavaScript runtime environment that can run on Windows, Linux, Unix, macOS, 
and more. Node.js runs on the V8 JavaScript engine, and executes JavaScript code outside a web browser. */

// Node.js is used to create a http (client side) server (Hyper text transfer protocol)!!

/* HTTP provides a standard between a web browser and a web server to establish communication. It is a set of rules 
for transferring data from one computer to another. Data such as text, images, and other multimedia files are shared on 
the World Wide Web. Whenever a web user opens their web browser, the user indirectly uses HTTP */

/* Working of HTTP server:
First of all, whenever we want to open any website then first open a web browser after that we will type the URL of that
website (e.g., www.facebook.com ). This URL is now sent to Domain Name Server (DNS). Then DNS first check records for 
this URL in their database, then DNS will return the IP address to the web browser corresponding to this URL. 
Now the browser is able to send requests to the actual server. 

After the server sends data to the client, the connection will be closed. If we want something else from the server we 
should have to re-establish the connection between the client and the server. */

// If we want to create our own url, we have to purchase our own IP!!
// There 4 types of request and these are : get(default),put,post,delete

// Express is a library to create http server!!