
1. Line 9 prints "values added: 20". 
2. Line 13 prints "final result: 20". 
3. We should not use var as it follows different scope conventions 
    to other programming languages. In other languages, it is common for 
    a variable to only be defined in the local scope the variable is declared in. However, in Javascript, any var declared can be accessed in the function it is declared in. This can lead to variable naming issues, and can lead to unexpected bugs where one block of code is being affected by another block because of a var, despite the blocks being independent. There are some variables, like the looping variable in a for statement, that should naturally have a small scope. 
4. Line 9 prints "values added:  20". 
5. Line 13 returns the following error: "ReferenceError: result is not   defined". This is because the let keyword is local-scoped. The statement in line 13 is outside the scope where 'let result = 0' was written, so it is as if there is no such variable called result during the execution of line 13. 
6. There is an error at line 7: "TypeError: Assignment to constant variable." This happens because result was already assigned to 0, and line 7 attempts to modify the value of result, causing the error. Since the error happens before line 9, line 9 doesn't run. 
7. Similarly, as line 7 runs before line 13, line 13 doesn't run. 