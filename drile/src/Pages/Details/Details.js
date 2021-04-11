import DetailsImage from "../../assets/chair.jpg";
import "./details.css";

export const Details = () => {
  return (
    <div className="details">
      <div className="details__wrapper">
        <div className="details__left">
            <img src={DetailsImage} alt=""/>
        </div>
        <div className="details__right">
          <h1 className="title">Simple Coffee Table</h1>
          <span className="price">$600</span>
          <p className="description">
            As you run your fingers across the surface of this golden oak
            colored vanity set, you’ll understand why it stands out from the
            rest; from the table to the legs, the solid wood material is
            different from those that cut corners. This is the perfect upscale
            piece for an exquisite home.
          </p>

          <button>Add To Cart</button>
        </div>
      </div>

      <div className="details__description">
          <h3>Description</h3>

          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium autem, nobis aut ullam aperiam minus reprehenderit iusto laudantium, culpa consectetur rem ducimus tenetur, unde itaque deserunt vero repellat ad optio sunt facere officia dolores error vitae doloribus? Tenetur quia placeat totam asperiores quos sapiente minima vitae dolores hic voluptate at nulla, rerum, quae quis sequi fugiat et! Sapiente facilis inventore beatae debitis dolor ullam laudantium quam hic id soluta maiores facere error quos iure possimus distinctio repellat rem, deserunt quaerat!</p>
      </div>
    </div>
  );
};
