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
    * [User Stories](#user-stories)
5. [Deployment](#deployment)
6. [Credits](#credits)


# Site Overview 
Witcher Pictures is a site dedicated to showcasing photography from the award winning video game Witcher 3 the Wild Hunt. The Witcher is an immensely popular franchise wether it be fans of the books, games or more recently from the Netflix series. There are many fans like myself who have sunk dozens of hours into this game and still to this day find things they have never seen before, or are simply blown away by the attention to detail and high quality textures used throughout the landscapes and interiors of the open world. Yet despite that I rarely come across any images that really capture the beauty of this game, sure there are some out there, but what I have found tends to be a lot of the same images, with any being unique or actually from the within game being few and far between. This site looks to change that by hosting a large number of images all in one, easy to navigate site, where users are able to look through and download any they like and use them themselves with just a few taps of their screen.

# Planning 

## Target Audiences:
* Users who are dedicated fans of the franchise and game looking for unique, visually appealing backgrounds of landscapes and set pieces they will recognize, taken within the game.
* Users who have some knowledge of the franchise and are interested about the game.
* Users who have little to no knowledge about the franchise or video games in general and are interested in learning about it aswell as seeing how visually impressive a video game can be.

## Color Scheme:

When choosing the colors for my site, I wanted a darker color for my main background color to contrast nicely against my images, the majority of which are bright and colorful. So I went with the dark grey as the main background color, with some slightly lighter and darker greys as secondary background colors (for things such as the modal and modal close button). Not only did it achieve the effect i wanted with the majorly of bright images, but also didn't blend in with the darker images and still gave a notable contrast between the image and the backdrop. I wanted to incorporate the bright crimson color mostly as a stylistic choice as a similar bright red contrasting with dark grey scheme is found within many of the games menu's aswell as the title itself. I then went for a slightly off white color for the text as I knew the color would contrast nicely on the greys and red for readability, while not being to bright against the dark grey.

Below is a grid that I have used to check the contrast scores so as to be sure all text remains readable throughout the site, created on https://contrast-grid.eightshapes.com/ .

## Wireframes:

Here are my wireframes that I created at the start of my project and used as the rough template for my site, for mobile, tablet and desktop viewing. Below them you will find a list detailing how the design has changed as the development process was going on. More information on why these changes where made will be found below.


* The first big difference between the wireframe and finished product is the carousel on the home page, which i initially planned on being a row of several images that all slide to the left in synch with one another and reacted responsively (two images of mobile and tablet, three on desktop).

* The second change being made to the about page which I decided to reformat slightly so as to not be almost identical to the home page of the site. I decided to add another image in to both add more content to the page and assist in achieving a more noticeably responsive design, aswell as breaking text up more evenly so as to not bombard the user with one massive paragraph of text.

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



* Sticky Navigation Menu

    * The Sticky Navigation Menu sticks to a fixed position at the top of the screen when a user scrolls below the navigation section.

    * This feature allows users to access any pages of the site without the requirement of scrolling back to the top of the page.

    * The Sticky Navigation Menu takes up very little screen space and therefore doesn't obstruct any of the site's content.

    * This feature is intuitively designed with a recognisable 'burger' style icon when on a mobile device and is easily accessible for the user

### Carousel:
    
* The Carousel is fully responsive and is found only on the Home page.

* It allows users to have a preview on the type of images the site is built to showcase

* Rather than a controllable sliding carousel, I went with a automated fade transition as I found it to be more visually appealing aswell as preventing the user rushing through the images.

    * This type of carousel replaced my original idea (found in the wirfeframes section of this Readme). The reason I made the change as it required javascript to run when using the flex function to change the carousel to two and three images depending on screen size. As i have not learned any Js, when talking to my mentor he advised me to try something else as it would be alot of time and effort to get it to work predictably, that would be better spent on other parts of my website.

### Gallery:

* The gallery page features a fully responsive image gallery utilizing bootstrap 5's grid system.

* Each image has a zoom hover effect to provide the user with visual feedback so they know they are selecting the desired image.

* The image gallery has two columns on mobile with minimal spacing to allow the image as much real estate on the screen as possible so that users easily see what images they like.

* And then on tablet the image gallery expands to three columns, and four on desktop each with much more spacing between images so that the user can clearly see each image aswell as to allow for the zoom hover effect without blocking surrounding images to much.


### Modal:

* The modal is found on the gallery page upon clicking any of the images in the gallery.

* The modal is completely responsive, meaning there is one modal thats content and title will change depending on what image the user clicks. This is achieved using a small amount of javascript.

* I kept the basic structure of Bootstrap's default modal, giving users plenty of options to exit the modal and continue scrolling through the gallery. This being a close button below the image, an X in the top right corner of the modal, which I kept as it is very accessible and recognizable to have in that location. And also allows the user to click outside of the modal to close the modal and continue looking at other images.

* The main feature of the modal itself is the download button,styled to conform with the rest of the sites styling aswell as stand out, found below the image which allows the user to download the image they have selected and that has presented itself within the modal to their own devices. This is also done using javascript.

### Footer:

* The footer is fully responsive and found on all three pages of the site.

* Whilst content slightly varies on one page, the color scheme and styling remain uniform across all three pages.

* This contains links to the game devs website as well as the witcher fandom page in mobile view on the Home and About pages, for users who wish to learn a lot more about the franchise.

* In tablet and desktop aswell as being present on all screen sizes on the Gallery page, this section also contains a link to an email where users can send any images from the game that they would like to share and have  featured on the site.

## Future Updates:

I plan on continuing to work on this site and improving and expanding on the type content found. But for now I will list down below the more immediate plans I currently have to enhance not just the content, but the user experience as a whole.

### Scrolling through the gallery within Modal

One of the first things I plan on adding at a later stage is the ability to scroll/swipe through all images that are in the gallery from within the modal. Doing so responsively, meaning that when you scroll forwards the next image will be the one on the right of the image previously selected and displayed in the modal, and the image to left when scrolling back. This has come from a two of the people I have had testing the site throughout development asking if it was a feature I'm planning on adding. As they stated whilst it was in no way a bad thing the site was lacking it, they thought navigating through the gallery and selecting an image easier. The other 5 didn't mention it and when asked said they didn't think it needed to be added, but would be a good addition.

### downloading images as 4k files

Another feature I plan on adding soon, is downloading the the original 4k versions of the images rather than the resized and compressed images used on the site. I want to do this so that users are able to get as much from the site as they can and are more likely to return. The reason this has been left as a future update is simply so that I could continue with other parts of the site to ensure it was finished on time.

### Styling of background and certain texts

Further down the line, when my knowledge of css and general web development has grown, I plan on making many styling changes to the site. Some I already have good ideas on what i want to change and lots I plan on thinking more about and learning what is possible to do, and then make more concrete decisions for how I can change it to enhance the user experience. With all that being said I am very happy with the site's current styling, I just have had several ideas during development and thought it worth mentioning in this section. 

# Testing

## Responsiveness Testing:

I began testing the responsiveness of the site firstly by switching through different device screen sizes using developer tools on google chrome on each page and using every feature at each main breakpoint. Below you will find a screenshot of the full list of the device screen sizes used. After discovering an issue with the styling of the footer text breaking on the samsung s8 screen, I went on dev tools and used the responsive sliders to pinpoint the breakpoint where the issue appears. I then adjusted the text and font-size which fixed the issue. 

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

I tested this website via live server constantly during development. Using developer tools to make sure all features I included worked at all breakpoints, both before and after it was deployed to github. Once I got the website to a stage I was happy to submit it as my milestone project, I began going through every feature across every site again. Checking not only that every feature worked, but also that the styling didn't break at any point and also that links sent the user to the correct address in a new tab, and the email link sends them to their email (assuming they have an app installed or alternatively that they are logged in, within the browser). I first tested the site on my laptop, going over every part of the site outlined previously at least three time. I then tested it on my mobile phone focusing more on the styling. Finally I used a tablet to go over everything again. Other than the issue with the footer text on skinnier screens, mentioned above the device list, my testing was very successful. The sites styling aswell as all features responded as expected to the browser window being minimized and enlarged using the responsive sliders in dev tools, aswell as at all preset screen sizes.

The devices in the devices used list above marked with  ^  are the main devices used during testing, the rest are various friends and family members who have used the site.

## Validator results

## Functionality Testing:

When testing the functionality of all the sites features I started with the features found across all pages of the site. Beginning with the nav I went from home to gallery and back, home to about and back, and finally from gallery to about and back and had no problems during this process. I then used my phone to view the site in mobile view and repeated the process, in doing so also testing the nav toggle icon that is used in the mobile layout of the site and that was all also successful. Moving on to the footer, I tested both links by clicking them and making sure they opened in a new browser tab and took me to the correct site on all three pages. When testing the email link I checked not only that clicking the link text would take the user to their email app or account (I logged out of the app and opened my inbox in a browser tab to test this also worked), but also that the correct email address would be auto filled in the recipient field in a new draft. Now for the home page I simply watched the carousel cycle through several times, making sure all images appeared and titles where correct, animation was smooth and would keep repeating until the user clicks off of the page. I then used my phone to open the home page in mobile view and check that the titles disappeared. Finally with the gallery at first I scrolled through all the images to make sure all had loaded, then going over all of them with the mouse to check the animation for desktop was working. Then I clicked on at least one image per row and viewed the modal, checking not only that all styling was as expected and all elements had rendered, but also that the images themselves and titles would change immediately and correctly aswell as varying the method I would close the modal between the three options the user is presented with. Each time I went on the modal I would download the image using the download button and tested that worked for all Images in the gallery. 


## User Stories:

* A user has found themselves on the site while searching for another witcher related website.
    * They will land on the home page. The small amount of text immediately presented to them informs the user of the site's main purpose. The partially visible image carousel prompts the user to continue scrolling to view a preview of the sites main content as well as another small amount of text to clarify the content found on the site and where to find it.

* A user familiar with The Witcher netflix series has found and entered the site expecting to see pictures from the show.
    * Upon reading the text found on the home page and viewing the images found in the carousel, they want to know more about the game series they previously knew nothing about. From that point they can find the About section via the sticky navigation menu that will always be displayed to the user. Or if they read the footer content they can be directed to the witcher fandom page for more information.

* A user is searching for a new screensaver for their laptop/pc and finds this site.
    * The home page content immediately lets the user know that the site has the type of content they are looking for. They navigate to the gallery straight away after seeing the option in the navigation menu. As they hover over the images with their mouse they are prompted to click on the image by the zoom effect which brings up the image within the modal. After selecting the image they want, they click the bright download button found just below the modal image which downloads a copy of image straight to the users devices.

* A user familiar with the franchise and game has found the site and has images of their own they would like to share.
    * After finding the site and looking at its content, the user thinks about their own images that they have taken within the game and would like to find out if there way any way for their images to be displayed on the site for others. Looking through the entire gallery, the user finds the footer below, which contains an email address thats clear purpose is for users to send their own images for use on the site.


# Deployment

* The site was deployed to GitHub pages. The steps to deploy are as follows:
    * From this project's repository, navigate to the settings tab
    * From the left hand menu, select pages.
    * From the source section drop-down menu, select the Main Branch.
    * Once the main branch has been selected, the page will refresh and provide a link to the live project.
The live link can be found here - https://t254-bot.github.io/Witcher-Pictures/

# Credits

* I was able to find The Witcher font, by JoannaVu, from Font Space :https://www.fontspace.com/category/the-witcher

* The home page carousel template used is from Bootstrap's documentation, my mentor Rich then helped me with using more of Bootstraps pre-set style rules

* The gallery template I followed came from a tutorial by Theweb Shala via Youtube 

* The nav template, aswell as the zoom effect used for the gallery images, came from the w3c schools

* I used [Imageresizer.com](https://imageresizer.com) to resize all of my images and [Optimizilla](https://imagecompressor.com) to compress my images

* I learnt how to outline text from Kevin Powell vie Youtube

