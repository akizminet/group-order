const Star = () => {
  return (
    <svg
      className="inline-block w-6 h-6 fill-yellow-400 border-yellow-400"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      stroke-width="0.5"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
    </svg>
  )
}
export function ShopHeader() {
  return (
    <div className="flex max-w-4xl mx-auto justify-between">
      <div className="detail-restaurant-img" style={{ width: "480px" }}>
        <img
          src="https://images.foody.vn/res/g103/1024417/prof/s640x400/foody-upload-api-foody-mobile-hmzz-200520100244.jpg"
          alt="Bếp Bà Muối - Ăn Vặt Online"
        />
      </div>
      <div className="detail-restaurant-info flex flex-col justify-between">
        <div className="content mt-10">
          <div className="kind-restaurant uppercase">
            <span> Shop Online</span>
          </div>
          <h1 className="font-bold text-xl">Bếp Bà Muối - Ăn Vặt Online</h1>
          <div className="address-restaurant">
            606/52 Đường 3 Tháng 2, P. 14, Quận 10, TP. HCM
          </div>
          <div className="rating">
            <div className="stars inline-block">
              <Star />
              <Star />
              <Star />
              <Star />
              <Star />
            </div>
            <span className="number-rating">1 </span>
            đánh giá trên ShopeeFood
          </div>
          <a
            href="https://foody.vn/ho-chi-minh/bep-ba-muoi-an-vat-online"
            rel="noopener noreferrer nofollow"
            target="_blank"
            className="number-review no-underline"
          >
            Xem thêm lượt đánh giá từ Foody
          </a>
          <div className="status-restaurant">
            <span className="opentime-status">Mở cửa </span>
            <span className="time">
              <i className="far fa-clock"></i>06:00 - 22:00
            </span>
          </div>
          <div className="cost-restaurant">
            <i className="fas fa-dollar-sign"></i>44,000 - 85,000
          </div>
          <div className="share-social clearfix">
            <div className="share-social-box">
              <div
                className="fb-like"
                data-layout="button"
                data-action="like"
                data-size="small"
                data-show-faces="false"
                data-share="true"
                data-colorscheme="light"
                data-kid-directed-site="false"
              ></div>
            </div>
          </div>
        </div>
        <div className="utility-restaurant clearfix flex justify-between">
          <div className="utility-item relative">
            <div className="utility-title">Phí dịch vụ</div>
            <div className="utility-content">
              <span className="txt-bold txt-red"> 0.0% Phí phục vụ </span>
            </div>
            <span
              className="icon icon-partner-vi absolute bottom-0 right-0"
              data-toggle="modal"
              data-target="#modal-verify-merchant"
            >
              <Star />
            </span>
          </div>
          <div className="utility-item">
            <div className="utility-title">Dịch vụ bởi</div>
            <div className="utility-content">
              <span className="font-bold text-orange-600">ShopeeFood</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
