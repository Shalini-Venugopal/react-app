class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>React Application</h1>
                <h2>Put your life on coding</h2>
            </div>
        );
    }
}

class Action extends React.Component {
    render() {
        return (
            <div>
                <button>What Should I do?</button>
            </div>
        );
    }
}

class Options extends React.Component {
    render() {
        return (
            <div>
                Options Component here.
            </div>
        );
    }
}

class AddOption extends React.Component {
    render() {
        return (
            <div>
                AddOption Component here.
            </div>
        );
    }
}

const jsx = (
    <div>
        <Header />
        <Action />
        <Options />
        <AddOption />
    </div>
);

ReactDOM.render(jsx, document.getElementById('app'));
