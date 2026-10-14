import { Link } from 'react-router-dom'
import { posts } from '../pages/BlogPage.jsx'

export default function LatestBlog() {
  return (
    <section className="latest-blog" aria-labelledby="latest-blog-title">
      <div className="wrap">
        <div className="latest-blog-head">
          <div>
            <span className="kicker reveal">From the blog</span>
            <h2 className="h2 reveal" id="latest-blog-title">Ideas you can put to work</h2>
          </div>
          <Link className="latest-blog-more reveal" to="/blog">More from the blog <span aria-hidden="true">→</span></Link>
        </div>
        <div className="blog-grid latest-blog-grid reveal-stagger">
          {posts.slice(0, 3).map((post) => (
            <article key={post.title} className="blog-card reveal-flip">
              <div className="blog-img">
                {post.image && <img className="blog-photo" src={post.image} alt="" loading="lazy" decoding="async" />}
                <span className="b-tag">{post.tag}</span>
                {!post.image && <div className="blog-ic">{post.icon}</div>}
              </div>
              <div className="blog-body">
                <div className="blog-meta"><span><b>{post.date}</b></span><span>·</span><span>{post.read} read</span></div>
                <h3>{post.title}</h3>
                <p>{post.text}</p>
                <Link className="blog-read" to="/blog">Read on the blog →</Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
