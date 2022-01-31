**YellowPepper**

**Exploratory Test Charter:**


**Start Date:**   					01/26/2022

**Charter:** 						We will explore design, layout and some functionalities. 

**Tester:**  						Mariano Alberto González

**Duration:** 						120 minutes.

**Test Design and Execution:** 		40 %

**Bug Investigation and Report:** 	60 %

**Session setup:** 					20 %

**Data Files:** 					They are added in Additional Information section at the end of this document. 

**Executed Tests** 

*1) Monefy Set Up.* 

Steps       Description
01			Installation in Android – Xiaomi 10 mobile. 

*2) Check layout for application*

*Steps		Description*
01			Check images, lines, buttons, that they are OK. No broken objects. 

*3) Check navigability for application*

Steps		Description
01			Check navigation in the application. The user can move in all the places in the application. 

*4) Check use of application- Add money*

Steps		Description
01			Start application
02 			Hit + button.
03 			Enter value for amount. 
04 			Choose category



*5) Check Settings functions – Currency option.* 


Steps		Description
01			Start application
20 			Hit Three points button.
03 			Choose Settings option
04 			Check for example, changing Currency. 


**Quick Result:** 

It seems that everything is working as expected. A couple of minor issues where founds and they are detailed in the following section:





**List of Bugs:** 




Title	Description
01		Spanish language spelling issue.

After installing the application, we can see in Spanish language, that there are words in singular, like “Gasto” and the opposite word, “Ingresos”, which is in plural. 

02 		Layout issue when changing currency.

After installation process, the current currency is in USD, when changing to ARS, the layout is not correct. 

03 		Spanish language spelling issue in Settings. 

When editing settings in Spanish language, we can check that there is an option in English language, “Future recurring records” in place of “Registros recurrentes futuros”

04 		Clear data is not working properly.

It is supposed that it should clear all the data, but there is value “$ 0.03” which is kept as income.

05		After adding a new income, Cancel button is over the Income icon (+)

The user can click on + icon again, but cancel is so closer, that it can make the user to click without intention. 




**Prioritization of those charters - which area of the app or testing would you explore first and why? How much time have you planned to spend for each charter?**

I would prioritize the “Expense and Income” areas in the application. I would do that because I believe that they are the main characters of the entire application. 

I have planned to spend about half an hour for the main sections like Expense and Income, and then, about 10 minutes for each area for Categories, Accounts, Currencies and Settings. 


**What kind of risks do you need to mitigate for this type of application?**

On my opinion, I believe that the kind of risks that we need to mitigate for this type of application can be related to:  
- Security on the sensible data that the user can enter to the app. Example, Credit card or Debit card information.

- Another risk can be related to synchronization information, if we are sharing this information, we need to be secure that we are doing this with accounts that are known and safe for the user.

- Also, we could apply here with a real case, so that we can check if the amounts are the correct. If there is any issue on the operations for discount or sum to the main values. It will allow the user to trust in the application.

- Another risk that can be related to the compatibility of the application with the different types of mobile versions, like Android, Iphones, and it is important to check main functionalities to check that there is no lack of information, and if the environment is safe for the application and the users.  





































Additional Information for Bugs: 
- Screenshots:
Bug #




























