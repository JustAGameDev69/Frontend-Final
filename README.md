A tech store built by ReactJS Vite + Tailwind CSS. The fake API is made from json-server. I took some UI from Material React, Image Carousel from npm, etc.

The main shop page sells many kinds of products, including PCs, laptops, mice, keyboards, MacBooks, headphones, and more. It has a login feature with user information validation, users can change their information (avatar, name, etc.), product page details, add-to-cart, change the number of products in the cart, search bar, and collection page for each product type with a filter component, etc.

The admin page allows administrator to manage users' accounts: change information, and delete accounts.  With products, can add a new product, take information about how many products the shop has, change some details of the product, or delete one.

These are just some features that the website currently has. When I finish my backend course, these are some features that I want to add: compare two products in the same categories like PC with PC, comment, and rating for a product, etc.

To run this project:
1. Run in terminal: json-server --watch data/db.json --port 3000
2. Run in a new terminal: json-server --watch data/user.json --port 3001
3. Then in a new terminal please run: npm run dev

This project is still in development!
