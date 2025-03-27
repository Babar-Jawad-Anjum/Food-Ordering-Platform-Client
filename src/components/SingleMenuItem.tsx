import { MenuItem } from "@/types";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";

type Props = {
  menuItem: MenuItem;
  addToCart: () => void;
};
const SingleMenuItem = ({ menuItem, addToCart }: Props) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{menuItem.name}</CardTitle>
      </CardHeader>
      <CardContent className="font-bold flex justify-between">
        ${(menuItem.price / 100).toFixed(2)}
        <Button onClick={addToCart} className="bg-[#F88340] text-white">
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
};

export default SingleMenuItem;
