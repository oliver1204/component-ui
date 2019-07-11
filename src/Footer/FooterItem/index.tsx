import * as React from 'react';

import {
    State,
    Props,
    Data,
} from './interface';

class FooterItem extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }

    callback = () => {
        this.props.onClick();
    }

    render() {
        let { disabled,  type, className} = this.props;
        // Has a "disabled" attribute and is true
        let disabledEffect = disabled ? 'disabled' : '';  
        //"type" currently has two options "primary" or "default"
        let typeEffect = type || 'default'; 
        let classNameEffect = className || '';
        
        return (
            <div
                {...(!disabled ? { onClick: this.callback } : {})}
                className={`btn ${disabledEffect} ${classNameEffect} ${typeEffect}`}>
                {this.props.children}
            </div>
        );
    }
}

export default FooterItem;