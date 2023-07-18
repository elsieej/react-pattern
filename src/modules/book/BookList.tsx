import { RegularList } from "../../components/list";

const books = [
  {
    id: "book_1",
    name: "star war 1",
  },
  {
    id: "book_2",
    name: "star war 2",
  },
];

export const BookList = () => {
  return (
    <RegularList
      items={books}
      keyName={"id"}
      sourceName={"book"}
      Component={BookItem}
    />
  );
};

const BookItem = ({ book }: { book: { id: string; name: string } }) => {
  return (
    <>
      <div>{book.id}</div>
      <div>{book.name}</div>
    </>
  );
};
