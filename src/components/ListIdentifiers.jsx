export default function ListIdentifiers({ label, value, onClick }) {
  return (
    <div onClick={() => onClick(label, value)} className="block__item">
      {label}: {value}
    </div>
  );
}
