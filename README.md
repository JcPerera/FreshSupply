# FreshSupply
## Hi there <img src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif" width="25px"></a> This Project can be viewed using this link [fsco.janaka.me](https://fsco.janaka.me/)

[![Netlify Status](https://api.netlify.com/api/v1/badges/2d6515ce-935a-4b73-86a7-bb708ada19dd/deploy-status)](https://app.netlify.com/sites/freshsupply/deploys) ![visitors](https://visitor-badge.laobi.icu/badge?page_id=JcPerera.FreshSupply)

## Implemented Steps
1. Created index.html and pure Js file
2. Draw a 100x100 grid of cells,with columns labelled A-Z, AA, AB, AC, etc. and rows numbered 1 to 100.
3. Click in a cell and enter a number, it should store the number.
4. Refresh button that redraws the grid (without refreshing the page) and inserts data into cells where you've saved it.

## TODO Steps
5. Add support for some basic formulas. For example if you enter "=A1+A2" into A3 it should calculate the sum of these two cells and display the result in A3. Updating A1 would update A3.
6. Add support for some basic functions. For example if you enter "=sum(A1:A10)" into A11, then it should calculate the sum of all cells in the range and display the result in A11. Updating any value in the range would recalculate A11.
7. Add support for formatting, for example bold, italics and underline

## My plan for building out the remaining steps.
### basic formulas
- add two new fields to the cell object as formula and related
- related field is an Array and formula is a string
- if the entered string starts with "=" then save the string in the formula field
- run 2 diffrent regex funtions to find the parameters and arithmetic operators
- find the relevent cells using the parameter values
- add the origin cell_id to related array field (So later if we change the value of these cells we can update the origin cells value) 
- get the data value from relevent cells
- use the  arithmetic operator and find the final value and update the cell

### basic functions
- similar to basic formula use another regex funtion to find the start and end cells and the arithmetic operator
- similar to basic formula

### support for formatting
- add three fields to the cell object as bold, italic, underline.
- add a new global object as last clicked cell
- add 3 buttons to the ui as bold, italic, underline.
- when using the buildCellElement() add two new onclick()
- onclick() will update the last clicked cell
- when user click on bold, italic and underline update the cell object fields (So we can render these styles again on refresh )
- use the document.getElementById("rowItem + colItem") to get the last selected cell and add new classnames as bold, italic and underline
- add a new css


## Please using following browser version to view this webpage
- IE. 6 - 10 supported. 11 supported.
- Edge * 12 - 100 Supported. 101 Supported.
- Firefox. 2 - 15 supported. 16 - 24. See notes: ...
- Chrome. 4 - 18 supported. 19 - 33. ...
- Safari. 3.1 - 8 supported. 9 - 15.3 Supported. ...
- Opera. 10 - 12.1 supported. 15 - 20. ...
- Safari on iOS * 3.2 - 8.4 supported. 9 - 15.3 Supported. ...
- Opera Mini * all supported
