# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'
User.destroy_all
User.connection.execute('ALTER SEQUENCE users_id_seq RESTART WITH 1') 
Post.destroy_all
Post.connection.execute('ALTER SEQUENCE posts_id_seq RESTART WITH 1') 

    users = User.create!([
        {first_name: 'Angelique', last_name: 'Sugrim', email: 'asugrim991@gmail.com', password: 'Angelique', birthday: '12345678', gender: 'male'},
        {first_name: 'Jaspreet', last_name: 'Singh', email: 'jsingh121@gmail.com', password: 'Jaspreet', birthday: '12345678', gender: 'male'},
        {first_name: 'Loveleen', last_name: 'Kaur', email: 'lkaur961@gmail.com', password: 'Loveleen', birthday: '12345678', gender: 'male'}
    ])

    demo = User.create({first_name: 'Guest', last_name: 'User', email: 'guest@ourspace.com', password: 'demouser', birthday: '12345678', gender: 'other', education: 'College University', location: 'New York City', occupation: 'Social Worker'})
    demo_file = open('https://ourspace-seeds.s3.us-east-2.amazonaws.com/user2.jfif')
    demo.profile_picture.attach(io: demo_file, filename: 'user2.jfif')
    demo_cover = open('https://ourspace-seeds.s3.us-east-2.amazonaws.com/cover1.jpg')
    demo.cover_picture.attach(io: demo_cover, filename: 'cover1.jpg')

    mintu = User.create({first_name: 'Mintu', last_name: 'Sing', email: 'msingh12@gmail.com', password: 'Mintuuu', birthday: '12345678', gender: 'male', education: 'City College of New York', location: 'New York City', occupation: 'Electrician'})
    mintu_file = open('https://ourspace-seeds.s3.us-east-2.amazonaws.com/user1.jfif')
    mintu.profile_picture.attach(io: mintu_file, filename: 'user1.jfif')
    mintu_cover = open('https://ourspace-seeds.s3.us-east-2.amazonaws.com/cover_car.jpg')
    mintu.cover_picture.attach(io: mintu_cover, filename: 'cover_car.jpg')

    p_user = User.create({first_name: 'Phunsuk', last_name: 'Wangroo', email: 'pwangroo121@gmail.com', password: 'Phunsuk', birthday: '12345678', gender: 'male', education: 'Howard University', location: 'New York City', occupation: 'Plumber'})
    p_file = open('https://ourspace-seeds.s3.us-east-2.amazonaws.com/user3.jpg')
    p_user.profile_picture.attach(io: p_file, filename: 'user3.jpg')
    p_cover= open('https://ourspace-seeds.s3.us-east-2.amazonaws.com/cover_phunsuk.jpg')
    p_user.cover_picture.attach(io: p_cover, filename: 'cover_phunsuk.jpg')

    ##########################POSTS###################################

    post1 = Post.create({ wall_id: 3, message: 'Took this beautiful shot by the beach today. Click the like button below to show some support!', poster_id: 6})
    file1 = open('https://ourspace-seeds.s3.us-east-2.amazonaws.com/post1.jfif')
    post1.photo.attach(io: file1, filename: 'post1.jfif')

    post2 = Post.create({ wall_id: 3, message: 'Took a strool to look at the city and captured this amazing photo. Click the like button below to show some support!', poster_id: 6})
    file2 = open('https://ourspace-seeds.s3.us-east-2.amazonaws.com/post2.jfif')
    post2.photo.attach(io: file2, filename: 'post2.jfif')

    posts = Post.create! ([
        { wall_id: 3, message: 'Wine is constant proof that God loves us and loves to see us happy - Ben. Franklin', poster_id: 3},
        { wall_id: 2, message: 'anyone wanna have a blockbuster party at my place!?', poster_id: 2},
        { wall_id: 1, message: 'whats the square root of a prime number?', poster_id: 3},
        { wall_id: 3, message: 'Better to remain silent and be thought a fool than to speak out and remove all doubt.', poster_id: 2},
        { wall_id: 5, message: 'People say nothing is impossible, but I do nothing every day.', poster_id: 4},
        { wall_id: 5, message: 'hey guys i just bought ', poster_id: 4},
        { wall_id: 4, message: 'finally, a place where i can talk to people my age and get away from my  annoying family!', poster_id: 4},
        { wall_id: 1, message: 'the creator of thos app is very handsome ;)', poster_id: 4},
        { wall_id: 3, message: 'is it just me or the name of this app sounds like 2005', poster_id: 3},
        { wall_id: 2, message: 'i dont know if you guys noticed, but theres a birthday option that lets you choose veryold when you sign up', poster_id: 2},
        { wall_id: 4, message: 'is it winter yet or what???', poster_id: 1},
        { wall_id: 4, message: 'why are there only old people on this app! Also, im secretly in love with user 3!', poster_id: 1},
        { wall_id: 5, message: 'asking for a friend, but whats worse to eat whole? ripe lemon or rotten apple?', poster_id: 4},
        { wall_id: 3, message: 'hello OurSpace, well its kind of only MY own SPACE...', poster_id: 4},
        { wall_id: 5, message: 'wish me luck on passing my NCLX exam', poster_id: 4},
        { wall_id: 2, message: 'okay really bored with this pandemic, can i go on a vacation already', poster_id: 4},
        { wall_id: 2, message: 'ehy does my name sound so familiar?', poster_id: 2},
        { wall_id: 1, message: 'should i try to make a sandwich? kinda dreading the cleanup :/', poster_id: 3},
        { wall_id: 1, message: 'what a lovely day to be on the interweb!', poster_id: 3},
        { wall_id: 6, message: 'Wow did you guys checkout the cool app i made on THREE.js!? Modeled after Simon Dev', poster_id: 6},
        { wall_id: 6, message: 'whats the big deal with crypto anyway...', poster_id: 6},
        { wall_id: 6, message: 'what a lovely day to be on the interweb!', poster_id: 6},
        { wall_id: 6, message: 'hey, psst... there are links to the owners github page everyhere! You can see their source code there as well!', poster_id: 6}
    ])

    # likes = Like.create!([
    #     {id: 1, likable_id: 3, likable_type: 'Post'},
    #     {id: 2, likable_id: 4, likable_type: 'Post'},
    #     {id: 3, likable_id: 1, likable_type: 'Post'},
    #     {id: 4, likable_id: 2, likable_type: 'Post'},
    #     {id: 5, likable_id: 1, likable_type: 'Post'},
    #     {id: 6, likable_id: 4, likable_type: 'Post'},
    #     {id: 7, likable_id: 5, likable_type: 'Post'},
    #     {id: 8, likable_id: 3, likable_type: 'Post'},
    #     {id: 9, likable_id: 5, likable_type: 'Post'},
    #     {id: 10, likable_id: 1, likable_type: 'Comment'},
    #     {id: 11, likable_id: 1, likable_type: 'Comment'},
    #     {id: 12, likable_id: 1, likable_type: 'Comment'},
    #     {id: 13, likable_id: 1, likable_type: 'Comment'},
    #     {id: 14, likable_id: 2, likable_type: 'Comment'},
    #     {id: 15, likable_id: 3, likable_type: 'Comment'},
    #     {id: 16, likable_id: 2, likable_type: 'Comment'},
    #     {id: 17, likable_id: 3, likable_type: 'Comment'},
    #     {id: 18, likable_id: 4, likable_type: 'Comment'},
    #     {id: 19, likable_id: 5, likable_type: 'Comment'}
    # ])

    # comments = Comment.create!([
    #     {id: 1, body: "lemons for sure man", author_id: 3, post_id: 3},
    #     {id: 2, body: "you heard of a fridge", author_id: 2, post_id: 3},
    #     {id: 3, body: "why are you asing this again", author_id: 1, post_id: 3},
    #     {id: 4, body: "Whats up jassi! its me, Loveleen from highschool!", author_id: 4, post_id: 1},
    #     {id: 5, body: "hey jas, watch my movie!", author_id: 2, post_id: 1},
    #     {id: 6, body: "hey jassi! nice post!", author_id: 1, post_id: 1}
    # ])

    # friends = Friend.create!([
    #     {id: 1, sender_id: 1, receiver_id: 2, pending: true},
    #     {id: 2, sender_id: 1, receiver_id: 3, pending: false},
    #     {id: 3, sender_id: 1, receiver_id: 4, pending: false},
    #     {id: 4, sender_id: 1, receiver_id: 5, pending: false},
    #     {id: 6, sender_id: 2, receiver_id: 3, pending: false},
    #     {id: 7, sender_id: 2, receiver_id: 4, pending: false},
    #     {id: 8, sender_id: 2, receiver_id: 5, pending: false},
    #     {id: 9, sender_id: 3, receiver_id: 5, pending: false},
    #     {id: 10, sender_id: 3, receiver_id: 2, pending: false},
    #     {id: 11, sender_id: 3, receiver_id: 1, pending: false},
    #     {id: 12, sender_id: 4, receiver_id: 3, pending: true},
    #     {id: 12, sender_id: 4, receiver_id: 5, pending: false}
    # ])

    # still pending between users 1 => 2('Angeliq', 'Phunsuk') and 4 => 3 ('Jaspreet', 'Loveleen')