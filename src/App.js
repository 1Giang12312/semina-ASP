import './App.css';
import React from 'react';

class App extends React.Component{
  state = {
    products: [
      {
        "_id": "1",
        "title": "Nike Air Force 1",
        "src": [
            "https://sneakerdaily.vn/wp-content/uploads/2020/11/nike-air-force-1-07-triple-white-315122-111.png",
            "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/8d2c081b-ac13-44d4-9ca3-1a70ee605634/force-1-le-younger-shoe-rg3gD7.png",
            "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/f6e3033f-400f-40b4-9b85-cfc93b18ce56/custom-nike-air-max-97-by-you.png",
            "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/312b1c49-554c-453b-976a-3987af5d6fd1/air-force-1-07-premium-mens-shoes-jTLc6j.png"
            ],
        "description": "Phù hợp với mọi lứa tuổi",
        "content": "Nike air sản xuất vào năm 1958 và trở thành sản phẩm bán chạy nhất mọi thời đại dành cho mọi lứa tuổi",
        "price": 59,
        "colors":["grey","black","green","blue"],
        "count": 1
        }
    ],
    index:0
  };
  myRef =React.createRef();
  handleTab=index=>{
    this.setState({index:index})
    const images = this.myRef.current.children;
    for(let i=0; i<images.length;i++){
      images[i].className=images[i].className.replace("active","");
    }
    images[index].className="active";
  };
  AddToCard(){
    alert("Đã thêm vào giỏ hàng")
  }
  componentDidMount(){
    const{index} = this.state;
    this.myRef.current.children[index].className="active";

  }
  render(){
    const {products,index} = this.state;
    return(
      <div className="app">
          {
            products.map(item =>(
                <div className="details" key ={item._id}>
                  <div className = "big-img">
                    <img src={item.src[index]} alt=""/>
                    </div>
                    <div className ="box">
                      <div className="row">
                        <h2>{item.title}</h2>
                      </div>
                      <div className="colors">
                        {
                          item.colors.map((color,index)=>(
                            <button style={{background: color}}key ={index}></button>
                          ))
                        }
                      </div>

                      <p>{item.description}</p>
                      <p>{item.content}</p>
                        <div className="thumb" ref={this.myRef}>
                          {
                            item.src.map((img,index)=>(
                              <img src={img} height="300" alt="" key={index} onClick={()=> this.handleTab(index)}
                              />
                              
                            ))
                          }
                        </div>
                        <h4>${item.price}</h4>
                        <button className ="btn-gio" onClick={()=>this.AddToCard()}>Thêm vào giỏ</button>
                    </div>
                </div>
            ))
          }
      </div>
    );
  };
}

export default App;
