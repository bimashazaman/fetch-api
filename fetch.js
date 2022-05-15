
function getText()
{
    let file = 'sample.txt';

    fetch(file) // fetch() returns a Promise
    .then(res => res.text()) // res.text() returns a Promise
    .then(data => 
        document.getElementById('output').innerHTML = data
        ) // data is the text
    .catch(err => console.log(err)) // error handling
}

function getUsers()
{
    let users = 'https://reqres.in/api/users';

    fetch(users) // fetch() returns a Promise
    .then(res => res.json()) // res.json() returns a Promise
    .then(data =>
        {
           
            for(let user of data.data)
            {
                output += `
                <ul>
                    <li>${user.first_name} ${user.last_name}</li>
                    <li>${user.email}</li>
                </ul>
                `;
            }
            document.getElementById('users').innerHTML = output;
        }

        ) // data is the text
    .catch(err => console.log(err)) // error handling


}

    

// function getUsers()
// {
//     let users = 'https://reqres.in/api/users';

//     fetch(users) // fetch() returns a Promise
//     .then(res => res.json()) // res.json() returns a Promise
//     .then(data => 
//         {
//             let output = '<h2>Users</h2>'

//             console.log(data);

//             data.forEach(function(users)
//             {
//                 let output = "<h2>Users</h2>";
                
//                 `
//                 <ul>
//                     <li>ID: ${users.id}</li>
//                     <li>Email: ${users.email}</li>
//                 </ul>
//                 `;
//             })
//             document.getElementById('users').innerText = output;
//         })

// }



        






    // fetch(file) // fetch() returns a Promise
    // .then(res => res.json()) // res.json() returns a Promise
    // .then(data => 
    //     document.getElementById('output').innerHTML = data
    //     ) // data is the JSON
    // .catch(err => console.log(err)) // error handling






// function getText()
// {
//     fetch('sample.txt')
//     .then(function(res)
//     {
//         return res.text();
//     })
//     .then(function(data)
//     {
//         console.log(data);
//     })
// }














































// fetch('https://reqres.in/api/users')
// .then(res => res.json())
// .then(data => console.log(data))
// .catch(err => console.log(err))
