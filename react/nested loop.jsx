
// 23.01.2025


const categories = [
  {
    id: 1,
    name: "Fruits",
    items: ["Apple", "Banana"]
  },
  {
    id: 2,
    name: "Vegetables",
    items: ["Carrot", "Potato"]
  }
];

function App() {
  return (
    <div>
      {categories.map(category => (
        <div key={category.id}>
          <h3>{category.name}</h3>
          <ul>
            {category.items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}