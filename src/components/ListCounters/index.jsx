export default function ListIdentifiers({ list, onClick }) {
  const identifiers = [
    { label: "All", value: null },
    { label: "Todo", value: null },
    { label: "Done", value: null },
  ];

  function onClick(label, value) {
    alert(`${label}: ${value}`);
  }

  return (
    <div className="block">
      {identifiers.map((item) => (
        <div
          onClick={() => onClick(item.label, item.value)}
          className="block__item"
        >
          {item.label}: {item.value}
        </div>
      ))}
    </div>
  );
}
