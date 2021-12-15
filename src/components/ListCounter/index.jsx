export default function ListCounter({ label, value }) {
  function onClick(label, value) {
    alert(`${label}: ${value}`);
  }

  return (
    <div onClick={() => onClick(label, value)} className="block__item">
      {label}: {value}
    </div>
  );
}
