import React from 'react'
import {  WhiteSpace, WingBlank,SearchBar,Tabs,Badge } from 'antd-mobile';
import {connect} from 'react-redux'
import * as homeComponentsActions from './homeComponentAction'
import {hashHistory} from 'react-router'
import  './base.css'
import './homeComponent.css'
import './font/iconfont.css'
import CarouselComponent from './carousel/carousel'

class HomeComponent extends React.Component{
    state={
        categorys:'狗狗服饰',
        url:'dogHome.php'
    }
    shouldComponentUpdate(newProps,newstate){
        console.log(newProps);
        return true;
    }
    categoryFunction(event){
        this.setState({
            categorys:event.title.props.children
        })
        this.props.getHome(this.state.url,{category:event.title.props.children})
    }
     componentDidMount(){
        this.props.getHome(this.state.url,{category:this.state.categorys})
    }
    render(){
        if(!this.props.home){
            return null
        }
        const clothes=[{type:'外套',img:'src/images/cxl_imgs/clothes1.jpg'},{type:'卫衣',img:'src/images/cxl_imgs/clothes2.jpg'},{type:'马甲',img:'src/images/cxl_imgs/clothes3.jpg'},{type:'毛衣',img:'src/images/cxl_imgs/clothes4.jpg'},{type:'配饰',img:'src/images/cxl_imgs/clothes5.jpg'},{type:'居服',img:'src/images/cxl_imgs/clothes6.jpg'}]
        const health=[{type:'耳部',img:'src/images/cxl_imgs/health1.jpg'},{type:'眼部',img:'src/images/cxl_imgs/health2.jpg'},{type:'口部',img:'src/images/cxl_imgs/health3.jpg'},{type:'根部',img:'src/images/cxl_imgs/health4.jpg'},{type:'胸部',img:'src/images/cxl_imgs/health5.jpg'},{type:'足部',img:'src/images/cxl_imgs/health6.jpg'}]
        const eat=[{type:'全犬',img:'src/images/cxl_imgs/eat1.jpg'},{type:'幼犬',img:'src/images/cxl_imgs/eat2.jpg'},{type:'成犬',img:'src/images/cxl_imgs/eat3.jpg'},{type:'老犬',img:'src/images/cxl_imgs/eat4.jpg'},{type:'小犬',img:'src/images/cxl_imgs/eat5.jpg'},{type:'捞犬',img:'src/images/cxl_imgs/eat6.jpg'}]
        const play=[{type:'棉质玩具',img:'src/images/cxl_imgs/toy1.jpg'},{type:'橡胶玩具',img:'src/images/cxl_imgs/toy2.jpg'},{type:'塑料玩具',img:'src/images/cxl_imgs/toy3.jpg'},{type:'发声玩具',img:'src/images/cxl_imgs/toy4.jpg'},{type:'漏食玩具',img:'src/images/cxl_imgs/toy5.jpg'},{type:'捞仔玩具',img:'src/images/cxl_imgs/toy6.jpg'}]
        var type=[];
        if(this.state.categorys=='狗狗服饰'){
            clothes.forEach(function(item){
                type.push(item)
            }) 
        }
        if(this.state.categorys=='狗粮'){
            eat.forEach(function(item){
                type.push(item)
            }) 
        }
        if(this.state.categorys=='保健'){
            health.forEach(function(item){
                type.push(item)
            }) 
        }
        if(this.state.categorys=='玩具'){
            play.forEach(function(item){
                type.push(item)
            }) 
        }
      const tabs = [
            { title: <Badge>狗狗服饰</Badge> },
            { title: <Badge>狗粮</Badge> },
            { title: <Badge>保健</Badge> },
            { title: <Badge>玩具</Badge> },
          ];
        return (
          <div>
              <h1 style={{display:'flex'}}>
              <p style={{fontSize:'1.2rem',lineHeight:'100%',marginTop:'0.75rem'}}>狗站 |</p>
              <SearchBar style={{width:'80%'}}placeholder="Search"  />
            </h1>
             <Tabs tabs={tabs}
                swipeable={false}
                ref="category"
                onTabClick={this.categoryFunction.bind(this)}
              >
            </Tabs>
            <p>{this.state.categorys}</p>
                <CarouselComponent></CarouselComponent>
                <ul className="dog_type">
                    {
                        type.map(function(item,index){
                        return(
                            <li key={index}className="dog_typeBox">
                                <img src={item.img} className="dog_typeImg"/>
                                <p>{item.type}</p>
                            </li>
                            )                
                        }.bind(this))
                    }
                </ul>
                <div className="dogClothes_box">
                    <img style={{width:'10rem',marginRight:'0.6rem'}} src="src/images/cxl_imgs/dogClothes1.jpg"/>
                    <img style={{width:'10rem'}} src="src/images/cxl_imgs/dogClothes2.jpg"/>
                </div>
                <h3 className="cxl_dog">
                    <span style={{fontSize:'1.2rem',color:'red'}}>
                        <i className="iconfont icon-vip"></i>
                        特价栏
                        <i className="iconfont icon-vip"></i>
                    </span><br/>
                    <span style={{fontSize:'1rem'}}>走过路过，请勿错过</span>
                </h3>
                <ul className="tejia_box">
                    {
                        this.props.home.map(function(item,index){
                            return <li key={index} className="tejia_small" data-id={item.goodId} data-category={item.category}>
                                    <img style={{width:'100%',height:'70%',marginBottom:'0.5rem'}}src={item.goodpic}/>
                                    <h4><span>4色可选</span>{item.goodname}</h4>
                                    <p><span style={{color:'red'}}>¥{item.goodprice}.00</span>
                                        <span className="fr iconfont icon-shoucang "></span>
                                        <span className="fr">{item.goodaudience}</span>
                                    </p>
                                </li>
                        })
                    }
                </ul>
          </div>
        )
    }
}
const passToState = function(state){
    console.log(state)
    return {
        home: state.home.response
    }
}

export default connect(passToState, homeComponentsActions)(HomeComponent);
