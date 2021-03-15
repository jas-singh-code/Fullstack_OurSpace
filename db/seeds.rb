# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

    users = User.create([
        {firstname: 'Angelique', lastname: 'Sugrim', username: 'asugrim99', password_digest:'' session_token:''},
        {firstname: 'Phunsuk', lastname: 'Wangroo', username: 'pwangroo12', password_digest:'' session_token:''},
        {firstname: 'Jaspreet', lastname: 'Singh', username: 'jsingh12', password_digest:'' session_token:''},
        {firstname: 'Loveleen', lastname: 'Kaur', username: 'lkaur96', password_digest:'' session_token:''},
        {firstname: 'Mintu', lastname: 'Sing', username: 'msingh21', password_digest:'' session_token:''},
    ])

    posts = Post.create ([
        {title: 'hello world', message: 'what a lovely day to be on the interweb!' poster_id: 3},
        {title: 'why does this app only have old ppl!?', message: 'why are there only old people on this app! Also, im secretly in love with user 3!' poster_id: 1},
        {title: 'whats better? a ripe lemon, or a rotten apple?', message: 'asking for a friend, but whats worse to eat whole? ripe lemon or rotten apple?' poster_id: 5},
        {title: 'Lovleens Blog 1', message: 'hello OurSpace, well its kind of only MY own SPACE...' poster_id: 4},
        {title: 'Lovleens Blog 2', message: 'wish me luck on passing my NCLX exam' poster_id: 4},
        {title: 'Lovleens Blog 3', message: 'okay really bored with this pandemic, can i go on a vacation already' poster_id: 4},
        {title: 'Mr. Wangroo here', message: 'ehy does my name sound so familiar?' poster_id: 2},
        {title: 'whats the meaning of life?', message: 'should i try to make a sandwich? kinda dreading the cleanup :/' poster_id: 3},
    ])

    likes = Like.create([
        {liker_id: 3, post_id: 3}
        {liker_id: 4, post_id: 3}
        {liker_id: 1, post_id: 3}
        {liker_id: 2, post_id: 1}
        {liker_id: 1, post_id: 1}
        {liker_id: 4, post_id: 1}
        {liker_id: 5, post_id: 1}
        {liker_id: 3, post_id: 7}
        {liker_id: 5, post_id: 7}
        {liker_id: 1, post_id: 7}
        {liker_id: 1, post_id: 5}
        {liker_id: 1, post_id: 4}
        {liker_id: 1, post_id: 6}
        {liker_id: 2, post_id: 6}
        {liker_id: 3, post_id: 6}
        {liker_id: 2, post_id: 2}
        {liker_id: 3, post_id: 2}
        {liker_id: 4, post_id: 2}
        {liker_id: 5, post_id: 2}
    ])

    comments = Comment.create([
        {body: "lemons for sure man", commenter_id: 3, post_id: 3}
        {body: "you heard of a fridge", commenter_id: 2, post_id: 3}
        {body: "why are you asing this again", commenter_id: 1, post_id: 3}
        {body: "Whats up jassi! its me, Loveleen from highschool!", commenter_id: 4, post_id: 1}
        {body: "hey jas, watch my movie!", commenter_id: 2, post_id: 1}
        {body: "hey jassi! nice post!", commenter_id: 1, post_id: 1}
    ])