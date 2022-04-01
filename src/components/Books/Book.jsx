const Book = ({ book }) => {
  const { _id, name } = book;
  return (
    <tr>
      <td>{name}</td>
      <td>{_id}</td>
    </tr>
  );
};

export default Book;
