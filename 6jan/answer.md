
1.Node.js Architecture
Node.js is designed to handle many requests at the same time without blocking. It follows an event-driven and non-blocking architecture.
Main components of Node.js architecture:
- JavaScript Engine (V8)
- Node.js Core APIs
- Native Bindings
- libuv
- Event Loop
Flow in simple words:
User request → Node.js receives it → Event Loop checks task → If async, libuv handles it → Result comes back → Response sent to user
-----------------------------------------------------------------------------------------------------------------------------------
2.JavaScript Engine (V8)
V8 is the JavaScript engine developed by Google. It is responsible for executing JavaScript code.
What V8 does:
- Converts JavaScript into machine code
- Executes code very fast
- Handles memory management and garbage collection
Node.js uses V8 because it is fast, stable, and well maintained.
--------------------------------------------------------------------------------------------------------------------------------------
3.Node.js Core APIs
Node.js provides built-in modules known as Core APIs.
Examples:
- fs – file system operations
- http – create server
- path – handle file paths
- os – system information
These APIs allow Node.js to interact with the operating system directly.
--------------------------------------------------------------------------------------------------------------------------------------
4.Native Bindings
Native bindings act as a bridge between JavaScript and C/C++ code.
Why native bindings are needed:
- Some low-level operations need C/C++ for speed
- System-level features cannot be handled by JS alone
Example:
When we use the fs module, internally C++ code is executed using native bindings.
--------------------------------------------------------------------------------------------------------------------------------------
5.Event Loop
The Event Loop is the core mechanism that makes Node.js non-blocking.
What it does:
- Checks the call stack
- Picks tasks from queues
- Executes callbacks one by one
The Event Loop allows Node.js to handle multiple users without waiting for one task to finish.
--------------------------------------------------------------------------------------------------------------------------------------
6.libuv
libuv is a C library used by Node.js to handle asynchronous operations.
It manages:
- File system operations
- Network operations
- Timers
- Thread pool
--------------------------------------------------------------------------------------------------------------------------------------
Why Node.js needs libuv
JavaScript is single-threaded. libuv helps Node.js perform heavy operations in the background without blocking the main thread.
Without libuv, Node.js would freeze during file read or network calls.
--------------------------------------------------------------------------------------------------------------------------------------
Responsibilities of libuv
- Managing the event loop
- Handling async I/O operations
- Managing the thread pool
- Communicating with the operating system
In short, libuv handles all background tasks.
--------------------------------------------------------------------------------------------------------------------------------------
7.Thread Pool
 What is a Thread Pool?
A thread pool is a group of threads used to execute blocking operations.
By default, Node.js has 4 threads in the thread pool.
--------------------------------------------------------------------------------------------------------------------------------------
Why Node.js uses a Thread Pool
Some operations are slow and can block the main thread, such as file reading or encryption.  
To avoid this, Node.js sends these tasks to the thread pool.

--------------------------------------------------------------------------------------------------------------------------------------
Which operations are handled by the Thread Pool?

- File system operations (fs)
- Crypto operations
- DNS lookup
- Compression (zlib)

--------------------------------------------------------------------------------------------------------------------------------------
8. Worker Threads
What are Worker Threads?
Worker threads allow running JavaScript in multiple threads. Each worker has its own event loop and memory.

--------------------------------------------------------------------------------------------------------------------------------------

Why are Worker Threads needed?

Node.js is single-threaded. Heavy CPU tasks can block the main thread.  
Worker threads are used for:
- Image processing
- Heavy calculations
- Data processing

--------------------------------------------------------------------------------------------------------------------------------------
Difference: Thread Pool vs Worker Threads
Thread Pool    	         Worker Threads
Used internally by Node  Created by developer
Handles system tasks	 Handles custom JS tasks
Limited control	         Full control
Small background work	 Heavy CPU work
--------------------------------------------------------------------------------------------------------------------------------------

9. Event Loop Queues
Node.js has different queues to manage tasks.

--------------------------------------------------------------------------------------------------------------------------------------
Macro Task Queue
Contains:
- setTimeout
- setInterval
- setImmediate
- I/O callbacks

Example:
setTimeout(() => {
  console.log("Hello");
}, 0);

