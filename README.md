# Yellowpepper
1) Project for exploratory testing for Monefy mobile application:

You can find it in the following place: 

https://github.com/marianogithub/Yellowpepper/blob/main/YellowPepper.md

2) Project for automate Swagger API 

The propposed test cases to automated are the following: 

   PETS section
   ------------
   1- Check if the main page is OK. 
   2- Check GET working OK for Pets. 
   3- Check POST working OK for Pets.
   4- Check PUT working OK for Pets.
   5- Check DELETE working OK for Pets.
   
   STORE section
   -------------
   1- Check GET working OK for Store.
   2- Check POST working OK for Store.
   3- Check GET BY ID working OK for Store.
   4- Check DELETE working OK for Store.
   
3) Provided Solution: 

In order to make it work, we need to have installed Swagger Petstore Sample Training locally. For that, we need to follow the instructions in 

https://github.com/swagger-api/swagger-petstore

When it is installed, we can have the server working in the following url: http://localhost:8080/

After that, we need to execute Cypress with the following command line: 

npx cypress open

Then, we have to execute the attached file here, with the name " api_yellowpepper.specs.js ". 



