import image from "../../public/image-product-desktop.jpg"
import icon from "../../public/icon-cart.svg"

export default function Container(){
return(
   <div className="container" style={{
    borderRadius: "2%",
  }}>
    <img className="image" src={image} alt=""/>

    <div  className="text">
      <div className="textCard">
       <p className="product">PERFUME</p>
      <h1 className='title'>Gabrielle Essence Eau De Parfum</h1>
      <p className="description">A floral, solar and voluptuous interpretation composed by Oliver Polge, Perfumer-Creator for the House of CHANEL.</p>
      <div className="prices">
       <h1 className="discountPrice">$149.99</h1>
       <p className='originalPrice'>$169.99</p>  
      </div>
   
      <button className="btn">
        <img className="icon" src={icon} alt="" />
        Add to Cart</button>  
      </div>
    
    </div>
  </div> 
)

}
