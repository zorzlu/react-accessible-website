# React-based accessible website

# 1. Description
Website developed for the courses of ICT Accessibility and Assistive Products, during the master in Human-Computer Interaction at UPM (2020/2021).
The goal of the project was to obtain a website compliant with WCAG 2.1 AA, using a JS toolkit. We chose to implement our website with [[Chakra UI]](https://chakra-ui.com/) toolkit, based on React.

- [React-based accessible website](#react-based-accessible-website)
- [1. Description](#1-description)
- [2. Installation](#2-installation)
  - [2.1. Run and Build Scripts](#21-run-and-build-scripts)
    - [2.1.1. `npm start`](#211-npm-start)
    - [2.1.2. `npm run build`](#212-npm-run-build)
  - [2.2. Learn More about create-react-app](#22-learn-more-about-create-react-app)
- [3. Toolkit](#3-toolkit)
  - [3.1. Toolkit info](#31-toolkit-info)
  - [3.2. Motivations for choosing the toolkit](#32-motivations-for-choosing-the-toolkit)
- [4. Website structure and components](#4-website-structure-and-components)
  - [4.1. Website structure and general considerations](#41-website-structure-and-general-considerations)
  - [4.2. Home page](#42-home-page)
  - [4.3. Events page](#43-events-page)
  - [4.4. Event Details page](#44-event-details-page)
  - [4.5. JoinEvent page](#45-joinevent-page)
  - [4.6. About Us page](#46-about-us-page)
- [5. Accessibility result](#5-accessibility-result)
  - [5.1. Join Event (Form)](#51-join-event-form)
    - [5.1.1. Making information available about user interface elements](#511-making-information-available-about-user-interface-elements)
    - [5.1.2. Available actions on user interface elements](#512-available-actions-on-user-interface-elements)
    - [5.1.3. Changes related to user interface elements](#513-changes-related-to-user-interface-elements)
  - [5.2. Events page](#52-events-page)
    - [5.2.1. Making information available about user interface elements](#521-making-information-available-about-user-interface-elements)
    - [5.2.2. Available actions on user interface elements](#522-available-actions-on-user-interface-elements)
    - [5.2.3. Focus and selection attributes of user interface elements](#523-focus-and-selection-attributes-of-user-interface-elements)
    - [5.2.4. Changes related to user interface elements](#524-changes-related-to-user-interface-elements)
    - [5.2.5. Programmatic modifications of states, properties, values and text](#525-programmatic-modifications-of-states-properties-values-and-text)
  - [5.3. Additional accessibility considerations](#53-additional-accessibility-considerations)
    - [5.3.1. Cards](#531-cards)
    - [5.3.2. React Client-Side Routing](#532-react-client-side-routing)
- [6. Useful Resources for Accessible React Applications](#6-useful-resources-for-accessible-react-applications)

<br/>

# 2. Installation

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## 2.1. Run and Build Scripts

In the project directory, you can run:

### 2.1.1. `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.


### 2.1.2. `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


## 2.2. Learn More about create-react-app

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).





# 3. Toolkit

## 3.1. Toolkit info

-   Chakra UI, v1.2

-   Creator: Segun Adebayo

-   [[Chakra UI]](https://chakra-ui.com/)

-   [[chakra-ui \| GitHub]](https://github.com/chakra-ui/chakra-ui)

Chakra-UI is a React-based toolkit that provides high-level composable
components with easy customisation of features and style. It aims at
providing accessible elements which strictly follow WAI-ARIA standards.

The component library was introduced in September 2019 by Segun Adebayo
and made it available as an open-source project on GitHub. The current
version is v1.2. A core team of 14 people directs the development, and
hundreds of developers contribute to the project.

The principles at the base of Chakra are:

-   **Style Props:** components styles can be overridden and extended
    using style props, to reduce CSS props\' use in the development
    process.

-   **Simplicity:** components APIs are simple and easy to understand.

-   **Composition:** components are a composition of smaller parts with
    minimal props, to ensure that style and functionality are
    extensible and flexible.

-   **Accessibility:** all the components are created following the
    WAI-ARIA guideline. They verified the correctness of keyboard
    navigation, focus management, colour contrast, and the aria-\*
attributes.

-   **Dark Mode compatibility**

-   **Accurately named props**

## 3.2. Motivations for choosing the toolkit

When looking for the more suitable toolkit for our website, we took into
consideration different aspects.

We firstly analysed the accessibility. We found that the Chakra
components required in our website were accessible and reached - or
supported adjustments to reach - WAI-ARIA compliance.

Secondly, we examined the layout and theming system of the toolkit.
Having a possibility to quickly set-up the style and the layout is a
great benefit, compared to the effort of coding all these elements from
scratch. Therefore, Chakra\'s inclusion of inline style properties
(while coding, not in the produced HTML) and layout components was
meaningful in the decision phase.

Lastly, we analysed the flexibility of the component library. Since
version v1, the toolkit supports the \'as\' property on every element.
This feature allows developers to pass an HTML tag (or other Chakra
elements) to be rendered to make the HTML markup consistent with the
meaning of the personalised component.

# 4. Website structure and components

## 4.1. Website structure and general considerations 

[[CommunityMate
Website]](https://wonderful-water-01329c603.azurestaticapps.net/)

The aim was to develop an accessible platform that all people can use to
discover volunteering activities in Madrid and register for the ones
they are interested in.

The website contains five main web pages: 'Home', 'Events', 'Event
Details', 'Join Event' and 'About Us' pages. Through a navigation bar,
users can navigate to 'Home', 'Events' and 'About Us' pages. The 'Event
Details' page contains a detailed description of each particular event
and can be only accessed by clicking on an event card, located in 'Home'
and 'Events' pages. The 'Join Event' page contains a form users can fill
in to join an event, and it is only accessible from the 'Event Details'
page as it is part of a process: users browse through all of the events,
then decide on a particular one they want to join and apply to it. The
complete navigation map of the web site can be seen in Figure 1. As
events are loaded from a database, the only page with \'static\' content
is the 'About Us' one.

![](\docs\media\image33.png)

Figure 2.1. Sitemap

All the elements of the web pages have been implemented using Chakra
components, even simple elements like textboxes and static lists.
Chakra converts them to HTML code.\
Most of those were accessible by default or supported modification in
order to reach WAI-ARIA compliance. Some features, such as layout grids
(the grids available in Chakra have different purposes than WAI-ARIA
grids) and cards. These functionalities were implemented writing the
needed javascript code and using basic Chakra components to make use of
the style props.

In the next subsections, the different pages are described. Page header,
footer and Cards are explained only in the 'Home' page and where
significant modifications are introduced.

In section 3, only the main interactive elements are thoroughly
explained. These elements are usually present on different pages, and so
the description is not repeated for every occurrence.

## 4.2. Home page

In the 'Home' page users can discover some basic information about the
platform along with its mission statement. They are also provided with
the application mechanism and with a preview of some of the available
events.

![](\docs\media\image7.png)

Figure 2.2. HomePage

The 'Home' page contains, as all of the other pages, the **header**. On
the left there is the CommunityMate **logo**, acting as a link to come
back to the website's homepage. On the right, the main **navigation
bar** is provided.

![](\docs\media\image17.png)

![](\docs\media\image27.png)

![](\docs\media\image32.png)

Figure 2.3. Header at different viewports. On small viewport, navbar collapsed and expanded

The navigation bar contains links to the 'Home', 'Events' and 'About Us'
pages and has been coded responsively. In full desktop mode all of the
links can be separately seen, but they are grouped together in a
hamburger menu when the screen size is reduced. The menu can be extended
and closed also using the keyboard.

![](\docs\media\image18.png)
![](\docs\media\image28.png)

Figure 2.4. Links to skip repeated content

The mechanism to skip repeated blocks is implemented in the form of two
links that appear on the top left of the header when the user presses
the TAB key on the keyboard.

The page presents one heading level 1 at the top of the 'main' section.
The content is further split into sections, for any of which a headings
level 2 is present. The corresponding sections and headings structure is
as follows.

-   CommunityMate (and motto)

    -   The Platform

    -   Our mission

    -   How to join an event

    -   Recommended events

To explain the application process, an **ordered list** with the main
steps is displayed. Also in this case, the list is coded using a Chakra
component ([[Unordered List \|
Chakra]](https://chakra-ui.com/docs/data-display/list)), but it is
rendered using HTML standard list elements.

![](\docs\media\image5.png)

Figure 2.5. Application process in 'Home' page

In the 'recommended events' section, four events are displayed using
**cards**. Semantically the elements are grouped in an **unordered
list**.

The Card element is an article which contains a header that acts as a
link. Mouse and touch users can click on the card in any position to
activate the link in the header. Card elements were created adapting and
combining several Chakra components to achieve the result.

Users can either choose to visit the page containing the event's
information, by clicking on the card or accessing the 'Events' page
using the link positioned after the list, as seen in Figure 2.6.

![](\docs\media\image34.png)

Figure 2.6. Recommended events section in 'Home' page

The last element in the 'Home' page is the **footer**, which only
contains a copyright notice.

![](\docs\media\image30.png)

Figure 2.7. Footer

## 4.3. Events page

The 'Events' page contains all of the available events users can apply
to. Each event is accompanied by its location, date and some labels that
describe its scope. The page also contains an interactive filtering
mechanism. Events can be filtered by location and/or by category.
Through this page, users can reach a more detailed description of each
event.

As all of the other pages, the 'EventDetails' page contains the
**header** and the **footer**.

![](\docs\media\image13.png)

Figure 2.8. Events page

The page presents one heading level 1 at the top of the 'main' section.
The content is further split into sections, for any of which a headings
level 2 is present. The corresponding sections and headings structure is
as follows.

-   Events

    -   Filter Selection

    -   List of events

![](\docs\media\image23.png)
![](\docs\media\image25.png)

Figure 2.9. Filter Section collapsed and expanded

The filters are hidden using the Disclosure pattern. A button triggers
the visibility of the content of the section, as shown in Figure 2.9.

An unordered list contains all the different categories. A heading level
3 and a group of checkboxes (the actual filter options) are displayed
for each category.

The checkboxes are implemented using the WAI-ARIA layout grid pattern to
group the interactive components into a single tab stop. Keyboard users
can then quickly skip to the next list, avoiding a tab press for each
checkbox.

The implementation of the grid pattern was not straightforward, as
Chakra lacks the component, and the ones named as \'grids\' are simple
CSS grids. We coded the functions necessary to enable the keyboard
interaction and integrated those with the Chakra elements.

![](\docs\media\image26.png)

Figure 2.10. List of events and status message

The section \'List of Events\' contains a **status** message indicating
the categories of filters enabled and the number of events found. After
this component, the **cards** of the corresponding events are grouped in
an **unordered list**. Cards are described in Section 2.2.

## 4.4. Event Details page

The 'Event Details' web page contains a more detailed description of
each event. According to the URL of the page, appropriate content is
fetched.

![](\docs\media\image24.png)

Figure 2.11. Event details page

As all of the other pages, the 'EventDetails' page contains the
**header** and the **footer**. However, the header is different from the
one presented in the homepage.

![](\docs\media\image16.png)

Figure 2.12. Header with breadcrumb

This page is not accessible through the main navigation bar, as it is
part of a process: the user needs at first to select the event he/she
wants to read. Therefore, we introduced a **breadcrumb** to help the
orientation of the user within the website. This alternative navigation
is located in the header of the webpage, in order to maintain the
functionality of the skip-repeated-blocks links.

The page presents one heading level 1 at the top of the 'main' section.
The content is further split into sections, for any of which a headings
level 2 is present. The corresponding sections and headings structure is
as follows.

-   Name of the Event

    -   Event overview

    -   Description of the event

    -   Activities

The **text** content is rendered from Chakra components that are
translated into \<p\elements.\
In the \'Activities\' section, an **unordered list** is used to display
the chosen event\'s tasks.

Both in the \'Event overview\' region and at the end of the page, a
**link** for the event registration form is present. The reasoning
behind the placement of two buttons with the same purpose is that users
have diverse ways of interacting with the website. Some users may
already know the details of an event, and so search for quick
registration. In contrast, others read all the content before choosing.
The page is related to a single event, so a link named \'Join event\'
does not lead to misunderstanding.

## 4.5. JoinEvent page

The 'JoinEvent' web page contains a form users can fill in to join a
particular event.

![](\docs\media\image14.png)

Figure 2.13. 'JoinEvent' page

As all of the other pages, the 'EventDetails' page contains the
**header** and the **footer**. Similarly to the 'Event details' page,
this one is not reachable from the navigation menu, but it is part of a
process. Therefore, **the breadcrumb** is present in the header. See
Section 2.4 for further details.

The page presents one heading level 1 at the top of the 'main' section,
indicating the purpose of the page \'Join event\' and the selected
event's name.

The form includes different types of input fields. Five entries are
textboxes, and one of them is multiline. Five checkboxes are also
displayed to allow the user to input his/her skills. The fields allow
input for \'first name\', \'last name\', \'telephone number\',
\'email\', \'skills\' (multiple checkboxes) and \'motivation\'. Apart
from the last two ones, all the fields are mandatory. The submit button
is located at the end of the form.

The form was implemented using Chakra-based elements with some
modifications to be compliant with WAI-ARIA 1.1 and WCAG 2.1.
Instructions are provided at the beginning, and error messages are
generated if the required fields are not completed or if the data format
is not correct.

![](\docs\media\image19.png)

Figure 2.14. Error messages on Form

If errors are found during the submission procedure, these are displayed
with descriptive labels under each field, and focus is placed on the
first field with incorrect data.

## 4.6. About Us page

The 'About Us' page contains the story and goals of the project. A table
with the project's current figures is also provided to present the
platform's development better. In the end, contact information is
displayed.

![](\docs\media\image10.png)

Figure 2.15. About Us page

As all of the other pages, the 'EventDetails' page contains the
**header** and the **footer**.

The page presents one heading level 1 at the top of the 'main' section.
The content is further split into sections, for any of which a headings
level 2 is present. The corresponding sections and heading structure is
as follows.

-   About CommunityMate

    -   Our story

    -   Our goals

    -   Our figures

    -   Contact information

An **unordered list** is used to specify the goals and a **table** for
the figures. Both were coded with Chakra components which are based on
native HTML elements ([[Table \|
Chakra]](https://chakra-ui.com/docs/data-display/table)).

The table is correctly rendered with \<th\and \<td\elements, but we
had to deal with some Chakra library issues, related to automatically
applied roles. We adjusted them to comply with WAI-ARIA.

# 5. Accessibility result

In the current section, we report an accessibility analysis of the
interactive components implemented with the toolkit. We also describe
some of the techniques we used to make sure to reach accessibility
conformity.

As mentioned in Section 2.1, the whole website was built using Chakra
component library. In most cases, chakra elements were \"placeholders\"
for correspondent HTML elements with CSS properties and some JS
functions. Therefore, our analysis focuses on the pages where the more
complex components are located: Join Event (Form) (Section 3.1) and
Events (Section 3.2).

In section 3.3, additional accessibility considerations are presented.

## 5.1. Join Event (Form)

In implementing the Form, Chakra elements were used such as FormControl,
FormLabel or Input. The FormControl follows the WAI-ARIA specifications
and it manages some of the accessibility aspects. However, some
adjustments were made.

### 5.1.1. Making information available about user interface elements

-   Form element:

    -   The HTML 'form' tag is used to create the form element. A label
        for the form is provided through the aria-labelledby
        attribute.

![](\docs\media\image22.png)
>
Figure 3.1. Form element with correct name

-   Input fields (textboxes):

    -   Each input field is built using \<input\or \<textarea\>
        elements. The type value is not specified and so the default
        'text' is selected.

    -   \<label\has an htmlFor attribute that points to the id of the
        form input.

    -   When there is an error, the input element has aria-describedby
        pointing the corresponding error description message and
        aria-invalid true.

![](\docs\media\image31.png)
>
Figure 3.2. Text input field accessibility attributes and properties

-   isRequired attribute is used for mandatory fields. By passing the
    isRequired props, the Input field has aria-required set to true,
    and the FormLabel will show a red asterisk.

-   validate methods are implemented for the required fields and to
    check the validity of email and phone number

-   User agent automatic validation is disabled.

-   autocomplete attributes are used to identify input purpose. Tokens
    used: 'given-name', 'family-name', 'email', 'tel-national'

![](\docs\media\image11.png)
>
Figure 3.2 ARIA markup when invalid attribute is provided

-   Checkboxes:

    -   The checkbox is built using an \<input\element of type
        'checkbox'. The role is automatically set to checkbox.

    -   The checkbox has an accessible label provided by the \<label\>
        element in which it is wrapped

    -   When checked, the checkbox element has state aria-checked set to
        true.

    -   When not checked, it has state aria-checked set to false.

![](\docs\media\image29.png)
>
![](\docs\media\image3.png)
>
Figure 3.4. Computed properties for checkbox

### 5.1.2. Available actions on user interface elements

Users can type text in the input fields, change the state of the
checkboxes (checked: true or false) and submit the form.

-   Input fields (textboxes):

    -   Each input field is built using \<input\or \<textarea\>
        elements. The type value is not specified and so the default
        'text' is selected. The Assistive Technology (AT) is informed
        that it is possible to input text content.

-   Checkboxes

    -   Each checkbox is built using an \<input\element of type
        'checkbox'. The role is automatically set to checkbox. The AT
        is informed that it is possible to toggle between the true and
        false value for aria-checked.

        1.  ### Focus and selection attributes of user interface elements

All the elements are coded using proper HTML tags or complying with
WAI-ARIA specification. No actions are implemented to prevent focus and
selection.

### 5.1.3. Changes related to user interface elements

-   When required fields are not filled or a mistake is present in the
    provided data, an error message is shown on the screen and
    communicated to assistive technologies using elements with
    aria-live=polite attribute.

![](\docs\media\image15.png)
>
Figure 3.5. Error message with aria-polite attribute

-   The submission of the form causes a change of page, to reach a
    confirmation of the registration. Details about client-side
    routing are reported in Section 3.3.2.

    1.  ### Programmatic modifications of states, properties, values and text

All the elements that allow state, property, values and text
modification are coded using proper HTML tags or complying with WAI-ARIA
specification. No actions are implemented to prevent programmatic
modification.

## 5.2. Events page

The 'Events*'* page contains different challenges for creating an
accessible experience. As the user can filter the events, the card
elements on the screen dynamically change without reloading the page.
Moreover, the filters are checkbox groups. These ones are not standard
HTML components and are developed following the WAI-ARIA layout grid
pattern.

To implement these layout grids, the Chakra library was not sufficient.
We had to write the JS functions to create the expected keyboard
interaction and define the elements' correct roles.

![](\docs\media\image6.png)

Figure 3.6. Events page: (A) filters disclosure section, (B) checkboxes
group,\
(C) status message, (D) event cards group

### 5.2.1. Making information available about user interface elements

-   Edit Filters button (Disclosure pattern)

    -   The element used to show and hide the filters section is coded
        as an HTML button and so the role is \'button\'

    -   The button hase aria-expanded value set to true or false
        accordingly to the visibility of the content

    -   The button has aria-controls value set to the id of the
        controlled element

![](\docs\media\image2.png)
>
Figure 3.7. Edit Filters button accessibility attributes and
properties

-   Checkboxes groups (layout grid pattern)

The grid is used for layout and interaction purposes. Therefore, even
if the logical row representation contradicts the vertical one
displayed on screen, the implementation is correct.

-   The grid container has a role grid.

-   The grid is labeled by the heading above it using aria-labelledby.

![](\docs\media\image12.png)
>
Figure 3.8. grid element accessibility attributes and properties

-   Each row container has role row and is wrapped by the grid element

-   Each cell is contained in a row element and has a role gridcell as
    it does not contain header information.

![](\docs\media\image1.png)
>
Figure 3.9. grid rows and gridcell hierarchy

-   Checkboxes

    -   The checkbox is built using an \<input\element of type
        'checkbox'. The role is automatically set to checkbox.

    -   The checkbox has an accessible label provided by the \<label\>
        element in which it is wrapped

    -   When checked, the checkbox element has state aria-checked set to
        true.

    -   When not checked, it has state aria-checked set to false.

![](\docs\media\image20.png)
>
Figure 3.10. Checkbox accessibility attributes and properties

-   Status message

    -   The message has role status that triggers corresponding
        aria-live properties

![](\docs\media\image21.png)
>
Figure 3.11. Status message accessibility attributes and properties

### 5.2.2. Available actions on user interface elements

-   Edit Filters button (Disclosure pattern)

    -   The element used to show and hide the filters section is coded
        as an HTML \<button\and so the role is \'button\'. The AT
        knows that the element can be activated (for example, using a
        keyboard, with both Space and Enter).

    -   The aria-expanded value informs the AT that the button "hides"
        or "shows" the corresponding controlled element

-   Checkboxes groups (layout grid pattern)

    -   The grid role and the correct ones applied to the child elements
        allows AT to navigate between the cells.

    -   To enable pattern's keyboard navigation, we wrote a JS function
        to dynamically change the tabindex on the contained
        interactive objects (checkboxes) and to allow arrow keys to
        move the focus within the grid.\
        The rule for the tabindex is: tabindex=0 only on one element
        of the grid, tabindex=-1 on others. Being the grid a 'layout
        grid' with a single logical row, we enabled the same
        navigation actions both with the left-right keys (needed for
        the pattern) and the up-down ones (useful for users looking at
        the screen, as it matches the presentation).

    -   The contained components do not require arrow keys to operate
        and so there are no issues in accessibility.

-   Checkboxes

    -   The checkbox is built using an \<input\element of type
        'checkbox'. The role is automatically set to checkbox. The AT
        is informed that it is possible to toggle between the true and
        false value for aria-checked.

-   Status message

    -   No actions

### 5.2.3. Focus and selection attributes of user interface elements

All the elements are coded using proper HTML tags or complying with
WAI-ARIA specification. No actions are implemented to prevent focus and
selection.

### 5.2.4. Changes related to user interface elements

-   Status message

    -   The status message is designed to change when are enabled new
        filters (categories) and when the chosen filter values lead to
        a change in the retrieved events. These events are used to
        populate the cards section. Therefore, a card is displayed
        only if the corresponding event matches the filters.

The filters are saved as URL query parameters. Every time the
parameters change, the status message is updated, and the list of
events retrieved. The aria-live region corresponding to \'status\' is
\'polite\'. That means that if the message is not changed, AT is not
notified.
>
![](\docs\media\image8.png)
>
![](\docs\media\image4.png)
>
Figure 3.12. Function to update the status message

### 5.2.5. Programmatic modifications of states, properties, values and text

All the elements that allow state, property, values and text
modification are coded using proper HTML tags or complying with WAI-ARIA
specification. No actions are implemented to prevent programmatic
modification.

## 5.3. Additional accessibility considerations

This section reports two additional cases in which we had to put a
significant effort to reach accessible solutions. The card element and
the case of React client-side routing are analysed.

### 5.3.1. Cards

![](\docs\media\image9.png)

Figure 3.13. Card: (A) normal status, (B) card hovered, (C) link in card
hovered

Chakra UI does not provide a card component, and so we had to develop
our one combining several elements.

When we were realizing the card, the most crucial design choices were
about the link element. Mouse-enabled users would like to click anywhere
on the card to reach the destination. However, AT users need links with
proper titles and not big \<a\elements that act as containers.

To solve this problem, we decided to add a single link in the card,
corresponding to the title, which is a heading element. Keyboard-based
and AT users can find that link, that works and behaves as expected.
With CSS, we tweaked the appearance of the card for the hovering and
focus status. Instead of placing a focus selector just on the name, we
set it on the whole card. Some JS code allows mouse users to click on
the card in any position and activate the link.

### 5.3.2. React Client-Side Routing

React web apps are created with a single HTML page whose content is
dynamically updated. Usually, context changes triggers page reload, and
so these are announced by AT. Client-side routing does not trigger any
reload, and AT is not informed. Moreover, the focus position is not
restored at the top of the page, creating obstacles for keyboard-based
users.

Using React\'s componentDidMount and some aria-live regions ( [[React
ARIA live message announcer \|
GitHub]](https://github.com/AlmeroSteyn/react-aria-live) ), we were
able to fix the problems presented above. Every time the router changes
the page\'s main content, the focus position is moved back to the
starting point and a message is communicated to AT.

# 6. Useful Resources for Accessible React Applications

[Accessible Routing in React](https://timwright.org/blog/2019/03/23/accessible-routing-in-react/)

[Creating accessible React apps](http://simplyaccessible.com/article/react-a11y/)

[Accessible React Router navigation with ARIA Live Regions and Redux](https://almerosteyn.com/2017/03/accessible-react-navigation)

[React-Aria-Live](https://github.com/AlmeroSteyn/react-aria-live): ARIA live message announcer for React apps.

[Cards| Inclusive Components - Design](https://inclusive-components.design/cards/)

[Block Links, Cards, Clickable Regions, Rows, Etc.| Adrian Roselli ](https://adrianroselli.com/2020/02/block-links-cards-clickable-regions-etc.html)

[Building Accessible Grids in React | Tryggvi Gylfason
](https://dev.to/tryggvigy/building-accessible-grids-1-216j)
