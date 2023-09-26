import { FC, ReactNode } from "react";
import { HStack, VStack } from "@/shared/shared/ui/Stack";
import AddCategory from "@/features/AddCategory/ui/AddCategory.tsx";
interface CategoryProps {
  children: ReactNode;
}

const Category: FC<CategoryProps> = ({ children }) => {
  return (
    <VStack max>
      <HStack gap={"16"} wrap={"wrap"}>
        {children}
        <AddCategory />
      </HStack>
    </VStack>
  );
};

export default Category;
