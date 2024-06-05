# react-ecom-app
1. E-Commerce Application using React as Frontend Framework
2. React, Material UI(MUI for components, icons and fonts), Carousel(mdnbootstrap)?, Routing(react-router-dom)
3. Steps to deploy UI app to custom domain using github pages:\
|-- npm i gh-pages\
|-- Add "homepage": "< url to be deployed to >",\
|-- Add { "predeploy": "npm run build", "deploy": "gh-pages -d build" } under "scripts" in package.json\
|-- Use a custom subdomain to deploy app live using "github pages".\
|-- Add subdomain as "name" under new "CNAME" DNS Record with < username >.github.io as "Data". Then configuring github pages settings appropriately.\
|-- Once app is ready for deployment, "npm run deploy"\
|-- Go to Github Pages of repo and set Source: Deploy from a branch, Branch: gh-pages, Custom domain: < abc.def.com >, Enforce HTTPS\
|-- Once saved, the page will be published!

## Initial Timelines by components
Header - 1 day Done in half day\
Search bar in header - 1 day Done in half day\
Banner - 1 day Done in Half day\
Horizontal flex view - 1 day Done in Half day\
Testimony - 1 day\
Footer - 1 day\
Breadcrumb navigation - 1 day\
View Product - 1 day\
Tab navigation for View Product - 1 day\
Category page 3x3 grid view - 2 days\
Category page Filters - 2 days\
Cart list and overall summary - 2 days\
Success page - 1 day\
Full page responsiveness - 2 days

## Project folder structure
components\
|-- ui\
|-- form\
pages\
|-- Home\
|-- Product\
|-- Cart\
services\
context\
utils\
assets
