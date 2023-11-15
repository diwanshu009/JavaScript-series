/* Javascript code execution-->
1. JS creates Global excution context 
2. Next it creates memory phase
3. Memory phase - In this phase,the variables are set to undefined 
   until the execution phase(next phase) and the functions are set to their definitions.
4. Next it creates the execution phase
5. Execution phase - In this phase,the variables are initialsed to given values and 
   when the functions are called,it creates a memory phase and execution phase for the function 
   just like the main one. The new executional context will further get deleted when its work get completed!!

--> That's how the javascript code gets executed (Similarly the call stack will be executed!!)

For Live demo:
browser > inspect > Sources
create a snippet with few functions and visually experience the call stack. */
