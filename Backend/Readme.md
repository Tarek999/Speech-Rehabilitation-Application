## Local Server Connection and Database Creation

1. install ammps or any similar application to run local server
2. Go to DB/mydb.py 
3. make sure to change the user and password with your server variables

    ```
    user="root",
    passwd="mysql"
    ```
4. uncomment the function [ create_all() ] to create your database with audio files in Dataset folder
    ```
    # create_all()
    ```

## Run The Server 
-   open terminal in the Backend folder
    ```
    python app.py
    ```

## Note 
-   when runing the application make sure to set the debug mode in app.py file to False
    ```
    app.run(host= '0.0.0.0',port= 8000,debug=False)
    ```

