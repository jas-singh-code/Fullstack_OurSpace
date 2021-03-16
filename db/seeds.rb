# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

    users = User.create!([
        {first_name: 'Angelique', last_name: 'Sugrim', email: 'asugrim991@gmail.com', password_digest: 'aorighwrhvdfvrg'},
        {first_name: 'Phunsuk', last_name: 'Wangroo', email: 'pwangroo121@gmail.com', password_digest: 'aorigfvhwrhrg'},
        {first_name: 'Jaspreet', last_name: 'Singh', email: 'jsingh121@gmail.com', password_digest: 'aorighwfbgfwefrhrg'},
        {first_name: 'Loveleen', last_name: 'Kaur', email: 'lkaur961@gmail.com', password_digest: 'aorigfwefhnhntfdxhwrhrg'},
        {first_name: 'Mintu', last_name: 'Sing', email: 'msingh12@gmail.com', password_digest: 'aorighwxsqqxul8rwfwfwehrg'}
    ])

    posts = Post.create! ([
        {id: 1, title: 'hello world', message: 'what a lovely day to be on the interweb!', poster_id: 3},
        {id: 2, title: 'why does this app only have old ppl!?', message: 'why are there only old people on this app! Also, im secretly in love with user 3!', poster_id: 1},
        {id: 3, title: 'whats better? a ripe lemon, or a rotten apple?', message: 'asking for a friend, but whats worse to eat whole? ripe lemon or rotten apple?', poster_id: 5},
        {id: 4, title: 'Lovleen\'/s Blog 1', message: 'hello OurSpace, well its kind of only MY own SPACE...', poster_id: 4},
        {id: 5, title: 'Lovleen\'/s Blog 2', message: 'wish me luck on passing my NCLX exam', poster_id: 4},
        {id: 6, title: 'Lovleen\'/s Blog 3', message: 'okay really bored with this pandemic, can i go on a vacation already', poster_id: 4},
        {id: 7, title: 'Mr. Wangroo here', message: 'ehy does my name sound so familiar?', poster_id: 2},
        {id: 8, title: 'whats the meaning of life?', message: 'should i try to make a sandwich? kinda dreading the cleanup :/', poster_id: 3},
    ])

    likes = Like.create!([
        {id: 1, likable_id: 3, likable_type: 'Post'},
        {id: 2, likable_id: 4, likable_type: 'Post'},
        {id: 3, likable_id: 1, likable_type: 'Post'},
        {id: 4, likable_id: 2, likable_type: 'Post'},
        {id: 5, likable_id: 1, likable_type: 'Post'},
        {id: 6, likable_id: 4, likable_type: 'Post'},
        {id: 7, likable_id: 5, likable_type: 'Post'},
        {id: 8, likable_id: 3, likable_type: 'Post'},
        {id: 9, likable_id: 5, likable_type: 'Post'},
        {id: 10, likable_id: 1, likable_type: 'Comment'},
        {id: 11, likable_id: 1, likable_type: 'Comment'},
        {id: 12, likable_id: 1, likable_type: 'Comment'},
        {id: 13, likable_id: 1, likable_type: 'Comment'},
        {id: 14, likable_id: 2, likable_type: 'Comment'},
        {id: 15, likable_id: 3, likable_type: 'Comment'},
        {id: 16, likable_id: 2, likable_type: 'Comment'},
        {id: 17, likable_id: 3, likable_type: 'Comment'},
        {id: 18, likable_id: 4, likable_type: 'Comment'},
        {id: 19, likable_id: 5, likable_type: 'Comment'}
    ])

    comments = Comment.create!([
        {id: 1, body: "lemons for sure man", author_id: 3, post_id: 3},
        {id: 2, body: "you heard of a fridge", author_id: 2, post_id: 3},
        {id: 3, body: "why are you asing this again", author_id: 1, post_id: 3},
        {id: 4, body: "Whats up jassi! its me, Loveleen from highschool!", author_id: 4, post_id: 1},
        {id: 5, body: "hey jas, watch my movie!", author_id: 2, post_id: 1},
        {id: 6, body: "hey jassi! nice post!", author_id: 1, post_id: 1}
    ])

    friends = Friend.create!([
        {id: 1, sender_id: 1, receiver_id: 2, pending: true},
        {id: 2, sender_id: 1, receiver_id: 3, pending: false},
        {id: 3, sender_id: 1, receiver_id: 4, pending: false},
        {id: 4, sender_id: 1, receiver_id: 5, pending: false},
        {id: 6, sender_id: 2, receiver_id: 3, pending: false},
        {id: 7, sender_id: 2, receiver_id: 4, pending: false},
        {id: 8, sender_id: 2, receiver_id: 5, pending: false},
        {id: 9, sender_id: 3, receiver_id: 5, pending: false},
        {id: 10, sender_id: 3, receiver_id: 2, pending: false},
        {id: 11, sender_id: 3, receiver_id: 1, pending: false},
        {id: 12, sender_id: 4, receiver_id: 3, pending: true},
        {id: 12, sender_id: 4, receiver_id: 5, pending: false}
    ])

    # still pending between users 1 => 2('Angeliq', 'Phunsuk') and 4 => 3 ('Jaspreet', 'Loveleen')