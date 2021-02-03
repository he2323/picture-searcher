import { useEffect, useState } from "react";
import { Flex, Grid, Heading, Box } from "@chakra-ui/react";
import axios from "axios";
import InputQuary from "../Components/InputQuary";
import TagsShow from "../Components/TagsShow";
import Modal from "../Components/Modal"
interface PhotosI {
  redirect: () => void;
  quary: string;
  tips: string[];
  setQuary: (value: string) => void;
  isQuary: (value: boolean) => void;
}
export interface TagI {
  title: string;
  type: string;
}
interface LinksI {
  self: string;
  html: string;
  download: string;
  download_location: string;
}
interface UrlsI {
  raw: string;
  full: string;
  regular: string;
  small: string;
  thumb: string;
}
export interface PhotoI {
  alt_description: string;
  blur_hash: string;
  categories: string[];
  color: string;
  created_at: string;
  current_user_collections: string[];
  description: string;
  height: number;
  id: string;
  liked_by_user: boolean;
  likes: number;
  links: LinksI;
  promoted_at: string;
  sponsorship: null;
  tags: TagI[];
  updated_at: string;
  urls: UrlsI;
  user: any;
  width: number;
}
const Photos = ({ quary, setQuary, tips, redirect, isQuary }: PhotosI) => {
  const [head, sethead] = useState("");
  const [photos, setPhotos] = useState([]);
  const [tags, setTags] = useState([]);
  const photoFetch = async (query: string) => {
    const res = await axios.get(
      `https://api.unsplash.com/search/photos/?query=${query}&client_id=nmgmXe-0waSIz6ZjGxuFbCC5p-zY-MTa6e4t1dt_pL4&per_page=100`
    );

    await setPhotos(res.data.results);
console.log(res.data.results);
    return res.data.results;
  };
  useEffect(() => {
    const initF = async () => {
      isQuary(false);
      const link: string = window.location.href;
      const head: string[] = link.split("/");
      const lastElement: any = head.pop();
      sethead(lastElement);
      const photos_E = await photoFetch(lastElement);
      let cats: any[] = [];
      photos_E.map((photo: any) => {
        let newCats: any[] = [];
        photo.tags.map((tag: any) => newCats.push(tag.title));
        cats = [...cats, ...newCats];
      });

      const catSet: Set<string> = new Set(cats);
      let catList: any[] = [];
      catSet.forEach((value: string) => catList.push(value));
      setTags(catList);
    };
    initF();
  }, []);
  return (
    <Flex w="100vw" h="100vh" alignItems="center" direction="column">
      <InputQuary
        value={quary}
        changeValue={(value: string) => setQuary(value)}
        tips={tips}
        redirect={redirect}
        bg={"lightgrey"}
        curlBorder={true}
      />
      <Box w="70vw" mt="6" overflowY="auto" overflowX="hidden">
        <Heading>{head}</Heading>
        <TagsShow tags={tags} />
        <Grid mt="4" templateColumns="repeat(auto, minmax(50px, 1fr))" gap={2}>
          {photos.map((photo: PhotoI) => (
              <Modal photo={photo}/>
          ))}
        </Grid>
      </Box>
    </Flex>
  );
};

export default Photos;
