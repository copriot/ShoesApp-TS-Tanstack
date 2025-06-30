import type { FC } from "react";
import useShoes from "../../hooks/useShoes";
import Loader from "../../components/loader";
import Error from "../../components/error";
import { Link } from "react-router-dom";

const Dashboard: FC = () => {
  const { shoes, remove } = useShoes();
  const { data, isLoading, error } = shoes;
  if (isLoading) return <Loader />;
  if (error) return <Error error={error.message} />;
  return (
    <div>
      <div className="flex justify-between mb-5 items-center">
        <h1 className="text-2xl font-semibold md:text-3xl">Products</h1>
        <Link
          to="/admin/create"
          className="bg-my-blue cursor-pointer transition hover:brightness-80 rounded-lg text-white px-4 py-1 md:px-6 md:py-2"
        >
          Add a product
        </Link>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-my-faWhite">
            <tr className="text-center">
              <th className="px-16 py-3"></th>
              <th className="px-16 py-3">Name</th>
              <th className="px-16 py-3">Price</th>
              <th className="px-16 py-3 text-nowrap">Discount (%)</th>
              <th className="px-16 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((shoe) => (
              <tr
                key={shoe._id}
                className="bg-my-faWhite border-b border-my-gray hover:bg-my-gray text-center"
              >
                <td className="py-4 px-6">
                  <img
                    src={shoe.picture[0]}
                    alt={shoe.name}
                    className="w-16 md:w-28 max-w-full h-16 max-h-full rounded-xl object-cover"
                  />
                </td>
                <td className="px-16 py-4  text-my-grayDark font-semibold">
                  {shoe.name}
                </td>
                <td className="px-16 py-4 text-my-grayDark font-semibold">
                  {shoe.price}$
                </td>
                <td className="px-16 py-4 font-semibold text-my-grayDark">
                  {shoe.discount > 0 ? `${shoe.discount}%` : "No discount"}
                </td>
                <td className="px-16 py-4">
                  <Link
                    to={`/admin/edit/${shoe._id}`}
                    className="text-my-blue hover:text-my-blue/90 hover:underline transition pe-3"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => remove.mutate(shoe._id)}
                    className="text-red-600 hover:underline cursor-pointer"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
