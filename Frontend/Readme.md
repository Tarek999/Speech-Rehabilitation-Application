## To Run The Application
1. Open terminal in this folder and write 
    ``` 
    npm install
    ```
2. To Run as Web Application make sure to comment the local-storage import line in app.js
    and uncomment it for Mobile Application 
    ```
    // import 'localstorage-polyfill';
    ```
3.  Replace the IP address in Components/ipv4.js file with yours<br/>
    - You can find your ipv4 address by writing the following in your cmd 
    ```
    >> ipconfig 
    ```

4. To Run the server write in the terminal
    ```
    expo start
    ```
