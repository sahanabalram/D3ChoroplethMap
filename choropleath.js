$(document).ready(function(){
    var body = d3.select("body");
    // define body
    var svg = d3.select("svg"),
        width = +svg.attr("width"),
        height = +svg.attr("height");

        // define tooltip
        var tooltip = body.append("div")
            .attr("class", "tooltip")
            .attr("id", "tooltip")
            .style("opacity",0);

        var unemployment = d3.map();
        var path = d3.geopath();

        var x = d3.scaleLiner()
            .domain([2.6, 75.1])
            .rangeRound([600,860]);
        
        var color = d3.scaleThreshold()
            .domain(d3.range(2.6,75.1,(75.1-2.6)/8))
            .range(d3.schemeGreens[9]);

});