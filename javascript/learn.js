const name = 'Sanketh';
let age = 29;
const hasHobby = true;

// Arrow function to summarize user information
const summarizeUser = (userName, userAge, userHobby) => {
    return (
        'Name is ' + userName + ', age is ' + userAge + ' and the user has hobby: ' + userHobby
    );
};

console.log(summarizeUser(name, age, hasHobby)
)