import { useGetRestaurant } from "@/api/RestaurantAPi";
import OrderSummary from "@/components/OrderSummary";
import RestaurantInfo from "@/components/RestaurantInfo";
import SingleMenuItem from "@/components/SingleMenuItem";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card } from "@/components/ui/card";
import { MenuItem } from "@/types";
import { useState } from "react";
import { useParams } from "react-router-dom";

export type CartItem = {
  _id: string;
  name: string;
  price: number;
  quantity: number;
};

const DetailsPage = () => {
  const { restaurantId } = useParams();
  const { restaurant, isPending: isLoading } = useGetRestaurant(restaurantId);

  // state to hold total cart items
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (menuItem: MenuItem) => {
    setCartItems((prevCartItems) => {
      let updatedCartItems;

      // 1: Check if item is already in the cart
      const alreadyExist = prevCartItems.find(
        (cartItem) => cartItem._id === menuItem._id
      );

      // 2: If item is in the cart, update quantity
      if (alreadyExist) {
        updatedCartItems = prevCartItems.map((cartItem) =>
          cartItem._id === menuItem._id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        // 3: If not, add new item into cart
        updatedCartItems = [
          ...prevCartItems,
          {
            ...menuItem,
            quantity: 1,
          },
        ];
      }

      return updatedCartItems;
    });
  };

  if (isLoading || !restaurant) return `Loading...`;

  return (
    <div className="flex flex-col gap-7">
      <AspectRatio ratio={16 / 5}>
        <img
          src={restaurant.imageUrl}
          className="rounded-md object-cover h-full w-full"
          alt="restaurant-img"
        />
      </AspectRatio>
      <div className="grid md:grid-cols-[4fr_2fr] gap-5 px-2 md:px-32">
        <div className="flex flex-col gap-4">
          <RestaurantInfo restaurant={restaurant} />
          <span className="text-xl font-bold tracking-tight">Menu</span>
          {restaurant.menuItems.map((menuItem) => (
            <SingleMenuItem
              menuItem={menuItem}
              addToCart={() => addToCart(menuItem)}
            />
          ))}
        </div>
        <div className="">
          <Card>
            <OrderSummary restaurant={restaurant} cartItems={cartItems} />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
