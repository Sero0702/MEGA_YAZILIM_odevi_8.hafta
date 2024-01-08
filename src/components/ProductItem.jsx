const ProductItem = ({ product, cart, setCart }) => {
  const findProduct = cart.find((item) => item.id === product.id);
  const addToCart = (product) => {
    // setCart([...cart, product])
    setCart((prevState) => [...prevState, product]);
  };

  return (
    <div className="border p-4 m-2 rounded-lg shadow-lg">
      <div className="p-4">
        <button
          className={`bg-blue-500 text-white px-4 py-[8px] rounded hover:bg-blue-600 w-full ${
            findProduct && "opacity-50 cursor-no-drop"
          }`}
          onClick={() => addToCart(product)}
          disabled={findProduct}
        >
          Sepete Ekle
        </button>
        <h2 className="text-xl font-semibold">{product.name}</h2>
        <p className="text-gray-500 my-2">{product.price} TL</p>

        <img
          className="w-full h-48 object-cover rounded-t-lg"
          src={product.image}
          alt="product image"
        />
      </div>
    </div>
  );
};

export default ProductItem;
