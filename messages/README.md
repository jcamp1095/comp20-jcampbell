Joe Campbell 3/9/16 README.md

All elements of this program have been correctly implemented as verified by the sites given in the spec.

This project was made by me, Joe Campbell.

I aproximately spent 1 hour on this assignment.

Overview: This project contains a index.html, data.json, lab.js, and style.css.  It gets the data
from the json file and posts it to the webpage.


Question: is it possible to request the data from a different origin (e.g., http://messagehub.herokuapp.com/) or from your local machine (from file:///) from using XMLHttpRequest? Why or why not?

No it is not possible.  When trying the access the data from the file:// (by clicking on the 
index.html file) no data was visible on the page.  When trying to access the data from the 
site, the message "Failed to load data" came up which is the error message implemented in 
lab.js if request.status does not equal 200.
