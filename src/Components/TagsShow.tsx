import { Tag, Link } from "@chakra-ui/react";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
interface TagI {
  tags: string[];
  click: (value: string) => void;
}
const TagsShow = ({ tags, click }: TagI) => {
  return (
    <Carousel infinite draggable={true} itemWidth={100}>
      {tags.map((tag: string) => (
        <Tag
          mr="4px"
          size="lg"
          alignItems="center"
          bg="white"
          border="1px solid #d1d1d1"
          textTransform="capitalize"
          borderRadius="5px"
          color="#111"
          key={tag}
          fontWeight="400"
          onClick={() => click(tag)}
        >
          <Link>{tag}</Link>
        </Tag>
      ))}
    </Carousel>
  );
};

export default TagsShow;
