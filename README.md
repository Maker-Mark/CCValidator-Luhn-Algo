# Setting Started

If you're using a virtual environment, activate it and install the dependencies via a `pip install -r requirements.txt`.

Note: You may need to try `pip3 install -r requirements.txt`

## Running the Program

Simply navigate to the app folder with a `cd app` and run the app via `python app.py` or `python3 app.py`.

The application should be running at `http://127.0.0.0:5000/` or `localhost:5000`

## Watch it be responsive!

-![Watchk it Scale](https://i.imgur.com/aENNKp9.gif)

## Watch it recognize companies

![img](https://i.imgur.com/tAnXQxz.gif)

## Real-Time Luhn Validation

![img](https://i.imgur.com/l506e1v.gif)

## Real-Time Card Recognition

![img](https://i.imgur.com/oCNJaYS.gif)

### Why I implemented the Luhn algorithm with JavaScript

I preferred to implement the luhn algorithm with javascript because I saw the potential for faster  way to implement the algorithem into a working, small application (in this case a checkout page). However, using javascript to parse user input as opposed to another language such as scheme is not as simple as many would like. 
Scheme's main data structure is the list, while JavaScript does not have a list data structure, but rather an associative array, which is used as many data strucutures (stack, queue etc.). Lisp is homoiconic, meaning the written code and its data have the same primary representation, meaning that it is possible to inject a behavior at any time in a Scheme program even if it's at runtime. A way to think of this is as Scheme being a data structure it's self, being able to adjust (add, merge information and so on). JavaScript is non-homoiconic it's loosy goosily written types functions make runtime conditions more strict.
However, the web runs on JavaScript and that incentive has given people the ability to mutate the language to be able to do impressive operations. The main remedy to mimic this "data-structure" programming in javascript is the creation of Frameworks and modern Javascrip functions.

with concrete examples and describe some ways that people/orgs have tried to overcome the weaknesses?
