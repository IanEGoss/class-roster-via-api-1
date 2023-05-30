/*
// My Scripts


// Data source for roster
// Note: We're using NoCode API to make connecting to AirTable easier
const url = "https://v1.nocodeapi.com/pmanikoth/airtable/rsqhQzAAKcMyyPPW?tableName=Roster";

// Get data
fetch(url)
  .then( response  => response.json())
  .then( data  => {
    // check-check: get one image
    // Note: Webflow returns data in array called `items`
    console.log(data.records);
    console.log(data.records[0].fields);
    console.log(data.records[0].fields.Name);
    console.log(data.records[0].fields.Emoji);
    console.log(data.records[0].fields.Color);
    console.log(data.records[0].fields.Image[0].url);

    // get container for data
    const gallery = document.querySelector(".gallery");

    // loop through data
    data.records.forEach( student => {
      
      // template
      const template = `
          <figure>
            <figcaption>${student.fields.Name}</figcaption>
            <p>${student.fields.Emoji}</p>
            <img src="${student.fields.Image[0].url}" alt="${student.fields.Name}">
          </figure>
       `;

      // insert EACH `student` record into container
      gallery.insertAdjacentHTML("afterbegin", template);
    });
  });
*/
// Data source
const dataSource = "https://assets.codepen.io/16425/spring23web3.json";

// fetch
fetch( dataSource )
.then( response => response.json())
.then( data  => {

    // get container for data
    const roster = document.querySelector(".roster");
 
    // for each RECORD, insert into parent
    data.forEach( (student) => { 
      
      // template to reuse
      const template = `
        <figure>
         <figcaption> ${student.Name} </figcaption>
         <figcaption> ${student.Emoji} </figcaption>
         <figcaption> ${student.Superpower} </figcaption>
         <figcaption> ${student.Quote} </figcaption>
            <img src="${student.Image}" alt="Student Name">
         </figure>
      `
    
      roster.insertAdjacentHTML('afterbegin', template );
      
    });
  
});

    // console.log(data);
    // console.log(data[9].Superpower);
    // console.log(data[2].Emoji);
    // console.log(data[1].Quote);