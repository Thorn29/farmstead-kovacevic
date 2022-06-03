# Farmstead Kovačević

A website for a local farm working with goats and other livestock, as well as growing organic food. It contains information about the farm, their products and services, along with a shopping cart and the ability to order certain products. 

[Visit original site](http://gazdinstvo-kovacevic.rs)

## Development

The website was built with **React**, and it uses centralized **Redux** state to enable online shopping. It's available in two languages (Serbian and English), and it uses **i18next** to enable smooth switching between them without re-rendering or creating double pages. Also, packages such as *react-router-sitemap-generator* and *react-snap* have been added to solve some common SEO problems.

Due to the rapid expansion of the farm's offer, and with it, frequent updates of content, some features are built in a way to suit larger apps that this one currently is.

## Local setup

If you wish to set up and take a look at this project locally, you can do so by following a few simple steps

1. Download the code

2. Run *npm install* in the root folder of the app

3. Create a *MapsAPI.js* file inside the *src* folder, which contains your **Google Maps API key** stored in a variable. Make sure the variable is exported as a *default*.

4. Run *npm start* in the root folder of the app

That's it, the entire app should work properly (except the e-mail sending script).
