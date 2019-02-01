# SmartServ_test

In this test we convert numbers to words to a superman name.

## Install ruby using [RVM](https://rvm.io/rvm/install)

## Things done in this test

1. Store all mappings and reverse mappings in yml file

2. Store dictionary as hash index in index_dict.yml file

3. Retrieve data from stored yml files for conversion

## Commands to run the code

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