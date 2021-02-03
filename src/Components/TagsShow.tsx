import { Grid, Tag, Link } from "@chakra-ui/react";
interface TagI {
  tags: string[];
}
const TagsShow = ({ tags }: TagI) => {
  return (
    <Grid templateColumns="repeat(3, 1fr)" gap={2} maxH="8" overflowY="auto">
      {tags.map((tag: string) => (
        <Tag key={tag}>
          <Link>{tag}</Link>
        </Tag>
      ))}
    </Grid>
  );
};

export default TagsShow;
