import useShop from "../hooks/useShop";

const Cart = () => {
  const { cart, updateQuantity, total, deleteInstrument } = useShop();
  //console.log(cart);

  return (
    <div className="flex flex-col">
      <div className="bg-gray-100 border w-10/12 rounded-md shadow-md place-self-center p-8 my-12">
        <h1 className="text-center font-black text-xl">Order summary</h1>
        <p className="text-center">
          Total Due: <span className="text-yellow-500">${total}</span>
        </p>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 w-10/12 mx-auto text-white z-10 bg-white">
        {cart?.length === 0 ? (
          <h1 className="text-3xl mt-12 uppercase font-semibold text-black text-center">
            No Articles
          </h1>
        ) : (
          cart?.map((item) => (
            <div
              key={item.id}
              className="flex justify-center p-8 gap-4 items-center z-10 my-10 border rounded-md shadow-md"
            >
              <img
                src={item.image}
                alt={`Guitar Image ${item.name}`}
                className="w-5/12"
              />

              <div>
                <h3 className="text-black text-xl font-black">{item.name}</h3>
                <p className="text-yellow-500 text-xl">{`$${item.price}`}</p>
                <p className="text-black text-sm">Quantity:</p>

                <select
                  onChange={(e) =>
                    updateQuantity({
                      quantity: +e.target.value,
                      id: item.id,
                    })
                  }
                  className="bg-gradient-to-b from-gray-500 to-gray-600 p-2 rounded-md text-white w-full text-center mb-2 text-sm"
                  id="quantity"
                  value={item.quantity}
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>

                <p className="text-yellow-500 text-sm">
                  Subtotal: <span>${item.quantity * item.price}</span>
                </p>
                <button
                  className="p-2 bg-red-600 hover:bg-red-800 mt-2 w-full rounded uppercase text-sm font-bold"
                  type="button"
                  onClick={() => deleteInstrument(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Cart;
