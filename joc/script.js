var ctx = document.getElementById("chart").getContext("2d");
var ctx2 = document.getElementById("chart2").getContext("2d");



var colors2 = ['#fff5eb', '#fee6ce', '#fdd0a2', '#fdae6b', '#fd8d3c', '#f16913', '#d94801', '#a63603', '#7f2704'];
var assigned = {};
function c2(name) {
  return assigned[name] || (assigned[name] = colors2[Object.keys(assigned).length % colors2.length]);
}
var chart2 = new Chart(ctx2, {
  type: "sankey",
  data: {
    datasets: [
      {
        data: [
                                      { from: "Vancouver", to: "Toronto", flow: 5 },
          { from: "Vancouver", to: "Shanghai", flow: 1 },
          { from: "Vancouver", to: "Japan", flow: 1 },
          { from: "Vancouver", to: "Shanghai", flow: 1 },
          { from: "Canada", to: "Toronto", flow: 1 },
          { from: "Canada", to: "Shanghai", flow: 5 },
          { from: "Canada", to: "Shanghai", flow: 1 },
          { from: "Houston", to: "Toronto", flow: 1 },
          { from: "Houston", to: "Shanghai", flow: 1 },
          { from: "Houston", to: "Japan", flow: 5 },
          { from: "Houston", to: "Shanghai", flow: 1 },
          { from: "USA", to: "Toronto", flow: 1 },
          { from: "USA", to: "Shanghai", flow: 1 },
          { from: "USA", to: "Japan", flow: 1 },
          { from: "USA", to: "Shanghai", flow: 5 },
          { from: "Toronto", to: "Memphis", flow: 2 },
          { from: "Toronto", to: "New York", flow: 1 },
          { from: "Toronto", to: "Chicago", flow: 1 },
          { from: "Toronto", to: "Los Angeles", flow: 3 },
          { from: "Shanghai", to: "Memphis", flow: 1 },
          { from: "Shanghai", to: "New York", flow: 3 },
          { from: "Shanghai", to: "Hong Kong", flow: 3 },
          { from: "Shanghai", to: "Chicago", flow: 3 },
          { from: "Shanghai", to: "Los Angeles", flow: 1 },
          { from: "Japan", to: "New York", flow: 1 },
          { from: "Japan", to: "Chicago", flow: 3 },
          { from: "Japan", to: "Los Angeles", flow: 1 },
          { from: "Shanghai", to: "Memphis", flow: 1 },
          { from: "Shanghai", to: "New York", flow: 1 },
          { from: "Shanghai", to: "Chicago", flow: 2 },
          { from: "Shanghai", to: "Los Angeles", flow: 7 },
          { from: "Los Angeles", to: "China", flow: 5 },
          { from: "Los Angeles", to: "Yantian", flow: 1 },
          { from: "Los Angeles", to: "Tianjin", flow: 3 },
          { from: "Memphis", to: "China", flow: 5 },
          { from: "Memphis", to: "Yantian", flow: 1 },
          { from: "Memphis", to: "Tianjin", flow: 3 },
          { from: "New York", to: "China", flow: 5 },
          { from: "New York", to: "Yantian", flow: 1 },
          { from: "New York", to: "Tianjin", flow: 3 },
          { from: "Hong Kong", to: "China", flow: 5 },
          { from: "Hong Kong", to: "Yantian", flow: 1 },
          { from: "Hong Kong", to: "Tianjin", flow: 3 },
          { from: "Chicago", to: "China", flow: 5 },
          { from: "Chicago", to: "Yantian", flow: 1 },
          { from: "Chicago", to: "Tianjin", flow: 3 }
        ],
        colorFrom: (c) => c2(c.dataset.data[c.dataIndex].from),
        colorTo: (c) => c2(c.dataset.data[c.dataIndex].to)
      }
    ]
  }
});
