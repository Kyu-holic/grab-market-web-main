import { useParams } from "react-router-dom";

function ProductPage() {
  const { id } = useParams();

  return <div>상품 상세 페이지 {id} 페이지</div>;
}

export default ProductPage;
