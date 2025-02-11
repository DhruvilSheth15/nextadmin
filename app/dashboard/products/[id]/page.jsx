import styles from "@/app/ui/dashboard/products/singleProduct/singleProduct.module.css";
import Image from "next/image";

const SingleProductPage = () => {

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/noavatar.png" alt="" fill />
        </div>
        Computer
      </div>
      <div className={styles.formContainer}>
        <form className={styles.form}>
          <input type="hidden" name="id" />
          <label>Title</label>
          <input type="text" name="title" placeholder={'Computer'} />
          <label>Price</label>
          <input type="number" name="price" placeholder={'$1000'} />
          <label>Stock</label>
          <input type="number" name="stock" placeholder={1} />
          <label>Color</label>
          <input
            type="text"
            name="color"
            placeholder={"color"}
          />
          <label>Size</label>
          <textarea
            type="text"
            name="size"
            placeholder={"size"}
          />
          <label>Cat</label>
          <select name="cat" id="cat">
            <option value="kitchen">Kitchen</option>
            <option value="computers">Computers</option>
          </select>
          <label>Description</label>
          <textarea
            name="desc"
            id="desc"
            rows="10"
            placeholder={'This is a good product'}
          ></textarea>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleProductPage;