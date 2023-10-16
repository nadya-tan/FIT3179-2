var vg_1 = "map.json";
vegaEmbed("#chloropleth", vg_1, { config: { background: "#dadada" } })
  .then(function (result) {})
  .catch(console.error);
var vg_2 = "index_bar_100.json";
vegaEmbed("#index_bar", vg_2, {
  config: {
    background: "#dadada",
    axis: { gridColor: "#fafafa" },
  },
})
  .then(function (result) {})
  .catch(console.error);
var vg_3 = "year_line.json";
vegaEmbed("#year_line", vg_3, {
  config: {
    background: "#dadada",
    axis: { gridColor: "#fafafa" },
  },
})
  .then(function (result) {})
  .catch(console.error);