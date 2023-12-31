# Table of Content
1. [Site Overview](#site-overview)
2. [Planning](#planning)
    * [Target Audiences](#target-audiences)
    * [Color Scheme](#color-scheme)
    * [Wireframes](#wireframes)
3. [Features](#features)
    * [Existing Features](#existing-features)
    * [Future Updates](#future-updates)
4. [Testing](#testing)
    * [Responsiveness](#responsiveness-testing)
    * [Validator Results](#validator-results)
    * [Functionality](#functionality-testing)
    * [User Stories](#the-user-stories)
    * [Bug Report](#bug-report)
5. [Deployment](#deployment)
6. [Credits](#credits)


# Site Overview 

![Am I Responsive screenshot](docs/screenshots/air%20ss.png)

Witcher Pictures is a site dedicated to showcasing photography from the award winning video game Witcher 3 the Wild Hunt. The Witcher is an immensely popular franchise wether it be fans of the books, games or more recently from the Netflix series. There are many fans like myself who have sunk dozens of hours into this game and still to this day find things they have never seen before, or are simply blown away by the attention to detail and high quality textures used throughout the landscapes and interiors of the open world. Yet despite that I rarely come across any images that really capture the beauty of this game, sure there are some out there, but what I have found tends to be a lot of the same images, with any being unique or actually from the within game being few and far between. This site looks to change that by hosting a large number of images all in one, easy to navigate site, where users are able to look through and download any they like and use them themselves with just a few taps of their screen.

# Planning 

## Target Audiences:
* Users who are dedicated fans of the franchise and game looking for unique, visually appealing backgrounds of landscapes and set pieces they will recognize, taken within the game.
* Users who have some knowledge of the franchise and are interested about the game.
* Users who have little to no knowledge about the franchise or video games in general and are interested in learning about it aswell as seeing how visually impressive a video game can be.

### User Stories:

* As a user I want to understand the sites purpose.

* As a user I want to see images from The Witcher 3.

* As a user I want to be able to download the images easily.

* As a user I want to be able to send my images from my local e-mail client.

* As a user I want to know more about the site.

## Color Scheme:

When choosing the colors for my site, I wanted a darker color for my main background color to contrast nicely against my images, the majority of which are bright and colorful. So I went with the dark grey as the main background color, with some slightly lighter and darker greys as secondary background colors (for things such as the modal and modal close button). Not only did it achieve the effect i wanted with the majorly of bright images, but also didn't blend in with the darker images and still gave a notable contrast between the image and the backdrop. I wanted to incorporate the bright crimson color mostly as a stylistic choice as a similar bright red contrasting with dark grey scheme is found within many of the games menu's aswell as the title itself. I then went for a slightly off white color for the text as I knew the color would contrast nicely on the greys and red for readability, while not being to bright against the dark grey.

Below is a grid that I have used to check the contrast scores so as to be sure all text remains readable throughout the site, created on https://contrast-grid.eightshapes.com/ .

![Color grid Screenshot](docs/screenshots/ColorGrid.png)
* The only times that colors with poor contrast are used, are for hover effects to show the user they are selecting/clicking what they intended to, therefore the readability does not matter in that regard. Apart from that the only color combinations used are those that pass.

## Wireframes:

Here are my wireframes that I created at the start of my project and used as the rough template for my site, for mobile, tablet and desktop viewing. Below them you will find a list detailing how the design has changed as the development process was going on. More information on why these changes where made will be found below.

![WF Screenshot](docs/screenshots/MWireframe.png)

![WF Screenshot](docs/screenshots/TWireframe.png)

![WF Screenshot](docs/screenshots/DWireframe.png)

* The first big difference between the wireframe and finished product is the carousel on the home page, which i initially planned on being a row of several images that all slide to the left in synch with one another and reacted responsively (two images of mobile and tablet, three on desktop).

* The second change being made to the about page which I decided to reformat slightly so as to not be almost identical to the home page of the site. I decided to add another image in to both add more content to the page and assist in achieving a more noticeably responsive design, aswell as breaking text up more evenly so as to not bombard the user with one massive paragraph of text.

* Something I wanted to mention was my decision to leave the paragraphs on the about page without headers. This is because I feel the information found in both is very relevant to the other, and all people I had test the site for me said that they would have read both paragraphs wether they had the informative headers I came up with or not. Because of this and my preference for the styling, I have not added them.

* The final big change I would like to point out is the columns of images on the gallery page on tablet was initially going to be two, the same as mobile just with more spacing between the images. the reason I changed this to three columns was partly to show more noticeable responsiveness along with the fact I liked it more than my original design once I had done it, however it was mostly because I found I would need either a visually unappealing amount of spacing between images or have the images be larger to fill in the spaces which caused issues with the image dimensions on the right hand side.

* Finally I would just like to mention a few small differences. That positioning of the nav toggle icon changed simply because I struggled to move it to the right hand side of the display, and when looking and testing it myself aswell as other people, I found no reason to keep trying as it worked as intended and I liked it just as much. The positioning of nav elements in tablet and desktop changed as a spur of the moment decision. And lastly I scrapped the button at the bottom of the home page to navigate to the gallery page, in favour of a sticky top nav. 

# Features

Below you will find a list of the features currently found on the site, and also a few features I am planning on adding in the future.

## Existing Features:

### Nav:
* Navigation Bar

    * The navigation bar is fully responsive and uniform across all three pages of the site.

    * The section includes links to the Home, Media and About.

    * Each navigation link has a hover feature providing visual feedback for the user. Each page has a separate active link which provides the user instant feedback regarding their location on the site.

   ![Nav Screenshot](docs/screenshots/nav.png)

* Sticky Navigation Menu

    * The Sticky Navigation Menu sticks to a fixed position at the top of the screen when a user scrolls below the navigation section.

    * This feature allows users to access any pages of the site without the requirement of scrolling back to the top of the page.

    * The Sticky Navigation Menu takes up very little screen space and therefore doesn't obstruct any of the site's content.

    * This feature is intuitively designed with a recognisable 'burger' style icon when on a mobile device and is easily accessible for the user

    ![M Nav Screenshot](docs/screenshots/Mobilenav-Title.png)

### Carousel:

![Carousel Screenshot](docs/screenshots/Carousel.png)
* The Carousel is fully responsive and is found only on the Home page.

* It allows users to have a preview on the type of images the site is built to showcase

* Rather than a controllable sliding carousel, I went with a automated fade transition as I found it to be more visually appealing aswell as preventing the user rushing through the images.

    ![M Carousel Screenshot](docs/screenshots/mCarousel.png)

    * This type of carousel replaced my original idea (found in the wirfeframes section of this Readme). The reason I made the change as it required javascript to run when using the flex function to change the carousel to two and three images depending on screen size. As i have not learned any Js, when talking to my mentor he advised me to try something else as it would be alot of time and effort to get it to work predictably, that would be better spent on other parts of my website.

### Gallery:

* The gallery page features a fully responsive image gallery utilizing bootstrap 5's grid system.


* Each image has a zoom hover effect to provide the user with visual feedback so they know they are selecting the desired image.

    ![M Gallery Screenshot](docs/screenshots/mGallery.png)
* The image gallery has two columns on mobile with minimal spacing to allow the image as much real estate on the screen as possible so that users easily see what images they like.

    ![D Gallery Screenshot](docs/screenshots/Galleryzoom.png)

* And then on tablet the image gallery expands to three columns, and four on desktop each with much more spacing between images so that the user can clearly see each image aswell as to allow for the zoom hover effect without blocking surrounding images to much.

    ![T Gallery Screenshot](docs/screenshots/TGallery.png)


### Modal:

* The modal is found on the gallery page upon clicking any of the images in the gallery.

* The modal is completely responsive, meaning there is one modal thats content and title will change depending on what image the user clicks. This is achieved using a small amount of javascript.

    ![Modal Screenshot](docs/screenshots/modal.png)

* I kept the basic structure of Bootstrap's default modal, giving users plenty of options to exit the modal and continue scrolling through the gallery. This being a close button below the image, an X in the top right corner of the modal, which I kept as it is very accessible and recognizable to have in that location. And also allows the user to click outside of the modal to close the modal and continue looking at other images.

* The main feature of the modal itself is the download button,styled to conform with the rest of the sites styling aswell as stand out, found below the image which allows the user to download the image they have selected and that has presented itself within the modal to their own devices. This is also done using javascript.
    ![Modal mobile Screenshot](docs/screenshots/mModal.png)

### Footer:

* The footer is fully responsive and found on all three pages of the site.

    ![D Footer Screenshot](docs/screenshots/DesktopFooter.png)
* Whilst content slightly varies on one page, the color scheme and styling remain uniform across all three pages.

* This contains links to the game devs website as well as the witcher fandom page in mobile view on the Home and About pages, for users who wish to learn a lot more about the franchise.
    ![M Footer Screenshot](docs/screenshots/MobileFooter.png)

* In tablet and desktop aswell as being present on all screen sizes on the Gallery page, this section also contains a link to an email where users can send any images from the game that they would like to share and have featured on the site.

    ![GM Footer Screenshot](docs/screenshots/mgalleryFooter.png)

## Future Updates:

I plan on continuing to work on this site and improving and expanding on the type content found. But for now I will list down below the more immediate plans I currently have to enhance not just the content, but the user experience as a whole.

### Scrolling through the gallery within Modal:

One of the first things I plan on adding at a later stage is the ability to scroll/swipe through all images that are in the gallery from within the modal. Doing so responsively, meaning that when you scroll forwards the next image will be the one on the right of the image previously selected and displayed in the modal, and the image to left when scrolling back. This has come from a two of the people I have had testing the site throughout development asking if it was a feature I'm planning on adding. As they stated whilst it was in no way a bad thing the site was lacking it, they thought navigating through the gallery and selecting an image easier. The other 5 didn't mention it and when asked said they didn't think it needed to be added, but would be a good addition.

### downloading images as 4k files:

Another feature I plan on adding soon, is downloading the the original 4k versions of the images rather than the resized and compressed images used on the site. I want to do this so that users are able to get as much from the site as they can and are more likely to return. The reason this has been left as a future update is simply so that I could continue with other parts of the site to ensure it was finished on time.

### Styling of background and certain texts:

Further down the line, when my knowledge of css and general web development has grown, I plan on making many styling changes to the site. Some I already have good ideas on what i want to change and lots I plan on thinking more about and learning what is possible to do, and then make more concrete decisions for how I can change it to enhance the user experience. With all that being said I am very happy with the site's current styling, I just have had several ideas during development and thought it worth mentioning in this section. 

# Testing

## Responsiveness Testing:

I began testing the responsiveness of the site firstly by switching through different device screen sizes using developer tools on google chrome on each page and using every feature at each main breakpoint. Below you will find a screenshot of the full list of the device screen sizes used.

* List of device screen-sizes used in dev tools:

    ![Dev device list Screenshot](docs/screenshots/Devicelist.png)

### I have tried to test the website on as many devices as I can, however, I don't have access to many. here I will include a list of all the devices that I have been to use to test the site:
* ASUS Zenbook Duo 14 ^
* Samsung S20 ultra ^
* Samsung A51
* IPhone 14
* IPhone 12
* IPad Air (4th gen) ^


### Here is a list of the different browsers I have tested the website on:
* Opera/Opera GX
* Google Chrome
* Microsoft Edge
* Mozilla Firefox
* Samsung Internet (Android)
* Safari 

I tested this website via live server constantly during development. Using developer tools to make sure all features I included worked at all breakpoints, both before and after it was deployed to github. Once I got the website to a stage I was happy to submit it as my milestone project, I began going through every feature across every site again. Checking not only that every feature worked, but also that the styling didn't break at any point and also that links sent the user to the correct address in a new tab, and the email link sends them to their email (assuming they have an app installed or alternatively that they are logged in, within the browser). I first tested the site on my laptop, going over the whole site with the testing procedures outlined in the testing section of this file at least three times. I then tested it on my mobile phone focusing more on the styling. Finally I used a tablet to go over everything again. Other than the issue with the footer text on skinnier screens, mentioned above the device list, my testing was very successful. The sites styling aswell as all features responded as expected to the browser window being minimized and enlarged using the responsive sliders in dev tools, aswell as at all preset screen sizes.

The devices in the devices used list above marked with  ^  are the main devices used during testing, the rest are various friends and family members who have used the site.

## Validator results

### HTML Validator:

* Home page:
    ![Html Validator Screenshot](docs/screenshots/hHTMLValidator.png)
    * The warning found on this page is also found on the other two pages. The reason for it is that for the sticky nav function to work, the nav needs to be in its own section. And due to the fact the nav does not require a header and having one would break the styling of the element, I have left this as it is.
    
    * Home page Lighthouse results:
        ![Lighthouse Screenshot](docs/screenshots/homeLighthouse.png)

* Gallery page:
    ![Html Validator Screenshot](docs/screenshots/gHTMLValidator.png)
    * The first warning seen matches the one found in the Home page. The other warning found on this page is for the empty heading in the gallery modal. This is also being left as, for the javascript to swap the titles for the images it uses a "data-title" attribute to pass text into this heading, and as it is easier for the Js to pass the text into blank space rather than replacing text.

    * Gallery page Lighthouse results:
        ![Lighthouse Screenshot](docs/screenshots/galleryLighthouse.png)


* About page:
    ![Html Validator Screenshot](docs/screenshots/aHTMLValidator.png)
    * This warning matches the one found in the Home page.

    * About page Lighthouse results:
        ![Lighthouse Screenshot](docs/screenshots/aboutLighthouse.png)

### CSS Validator Results:
![CSS Validator Screenshot](docs/screenshots/CSSValidator.png)

## Functionality Testing:

* When testing the functionality of all the sites features I started with the features found across all pages of the site. Beginning with the nav I went from home to gallery and back, home to about and back, and finally from gallery to about and back and had no problems during this process. I then used my phone to view the site in mobile view and repeated the process, in doing so also testing the nav toggle icon that is used in the mobile layout of the site and that was all also successful. 

* Then for the footer, I tested both links by clicking them and making sure they opened in a new browser tab and took me to the correct site on all three pages. When testing the email link I checked not only that clicking the link text would take the user to their email app or account (I logged out of the app and opened my inbox in a browser tab to test this also worked), but also that the correct email address would be auto filled in the recipient field in a new draft.

* For the home page I simply watched the carousel cycle through several times, making sure all images appeared and titles where correct, animation was smooth and would keep repeating until the user clicks off of the page. I then used my phone to open the home page in mobile view and check that the titles disappeared. Finally with the gallery at first I scrolled through all the images to make sure all had loaded, then going over all of them with the mouse to check the animation for desktop was working. 

* Then I clicked on at least one image per row and viewed the modal, checking not only that all styling was as expected and all elements had rendered, but also that the images themselves and titles would change immediately and correctly aswell as varying the method I would close the modal between the three options the user is presented with. Each time I went on the modal I would download the image using the download button and tested that worked for all Images in the gallery. 

## The User Stories:

* As a user I want to understand the sites purpose.
    * When they enter the site the user will land on the home page. The small amount of text immediately presented to them informs the user of the site's main purpose. The partially visible image carousel prompts the user to continue scrolling to view a preview of the sites main content as well as another small amount of text to clarify the content found on the site and where to find it.

* As a user I want to see images from The Witcher 3.
    * Upon reading the text found on the home page and viewing the images found in the carousel, they want to view all of the images the site has. From there they will navigate over to the gallery via the nav-link text, which they are able to find no matter how far they've scrolled thanks to the sticky nav used across the site. When on the gallery page, the user is able to bring the images up in a modal to get a better look at any of the images on the page.

* As a user I want to be able to download the images easily.
    * The home page content immediately lets the user know that the site has the type of content they are looking for. They navigate to the gallery straight away after seeing the option in the navigation menu. As they hover over the images with their mouse they are prompted to click on the image by the zoom effect which brings up the image within the modal. After selecting the image they want, they click the bright download button found just below the modal image which downloads a copy of image straight to the users devices.

* As a user I want to be able to send my images from my local e-mail client.
    * After finding the site and looking at its content, the user thinks about their own images that they have taken within the game and would like to find out if there way any way for their images to be displayed on the site for others. Looking through the entire gallery the user finds the footer below, which while being hidden on the home and about pages in mobile view to avoid a large clunky footer degrading the appearance of the site, on the gallery page the footer contains an email address thats clear purpose is for users to send their own images for use on the site at all breakpoints.

* As a user I want to know more about the site.
    * Upon reading the text found on the home page, the user navigates to the about page via the nav bar. When arriving to the page they are presented with two paragraphs of information, one more focused on information about the franchise and game itself. And the other more focused on the site and it's purpose. 

## Bug Report:

* Witcher Style Font:
    * Issue: Text with the Witcher style font only appeared with the intended font on the device I was using to develope the site, opening it on any other device would show the text in the fall-back font.
    * Cause: Misinformation on Stack Overflow caused me to use the wrong format to use the font in the site (I had converted the file into an svg type and also woff and woff2)
    * Resolution: My mentor rich helped me learn the correct method use this font. Using the file in the ttf format fixed the error.

* Nav Toggle Icon:
    * Issue: Navigation menu toggle icon not appearing on mobile screen sizes.
    * Cause: Using custom color with the Nav template from Bootstrap's docs.
    * Resolution: I looked around on google and found a Stack Overflow thread of people that had the same problem. I went through a few solutions with none being successful until taking a suggestion on adding the "ms-auto" class to the outer div element which somehow fixed the problem.

* Footer Text:
    * Issue: Styling of footer link-text breaking at smaller mobile screen sizes.
    * Cause: Poor choices of font size and text.
    * Resolution: Brought the font size down slightly and re-wrote the text to be as informative as the original just with fewer words.

* Carousel Animation (Original Design):
    * Issue: When viewing the home page from a tablet screen size or bigger, the animation for the carousel would stop working.
    * Cause: The carousel was a Bootstrap template, and had background Js from Bootstrap to make the animation work. When using the flex function to make the carousel display two or three images, the Js was trying to move one image with the animation at a time, with the other images on display remaining in place and the image that had the animation springing back to it's original place.
    * Resolution: I spent a long time trying to make this work and even after fixing the animation on one specific screen size, getting it to work perfectly like it had to was going to take alot more time and knowledge that i didn't have. For that reason I took the advice from my mentor Rich and scrapped my current design in favour of the carousel found on the live site.

# Deployment

* The site was deployed to GitHub pages. The steps to deploy are as follows:
    * From this project's repository, navigate to the settings tab
    * From the left hand menu, select pages.
    * From the source section drop-down menu, select the Main Branch.
    * Once the main branch has been selected, the page will refresh and provide a link to the live project.
    ![Deployment page screenshot](docs/screenshots/deployss.png)

The live link can be found here - https://t254-bot.github.io/Witcher-Pictures/

# Credits

* I was able to find The Witcher font, by JoannaVu, from Font Space :https://www.fontspace.com/category/the-witcher

* The home page carousel template used is from Bootstrap's documentation, my mentor Rich then helped me with using more of Bootstraps pre-set style rules

* The gallery template I followed came from a tutorial by Theweb Shala via Youtube 

* Javascript supplied by chatGPT

* The nav template, aswell as the zoom effect used for the gallery images, came from the w3c schools

* I used [Imageresizer.com](https://imageresizer.com) to resize all of my images and [Optimizilla](https://imagecompressor.com) to compress my images

* I learned how to outline text from Kevin Powell vie Youtube

* I used [Am I Responsive](https://ui.dev/amiresponsive) to create the readme files Site Overview image

### And a huge thanks...
to my mentor Rich, who has gone above and beyond to guide me through the development process, push me to put all my skills and knowledge into this project and help me create my website up to the standard I want!

