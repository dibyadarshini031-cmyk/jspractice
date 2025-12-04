const URL ="https://cat-fact.herokuapp.com/facts";

 const getFacts = async () => {
     console.log("getting data.....");
     let response = await fetch(URL);
     console.log(response); //JSON format
     //let data = await response.json();
     //console.log(data);
     let data = await response.json();
     factPara.innerText = data[0].text;
}

// promise chaining
function getFacts() {
    fetch(URL).then((response) => {
        return response.json();

    }).then((data) => {
        console.log(data);
        factPara.innerText = data[0].text;

    });
}