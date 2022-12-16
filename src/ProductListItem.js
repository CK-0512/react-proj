import React, {useState} from "react";

function ProductListItem() {
  const imNo = 1;
  const productName = "MAC BOOK AIR";
  const productPriceFormated = "4,340,000원";
  return (
  <>
  <div
          style={{
            display: "inline-flex",
              flexDirection: "column",
                gap: "10px",
          }}
          >
          <img src={`https://picsum.photos/id/${imNo}/400/400`} />
          <div style={{textAlign:'center', fontWeight:'bold', color:'#454545'}}>{productName}</div>
          <div style={{textAlign:'center'}}>{productPriceFormated}</div>
        </div>

        <div
          style={{
            display: "inline-flex",
              flexDirection: "column",
                gap: "10px",
          }}
          ></div>
  </>
  );
}

export default ProductListItem;
