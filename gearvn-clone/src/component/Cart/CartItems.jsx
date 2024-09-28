export default function CartItems({
  item,
  handleSelectItem,
  updateUserCartItems,
  setCart,
  cart,
  accountId,
}) {
  const handleCheckboxChange = (e) => {
    handleSelectItem(item, e.target.checked);
  };

  const handleQuantityChange = (amount) => {
    const newQuantity = item.product_quantity + amount;

    const newCart = cart.map((product) =>
      product.product_id === item.product_id
        ? { ...product, product_quantity: newQuantity }
        : product
    );

    setCart(newCart);

    updateUserCartItems(newCart, accountId);
  };

  const handleDeleteProduct = (productId) => {
    const newCart = cart.filter((product) => product.product_id !== productId);
    setCart(newCart);
    updateUserCartItems(newCart, accountId);
  };

  return (
    <div
      key={item.product_id}
      className="flex items-center bg-white shadow-md rounded-lg p-4"
    >
      <input
        className="mr-4 w-6 h-6 cursor-pointer border-2 rounded transition-all duration-300 relative hover:scale-105 hover:border-red-700"
        onChange={handleCheckboxChange}
        type="checkbox"
      />
      <img
        src={item.product_image}
        alt={item.product_name}
        className="w-24 h-24 object-cover rounded-lg mr-4"
      />
      <div className="flex-1">
        <p className="text-lg font-semibold">{item.product_name}</p>
        <p className="text-sm text-gray-500">{item.product_price}</p>
        <div className="flex items-center mt-2">
          <button
            onClick={() => handleQuantityChange(-1)}
            className="px-2 py-1 bg-gray-300 rounded-l"
          >
            -
          </button>
          <span className="px-4">{item.product_quantity}</span>
          <button
            onClick={() => handleQuantityChange(1)}
            className="px-2 py-1 bg-gray-300 rounded-r"
          >
            +
          </button>
        </div>
      </div>
      <button
        onClick={() => handleDeleteProduct(item.product_id)}
        className="text-red-500 hover:text-red-700 mx-5"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="currentColor"
          className="bi bi-trash"
          viewBox="0 0 16 16"
        >
          <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
          <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
        </svg>
      </button>
    </div>
  );
}
