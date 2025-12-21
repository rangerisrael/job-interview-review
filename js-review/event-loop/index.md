The event loop is JavaScript's mechanism for
handling asynchronous operations.
It's what allows JavaScript to be non-blocking despite being single-threaded — meaning it can handle multiple tasks without freezing up, even though it can only execute one piece of code at a time.

The event loop is JavaScript's coordination system. Since JS is single-threaded, it can only execute one function at a time on the call stack. But when async operations like timers or API calls are initiated, they're handled by Web APIs outside the main thread. When these operations complete, their callbacks go into a queue. The event loop constantly monitors the call stack — when it's empty, it pulls callbacks from the queue and executes them. This lets JavaScript handle multiple operations efficiently without blocking, even with just one thread

The Core Concept (Use This Analogy)
Think of a restaurant with one chef (single thread):

The chef can only cook one dish at a time
But when a dish needs to bake in the oven (async operation), the chef doesn't just stand there waiting
Instead, the chef starts preparing other orders
When the timer rings (callback ready), the chef completes that baked dish

That's the event loop — constantly checking: "Is the main work done? Any async tasks finished? Let me grab the next one!"
How It Actually Works
JavaScript runtime has these key components:

1. Call Stack

Where your code executes line by line
LIFO (Last In, First Out) — like stacking plates
Can only do ONE thing at a time

2. Web APIs / Browser APIs

Where async operations actually happen (setTimeout, fetch, DOM events)
These run OUTSIDE the JavaScript engine
Managed by the browser/Node.js environment

3. Callback Queue (Task Queue)

Holds callbacks from completed async operations
Waits for the call stack to be empty

4. Event Loop

Continuously checks: "Is the call stack empty?"
If yes → moves the first callback from queue to stack

Step-by-step:

console.log('Start') → Call Stack → executes → prints "Start"
setTimeout(...) → sent to Web API (timer starts), not blocking the stack
console.log('End') → Call Stack → executes → prints "End"
Call stack now empty, setTimeout timer done → callback moves to Callback Queue
Event Loop sees empty stack → moves callback to stack → executes → prints "Timeout"

## Complete Picture with All Parts:

```
┌─────────────────────────────────────────────────┐
│  JavaScript Environment                         │
│                                                  │
│  ┌────────────────┐         ┌────────────────┐ │
│  │  Call Stack    │         │   Web APIs     │ │
│  │  (Chef's       │         │   (Helpers)    │ │
│  │   Counter)     │         │                │ │
│  │                │         │  - setTimeout  │ │
│  │  Currently     │──send──→│  - fetch       │ │
│  │  executing     │         │  - DOM events  │ │
│  │  ONE function  │         │                │ │
│  └────────────────┘         └────────────────┘ │
│         ↑                            │          │
│         │                            │          │
│         │ when empty,                │ when     │
│         │ execute next               │ complete │
│         │                            ↓          │
│  ┌──────┴──────────┐       ┌────────────────┐ │
│  │  Event Loop     │       │ Callback Queue │ │
│  │  (Manager)      │       │ (Pickup        │ │
│  │                 │       │  Counter)      │ │
│  │  "Is stack      │←check─│                │ │
│  │   empty?"       │       │  [callback 1]  │ │
│  │                 │       │  [callback 2]  │ │
│  └─────────────────┘       │  [callback 3]  │ │
│                             └────────────────┘ │
└─────────────────────────────────────────────────┘
```


┌──────────────────────────────────────────────────────────┐
│  JavaScript Runtime Environment                          │
│                                                           │
│  ┌─────────────────────┐    ┌──────────────────────────┐│
│  │   Memory Heap       │    │      Call Stack          ││
│  │   (Storage Room)    │    │   (Chef's Workstation)   ││
│  │                     │    │                          ││
│  │  Variables:         │    │   ┌────────────────┐    ││
│  │  - name = "Israel"  │◄───┼───│ function3()    │    ││
│  │  - age = 25         │    │   ├────────────────┤    ││
│  │  - user = {obj}     │◄───┼───│ function2()    │    ││
│  │                     │    │   ├────────────────┤    ││
│  │  Objects:           │    │   │ function1()    │    ││
│  │  - {id: 1, ...}     │◄───┼───│ main()         │    ││
│  │  - [1,2,3,4]        │    │   └────────────────┘    ││
│  │                     │    │    ↑ ONE at a time       ││
│  │  Functions:         │    │                          ││
│  │  - myFunction() {}  │    │                          ││
│  └─────────────────────┘    └──────────────────────────┘│
│           ↑                              ↓               │
│           │                              │               │
│           │ References data              │ when empty    │
│           │                              │               │
│  ┌────────┴────────────┐        ┌───────┴─────────────┐│
│  │    Web APIs         │        │   Callback Queue    ││
│  │    (Helpers)        │        │   (Pickup Counter)  ││
│  │                     │        │                     ││
│  │  - setTimeout       │──done─→│   [callback1]      ││
│  │  - fetch            │        │   [callback2]       ││
│  │  - DOM events       │        │   [callback3]       ││
│  └─────────────────────┘        └─────────────────────┘│
│                                          ↑               │
│         ┌────────────────────────────────┘               │
│         │                                                │
│  ┌──────┴──────────┐                                    │
│  │   Event Loop    │  "Stack empty? Grab next callback" │
│  │   (Manager)     │                                    │
│  └─────────────────┘                                    │
└──────────────────────────────────────────────────────────┘