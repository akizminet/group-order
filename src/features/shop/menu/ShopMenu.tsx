import { getMenuInfos } from "./menuAPI"

export default function ShopMenu() {
  return (
    <>
      {getMenuInfos.map((menu) => (
        <div className="max-w-lg my-4 mx-auto">
          <h1 className="text-xl my-4">{menu.dish_type_name}</h1>
          {menu.dishes.map((dish) => (
            <div className="flex justify-between ">
              <div className="col-auto item-restaurant-img basis-1/8">
                <img
                  src={dish.photos[0].value}
                  alt="Pate bơ béo (400gram)"
                  width="60"
                  height="60"
                />
              </div>
              <div className="col item-restaurant-info basis-3/5 px-2">
                <h2 className="item-restaurant-name font-bold text-lg">
                  {dish.name}
                </h2>
                <div className="item-restaurant-desc text-sm py-1">
                  {dish.description}
                </div>
                <div className="item-restaurant-total text-sm">
                  Đã được đặt <strong>{dish.display_total_order}</strong> lần |
                  <i className="fa fa-thumbs-up" aria-hidden="true"></i>
                  {` ${dish.total_like}`}
                </div>
              </div>
              <div className="col-auto item-restaurant-more basis-1/4">
                <div className="flex justify-between">
                  <div className="col-auto product-price">
                    <div className="current-price">
                      {dish.price.value}
                      <span>{dish.price.unit}</span>
                    </div>
                  </div>
                  <div className="col-auto adding-food-cart txt-right">
                    <button className="btn-adding text-white font-extrabold text-3xl bg-orange-700 rounded-lg px-3 py-0.5">
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </>
  )
}
