export const fetchData = async(validJson) => {
    try {
        const res = await fetch ("http://localhost:5500/login/client" , {
        method : "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(validJson)
    })
        if(!res.ok){
            throw new Error ('Network issue')
        }
        const data = await res.json();
        localStorage.setItem('auth' , data.token)
        //route to main page
        /**
        * *
        * *
        * *
        * *
        * *
        * *
        * */
    } catch (error) {
        console.log(error)
    } 
}