import { useState } from "react";
import { ListItem, Link } from "@chakra-ui/react";
const ListItemW = ({ value, click }: { value: string; click: () => void }) => {
  const [isOver, setIsOver] = useState(false);
  return (
    <ListItem
      bgColor={isOver ? "lightgray" : "white"}
      onMouseEnter={() => setIsOver(true)}
      onMouseOut={() => setIsOver(false)}
      pt="12px"
      pb="12px"
      pl="15px"
      pr="5px"
      transition="ease-in"
    >
      <Link onClick={click} color="black">
        {value}
      </Link>
    </ListItem>
  );
};

export default ListItemW;
