import { Component } from "react";

const bgMusic = "https://www.youtube.com/clip/UgkxJg-t4bFY2LuQx7w459hI4zUaUA_ar4jR";

class MusicTheme extends Component {
    render() {
    return (
        <video controls
        src={bgMusic}>

        </video>
    )
  }
}

export default MusicTheme;