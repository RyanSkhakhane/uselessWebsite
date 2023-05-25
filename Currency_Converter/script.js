(async function() {
    const response = await fetch('currencies.txt');
    const data = await response.text();
    const lines = data.split('\n');
  
    const dropdown = document.getElementById('Currency-list');
  
    lines.forEach(function(line) {
      const option = document.createElement('option');
      option.text = line;
      dropdown.add(option);
    });
  
})();



(async function() {
const response = await fetch('currencies.txt');
const data = await response.text();
const lines = data.split('\n');

const dropdown = document.getElementById('Currency-list1');

lines.forEach(function(line) {
    const option = document.createElement('option');
    option.text = line;
    dropdown.add(option);
});
})();
