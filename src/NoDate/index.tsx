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
        return (
            <div className="_NoData">
                <img src={imgsrc} />
                <p>暂无相关内容</p>
            </div>
        );
    }
}

export default NoDate;
