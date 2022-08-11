
let popBtn = document.getElementById("printdetail");

// adding event listener
printdetail.addEventListener('click', popbtnClickHandler);

// adding function for event
function popbtnClickHandler(){
    console.log("printdetail button clicked!!");

    // Instantiate an XHR object
    const xhr = new XMLHttpRequest();

    // opening object
    // for get request
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/users?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-09', true);

    xhr.onload = function(){
        if(this.status===200){
            let obj = JSON.parse(this.responseText);
            console.log(obj);
            let list = document.getElementById('list');
            str = "";
            for (key in obj)
            {
                str += `<li>
                Name: ${obj[key].name} 
                Username: ${obj[key].username}
                email: ${obj[key].email}
    
                
                </li>`;
            }
            list.innerHTML = str;

        }
        else{
            console.log("Some error occured!!");
        }
    }

    // sending request
    xhr.send();
    console.log("We are done fetching person details!");
}

// function to add custom blog heading
function btnheading() {
    var txt = document.getElementById("custom-blog-heading").value;
    document.getElementById("place-blog-heading").innerHTML = txt;
}

// function to add custom blog content
function btncontent() {
    var txt = document.getElementById("custom-blog-content").value;
    document.getElementById("place-blog-content").innerHTML = txt;
}

