import React, {PureComponent, Fragment} from "react";
import PropTypes from "prop-types";


export default class AudioPlayer extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      isPlaying: props.isPlaying
    };
  }

  componentDidMount() {
    const {src} = this.props;

    this.audio = new Audio(src);

    this.audio.oncanplaythrough = () => this.setState({
      isLoading: false
    });

    this.audio.onplay = () => {
      this.setState({
        isPlaying: true
      });
    };

    this.audio.onpause = () => this.setState({
      isPlaying: false
    });
  }

  componentWillUnmount() {
    this.audio.oncanplaythrough = null;
    this.audio.onplay = null;
    this.audio.onpause = null;
    this.audio = null;
  }

  render() {
    const {isLoading, isPlaying} = this.state;

    return (
      <Fragment>
        <button
          className={`track__button track__button--${isPlaying ? `pause` : `play`}`}
          type="button"
          disanled={isLoading}
          onClick={() => this.setState({isPlaying: !this.state.isPlaying})} />

        <div className="track__status">
          <audio />
        </div>
      </Fragment>
    );
  }

  componentDidUpdate() {
    if (this.state.isPlaying) {
      this.audio.play();
    } else {
      this.audio.pause();
    }
  }


}

AudioPlayer.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  src: PropTypes.string.isRequired
};
