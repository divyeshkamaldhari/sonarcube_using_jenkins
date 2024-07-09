import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { routeConstant } from '../../constants/routes';
import { BlogList } from '../../intefaces/pages/blog/blog.interface';
import { fetchBlogList } from '../../redux/actions/blog';
import { BlogHeader } from './blog-header';
import { SingleBlogCardView } from './single-blog-card-view';
import './style.scss';
import { Spin } from 'antd';

export function Blog() {
  const { data: blogList = {}, isPending: isPendingBlogList } =
    useQuery<BlogList>({
      queryKey: ['BLOG_LIST'],
      queryFn: fetchBlogList,
    });

  return (
    <div
      style={{ fontSize: '20px', padding: '10px', margin: '20px' }}
      className="blog-main"
    >
      <BlogHeader />
      {isPendingBlogList ? (
        <p>
          <Spin />
        </p>
      ) : (
        <>
          {Object.entries(blogList).length > 0 ? (
            Object.entries(blogList).map(([category, list], inde) => {
              return (
                <div key={inde}>
                  <Link
                    to={`${routeConstant.app.blog.initalBlog.path}/category/${category.toLowerCase()}`}
                  >
                    {category}
                  </Link>
                  {list.length > 0 &&
                    list.map((item, index) => {
                      const {
                        title,
                        excerpt = '',
                        featuredImage,
                        publishDate = '',
                        category,
                        slug = '',
                      } = item;
                      return (
                        <div
                          key={index}
                          style={{ padding: '10px', margin: '10px' }}
                        >
                          <Link
                            to={`${routeConstant.app.blog.initalBlog.path}/${slug.toLowerCase()}`}
                          >
                            <SingleBlogCardView
                              featuredImage={featuredImage}
                              title={title}
                              excerpt={excerpt}
                              category={category}
                              publishDate={publishDate}
                            />
                          </Link>
                        </div>
                      );
                    })}
                </div>
              );
            })
          ) : (
            <div>
              <p>No Blogs to display</p>
            </div>
          )}
        </>
      )}
    </div>
  );
}
