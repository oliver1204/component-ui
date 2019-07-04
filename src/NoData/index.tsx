import * as React from 'react';
import {
    Props,
} from './interface';
import './index.css';


class NoDate extends  React.Component<Props> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        let imgsrc = this.props.src || require("./images/empty.png");
        let mainTips = this.props.main || '';
        let subTips = this.props.sub || '暂无相关内容';
        return (
            <div className="_NoData">
                <img src={imgsrc} />
                {
                    mainTips ? <p className="main">{mainTips}</p> : null
                }
                <p className={`sub ${mainTips ? ' fixedWidth' : ''}`}>{ subTips }</p>
            </div>
        );
    }
}

export default NoDate;
