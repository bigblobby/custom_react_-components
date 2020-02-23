import React from "react";

class Select extends React.Component {
    static defaultProps = {
        options: [],
        label: '',
        placeholder: '',
        updater : () => {},
        multiple: false
    };

    constructor(props) {
        super(props);

        this.state = {
            selectedOptions: [],
            isOpen: false,
            height: 0
        };

        this.optionsContainer = React.createRef();

    }

    closeDropdown = () => {
        this.setState({
            isOpen: false
        }, this.setHeight);
    };

    handleOptionClick = (value) => {
        if(this.props.multiple) {
            this.setState((prevState) => {
                let options = [...prevState.selectedOptions];
                const index = options.indexOf(value);

                let result;

                if(index === -1) {
                    result = [...options, value];
                } else {
                    result = [...options];
                    result.splice(index, 1);
                }

                return {
                    selectedOptions: result
                };
            }, () => this.props.updater(this.state.selectedOptions));
        } else {
            this.setState({
                selectedOptions: [value],
                isOpen: false
            }, () => {
                this.setHeight();
                this.props.updater(this.state.selectedOptions);
            });
        }
    };

    handleSelectClick = () => {
        this.setState((prevState) => ({
            isOpen: !prevState.isOpen
        }), this.setHeight);
    };

    setHeight = () => {
        if(this.state.isOpen){
            this.setState({ height: this.optionsContainer.current.scrollHeight });
        } else {
            this.setState({ height: 0 });
        }
    };

    checkIfActive = (id) => {
        return this.state.selectedOptions.indexOf(id) !== -1 ? 'active' : '';
    };

    generateDescription = (desc) => {
        if(Array.isArray(desc)){
            return desc.join(",\n");
        } else {
            return desc;
        }
    };

    renderSelected = () => {
        let selectedValue = this.props.placeholder;

        if(this.props.multiple) {
            selectedValue = this.state.selectedOptions.length === 1 ?
                this.state.selectedOptions.length + ' option selected' : this.state.selectedOptions.length > 1 ?
                this.state.selectedOptions.length + ' options selected' : this.props.placeholder;
        } else {
            this.props.options.forEach(option => {
                if(option.value === this.state.selectedOptions[0]) {
                    selectedValue = option.description;
                }
            });
        }


        return selectedValue;
    };

    render() {
        const {label, options} = this.props;

        return (
            <div className={"select-dropdown " + (this.state.isOpen ? 'active' : '')} tabIndex="0"  onBlur={this.closeDropdown}>
                <div className="select-label" onClick={this.handleSelectClick}>{label}</div>
                <div className="selected-option--container" onClick={this.handleSelectClick}><span>{this.renderSelected()}</span><i className="icon-angle-down"></i></div>
                <div className="options--container" style={{height: this.state.height}} ref={this.optionsContainer}>
                    <ul className="options-list">
                        {
                            options.length > 0 && options.map(option => {
                                return (
                                    <li
                                        className={"option " + this.checkIfActive(option.value)}
                                        title={`${option.description}`}
                                        key={option.value}
                                        onClick={() => this.handleOptionClick(option.value)}
                                    >
                                        <span>{this.generateDescription(option.description)}</span>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        );
    }
}

export default Select;
