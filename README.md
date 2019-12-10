# Fitness Space
Fourth Full stack project assigned at General Assembly
<br />
Duration: 1 week
<br />
Worked on Solo

# Built with:
- Python - Django
- Reactjs & ReactStrap
- CSS - Semantic UI
- MySQL - postreSQL, 


# Description
Fitness space is a one stop destination to finding gyms that specialise in classes under a specific gym.  It is here as an antedote to commercial gyms.
<br />
The three disciplines that I picked were Pilates, CrossFit & Bodybuilding.
<br />
The user enters the website and sees a list of all the venues.  
<br />
To find the desired discipline, use the drop down menu to select your preference.
<br />
Clicking on the chosen venue will then show a list of all the classes on offer there. Each class comes with a link that will take you to the website to get more information or to join/book
<br />

<a href="https://imgur.com/BhcFk8N"><img src="https://i.imgur.com/BhcFk8Nl.png" title="source: imgur.com" /></a>


There is also an option to add a gym via the Suggest-a-gym page:
<br />
<br />
<a href="https://imgur.com/oeiqGWo"><img src="https://i.imgur.com/oeiqGWol.png" title="source: imgur.com" /></a>
<br />
Fill in all the details as according to what's required (every field is required)
<br />
Once submitted, the list on the gym list page will include the added gym at the bottom


# Tools
I used Python & Django together to create the models, views and serializers.  My main model was the gym model, the discipline model represented my one-to-many relationship and class model repsresented the many to many relationship.  Both the discipline and and class models were nested in the gym model
The UI used to track the models was TablePlus.  
Testing the serialized content models and creating the requests was done using Insomnia
<br />
React was used for the front end creation of how the the components are displayed.
<br />
The styling was a combination of flexbox and some external tools from Semantic UI & Reactstrap.
<br />

# My Findings 

My major challenge during this project was in the form submission.  In previous projects I would create Axios requests to GET nested data but I had never created a submission form that included nested input in Reactjs.
My solution was:
<br />
- In state, create a data object with all the required fields
- Nested the class model inside data as an array, with all required class fields there
<br />
<a href="https://imgur.com/YjVSeta"><img src="https://i.imgur.com/YjVSetal.png" title="source: imgur.com" /></a>
- For the Class input section of the form, I created a classes map with the required fields in there
<a href="https://imgur.com/BJRDWur"><img src="https://i.imgur.com/BJRDWurl.png" title="source: imgur.com" /></a>
- Next I created a function that would keep the input if any is placed in there as well as populate a new class form.  The HandleChange, logged the changes for the whole form, the AddClass was just for the class section
<br />
<a href="https://imgur.com/GCNULfQ"><img src="https://i.imgur.com/GCNULfQl.png" title="source: imgur.com" /></a>
<br />
- Then I added the AddClass function to a button element near the end of the form and named it 'add a new class' which on click, populates the fields to fill in and add another class without submitting the whole form

# Future Improvements 

With more time, I would like to have a map on the individual gym page instead of just the address which is why I initially included latitude and longitude on the gym model.  I had done some research on MapBox GL which is also what I used for another project.


