class FirstApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {
            options : []
        };
    }

    handleDeleteOption(optionToRemove) {
        //console.log('hdo',option);
        this.setState((prevState) => ({
            options : prevState.options.filter((option) => optionToRemove !== option)
        }));
    }

    handleDeleteOptions() {
        this.setState(() => ({ options: [] }));
    }

    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option); 
    }

    handleAddOption(option){
        if (!option) {
            return 'Enter valid value';
        }else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists';
        }
        this.setState((prevState) => {
            return {
                options: prevState.options.concat(option)
            };
        });
    }

    render(){
        const title = 'React Application';
        const subtitle = 'Put your life on coding';
        // const options = ['First', 'Second', 'Third'];
        return (
                <div>
                    <Header title={title} subtitle={subtitle} />
                    <Action 
                        hasOptions={this.state.options.length > 0}
                        handlePick={this.handlePick}
                    />
                    <Options 
                        options={this.state.options} 
                        handleDeleteOptions={this.handleDeleteOptions}
                        handleDeleteOption={this.handleDeleteOption}
                    />
                    <AddOption 
                        handleAddOption={this.handleAddOption}
                    />
                </div>
        );
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        );
    }
}

class Action extends React.Component {
    render() {
        return (
            <div>
                <button 
                    onClick={this.props.handlePick}
                    disabled={!this.props.hasOptions}
                >
                    What Should I do?
                </button>
            </div>
        );
    }
}

// class Options extends React.Component {

//     render() {
//         return (
            // <div>
            //     <button onClick={this.props.handleDeleteOptions}>Remove All</button>
            //     {
            //         this.props.options.map((option) => (
            //             <Option
            //                  key={option} 
            //                  optionText={option} 
            //                  handleDeleteOption={this.handleDeleteOption}
            //             /> 
            //         ))
            //     }
                
            // </div>
//         );
//     }
// }
const Options = (props) => {
    return (
        <div>
                <button onClick={props.handleDeleteOptions}>Remove All</button>
                {
                    props.options.map((option) => (
                        <Option
                             key={option} 
                             optionText={option} 
                             handleDeleteOption={props.handleDeleteOption}
                        /> 
                    ))
                }
                
        </div>
    );
};

const Option = (props) => {
    return (
        <div>
            {props.optionText}
            <button 
                onClick={(e) => {
                    props.handleDeleteOption(props.optionText);
                }}
            >
                Remove
            </button> 
        </div>
    );
};

// class Option extends React.Component {
//     render() {
//         return (
//             <div>
//                 {this.props.optionText}
//                 <button onClick={this.handleDeleteOption}>Remove</button>
//             </div>
//         );
//     }
// }

class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        };
    }
    handleAddOption(e) {
        e.preventDefault();

        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);

        this.setState(() => ({ error }));
    }
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p> }
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"></input>
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}

ReactDOM.render(<FirstApp />, document.getElementById('app'));
