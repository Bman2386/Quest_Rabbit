# Quest Rabbit
Finally! A place that easily connects adventurers to the people that need them. On Quest Rabit you can create a quest and directly hire an adventurer, making quest boards a thing of the past. 

## Dependancies
* Ruby 2.6.0
* Rails 5.2.3, or 5.2.4
* Node 16.10.0
* Npm 7.24.0
* JavaScript ECMA Script 6

## Cloning Instructions
1. clone repo
2. Bundle Install
3. 'CD' to frontend folder
4. npm install
5. run server && $'npm start' (in seperate terminals), project defaults to localhost 3000


Quest Rabbit was built with ruby, as a rails project for the backend, the database uses postgres SQL, and the front end was built in react, redux, and javascript. The images including and especially the logo <img src="https://github.com/Bman2386/Quest_Rabbit/blob/master/app/assets/images/QuestRabbit.jpg" width="80" height="50"/> was made with [canva](https://www.canva.com/)
Some useful gems were: 
* Annotate
* pry-rails
* jbuilder
* b-crypt(for hashing passwords, we don't want to store actual passwords in the database)
* annotate

On the front end, webpack was used to get things flowing. Usefull modules were:
* @babel 
* react, & react-redux
* react-router-dom
* redux

The categories page is simply 1 component, that renders differing pages depending on which category you click on. Most coders I spoke with about this said that it HAD to be seperate pages... but I proved them wrong. By passing the category id as a part of the route:
```javascript
 <Route path="/categories/:categoryId" component={CategoryShow}/>
 ```
 We can then grab that id in the catagories container via ownProps:
 ```javascript
 categoryid: ownProps[ownProps.match.params.id]
 ```
 and dynamicly render the page based on which category the user clicks:
 ```javascript
 const dynamicImage = (
           categories && categories.length > 1 && id > 1? this.imageLogic(id) : ftch
        )

    return (    
        <div className="show-container">
            <img className="show-image" src={dynamicImage}/>
                    {
                        categories && categories.length > 1 ? 
                        <div>
                            <h1 className="show-h1">{categories[id - 1].category_name}</h1>
                            <p className="show-p">{categories[id - 1].ex_description}</p> 
                        </div> :  <h1>Not loaded</h1>
                    }  
        </div> 
                )
```
(the user never sees the `<h1>Not loaded</h1>` )

Another feature that is pretty cool, is the Quest form. The form has a lot of elements going on at the same time and I'm hoping to them with a bar pointing to where the user is in the form, of course its still under construction, but when its ready I'll put it here.

| # |   MVP   |                       Description                       | Completion Deadline |
|:-:|:-------:|:-------------------------------------------------------:|:-------------------:|
| 1 |  Setup  |      Create: Skeleton, MVP Checklist(Wiki), Schema      |      Sept 14th      |
| 2 |  Heroku |                   Host site on Heroku                   |      Sept 21st      |
| 3 |  Login  |      New account creation, login, guest demo/login      |      Sept 23rd      |
| 4 |  Quest  |                      Choose a Quest                     |      Sept 25th      |
| 5 | Details |     Provide Quest details, and choose an adventurer     |      Sept 27th      |
| 6 |  Assign |               Get assigned the Adventurer               |      Sept 29th      |
| 7 | Read Me |               Create a production Read ME               |      Sept 30th      |
| 8 |  Bonus  | Add Become an Adventurer, with Fake payment and billing |         ****        |
| 9 |  Bonus  |          Rate Adventurer after Quest Completion         |         ****        |
