import React from 'react'
import { Tabs, WhiteSpace } from 'antd-mobile';
import Allorder from "./allorder/allorderComponent";
export default class orderlist extends React.Component{
    render(){
        const tabs = [
            { title: '全部订单' },
            { title: '待付款' },
            { title: '待收货' },
            { title: '待评价' },
        ];
        return (
            <div>
                <Tabs tabs={tabs}>
                    <div style={{ display: 'flex' }}>
                        <Allorder url="allorder.php"/>
                    </div>
                    <div style={{ display: 'flex' }}>
                        1
                    </div>
                    <div style={{ display: 'flex' }}>
                        2
                    </div>
                    <div style={{ display: 'flex' }}>
                       3
                    </div>
                </Tabs>
            </div>
        )
    }
}