import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import "./index.css";

function ProductPage() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  useEffect(function () {
    axios
      .get(
        `https://e55d7116-15b8-42e5-9df1-d6479d6af959.mock.pstmn.io/products/${id}`
      )
      .then(function (result) {
        setProduct(result.data);
      })
      .catch(function (error) {
        console.error("에러 발생:", error);
      });
  }, []);

  // 처음에 product를 생성되었을 때는 null이기 때문에 비동기 호출이 됨.
  // 그러면 product는 null인 상태이기 때문에 아래의 if문으로 인해서 상품 정보를 받고 있습니다가 출력
  // 왜냐? return이 있기 때문인데 return은 함수를 종료시키는 구문이기 하여 아래 return 은 실행x
  // 그 다음 비동기가 끝나고 product가 result.data로 업데이트가 되면 product는 null이 아니기 때문에
  // if문은 실행되지 않고 아래 return이 실행

  if (product === null) {
    return <h1>상품 정보를 받고 있습니다...</h1>;
  }

  return (
    <div>
      <div id="image-box">
        <img src={"/" + product.imageUrl} />
      </div>
      <div id="profile-box">
        <img src="/images/icons/avatar.png" />
        <span>{product.seller}</span>
      </div>
      <div id="contents-box">
        <div id="name">{product.name}</div>
        <div id="price">{product.price}원</div>
        <div id="createdAt">2022년 6월 13일</div>
        <div id="description">{product.description}</div>
      </div>
    </div>
  );
}

export default ProductPage;

// App.js에서 path를 /products/:id 로 주었으며 :id는 변할 수 있는 매개변수라는 뜻의 Parameter.
// 그리고 index.js에서 :id값으로 products.map()을 통해 index값을 주었으며
// 그 index값을 useParams를 통해서 id값을 가져온 후 화면에 바로 표시 가능
