# Izza Pizza

This github repo stores the code which will be used on the Izza Pizza landing page, along with the report outlining the requirements and steps needed to complete the project.

The main goal of this project is to recreate this design - [link.](https://projects.invisionapp.com/share/CXV79L5S29U#/screens/397139710)

# Spec

- The header should be sticky
- The header, banner image & footer should be full bleed
- Other content should have a max column width of 1500px
- Links don't need to go anywhere/you can provide example markup
- The map overlay should be triggered when clicking on the View map button

# Planning & Approach

Looking at the design, We can outline the specific requirements for the landing page.

### **Requirements**

- Header (Sticky)
- Jumbotron
- Tabbed Menus
- Family and Find us content sections
- Offer Promo section
- Footer
- Google maps iframe popup

## **Page Sections**

I prefer to split up each section of the website into reuseable components.

If this project were to be built in WordPress, each section would be its own flexible content layout item in ACF and by looping through and displaying the flexible content regions onto the page, it will allow for the client to create modular pages themselves without being restricted to a particular page template.

Below are what I would class as the reuseable sections for the homepage.

### **Sections**

- Jumbotron
- Tabbed Menus
- Text / Image content area
- Offer Promo section

The Text / Image section is used on the page twice, with only the text content changing. I would reuse this section and offer the client a bit more flexibility by also allowing them to flip the text and image around in the CMS.

## **External Libraries**

These are the external libraries which would be considered and used in this project.

- [Bootstrap Grid](https://getbootstrap.com/)
- [SCSS](https://sass-lang.com/)
- [Parcel.js](https://parceljs.org/)

### **Justification**

Bootstrap is the most popular grid framework with great support across all browsers including IE11. Using Bootstrap also allows to incorperate it's additional Javascript offerings if required.

SCSS should be used as it massively increases CSS writing speeds and allows us to follow the [BEM Methodology](https://en.bem.info/methodology/) for a far more organised CSS stucture.

Parcel.js was used in order to quickly setup build tools for this project. By using parcel I am able to bundle all my assets, minify my files for production and easily use LiveReload and SCSS.
