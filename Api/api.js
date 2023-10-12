import axios from "axios";

const USER_ID = 'H_7fRdrk4DWvmrUXd1nOMJBkvxVq_iIsQagpkW6_zpE';



export const imageAPI = {
   async getAllImage() {
      const response = await axios.get(`https://api.unsplash.com/photos/random?client_id=${USER_ID}&count=7`);
      return response
   },
   async getUploadedImage() {
      const response = await axios.get(`https://api.unsplash.com/users/stasidla/portfolio?client_id=${USER_ID}`)
      return response
   },
   async getLikedImage() {
      const response = await axios.get(`https://api.unsplash.com/users/stasidla/likes?client_id=${USER_ID}`)
      return response
   },
   async getSearchImage(searchImage, page = 1) {
      const response = await axios.get(`https://api.unsplash.com/search/photos/?page=1&query=${searchImage}&page=${page}&client_id=${USER_ID}`)
      return response
   },
   async getImageData(imageId) {
      const response = await axios.get(`https://api.unsplash.com/photos/${imageId}?client_id=${USER_ID}`)
      return response
   }

}