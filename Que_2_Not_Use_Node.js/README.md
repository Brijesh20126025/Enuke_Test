Where not to use Node.js

1. For CPU bound Applications
    Node.js is mainly designed for I/O bound applications and node.js is a best choice for I/O bounds application.
    Because in I/O the  application requires more I/O request than CPU request (means processor sometimes sits ideal).
    As we all know node.js is a single threaded application when it realize that process needs more I/O than CPU the node.js environment starts a new thread for I/O needs and main threads start serving new incoming request from client side.
    If we start developing a application which needs very less I/O opertaions and very high CPU request then what will happen 
    the event loop may get block or might not be able serve more CPU request because of  single threaded environment.
    The callback will not work properly in CPU intensive applicatios.
    When we communicate to database servers or to browsers then http protocols comes into picture and while dealing with this 
    protocol we executes  million of instructions during handshaking for http between client and server in between this time 
    main thread start serving another incoming request by attaching a event handler (broadly known as callback in node.js) to 
    enents but this does not happen in CPU bounds applications. These CPU bounds application rarely communicates with http protocol.

2. For Developing a real time operating system (like OS for satellites)
   The real time operating systems are highly CPU bound Operating systems so in this case node.js would not be a good fit.

3.  For Desktop Applications.
    As we know desktop applications needs a dependency on operating sysetm if we develop a desktop application in node then seperatly we     will have to develop a platform for supporting each and every indivisual OS and that is a overhead.
    
