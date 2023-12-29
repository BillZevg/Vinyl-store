## Vinyl Store App Steps

1. Create App

   1. Install @angular/cli
   2. Create App as frontend

2. Add Header

   1. Generate Component
   2. Add Html
   3. Add CSS

3. List Vinyls

   1. Create Vinyl model
   2. Create data.ts
      1. Add sample vinyls
   3. Add images to assets
   4. Create Vinyl Service
   5. Create Home Component
      1. Add ts
      2. Add Html
      3. Add CSS

4. Search

   1. Add method to Vinyl Service
   2. Add Search route to app.route.ts
   3. Show search result in Home component
   4. Generate search component
      1. Add to home component
      2. Add ts
      3. Add Html
      4. Add CSS

5. Vinyl Page

   1. Add method to vinyl service
   2. Generate Vinyl Page component
      1. Add Route to app.route.ts
      2. Add ts
      3. Add Html
      4. Add CSS

6. Cart Page

   1. Create CartItem Model
   2. Create Cart Model
   3. Generate Cart service
   4. Add to Cart Button in Vinyl Page
   5. Generate Cart page component
      1. Add Route to app.route.ts
      2. Add ts
      3. Add Html
      4. Add CSS

7. Not Found!

   1. Generate Component
      1. Add ts
      2. Add Html
      3. Add CSS
   2. Add To Pages
      1. Home Page
      2. Vinyl Page
      3. Cart Page

8. Connect To Backend

   1. Create backend folder
   2. npm int
   3. npm install typescript
   4. Create tsconfig.json
   5. Create .gitignore
   6. Copy data.ts to backend
   7. npm install express cors
   8. Create server.ts
      1. install @types
      2. Add APIs
   9. npm install nodemon ts-node --save-dev
   10. Add urls.ts to frontend
   11. Add HttpClient module
   12. Update vinyl service

9. Login Page

   1. Generate Component
      1. Add to routes
      2. Add ts
      3. add Html
         1. Import Reactive Forms Module
      4. Add CSS
   2. Add Login API
      1. Use json
      2. Add jsonwebtoken
      3. Test Using Postman
   3. Generate User Service
      1. Generate User model
      2. Add User Subject
      3. Add Login Method
         1. Add User Urls
         2. Generate IUserLogin interface
         3. Add ngx-toastr
            1. Import Module
            2. Import provideAnimations
            3. Add styles in angular.json
            4. Add to Header
      4. Add Local Storage methods
      5. Add Logout Method
         1. Add to Header

10. Make Components For Login Page

    1. Input Container
    2. Input Validation
    3. Text Input
    4. Default Button

11. Connect Login API To MongoDB

    1. Moving APIs int routers
    2. Create .env file
    3. Install
       1. mongoose
       2. dotenv
       3. bcryptjs
       4. express-async-handler
    4. Connect to MongoDB Atlas
    5. Use MongoDB instead of data.ts in APIs

12. Register User

    1. Add Register API
    2. Add Register service method
    3. Add Register link
    4. Add Register Component

13. Loading!

    1. Add Image
    2. Add Component
    3. Add Service
    4. Add Interceptor

14. Checkout Page

    1. Create Order Model
    2. Create Checkout Page Component
       1. Add To Router
    3. Add User to User Service
    4. Add Cart to Cart Service
    5. Create Order Items List Component
    6. Adding Map To The Checkout Page
       1. Add Leaflet npm package
          1. Add @types/leaflet
          2. Add CSS to angular.json
       2. Add AddressLatLng to Order Model
       3. Create Map Component
          1. Add to checkout page
          2. Add ts
             1. Change app-map selector to map
          3. Add Html
          4. Add CSS
       4. Add Auth Guard

15. Payment Page

    1. Generate Component
    2. Add 'getOrderForCurrentUser' API
    3. Connect Component to Service
    4. Make the map Component readonly

16. Adding Paypal

    1. Generate Component
       1. Add to payment page
    2. Get Paypal client Id
    3. Add Paypal JS to index.html
    4. Set up Paypal button
    5. Add Pay API to order router

17. Order Track Page
    1. Generate Component
       1. Add to routes
    2. Add API
       1. Add to urls.ts
    3. Add method to order.service
    4. Add Html
    5. Add CSS
