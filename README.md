# Car Dealership Project

This is my first attempt at building a full-stack project with Django and JavaScript fron-end frameworks.
This web app mimics a car dealership website displaying cars for sale. Users can visit the site and click the option to view cars and be 
redirected to a route that lists the Available cars and then users can further click on a car in the list to view full specs of that particular car.

## Stack 

### Back-end

The back-end uses django-rest framework to build the API endpoints. Django is used to build the Car object with all the properties and also 
uses the built-in sqlite for database, since the project is not yet deployed this suffices for now, but I plan to migrate to Posgres in future.

### Front-end

React is used for client-side. We use the React hooks, useEffect and useState to fetch data and update it from the API.

### Testing the app

To test the functionality of this app you can follow these instructions:


1. Clone the Repository

	```
		git clone https://github.com/bhekidaweti/car-dealer-django-react.git
	```
	```
		cd car-dealer-django-react
	```

2. Set Up the Backend

	Navigate to the backend directory:

	```
 		cd car_dealer_backend
	 ```
	Create a virtual environment and activate it:

	```python 
		python -m venv env
	```
 	```
		source env/bin/activate
  	```  
	On Windows use:
	```
 		env\Scripts\activate
 	```
4. Install dependencies:
	```python
	pip install -r requirements.txt
	```
	Run migrations:
	```python 
	python manage.py migrate
	```
5. Start the Django development server:
	```python
		python manage.py runserve
	```
6. Set Up the Frontend

	Navigate to the frontend directory:
```python
	cd car_dealer_front_end
```
	Install dependencies:
```python
	npm install
```
	Start the React development server:
```python
	npm start
```
	Access the App

	Open your browser and go to http://localhost:3000 to view the React frontend.
	The backend API runs at http://localhost:8000/api/dealership.













