import { useState } from "react";
import { ListItem, Link } from "@chakra-ui/react";
const ListItemW = ({ value, click }: { value: string; click: () => void }) => {
  const [isOver, setIsOver] = useState(false);
  return (
    <ListItem
      bgColor={isOver ? "grey" : "white"}
      onMouseEnter={() => setIsOver(true)}
      onMouseOut={() => setIsOver(false)}
    >
      <Link
        onClick={() => {
          click();
          document.forms[0].submit();
        }}
        color="black"
      >
        {value}
      </Link>
    </ListItem>
  );
};

export default ListItemW;
