const getUser = (id, cb) => {
    const user = {
        name: 'Dorian',
        id: id
    }

    if (id == 2) cb('User not exist')
    else cb(null, user)
}

getUser(1,(err,user) => {
    if(err) return console.log(err)
    console.log ('User name is ' + user.name)
})

getUser(2,(err,user) => {
    if(err) return console.log(err)
    console.log ('User name is ' + user.name)
})