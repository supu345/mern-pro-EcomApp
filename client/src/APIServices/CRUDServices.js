import axios from "axios";

export async function Create(postBody) {
  try {
    let res = await axios.post(
      "http://localhost:5000/api/v1/CreateProduct",
      postBody
    );
    if (res.status === 200) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    return false;
  }
}
