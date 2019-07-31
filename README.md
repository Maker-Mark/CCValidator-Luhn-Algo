# Setting Started

If you're using a virtual environment, activate it and install the dependencies via a `pip install -r requirements.txt`.

Note: You may need to try `pip3 install -r requirements.txt`

## Running the Program
Simply navigate to the folder with a `main.py` (it's already in the root folder) and run the app via `python main.py` or `python3 main.py`.

The application should be running at `http://127.0.0.0:5000/` or `localhost:5000`
### Try it out (if any are being weird, try NOT copy and pasting, it makes things werid)
- Try VISA:4539979820991450,c,4539352675721569990
    - AMEX:349057239333032, 371067929418952
    - MASTERCARD:5136440315516223, 2221000786722388
    - DISCOVER:6011987337215950, 6011588501241465
    - DINERS CLUB: 30384568581872,30532405664760


## Watch it be responsive!

-![Watchk it Scale](https://i.imgur.com/aENNKp9.gif)

## Watch it recognize companies

![img](https://i.imgur.com/tAnXQxz.gif)

## Real-Time Luhn Validation

![img](https://i.imgur.com/l506e1v.gif)

## Real-Time Card Recognition

![img](https://i.imgur.com/oCNJaYS.gif)

### Why I implemented the Luhn algorithm with JavaScript

I preferred to implement the luhn algorithm with javascript because I saw the potential for faster way to implement the algorithm into a working, small application (in this case a checkout page). However, using javascript to parse user input as opposed to another language such as scheme is not as simple as many would like.
Scheme's main data structure is the list, while JavaScript does not have a list data structure, but rather an associative array, which is used as many data structures (stack, queue etc.). Lisp is homoiconic, meaning the written code and its data have the same primary representation, meaning that it is possible to inject a behavior at any time in a Scheme program even if it's at run-time. A way to think of this is as Scheme being a data structure it's self, being able to adjust (add, merge information and so on). JavaScript is non-homoiconic, so it's run-time is not the same as the primary representation of the user written code even though javascript is not complied and just interpreted. With JavaScrip's loosey goosy written types, lines are continuously interpreted and ran.
However, the web runs on JavaScript and that incentive has given people the ability to mutate the language to be able to do impressive operations. The main remedy to mimic this "data-structure" programming in javascript is the creation of Frameworks and modern Javascript functions introduced in ECMAScript2015 that introduced Classes, malleable lexical scope variables (let and const), and much much more. JavaScript's let and const allow more readable tail recursion, something that scheme is well known for, and significantly more efficient at. With JavaScripts new ways to handle asynchronous calls to API's with promises, and it's leading number of community run packages (over 350k on NPM) the possibilities are endless. Additionally JavaScript's new features, and its constant and growing support of being universally accessible by virtually anything that connects to the web, javascript is a promising technology that allows developers to make useful apps and solve users' problems in a highly accessible and fast-paced manner.
