import type { FC } from "react";
import useShoes from "../../hooks/useShoes";
import Loader from "../../components/loader";
import Error from "../../components/error";
import Card from "../../components/card";

const List: FC = () => {
  const { shoes } = useShoes();
  const { isLoading, error, data } = shoes;
  // console.log(isLoading, error, data);

  if (isLoading) return <Loader />;
  if (error) return <Error error={error.message} />;

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-6">
      {data?.map((shoe) => (
        <Card key={shoe._id} shoe={shoe} />
      ))}
    </div>
  );
};

export default List;
