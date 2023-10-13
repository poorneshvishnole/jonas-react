const Stats = ({ items }) => {
  if (!items.length)
    return (
      <p className="stats">
        <em> Start adding some items to your packing list 🚀</em>
      </p>
    );
  const numItems = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  const percent =
    numItems > 0 ? ((packedItems / numItems) * 100).toFixed() : "0";

  return (
    <footer className="stats">
      <em>
        {percent === 100
          ? "You got everything! Ready to go ✈️"
          : `You have ${numItems} on your list ,and you already packed ${packedItems}(${percent} %)`}
      </em>
    </footer>
  );
};
export default Stats;
