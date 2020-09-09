# NudeSolutionAssignment

## How to run
```bash
1. Database - MSSQL LocalDB
Please run insuranceDB.sql in API project to your localDB
```
```bash
2. Back End (.Net core Api) - NudeSolutionAssignment
Build and run on Visual studio
```
```bash
3. Front End (React) - React-app
npm start on vs code running on localhost:3000

● src
+---● actions
|   |
|   |-- api.js (handle all http request)
|   |-- category.js (Get all categories) 
|   |-- item.js (Create & Delete Item action) 
|   |-- store.js (configure redux store)
|
+---● components
|   |
|   |--InsuranceItemsForm.js (form operations)
|   |--InsuranceItems.js  (list of items)
|   |--useForm.js (handles common form opearations)
|
|---● reducers
|   |
|   |--item.js (reducer for items operations)
|   |--category.js (reducer for categories)
|   |--index.js
|
|-- App.js
|-- index.js
|-- index.css
