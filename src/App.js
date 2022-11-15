import React from 'react';
import axios from 'axios';

import './App.css';

class App extends React.Component {
    state = {
        advice: '',
    }

    componentDidMount() {
        this.fetchAdvice();
    }

    fetchAdvice = () => {
        axios.get('https://api.adviceslip.com/advice')
            .then((response) => {
                const { advice } = response.data.slip;

                this.setState({ advice });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        return ( <
            div className = "app" >
            <
            div className = "card" >
            <
            h1 className = "heading" > { this.state.advice } < /h1> <
            button className = "button"
            onClick = { this.fetchAdvice } >
            <
            span > GIVE ME ADVICE! < /span> < /
            button > <
            /div> < /
            div >
                <div className={classes.footer}>
          <Typography variant="body1" component="h2">
            Created by
            <a className={classes.link} href="https://www.linkedin.com/in/ajay-dhangar-bb89b4227/"> Ajay Dhangar </a> -
            <a className={classes.link} href="https://www.youtube.com/channel/UCRQBq8dfTEZfIMxmq-Ba9Tw"> Aj Zero Coding</a>
          </Typography>
          <img className={classes.image} src={logo} height="50px" alt="Aj Zero Coding logo" />
        </div>
        );
    }
}

export default App;
