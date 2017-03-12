const React = require('react');
class Footer extends React.Component{
    render(){
        return (
            <div className="st_bottombox">
                <div className="st_bottom">
                    <div className="st_bignav">
                        <ul className="st_message">
                            <li>
                                <img src="../public/images/intnet.png" alt=""/>
                                <p className="st_int">www.yihognyuan.com</p>
                            </li>
                            <li>
                                <img src="../public/images/address.png" alt=""/>
                                <p>山西省太原市尖草坪区产业园丰源路B区15号</p>
                            </li>
                            <li className="st_phone">
                                <img src="../public/images/huatong.png" alt=""/>
                                <p>400-123-123 400-234-234</p>
                            </li>
                        </ul>
                        <div className="st_map">

                        </div>
                        <div className="st_copyright">
                            <p>北京市公安局朝阳分局备案编号:110105000501   Copyright © 2006-2016 ZCOOL</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
exports.Footer=Footer;
