what is redux ? 
Ans : We Can use redux with react as well as angular
Miostly redux is used with rect only 




A Redux is A container Where we Can Store  A Whole Application Data 

So We Can Call it As A state management
It doesn't Belong To The Component State



This is just like A Store Where our application Data Will Be Present 
For Example Let's Suppose We Are Employee data We Will Store It Inside This Store And When Ever We Needed That We Can Directly Use It 


It Does Not Belong To The Component state 
This Type Of Data Will Be Locally Stored 


The Meaning of The State is The application Of the Data 
Each and Every data Will Be Stored at one place and Whenever a Requiremet is there we can use it 
And If Any New data Will be occur We Will pushb it Inside The Store ... 


it Does Not belong To the comonent state 


What Is The Addvantage of This Redux ? 
so Let's See With an Example how we Actually Use This 
Everything in the react We Are breking it inside the Componet


Inside Redux we Will bascially Store the data And When we needed Then we will remove it From the Store 


Topics to learn With redux 
1. Introduction
2. Redux architecture
3. props in redux 
4. make necessary file and wrapper
5. action
6. root reducer 
7. container
8. middleware
9. selector
10. A project with redux 




<!-- Redux Architecture ....  -->


There Are main Three pillar Of redux --->  Action reducer Store And View ... 

view : React Component 
Action : Collect Data From component or Api
Reducer: Get data From Action and Send to store
Store : State Of Complete Application 



view : view means the actual view of our component what we have written it inside our component
Action : the role of action is to perform an action that could be collect the data from the component or the api 
whenever we are Performing Any Action on the component view then we can it's role is to get the data from the component or api
and then we will send it to the reducer 
Reducer : The Role of  The Reducer is that when the data has been passed from the action 
then it get the data and will send it to the store 
one more role of the reducer is that to filter the data in a proper way 

after sending it to the store now the role of the store is to store the state of the complete application 
and whenever we are needed something in our any component we can directly use it 
basciallly we can make it reusable 



store : with the help of the store we can get the data in any view means in any component 
in one application there is only one store not more than that 


                                                        <!-- this process will be goes  this is how react cycle works -->
so basically we need to follow this type of structure    view --- > action ---> reducer ----> store ---- > View 


Basically We use Redux From One component To The other component 
Inside react when we are interacting on the same component then we bascically use states and when we need to interact with one componet to the other component 
then we can bascially use props 



Redux will bascially use props for sending the data from one component to the another component 


Folder Structure For Using Redux 

1. Components ----> header,footer,sideBar,Search,Navabar,Users,Home 
2. container -----> Role Of The Container Is To Connect With The Redux And React to make connection between redux and the reducer 
3. Service -----> actions , reducer , constants ----> inside This we will provide Action and Reducer -----> Root Reducer Combine all files of reducer inside reducer...  
4. Constants ----> tells both file action and reducer that when data goes to the reducer from action which data should go in which function 




<!-- Folder Structure For Creating The React Js -->

components 
contaienrs
services --- > actions ----> Reducer 


inside componenets folder we will provide all component   

