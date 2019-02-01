# SmartServ_test

In this test we find the cheapest hotel from the dates and type given

## Install node using [NVM](https://nodesource.com/blog/installing-node-js-tutorial-using-nvm-on-mac-os-x-and-ubuntu/)

## Things done in this test

1. Store all default, inputs and outputs in js file

2. Retrieve data from stored js files for finding cheapest hotel

## Commands to run the code

1. Install Node packages
```
    npm install
```

2. Finding cheapest hotel

    a. With Default inputs
    ```
        node cheapest.js
    ```
    
    b. With external arguments
    ```
        node reservation.js "Regular: 16Mar2009(mon), 17Mar2009(tues), 18Mar2009(wed)" "Regular: 20Mar2009(fri), 21Mar2009(sat), 22Mar2009(sun) " " Rewards: 26Mar2009(thur), 27Mar2009(fri), 28Mar2009(sat) "
    ```

3. Test cases are written in Mocha & Chai
```
    npm test
```