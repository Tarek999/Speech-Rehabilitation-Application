# Speech-Rehabilitation-Application
Mobile and Web speech rehabilitation application for Arabic language speakers
<p align="center"><img src="./images/00.png" alt="Original" width="300" style="border:2px solid #3c005a"/></p>

<!-- ## Paper
<embed src="/Paper/Report.pdf" type="application/pdf"> -->

<h2> Prerequests </h2>

1.  Python 3.8.8
2.  Node.js v16.14.0
3.  expo 5.2.0
4.  mysql server (Ammps - Microsoft Sql Server)

<h2> Contents </h2>

1.  [Introduction](https://github.com/Radwa-Saeed/Speech-Rehabilitation-Application#1-introduction)
2.  [User Interface & App Features](https://github.com/Radwa-Saeed/Speech-Rehabilitation-Application#2-user-interface)
3.  [Server](https://github.com/Radwa-Saeed/Speech-Rehabilitation-Application#3-server)
4.  [Paper](https://github.com/Radwa-Saeed/Speech-Rehabilitation-Application#4-Paper)
5.  [Presentation](https://github.com/Radwa-Saeed/Speech-Rehabilitation-Application#5-Presentation)

## 1. Introduction 
- People having problems in pronouncing some letters are facing
many challenges as their speech wouldn't be totally understandable and that may cause
psychological issues.

<p align="center"><img src="./images/01.jpg" alt="Original" width="50%" style="border:2px solid #3c005a"/></p>

* So we have developed a web and mobile application to help those people practice pronunciation and restore their ability to conversate fluently, also this app would be able to express the needs of those who can't talk easily.

## 2. User Interface

1. ### The main page

    -   First of all the user has to register to the application. 
    -   The user can register to the app as doctor or patient.
     
    <p align="center"><img src="./images/02.gif" alt="Original" width="100%" style="border:2px solid #3c005a"/></p>

    - Then the app will redirect the user to log-in to the application.

    <br/>

2. ### Doctor Log-In

    - Here is an example of a doctor log-in where the application redirects the doctor to the patient's history to be reviewed.
    - There is also a search section to get a specific patient with their name.
    <p align="center"><img src="./images/03.gif" alt="Original" width="100%" style="border:2px solid #3c005a"/></p>

    - Patients Data
    <p align="center"><img src="./images/06.png" alt="Original" width="100%" style="border:2px solid #3c005a"/></p>
    
    - Patient History 
    <p align="center"><img src="./images/07.png" alt="Original" width="100%" style="border:2px solid #3c005a"/></p>
    

3. ### Patient Log-In

    -   When the role of the user is a patient the application redirects the patient to choose from two different modes: <br/>
    <p align="center"><img src="./images/08.png" alt="Original" width="100%" style="border:2px solid #3c005a"/></p>

    -   **The first mode is coach mode** (frequently repeating words to the person):<br/>
    The patient has to select, listen, and re-pronounce selected word to practice on follow up the progress of patients.

    <p align="center"><img src="./images/05.gif" alt="Original" width="100%" style="border:2px solid #3c005a"/></p>

    -   Reference And Recorded Audio Signal Graph
    <p align="center"><img src="./images/09.png" alt="Original" width="100%" style="border:2px solid #3c005a"/></p>

    <p align="center"><img src="./images/10.png" alt="Original" width="100%" style="border:2px solid #3c005a"/></p>

    -   **The second mode is assistant mode** (speaking words and presenting objects that can
    be seen):<br/>
    help people regain some ability to use language. This part is done by selecting a category from different categories (names, objects, food, ......., etc.) which had been stored in database and playing the audio associated with the category selected in order to help stroke Alzheimer people to remember things, family and different objects and contribute with society in an effective way.
    
    <p align="center"><img src="./images/04.gif" alt="Original" width="100%" style="border:2px solid #3c005a"/></p>

## 3. Server
-   Database Tables

<p align="center"><img src="./images/11.png" alt="Original" width="100%" style="border:2px solid #3c005a"/></p>

-   Audio Table Example 

<p align="center"><img src="./images/12.png" alt="Original" width="100%" style="border:2px solid #3c005a"/></p>

    







