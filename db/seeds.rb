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
Comment.destroy_all
Comment.connection.execute('ALTER SEQUENCE posts_id_seq RESTART WITH 1') 

    users = User.create!([
        {first_name: 'Angelique', last_name: 'Sugrim', email: 'asugrim991@gmail.com', password: 'Angelique', birthday: '06041999', gender: 'female'},
        {first_name: 'Jaspreet', last_name: 'Singh', email: 'jsingh121@gmail.com', password: 'Jaspreet', birthday: '09011998', gender: 'male'},
        {first_name: 'Loveleen', last_name: 'Kaur', email: 'lkaur961@gmail.com', password: 'Loveleen', birthday: '10111996', gender: 'female'}
    ])

    demo = User.create({first_name: 'Guest', last_name: 'User', email: 'guest@ourspace.com', password: 'demouser', birthday: '13082021', gender: 'other', education: 'College University', location: 'New York City', occupation: 'Social Worker'})
    demo_file = open('https://ourspace-seeds.s3.us-east-2.amazonaws.com/woman_profile.jpg')
    demo.profile_picture.attach(io: demo_file, filename: 'woman_profile.jpg')
    demo_cover = open('https://ourspace-seeds.s3.us-east-2.amazonaws.com/cover1.jpg')
    demo.cover_picture.attach(io: demo_cover, filename: 'cover1.jpg')

    mintu = User.create({first_name: 'Mintu', last_name: 'Singh', email: 'msingh12@gmail.com', password: 'Mintuuu', birthday: '22051989', gender: 'male', education: 'City College of New York', location: 'New York City', occupation: 'Electrician'})
    mintu_file = open('https://ourspace-seeds.s3.us-east-2.amazonaws.com/user1.jfif')
    mintu.profile_picture.attach(io: mintu_file, filename: 'user1.jfif')
    mintu_cover = open('https://ourspace-seeds.s3.us-east-2.amazonaws.com/cover_car.jpg')
    mintu.cover_picture.attach(io: mintu_cover, filename: 'cover_car.jpg')

    p_user = User.create({first_name: 'Phunsuk', last_name: 'Wangroo', email: 'pwangroo121@gmail.com', password: 'Phunsuk', birthday: '01071990', gender: 'male', education: 'Howard University', location: 'New York City', occupation: 'Plumber'})
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
        # { wall_id: 2, message: 'Anyone wanna have a blockbuster party at my place!?', poster_id: 2},
        # { wall_id: 1, message: 'Whats the square root of a prime number?', poster_id: 3},
        # { wall_id: 3, message: 'Better to remain silent and be thought a fool than to speak out and remove all doubt.', poster_id: 2},
        # { wall_id: 5, message: 'People say nothing is impossible, but I do nothing every day.', poster_id: 4},
        # { wall_id: 5, message: 'Hey guys i just bought ', poster_id: 4},
        { wall_id: 4, message: 'Finally, a place where i can talk to people my age and get away from my  annoying family!', poster_id: 4},
        { wall_id: 1, message: 'The creator of thos app is very handsome ;)', poster_id: 1},
        # { wall_id: 3, message: 'Is it just me or the name of this app sounds like 2005', poster_id: 3},
        { wall_id: 2, message: 'I dont know if you guys noticed, but theres a birthday option that lets you choose veryold when you sign up', poster_id: 2},
        # { wall_id: 4, message: 'Is it winter yet or what???', poster_id: 1},
        { wall_id: 4, message: 'Why are there only old people on this app!? Also, im secretly in love with user 3!', poster_id: 1},
        { wall_id: 5, message: 'Asking for a friend, but whats worse to eat whole? ripe lemon or rotten apple?', poster_id: 4},
        # { wall_id: 3, message: 'Hello OurSpace, well its kind of only MY own SPACE...', poster_id: 4},
        { wall_id: 5, message: 'Wish me luck on passing my NCLX exam', poster_id: 4},
        { wall_id: 2, message: 'Okay really bored with this pandemic, can i go on a vacation already', poster_id: 4},
        { wall_id: 2, message: 'Why does my name sound so familiar?', poster_id: 2},
        { wall_id: 1, message: 'Should i try to make a sandwich? kinda dreading the cleanup :/', poster_id: 3},
        { wall_id: 1, message: 'What a lovely day to be on the interweb!', poster_id: 3},
        { wall_id: 6, message: 'Wow did you guys checkout the cool app i made on THREE.js!? Modeled after Simon Dev', poster_id: 6},
        { wall_id: 6, message: 'Whats the big deal with crypto anyway...', poster_id: 6},
        { wall_id: 6, message: 'What a lovely day to be on the interweb!', poster_id: 6},
        { wall_id: 6, message: 'Hey, psst... there are links to the owners github page everyhere! You can see their source code there as well!', poster_id: 6}
    ])

    # likes = Like.create!([
    #     {likable_id: 1, likable_type: 'Post', user_id: 1},
    #     {likable_id: 2, likable_type: 'Post', user_id: 1},
    #     {likable_id: 4, likable_type: 'Post', user_id: 1},
    #     {likable_id: 1, likable_type: 'Post', user_id: 2},
    #     {likable_id: 3, likable_type: 'Post', user_id: 2},
    #     {likable_id: 4, likable_type: 'Post', user_id: 2},
    #     {likable_id: 5, likable_type: 'Post', user_id: 2},
    #     {likable_id: 2, likable_type: 'Post', user_id: 3},
    #     {likable_id: 5, likable_type: 'Post', user_id: 3},
    #     {likable_id: 2, likable_type: 'Post', user_id: 3},
    #     {likable_id: 6, likable_type: 'Post', user_id: 3},
    #     {likable_id: 1, likable_type: 'Comment', user_id: 1},
    #     {likable_id: 4, likable_type: 'Comment', user_id: 1},
    #     {likable_id: 3, likable_type: 'Comment', user_id: 1},
    #     {likable_id: 2, likable_type: 'Comment', user_id: 2},
    #     {likable_id: 1, likable_type: 'Comment', user_id: 2},
    #     {likable_id: 3, likable_type: 'Comment', user_id: 3},
    #     {likable_id: 2, likable_type: 'Comment', user_id: 3},
    #     {likable_id: 3, likable_type: 'Comment', user_id: 5},
    #     {likable_id: 4, likable_type: 'Comment', user_id: 5},
    #     {likable_id: 5, likable_type: 'Comment', user_id: 5}
    # ])

    comments = Comment.create!([
        {body: "Lemons for sure man", author_id: 3, post_id: 8},
        {body: "Nice shot! why wasnt i invited!?", author_id: 2, post_id: 1},
        {body: "I think ive been there before...", author_id: 3, post_id: 1},
        {body: "Why are you asking this again", author_id: 1, post_id: 8},
        {body: "Whats up jassi! its me, Loveleen from highschool!", author_id: 3, post_id: 6},
        {body: "Hey jas, watch my movie!", author_id: 2, post_id: 11},
        {body: "Hey jassi! nice post!", author_id: 1, post_id: 11},
        {body: "Okay okay lets keep it PG-13 here", author_id: 5, post_id: 5}
    ])

    # friends = Friend.create!([
    #     {sender_id: 1, receiver_id: 2, pending: true},
    #     {sender_id: 1, receiver_id: 3, pending: false},
    #     {sender_id: 1, receiver_id: 4, pending: false},
    #     {sender_id: 1, receiver_id: 5, pending: false},
    #     {sender_id: 2, receiver_id: 3, pending: false},
    #     {sender_id: 2, receiver_id: 4, pending: false},
    #     {sender_id: 2, receiver_id: 5, pending: false},
    #     {sender_id: 3, receiver_id: 5, pending: false},
    #     {sender_id: 3, receiver_id: 1, pending: false},
    #     {sender_id: 4, receiver_id: 3, pending: true},
    #     {sender_id: 3, receiver_id: 2, pending: false},
    #     {sender_id: 4, receiver_id: 5, pending: false}
    # ])

    # still pending between users 1 => 2('Angeliq', 'Phunsuk') and 4 => 3 ('Jaspreet', 'Loveleen')