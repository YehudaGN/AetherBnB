User.destroy_all

user = User.create!(
    fname: "Demo",
    lname: "User",
    email: "demouser@gmail.com",
    password: "demouser",
    bio: ""
)