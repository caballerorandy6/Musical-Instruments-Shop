import axios from "axios";

export const getGuitar = async (url) => {
  const { data: guitar } = await axios(
    `http://127.0.0.1:1337/api/guitars?filters[url]=${url}&populate=imagen`
  );
  return guitar.data;
};
