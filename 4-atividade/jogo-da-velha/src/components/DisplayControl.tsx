class DisplayControl extends React.Component {
    constructor(props) {
        super(props);
        this.handleStart = this.handleStart.bind(this);
        this.handleEnd = this.handleEnd.bind(this);
        this.state = {selected: false};
    }

    handleStart() {
        this.setState({selected: true});
    }

    handleEnd() {
        this.setState({selected: false});
    }

    render() {
        const selected = this.state.selected;
        let display;
        if (selected) {
            //display = <GameMode/>;
        }
        else {
            //display = <InGame/>;
        }
        return (
            <div>
                {display}
            </div>
        )
    }


}