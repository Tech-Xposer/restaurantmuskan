"use client";
import { useState, useEffect } from "react";
import menu from "@/data/menu.js";
import { specialMenu } from "@/data/menu.js";
import { toast } from "react-toastify";
import { useMenu } from "@/contexts/MenuContext";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Menu = () => {
  const [cartItems, setCartItems] = useState([]);
  const router = useRouter();

  // Load cart items from localStorage when the component mount
  useEffect(() => {
    const storedCartItems = localStorage.getItem("cartItems");
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

  const saveCartToLocalStorage = (newCartItems) => {
    localStorage.setItem("cartItems", JSON.stringify(newCartItems));
  };

  const addToCart = (menuItem, itemQuantity) => {
    setCartItems((prevCartItems) => {
      const existingItem = prevCartItems.find(
        (item) => item.name === menuItem.name
      );

      let updatedCartItems;
      if (existingItem) {
        // Update the quantity if the item already exists
        updatedCartItems = prevCartItems.map((item) =>
          item.name === menuItem.name
            ? { ...item, quantity: item.quantity + itemQuantity }
            : item
        );
      } else {
        // Add new item to the cart
        const cartItem = {
          name: menuItem.name,
          price: menuItem.price,
          quantity: itemQuantity,
        };
        updatedCartItems = [...prevCartItems, cartItem];
      }

      // Save updated cart to localStorage
      saveCartToLocalStorage(updatedCartItems);
      return updatedCartItems;
    });
  };

  return (
    <div className="bg-black/70 ">
      <div className="flex flex-col justify-center items-center  w-full p-5 md:p-20 gap-10">
        <div className="flex justify-around h-auto items-center w-full">
          <h1 className="text-4xl md:text-6xl text-[#F4BE39] font-londrina text-center">
            Menu
          </h1>
          <button className="text-[#F4BE39] border-[#F4BE39] border rounded-sm px-4 py-1">
            <Link href={"/"}>Back</Link>
          </button>
        </div>
        <div className="flex flex-col space-y-8  p-5">
          {menu &&
            menu.map((categoryItem, index) => (
              <div key={index} className="flex flex-col space-y-8">
                <span className="text-xl md:text-3xl text-[#ff6026] font-londrina block mb-2 cursor-pointer">
                  {categoryItem.category}
                </span>
                <p className="font-quicksand text-md md:text-xl text-white mb-4">
                  {categoryItem.description}
                </p>

                <div
                  className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3"
                  key={index}
                >
                  {categoryItem.items &&
                    categoryItem.items.map((menuItem, dishIndex) => (
                      <DishCard
                        key={dishIndex}
                        menuItem={menuItem}
                        addToCart={addToCart} // Pass addToCart here
                      />
                    ))}
                </div>
              </div>
            ))}

          {specialMenu &&
            specialMenu.map((menuItem, index) => (
              <SpecialDishCard
                key={index}
                menuItem={menuItem}
                addToCart={addToCart} // Pass addToCart here
              />
            ))}
        </div>
      </div>
      <button
        className="text-[#F4BE39] font-quicksand border-2 border-[#F4BE39] px-3 py-2 border-solid rounded-md hover:bg-[#F4BE39] hover:text-white transition duration-200 fixed bottom-10 right-10 xl:right-32 z-50 text-md lg:text-3xl "
        onClick={() => {
          router.push("/checkout");
        }}
      >
        Checkout
      </button>
    </div>
  );
};

const DishCard = ({ menuItem }) => {
  const [itemQuantity, setItemQuantity] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null); // State for storing selected option

  // Retrieve initial quantity from localStorage if present
  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    const existingItem = storedCartItems.find(
      (item) => item.name === menuItem.name
    );
    if (existingItem) {
      setItemQuantity(existingItem.quantity);
    }
  }, [menuItem.name]);

  // Save the cart items to localStorage
  const saveCartToLocalStorage = (newQuantity) => {
    let storedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    const existingItemIndex = storedCartItems.findIndex(
      (item) => item.name === menuItem.name
    );

    if (newQuantity > 0) {
      if (existingItemIndex > -1) {
        // Update quantity if item exists
        storedCartItems[existingItemIndex].quantity = newQuantity;
      } else {
        // Add new item to the cart
        storedCartItems.push({
          name: menuItem.name,
          price: menuItem.price,
          quantity: newQuantity,
          option: selectedOption, // Save selected option with item
        });
      }
    } else if (existingItemIndex > -1) {
      // Remove the item if quantity is 0
      storedCartItems.splice(existingItemIndex, 1);
    }

    localStorage.setItem("cartItems", JSON.stringify(storedCartItems));
  };

  const handleQuantityDecrement = () => {
    if (itemQuantity > 0) {
      const newQuantity = itemQuantity - 1;
      setItemQuantity(newQuantity);
      saveCartToLocalStorage(newQuantity);

      if (newQuantity === 0) {
        toast.success(`${menuItem.name} removed from cart`);
      }
    }
  };

  const handleQuantityIncrement = () => {
    const newQuantity = itemQuantity + 1;
    setItemQuantity(newQuantity);
    saveCartToLocalStorage(newQuantity);
    toast.success(`${menuItem.name} added to cart`);
  };

  const handleOptionChange = (optionName) => {
    setSelectedOption(optionName); // Update selected option state
  };

  return (
    <div className="flex gap-5  p-5 w-full items-center ">
      <div className="flex flex-col items-start gap-1">
        <span className="text-xl md:text-2xl text-[#F4BE39] font-londrina block mb-2 cursor-pointer">
          {menuItem.name}
        </span>
        <p className="font-quicksand text-sm md:text-xl text-white mb-4">
          {menuItem.description}
        </p>
        <span className="font-quicksand text-xl md:text-2xl text-white">
          {menuItem.price} €
        </span>

        <div className="flex gap-5 items-center mt-2">
          <button
            onClick={handleQuantityDecrement}
            className="bg-[#E4C590] text-black font-bold font-quicksand px-5 mt-auto hover:bg-[#e1b15f] transition duration-200"
          >
            -
          </button>
          <p className="text-2xl text-white font-quicksand">{itemQuantity}</p>
          <button
            onClick={handleQuantityIncrement}
            className="bg-[#E4C590] text-black font-bold font-quicksand px-5 mt-auto hover:bg-[#e1b15f] transition duration-200"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

const SpecialDishCard = ({ menuItem }) => {
  const [selectedItems, setSelectedItems] = useState({});
  const [quantity, setQuantity] = useState(0);

  // Retrieve initial selections and quantity from localStorage if present
  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    const existingItem = storedCartItems.find(
      (item) => item.name === menuItem.name
    );
    if (existingItem) {
      setSelectedItems(existingItem.selectedItems || {});
      setQuantity(existingItem.quantity || 1);
    }
  }, [menuItem.name]);

  // Save the cart items to localStorage
  const saveCartToLocalStorage = () => {
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    const existingItemIndex = storedCartItems.findIndex(
      (item) => item.name === menuItem.name
    );

    if (existingItemIndex > -1) {
      // Update item if it exists
      storedCartItems[existingItemIndex] = {
        ...storedCartItems[existingItemIndex],
        selectedItems,
        quantity,
      };
    } else {
      // Add new item to cart
      storedCartItems.push({
        name: menuItem.name,
        price: menuItem.price || 11,
        selectedItems,
        quantity,
      });
    }

    localStorage.setItem("cartItems", JSON.stringify(storedCartItems));
  };

  const handleOptionChange = (category, itemName) => {
    setSelectedItems((prev) => ({
      ...prev,
      [category]: itemName,
    }));
  };

  const handleQuantityChange = (delta) => {
    setQuantity((prevQuantity) => Math.max(0, prevQuantity + delta));
    saveCartToLocalStorage();
    toast.success(`${menuItem.name} updated in cart`);
  };

  return (
    <div className="flex flex-col items-start gap-1">
      <span className="text-xl md:text-3xl text-[#F4BE39] font-londrina block mb-2 cursor-pointer">
        {menuItem.name}
      </span>
      <p className="font-quicksand text-sm md:text-xl text-white mb-4">
        {menuItem.description}
      </p>
      <span className="font-quicksand text-xl md:text-2xl text-white">
        {menuItem.price} €
      </span>

      {menuItem.items &&
        menuItem.items.map((itemGroup, index) => (
          <div key={index} className="my-4 w-full">
            {Object.entries(itemGroup).map(([category, items]) => (
              <div key={category} className="mb-4">
                <span className="text-lg md:text-2xl text-[#F4BE39] font-quicksand">
                  Choisissez un {category}
                </span>
                <div className="flex flex-col items-start my-3  p-4 ">
                  {items.map((item, itemIndex) => (
                    <div className="flex items-center mb-4" key={itemIndex}>
                      <input
                        id="default-radio-1"
                        type="radio"
                        name={`${menuItem.name}-${category}`}
                        checked={selectedItems[category] === item.name}
                        value={item.name}
                        required
                        onChange={() => handleOptionChange(category, item.name)}
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        key={itemIndex}
                        htmlFor={`item-${index}-${itemIndex}`}
                        className="ms-2 font-medium text-white text-md md:text-lg font-quicksand"
                      >
                        {item.name}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ))}

      {/* Quantity Controls */}
      <div className="flex items-center gap-5 mt-2">
        <button
          onClick={() => handleQuantityChange(-1)}
          className="bg-[#E4C590] text-black font-bold font-quicksand px-5 mt-auto hover:bg-[#e1b15f] transition duration-200"
        >
          -
        </button>
        <span className="text-xl text-white font-quicksand">{quantity}</span>
        <button
          onClick={() => handleQuantityChange(1)}
          className="bg-[#E4C590] text-black font-bold font-quicksand px-5 mt-auto hover:bg-[#e1b15f] transition duration-200"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Menu;
