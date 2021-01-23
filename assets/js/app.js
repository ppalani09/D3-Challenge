// @TODO: YOUR CODE HERE!


// set the dimensions and margins of the graph
var margin = {top: 10, right: 30, bottom: 30, left: 60},
    width = 460 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3.select("scatter")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform",
  "translate(" + margin.left + "," + margin.top + ")");

//Read the data
d3.csv("https://github.com/ppalani09/D3-Challenge/blob/master/assets/data/data.csv", function(data) {

    data.forEach(function(d) {
    	d.income = +d.income;
    	d.healthcare = +d.healthcare;
    	d.abbr = +d.abbr
    	d.state = +d.state;
  	});


   console.log(d.income)
   console.log(d.healthcare)
   console.log(d.state)

  // Add X axis
  var x = d3.scaleLinear()
    .domain([0, 25])
    .range([ 0, width ]);
  svg.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x));

  // Add Y axis
  var y = d3.scaleLinear()
    .domain([0, 25])
    .range([ height, 0]);
  svg.append("g")
    .call(d3.axisLeft(y));

  // Add dots
  svg.append('g')
    .selectAll("dot")
    .data(data)
    .enter()
    .append("circle")
      .attr("cx", function (d) { return x(d.income); } )
      .attr("cy", function (d) { return y(d.healthcare); } )
      .attr("r", 10)
      .style("fill", "blue")
      .attr("opacity", "0.25")


  // create circle labels
  var circleLabelsGroup = chartGroup.selectAll(null)
    .data(data)
    .enter()
    .append("text");

	circleLabelsGroup
	 
    	.text(function(d) {
      		return d.abbr;
    	})

	    .attr("font-family", "arial")
	    .attr("font-size", "15px")
	    .attr("text-anchor", "middle")
	    .attr("fill", "white");    

})