# <div align='center'> Welcome to <img src='https://user-images.githubusercontent.com/75297616/121967894-358d0480-cd3f-11eb-9a07-da6613f99b2f.png'/> OurSpace! </div>

<div align='center'><img align='center' src = 'https://user-images.githubusercontent.com/75297616/126221868-7ca5e2a9-69b7-42ad-9136-edaf1fbda354.gif'/></div>

<!-- <a align='center' href= 'https://ourspace-1.herokuapp.com/' target='_blank'> -->
<!-- ![Intro_gif](https://user-images.githubusercontent.com/75297616/121966306-66b80580-cd3c-11eb-8498-42780ec63b88.gif) -->


## <div align='center'><a href = 'https://ourspace-1.herokuapp.com/' target='_blank'> View the Live site here!</a></div>

<br/>

Ourspace is a full stack web application modeling Facebook. Users have the ability to signup and login. A signed in user has the ability to **_create posts_**, view the posts of the community on Ourspace, **_like posts and comments_**, **_add friends_**, and create a custom **_profile page_**.

The framework of the website is built on **_Rails_** with **_ActiveRecord_** preventing _n_ + 1 queries to the database. I used **_PostgreSQL_** as the database stroage and **_AWS S3_** to store the images for posts and user profiles. The frontend uses **_React_** and **_Redux_** to allow this single-page app to reload only the components which have changed, rendering efficiently.

## Technologies

* *Ruby on Rails*
* *React.js*
* *Redux.js*
* *Node.js*
* *PostgreSQL*
* *Webpack*
* *Amazon AWS S3*
* *jbuilder*

## Features

### User Auth
Users will see which fields are incorrect upon improper signup or login.

<div align='center'><img src = 'https://user-images.githubusercontent.com/75297616/112651238-954fcf80-8e22-11eb-8e43-2a2f4cd0084f.gif' /></div>

<br/>

```javascript
// signup_form.jsx

render(){
    const {first_name, last_name, email, password, gender, birthday} = this.props.errors; // Retrieved from the container component which recieves errors from the backend
    
    const fnameErr = !!first_name ; // Holds the value of whether or not there an error for the firstname input feild
    
    const firstNameError = first_name ? <div className="fname-err"> {"First Name " + first_name[0]}</div> : ''; 
    // holds information of what will display is the first name input reveives an error
    
    return(
    // Inside return function:
    
        <input type='text'
        onChange={this.update('first_name')}
        value={this.state.first_name}
        placeholder="First Name"
        className="signup-input-fname"
        style={fnameErr ? {border:' thin solid red'} : {} } />
        
        {firstNameError}
        // This is the code we wrote above written in React/jsx to render dynamically    
        )
    }
```

### Creating Posts

Users can create posts with images and a caption. 

<div align='center'> <img src= 'https://user-images.githubusercontent.com/75297616/122151677-f38ebc00-ce2d-11eb-85ab-ef88e56a248e.gif'/> </div>

<br/>

* When users click the create post icon, a modal opens and auto focuses on the input field. 

### Editing Profile Page / Dynamic Rendering
Users can fully edit their Profile Page.

<div align='center'> <img src= 'https://user-images.githubusercontent.com/75297616/122152118-c5f64280-ce2e-11eb-8280-cd764b254cdd.gif' /> </div>

<br/>

* If a user doesnt have a bio, a placeholder instructs the user to *click the bio button* to add one.
> However, as you may assume, these edit buttons only appear if the profile page being viewed is the Currrent User's profile page.

Here's a snippit from the [profile.jsx](https://github.com/jas-singh-code/Fullstack_OurSpace/blob/6af1b0fc44b339d8cde524dc53009cffc266fccd/frontend/components/users/profile.jsx#L213-L227) file:

```javascript

{user.id === currentUser.id ? 
<div className='edit-photos-holder'>
    <form className='add-cover-photo' onClick={this.props.openUpdateCoverPhoto}>
        <label className='add-cover-photo-label'>
            <MdPhotoCamera />
            Add Cover Photo
        </label>
    </form>
    <div className='add-profile-picture' onClick={this.props.openUpdateProfilePhoto}>
        <MdPhotoCamera />
    </div>
</div>
:
''
}
```

The user object on the first line is selected from the url specifiing the id of the user in the profile container.
From there, buttons allowing edits conditionally render depending on if the profile page being viewed is the same as the currentUser's id. 
A user can add their Bio, Birthday, Occupation, Gender, Location, and much more.


### Adding and Removing Friends
Users can send, accept, and deny friend requests, along with adding and removing friends they encounter through the home page/ postIndex page.

<div align='center'> <img src= 'https://user-images.githubusercontent.com/75297616/122152949-0904e580-ce30-11eb-8ecb-0346e80bb661.gif'/> </div>
<br/>

```javascript
// friendship_reducer.js

    case RECEIVE_FRIENDSHIP:
            let id2 = action.friendship.id + 1;
            let friendship2 = {
                id: id2,
                user_id: action.friendship.friend_id,
                friend_id: action.friendship.user_id,
                created_at: action.friendship.created_at
            }
            newState[action.friendship.id] = action.friendship;
            newState[`${id2}`] = friendship2;
            return newState;
```

To quickly view these features, use the two Demo accounts that are easily accessable on the login page.



