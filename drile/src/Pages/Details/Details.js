import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { add, selectProduct } from "../../features/productSlice";
import "./details.css";

export const Details = () => {
  const product = useSelector(selectProduct);
  const dispatch = useDispatch();
  const history = useHistory();
  const { title, price, image } = product;

  const addToCart = () => {
    dispatch(add({ title, price, image }));
    history.push("/cart");
  }


  return (
    <div className="details">
      <div className="details__wrapper">
        <div className="details__left">
            <img src={image} alt=""/>
        </div>
        <div className="details__right">
          <h1 className="title">{title}</h1>
          <span className="price">${price}</span>
          <p className="description">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore beatae sit repellat alias tenetur ex et qui illum sed omnis quas optio sapiente earum facere fuga quisquam, excepturi quia aperiam!
          </p>

          <button onClick={addToCart}>Add To Cart</button>
        </div>
      </div>

      <div className="details__description">
          <h3>Description</h3>

          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium autem, nobis aut ullam aperiam minus reprehenderit iusto laudantium, culpa consectetur rem ducimus tenetur, unde itaque deserunt vero repellat ad optio sunt facere officia dolores error vitae doloribus? Tenetur quia placeat totam asperiores quos sapiente minima vitae dolores hic voluptate at nulla, rerum, quae quis sequi fugiat et! Sapiente facilis inventore beatae debitis dolor ullam laudantium quam hic id soluta maiores facere error quos iure possimus distinctio repellat rem, deserunt quaerat!</p>
      </div>
    </div>
  );
};
