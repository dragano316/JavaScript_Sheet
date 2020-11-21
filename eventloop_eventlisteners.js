//js is implemented by chrome v8 engine.
//v8 has two parts:
//heap & stack
//heap is used to memory used by js program. it is the free space in the os.
//within stack the js code gets executed line by line
//js is single threaded non blocking-> i.e it can call only one stack to execute the program.
//some functions such as settimeout are not available in js, they are a part of webapis provided by browsers, so whenever 
//these web apis are called
//they get processed and are pushed to task queue, now when ever the entire stack is empty the stack looks into the queue 
//for available tasks.


//eventlisteners-> listening out to what user is doing-> used to create interactive pages
//suppose user clicks a button then a function is called and performs certain functionality.
//using addEventListener attaches an event natively rather than directly attaching it to object.
//we can remove an eventlistener but we have to create the function before and pass it as a reference.