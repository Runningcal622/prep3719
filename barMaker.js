d3.select("body")
  .style("background-color","#1c4e80;");
var jSon = function(){



  var jsonData = d3.json("countrtData.json");

  jsonData.then(
    function(data){
      console.log("data",data);
      makeChart(data);
    }
  ,
  function(err){
    console.log("err");

  });
}

var makeChart = function(countryData)
{
  var dataNames = ["labor","sexual","adult","minor","male","female"];
  var titles = ["Labor Trafficking", "Sexual Trafficking", "Adult percentage", "Minor percentage","Male percentage","Female Percentage"];
  var width = 1200;
  var height = 200;
  var barWidth = width/(countryData).length;
  dataNames.forEach(function(dataName,index){
    svg  = d3.select("body").append("svg")
    .attr("width",width)
    .attr("height",height);

    svg.append("text")
       .text(titles[index])
       .attr("x",(width-100)/2)
       .attr("y",20)
       .attr("fill","white");
    svg.style("margin-right","auto")
        .style("margin-left","100px");

    svg.selectAll("rect")
       .data(countryData)
       .enter()
       .append("rect")
       .attr("x",function(d,i)
     {
       return i*barWidth;
     })
     .attr("y",function(d)
     {
       return height - parseInt(d[dataName]);
     })
     .attr("width",barWidth-3)
     .attr("height",function(d)
    {
      return parseInt(d[dataName]);
    })
    .attr("fill",function(d){
      return "rgb(0,0,"+10000/parseInt(d[dataName])+")";
    });

    svg.selectAll("text1")
        .data(countryData)
        .enter()
        .append("text")
        .text(function(d){
          return d.origin;})
      .attr("x",function(d,i)
        {
          return ((i)*barWidth)+.3*barWidth-d.origin.length;
        })
      .attr("y",function(d){
        return height-d[dataName]+parseInt(d[dataName]);
      })
      .attr("font-size","11px")
      .style("width",barWidth)
      .style("fill","white");

      svg.selectAll("text2")
          .data(countryData)
          .enter()
          .append("text")
          .text(function(d){
            return d[dataName]+"%";})
        .attr("x",function(d,i)
          {
            return ((i)*barWidth)+.3*barWidth;
          })
        .attr("y",function(d){
          return height-d[dataName]-10;
        })
        .attr("font-size","11px")
        .style("width",barWidth)
        .style("fill","white");
    svg.style("margin-top","20px")
      .style("float","left");



}
)
  var button = d3.select(".startButton");


  //button.attr("visible", "hidden");
  button.attr("disabled","disabled");
  button.style("display","none");

}
