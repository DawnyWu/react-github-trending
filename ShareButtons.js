import React, { PropTypes, Component } from 'react'
import _ from 'lodash'
// var css = require("./share.scss");
import css from './css/share.scss'

const propTypes = {
  url: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  sites: PropTypes.array,
};

function getMetaContentByName(name) {
  return (document.getElementsByName(name)[0] || 0).content;
}

// var site = getMetaContentByName('site') || getMetaContentByName('Site') || document.title;
// var title = getMetaContentByName('title') || getMetaContentByName('Title') || document.title;
// var description = getMetaContentByName('description') || getMetaContentByName('Description') || '';
// var image = (document.images[0] || 0).src || ''
var site = "baidu.com"
var title = "My_Title"
var description = "My_Description"
var image = ""

const defaultProps = {
  url: 'baidu.com',
  origin: 'baidu.com',
  source: site,
  title: title,
  description: description,
  image: image,
  site: "baidu.com",
  sites: ["douban", "qq"],
};



class ShareButtons extends React.Component {

  render(){
    var url = this.props.url
    var title = this.props.title
    var description = this.props.description
    var image = this.props.image
    var site = this.props.site
    var sites = this.props.sites
    var origin = this.props.origin
    var summary = this.props.summary
    var source = this.props.source

    //  TODO: params需要处理，My Title有空格的这种不行的
    const templates = {
      qzone: `http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=${url}&title=${title}&desc=${description}&summary=${summary}&site=${source}`,
      qq: `http://connect.qq.com/widget/shareqq/index.html?url=${url}&title=${title}&source=${source}&desc=${description}`,
      tencent: `http://share.v.t.qq.com/index.php?c=share&a=index&title=${title}&url=${url}&pic=${image}`,
      weibo: `http://service.weibo.com/share/share.php?url=${url}&title=${title}&pic=${image}`,
      wechat: `javascript:`,
      douban: `http://shuo.douban.com/!service/share?href=${url}&name=${title}&text=${description}&image=${image}&starid=0&aid=0&style=11`,
      diandian: `http://www.diandian.com/share?lo=${url}&ti=${title}&type=link`,
      linkedin: `http://www.linkedin.com/shareArticle?mini=true&ro=true&title=${title}&url=${url}&summary=${summary}&source=${source}&armin=armin`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      twitter: `https://twitter.com/intent/tweet?text=${title}&url=${url}&via=${origin}`,
      google: `https://plus.google.com/share?url=${url}`
    };

    var href = `http://shuo.douban.com/!service/share?href=${url}&name=${title}&text=${description}&image=${image}&starid=0&aid=0&style=11`
    console.log(href)
    
    
    var html = _.map(sites, function (site) {
      var classNmae = `fa fa-3x fa-${site}` 
      return (<div className="social-share"><a className="icon-tencent" href={templates[site]} target="_blank">{site}</a></div>
        )
    })

    return(
      <div>
        {html}
      </div>
    )
  };
};

ShareButtons.propTypes = propTypes;
ShareButtons.defaultProps = defaultProps;

export default ShareButtons;