import { useEffect, useState, useRef } from "react";
import { Flex, Heading, Box, Spacer } from "@chakra-ui/react";
import axios from "axios";
import InputQuary from "../Components/InputQuary";
import TagsShow from "../Components/TagsShow";
import Modal from "../Components/Modal";
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
  const [pageNumber, setpageNumber] = useState(1);
  const endScroll = useRef();
  const onScroll = (e: any) => {
    const bottom =
      e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
    if (bottom) {
      photoFetch(head, pageNumber);
    }
  };
  const photoFetch = async (query: string, page: number) => {
    const res = await axios.get(
      `https://api.unsplash.com/search/photos/?query=${query}&page=${page}&client_id=nmgmXe-0waSIz6ZjGxuFbCC5p-zY-MTa6e4t1dt_pL4&per_page=30`
    );
    setpageNumber(pageNumber + 1);
    console.log(photos);
    await setPhotos([...photos, ...res.data.results]);
    return res.data.results;
  };
  useEffect(() => {
    const initF = async () => {
      isQuary(false);
      const link: string = window.location.href;
      const head: string[] = link.split("/");
      const lastElement: string = head.pop();
      sethead(lastElement);
      const photos_E = await photoFetch(lastElement, pageNumber);
      let cats: string[] = [];
      photos_E.map((photo: PhotoI) => {
        let newCats: string[] = [];
        photo.tags.map((tag: TagI) => newCats.push(tag.title));
        cats = [...cats, ...newCats];
      });

      const catSet: Set<string> = new Set(cats);
      let catList: string[] = [];
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
        bg={"rgb(235,235,235)"}
        //za ciemny szary
        curlBorder={true}
      />
      <Box
        w="70vw"
        mt="6"
        overflowY="auto"
        overflowX="clip"
        onScroll={onScroll}
      >
        <Heading mb="5px" textTransform="capitalize">
          {head}
        </Heading>
        {photos.length > 0 ? (
          <>
            <TagsShow
              tags={tags}
              click={(value: string) => {
                setQuary(value);
                redirect();
              }}
            />
            <Flex wrap="wrap" mt="4" w="100%" direction="row" justify="center">
              {photos.map((photo: PhotoI, index: number) => (
                <Box key={index} w="sm" m="1px">
                  <Modal photo={photo} />
                </Box>
              ))}
              <div ref={endScroll}></div>
            </Flex>
          </>
        ) : (
          "no picture finded"
        )}
      </Box>
    </Flex>
  );
};

export default Photos;
