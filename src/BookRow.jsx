import PropTypes from "prop-types";

const BookRow = ({ book, setBooksId }) => {
  return (
    <tr
      onClick={() => {
        setBooksId(book.id);
      }}
    >
      <td>{book.title}</td>
      <td>{book.author}</td>
      <td>{book.description}</td>
    </tr>
  );
};

BookRow.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  setBooksId: PropTypes.func.isRequired,
};

export default BookRow;
