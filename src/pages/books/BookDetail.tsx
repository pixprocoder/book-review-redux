import { useParams } from "react-router-dom";

const BookDetail = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>Book Detail page for {id}</h1>
    </div>
  );
};

export default BookDetail;
