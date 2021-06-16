# OurSpace

## Table of Contents

## Background

### Welcome to ![favicon (10)](https://user-images.githubusercontent.com/75297616/121967894-358d0480-cd3f-11eb-9a07-da6613f99b2f.png) OurSpace!

### [View the Live site here!](https://ourspace-1.herokuapp.com/)

![Intro_gif](https://user-images.githubusercontent.com/75297616/121966306-66b80580-cd3c-11eb-8498-42780ec63b88.gif)

Ourspace is a full stack web application modeling Facebook. Users have the ability to signup and login. A signed in user has the ability to create posts, view the posts of the community on Ourspace, like posts, like comments, add friends, and create a custom profile page.

The framework of the website is Ruby on Rails, for the backend with ActiveRecord which helps avoid making N + 1 queries. I used PostgreSQL as the database stroage and AWS S3 which is used to store the images for posts and user profiles. The frontend uses React and Redux to allow this single-page app to render efficiently and seemlessly for the useer.

## Technologies

* Ruby on Rails
* React.js
* Redux.js
* Node.js
* PostgreSQL
* Webpack
* Amazon AWS S3

## Features

### User Auth
Users will see which feilds are incorrect upon improper signup or login.

![ezgif com-gif-maker](https://user-images.githubusercontent.com/75297616/112651238-954fcf80-8e22-11eb-8e43-2a2f4cd0084f.gif)
- Full video: 
https://user-images.githubusercontent.com/75297616/112650189-84eb2500-8e21-11eb-809c-bed9e8a0d564.mp4

### Creating Posts

Users can create posts with images and a caption. 

![Post_create_gif](https://user-images.githubusercontent.com/75297616/122151677-f38ebc00-ce2d-11eb-85ab-ef88e56a248e.gif)

When users click the create post icon, a modal opens and auto focuses on the input field. 

### Editing Profile Page
Users can fully edit their Profile Page.

![ezgif com-gif-maker (3)](https://user-images.githubusercontent.com/75297616/122152118-c5f64280-ce2e-11eb-8280-cd764b254cdd.gif)

If a user doesnt have a bio, a placeholder instructs the user to click the bio button to add one.
However, as you may assume, these edit buttons only appear if the profile page being viewed is the Currrent User's profile page.

Here's a snippit from the profile.jsx file:

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

The user object on the first line is selected from the url specifiing the id of the user 
A user can add their Bio, Birthday, Occupation, Gender, Location, and much more.


### Adding and Removing Friends
Users can send, accept, and deny friend requests, along with adding and removing friends they encounter through the home page/ postIndex page.

![ezgif com-gif-maker (4)](https://user-images.githubusercontent.com/75297616/122152949-0904e580-ce30-11eb-8ecb-0346e80bb661.gif)

To quickly view these features, use the two Demo accounts that are easily accessable on the login page.



