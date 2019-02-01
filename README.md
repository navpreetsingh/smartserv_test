# SmartServ_test

## SUPERHERO TEST
In this test we convert numbers to words to a superman name.

### Install ruby using [RVM](https://rvm.io/rvm/install)

### Things done in this test

1. Store all mappings and reverse mappings in yml file

2. Store dictionary as hash index in index_dict.yml file

3. Retrieve data from stored yml files for conversion

### Commands to run the code

```
    cd superhero
```

1. Make mapping and reverse mapping yml file
```
    ruby mapping.rb
```

2. Make a index dictionary yml file
```
    ruby index_dict.rb
```

3. Convert numbers to words

    a. Default with given inputs
    ```
        ruby conversion.rb
    ```
    
    b. With external arguments
    ```
        ruby conversion.rb " 0 8467 " "0 228626"
    ```

4. Test cases are written in Minitest
```
    ruby -Ilib  conversion_test.rb
```


## HOTEL ROOM_RESERVATION

In this test we find the cheapest hotel from the dates and type given

### Install node using [NVM](https://nodesource.com/blog/installing-node-js-tutorial-using-nvm-on-mac-os-x-and-ubuntu/)

### Things done in this test

1. Store all default, inputs and outputs in js file

2. Retrieve data from stored js files for finding cheapest hotel

### Commands to run the code

```
    cd hotel_room_reservation
```

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