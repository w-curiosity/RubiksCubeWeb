# README

A web for Rubik's Cube. Incuding introduction, solution guide, stopwatch and so on.
React.js, Node.js

## How to Run
+ `npm install`
+ `npm start`

## Project Description

This site is a Rubik's Cube Platform. Users can use `Stopwatch` to record their time of solving a Rubik's Cube; view the current world records in the `Records` Page; find solutions on the `Solution` Page.

## Complex UI Elements

1. A dropdown menu of the `Solution` Button in the navigation on the top
2. Accordion in the `Records` Page
3. A different Accordion in the `Help` Page

## Loading Indicator

When you click the `Clear` button on the `Stopwatch` Page, the loading indicator will show on the button.

## License
+ images
    
    All the images used in this project are in the `final/rubik/public/img`. And they are all created by myself.

+ icons

    All the icons used in this project are in the `final/rubik/src/cssicon`. The icons and license are as follows (liscense are also included in corresponding paths):
    + font-awesome
        + license link: https://fontawesome.com/license/free
        + Font Awesome Free is free, open source, and GPL friendly. You can use it for commercial projects, open source projects, or really almost whatever you want.
    + cubing-icons
        + license link: https://github.com/cubing/icons/blob/main/LICENSE
        + Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
    + flag-icons
        + license link: https://github.com/lipis/flag-icons/blob/main/LICENSE
        + Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions: The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

## Services

+ The Record Submission form and Record Board in the Stopwatch Page is using a real remote service.
+ Services address: `http://101.43.61.57:5000/` (It's running! No need to start the service.)
+ All the data submitted through the form will shown on the Record Board and be sent to the server.
+ The copy of the code for the services are in the folder `final/services-for-rubik`.

## Stopwatch and Record Submission Form Introdution
+ Use the stopwatch to get time and fill the form to submit the record to the Record Board.
+ Can not submit the form without Fastest time or Average time.

## Pages Structure
- Home
- Stopwatch
- Records
- Solution
    - Edge solution guides
    - 2x2x2 solution guides
    - 3x3x3 solution guides
    - 4x4x4 solution guides
    - 5x5x5 solution guides
    - More solution guides
- About 
- Help
- Terms&Conditions
- Privacy Policy
