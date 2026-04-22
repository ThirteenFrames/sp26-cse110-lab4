1. Line 12 prints `3`. This is because `i` is declared as a `var`, meaning that it can be accessed anywhere in the parent function `discountPrices`. Since the last modification to `i` was when it was incremented to the length of the array of prices, which was 3, the value 3 is printed. 
2. Line 13 prints `150`. This is because `discountedPrice` is declared as a `var`, meaning that it can be accessed anywhere in the parent function `discountPrices`. The last modification to `discountedPrice` was in the last iteration of the loop, when the discount of 50% was applied to 300, the last value in the array `prices`. This gives the value of `150`.
3. Line 14 prints  `150`. From lines 7-8, it is clear that `finalPrice` will always be based on the value of `discountedPrice`. In the previous question it was showed that this value was 150 in the last iteration of the loop. Since `150` is an integer, rounding `150 * 100` will also give `150 * 100`. Then we have `150 * 100 / 100 = 150`, and so `finalPrice` in this case is equal to `discountedPrice`. 
4. The function returns the array `[50, 100, 150]`. This is because primitives like numbers in javascript are passed by value. So when line 9 runs, a copy of the current value of `finalPrice` is made and is pushed into `discounted`. Again, as `prices` in this case consists of integers, `finalPrice` is always equal to `discountedPrice`. So `discounted` is simply the array after applying the discount of 50% to each of the values is `prices`. 
5. The code causes this error in line 12: `ReferenceError: i is not defined`. This happens because the `let` keyword is used in the `for` loop, and line 12 is outside the scope of the for loop, so `i` is not defined in that scope. 
6. Similarly to the previous question, the code causes this error in line 13: `ReferenceError: discountedPrice is not defined`. This is also because the `let` keyword is used, and `discountedScope` is inside the `for` loop body, while the statement in line 13 is outside the loop body. 
7. Line 14 prints `150`. This is because `finalPrice` was declared in the same(or larger) scope, in line 4, as the scope of the statement in line 13. So the same behavior as question 3 is expected. 
8. The function returns `[50, 100, 150]`. No out of scope accesses are being made. In line 16, the array `discounted` has been declared in the same scope, in line 4. 
9. There is an error in line 11: `ReferenceError: i is not defined`. This is because again, the `let` keyword is used in the `for` loop for the declaration of `i`, and line 11 uses `i` but is outside the scope `i` was declared in. Line 8 doesn't cause an error, because in Javascript, const arrays are not reassignable, but they are mutable.  
10. Line 12 prints `3`. This is because `length` was declared in the same(or greater) scope, in line 4, than where it was used in line 12. 
11. The function returns `[50, 100, 150]`. Again, const arrays are mutable, so pushing to `discounted` is okay. No other out of scope errors or reassigning consts are happening. Thus the expected logic of the discount being applied to all values in `prices` happens. 
12. 
    * (A) ```student.name```
    * (B) ```student["Grad Year"]```
    * (C) ```student.greeting()```
    * (D) ```student["Favorite Teacher"].name```
    * (E) ```student.courseLoad[0]```
13. 
    * (A) ```32```. This is because string concatenation is prioritized over addition, so the number `2` is converted into the string `'2'`, and string concatenation is performed. 
    * (B) ```1```. This is because the `-` operator is undefined for strings but makes sense for numbers, so the string `'1'` is converted into the number `1`, and subtraction is performed.
    * (C) ```3```. The value `null` is automatically converted into the number `0`, and `3 + 0 = 3`. 
    * (D) ```3null```. The value `null` is automatically converted into the string `'null'`, and string concatenation is performed. 
    * (E) ```4```. The value `true` is converted into the number `1`, and addition is performed. 
    * (F) ```0```. The value `false` is converted into the number `0`, and the value `null` is also converted into the number `0`.
    * (G) ```3undefined```. The value `undefined` is converted into the string `'undefined'`, and string concatenation is performed. 
    * (H) ```NaN```. Javascript attempts to convert both types to a number, and perform a subtraction. `undefined` is converted into `NaN`, and arithmetic operations on `NaN` will also return `NaN`. 
14. Note that when comparing values of different types, Javascript converts both values into numbers. 
    * (A) ```true```. The value `'2'` is converted into the number `2`, and 2 is greater than 1. 
    * (B) ```false```. These values are the same type, so lexicographic comparison is used. Since the first characters are different, and 1 is smaller than 2 lexicographically, the first string is actually larger than the second string. 
    * (C) ```true```. Javascript converts `'2'` into the number `2`. Both values are then equal. 
    * (D) ```false```. Since the two types are different (number and string), the expression automatically evaluates to false. 
    * (E) ```false```. The value `true` is converted into the number `1`, and 1 is not equal to 2. 
    * (F) ```True```. The boolean conversion converts `2` into `true`. Both values are the same type, and are equal, so the expression returns true. 
15. The `==` operator and `===` operator work the same if the two types are equal. If the two types are not equal, then the `==` operator attempts to convert both types into numbers, and then perform the comparison, while the `===` operator automatically returns false. However, for `==`, there are exceptions with `null`. `null` is only loosely equal to itself, and `undefined`. For `==` there are also more exceptions with comparisons with objects and non-objects. 
16. 
    ``` 
    for (const property in statistics) {
        if (property[0] === 'r' || (typeof(statistics[property]) === "number" && statistics[property] % 2 !== 0 )) {
            console.log(statistics[property]);
        }
    } 
    ```
17. The resulting array is ```[2, 4, 6]```. In the function `modifyArray`, for each element of `array`, first the function `callback` is applied to the element, then the resulting value is pushed to the array `newArr`. As the function `callback` is passed as `doSomething`, which multiplies a number by 2, the function `modifyArray` effectively makes a copy of `array`, with all its elements multiplied by 2. Since `array` is `[1, 2, 3]`, then doubling all elements gives `[2, 4, 6]`. 
18. ```
    function printTime() {
        let d = new Date();
        let time = d.toLocaleTimeString();
        console.log(time);
    }

    setInterval(printTime, 1000);
    ```
19. ```
    1
    4
    3
    2
    ```
    4 is outputted before 3 likely because of the overhead of calling setTimeout().