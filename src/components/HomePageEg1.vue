<template>
  <div>
    <div class="image-grid">
      <div v-for="(imageArray, index) in imageArrays" :key="index" class="image-column">
        <div v-for="image in imageArray" :key="image" class="mb-4">
          <img :src="image" alt="image" class="image-item">
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.image-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
}

.image-column {
  display: flex;
  flex-direction: column;
}

.image-item {
  width: 200px;
}
</style>

  
<script>
export default {
  data() {
    return {
      imageArrays: []
    };
  },
  mounted() {
    this.generateImageArrays();
    this.swapImages();
    this.getImageHeight();
  },
  methods: {
    generateImageArrays() {
      const numberOfArrays = 4;
      const images = [
        'https://bom.so/FVAnxa',
        'https://bom.so/fYOLHm',
        'https://bom.so/1me8ZD',
        'https://bom.so/BhJ8vL',
        'https://bom.so/hP3kUj',
        'https://bom.so/yPclCY',
        'https://bom.so/pXujFO',
        'https://bom.so/G2iogv',
        'https://bom.so/u4lI96',
        'https://bom.so/J4p5ay',
        'https://bom.so/XNgpVW',
      ];

      const imageArrays = new Array(numberOfArrays).fill([]); // Khởi tạo mảng các cột
      images.forEach((image, index) => {
        const columnIndex = index % numberOfArrays; // Xác định cột tương ứng
        imageArrays[columnIndex] = [...imageArrays[columnIndex], image]; // Thêm ảnh vào cột tương ứng
      });
      this.imageArrays = imageArrays;
    },
    swapImages() {
      // Tìm height của cột min
      let minColumnHeight = Infinity;
      let minColumnIndex = -1;

      // Tìm height của cột max
      let maxColumnHeight = -Infinity;
      let maxColumnIndex = -1;

      // Lặp for -> các cột trong mảng imageArrays
      for (let i = 0; i < this.imageArrays.length; i++) {
        const columnHeight = this.imageArrays[i].length;

        // So sánh và cập nhật chiều cao nhỏ nhất và lớn nhất
        if (columnHeight < minColumnHeight) {
          minColumnHeight = columnHeight;
          minColumnIndex = i;
        }

        if (columnHeight > maxColumnHeight) {
          maxColumnHeight = columnHeight;
          maxColumnIndex = i;
        }
      }
  
      console.log("Cột có height nhỏ nhất:", this.imageArrays[minColumnIndex]);
      console.log("Cột có height lớn nhất:", this.imageArrays[maxColumnIndex]);
      
      // lấy thông số height
      const shortestImage = this.imageArrays[maxColumnIndex].reduce((prevImage, currImage) => {
        
      
        const currImageHeight = this.getImageHeight(currImage);

        return currImageHeight < prevImage.height ? { image: currImage, height: currImageHeight } : prevImage;
      }, Promise.resolve({ image: this.imageArrays[maxColumnIndex][0], height: Infinity }));


      const shortestImageIndex = this.imageArrays[maxColumnIndex].indexOf(shortestImage);

      // Xóa ảnh có height min từ cột max
      this.imageArrays[maxColumnIndex].splice(shortestImageIndex, 1);

      // Thêm ảnh có height min vào cột min
      this.imageArrays[minColumnIndex].push(shortestImage);
    
    },

    getImageHeight(imageUrl) {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = imageUrl;
        img.addEventListener('load', () => {
          resolve(img.naturalHeight);
        });
        img.addEventListener('error', (event) => {
          reject(event.error);
        });
      });
    }
  },
}
</script>







