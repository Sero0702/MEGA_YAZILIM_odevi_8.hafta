import CartIcon from "./CartIcon";


const Header = ({cart}) => {
  return (
    <div className="flex justify-evenly items-center mb-6">
      <h1 className="text-3xl font-semibold">
        React İle Basit E-Ticaret Sitesi
      </h1>
     <CartIcon cart={cart} />
    </div>
  );
};

export default Header;