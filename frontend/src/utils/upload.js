import axios from "axios";

const upload = async (file) => {
  const data = new FormData();
  data.append("file", file);
  data.append("upload_preset", "joberr");
  try {
    const resp = await axios.post(
      "https://api.cloudinary.com/v1_1/dfe2ichp2/image/upload",
      data
    );
    const { url } = resp.data;
    return url;
  } catch (error) {
    console.log(error);
  }
};
export default upload;
