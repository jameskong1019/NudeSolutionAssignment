# NudeSolutionAssignment

## How to run
```bash
1. Database - MSSQL LocalDB
  1) Run insuranceDB.sql on API project to your localDB
```
```bash
2. Back End (.Net core Api) - NudeSolutionAssignment
  1) Build and run IISExpress server on Visual studio
```
```bash
3. Front End (React) - React-app
  1) Run npm install to install dependencies
  2) Run npm start on visual studio code or cmd running on localhost:3000
```
```bash
## File structure for React with Redux
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
```
