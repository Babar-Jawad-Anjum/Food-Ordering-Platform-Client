import {
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { cuisinesList } from "@/config/restaurant-options-config";
import { useFormContext } from "react-hook-form";
import CuisinesCheckbox from "./CuisinesCheckbox";

function CuisinesSection() {
  const { control } = useFormContext();

  return (
    <div className="space-y-2">
      <div>
        <h1 className="text-xl font-bold">
          <FormDescription>
            Select the cuisines that your restaurant serves.
          </FormDescription>
        </h1>
      </div>
      <FormField
        control={control}
        name="cuisines"
        render={({ field }) => (
          <FormItem>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-1">
              {cuisinesList.map((cuisineItem) => (
                <CuisinesCheckbox cuisine={cuisineItem} field={field} />
              ))}
            </div>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}

export default CuisinesSection;
