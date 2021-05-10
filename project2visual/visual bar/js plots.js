// sort the data by spotify search results
//var sortedBySpotifySearch = data.sort((a,b,) =>  b.spotifySearchResults -a.spotifySearchResults);
//slicedData = sortedBySpotifySearch.slice(0,12);


//apply bar mode to layout
var trace1 = {
  x:["country","HipHop","Rock","Rap","Latin"],
  y:[0,0,0,0,0],
  type:"bar"
};
var data = [trace1];

var layout = {
   title:"'Bar' Chart"    
};
// rendeer plot div tag id plot
Plotly.newPlot("plot",data,layout);

// Use D3 to create an event handler
//d3.selectAll("body").on("change", updatePage);

//function updatePage() {
  // Use D3 to select the dropdown menu
  //var dropdownMenu = d3.selectAll("#selectOption").node();
  // Assign the dropdown menu item ID to a variable
  //var dropdownMenuID = dropdownMenu.id;
  // Assign the dropdown menu option to a variable
  //var selectedOption = dropdownMenu.value;

  //console.log(dropdownMenuID);
  //console.log(selectedOption);
}