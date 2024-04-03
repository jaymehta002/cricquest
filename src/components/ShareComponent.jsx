import PropTypes from 'prop-types';

import { FacebookShareButton, TwitterShareButton, WhatsappShareButton, RedditShareButton } from 'react-share';
import { FacebookIcon, TwitterIcon, WhatsappIcon, RedditIcon } from 'react-share';

const ShareButtons = ({ text, url }) => {
  return (
    <div>
      <FacebookShareButton url={url} quote={text}>
        <FacebookIcon size={32} round />
      </FacebookShareButton>

      <TwitterShareButton url={url} title={text}>
        <TwitterIcon size={32} round />
      </TwitterShareButton>

      <WhatsappShareButton url={url} title={text}>
        <WhatsappIcon size={32} round />
      </WhatsappShareButton>

      <RedditShareButton url={url} title={text}>
        <RedditIcon size={32} round />
      </RedditShareButton>
    </div>
  );
};

ShareButtons.propTypes = {
  text: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};


export default ShareButtons;
